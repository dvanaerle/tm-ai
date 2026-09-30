#!/usr/bin/env node
/**
 * Assembles a prototype from the parts an agent writes, so the skeleton, the Tailwind config and
 * the logo never pass through the agent's context. Usage:
 *
 *   node assemble.mjs <parts.html> <out.html> [--assets <dir>]
 *
 * The parts file holds slots, each opened by a `<!-- slot: NAME -->` line (see references/build.md → Wire it together).
 * Fails without writing when a placeholder is missing from the assets or left unfilled.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const fail = (message) => {
    console.error(`assemble: ${message}`);
    process.exit(1);
};
const args = process.argv.slice(2);
const assetsAt = args.indexOf('--assets');
const assets = assetsAt === -1 ? resolve(import.meta.dirname, '../assets') : resolve(args.splice(assetsAt, 2)[1]);
const [input, output] = args;
if (!input || !output) fail('usage: node assemble.mjs <parts.html> <out.html> [--assets <dir>]');
const read = (path) => readFileSync(path, 'utf8').replace(/\r\n/g, '\n');

// Replaces the one occurrence of `pattern` in `html`; anything else means the asset changed shape.
function fill(html, pattern, replace, what, file) {
    const count = typeof pattern === 'string' ? html.split(pattern).length - 1 : (html.match(new RegExp(pattern, 'g')) ?? []).length;
    if (count !== 1) fail(`${file} has ${count} × ${what}, expected exactly 1`);
    return html.replace(pattern, replace);
}

// --- Parts -------------------------------------------------------------------------
const required = ['plan', 'variants', 'main'];
const optional = ['title', 'head', 'breadcrumb', 'scripts'];
const slots = {};
for (const [, name, body] of read(input).matchAll(/^<!-- slot: ([\w-]+) -->\n([\s\S]*?)(?=^<!-- slot: |(?![\s\S]))/gm)) {
    if (!required.includes(name) && !optional.includes(name)) fail(`unknown slot "${name}"; the slots are ${[...required, ...optional].join(', ')}`);
    if (name in slots) fail(`slot "${name}" appears twice`);
    slots[name] = body.trim();
}
for (const name of required) if (!slots[name]) fail(`slot "${name}" is missing or empty`);

let registry;
try { registry = JSON.parse(slots.variants); } catch (error) { fail(`slot "variants" is not valid JSON: ${error.message}`); }
if (!Array.isArray(registry) || registry.length < 1 || registry.length > 5) fail('slot "variants" must be an array of 1 to 5 entries');
for (const [index, entry] of registry.entries()) {
    for (const field of ['key', 'name', 'tradeoff']) {
        if (typeof entry?.[field] !== 'string' || !entry[field].trim()) fail(`variant ${index + 1} has no "${field}"`);
    }
}
const keys = registry.map(({ key }) => key);
if (new Set(keys).size !== keys.length) fail(`variant keys repeat: ${keys.join(', ')}`);
const rendered = `${slots.main}\n${slots.scripts ?? ''}`;
for (const key of keys) {
    if (!rendered.includes(`data-variant="${key}"`)) fail(`variant ${key} has no <section data-variant="${key}"> in the main or scripts slot`);
}
for (const [, key] of slots.main.matchAll(/data-variant="([^"]*)"/g)) {
    if (!keys.includes(key)) fail(`<section data-variant="${key}"> has no entry in the variants registry`);
}

// --- Assembly ----------------------------------------------------------------------
const skeletonFile = 'prototype-skeleton.html';
const shellFile = 'page-shell.html';
const logo = read(join(assets, 'logo.svg')).trim().replace('<svg ', '<svg class="h-11 w-auto" aria-hidden="true" ');
let html = read(join(assets, skeletonFile));
html = fill(html, 'PLAN_LINE', () => slots.plan, 'PLAN_LINE', skeletonFile);
html = fill(html, 'TAILWIND_CONFIG', () => read(join(assets, 'tailwind.config.js')).trim(), 'TAILWIND_CONFIG', skeletonFile);
html = fill(html, 'LOGO_SVG', () => logo, 'LOGO_SVG', skeletonFile);
html = fill(html, /(<script type="application\/json" id="prototype-variants">\n)[\s\S]*?(\n<\/script>)/, (_, open, close) => open + JSON.stringify(registry, null, 2) + close, 'the variants registry', skeletonFile);
html = fill(html, /(<main class="pb-28">\n)[\s\S]*?(<\/main>)/, (_, open, close) => open + slots.main + '\n' + close, '<main class="pb-28">', skeletonFile);
if (slots.breadcrumb) {
    let shell = read(join(assets, shellFile)).replace(/^<!--[\s\S]*?-->\n/, '');
    shell = fill(shell, 'LOGO_SVG', () => logo, 'LOGO_SVG', shellFile);
    shell = fill(shell, 'BREADCRUMB', () => slots.breadcrumb, 'BREADCRUMB', shellFile);
    if (shell.split('<main>…</main>\n').length !== 2) fail(`${shellFile} needs exactly one <main>…</main> line between header and footer`);
    const [top, footer] = shell.split('<main>…</main>\n');
    html = fill(html, /<!-- ===== Page frame[\s\S]*?<\/header>\n/, () => top.trim() + '\n', 'the page frame', skeletonFile);
    html = html.replace('</main>\n', () => '</main>\n' + footer.trim() + '\n');
}
if (slots.title) html = fill(html, '<title>PROTOTYPE · Tuinmaximaal</title>', () => `<title>PROTOTYPE · ${slots.title} · Tuinmaximaal</title>`, '<title>', skeletonFile);
if (slots.head) html = fill(html, '</head>', () => slots.head + '\n</head>', '</head>', skeletonFile);
if (slots.scripts) html = fill(html, '</body>', () => slots.scripts + '\n</body>', '</body>', skeletonFile);

const left = html.match(/\b(PLAN_LINE|TAILWIND_CONFIG|LOGO_SVG|VARIANT_NAME|VARIANT_TRADEOFF|BREADCRUMB)\b/);
if (left) fail(`placeholder ${left[1]} is still unfilled`);

writeFileSync(output, html);
console.log(`Wrote ${output}: ${keys.length} variants (${keys.join(', ')})${slots.breadcrumb ? ', full page shell' : ''}.`);
