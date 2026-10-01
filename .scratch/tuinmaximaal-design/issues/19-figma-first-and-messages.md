# 19: Figma first, and the messages from Figma

**What to build:** The user's rule is that the "Tuinmaximaal for Claude" Figma file is the most up-to-date design, so where it differs from the theme, prototypes build the Figma version. Messages follow Figma `6814:5244` in both variants, and fill is the default.

**Status:** done

- [x] DESIGN.md → Components opens with "Figma first":
  - Build the Figma version through the skeleton's prototype classes.
  - Tokens still come from the theme, with the nearest token for a Figma value that has none.
  - Record each gap under Known exceptions.
  - A theme-only component follows the theme.
- [x] DESIGN.md → Messages covers Figma's spacing (`p-4 gap-3`, no margin), text at 90%, the notice on `tmx-neutral-lightestGrey`, Figma's four Mingcute icons, fill as the default, the `--outline` variant for a calm inline note inside a step, and the `role` rules. The border rule and audit.md now allow the outline message.
- [x] Known exceptions → Messages records the theme gap for the FED lead.
- [x] Three Figma values that this session had let the theme or a rule override now follow Figma:
  - the pagination dropdown (80px, 6px corners, `pl-3.5 pr-9`);
  - the split image heading's 32px line-height;
  - 90% text in the split image paragraphs and quote and in the image-text item's description.
- [x] build.md → Build traps: "An override in the wrong layer".

## Comments

- **Cascade-layer bug, found by measuring:**
  - The theme's `messages.css` and part of `forms.css` are unlayered in the skeleton, and an unlayered rule beats every `@layer`.
  - So the first message overrides, written in `@layer components`, silently lost padding, gap, margin, fill and text colour. Only the new properties (opacity, border) applied.
  - The pagination dropdown's `pr-9` had the same problem.
  - The sync now writes these overrides in an unlayered block after the prototype additions. The other overrides added this session sit over layered theme rules, such as typography in `@layer base`, and were unaffected.
- **Measured headlessly** (Playwright, `tmp/prototypes/messages-check.html`):
  - All five types in fill and outline match Figma: 16px padding, 12px gap, 4px corners, no margin, 14px text at 90%, 20px icons in the status colour.
  - Fill: `-subtle` background with `-strong` text; notice #F9FAFB.
  - Outline: transparent, a #E3E3E3 border, #404040 text.
  - The dropdown is 80 × 44 with 6px corners.
- **Nearest token:** Figma's notice text #111827 has no token, so it stays `tmx-status-neutral-strong` #171717.
- **Still theme-over-Figma, from the older Figma file (`wDIT75ExH0XtOnYIrozPlM`):**
  - product-tile price chip: Figma `p-2`, theme `py-1 px-2`;
  - image-tile amount: Figma 28px with `py-2.5`, theme 24px with `py-1.5`;
  - carousel arrows: Figma adds a light-grey border.
  - Before flipping these, confirm the current version of each component in "Tuinmaximaal for Claude".
