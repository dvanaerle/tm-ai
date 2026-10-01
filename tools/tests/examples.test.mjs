import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const skill = resolve(import.meta.dirname, '../../skills/tuinmaximaal-design');
const examples = join(skill, 'assets/examples');
const read = (path) => readFileSync(path, 'utf8').replace(/\r\n/g, '\n');
const names = readdirSync(examples).filter((file) => file.endsWith('.parts.html')).map((file) => file.replace('.parts.html', ''));

test('the skill has at least one approved example', () => {
    assert.ok(names.length > 0);
});

/** The outer HTML of the element whose opening tag starts at `start`, found by counting tags of the same name. */
function element(html, start) {
    const tag = html.slice(start).match(/^<([\w-]+)/)[1];
    const tags = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'g');
    tags.lastIndex = start;
    let depth = 0;
    for (const match of html.matchAll(tags)) {
        if (match.index < start) continue;
        depth += match[1] ? -1 : 1;
        if (depth === 0) return html.slice(start, match.index + match[0].length);
    }
    throw new Error(`<${tag}> at ${start} is never closed`);
}

// The build rules a script can check (references/build.md → 3 and 6), on the markup the example's author wrote.
const rules = {
    'uses no arbitrary values': (parts) => assert.doesNotMatch(parts, /class="[^"]*\[/),
    'uses Figma\'s button sizes, not the theme\'s btn-size-*': (parts) => assert.doesNotMatch(parts, /btn-size-/),
    'colours with the semantic tokens, not tmx-*': (parts) => assert.doesNotMatch(parts, /class="[^"]*\btmx-/),
    'writes Gumax<sup>®</sup> in page text': (parts) => {
        const text = parts.replace(/<script[\s\S]*?<\/script>/g, '').split(/<[^>]*>/);
        assert.deepEqual(text.filter((segment) => segment.includes('Gumax®')), []);
    },
    'keeps its product blocks light, in the skeleton\'s split image': (parts) => {
        const blocks = [...parts.matchAll(/<\w+[^>]*class="split-image[" ]/g)].map((match) => element(parts, match.index));
        assert.ok(blocks.length > 0, 'no .split-image');
        for (const block of blocks) assert.doesNotMatch(block, /Lees meer|<details/);
    },
};

for (const name of names) {
    for (const [rule, check] of Object.entries(rules)) {
        test(`${name}: ${rule}`, () => check(read(join(examples, `${name}.parts.html`))));
    }
    test(`${name}: the committed file is its parts, assembled`, () => {
        const output = join(mkdtempSync(join(tmpdir(), 'example-')), `${name}.html`);
        const result = spawnSync(process.execPath, [join(skill, 'scripts/assemble.mjs'), join(examples, `${name}.parts.html`), output], { encoding: 'utf8' });
        assert.equal(result.status, 0, result.stderr);
        assert.equal(read(join(examples, `${name}.html`)), read(output), 'run the design sync, or assemble.mjs, to re-assemble it');
    });
}
