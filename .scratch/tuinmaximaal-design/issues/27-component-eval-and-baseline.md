# 27: Component eval prompts and the baseline rerun

**What to build:** The user can measure what the lean design document (28) changes. Issues 15–26 added most of the design system's components, but no eval prompt uses them, and the last rerun (14) predates them. The eval set gains two prompts:
- **A Build** that needs several of the new components: a bamboo decking order step with colour swatches, a quantity, a delivery notice, and a confirmation modal before removing an item.
- **An Audit** of a snippet with planted form and dialog violations, such as a floating label, a hint not tied with `aria-describedby`, a modal that only informs, and a dialog without a way out.

All prompts, the new two included, are then rerun in fresh sessions, as in 10 and 14. The skill is pinned to commit `6cc7b7a` (issues 15–26), so 28 can land meanwhile without touching the baseline.

**Blocked by:** None (can start immediately).

**Status:** done

- [x] The eval set has both prompts, with pass criteria naming the component rules each one checks; the Audit's planted violations are listed like prompt 8's.
- [x] Every prompt is rerun in a fresh session against the skill at `6cc7b7a`, fingerprinted at the start and the end.
- [x] One comparison file shows each repeated build prompt's i6 and new screenshots side by side at 375px and `xl`.
- [x] The results table has a row per prompt with the date, the commit, pass or fail, main-context token use, and notes on any failed criterion.
- [x] The hand-over names any prompt where quality dropped since 14, and the main-context growth since 14 that issues 15–26 caused.

## Comments

- Prompt 11 is a bamboo decking order step (swatches, quantity, a delivery notice, a removal confirmation); its component criteria sit under "The component build (11)" in the pass criteria. Prompt 12 is a checkout-step snippet with a floating label, an untied hint, an error field without `aria-invalid` in a `tmx-*` orange, an informing modal opened on load and a `div` pop-up with no way out; the planted list follows prompt 8's format.
- Ran as fresh general-purpose sub-agent sessions, as in 10 and 14: all 12 in one round with the issue 10 session notes. Issue 28 was already editing `skills/tuinmaximaal-design/` (the live fingerprint changed within seconds of the start), so the skill was pinned as a `git archive` of 6cc7b7a in `tmp/skill-6cc7b7a/` (byte-identical to the commit's checkout). Each session read SKILL.md from there instead of using the Skill tool, and passed the folder to its sub-agents; none of the 29 transcripts touched the live folder. Fingerprinted at the start and the end (`tmp/prototypes/rerun-i7/skill-fingerprint.txt`): unchanged. Output is in `tmp/prototypes/rerun-i7/`: `compare.html` (i6 vs i7 at 375px and `xl`, 11 without an i6 column), `grading-notes.md`, the check JSON, `bands.txt` and `bands/` (crops of every full-width band), the component check for 11 and fresh staging snapshots for 9 and 10. New scripts in `tmp/shots/`: `check-components.mjs`, `modal-run-i7.mjs`, `band-i7.mjs`, `band-cards-i7.mjs`, `source-snap-i7.mjs`.
- Result: 8 of 12 pass (i6: 8 of 10). 3 fixed its i6 failure. Failures:
  - 1 (new): A's USP text and C's spec list on full-width sand bands.
  - 4 (third run): benefits text and a split image on full-width bands.
  - 6 (new, borderline): B's contact routes on a full-width sand band without cards.
  - 11 (new prompt): colour swatches without the `swatch-colour` chip, plus full-width total and proof bands.
- Quality drop since 14: prompts 1 and 6 went from pass to fail, both on the full-width band criterion that also failed 3 and 4 in i6. Issue 14's rule tension (Layout → Container vs Elevation & Depth → Surfaces) is unresolved at 6cc7b7a, and in 1 and 6 the reviewer's own P2 fixes created the band. 29 should read these against this baseline, not against i6.
- Main-context growth since 14 from issues 15–26: the ten repeated prompts grew from 1,456k to 1,745k combined (+20 %, about +29k each): 1 +14 %, 2 +25 %, 3 +14 %, 4 0 %, 5 +34 %, 6 +21 %, 7 +70 %, 8 +23 %, 9 +14 %, 10 +21 %. DESIGN.md nearly doubled (57.6k to 111.5k characters, about +14k tokens read whole by every session); the audits grew most in relative terms because their main context is mostly the skill. The new prompts used 185k (11) and 116k (12).
- Found along the way, for 28 or later:
  - DESIGN.md gives `swatch-colour` chip colours only for RAL; a product colour like bamboo "donkerbruin" has no token, so the builder dropped the chip.
  - Quantity → `.quantity-update` uses a primary check button, which a reviewer reads as a second primary in one view.
  - Prompt 8's audit still claims the theme has no semantic colour layer, so the semantic tokens don't reach the audit's fixes.
