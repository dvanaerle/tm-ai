import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { cpSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const skill = resolve(import.meta.dirname, '../../skills/tuinmaximaal-design');
const script = join(skill, 'scripts/assemble.mjs');
const read = (name) => readFileSync(join(skill, 'assets', name), 'utf8').replace(/\r\n/g, '\n');

const registry = [
    { key: 'A', name: 'Stacked', tradeoff: 'Tests a single column, at the cost of length.' },
    { key: 'B', name: 'Split', tradeoff: 'Tests a two-column split, at the cost of image size.' },
    { key: 'C', name: 'Sticky bar', tradeoff: 'Bold: tests a sticky summary bar, at the cost of calm.' },
];
const plan = 'Question: which layout sells the veranda? Goal: start configuring. Audience: first visitors. Primary action: configurator. N: 3.';
const sections = registry.map(({ key }) => `<section data-variant="${key}">\n    <div class="container">Variant ${key}</div>\n</section>`).join('\n');

const partsFile = (slots) =>
    Object.entries(slots).map(([name, body]) => `<!-- slot: ${name} -->\n${body}\n`).join('\n');

function run(parts, { assets } = {}) {
    const dir = mkdtempSync(join(tmpdir(), 'assemble-'));
    const input = join(dir, 'parts.html');
    const output = join(dir, 'out.html');
    writeFileSync(input, parts);
    const args = [script, input, output, ...(assets ? ['--assets', assets] : [])];
    const result = spawnSync(process.execPath, args, { encoding: 'utf8' });
    let html = null;
    try { html = readFileSync(output, 'utf8'); } catch { /* not written */ }
    return { ...result, html };
}

// The inline fallback in references/build.md → Wire it together, done by hand.
function manual({ title, head = '', scripts = '', breadcrumb } = {}) {
    const logo = read('logo.svg').trim().replace('<svg ', '<svg class="h-11 w-auto" aria-hidden="true" ');
    let html = read('prototype-skeleton.html')
        .replace('PLAN_LINE', plan)
        .replace('TAILWIND_CONFIG', () => read('tailwind.config.js').trim())
        .replace('LOGO_SVG', () => logo)
        .replace(/(<script type="application\/json" id="prototype-variants">\n)[\s\S]*?(\n<\/script>)/, (_, open, close) => open + JSON.stringify(registry, null, 2) + close)
        .replace(/(<main class="pb-28">\n)[\s\S]*?(<\/main>)/, (_, open, close) => open + sections + '\n' + close);
    if (breadcrumb) {
        const shell = read('page-shell.html').replace(/^<!--[\s\S]*?-->\n/, '').replace('LOGO_SVG', () => logo).replace('BREADCRUMB', breadcrumb);
        const [top, footer] = shell.split('<main>…</main>\n');
        html = html
            .replace(/<!-- ===== Page frame[\s\S]*?<\/header>\n/, () => top.trim() + '\n')
            .replace('</main>\n', () => '</main>\n' + footer.trim() + '\n');
    }
    if (title) html = html.replace('<title>PROTOTYPE · Tuinmaximaal</title>', `<title>PROTOTYPE · ${title} · Tuinmaximaal</title>`);
    if (head) html = html.replace('</head>', () => head + '\n</head>');
    if (scripts) html = html.replace('</body>', () => scripts + '\n</body>');
    return html;
}

test('assembles the same file as a manual assembly of the skeleton', () => {
    const { status, stderr, html } = run(partsFile({ plan, variants: JSON.stringify(registry), main: sections }));
    assert.equal(status, 0, stderr);
    assert.equal(html, manual());
});

test('adds the title, extra head tags and body scripts, as for a React prototype', () => {
    const head = '<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>\n<style type="text/tailwindcss">\n.gap-fix { @apply gap-4; }\n</style>';
    const scripts = '<script type="text/babel">\nReactDOM.createRoot(document.querySelector("main")).render(<section data-variant="A" />);\n</script>';
    const { status, stderr, html } = run(partsFile({ plan, title: 'Veranda PDP', variants: JSON.stringify(registry), head, main: sections, scripts }));
    assert.equal(status, 0, stderr);
    assert.equal(html, manual({ title: 'Veranda PDP', head, scripts }));
});

test('swaps the green bar for the full page shell when the parts fill the breadcrumb', () => {
    const { status, stderr, html } = run(partsFile({ plan, variants: JSON.stringify(registry), breadcrumb: 'Veranda', main: sections }));
    assert.equal(status, 0, stderr);
    assert.equal(html, manual({ breadcrumb: 'Veranda' }));
    assert.match(html, /<footer class="bg-footer/);
});

function assetsWith(name, edit) {
    const dir = mkdtempSync(join(tmpdir(), 'assets-'));
    cpSync(join(skill, 'assets'), dir, { recursive: true });
    writeFileSync(join(dir, name), edit(read(name)));
    return dir;
}

const valid = partsFile({ plan, variants: JSON.stringify(registry), main: sections });

const withRegistry = (entries, main = sections) => partsFile({ plan, variants: JSON.stringify(entries), main });
const invalidParts = {
    'the plan slot is missing': partsFile({ variants: JSON.stringify(registry), main: sections }),
    'the plan slot is empty': partsFile({ plan: '', variants: JSON.stringify(registry), main: sections }),
    'the main slot is missing': partsFile({ plan, variants: JSON.stringify(registry) }),
    'the variants slot is not JSON': partsFile({ plan, variants: '[{ key: A }]', main: sections }),
    'a registry entry has no trade-off': withRegistry([...registry.slice(0, 2), { key: 'C', name: 'Sticky bar' }]),
    'a registry entry keeps the skeleton placeholder': withRegistry([...registry.slice(0, 2), { key: 'C', name: 'VARIANT_NAME', tradeoff: 'x' }]),
    'two registry entries share a key': withRegistry([...registry.slice(0, 2), { ...registry[2], key: 'B' }]),
    'there are more than 5 variants': withRegistry(
        'ABCDEF'.split('').map((key) => ({ key, name: key, tradeoff: key })),
        'ABCDEF'.split('').map((key) => `<section data-variant="${key}"></section>`).join('\n'),
    ),
    'a registry key has no section': withRegistry(registry, sections.replace('data-variant="C"', 'data-variant="X"')),
    'the slot name is unknown': valid + partsFile({ footer: '<footer></footer>' }),
    'the breadcrumb slot is left as the placeholder': valid + partsFile({ breadcrumb: 'BREADCRUMB' }),
};
for (const [reason, parts] of Object.entries(invalidParts)) {
    test(`fails without writing when ${reason}`, () => {
        const { status, stderr, html } = run(parts);
        assert.notEqual(status, 0);
        assert.match(stderr, /^assemble: /);
        assert.equal(html, null);
    });
}

for (const placeholder of ['PLAN_LINE', 'TAILWIND_CONFIG', 'LOGO_SVG']) {
    test(`fails without writing when the skeleton lacks ${placeholder}`, () => {
        const assets = assetsWith('prototype-skeleton.html', (html) => html.replace(placeholder, ''));
        const { status, stderr, html } = run(valid, { assets });
        assert.notEqual(status, 0);
        assert.match(stderr, new RegExp(placeholder));
        assert.equal(html, null);
    });
}
