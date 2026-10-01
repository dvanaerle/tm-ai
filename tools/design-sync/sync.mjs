#!/usr/bin/env node
/**
 * Regenerates the tuinmaximaal-design skill's DESIGN.md front matter, the generated
 * regions of its prose, the prototype Tailwind config and the prototype skeleton's
 * component CSS from the Valantic `base` theme, copies the theme logo, re-assembles the
 * approved examples, then checks the prose of DESIGN.md and its component files for drift and lints DESIGN.md.
 *
 * Usage: npm run design:sync -- [themePath] [--skill-dir <dir>]
 *
 * Read-only towards the theme repo: it requires the theme's Tailwind config and
 * reads component CSS. Prose outside the `design-sync` regions is kept as written,
 * but every value it quotes is checked against the theme.
 */
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { lint } from '@google/design.md/linter';

const workspace = resolve(import.meta.dirname, '../..');
const defaultThemePath = resolve(workspace, '../../gitlab/devdva02/app/design/frontend/Valantic/base');

const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: { 'skill-dir': { type: 'string' } },
});

const themePath = resolve(positionals[0] ?? process.env.TM_THEME_PATH ?? defaultThemePath);
const skillDir = resolve(values['skill-dir'] ?? join(workspace, 'skills/tuinmaximaal-design'));
const tailwindDir = join(themePath, 'web/tailwind');

const configPath = join(tailwindDir, 'tailwind.config.js');
const theme = createRequire(configPath)(configPath).theme.extend;
const css = (file) => readFileSync(join(tailwindDir, 'components', file), 'utf8');

// --- Theme lookups -------------------------------------------------------------

/** Flattens `{ primary: { green: '#003017' } }` into `{ 'primary-green': '#003017' }`; DEFAULT maps to the parent name. */
const flatten = (object, prefix) => Object.entries(object).reduce((flat, [key, value]) => {
    const name = key === 'DEFAULT' ? prefix : `${prefix}-${key}`;
    return typeof value === 'object'
        ? { ...flat, ...flatten(value, name) }
        : { ...flat, [name]: value };
}, {});

