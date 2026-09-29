# Evaluation set: `tuinmaximaal-design`

A fixed set of prompts for judging whether a change to the skill made results better or worse. Judge only the output (the prototype or the audit report), never the skill's wording. Run every prompt in a fresh session on both claude.ai and Claude Code, and record the results below.

## Pass criteria

For every prompt:

- only `tmx-*` and theme classes, no arbitrary values
- the primary button is `#809700`
- orange is used only for price and highlights (plus badges and active states)
- AA contrast, apart from the theme exceptions documented in DESIGN.md
- works on mobile
- long strings don't break the layout
- copy is delegated or marked as a placeholder

Build prompts (1–6, 9 when it is a build) must also have:

- 3 genuinely different variants, each with a trade-off line
- at least one bold variant per set, its trade-off line starting with "Bold:"
- no border on a white container on a white page, except an outlined box; borders only on theme components that own one, outlined boxes, or where two white surfaces meet
- one big moment per variant, matching the register (product photo plus price box on product surfaces; a large contained image with a heading highlight, or a large project photo, on brand-forward pages)
- 16:9 only on product media
- the green logo bar at production's header height instead of the full shell, unless the prompt is about the header, menu or footer
- every variant passes the logo-swap test
- the green bar is `h-15` with the `h-11` logo at every breakpoint, in the frame and the full shell
- `btn-size-sm` or the default button size only; no `btn-size-lg`
- no eyebrow or kicker label above any heading
- every heading highlight, paragraph highlight, price box and promo label tilted −2°
- all content and images inside the container; only page chrome and the beige intro run full width, as colour bands
- on whole pages, a beige intro section matching the page type; white after it by default
- only white, beige and sand surfaces on the ladder, at most one green emphasis block, no bone
- one box per job (`rounded-2`, `p-4` to `p-6`, a gap of 3 to 4), surface or outlined with one style per role, no wrapper around everything, no border on a coloured box, no box or card inside an outlined box, and nesting only one level deep with a change of surface
- a category grid (prompt 2) follows the agreed layout: beige intro band, white grid area with one box per filter group (outlined, or borderless beige), a sand trust or USP block between product rows, SEO text and FAQ in beige boxes below, tiles with their white info area and border

Whether the designs are less generic than the baseline (`tmp/prototypes/baseline/`, compared at 375px and xl), and from the third iteration closer to the live site than the i2 run, is the user's judgement, recorded in the notes.

Audit prompts (7, 8, 9 when it is an audit) must also have ranked findings, each with a rule and a fix, plus a CRO assessment covering CTA visibility, trust signals and friction. Prompt 8 must flag every planted violation; its nested cards (a white card inside a bordered white wrapper, no change of surface) still count as a violation under the one-level nesting rule.

## Prompts

