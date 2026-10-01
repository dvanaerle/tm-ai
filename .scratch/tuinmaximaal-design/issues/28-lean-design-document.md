# 28: Lean design document

**What to build:** A Build or Audit loads only the design system it needs. Today SKILL.md has the agent read all of DESIGN.md (about 1,170 lines): the generated front matter (about 360 lines, which the prose and the skeleton already carry) and Components (488 of the roughly 800 prose lines), and the audit sub-agents read it again. After this ticket the agent skips the front matter, keeps the brand rules and the core components inline, and reads a component's own file only when the page uses it. A component is also one file to add, edit or remove.

**Skip the front matter.** A check of every front-matter entry found nothing a builder needs that isn't in the prose or a skeleton class. The front matter stays, for the sync and the linter.
- SKILL.md tells the agent to read DESIGN.md from "# Tuinmaximaal design system" on.
- The prose that only explains the front matter's format is reworded or goes:
  - the generated-front-matter note (keep it, adding "skip it");
  - the token-key explanation (state the class rule instead);
  - "the front matter lists only the rhythm steps";
  - the `-border` / `-ring` stroke note;
  - "not from the global `price` token".
- Where the prose names a front-matter component as if it were a class (`surface-box`, `surface-box-strong`, `image-tile-scrim`, `pill`), it gives the utilities instead.
- The sync stops generating three values that contradict the prose and the skeleton:
  - `message-notice` (`neutral-100`; the prose has `gray-50`);
  - the messages' `0.75rem` padding (the prose has `p-4`);
  - `form-input-focus-ring` (`text-muted`; the prose has `ring/50`).
- Button labels are bold in Typography → UI text, as in Figma and the Buttons size table.
- The Colors prose gives the status hexes, so an auditor can check those contrast pairs without the skeleton.
- The audit drops the "brown breadcrumbs" contrast exception: prototypes have no breadcrumbs, and DESIGN.md has no such exception.

**Split the components.** A `components/` folder sits next to DESIGN.md, with one Markdown file per current Components heading and its fenced snippets:
- **Moves out:** Forms, Choices, Action menu, Reviews, Messages, Dialogs, Pagination and Content patterns.
- **Stays in DESIGN.md → Components:** "Figma first", Buttons, Price box, Product tile, Heading and paragraph highlight, Lists and Shell, plus an index with one line per component file naming the file and its trigger, e.g. "**Forms**: any input, textarea, select or dropdown".
- **Known exceptions:** each component's entry moves into its file under a `## Known exceptions` heading, always named that, so the FED lead's list is a search away. The cross-cutting entries stay in DESIGN.md: Checkout, Semantic colours, Focus rings, the PDP configurator button, Blog links and Deliberately omitted.
- **Build:** a step after Shape lists the components the variants use and reads each one's file before drafting; it's done when every component in the plan has had its file read.
- **Audit and review:** the design-system sub-agent and the reviewer read every component file. The CRO sub-agent is unchanged.
- **Cross-references:** every "DESIGN.md → Components → …" pointer in the references, the approved examples, the sync and the skeleton's generated comments names the component file and its heading.
- **Sync:** the prose drift check covers the component files. The DESIGN.md linter stays on DESIGN.md only.

The spec's architecture section describes the components folder and the front-matter skip.

**Blocked by:** None (can start immediately). 27 measures the baseline on a pinned commit.

**Status:** done

- [x] A Build in Claude Code never reads DESIGN.md's front matter, and reads only the component files its plan names.
- [x] The design-system audit sub-agent and the reviewer read every component file.
- [x] Every moved rule, snippet and Known exceptions entry exists in exactly one place, and no component rule is lost; a diff of the old Components section against the new files shows only moves and the rewordings above.
- [x] The sync passes: lint clean, no prose drift in DESIGN.md or the component files, the prototype CSS compiles, the examples assemble; a rerun doesn't bring back the three stale values.
- [x] `npm test` fails when an index line names a missing component file, or a component file has no index line.
- [x] No pointer anywhere in the skill or the sync still names a moved section under DESIGN.md.
- [x] Without scripts or sub-agents (claude.ai, Desktop), Build and Audit still work inline and read the component files they need.
- [x] The brand essentials in SKILL.md are unchanged.

## Comments

- Implemented. Rewordings beyond the list above, all from the split: each component file opens with one line saying unqualified section names are DESIGN.md's; the old Forms exception is split into a Forms and a Choices entry; "The theme has no swatch, action menu, quantity selector or star rating matching Figma's" is split over choices.md, action-menu.md (a new one-line entry) and reviews.md; in-file pointers to their own exceptions read "Known exceptions, below" or "(above)". The Buttons exception stays in DESIGN.md, since Buttons stays inline. The build's new step is "2. Read the components" (the later steps are renumbered 3 to 8, with every pointer updated), and the plan line gains `Components: …`. The sync now writes the three values from the prose (`gray-50` notice, `1rem` message padding, the `ring` focus ring) instead of dropping them. The first two acceptance items are about agent behaviour: the skill text requires them, and issue 29's rerun confirms them in practice.