const normalizeHex = (value) => value.toUpperCase().replace(/^#(\w)(\w)(\w)$/, '#$1$1$2$2$3$3');

const colors = flatten(theme.colors.tmx, 'tmx');

// --- Semantic colours ------------------------------------------------------------

/**
 * Figma "Tuinmaximaal for Claude" `6767:34313`: the semantic colour layer prototypes build with. Each token names the
 * theme colour Figma matches; `link`, `link-hover` and `ring` are Figma values the theme has no colour for yet
 * (DESIGN.md → Known exceptions → Semantic colours). Figma's `danger` is the theme's `error` status.
 */
const statusTokens = { warning: 'warning', danger: 'error', success: 'success', info: 'info' };
const semanticSource = {
    primary: 'tmx-primary-green',
    'primary-dark': 'tmx-primary-darkGreen',
    'on-primary': 'tmx-neutral-white',
    'secondary-subtle': 'tmx-primary-lighterGreenSubtle',
    secondary: 'tmx-primary-lighterGreen',
    'secondary-strong': 'tmx-primary-lightGreen',
    'on-secondary': 'tmx-neutral-white',
    accent: 'tmx-primary-orange',
    'on-accent': 'tmx-neutral-white',
    surface: 'tmx-secondary-beige',
    'surface-raised': 'tmx-secondary-sand',
    'surface-strong': 'tmx-secondary-bone',
    'on-surface': 'tmx-primary-green',
    text: 'tmx-primary-green',
    'text-muted': 'tmx-neutral-grey',
    link: '#5C6B08',
    'link-hover': '#4B570A',
    ring: '#A1A1A1',
    border: 'tmx-neutral-lightGrey',
    'border-strong': 'tmx-neutral-grey',
    ...Object.fromEntries(Object.entries(statusTokens).flatMap(([token, status]) => [
        [`${token}-subtle`, `tmx-status-${status}-subtle`],
        [token, `tmx-status-${status}`],
        [`${token}-text`, `tmx-status-${status}-text`],
        [`on-${token}-subtle`, `tmx-status-${status}-strong`],
    ])),
};
const semanticColors = Object.fromEntries(Object.entries(semanticSource).map(([token, source]) => {
    const value = source.startsWith('#') ? source : colors[source];
    if (!value) throw new Error(`Semantic colour "${token}" points at "${source}", which the theme config lacks`);
    return [token, normalizeHex(value)];
}));

// Tailwind v3's default colours the house style uses where the semantic layer has no token (DESIGN.md → Colors).
const tailwindDefaults = {
    white: '#FFFFFF',
    'gray-50': '#F9FAFB',
    'gray-900': '#111827',
    'yellow-400': '#FACC15',
    'neutral-100': '#F5F5F5',
    'neutral-500': '#737373',
    'neutral-600': '#525252',
    'neutral-700': '#404040',
    'neutral-900': '#171717',
    'neutral-950': '#0A0A0A',
    'stone-400': '#A8A29E',
    'zinc-700': '#3F3F46',
};

// Where tokens share a hex (#003017 is primary, on-surface and text), the utility decides which one a theme value means.
// The theme's white stays Tailwind's `white`: the `on-*` tokens are for the classes prototypes write.
const textToken = /^(text|link|on-)|-text$/;
const tokenPreference = new Map([[theme.textColor, textToken], [theme.borderColor, /^border/], [theme.ringColor, /^ring/]]);
const semanticByHex = (hex, preference) => {
    if (normalizeHex(hex) === '#FFFFFF') return undefined;
    const tokens = Object.keys(semanticColors).filter((token) => semanticColors[token] === normalizeHex(hex));
    if (preference === textToken) return tokens.find((token) => token.startsWith('text')) ?? tokens.find((token) => textToken.test(token)) ?? tokens[0];
    return tokens.find((token) => (preference ? preference.test(token) : !textToken.test(token))) ?? tokens[0];
};

/** `btn-primary-hover` in `backgroundColor` → `#6D8005`, following DEFAULT for group endpoints. */
const lookupColor = (map, path) => {
    const node = path.split('-').reduce((current, key) => current?.[key], map);
    return typeof node === 'object' ? node?.DEFAULT : node;
};

const colorRef = (map, path) => {
    if (semanticColors[path] || tailwindDefaults[path]) return `{colors.${path}}`;
    const value = semanticColors[path] ?? tailwindDefaults[path] ?? lookupColor(map, path);
    if (!value) throw new Error(`Colour "${path}" not found in the theme config`);
    if (value === 'transparent') return value;
    const name = semanticByHex(value, tokenPreference.get(map))
        ?? Object.keys(tailwindDefaults).find((key) => tailwindDefaults[key] === normalizeHex(value));
    if (!name) throw new Error(`Colour "${path}" (${value}) is neither a semantic colour nor a listed Tailwind default`);
    return `{colors.${name}}`;
};

const rem = (value) => `${value}rem`;
const spacingValue = (key) => {
    const value = theme.spacing[key];
    if (!value) throw new Error(`Spacing "${key}" not found in the theme config`);
    return value;
};
const spacingRem = (key) => parseFloat(spacingValue(key));

// --- Component CSS -------------------------------------------------------------

/** Returns the body of the first `selector { … }` block in `source`, braces balanced. */
const block = (source, selector) => {
    const match = new RegExp(`${selector}\\s*\\{`, 'm').exec(source);
    if (!match) throw new Error(`Selector ${selector} not found in theme CSS`);
    let depth = 1;
    let index = match.index + match[0].length;
    const start = index;
    while (depth > 0) {
        if (source[index] === '{') depth++;
        if (source[index] === '}') depth--;
        index++;
    }
    return source.slice(start, index - 1);
};

/** Classes applied by a block itself, including `& { … }` blocks but not other nested selectors. */
const applied = (body) => {
    let own = '';
    let inner = '';
    let keep = false;
    let depth = 0;
    for (const char of body) {
        if (depth === 0) {
            if (char !== '{') {
                own += char;
                continue;
            }
            const statementEnd = own.lastIndexOf(';') + 1;
            keep = own.slice(statementEnd).trim() === '&';
            own = own.slice(0, statementEnd);
            inner = '';
            depth = 1;
            continue;
        }
        if (char === '{') depth++;
        if (char === '}') depth--;
        if (depth > 0) inner += char;
        else if (keep) own += inner;
    }
    return [...own.matchAll(/@apply([^;]+);/g)].flatMap(([, list]) => list.trim().split(/\s+/));
};

const classesOf = (source, ...selectors) => applied(selectors.reduce(block, source));

// --- Class → token translation -----------------------------------------------

const weights = { normal: 400, medium: 500, semibold: 600, bold: 700, black: 900 };

const typographyOf = (classes) => {
    const typography = { fontFamily: 'ArticulatCF' };
    for (const name of classes) {
        const size = name.match(/^text-(base|\d+(?:\.\d+)?)$/)?.[1];
        if (size && theme.fontSize[size]) {
            const [fontSize, lineHeight] = [].concat(theme.fontSize[size]);
            // A quoted unitless lineHeight survives the linter parser; a bare YAML number is dropped
            Object.assign(typography, { fontSize, lineHeight: String(lineHeight) });
        }
        const leading = name.match(/^leading-(.+)$/)?.[1];
        if (leading && theme.lineHeight[leading]) typography.lineHeight = theme.lineHeight[leading];
        const weight = weights[name.match(/^font-(\w+)$/)?.[1]];
        if (weight) typography.fontWeight = weight;
        if (name === 'uppercase') typography.textTransform = 'uppercase';
    }
    delete typography.textTransform; // not a DESIGN.md typography property; the prose documents it
    return typography;
};

/**
 * Translates theme utility classes into a DESIGN.md component plus optional `-border` and `-ring`
 * companions, since the spec has no border or ring properties: their backgroundColor is the stroke
 * colour, `size` the stroke width (`height` for a bottom-only border).
 */
const componentOf = (classes) => {
    const component = {};
    const border = {};
    const ring = {};
    const padding = { t: 0, r: 0, b: 0, l: 0 };
    let hasPadding = false;

    for (const name of classes) {
        let match;
        if ((match = name.match(/^bg-(.+)$/)) && !name.startsWith('bg-none')) {
            const background = colorRef(theme.backgroundColor, match[1]);
            if (background !== 'transparent') component.backgroundColor = background;
        } else if ((match = name.match(/^text-(.+)$/)) && !theme.fontSize[match[1]] && match[1] !== 'base' && !['center', 'left', 'right'].includes(match[1])) {
            component.textColor = colorRef(theme.textColor, match[1]);
        } else if (name === 'border') {
            border.size = '1px';
        } else if ((match = name.match(/^border-b-(\d+)$/))) {
            border.height = `${match[1]}px`;
        } else if ((match = name.match(/^border-(.+)$/)) && match[1] !== 'transparent') {
            border.backgroundColor = colorRef(theme.borderColor, match[1]);
        } else if ((match = name.match(/^ring-(\d+)$/))) {
            ring.size = `${match[1]}px`;
        } else if ((match = name.match(/^ring-([^/]+)(?:\/\d+)?$/)) && !name.startsWith('ring-offset')) {
            ring.backgroundColor = colorRef(theme.ringColor, match[1]);
        } else if ((match = name.match(/^size-(.+)$/)) && theme.spacing[match[1]]) {
            component.size = theme.spacing[match[1]];
        } else if ((match = name.match(/^rounded-(.+)$/)) && theme.borderRadius[match[1]]) {
            component.rounded = `{rounded.${match[1]}}`;
        } else if ((match = name.match(/^p([xytrbl]?)-(.+)$/)) && theme.spacing[match[2]]) {
            hasPadding = true;
            const sides = { '': 'trbl', x: 'rl', y: 'tb' }[match[1]] ?? match[1];
            for (const side of sides) padding[side] = spacingRem(match[2]);
        }
    }

    if (hasPadding) {
        const { t, r, b, l } = padding;
        const parts = t === b && r === l ? (t === r ? [t] : [t, r]) : r === l ? [t, r, b] : [t, r, b, l];
        component.padding = parts.map((value) => (value === 0 ? '0px' : rem(value))).join(' ');
    }

    return {
        component,
        border: border.backgroundColor ? border : null,
        ring: ring.backgroundColor ? ring : null,
    };
};

// --- Tokens --------------------------------------------------------------------

const typographyCss = readFileSync(join(tailwindDir, 'components/typography.css'), 'utf8');
const buttonCss = css('button.css');
const formsCss = css('forms.css');
const messagesCss = css('messages.css');
const pricesCss = css('product-prices.css');

const typography = {
    ...Object.fromEntries([1, 2, 3, 4, 5, 6].map((level) => [`h${level}`, typographyOf(classesOf(typographyCss, `\\.heading-${level}`))])),
    'body-md': typographyOf(['text-base', 'font-normal']),
    'paragraph-sm': typographyOf(classesOf(typographyCss, '\\.paragraph-sm')),
    'paragraph-esm': typographyOf(classesOf(typographyCss, '\\.paragraph-esm')),
    'paragraph-tiny': typographyOf(classesOf(typographyCss, '\\.paragraph-tiny')),
    'paragraph-highlight': typographyOf(['text-base', ...classesOf(typographyCss, '\\.paragraph-highlight')]),
    // Figma 1286:12548 sets the default (XL) label in bold; the theme's `.btn` is semibold
    'button-label': typographyOf([...classesOf(buttonCss, '\\.btn'), 'leading-6', 'font-bold']),
    'form-label': typographyOf(classesOf(formsCss, '\\.field', '& > label, & > \\.label')),
    // Figma's fields set the value on a 24px line; the theme's is 22px (components/forms.md → Known exceptions)
    'form-input': typographyOf([...classesOf(formsCss, '^\\.form-textarea'), 'leading-6']),
    message: typographyOf(classesOf(messagesCss, '\\.message')),
    price: typographyOf(['text-base', ...classesOf(pricesCss, '\\.price-container', '\\.price')]),
    // The two sizes no role covers: the product-tile name and "vanaf" in the image-tile price chip
    ...Object.fromEntries(['3.75', '4.75'].map((key) => {
        if (!theme.fontSize[key]) throw new Error(`Font size "${key}" not found in the theme config`);
        return [`text-${key}`, typographyOf([`text-${key}`])];
    })),
};

// Scale keys are Maps: an object would list integer keys first (`1`, `2`, `12`, then `1.5`).
// Only the corners the theme uses, plus Tailwind's own `full`; the theme's tailwind.config.js stays the full scale.
const rounded = new Map([
    ...['1', '1.5', '2'].map((key) => {
        const value = theme.borderRadius[key];
        if (!value) throw new Error(`Corner "${key}" not found in the theme config`);
        return [key, value.replace(/^(\d+)\.0rem$/, '$1rem')];
    }),
    ['full', '9999px'],
]);

// Only the rhythm steps the prose recommends; the prose states the rule for the rest of the generated scale.
const spacing = new Map(['1', '1.5', '2', '3', '4', '6', '8', '12'].map((key) => [key, spacingValue(key)]));

// --- Components ------------------------------------------------------------------

const components = {};
const add = (name, classes, extra = {}) => {
    const { component, border, ring } = componentOf(classes);
    if (Object.keys(component).length > 0) components[name] = { ...component, ...extra };
    if (border) components[`${name}-border`] = border;
    if (ring) components[`${name}-ring`] = ring;
};

const btn = classesOf(buttonCss, '\\.btn').filter((name) => !name.startsWith('text-white'));
const buttonLabel = { typography: '{typography.button-label}' };
for (const variant of ['primary', 'secondary']) {
    add(`button-${variant}`, [...btn, ...classesOf(buttonCss, `\\.btn-${variant}`)], buttonLabel);
    add(`button-${variant}-hover`, classesOf(buttonCss, `\\.btn-${variant}`, '&:hover[^{]*'));
}
// Figma 1286:12715 redraws the tertiary button as a grey outline and adds a transparent one; the theme's tertiary is a link (Known exceptions → Buttons)
add('button-tertiary', ['border', 'border-border', 'text-text-muted', 'rounded-1', 'px-6', 'py-3'], buttonLabel);
add('button-tertiary-hover', ['bg-white', 'border', 'border-border', 'text-text-muted']);
add('button-tertiary-focus', ['bg-white', 'border', 'border-border-strong', 'text-text-muted', 'ring-4', 'ring-ring']);
add('button-transparent', ['text-link', 'rounded-1', 'px-6', 'py-3'], buttonLabel);
add('button-transparent-hover', ['text-link-hover']);

add('form-input', classesOf(formsCss, '^\\.form-textarea'), { typography: '{typography.form-input}' });
add('form-input-hover', classesOf(formsCss, '^\\.form-textarea', '&:hover[^{]*'));
// Figma rings a focused field in `ring` at 50%; the theme's is `text-muted` (components/forms.md → Known exceptions)
add('form-input-focus', classesOf(formsCss, '^\\.form-textarea', '&:focus').map((name) => (/^ring-(?!\d|offset)/.test(name) ? 'ring-ring' : name)));
add('form-input-error', classesOf(formsCss, '^\\.form-textarea', '\\.field-error &'));
add('form-input-success', classesOf(formsCss, '^\\.form-textarea', '\\.field-success &'));
add('form-label', classesOf(formsCss, '\\.field', '& > label, & > \\.label'), { typography: '{typography.form-label}' });
add('form-error-message', classesOf(formsCss, '\\.field', '& > \\.messages'));
add('form-choice', classesOf(formsCss, '\\.filter-row', '& > input'));
add('form-choice-checked', classesOf(formsCss, '\\.filter-row', '& > input', '&:checked'));

// Figma 6814:5244 pads a message `p-4` and fills the notice `gray-50`; the theme's are `p-3` and `neutral-100` (components/messages.md → Known exceptions)
const message = [...classesOf(messagesCss, '\\.message').filter((name) => !/^p[xytrbl]?-/.test(name)), 'p-4'];
add('message-notice', [...message, 'bg-gray-50'], { typography: '{typography.message}' });
for (const status of ['error', 'success', 'info', 'warning']) {
    add(`message-${status}`, [...message, ...classesOf(messagesCss, '\\.message', `&\\.${status}`)], { typography: '{typography.message}' });
    add(`message-${status}-icon`, classesOf(messagesCss, '\\.message', `&\\.${status}`, '& > svg'));
}
for (const token of Object.keys(statusTokens)) {
    add(`field-hint-${token}`, [`text-${token}-text`]);
    add(`status-${token}-accent`, [`text-${token}`]);
}

add('heading-highlight', classesOf(typographyCss, '\\.heading-highlight'));
add('paragraph-highlight', classesOf(typographyCss, '\\.paragraph-highlight'), { typography: '{typography.paragraph-highlight}' });
add('price-box', classesOf(pricesCss, '\\.price-container', '\\.price'), { typography: '{typography.price}' });

// Magento_Catalog/templates/product/list/item.phtml styles the tile with utility classes in the markup,
// so it has no component CSS to read; this is the one place that mirrors it.
const productTile = {
    '.product-tile': ['flex', 'flex-col', 'h-full', 'border', 'border-productTile', 'rounded-2', 'overflow-hidden', 'transition-colors', 'hover:border-productTile-hover', 'hover:shadow-1px'],
    '.product-tile-info': ['bg-white', 'flex', 'flex-col', 'grow', 'py-3', 'px-4'],
    '.product-tile-name': ['font-semibold', 'text-3.75', 'lg:text-base', 'line-clamp-3'],
};
const hoverOf = (classes) => classes.filter((name) => name.startsWith('hover:')).map((name) => name.slice('hover:'.length));

add('product-tile', [...productTile['.product-tile'], ...productTile['.product-tile-info'], 'text-body']);
add('product-tile-hover', ['border', ...hoverOf(productTile['.product-tile'])]);
// Cheatsheet (selected card)
add('selected-card', ['border', 'border-secondary', 'bg-secondary-subtle']);

add('page', ['bg-white', 'text-text'], { typography: '{typography.body-md}' });
add('link', ['text-link']);
add('link-hover', ['text-link-hover']);
// Blog tile (components/content-patterns.md)
add('pill', ['bg-gray-50', 'text-text']);
// The box decision's surface box and its stronger step (DESIGN.md → Elevation & Depth)
add('surface-box', ['bg-surface', 'text-on-surface', 'rounded-2']);
add('surface-box-strong', ['bg-surface-raised', 'text-on-surface', 'rounded-2']);
// Used at 60% opacity in a gradient behind the image tile's white text (components/content-patterns.md)
add('image-tile-scrim', ['bg-gray-900']);
// The prototype skeleton's own patterns that carry a colour no theme component does (DESIGN.md → Components)
add('split-image-quote-mark', ['text-surface-strong']);
add('modal-icon', ['text-yellow-400']);
add('message-outline', ['text-neutral-700', 'border', 'border-border']);
// The page shell's footer divider (assets/page-shell.html)
add('shell-footer-divider', ['border', 'border-primary-dark']);


// --- DESIGN.md -------------------------------------------------------------------

const frontMatter = {
    version: 'alpha',
    name: 'Tuinmaximaal',
    description: 'Generated from the Valantic base theme by tools/design-sync/sync.mjs. Do not edit the front matter by hand.',
    // The whole semantic layer, plus the Tailwind defaults a component uses; the prose names the rest (DESIGN.md → Colors)
    colors: { ...semanticColors, ...Object.fromEntries(Object.entries(tailwindDefaults).filter(([name]) => JSON.stringify(components).includes(`{colors.${name}}`))) },
    typography,
    rounded,
    spacing,
    components,
};

// JSON scalars are valid YAML, so keys and values are emitted JSON-quoted.
const toYaml = (value, indent = '') => (value instanceof Map ? [...value] : Object.entries(value)).map(([key, item]) =>
    typeof item === 'object'
        ? `${indent}${JSON.stringify(key)}:\n${toYaml(item, `${indent}  `)}`
        : `${indent}${JSON.stringify(key)}: ${JSON.stringify(item)}`,
).join('\n');

/** Replaces the content between `<!-- design-sync:name -->` and `<!-- /design-sync:name -->`. */
const replaceRegion = (text, name, content, { inline = false, open = `<!-- design-sync:${name} -->`, close = `<!-- /design-sync:${name} -->` } = {}) => {
    const start = text.indexOf(open);
    const end = text.indexOf(close);
    if (start < 0 || end < start) throw new Error(`Region ${open} … ${close} not found`);
    const gap = inline ? '' : '\n';
    return `${text.slice(0, start + open.length)}${gap}${content}${gap}${text.slice(end)}`;
};

const px = (value) => `${parseFloat(value) * 16}px`;

const headingTable = [
    '| Level | Class | Size / line-height | Weight |',
    '|---|---|---|---|',
    ...[1, 2, 3, 4, 5, 6].map((level) => {
        const size = classesOf(typographyCss, `\\.heading-${level}`).find((name) => theme.fontSize[name.slice('text-'.length)]);
        const { fontSize, lineHeight, fontWeight } = typography[`h${level}`];
        return `| h${level} | \`.heading-${level}\` → \`${size}\` | ${px(fontSize)} / ${lineHeight} | ${fontWeight} |`;
    }),
].join('\n');

const fontSizeList = Object.keys(theme.fontSize)
    .filter((key) => key !== 'base')
    .sort((a, b) => parseFloat(a) - parseFloat(b))
    .map((key) => {
        const [fontSize, lineHeight] = [].concat(theme.fontSize[key]);
        return `\`text-${key}\` ${px(fontSize)}${lineHeight === '1' ? ' (line-height 1)' : ''}`;
    })
    .join(', ');

const designPath = join(skillDir, 'DESIGN.md');
let body = readFileSync(designPath, 'utf8').replace(/\r\n/g, '\n').replace(/^---\n[\s\S]*?\n---\n/, '');
body = replaceRegion(body, 'headings', headingTable);
body = replaceRegion(body, 'font-sizes', fontSizeList, { inline: true });
const designMd = `---\n${toYaml(frontMatter)}\n---\n${body}`;
writeFileSync(designPath, designMd);

// --- Prose drift -----------------------------------------------------------------

/** Values the prose quotes by hand, checked against the theme so a theme change can't leave stale guidance behind. */
const drift = [];
const hexes = new Set([...Object.values(colors), ...Object.values(semanticColors), ...Object.values(tailwindDefaults)].map(normalizeHex));
const pixelsOf = (name) => {
    let match;
    if ((match = name.match(/^text-(.+)$/)) && theme.fontSize[match[1]]) return px([].concat(theme.fontSize[match[1]])[0]);
    if ((match = name.match(/^rounded-(.+)$/)) && theme.borderRadius[match[1]]) return px(theme.borderRadius[match[1]]);
    if ((match = name.match(/^-?(?:p[xytrbl]?|m[xytrbl]?|gap(?:-[xy])?|size|[wh])-(.+)$/)) && theme.spacing[match[1]]) return px(theme.spacing[match[1]]);
    return null;
};

const checkProse = (file, prose, startLine) => {
    for (const [line, number] of prose.split('\n').map((text, index) => [text, startLine + index])) {
        // `text-[#123456]` illustrates a forbidden arbitrary value, not a colour
        for (const [hex] of line.matchAll(/(?<!\[)(?:#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3})\b/g)) {
            if (!hexes.has(normalizeHex(hex))) drift.push(`${file} line ${number}: ${hex} is not a theme colour`);
        }
        for (const [, name, hex] of line.matchAll(/`([\w-]+)`\s*(#[0-9A-Fa-f]{3,6})\b/g)) {
            const expected = semanticColors[name] ?? tailwindDefaults[name] ?? colors[name];
            if (expected && normalizeHex(expected) !== normalizeHex(hex)) drift.push(`${file} line ${number}: ${name} is ${expected}, not ${hex}`);
        }
        for (const [, name, value] of line.matchAll(/`([\w.-]+)`\s*(?:\(|=\s*)?(\d+(?:\.\d+)?px)/g)) {
            const actual = pixelsOf(name);
            if (actual && actual !== value) drift.push(`${file} line ${number}: ${name} is ${actual} in the theme, not ${value}`);
        }
    }
};

const bodyOffset = designMd.length - body.length;
checkProse('DESIGN.md', body, designMd.slice(0, bodyOffset).split('\n').length);
// The component files DESIGN.md → Components indexes quote theme values too
const componentsDir = join(skillDir, 'components');
for (const file of (existsSync(componentsDir) ? readdirSync(componentsDir) : []).filter((name) => name.endsWith('.md'))) {
    checkProse(`components/${file}`, readFileSync(join(componentsDir, file), 'utf8').replace(/\r\n/g, '\n'), 1);
}
for (const message of drift) console.log(`error   prose: ${message}`);

// --- Prototype Tailwind config ---------------------------------------------------

/** Drops the theme's empty placeholder values (e.g. `primary.DEFAULT: ''`), which would emit broken classes. */
const withoutEmpty = (object) => Object.fromEntries(Object.entries(object)
    .map(([key, value]) => [key, typeof value === 'object' && !Array.isArray(value) ? withoutEmpty(value) : value])
    .filter(([, value]) => value !== '' && !(typeof value === 'object' && Object.keys(value).length === 0)));

const withoutImages = (object) => Object.fromEntries(Object.entries(object).filter(([, value]) => !String(value).includes('url(')));

// Each semantic token is a CSS variable (the skeleton's `:root` block), so one edit there re-skins a prototype.
const colorVariable = (token) => `rgb(var(--color-${token}) / <alpha-value>)`;
const rgbChannels = (hex) => [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16)).join(' ');

/** Figma's flat token names as Tailwind colours: `surface-raised` nests under `surface`, so `bg-surface` and `bg-surface-raised` both exist. */
const semanticTailwind = {};
for (const token of Object.keys(semanticColors)) {
    const [group, ...rest] = token.split('-');
    const hasChildren = Object.keys(semanticColors).some((other) => other.startsWith(`${token}-`));
    if (!token.startsWith('on-') && rest.length > 0 && semanticColors[group]) (semanticTailwind[group] ??= {})[rest.join('-')] = colorVariable(token);
    else if (hasChildren) (semanticTailwind[token] ??= {}).DEFAULT = colorVariable(token);
    else semanticTailwind[token] = colorVariable(token);
}

/** A theme colour map with every semantic hex swapped for its variable, so the theme's own classes (`.btn-primary`, fields, the shell) follow a re-skin too. */
const throughVariables = (object, preference) => Object.fromEntries(Object.entries(object).map(([key, value]) => {
    if (typeof value === 'object') return [key, throughVariables(value, preference)];
    const token = typeof value === 'string' && /^#[0-9A-Fa-f]{3,6}$/.test(value) ? semanticByHex(value, preference) : undefined;
    return [key, token ? colorVariable(token) : value];
}));

const prototypeTheme = withoutEmpty({
    screens: theme.screens,
    container: theme.container,
    spacing: theme.spacing,
    fontFamily: { body: ['ArticulatCF', 'system-ui', 'sans-serif'] },
    fontSize: theme.fontSize,
    letterSpacing: theme.letterSpacing,
    lineHeight: theme.lineHeight,
    borderRadius: theme.borderRadius,
    colors: { ...throughVariables(theme.colors), ...semanticTailwind },
    // The theme's `text-link` is green with a lime hover; Figma's link tokens replace both (Known exceptions → Semantic colours)
    textColor: { ...throughVariables(theme.textColor, textToken), link: { ...throughVariables(theme.textColor.link, textToken), DEFAULT: colorVariable('link'), hover: colorVariable('link-hover') } },
    backgroundColor: throughVariables(theme.backgroundColor),
    borderColor: throughVariables(theme.borderColor, /^border/),
    ringColor: throughVariables(theme.ringColor, /^ring/),
    boxShadow: theme.boxShadow,
    backgroundImage: withoutImages(theme.backgroundImage),
    content: withoutImages(theme.content),
    transitionProperty: theme.transitionProperty,
    minHeight: theme.minHeight,
    maxHeight: theme.maxHeight,
    aria: theme.aria,
});

const tailwindPath = join(skillDir, 'assets/tailwind.config.js');
mkdirSync(dirname(tailwindPath), { recursive: true });
writeFileSync(tailwindPath, [
    '// Generated from the Valantic base theme by tools/design-sync/sync.mjs. Do not edit by hand.',
    '// Load after https://cdn.tailwindcss.com?plugins=forms,typography,container-queries',
    `tailwind.config = ${JSON.stringify({ theme: { extend: prototypeTheme } }, null, 2)};`,
    '',
].join('\n'));

// --- Logo ------------------------------------------------------------------------

// Prototypes inline this file, so they stay self-contained on every surface.
writeFileSync(join(skillDir, 'assets/logo.svg'), readFileSync(join(themePath, 'web/images/logo.svg'), 'utf8').replace(/\r\n/g, '\n'));

// --- Prototype skeleton CSS ------------------------------------------------------

/** Parses nested CSS into `{ selector, body }` rules and statement strings, respecting quotes and parentheses. */
const parseCss = (source) => {
    const text = source.replace(/\/\*[\s\S]*?\*\//g, '');
    let index = 0;
    const parse = () => {
        const nodes = [];
        let buffer = '';
        let quote = null;
        let parens = 0;
        const flush = () => {
            const statement = buffer.trim().replace(/\s+/g, ' ');
            buffer = '';
            return statement;
        };
        while (index < text.length) {
            const char = text[index++];
            if (quote) {
                if (char === quote) quote = null;
            } else if (char === '"' || char === "'") {
                quote = char;
            } else if (char === '(') {
                parens++;
            } else if (char === ')') {
                parens--;
            } else if (parens === 0 && char === ';') {
                const statement = flush();
                if (statement) nodes.push(statement);
                continue;
            } else if (parens === 0 && char === '{') {
                const selector = flush();
                nodes.push({ selector, body: parse() });
                continue;
            } else if (parens === 0 && char === '}') {
                break;
            }
            buffer += char;
        }
        const statement = flush();
        if (statement) nodes.push(statement);
        return nodes;
    };
    return parse();
};

/** Splits a selector list on its top-level commas, so `:is(a, b)` stays whole. */
const splitSelectors = (selector) => {
    const parts = [''];
    let depth = 0;
    for (const char of selector) {
        if (char === '(') depth++;
        if (char === ')') depth--;
        if (char === ',' && depth === 0) parts.push('');
        else parts[parts.length - 1] += char;
    }
    return parts.map((part) => part.trim());
};

const nest = (parents, selector) => splitSelectors(selector).flatMap((child) => (parents.length === 0
    ? [child]
    : parents.map((parent) => (child.includes('&') ? child.replaceAll('&', parent) : `${parent} ${child}`))));

const indent = (lines) => lines.map((line) => `    ${line}`);

/** Flattens nested rules into one line per rule, for the Tailwind CDN, which doesn't process nesting. */
const flattenCss = (nodes, parents = []) => nodes.flatMap((node) => {
    if (typeof node === 'string') return [];
    if (node.selector.startsWith('@')) {
        const inner = flattenCss(node.body, parents);
        return inner.length > 0 ? [`${node.selector} {`, ...indent(inner), '}'] : [];
    }
    const selectors = nest(parents, node.selector);
    const statements = node.body.filter((item) => typeof item === 'string');
    const own = statements.length > 0 ? [`${selectors.join(', ')} { ${statements.join('; ')}; }`] : [];
    return [...own, ...flattenCss(node.body, selectors)];
});

/** The theme file's top-level rules that `keep` accepts, flattened. `@font-face` and `@import` never apply to prototypes. */
const themeRules = (file, keep = () => true) => [
    `/* ${file} */`,
    ...flattenCss(parseCss(css(file)).filter((node) => typeof node !== 'string' && !node.selector.startsWith('@font-face') && keep(node.selector))),
];

/**
 * Figma 1286:12548 and 1286:12715: five sizes (XL is the default `.btn`), each with its height, side padding, the icon side's
 * padding (2px less, for optical balance), label and icon sizes. A fixed height keeps a bordered button the same size as the primary.
 */
const buttonSizes = {
    s: { height: '9', padding: '4', iconSide: '3.5', label: 'text-3.5 leading-5 font-semibold', icon: '5', iconOnly: '5' },
    m: { height: '10', padding: '5', iconSide: '4.5', label: 'text-3.5 leading-5 font-semibold', icon: '5', iconOnly: '5' },
    l: { height: '11', padding: '5', iconSide: '4.5', label: 'text-4 leading-6 font-bold', icon: '5', iconOnly: '6' },
    xl: { height: '12', padding: '6', iconSide: '5.5', label: 'text-4 leading-6 font-bold', icon: '5', iconOnly: '6' },
    '2xl': { height: '15', padding: '8', iconSide: '7.5', label: 'text-4.5 leading-7 font-semibold', icon: '6', iconOnly: '8' },
};
const buttonRules = [
    ...Object.entries(buttonSizes).flatMap(([size, { height, padding, iconSide, label, icon, iconOnly }]) => {
        const button = size === 'xl' ? '.btn' : `.btn.--${size}`;
        return [
            `${button} { @apply h-${height} gap-1.5 px-${padding} py-0 ${label}; }`,
            `${button} > svg { @apply size-${icon} shrink-0; }`,
            `${button}.--icon-leading { @apply pl-${iconSide}; }`,
            `${button}.--icon-trailing { @apply pr-${iconSide}; }`,
            `${button}.--icon-only { @apply w-${height} px-0; }`,
            `${button}.--icon-only > svg { @apply size-${iconOnly}; }`,
        ];
    }),
    '.btn.--round { @apply rounded-full; }',
    '.btn { @apply focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50; }',
    // The primary's 4px bottom border sits inside the height; `pt-1` keeps the label centred on the whole button, as in Figma
    '.btn.btn-primary { @apply pb-0 pt-1; }',
    '.btn-primary:focus:not(:hover), .btn-primary.--focused { @apply border-secondary-strong bg-secondary text-on-secondary; }',
    '.btn-primary:active, .btn-primary.--active { @apply border-secondary-strong bg-secondary-strong text-on-secondary; }',
    // A house deviation from Figma's 20% ring, which is the primary's only focus cue and fails 3:1 (DESIGN.md → Known exceptions → Focus rings)
    '.btn-primary:focus-visible, .btn-primary.--focused { @apply ring-2 ring-secondary-strong ring-offset-2; }',
    '.btn-secondary:active, .btn-secondary.--active { @apply border-primary bg-primary text-on-primary; }',
    '.btn-secondary:focus-visible, .btn-secondary.--focused { @apply ring-4 ring-primary/20; }',
    '.btn-tertiary { @apply border border-border bg-transparent text-text-muted; }',
    '.btn-tertiary:hover, .btn-tertiary.--hovered, .btn-tertiary:focus, .btn-tertiary:active, .btn-tertiary.--active { @apply border-border bg-white text-text-muted; }',
    '.btn-tertiary:focus-visible, .btn-tertiary.--focused { @apply border-border-strong bg-white text-text-muted ring-4 ring-ring/50; }',
    '.btn-transparent { @apply border-0 bg-transparent text-link; }',
    '.btn-transparent:hover, .btn-transparent.--hovered, .btn-transparent:focus, .btn-transparent:active, .btn-transparent.--active { @apply bg-transparent text-link-hover; }',
    '.btn-transparent:active, .btn-transparent.--active { @apply ring ring-ring/50; }',
    // As for the primary: the transparent button has no fill or border to change, so its ring has to reach 3:1 on its own
    '.btn-transparent:focus-visible, .btn-transparent.--focused { @apply ring-2 ring-link; }',
    // A house addition: a transparent button flush with the text column it starts, such as a "Lees meer" toggle
    '.btn.btn-transparent.--flush { @apply px-0; }',
];

/**
 * Figma 1329:15249 and 1331:14308 (input fields), 1333:20089 and 1333:20196 (textareas), 1343:22101 (the dropdown button),
 * 1343:42177 and 1343:42718 (the dropdown list), 1343:44817 (the open dropdown). The theme's forms.css is unlayered,
 * so these overrides are too. Icons are Figma's Heroicons (solid, 20px) as masks, so they take the field's status colour.
 */
const heroicon = (path) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill-rule='evenodd' clip-rule='evenodd' d='${path}'/></svg>`)}")`;
const fieldIcons = {
    error: 'M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13ZM10 5C9.44772 5 9 5.44772 9 6V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6C11 5.44772 10.5523 5 10 5Z',
    warning: 'M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z',
    success: 'M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z',
};
const chevron = 'M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z';
const fields = ':is(.form-input, .form-select, .form-textarea)';
const feedback = { error: 'danger', warning: 'warning', success: 'success' };
const fieldRules = [
    // The theme's 22px line keeps Figma's 44px field (Figma draws its 24px line inside the stroke); the value is `text` at 90%
    `${fields} { @apply text-text/90; }`,
    `${fields}:focus { @apply ring-ring/50; }`,
    '.form-textarea { @apply h-40 leading-6; }',
    // Figma's textarea shows feedback in its border and hint only, without an icon
    '.control:has(> .form-textarea):after { @apply !hidden; }',
    '.control > .form-textarea { @apply !pr-3.5; }',
    // The select is Figma's dropdown button: `rounded-1.5`, the value in `text`, a grey 20px chevron 14px from the edge, no status icon
    `.form-select { @apply rounded-1.5 pr-10.5 text-text; background-image: ${heroicon(chevron).replace("%3Cpath", "%3Cpath%20fill%3D'%23636363'")}; background-position: right 0.875rem center; background-size: 1.25rem; }`,
    '.control:has(> .form-select):after, .control:has(> .dropdown):after { @apply !hidden; }',
    '.control > .form-select { @apply !pr-10.5; }',
    // Figma dims the whole field, label and hint included, not just the input
    `.field:has(${fields}:disabled, .dropdown-button:disabled) { @apply cursor-not-allowed opacity-50; }`,
    `.field ${fields}:disabled { @apply opacity-100; }`,
    '.field > .hint { @apply text-3.5 leading-5 text-text-muted; }',
    // The status icon sits 14px from the edge (the theme: 16px), with 6px to the text
    '.field-status-icon:has(.form-input):after, .field-status-icon:has(.form-select):after, .field-status-icon:has(.form-textarea):after { @apply right-3.5; }',
    '.field-status-icon:has(.form-input) .form-input, .field-status-icon:has(.form-select) .form-select, .field-status-icon:has(.form-textarea) .form-textarea { @apply pr-10; }',
    ...Object.entries(feedback).flatMap(([status, token]) => [
        `.field.field-${status}:not(.field-floating) .control, .field.field-${status}.field-floating { --tw-status-icon: ${heroicon(fieldIcons[status])}; @apply field-status-icon text-${token}; }`,
        `.field-${status} ${fields}, .field-${status} .input-group:not(.--prefix), .field-${status} .dropdown-button, .field-${status} .dropdown-button:is(:hover, [aria-expanded="true"]) { @apply border-${token}; }`,
        `.field-${status} ${fields}:focus, .field-${status} .input-group:not(.--prefix):focus-within { @apply ring-${token}/20; }`,
        `.field-${status} .dropdown-button:focus-visible { @apply border-${token} ring-${token}/20; }`,
        `.field-${status} > .hint, .field-${status} > .messages { @apply text-${token}-text; }`,
    ]),
    // A leading icon (24px, `text-muted`) and the help button (Figma's 20px question mark in `info`, before any feedback)
    '.control.--icon-leading > svg { @apply pointer-events-none absolute left-3.5 top-1/2 size-6 -translate-y-1/2 text-text-muted; }',
    '.control.--icon-leading > .form-input { @apply pl-11; }',
    '.field-help { @apply absolute right-3.5 top-1/2 flex -translate-y-1/2 rounded-full text-info focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50; }',
    '.field-help > svg { @apply size-5; }',
    '.control:has(> .field-help) .form-input { @apply pr-10; }',
    '.field:is(.field-error, .field-warning, .field-success) .field-help { @apply hidden; }',
    // Input groups: a leading or trailing dropdown shares the field's box; a prefix keeps its own box beside the input
    '.input-group { @apply flex w-full items-stretch rounded-1 border border-border bg-white transition-colors; }',
    '.input-group:hover { @apply border-border-strong; }',
    '.input-group:focus-within { @apply border-border-strong ring-4 ring-ring/50; }',
    `.input-group > ${fields}, .input-group > ${fields}:focus, .input-group > ${fields}:hover { @apply min-w-0 rounded-none border-0 bg-transparent ring-0; }`,
    `.input-group > .form-select { @apply w-auto shrink-0 pl-3.5 !pr-9 text-text; background-image: ${heroicon(chevron).replace("%3Cpath", "%3Cpath%20fill%3D'%23636363'")}; background-position: right 0.75rem center; background-size: 1.25rem; }`,
    '.input-group > .form-select:last-child { @apply !pr-9.5; background-position: right 0.875rem center; }',
    // The theme's status-icon padding reaches these inputs through high-specificity @apply chains, hence the important flags
    '.input-group > .form-select + .form-input { @apply !pl-0; }',
    '.input-group > .form-input:not(:last-child) { @apply !pr-0; }',
    '.input-group > .field-help { @apply static mx-1.5 translate-y-0 self-center; }',
    '.input-group > .field-help:last-child { @apply mr-3.5; }',
    '.input-group > .field-icon { @apply hidden; }',
    '.field:is(.field-error, .field-warning, .field-success) .input-group > .field-icon { @apply mx-1.5 block size-5 shrink-0 self-center bg-current; mask: var(--tw-status-icon) center / contain no-repeat; }',
    '.field:is(.field-error, .field-warning, .field-success) .input-group > .field-icon:last-child { @apply mr-3.5; }',
    '.control:has(> .input-group:not(.--prefix)):after { @apply hidden; }',
    '.input-group.--prefix, .input-group.--prefix:hover, .input-group.--prefix:focus-within { @apply border-0 bg-transparent ring-0; }',
    '.input-group.--prefix > .input-prefix { @apply flex shrink-0 items-center rounded-l-1 border border-r-0 border-border bg-white pl-3.5 pr-3 text-4 leading-6 text-text-muted; }',
    '.input-group.--prefix > .form-input { @apply rounded-l-none border border-border bg-white pl-3; }',
    '.input-group.--prefix > .form-input:hover { @apply border-border-strong; }',
    '.input-group.--prefix > .form-input:focus { @apply border-border-strong ring-4 ring-ring/50; }',
    ...Object.entries(feedback).map(([status, token]) => `.field-${status} .input-group.--prefix > .form-input, .field-${status} .input-group.--prefix > .form-input:hover { @apply border-${token}; }`),
    ...Object.entries(feedback).map(([status, token]) => `.field-${status} .input-group.--prefix > .form-input:focus { @apply ring-${token}/20; }`),
    // The dropdown: a combobox button and its listbox (the skeleton's script), for options with an image, an icon or trailing text
    '.dropdown { @apply relative w-full; }',
    '.dropdown-button { @apply flex h-11 w-full items-center gap-2 rounded-1.5 border border-border bg-white px-3.5 text-left text-4 leading-6 text-text transition-colors; }',
    '.dropdown-button:hover, .dropdown-button[aria-expanded="true"] { @apply border-border-strong; }',
    '.dropdown-button:focus { @apply outline-none; }',
    '.dropdown-button:focus-visible { @apply border-border-strong ring-4 ring-ring/50; }',
    // Figma's open state has no ring: focus shows on the active option instead
    '.field .dropdown-button[aria-expanded="true"], .dropdown-button[aria-expanded="true"] { @apply ring-0; }',
    `.dropdown-button::after { @apply size-5 shrink-0 bg-current text-text-muted transition-transform content-empty; mask: ${heroicon(chevron)} center / contain no-repeat; }`,
    '.dropdown-button[aria-expanded="true"]::after { @apply rotate-180; }',
    '.dropdown-button > span:not(.dropdown-trailing) { @apply min-w-0 grow truncate; }',
    ':is(.dropdown-button, .dropdown-option) > img { @apply size-6 shrink-0 rounded-0.5 object-cover; }',
    ':is(.dropdown-button, .dropdown-option) > svg { @apply size-6 shrink-0 text-text-muted; }',
    ':is(.dropdown-button, .dropdown-option) > .dropdown-trailing { @apply shrink-0 text-text-muted; }',
    '.dropdown-button > .dropdown-trailing { @apply min-w-0 shrink truncate; }',
    '.dropdown-list { @apply absolute inset-x-0 top-full z-20 mt-1 flex max-h-104 flex-col overflow-y-auto rounded-2 bg-white p-2 shadow-lg; }',
    '.dropdown-list[hidden] { @apply hidden; }',
    '.dropdown-option { @apply flex cursor-pointer items-center gap-2 rounded-1 px-3.5 py-2.5 text-3.5 leading-5 text-text transition-colors; }',
    '.dropdown-option > span:not(.dropdown-trailing) { @apply min-w-0 grow break-words; }',
    '.dropdown-option:hover, .dropdown-option[aria-selected="true"] { @apply bg-neutral-50; }',
    '.dropdown-option[aria-selected="true"] > span:not(.dropdown-trailing) { @apply font-semibold; }',
    // A house addition: Figma's hover fill is too faint to follow with the keyboard, so the active option adds the `ring`
    '.dropdown-option.--active { @apply bg-neutral-50 ring-2 ring-inset ring-ring; }',
    '.dropdown-option[aria-disabled="true"] { @apply cursor-not-allowed bg-transparent opacity-50; }',
];

/**
 * Figma 1412:30587 (the check and radio base), 1420:30806 (checkbox), 1420:31898 (radio button), 1420:32473 (check circle),
 * 1426:30850 (radio button in a container) and 6969:1655 (the product card). The theme's .field.choice is unlayered, so
 * these overrides are too. Glyphs are Figma's (a 20px box) as masks, so they take the control's text colour.
 */
const glyph = (path) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill-rule='evenodd' clip-rule='evenodd' d='${path}'/></svg>`)}")`;
const checkGlyph = 'M14.4817 5.12397C14.9657 5.39012 15.1422 5.99817 14.876 6.48208L10.4761 14.4819C10.3252 14.7564 10.0544 14.9442 9.7445 14.9895C9.4346 15.0348 9.12138 14.9323 8.89824 14.7125L5.29831 11.1671C4.90482 10.7796 4.89999 10.1464 5.28751 9.75295C5.67504 9.35947 6.30817 9.35463 6.70166 9.74216L9.36036 12.3606L13.1236 5.51826C13.3898 5.03435 13.9978 4.85782 14.4817 5.12397Z';
// Figma's radio dot is 40% of the box at M, 37.5% at S and 41.7% at L
const dot = (r) => `M10 ${10 - r}a${r} ${r} 0 1 1 0 ${2 * r}a${r} ${r} 0 1 1 0 ${-2 * r}Z`;
const choiceRows = ':is(.field.choice, .field.field-choice)';
const choiceScopes = ':is(.field.choice, .field.field-choice, .option-card, .product-option)';
const control = `${choiceScopes} input:is([type="checkbox"], [type="radio"])`;
const radio = `${choiceScopes} input[type="radio"]`;
const choiceRules = [
    // The control: 20px (M), `border`, white; checked `secondary` with Figma's glyph in `on-secondary`
    `${control} { --tw-choice-glyph: ${glyph(checkGlyph)}; @apply m-0 size-5 shrink-0 cursor-pointer appearance-none rounded-1 border border-border bg-white bg-none p-0 text-on-secondary transition-colors; }`,
    `${radio}, ${choiceScopes} input[type="checkbox"].--circle { @apply rounded-full; }`,
    `${radio} { --tw-choice-glyph: ${glyph(dot(4))}; }`,
    `${choiceScopes}:hover input:is([type="checkbox"], [type="radio"]):not(:checked, :disabled) { @apply border-border-strong bg-transparent; }`,
    `${control}:focus { @apply outline-none ring-0 ring-offset-0; }`,
    `${control}:focus-visible { @apply border-border-strong ring-4 ring-ring/50; }`,
    `${control}:checked, ${control}:checked:focus-visible { @apply border-transparent bg-secondary bg-none text-on-secondary; }`,
    `${control}:checked::after { @apply block size-full bg-current content-empty; mask: var(--tw-choice-glyph) center / contain no-repeat; }`,
    // Figma dims a disabled control, checked or not, to 50%; a checked one turns white with a `border` glyph
    `${control}:disabled { @apply cursor-not-allowed opacity-50; }`,
    `${control}:disabled:checked { @apply border-border bg-white text-border opacity-50; }`,
    // The row: the control, then the label (14px medium `text`) and an optional hint, top-aligned
    `${choiceRows} { @apply items-start gap-2.5; }`,
    `${choiceRows} > label, .choice-text label { @apply m-0 cursor-pointer text-3.5 font-medium leading-5 text-text; }`,
    '.choice-text { @apply flex min-w-0 flex-col; }',
    '.choice-label { @apply flex items-center gap-1.5; }',
    '.choice-text > .hint { @apply text-3.5 leading-5 text-text-muted; }',
    '.choice-help { @apply relative z-10 flex shrink-0 rounded-full text-text focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50; }',
    '.choice-help > svg { @apply size-5; }',
    // Sizes: S is a 16px control on the 20px line (centred there, where Figma top-aligns it), L a 24px control on a 24px line
    `${choiceRows}.--s { @apply gap-2; }`,
    `${choiceRows}.--s input:is([type="checkbox"], [type="radio"]) { @apply my-0.5 size-4; }`,
    `${choiceRows}.--s input[type="radio"] { --tw-choice-glyph: ${glyph(dot(3.75))}; }`,
    `${choiceRows}.--l input:is([type="checkbox"], [type="radio"]) { @apply size-6; }`,
    `${choiceRows}.--l input[type="radio"] { --tw-choice-glyph: ${glyph(dot(4.1667))}; }`,
    `${choiceRows}.--l > label, ${choiceRows}.--l .choice-text label { @apply text-4 leading-6; }`,
    // The radio button in a container: a label around the control and its content
    '.option-card { @apply relative flex cursor-pointer flex-col gap-2.5 rounded-1.5 border border-border bg-white p-4 text-text transition-colors; }',
    '.option-card:hover, .product-option:hover, .option-card:has(input:focus-visible), .product-option:has(input:focus-visible) { @apply border-border-strong; }',
    // Figma's 2px selected border: a 1px outline inside the 1px border, so the content doesn't shift
    '.option-card:has(input:checked), .product-option:has(input:checked) { @apply border-secondary bg-secondary-subtle outline outline-1 -outline-offset-2 outline-secondary; }',
    '.option-card:has(input:disabled), .product-option:has(input:disabled) { @apply cursor-not-allowed opacity-50; }',
    // A tile without a visible control (a colour swatch) keeps its input `sr-only`, and the card takes the focus ring
    '.option-card:has(input.sr-only:focus-visible) { @apply ring-4 ring-ring/50; }',
    '.option-card-media { @apply aspect-video w-full rounded-2 object-cover; }',
    '.option-card-row { @apply flex items-start gap-2.5; }',
    '.option-card-content { @apply flex min-w-0 grow flex-col gap-3; }',
    '.option-card-head { @apply flex items-start gap-2; }',
    '.option-card-text { @apply flex min-w-0 grow flex-col text-3.5 leading-5; }',
    '.option-card-label { @apply font-medium; }',
    '.option-card:has(input:checked) .option-card-label { @apply font-semibold; }',
    '.option-card-hint { @apply text-text-muted; }',
    '.option-card-image { @apply h-6 w-auto shrink-0 rounded-0.5; }',
    '.option-card:has(input:disabled) .option-card-image { @apply opacity-30; }',
    '.option-card-trailing { @apply text-4 leading-6; }',
    // The product card: vertical (image on top) or `--horizontal` (a 160px image beside the text). Its label stretches
    // over the card, so a click anywhere toggles the control, and the quantity selector and help button sit above it.
    '.product-option { @apply relative flex flex-col overflow-hidden rounded-2 border border-border bg-white text-3.5 leading-5 text-text transition-colors; }',
    '.product-option-media { @apply aspect-video w-full rounded-1 object-cover; }',
    '.product-option-content { @apply flex flex-col gap-3 p-4; }',
    '.product-option-text { @apply flex flex-col gap-2; }',
    '.product-option-head { @apply flex items-start gap-2; }',
    '.product-option-label { @apply min-w-0 grow cursor-pointer break-words font-semibold; }',
    '.product-option-label::after { @apply absolute inset-0 content-empty; }',
    '.product-option-hint { @apply text-text-muted; }',
    '.product-option-bottom { @apply flex flex-wrap items-center justify-between gap-2 text-text-muted; }',
    '.product-option :is(.quantity, .choice-help) { @apply relative z-10; }',
    '.product-option.--horizontal { @apply flex-row gap-3 p-4; }',
    '.product-option.--horizontal > .product-option-media { @apply aspect-auto h-22.5 w-40 shrink-0; }',
    '.product-option.--horizontal > .product-option-content { @apply min-h-22.5 min-w-0 grow justify-between gap-2 p-0; }',
    '.product-option.--horizontal .product-option-text { @apply gap-1; }',
    '.product-option.--horizontal .product-option-bottom > span { @apply min-w-0 grow; }',
    // The quantity selector (Figma 816:24939, Plus / Minus): 44px, minus and plus around the number, which grows with a wider box
    '.quantity { @apply inline-flex h-11 w-44 shrink-0 items-stretch overflow-hidden rounded-1 border border-border bg-white text-text; }',
    // The theme's unlayered .field and .form-select take w-full, which a layered width utility can't override
    '.quantity.--full { @apply w-full; }',
    '.form-select.quantity-select { @apply w-20 shrink-0; }',
    '.quantity > button { @apply flex w-11 items-center justify-center transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50; }',
    '.quantity > button:first-child { @apply border-r border-border; }',
    '.quantity > button:last-child { @apply border-l border-border; }',
    '.quantity > button > svg { @apply size-4; }',
    '.quantity > input { @apply w-11 min-w-0 grow appearance-none border-0 bg-transparent p-0 text-center text-3.5 font-semibold leading-5 text-text focus:ring-0; -moz-appearance: textfield; }',
    '.quantity > button { @apply shrink-0; }',
    // Quantity with an update button (Figma 816:24939, Input): an 80px number field and a 44px primary check button
    '.quantity-update { @apply flex items-start gap-1; }',
    '.quantity-update > .form-input { @apply w-20 text-center; }',
    '.quantity > input::-webkit-inner-spin-button, .quantity > input::-webkit-outer-spin-button { @apply m-0 appearance-none; }',
    '.quantity:has(input:focus-visible) { @apply ring-4 ring-ring/50; }',
];

/**
 * Figma 1385:32208 and 1385:32405 (the swatch), 1382:28568, 1382:28586 and 1384:28794 (stars), 1385:28923 and 1395:29980
 * (the reviews summaries) and 1286:17433 (the action menu).
 */
const starPath = { filled: 'M9.45387 3.39679C9.62577 2.86774 10.3742 2.86774 10.5461 3.39679L11.8049 7.271C11.8818 7.5076 12.1023 7.66779 12.3511 7.66779H16.4247C16.9809 7.66779 17.2122 8.37962 16.7622 8.70659L13.4666 11.101C13.2653 11.2472 13.1811 11.5064 13.258 11.743L14.5168 15.6172C14.6887 16.1463 14.0832 16.5862 13.6331 16.2592L10.3375 13.8648C10.1363 13.7186 9.86373 13.7186 9.66247 13.8648L6.36687 16.2592C5.91683 16.5862 5.31131 16.1463 5.48321 15.6172L6.74202 11.743C6.81889 11.5064 6.73468 11.2472 6.53341 11.101L3.23781 8.7066C2.78777 8.37962 3.01906 7.66779 3.57534 7.66779H7.64893C7.8977 7.66779 8.11818 7.5076 8.19506 7.271L9.45387 3.39679Z', outline: 'M11.3294 7.42551L10.0706 3.5513C10.062 3.52491 10.0515 3.51646 10.0455 3.51236C10.0363 3.50609 10.0206 3.5 10 3.5C9.97942 3.5 9.96368 3.50609 9.95448 3.51236C9.94846 3.51646 9.93797 3.52491 9.9294 3.5513L8.67059 7.42551C8.52677 7.86812 8.11432 8.16779 7.64893 8.16779H3.57534C3.5476 8.16779 3.53632 8.17516 3.53055 8.17961C3.52175 8.18643 3.51109 8.19952 3.50473 8.21909C3.49838 8.23866 3.4993 8.25551 3.50242 8.2662C3.50446 8.27319 3.50926 8.28578 3.5317 8.30209L6.82731 10.6965C7.20381 10.97 7.36136 11.4549 7.21754 11.8975L5.95874 15.7717C5.95016 15.7981 5.95368 15.8111 5.95614 15.818C5.9599 15.8285 5.96906 15.8426 5.9857 15.8547C6.00235 15.8668 6.01867 15.8712 6.0298 15.8715C6.03708 15.8717 6.05053 15.871 6.07298 15.8547L9.36858 13.4603C9.74509 13.1868 10.2549 13.1868 10.6314 13.4603L13.927 15.8547C13.9495 15.871 13.9629 15.8717 13.9702 15.8715C13.9813 15.8712 13.9976 15.8668 14.0143 15.8547C14.0309 15.8426 14.0401 15.8285 14.0439 15.818C14.0463 15.8111 14.0498 15.7981 14.0413 15.7717L12.7825 11.8975C12.6386 11.4549 12.7962 10.97 13.1727 10.6965L16.4683 8.30209C16.4907 8.28578 16.4955 8.27319 16.4976 8.2662C16.5007 8.25551 16.5016 8.23866 16.4953 8.21909C16.4889 8.19952 16.4783 8.18643 16.4694 8.17961C16.4637 8.17516 16.4524 8.16779 16.4247 8.16779H12.3511C11.8857 8.16779 11.4732 7.86812 11.3294 7.42551ZM10.5461 3.39679C10.3742 2.86774 9.62577 2.86774 9.45387 3.39679L8.19506 7.271C8.11818 7.5076 7.8977 7.66779 7.64893 7.66779H3.57534C3.01906 7.66779 2.78777 8.37962 3.23781 8.7066L6.53341 11.101C6.73468 11.2472 6.81889 11.5064 6.74202 11.743L5.48321 15.6172C5.31131 16.1463 5.91683 16.5862 6.36687 16.2592L9.66247 13.8648C9.86373 13.7186 10.1363 13.7186 10.3375 13.8648L13.6331 16.2592C14.0832 16.5862 14.6887 16.1463 14.5168 15.6172L13.258 11.743C13.1811 11.5064 13.2653 11.2472 13.4666 11.101L16.7622 8.70659C17.2122 8.37962 16.9809 7.66779 16.4247 7.66779H12.3511C12.1023 7.66779 11.8818 7.5076 11.8049 7.271L10.5461 3.39679Z' };
// Five 20px stars, each overlapping the next by 2px (Figma's -2px margin): 92 × 20
const starRow = (path) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 92 20'>${[0, 18, 36, 54, 72].map((x) => `<path transform='translate(${x} 0)' fill-rule='evenodd' clip-rule='evenodd' d='${path}'/>`).join('')}</svg>`)}")`;
const swatchSizes = {
    xs: { height: '8', padding: '2.5', label: 'text-3.5 leading-5' },
    s: { height: '9', padding: '3.5', label: 'text-3.5 leading-5' },
    m: { height: '10', padding: '4.5', label: 'text-3.5 leading-5' },
    xl: { height: '12', padding: '5.5', label: 'text-4 leading-6' },
    '2xl': { height: '15', padding: '7.5', label: 'text-4.5 leading-7' },
    '3xl': { height: '20', padding: '7.5', label: 'text-5 leading-7' },
};
const pickRules = [
    // Swatch: a label around an sr-only radio (or checkbox) and its text; L (44px) is the default. Figma draws a 2px border
    // inside its size, so the CSS padding is Figma's less the border.
    '.swatch-group { @apply flex flex-wrap gap-2; }',
    '.swatch { @apply relative inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-1.5 border-2 border-border bg-white px-4.5 text-4 font-medium leading-6 text-text transition-colors; }',
    ...Object.entries(swatchSizes).map(([size, { height, padding, label }]) => `.swatch.--${size} { @apply h-${height} px-${padding} ${label}; }`),
    '.swatch.--round { @apply rounded-full; }',
    '.swatch:hover, .swatch:has(input:checked) { @apply border-secondary; }',
    '.swatch:has(input:checked) { @apply bg-secondary-subtle; }',
    '.swatch:has(input:focus-visible) { @apply border-secondary ring-4 ring-ring/50; }',
    '.swatch:has(input:disabled), .swatch:has(input:disabled):hover { @apply cursor-not-allowed border-neutral-300 bg-neutral-100 text-neutral-400/75; }',
    // Figma strikes a sold-out swatch through with a 2px line at 45°
    ".swatch:has(input:disabled)::after { @apply pointer-events-none absolute inset-0 content-empty; background-image: linear-gradient(135deg, transparent calc(50% - 1px), theme('colors.neutral.300') calc(50% - 1px), theme('colors.neutral.300') calc(50% + 1px), transparent calc(50% + 1px)); }",
    // A house addition: a colour swatch leads with a 20px chip in the product colour (components/choices.md → Known exceptions)
    '.swatch-colour { @apply size-5 shrink-0 rounded-full border border-border; }',
    '.swatch:has(input:disabled) > .swatch-colour { @apply opacity-50; }',
    // Stars: `--rating` (0 to 5) fills the row from the left, in Figma's 10% steps or finer
    '.stars { @apply relative inline-block h-5 w-23 shrink-0; }',
    '.stars::before, .stars::after { @apply absolute inset-y-0 left-0 content-empty; mask-position: left center; mask-size: 5.75rem 1.25rem; mask-repeat: no-repeat; }',
    `.stars::before { @apply w-full bg-gray-200; mask-image: ${starRow(starPath.filled)}; }`,
    `.stars::after { @apply bg-amber-400; width: calc(var(--rating, 0) / 5 * 100%); mask-image: ${starRow(starPath.filled)}; }`,
    `.stars:is(.--mono, .--accent)::before { mask-image: ${starRow(starPath.outline)}; }`,
    '.stars.--mono::before, .stars.--mono::after { @apply bg-text; }',
    '.stars.--accent::before, .stars.--accent::after { @apply bg-accent; }',
    // The reviews summary: title and count, stars, score and count, `gap-3`; the mini summary: one star and the score
    '.reviews-summary { @apply flex flex-wrap items-center gap-x-3 gap-y-1 text-3.5 leading-5 text-text; }',
    '.reviews-summary > span { @apply flex items-center gap-1; }',
    '.reviews-title { @apply font-medium; }',
    // A house deviation: Figma counts on orange in 12px white (2.52:1); the count takes `primary`
    '.reviews-count { @apply rounded-full bg-primary px-1.5 py-0.5 text-3 font-medium leading-4 text-on-primary; }',
    '.reviews-score { @apply font-semibold; }',
    '.reviews-total { @apply text-text-muted; }',
    '.reviews-summary.--mini { @apply gap-0.5; }',
    '.reviews-summary.--mini > .stars { --rating: 5; @apply w-5; }',
    // The action menu: a [data-menu] holds the trigger and a [role="menu"] of 32px items (the skeleton's script)
    '.action-menu-wrap { @apply relative inline-flex; }',
    '.action-menu { @apply absolute left-0 top-full z-30 mt-1 flex w-60 flex-col rounded-2 bg-white p-1 shadow-lg; }',
    '.action-menu[hidden] { @apply hidden; }',
    '.action-menu.--end { @apply left-auto right-0; }',
    '.action-menu-title { @apply px-2 py-1.5 text-3.5 font-semibold leading-5 text-text-muted; }',
    '.action-menu [role="menuitem"] { @apply flex w-full items-center gap-1.5 rounded-1 px-2 py-1.5 text-left text-3.5 font-medium leading-5 text-text transition-colors hover:bg-neutral-50 focus-visible:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring; }',
    '.action-menu [role="menuitem"] > svg { @apply size-5 shrink-0; }',
    '.action-menu [role="menuitem"].--danger { @apply text-danger; }',
    '.action-menu > hr { @apply my-1 h-px border-0 bg-border; }',
];

const prototypeCss = [
    '/* Figma 6767:34313: the semantic colour layer (DESIGN.md → Colors) as RGB channels. Edit a value here to re-skin a prototype. */',
    ':root {',
    ...indent(Object.entries(semanticColors).map(([token, hex]) => `--color-${token}: ${rgbChannels(hex)};`)),
    '}',
    ...themeRules('typography.css', (selector) => selector.startsWith('@layer')),
    ...themeRules('button.css'),
    ...themeRules('forms.css', (selector) => selector !== '.webforms'),
    ...themeRules('messages.css', (selector) => selector === '.message'),
    ...themeRules('product-prices.css'),
    '/* Magento_Catalog/templates/product/list/item.phtml */',
    '@layer components {',
    ...indent(Object.entries(productTile).map(([selector, classes]) => `${selector} { @apply ${classes.join(' ')}; }`)),
    '}',
    '/* Prototype additions: the Figma buttons (DESIGN.md → Buttons: sizes, icons, the tertiary outline, the transparent button, focus rings),',
    '   a highlight that rotates on an inline phrase, a USP check mark that keeps its size when the text wraps (the theme lets it shrink),',
    '   the split image (components/content-patterns.md),',
    '   the text + image block on beige or plain, which the theme only styles through PageBuilder markup (content-types/page-builder-block-image-with-text.css),',
    '   the image-text item (components/content-patterns.md), the PageBuilder link card, outlined or `--on-surface`,',
    '   the accordion (components/content-patterns.md → Accordion and FAQ) on a native details element, outlined or `--plain`,',
    '   the Figma pagination (components/pagination.md), which the theme pager does not match yet,',
    '   the Figma message spacing, neutral fill and outline variant (components/messages.md), which Figma updates over the theme,',
    '   the modal and the pop-up (components/dialogs.md) on a native dialog element,',
    '   and two layout traps: a fieldset that does not shrink below its content, and `sr-only` text escaping an unpositioned',
    '   scroll container and widening the page (references/build.md → 7. Check before delivering → Build traps). */',
    '@layer components {',
    ...indent([
        ...buttonRules,
        '.heading-highlight { @apply inline-block; }',
        'ul.list-usps li:before, ol.list-usps li:before { @apply shrink-0; }',
        '.image-text-item { @apply flex min-h-27 overflow-hidden rounded-2 border border-border bg-white; }',
        '.image-text-item.--on-surface { @apply border-0; }',
        '.image-text-item-text { @apply flex min-w-0 grow flex-col justify-center gap-1 p-4 text-3.5 sm:p-5; }',
        '.image-text-item-title { @apply break-words font-bold text-link transition-colors sm:text-4; }',
        '.image-text-item:hover .image-text-item-title { @apply text-link-hover; }',
        '.image-text-item-text > span:not(.image-text-item-title) { @apply opacity-90; }',
        '.image-text-item-media { @apply w-35 shrink-0 object-cover; }',
        '.accordion { @apply rounded-1 border border-border bg-white; }',
        '.accordion.--on-surface { @apply border-0; }',
        '.accordion.--plain { @apply rounded-none border-0 bg-transparent; }',
        '.accordion-title { @apply flex cursor-pointer list-none items-center gap-1.5 px-4 py-3 font-bold transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50; }',
        '.accordion-title::-webkit-details-marker { @apply hidden; }',
        '.accordion-title > span { @apply min-w-0 grow break-words; }',
        '.accordion-title > svg { @apply size-5 shrink-0; }',
        '.accordion[open] .accordion-toggle.--closed, .accordion:not([open]) .accordion-toggle.--open { @apply hidden; }',
        '.accordion-body { @apply flex flex-col gap-2 px-4 pb-3 text-3.5 text-text-muted; }',
        '.accordion.--plain > .accordion-title { @apply p-0; }',
        '.accordion.--plain > .accordion-body { @apply px-0 pb-0 pt-3; }',
        '.modal, .popup { @apply w-full overflow-hidden rounded-2 bg-white p-0 text-text shadow-xl sm:max-w-xl; }',
        '.modal::backdrop, .popup::backdrop { @apply bg-gray-900/60; }',
        '.modal { @apply lg:max-w-3xl; }',
        '.modal-body { @apply flex flex-col items-center gap-4 p-8 text-center lg:flex-row lg:items-start lg:gap-6 lg:text-left; }',
        '.modal-icon { @apply size-17 shrink-0 text-yellow-400; }',
        '.modal-text, .popup-text { @apply flex min-w-0 flex-col gap-2; }',
        '.modal-title { @apply text-5 font-semibold leading-7 focus:outline-none; }',
        '.modal-actions { @apply flex flex-col gap-3 bg-gray-50 px-6 py-4 sm:flex-row lg:justify-end; }',
        '.modal-actions > .btn { @apply w-full sm:w-auto sm:flex-1 lg:flex-none; }',
        '.popup { @apply rounded-t-none lg:max-w-4xl lg:rounded-t-2; }',
        '.popup[open] { @apply flex flex-col lg:flex-row; }',
        '.popup-media { @apply relative h-64 shrink-0 lg:h-auto lg:w-75; }',
        '.popup-media > img { @apply absolute inset-0 size-full object-cover; }',
        '.popup-content { @apply flex min-w-0 grow flex-col gap-8 px-6 pb-6 pt-8 text-center lg:text-left; }',
        '.popup-title { @apply text-7 font-semibold leading-9 focus:outline-none; }',
        '.popup-form { @apply flex flex-col gap-4; }',
        '.popup-form > .btn { @apply w-full lg:w-auto lg:self-end; }',
        '.popup-close { @apply absolute right-0 top-0 flex items-center rounded-bl-2 bg-accent p-2 text-on-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50; }',
        '.popup-close > svg { @apply size-6; }',
        '.split-image { @apply grid overflow-hidden rounded-2 bg-surface text-on-surface lg:grid-cols-2; }',
        '.split-image-media { @apply relative h-64 sm:h-90 lg:h-auto lg:min-h-80; }',
        '.split-image.--media-right > .split-image-media { @apply lg:order-last; }',
        '.split-image-media > img, .split-image-media > video { @apply absolute inset-0 size-full object-cover; }',
        '.split-image-text { @apply flex min-w-0 flex-col gap-4 p-6 lg:p-12; }',
        '.split-image-text > h2 { @apply leading-8; }',
        '.split-image-text > p, .split-image-quote { @apply opacity-90; }',
        '.split-image-intro { @apply text-4.5 font-medium; }',
        '.split-image-actions { @apply mt-2 flex flex-wrap gap-2; }',
        '.split-image-play { @apply absolute inset-0 flex items-center justify-center bg-gray-900/20 text-white; }',
        '.split-image-quote { @apply flex items-start gap-4 py-4 text-6; }',
        '.split-image-quote > svg { @apply shrink-0 text-surface-strong; }',
        '.split-image.--plain { @apply items-center gap-6 overflow-visible rounded-none bg-transparent text-text md:grid-cols-2 lg:gap-12; }',
        '.split-image.--plain > .split-image-media { @apply overflow-hidden rounded-2 md:h-auto md:min-h-64 md:self-stretch; }',
        '.split-image.--plain.--media-right > .split-image-media { @apply md:order-last; }',
        '.split-image.--plain > .split-image-text { @apply p-0; }',
        '.pagination { @apply grid grid-cols-2 items-center gap-4 text-3.5 lg:flex lg:justify-between; }',
        '.pagination-amount { @apply lg:flex-1; }',
        '.pagination-pages { @apply order-first col-span-2 flex justify-center lg:order-none; }',
        '.pagination-pages > ol { @apply flex items-center gap-2; }',
        '.pagination-item { @apply flex h-11.5 min-w-11.5 items-center justify-center rounded-1 border border-border px-3 text-4 font-bold text-text-muted transition-colors sm:px-5; }',
        'a.pagination-item:hover { @apply border-border-strong text-text; }',
        'a.pagination-item:focus-visible { @apply outline-none ring-4 ring-ring/50; }',
        '.pagination-item[aria-current="page"] { @apply border-2 border-secondary bg-secondary-subtle text-text; }',
        '.pagination-item.--arrow { @apply px-0 text-text; }',
        '.pagination-item[aria-disabled="true"] { @apply cursor-not-allowed opacity-50; }',
        '.pagination-limiter { @apply flex items-center justify-end gap-4 lg:flex-1; }',
        'fieldset { @apply min-w-0; }',
        '.overflow-auto, .overflow-scroll, .overflow-x-auto, .overflow-x-scroll, .overflow-y-auto, .overflow-y-scroll { @apply relative; }',
    ]),
    '}',
    '/* Figma overrides (messages, the limiter, the input fields, the dropdown, the checkboxes and radios, the option and product cards) of theme rules that messages.css and forms.css leave unlayered: an unlayered rule beats any layer, so these stay unlayered too. */',
    '.pagination-limiter > .form-select { @apply w-20 rounded-1.5 pl-3.5 pr-9; }',
    '.message { @apply mb-0 gap-3 p-4; }',
    '.message > span { @apply opacity-90; }',
    '.message.notice { @apply bg-gray-50; }',
    '.message.--outline { @apply border border-border bg-transparent text-neutral-700; }',
    ...fieldRules,
    ...choiceRules,
    ...pickRules,
].join('\n');

const skeletonPath = join(skillDir, 'assets/prototype-skeleton.html');
const skeleton = readFileSync(skeletonPath, 'utf8').replace(/\r\n/g, '\n');
writeFileSync(skeletonPath, replaceRegion(skeleton, 'css', prototypeCss, { open: '/* design-sync:begin */', close: '/* design-sync:end */' }));

/**
 * Compiles the skeleton CSS with the prototype config, using the theme's own Tailwind install:
 * one class the config lacks would stop the Tailwind CDN from building the whole style block.
 */
const compilePrototypeCss = async () => {
    const requireFromTheme = createRequire(configPath);
    let tailwind;
    let postcss;
    let plugins;
    try {
        tailwind = requireFromTheme('tailwindcss');
        postcss = requireFromTheme('postcss');
        plugins = ['@tailwindcss/forms', '@tailwindcss/typography', '@tailwindcss/container-queries'].map((name) => requireFromTheme(name));
    } catch {
        console.log('warning prototype CSS not compiled: run npm install in the theme\'s web/tailwind folder');
        return true;
    }
    const defaults = requireFromTheme('tailwindcss/colors');
    for (const [name, hex] of Object.entries(tailwindDefaults)) {
        const [family, shade] = name.split('-');
        const actual = shade ? defaults[family]?.[shade] : defaults[family];
        if (!actual || normalizeHex(actual) !== hex) {
            console.log(`error   Tailwind default ${name} is ${actual}, not ${hex}`);
            return false;
        }
    }
    try {
        // The CSS doubles as content: Tailwind only expands `@layer` rules whose class it finds in use
        const config = { content: [{ raw: prototypeCss }], theme: { extend: prototypeTheme }, plugins };
        await postcss([tailwind(config)]).process(`@tailwind base;\n@tailwind components;\n@tailwind utilities;\n${prototypeCss}`, { from: undefined });
        return true;
    } catch (error) {
        console.log(`error   prototype CSS: ${error.reason ?? error.message}`);
        return false;
    }
};
const prototypeCssCompiles = await compilePrototypeCss();

// --- Approved examples -----------------------------------------------------------

// Each example is committed assembled, so it opens anywhere; re-assemble it on the fresh skeleton, config and logo.
const examplesDir = join(skillDir, 'assets/examples');
let examplesAssemble = true;
for (const parts of (existsSync(examplesDir) ? readdirSync(examplesDir) : []).filter((file) => file.endsWith('.parts.html'))) {
    const input = join(examplesDir, parts);
    const result = spawnSync(process.execPath, [join(skillDir, 'scripts/assemble.mjs'), input, input.replace(/\.parts\.html$/, '.html')], { encoding: 'utf8' });
    if (result.status !== 0) {
        console.log(`error   example ${parts}: ${result.stderr.trim()}`);
        examplesAssemble = false;
    }
}

// --- Lint ------------------------------------------------------------------------

const { findings, summary } = lint(designMd);
for (const { severity, path, message } of findings.filter((finding) => finding.severity !== 'info')) {
    console.log(`${severity.padEnd(7)} ${path ?? ''} ${message}`);
}
console.log(`DESIGN.md lint: ${summary.errors} errors, ${summary.warnings} warnings; prose drift: ${drift.length}; prototype CSS: ${prototypeCssCompiles ? 'ok' : 'fails'}; examples: ${examplesAssemble ? 'ok' : 'fail'}`);
process.exitCode = summary.errors > 0 || drift.length > 0 || !prototypeCssCompiles || !examplesAssemble ? 1 : 0;