1. **Veranda PDP section.** "Build a Tuinmaximaal product-page section for an aluminium veranda (3 × 4 m) with the price, key specs, USPs and the path to the configurator."
2. **Category tile grid.** "Prototype a Tuinmaximaal category grid of product tiles for garden rooms. Use long German product names such as 'Aluminium-Gartenzimmer mit Schiebewänden aus Sicherheitsglas, anthrazit, 5,06 × 3,00 m'."
3. **Notification block.** "Make a Tuinmaximaal notification block prototype (delivery delay notice), 3 variants."
4. **Bamboo decking landing.** "Prototype a Tuinmaximaal landing page for bamboo decking that links straight to the cart. The product is not configurable."
5. **Campaign banner.** "Build a Tuinmaximaal campaign banner prototype for the veranda autumn sale, with a heading highlight."
6. **Form states.** "Prototype a Tuinmaximaal contact form showing the default, focus, error and success states."
7. **Screenshot audit.** "Audit this screenshot of a Tuinmaximaal page against the design system." (Attach current screenshots, at 1280px and 375px, of a category or product page on the new site: https://m2stagingnl.intern.systems/.)
8. **Sloppy block audit.** "Review this Tuinmaximaal block:" followed by this snippet:

   ```html
   <section class="bg-white py-8">
     <div class="rounded-2 border border-tmx-neutral-lightGrey p-6">
       <div class="rounded-2 bg-white p-4 shadow-lg border-l-4 border-tmx-primary-orange">
         <h2 class="bg-gradient-to-r from-tmx-primary-orange to-tmx-primary-yellow bg-clip-text text-transparent">Nu 20% korting</h2>
         <p>Bestel vandaag nog je nieuwe veranda.</p>
         <button class="rounded-1 bg-tmx-primary-orange px-6 py-2.5 text-white">Vraag offerte aan</button>
       </div>
     </div>
     <div class="mt-6 bg-white border border-tmx-neutral-lightGrey p-6">
       <ul class="list-usps">
         <li><span class="list-text">10 jaar garantie</span></li>
         <li><span class="list-text">Hoge service</span></li>
       </ul>
     </div>
   </section>
   ```

   Planted violations: an orange button, a left-border stripe, gradient text, nested cards, a redundant border on the white USP wrapper on a white page, which isn't an outlined box: square corners, bordered only to frame it (plus a quote-request CTA and a non-theme drop shadow).
9. **Real request (schuifwand redesign, a build).** "I want you to audit this page: https://m2stagingnl.intern.systems/schuifwand. Create a re-design of this page, with its content. For CRO, this page is not optional, and we can make this page more creative, more in a block design with the Tuinmaximaal Design System. I want you to create some prototypes to improve this page." (The user's request from 2026-09-25, lightly corrected. The first run named the Playwright MCP server; any browser tool will do.)

## Results

| # | Surface | Date | Skill version (commit) | Pass? | Notes |
|---|---|---|---|---|---|
| 1 | Claude Code | 2026-09-25 | uncommitted (issue 01) | Pass (ticket 01 criteria) | Skill triggered. Configurator CTA, no quote CTA, orange only on price boxes. No overflow at 375px. First run invalid: a skeleton bug (unknown `@apply` class) broke the styles; fixed and re-run. |
| 2 | Claude Code | 2026-09-25 | uncommitted (issue 01) | Pass (ticket 01 criteria) | Skill triggered. Long DE names clamp at 3 lines, so the agent added a separate size line. No overflow at 375px, `md` or `xl`. |
| 5 | Claude Code | 2026-09-25 | uncommitted (issue 01) | Pass (ticket 01 criteria) | Skill triggered. Heading highlight at −2°, one primary button to the configurator. Placeholders marked. Re-run after the skeleton fix. |
| 6 | Claude Code | 2026-09-25 | uncommitted (issue 01) | Pass (ticket 01 criteria) | Skill triggered. Default, focus, error and success states match the theme; messages have no border. No overflow at 375px. |
| 3 | Claude Code | 2026-09-25 | uncommitted (issue 02) | Pass | Skill, copy and translator skills loaded. 3 variants (inline message, two-column timeline card, collapsible strip), each with a trade-off, in the page shell. No arbitrary values or inline styles, no side stripes or message borders, one primary per variant, orange only on price boxes and the cart badge. No overflow at 375px or 1280px. Minor: B has an eyebrow label above its heading; the build checklist now points at the craft floor. |
| 4 | Claude Code | 2026-09-25 | uncommitted (issue 02) | Pass | 3 variants (buy block first, proof first, sticky buy column), each with a trade-off, in the page shell. Every primary is "In winkelwagen"; no configurator or quote path. Facts from the approved NL page export, the rest marked as placeholders. No overflow at 375px or 1280px. Found that the skeleton lacked `.list-usps`; added. |
| 7 | Claude Code | 2026-09-25 | uncommitted (issue 02) | Pass | Staging veranda category page at 1280px and 375px. 11 findings ranked P1–P3, each with a rule and a fix, CRO section (CTA visibility, trust, friction), unverifiable items marked. Some rule citations are terse ("Colors; Contrast"). |
| 8 | Claude Code | 2026-09-25 | uncommitted (issue 02) | Pass | Every planted violation flagged: quote CTA (P0), orange button, gradient text, side stripe, nested cards, `shadow-lg` (P1). Each with a rule and a fix, plus CRO section and a combined fix. |
| 1 | Claude Code | 2026-09-28 | uncommitted (issue 03) | Pass (second-iteration criteria) | Run 2 failed: bold variant C put a lifestyle hero above the buy panel on a PDP, and option cards used an arbitrary `has-[:checked]:` variant. The build job now keeps boldness inside the register. Run 3 passes: green logo bar on beige, no borders, one primary per variant, the product photo plus price box as the big moment, 16:9 on product media, C bold (bleeding photo, highlighted "3 × 4 m", floor plan). No overflow at 375px or xl. |
| 4 | Claude Code | 2026-09-28 | uncommitted (issue 03) | Pass (second-iteration criteria) | Green logo bar on white, no borders on white containers (spec box is white on sand). B bold (full-bleed terrace photo, highlighted heading, slim sticky cart bar). Every primary is "In winkelwagen". No overflow at 375px or xl. C's big moment (highlighted heading, project photo lower down) is the weakest of the three. |
| 8 | Claude Code | 2026-09-28 | uncommitted (issue 03) | Pass (second-iteration criteria) | Every planted violation flagged, including the new redundant border on the white USP wrapper (P2). Also flagged the missing big moment and the failed logo-swap test, citing the visual principles. |

Second-iteration rerun (issue 04): all 9 prompts in fresh Claude Code sessions, compared with the baseline in `tmp/prototypes/rerun-i2/compare.html`. "Less generic" is the user's verdict per prompt.

| # | Surface | Date | Skill version (commit) | Pass? | Notes |
|---|---|---|---|---|---|
| 1 | Claude Code | 2026-09-28 | 91c4d43 | Pass | Logo bar on beige, no borders on white containers, one configurator primary per variant, 16:9 only on the product gallery, gallery plus price box as the big moment. C bold (full-bleed gallery, buy card over its edge, dense sand spec band). Less generic: *pending* |
| 2 | Claude Code | 2026-09-28 | 91c4d43 | Fail | Product media off 16:9: B's row images stretch to about 0.8–0.9 from `sm`, and C's feature tile to about 1.3 from `md` (`aspect-auto`). Everything else passes; long DE names wrap cleanly, tiles keep their theme border, C bold (feature tile, highlight, sticky configurator bar). Less generic: *pending* |
| 3 | Claude Code | 2026-09-28 | 91c4d43 | Fail | Arbitrary values: B's colour cards use `has-[:checked]:` and `has-[:focus-visible]:`, the pattern that also failed issue 03 run 2. Everything else passes; messages match the theme, C bold (sand proof band, highlight, delivery timeline). Less generic: *pending* |
| 4 | Claude Code | 2026-09-28 | 91c4d43 | Pass | Session cut off by an app restart during its final screenshot pass; the file was complete and is graded as is. Every primary is "In winkelwagen", real images from the live page, A bold (full-bleed photo with the highlight crossing into it). B is deliberately PDP-like and says so in its trade-off. Less generic: *pending* |
| 5 | Claude Code | 2026-09-28 | 91c4d43 | Fail | B puts `md:aspect-video` on an editorial photo (16:9 is for product media only). C, a compact strip, has no big moment for a brand-forward banner (small crop plus highlight). A bold (full-bleed photo, overlapping heading panel). Less generic: *pending* |
| 6 | Claude Code | 2026-09-28 | 91c4d43 | Fail | C's editorial photo is `aspect-video` below `lg`. Everything else passes; a state switcher shows default, focus, error (summary and per field) and success, all checked at 375px. Minor: at 375px the state switcher and the variant switcher stack over the form. Session cut off during its last check; file complete. Less generic: *pending* |
| 7 | Claude Code | 2026-09-28 | 91c4d43 | Pass | Same staging screenshots as the baseline run. 10 findings P1–P3, each with a rule and a fix, and a CRO section. Uses the new flags: no big moment, generic equal cards, missing tile border. |
| 8 | Claude Code | 2026-09-28 | 91c4d43 | Pass | Every planted violation flagged, the redundant USP-wrapper border included (P1, grouped with the nested cards). Minor: the suggested restructure puts `aspect-video` on a lifestyle photo. |
| 9 | Claude Code | 2026-09-28 | 91c4d43 | Fail | Every variant hand-builds a breadcrumb, which the logo bar is meant to replace. A's numbered steps are orange squares (orange outside price, highlight, badge and active). Product photos off 16:9 (A's product panel, B's oversized glass block). Otherwise: audit of staging with 9 ranked findings, logo bar, one configurator primary per variant, B bold (bento of product and proof blocks). First session was cut off before building and was rerun fresh. Less generic: *pending* |
