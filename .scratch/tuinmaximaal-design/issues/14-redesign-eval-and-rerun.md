# 14: Redesign eval and rerun

**What to build:** The user can see whether issues 12 and 13 changed what the skill produces, and future changes can't quietly undo them. The eval set gains a "redesign this page, keep the copy" prompt. It fails when the result:
- uses a content carousel
- invents copy or visuals
- puts "Lees meer" inside a content block
- has a card floating over a photo
- opens a landing page with large image tiles

All prompts are then rerun in fresh sessions and compared with the last run, as in issue 10.

**Blocked by:** 13 (Approved category landing and its patterns).

**Status:** done

- [x] The eval set has the redesign prompt and pass criteria for each failure above.
- [x] Every prompt, the new one included, is rerun in a fresh session with the updated skill.
- [x] One comparison file shows each build prompt's previous and new screenshots side by side at 375px and `xl`.
- [x] The results table has a row per prompt with the date, the commit, pass or fail, main-context token use, and notes on any failed criterion.
- [x] The hand-over names any prompt where quality dropped, and any rule from issue 12 that a build still broke.

## Comments

- Prompt 10 is a keep-the-copy redesign of staging /zonwering: a category landing like /schuifwand, but not the approved example's own page. The six failure criteria sit under "Redesign prompts (9 and 10)" in the pass criteria, so they apply to 9 as well.
- Ran as fresh general-purpose sub-agent sessions, as in 10: all 10 in one round, with the issue 10 session notes (own Playwright and port, sub-agents in the foreground). None handed off early this time. The skill was the uncommitted issues 11–13 working tree on fff849f, fingerprinted at the start and the end: unchanged. Output is in `tmp/prototypes/rerun-i6/`: `compare.html` (i5 vs i6 at 375px and `xl`, with prompt 10 beside the staging source), `grading-notes.md`, the check JSON and the staging source snapshots. `tmp/shots/check-redesign.mjs` is new. It flags content carousels, "Lees meer" in a content block, boxes over photos, the intro images, copy missing from the source text, foreign images, big numbers and drawn SVGs.
- Result: 8 of 10 pass (i5: 7 of 9). Both redesign prompts pass all six redesign criteria, and 9 fixed its i5 failure (four image tiles with four primaries). Failures:
  - 3 (new): a full-width sand notice band above the beige intro. The reviewer flagged it; the builder kept it.
  - 4 (again): a full-width band that isn't a tile band, now beige around the comparison table. Not flagged.
- Quality drop: prompt 3 went from pass to fail. Main context grew on 6 of the 9 repeated prompts (1, 2, 4, 5, 6 and 8, by 5–41 %; most on 4, at 208k) and fell on 3, 7 and 9; 10 used 187k. The likely cause is what issues 12 and 13 added to DESIGN.md, audit.md and examples.md.
- No build broke an issue 12 redesign rule in 9 or 10. But issue 12's surface rule ("A beige or sand band … breaks the white") is the likely trigger for the full-width bands in 3 and 4, which break the container rule. One of the two rules should say which bands it means.
