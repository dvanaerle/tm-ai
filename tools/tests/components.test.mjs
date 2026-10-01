import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const skill = resolve(import.meta.dirname, '../../skills/tuinmaximaal-design');
const read = (path) => readFileSync(path, 'utf8').replace(/\r\n/g, '\n');

/** The component files DESIGN.md → Components indexes: one `- **Name** ([components/file.md](components/file.md)): trigger` line each. */
const indexed = () => {
    const design = read(join(skill, 'DESIGN.md'));
    const components = design.slice(design.indexOf('\n## Components\n'), design.indexOf('\n## Motion\n'));
    return [...components.matchAll(/^- \*\*[^*]+\*\* \(\[components\/([\w-]+\.md)\]\(components\/\1\)\): \S/gm)].map(([, file]) => file);
};
const files = () => (existsSync(join(skill, 'components')) ? readdirSync(join(skill, 'components')).filter((file) => file.endsWith('.md')) : []);

test('DESIGN.md indexes at least one component file', () => {
    assert.ok(indexed().length > 0);
});

test('every index line names a component file that exists', () => {
    assert.deepEqual(indexed().filter((file) => !existsSync(join(skill, 'components', file))), []);
});

test('every component file has an index line', () => {
    const lines = indexed();
    assert.deepEqual(files().filter((file) => !lines.includes(file)), []);
});

test('every component file has one index line', () => {
    const lines = indexed();
    assert.deepEqual(lines.filter((file, index) => lines.indexOf(file) !== index), []);
});
