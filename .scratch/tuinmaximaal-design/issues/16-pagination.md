# 16: Pagination from Figma

**What to build:** Prototypes paginate with the Figma component `1495:7515` (file "Tuinmaximaal for Claude") instead of the theme's current pager. The theme's `Magento_Theme/templates/html/pager.phtml` still draws 40px items, an underlined bold current page and solid #809700 arrow squares. It is to be refactored to match later, so the skill records the gap as an open known exception.

**Status:** done

- [x] DESIGN.md → Components → Pagination documents the markup, item states, the slots per breakpoint, the layout and the store labels.
- [x] The design sync generates the `pagination` classes into the skeleton's prototype additions. The sync reports 0 lint errors, 0 drift, prototype CSS ok and examples ok.
- [x] DESIGN.md → Known exceptions → Pagination names the theme template and the refactor.
- [x] build.md and audit.md point to Components → Pagination.
- [x] `tmp/prototypes/eval10-zonwering-i6.html` replaces its hand-built pager in all three variants.

## Comments

- The tokens map one to one:
  - The current page takes the selected card's look: `tmx-primary-lighterGreenSubtle` #F8FCE6 and a 2px `tmx-primary-lighterGreen` #809700 border, the theme's `pager` colour.
  - The other items use a light-grey border and grey text (#636363, 5.9:1 on white).
- Deviations from Figma:
  - Below `sm` the items take `px-3`. With Figma's `px-5`, "1 2 … 10" plus the arrows is 346px, past the 343px of a 375px page.
  - The side columns are `flex-1`, not 180px, because "Producten 1 tot 9 van 188 in totaal" wraps in 180px.
  - The limiter is the theme's `.form-select`, not Figma's 6px-rounded dropdown.
  - Hover (grey border, green text) and focus (the 4px form ring) aren't in Figma; they follow Forms.
  - The "…" jump keeps Figma's bordered box, as a link, since the theme's jump is one.
- Measured in the prototype: 46px items, the current page 53 × 46 with a 2px #809700 border on #F8FCE6. At `xl` the pages are centred (270px either side); at 375px the row is 316px wide with no page overflow.
- **Open:** the limiter options (9, 18, 36) are a guess from 188 results over 21 pages. Staging's own per-page values weren't checked.
- **For the FED lead:** the classes are new (`pagination`, `pagination-item`, …). The structure matches the theme's (`nav > ol > li`, `aria-current="page"`, sr-only "Pagina" labels, jump links), so the refactor restyles `pager.phtml` without changing its behaviour.
