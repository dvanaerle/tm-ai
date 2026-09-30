#!/usr/bin/env node
/**
 * Regenerates the tuinmaximaal-design skill's DESIGN.md front matter, the generated
 * regions of its prose, the prototype Tailwind config and the prototype skeleton's
 * component CSS from the Valantic `base` theme, copies the theme logo, then checks
 * the prose for drift and lints DESIGN.md.
 *
 * Usage: npm run design:sync -- [themePath] [--skill-dir <dir>]
 *
 * Read-only towards the theme repo: it requires the theme's Tailwind config and
 * reads component CSS. Prose outside the `design-sync` regions is kept as written,
 * but every value it quotes is checked against the theme.
 */
import { createRequire } from 'node:module';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
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
const colorRefByHex = Object.fromEntries(Object.entries(colors).reverse().map(([name, value]) => [normalizeHex(value), `{colors.${name}}`]));

/** `btn-primary-hover` in `backgroundColor` → `#6D8005`, following DEFAULT for group endpoints. */
const lookupColor = (map, path) => {
    const node = path.split('-').reduce((current, key) => current?.[key], map);
    return typeof node === 'object' ? node?.DEFAULT : node;
};

const colorRef = (map, path) => {
    const value = path === 'white' ? '#FFFFFF' : lookupColor(map, path);
    if (!value) throw new Error(`Colour "${path}" not found in the theme config`);
    if (value === 'transparent') return value;
    const ref = colorRefByHex[normalizeHex(value)];
    if (!ref) throw new Error(`Colour "${path}" (${value}) is not a tmx colour`);
    return ref;
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
    'button-label': typographyOf(classesOf(buttonCss, '\\.btn')),
    'form-label': typographyOf(classesOf(formsCss, '\\.field', '& > label, & > \\.label')),
    'form-input': typographyOf(classesOf(formsCss, '^\\.form-textarea')),
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
// The house style drops the tertiary button's white fill and border (the prototype skeleton overrides them), so it reads as a link
const asLink = (classes) => classes.filter((name) => !/^(bg|border)-btn-tertiary(-hover)?$/.test(name));
for (const variant of ['primary', 'secondary', 'tertiary']) {
    const typographyRef = { typography: '{typography.button-label}' };
    const own = variant === 'tertiary' ? asLink : (classes) => classes;
    add(`button-${variant}`, own([...btn, ...classesOf(buttonCss, `\\.btn-${variant}`)]), typographyRef);
    add(`button-${variant}-hover`, own(classesOf(buttonCss, `\\.btn-${variant}`, '&:hover[^{]*')));
}

add('form-input', classesOf(formsCss, '^\\.form-textarea'), { typography: '{typography.form-input}' });
add('form-input-hover', classesOf(formsCss, '^\\.form-textarea', '&:hover[^{]*'));
add('form-input-focus', classesOf(formsCss, '^\\.form-textarea', '&:focus'));
add('form-input-error', classesOf(formsCss, '^\\.form-textarea', '\\.field-error &'));
add('form-input-success', classesOf(formsCss, '^\\.form-textarea', '\\.field-success &'));
add('form-label', classesOf(formsCss, '\\.field', '& > label, & > \\.label'), { typography: '{typography.form-label}' });
add('form-error-message', classesOf(formsCss, '\\.field', '& > \\.messages'));
add('form-choice', classesOf(formsCss, '\\.filter-row', '& > input'));
add('form-choice-checked', classesOf(formsCss, '\\.filter-row', '& > input', '&:checked'));

add('message-notice', classesOf(messagesCss, '\\.message'), { typography: '{typography.message}' });
for (const status of ['error', 'success', 'info', 'warning']) {
    add(`message-${status}`, [...classesOf(messagesCss, '\\.message'), ...classesOf(messagesCss, '\\.message', `&\\.${status}`)], { typography: '{typography.message}' });
    add(`message-${status}-icon`, classesOf(messagesCss, '\\.message', `&\\.${status}`, '& > svg'));
}
for (const status of Object.keys(theme.colors.tmx.status)) {
    add(`field-hint-${status}`, [`text-tmx-status-${status}-text`]);
    add(`status-${status}-accent`, [`text-tmx-status-${status}`]);
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
add('selected-card', ['border', 'border-form-input-choice-active', 'bg-tmx-primary-lighterGreenSubtle']);

add('page', ['bg-white', 'text-body'], { typography: '{typography.body-md}' });
add('link', ['text-link']);
add('link-hover', ['text-link-hover']);
add('link-hover-secondary', ['text-link-secondHover']);
// Blog tile (DESIGN.md → Content patterns)
add('pill', ['bg-tmx-neutral-lightestGrey', 'text-body']);
// The box decision's surface box and its stronger step (DESIGN.md → Elevation & Depth)
add('surface-box', ['bg-tmx-secondary-beige', 'text-body', 'rounded-2']);
add('surface-box-strong', ['bg-tmx-secondary-sand', 'text-body', 'rounded-2']);
// Used at 60% opacity in a gradient behind the image tile's white text (DESIGN.md → Content patterns)
add('image-tile-scrim', ['bg-tmx-primary-black']);

// The cut rule (issue 08): single-use widget styling, module skins and the shell stay out of the document, and so do
// the colours only they carry. The theme's tailwind.config.js stays the full definition.
const droppedColors = ['blue', 'yellow', 'red', 'brown', 'darkGreen', 'mediumGreen'].map((name) => `tmx-primary-${name}`)
    .concat('tmx-secondary-bone', 'tmx-neutral-darkGrey', 'tmx-neutral-mediumGrey');
for (const name of droppedColors) if (!colors[name]) throw new Error(`Dropped colour "${name}" not found in the theme config`);
const documentColors = Object.fromEntries(Object.entries(colors).filter(([name]) => !droppedColors.includes(name)));

// --- DESIGN.md -------------------------------------------------------------------

const frontMatter = {
    version: 'alpha',
    name: 'Tuinmaximaal',
    description: 'Generated from the Valantic base theme by tools/design-sync/sync.mjs. Do not edit the front matter by hand.',
    colors: { primary: colors['tmx-primary-lighterGreen'], ...documentColors },
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
const hexes = new Set([...Object.values(colors).map(normalizeHex), '#FFFFFF']);
const pixelsOf = (name) => {
    let match;
    if ((match = name.match(/^text-(.+)$/)) && theme.fontSize[match[1]]) return px([].concat(theme.fontSize[match[1]])[0]);
    if ((match = name.match(/^rounded-(.+)$/)) && theme.borderRadius[match[1]]) return px(theme.borderRadius[match[1]]);
    if ((match = name.match(/^-?(?:p[xytrbl]?|m[xytrbl]?|gap(?:-[xy])?|size|[wh])-(.+)$/)) && theme.spacing[match[1]]) return px(theme.spacing[match[1]]);
    return null;
};

const bodyOffset = designMd.length - body.length;
const bodyStartLine = designMd.slice(0, bodyOffset).split('\n').length;
for (const [line, number] of body.split('\n').map((text, index) => [text, bodyStartLine + index])) {
    // `text-[#123456]` illustrates a forbidden arbitrary value, not a colour
    for (const [hex] of line.matchAll(/(?<!\[)(?:#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3})\b/g)) {
        if (!hexes.has(normalizeHex(hex))) drift.push(`line ${number}: ${hex} is not a theme colour`);
    }
    for (const [, name, hex] of line.matchAll(/`(tmx-[\w-]+)`\s*(#[0-9A-Fa-f]{3,6})\b/g)) {
        if (colors[name] && normalizeHex(colors[name]) !== normalizeHex(hex)) drift.push(`line ${number}: ${name} is ${colors[name]} in the theme, not ${hex}`);
    }
    for (const [, name, value] of line.matchAll(/`([\w.-]+)`\s*(?:\(|=\s*)?(\d+(?:\.\d+)?px)/g)) {
        const actual = pixelsOf(name);
        if (actual && actual !== value) drift.push(`line ${number}: ${name} is ${actual} in the theme, not ${value}`);
    }
}
for (const message of drift) console.log(`error   DESIGN.md prose: ${message}`);

// --- Prototype Tailwind config ---------------------------------------------------

/** Drops the theme's empty placeholder values (e.g. `primary.DEFAULT: ''`), which would emit broken classes. */
const withoutEmpty = (object) => Object.fromEntries(Object.entries(object)
    .map(([key, value]) => [key, typeof value === 'object' && !Array.isArray(value) ? withoutEmpty(value) : value])
    .filter(([, value]) => value !== '' && !(typeof value === 'object' && Object.keys(value).length === 0)));

const withoutImages = (object) => Object.fromEntries(Object.entries(object).filter(([, value]) => !String(value).includes('url(')));

const prototypeTheme = withoutEmpty({
    screens: theme.screens,
    container: theme.container,
    spacing: theme.spacing,
    fontFamily: { body: ['ArticulatCF', 'system-ui', 'sans-serif'] },
    fontSize: theme.fontSize,
    letterSpacing: theme.letterSpacing,
    lineHeight: theme.lineHeight,
    borderRadius: theme.borderRadius,
    colors: theme.colors,
    textColor: theme.textColor,
    backgroundColor: theme.backgroundColor,
    borderColor: theme.borderColor,
    ringColor: theme.ringColor,
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

const prototypeCss = [
    ...themeRules('typography.css', (selector) => selector.startsWith('@layer')),
    ...themeRules('button.css'),
    ...themeRules('forms.css', (selector) => selector !== '.webforms'),
    ...themeRules('messages.css', (selector) => selector === '.message'),
    ...themeRules('product-prices.css'),
    '/* Magento_Catalog/templates/product/list/item.phtml */',
    '@layer components {',
    ...indent(Object.entries(productTile).map(([selector, classes]) => `${selector} { @apply ${classes.join(' ')}; }`)),
    '}',
    '/* Prototype additions: a visible focus ring (the theme only swaps the fill), a highlight that rotates on an inline phrase,',
    '   a USP check mark that keeps its size when the text wraps (the theme lets it shrink), a tertiary button without the',
    '   theme\'s white fill and border, so it reads as a link on every surface, the content block (DESIGN.md → Content patterns),',
    '   which the theme only styles through PageBuilder markup (content-types/page-builder-block-image-with-text.css),',
    '   and the selected card (DESIGN.md → Forms), which the base theme has no class for: `label.option-card` around an `sr-only` input. */',
    '@layer components {',
    ...indent([
        '.btn { @apply focus-visible:ring-4 focus-visible:ring-form-input/50; }',
        '.heading-highlight { @apply inline-block; }',
        'ul.list-usps li:before, ol.list-usps li:before { @apply shrink-0; }',
        '.btn-tertiary, .btn-tertiary:hover, .btn-tertiary.--hovered, .btn-tertiary:focus, .btn-tertiary.--focused { @apply bg-transparent border-transparent; }',
        '.content-block { @apply grid overflow-hidden rounded-2 bg-tmx-secondary-beige md:grid-cols-2; }',
        '.content-block-text { @apply flex min-w-0 flex-col justify-center gap-5 p-6 md:p-12 xl:p-20; }',
        '.content-block-actions { @apply mt-2 flex flex-wrap gap-3 md:gap-5; }',
        '.content-block-media { @apply relative order-first h-64 md:h-auto md:min-h-80; }',
        '.content-block.--media-right > .content-block-media { @apply md:order-last; }',
        '.content-block-media > img, .content-block-media > video, .content-block-media > iframe { @apply absolute inset-0 size-full object-cover; }',
        '.content-block-play { @apply absolute inset-0 flex items-center justify-center bg-tmx-primary-black/20 text-white; }',
        '.option-card { @apply cursor-pointer rounded-2 border border-tmx-neutral-lightGrey bg-white transition-colors; }',
        '.option-card:hover { @apply border-tmx-neutral-grey; }',
        '.option-card:has(input:checked) { @apply border-tmx-primary-lighterGreen bg-tmx-primary-lighterGreenSubtle; }',
        '.option-card:has(input:focus-visible) { @apply ring-4 ring-form-input/50; }',
        '.option-card:has(input:disabled) { @apply cursor-not-allowed opacity-50; }',
    ]),
    '}',
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

// --- Lint ------------------------------------------------------------------------

const { findings, summary } = lint(designMd);
for (const { severity, path, message } of findings.filter((finding) => finding.severity !== 'info')) {
    console.log(`${severity.padEnd(7)} ${path ?? ''} ${message}`);
}
console.log(`DESIGN.md lint: ${summary.errors} errors, ${summary.warnings} warnings; prose drift: ${drift.length}; prototype CSS: ${prototypeCssCompiles ? 'ok' : 'fails'}`);
process.exitCode = summary.errors > 0 || drift.length > 0 || !prototypeCssCompiles ? 1 : 0;
