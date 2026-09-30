# 12: Redesign rules from /schuifwand

**What to build:** A redesign built with the skill lands where the four /schuifwand rounds ended, without the user steering it there again. The rules the user gave across those rounds live in DESIGN.md, build and audit, and the audit flags each one:

- **Content.**
  - A "keep the copy" redesign reorganises the existing copy and uses the page's own images. It writes no new labels, captions, chart titles or stats. When a structure needs a label the copy doesn't have, the build leaves the structure out or asks.
  - No invented visuals: no custom illustrations, diagrams, bar charts or "365"-style numbers. Data is shown only when it already sits on the page, as icons and ticks.
- **Light content block.** A product content block holds the name, the price, the first sentence, the USP list and two buttons. It has no "Lees meer" (opening it stretches the flush photo), no icon rows and no colour lines such as "Handgrepen in 3 kleuren". "+ Lees meer" is fine for secondary text in cards, in one section per page.
- **Layout.**
  - Content stacks vertically, mobile-first: no content carousels. The theme's own sliders, such as related products, stay allowed.
  - No cards float over or overlap a photo.
  - A category or landing intro is the H1 and intro beside a modest photo. Large image tiles felt bulky and "in your face".
  - The page changes surface every one or two sections, so there are no long bare-white stretches; "whitespace first" was read too literally.
- **Variants.** A bold variant is bold within the house patterns (composition, photography, the highlight), not a new interaction model. The need filter, the floating card, product carousels and custom drawings were all rejected. Once a direction is agreed, the next round shares that base and varies only the open question.
- **Build traps.** The check step names the four traps these rounds hit, or the skeleton fixes them where it can:
  - screen-reader-only text escaping an unpositioned scroll container
  - a `fieldset` that won't shrink (`min-w-0`)
  - measuring layout before the Tailwind CDN has styled the page (wait for it, e.g. with a ResizeObserver)
  - lazy images missing from automated screenshots

**Blocked by:** None (can start immediately).

**Status:** done

- [x] DESIGN.md, build and audit state each rule above in the house style, without repeating what issue 11 already covers (content-block markup, see-through tertiary, `gap-2`, `Gumax<sup>®</sup>`).
- [x] The audit has a flag for invented copy, invented visuals, a content carousel, a floating card, "Lees meer" in a content block, and an intro built from large image tiles on a landing page.
- [x] The build rules for bold variants and later rounds say what "bold" may and may not change.
- [x] The check step lists the four build traps, and any trap the skeleton can fix is fixed there.
- [x] The design sync still runs clean: no lint errors, no drift, and the prototype CSS compiles.
- [x] SKILL.md's main context stays lean (issue 09): the new rules go into DESIGN.md and the references, not SKILL.md, unless they are brand essentials.

## Comments

- Rules landed in DESIGN.md (Overview → Expression and Redesigns; Layout → Vertical flow, Nothing over a photo, Beige intro; Elevation & Depth → Surfaces; Forms; Content patterns → Content block, Image tile, Carousel arrows; Don'ts), build (Shape → Source, bold and Later rounds, rules, Copy, checks and Build traps), audit (Layout, Redesigns, craft-floor flags) and review (source-page check). SKILL.md is unchanged.
- The skeleton fixes three traps: `fieldset` gets `min-w-0`; `.option-card` and the `overflow-*` scroll containers get `relative`; a script switches lazy images to eager, also ones added later. The CDN-timing trap can't be fixed in the skeleton, so the check step names it (measure in a `ResizeObserver`).
- Verified on `tmp/prototypes/traps-check/traps.html` at 375px: `scrollWidth` 375 with `sr-only` text in a scroll row, fieldset 343px wide, a lazy image 2000px below the fold loaded. Sync: 0 lint errors, 0 drift, prototype CSS ok; `npm test` 17/17.
