# 18: Accordion, and the FAQ built from it

**What to build:** The Figma accordion `2255:4455` (file "Tuinmaximaal for Claude") becomes a content pattern, and the FAQ is defined as that accordion. It replaces the FAQ rule "outlined `rounded-2` rows, `gap-3`, a chevron".

**Status:** done

- [x] DESIGN.md → Content patterns → Accordion and FAQ: markup, the row, the answer, an optional leading icon, the variants and the FAQ rule. The box decision notes that an FAQ row takes the accordion's `rounded-1`.
- [x] The design sync generates the `accordion` classes on a native `details` element: `accordion-title`, `accordion-toggle --closed/--open`, `accordion-body`, and the modifiers `--on-surface` and `--plain`. The sync reports 0 lint errors, 0 drift, prototype CSS ok and examples ok.
- [x] build.md and audit.md list "accordion and FAQ" among the patterns.
- [x] All three FAQs in `tmp/prototypes/eval10-zonwering-i6.html` use it: outlined in A and B, `--on-surface` on C's band.

## Comments

- From Figma:
  - Row: a 1px light-grey border, `rounded-1`, `px-4 py-3`, and `gap-2` between rows.
  - Question: 16px bold green.
  - Toggle: a 20px plus when closed, a minus when open, 6px from the text.
  - Answer: 14px grey (#636363, 5.9:1 on white), 12px under the question.
  - Figma also has a borderless row and a row with a leading icon.
- The padding sits on the `summary`, so the whole 48px row is the hit area. Figma pads the container instead.
- Figma's SVG export returns the base component's slate chevrons, but the render shows a plus and a minus (layers `add_line` / `minimize_line`). The skill follows the render, drawn as 1.5px `currentColor` strokes. If the exact Mingcute glyphs matter, export them from the instance.
- `--on-surface` isn't in Figma. It applies the box rule, no border for a card on a band, to C's FAQ on a tinted band.
- The FAQ opens with every row closed. The old prototypes opened the first answer.
- Measured with headless Playwright (the app window was minimized, so the pane couldn't draw):
  - at 1280px, 896 × 50 closed rows (48px question) and a 125px open row, `rounded-1`, 1px border in A, none in C, 8px gaps;
  - at 375px, 343px rows, with long questions wrapping to two or three lines and no overflow.
