# 17: Split image replaces the content block

**What to build:** The Figma split image (file "Tuinmaximaal for Claude") becomes the one text + image component: `2255:2866` on beige, `6843:32950` without a background. The user prefers it over the content block (`1358:30318`, `1358:30329`) because Figma designs it per breakpoint, and it serves short copy as well as long. It replaces the content block everywhere. It keeps the content block's buttons, its video play button and the "light product block" rule.

**Status:** done

- [x] DESIGN.md → Content patterns → Split image covers the markup, the beige and plain variants, the text styles, optional buttons (`split-image-actions`) and video (`split-image-play`). The Content block entry is gone.
- [x] The sync drops the `content-block` classes. The approved example's four product blocks, the example test, build, audit, review, examples and the eval use `split-image`. No `content-block` is left in the skill.
- [x] The example's screenshots (`category-landing-xl.jpg`, `category-landing-375.jpg`) and the "light block" Do crop are regenerated with Playwright.
- [x] The design sync generates the `split-image` classes (`--media-right`, `--plain`, `split-image-intro`, `split-image-quote`, `split-image-actions`, `split-image-play`). The sync reports 0 lint errors, 0 drift, prototype CSS ok and examples ok.
- [x] The box decision's unboxed "text + image" points to the plain split image; Quote points to `split-image-quote` inside a split image; Colors lists bone (#E0D2C5) for the quote mark only.
- [x] build.md and audit.md list the split image among the content patterns.
- [x] Checked against Figma on `tmp/prototypes/split-image-check.html`, with all four cases (beige and plain, image left and right).

## Comments

- Measured against the Figma frames:
  - **1024:** the beige block splits 505/505, its text `p-12` and top-aligned, the photo flush and as tall as the box. The plain block has a 48px gap, and its `rounded-2` photo stretches to the text height.
  - **800:** beige stays stacked (the row starts at `lg`); plain is a row with a 24px gap, like Figma's 768 frame.
  - **640:** both stack with a 360px photo; beige text is `p-6`, plain has a 24px gap.
  - **375:** no overflow.
- Deviations from Figma:
  - Below `sm` the photo is `h-64`, not 360px, which would fill most of a phone screen.
  - The text stays full green instead of Figma's 90% opacity.
  - The `h2` keeps the theme's 1.25 line-height (30px, not 32px).
- The quote mark is Figma's own glyph, inlined with `currentColor` in `tmx-secondary-bone` at its 34 × 31 size.
- When verifying in the browser pane, measurements taken right after a viewport resize can lag one step behind until a frame is drawn. Take a screenshot before measuring.
- **What the migration changes in the approved example:**
  - The product blocks sit side by side from `lg`, not `md`; at 768px they now stack with a 360px photo.
  - The text is top-aligned at `p-12`, instead of centred at `p-20` from `xl`.
  - The product name is the plain `h2` (24px), not `text-7` (28px).
  - Measured at 1280px: 1233 × 464 blocks with the photo half flush and the photo side alternating. `npm test` passes 23/23.
- `tmp/prototypes/eval10-zonwering-i6.html` predates this change and still carries its own copy of the old `content-block` CSS. The next rerun builds with `split-image`.
