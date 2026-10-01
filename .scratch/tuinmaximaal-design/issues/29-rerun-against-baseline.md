# 29: Rerun against the baseline

**What to build:** The user can see whether the lean design document (28) kept quality while cutting context. All eval prompts, the two from 27 included, are rerun in fresh sessions with the updated skill and compared with the 27 baseline, as in 10 and 14.

**Blocked by:** 27 (Component eval prompts and the baseline rerun), 28 (Lean design document).

**Status:** done

- [x] Every prompt is rerun in a fresh session with the skill after 28, fingerprinted at the start and the end.
- [x] One comparison file shows each build prompt's baseline and new screenshots side by side at 375px and `xl`.
- [x] The results table has a row per prompt with the date, the commit, pass or fail, main-context token use, and notes on any failed criterion.
- [x] The hand-over names, per prompt, the main-context change against 27, and any prompt where quality dropped.
- [x] The hand-over names any build that hand-built a component instead of reading its file, and whether the index trigger for it should be sharpened.
- [x] If quality dropped, the hand-over says whether a separate rerun of the front-matter skip alone is needed to find the cause.

## Comments

- Ran as fresh general-purpose sub-agent sessions, all 12 in one round, with the issue 27 session and skill-pin notes so the token counts compare with i7. The skill was pinned at d5ca91f (issue 28; HEAD has the same skill tree) as a `git archive` in `tmp/skill-d5ca91f/`, fingerprinted unchanged at the start and the end (`tmp/prototypes/rerun-i8/skill-fingerprint.txt`); no transcript touched the live folder. Output is in `tmp/prototypes/rerun-i8/`: `compare.html` (i7 vs i8 at 375px and `xl`), `grading-notes.md` (with a table of the component files each build read), the check JSON, `bands/` and fresh staging snapshots. New scripts in `tmp/shots/`: `reads-i8.mjs` (DESIGN.md ranges and component files read per transcript), `uses-i8.mjs` (the component files a prototype's markup needs), `band-i8.mjs` (the band check at 1600px, where a contained box no longer spans the viewport), `ovl-i8.mjs`, `grade-i8.sh`, `modal-run-i8.mjs`.
- 28 works as specified in practice: every build and audit read DESIGN.md from "# Tuinmaximaal design system" on and never the front matter; builds read the component files their plan named (plus the occasional extra, mostly reviews.md); every reviewer and design-system axis read all eight files.
- Result: 6 of 12 pass (i7: 8 of 12). 11 fixed its i7 failure. Failures:
  - 1, 4 and 6 (again) and 3 (new; as in i6): text on full-width sand or beige bands that aren't tile bands.
  - 2 (new): nine primaries in one view on A's tiles, flagged P1 by the reviewer and kept by the builder.
  - 5 (new; as in i5): C is a text-only strip with no big moment.
- Main context fell on all 12 prompts: 1 −5 %, 2 −12 %, 3 −15 %, 4 −2 %, 5 −25 %, 6 −19 %, 7 −40 %, 8 −24 %, 9 −20 %, 10 −22 %, 11 −13 %, 12 −12 %. Combined 1,707k (i7 2,046k, −17 %, about −28k each); the ten repeated prompts are back at the i6 level (1,443k vs 1,456k). The audits fell most: 7's main session left the full DESIGN.md read to its axes.
- Quality drop: 2, 3 and 5 went from pass to fail. A separate rerun of the front-matter skip alone isn't needed to find the cause. None of the failed rules lives in the front matter or in a component file a build skipped. 3's band is the issue 14 Container vs Surfaces tension that 1, 4 and 6 also fail. 2 and 5 break rules every session read (one primary per view, one big moment), and they repeat earlier runs' failures (i5 prompts 9 and 5). The next step is resolving the band rule, then rerunning 2, 3 and 5 to separate variance from cause.
- Hand-built component: 6 built C's photo + form split image by hand before reading content-patterns.md; the reviewer caught it and the session switched to `split-image --plain`. The Content patterns index line ("any text + image or video block") doesn't read as covering a photo beside a form: sharpen it, e.g. "any photo beside text, a form or a box". 3 also hand-built a notice line before switching to the warning message, but it had read messages.md, so that's not a trigger problem.
- Found along the way: the eval set's component criteria (prompt 11) still point at "DESIGN.md → Components → …" for the sections 28 moved into `components/`.
