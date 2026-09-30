# 13: Approved category landing and its patterns

**What to build:** A build can start from an approved example instead of from scratch, so a category landing looks right the first time. The /schuifwand round-4 variant A (the one the user approved) becomes the skill's reference category landing, cleaned against issue 12's rules. Its new patterns are documented:

- **Sticky product tabs.** Per tab: a 16:9 thumbnail (hidden on small screens), the product name, and the "Vanaf €" price. The tabs follow the scroll. The active tab gets a beige pill; there is no orange bar and no text-only tab. The orange active-state rule narrows to the main menu.
- **Comparison table ("Alle … ").** Need rows with ticks, colour swatches and a primary button per product, below the product blocks. It fits 375px without sideways scrolling: short names, and the colour and button rows only from `md`.

Next to the example sit screenshots at 375px and `xl`, plus a few do/don't pairs from the four rounds:
- bulky image tiles vs the calm intro
- orange tab bar vs the beige pill
- carousel vs stacked
- a content block stretched by "Lees meer" vs the light block

**Blocked by:** 12 (Redesign rules from /schuifwand).

**Status:** done

- [x] The approved example is in the skill's assets, self-contained, and passes the build check list including issue 12's rules.
- [x] DESIGN.md → Content patterns documents the sticky product tabs and the comparison table, each pointing to the example.
- [x] The orange rule in DESIGN.md, build and audit keeps orange active states for the main menu only; in-page tabs use the beige pill.
- [x] Screenshots of the example at 375px and `xl`, and the do/don't pairs, sit with the skill's references, and the skill links to them.
- [x] Build says to start from the closest approved example when one exists for the page type.
- [x] Known gap noted for the FED lead: RAL swatch colours have no theme tokens. The prototypes approximate them with the nearest tmx greys, black and brown; the lead should decide between tokens and a documented product-colour exception.

## Comments

- The example is `assets/examples/category-landing.parts.html` (the markup to start from) plus `category-landing.html` (assembled, self-contained). The sync re-assembles it when the skeleton changes. `tools/tests/examples.test.mjs` fails when the committed file drifts from its parts, or when the parts break a rule a script can check: arbitrary values, `btn-size-lg`, a bare `Gumax®` in page text, or "Lees meer" in a content block. `npm test` passes 23/23. The sync reports 0 lint errors, 0 drift, prototype CSS ok and examples ok.
- Cleaning against issues 11 and 12:
  - The product blocks use the skeleton's `content-block`, and page text uses `Gumax<sup>®</sup>`, the table caption included.
  - The Steel Look block dropped its third link, so it holds two buttons; the modular benefit keeps that link in its copy.
  - The side-wall cards pair the primary with a secondary, `gap-2` apart.
  - The tab script reads positions on scroll only.
  - The "Kies uw stijl" card lost its sand panel of large swatches (a stand-in for a photo the source doesn't have) and shows the three colours as a small swatch row.
  - The tab hover is lighter-green text, and "+ Lees meer" has a 44px hit area.
- **Deviation from the ticket:** the comparison's button row and price chips start at `lg`, not `md`. At 768px the four columns are 114px wide: "Stel nu samen" wrapped onto two lines, a German label overflowed, and "Vanaf € 57,75" ran past its cell. The colour row stays at `md`. DESIGN.md → Comparison table says so.
- A reviewer sub-agent (review.md) checked the example at 375px, `md` and `xl`. Kept as approved:
  - The "Vrij uitzicht" need row, paraphrased from the glass copy.
  - The unboxed "Modulair" lead beside the benefit cards.
  - The first primary button below the fold; the tabs show the prices in the first view.
- Screenshots and do/don't pairs are in `references/examples/`, described in `references/examples.md`. Links to them come from build.md → 1. Shape ("Start from the closest approved example"), SKILL.md → Build, review.md and DESIGN.md → Content patterns.
- **For the FED lead:** RAL swatch colours have no theme tokens. DESIGN.md → Known exceptions → RAL swatches records the approximation and the open decision: tokens, or a documented product-colour exception.
