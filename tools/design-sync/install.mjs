#!/usr/bin/env node
/**
 * Installs the workspace's tuinmaximaal-design skill into the personal Claude Code skills folder
 * as a link, so Claude Code always runs the maintained copy. An existing link is replaced;
 * an existing real folder is left alone.
 */
import { lstatSync, mkdirSync, rmSync, symlinkSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';

const source = resolve(import.meta.dirname, '../../skills/tuinmaximaal-design');
const skillsDir = join(homedir(), '.claude', 'skills');
const target = join(skillsDir, 'tuinmaximaal-design');

mkdirSync(skillsDir, { recursive: true });
const existing = lstatSync(target, { throwIfNoEntry: false });
if (existing && !existing.isSymbolicLink()) {
    console.error(`${target} exists and is not a link; remove it first.`);
    process.exit(1);
}
if (existing) rmSync(target);
symlinkSync(source, target, 'junction');
console.log(`Linked ${target} → ${source}`);
