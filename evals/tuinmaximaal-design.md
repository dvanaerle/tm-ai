# Evaluation set: `tuinmaximaal-design`

A fixed set of prompts for judging whether a change to the skill made results better or worse. Judge only the output (the prototype or the audit report), never the skill's wording. Run every prompt in a fresh session on both claude.ai and Claude Code, and record the results below.

## Pass criteria

For every prompt:

- only the semantic colour tokens (DESIGN.md → Colors) and theme classes, no `tmx-*` colours and no arbitrary values
- the primary button is `#809700`
- orange is used only for price and highlights (plus badges and active states)
- AA contrast, apart from the theme exceptions documented in DESIGN.md
- works on mobile
- long strings don't break the layout
- copy is delegated or marked as a placeholder

Build prompts (1–6, 9 when it is a build, and 10) must also have:

- 3 genuinely different variants, each with a trade-off line
- at least one bold variant per set, its trade-off line starting with "Bold:"
- no border on a white container on a white page, except a repeated card or an outlined filter box; borders only on theme components that own one, repeated cards on white, outlined filter boxes, or where two white surfaces meet
- one big moment per variant, matching the register (product photo plus price box on product surfaces; a large contained image with a heading highlight, or a large project photo, on brand-forward pages)
- 16:9 only on product media and the blog tile photo
- the green logo bar at production's header height instead of the full shell, unless the prompt is about the header, menu or footer
- every variant passes the logo-swap test
- the green bar is `h-15` with the `h-11` logo at every breakpoint, in the frame and the full shell
- Figma's button sizes (XL by default, no theme `btn-size-*` class); a link-like action is `btn-transparent`
- no eyebrow or kicker label above any heading
- every heading highlight, paragraph highlight, price box and promo label tilted −2°
- all content and images inside the container; only page chrome, the beige intro and tinted tile bands run full width, as colour bands
- on whole pages, a beige intro section matching the page type; white after it by default
- only white, beige and sand surfaces on the ladder, at most one green emphasis block, no bone
- the box decision per block: repeated cards as white `rounded-2` cards, outlined on white and borderless on a beige or sand band; the one block that needs emphasis as a borderless beige box; everything else (running text, text + image, gallery, SEO text) unboxed on whitespace. No text boxed on white just to separate it, no padded box around a separately rounded image, no wrapper around everything, no border on a coloured box, and nesting only one level deep with a change of surface
- the price box sized per component (DESIGN.md → Components → Price box): the theme's 16px chip on product tiles, the promo-label chip on image tiles and promos, the largest price in the buy box
- white text on a photo always on a scrim
- no `has-[…]:` variants; selectable cards use `.option-card`
- product media at 16:9 at every breakpoint, never cropped off it in a card; no `aspect-video` on lifestyle or project photos
- a category grid (prompt 2) follows the agreed layout: beige intro band, white grid area with one box per filter group (outlined, or borderless beige), a sand trust or USP block between product rows, the FAQ as outlined rows and the SEO text unboxed with the "Lees meer" fade below, tiles with their white info area, outlined on white and borderless where a tinted tile band is used

Redesign prompts (9 and 10) keep the source page's copy, so there the copy comes from the page instead of being delegated. They fail when a variant:

- opens a pop-up on load, or puts one in a product page, configurator, cart or checkout; or uses a modal for information that needs no decision
- puts content in a carousel: a slider of split images, benefit cards or product sections (the theme's own sliders, such as related products, are allowed)
- invents copy: a heading, label, caption, chart title or stat the source page doesn't have, including a label a new structure needed
- invents visuals: a custom illustration, drawn diagram, bar chart, big "365"-style number, or an image that isn't one of the page's own
- puts "Lees meer" inside a product split image
- has a card, box or panel floating over or overlapping a photo (the image tile's heading, chip and button on the scrim are the exception)
- opens a category or landing page with large image tiles instead of the H1 and intro beside a modest photo

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

   Planted violations: an orange button, a left-border stripe, gradient text, nested cards, a redundant border on the white USP wrapper on a white page, which is neither a repeated card nor a filter box: plain content boxed on white, with square corners, bordered only to frame it (plus a quote-request CTA and a non-theme drop shadow).
9. **Real request (schuifwand redesign, a build).** "I want you to audit this page: https://m2stagingnl.intern.systems/schuifwand. Create a re-design of this page, with its content. For CRO, this page is not optional, and we can make this page more creative, more in a block design with the Tuinmaximaal Design System. I want you to create some prototypes to improve this page." (The user's request from 2026-09-25, lightly corrected. The first run named the Playwright MCP server; any browser tool will do.)
10. **Keep-the-copy redesign (a build).** "Redesign this page and keep its copy: https://m2stagingnl.intern.systems/zonwering. Use the page's own text and images, and make me some prototypes." (A category landing with product tiles, benefit sections, an FAQ and blog links, like /schuifwand but not the approved example's own page.)

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

Third-iteration rerun (issue 06): all 9 prompts in fresh Claude Code sessions, compared with the i2 run in `tmp/prototypes/rerun-i3/compare.html`. The skill was the issue 05 working tree on top of 91c4d43. "Closer to the live site" is the user's verdict per prompt.

| # | Surface | Date | Skill version (commit) | Pass? | Notes |
|---|---|---|---|---|---|
| 1 | Claude Code | 2026-09-29 | uncommitted (issue 05) | Fail | Arbitrary values: C's colour cards use `has-[:checked]:`, the third run to fail on this variant (issue 03 run 2, i2 prompt 3). Everything else passes: `h-15` bar with `h-11` logo, beige intro with the gallery and a white buy box, 16:9 product media, tilted price box, one configurator primary per variant, no eyebrows or `btn-size-lg`, all contained. C bold (container-wide gallery, colour-first buy row, sand proof band with highlight). Closer to live: *pending* |
| 2 | Claude Code | 2026-09-29 | uncommitted (issue 05) | Pass | All three follow the agreed grid layout: beige intro band, one box per filter group (A and C outlined, B beige), a sand USP or configurator block between rows, FAQ and SEO text in beige boxes. All product media 16:9, tiles keep their border. Long DE names: A clamps (its trade-off names the loss), B and C show them in full. C bold (featured tile, highlight, sand configurator band). Closer to live: *pending* |
| 3 | Claude Code | 2026-09-29 | uncommitted (issue 05) | Pass | Order page with a beige intro in all three. A is the theme warning message, B a white notice on beige with a beige week box inside (one level, surface change), C bold (new week as the H1 highlight above a white timeline). DE strings in B wrap. Minor: A has no real big moment (quiet service notice, which its trade-off names). Closer to live: *pending* |
| 4 | Claude Code | 2026-09-29 | uncommitted (issue 05) | Fail | B's editorial photo is `md:aspect-video` (16:9 outside product media), the pattern that failed i2 prompt 5. Borderline: the same deck-in-situ photo is A's gallery image. Everything else passes: beige intro in all three, one "In winkelwagen" primary per variant, no configurator or quote path, real images, tilted price boxes, contained, one green block. B bold (sticky cart bar, highlight, large contained photo). Closer to live: *pending* |
| 5 | Claude Code | 2026-09-29 | uncommitted (issue 05) | Fail | C, a compact price-led box, has no big moment for a brand-forward banner (its trade-off names the weaker brand moment), the same failure as i2's C. Everything else passes: beige intro, tilted highlight and price boxes, one configurator primary per variant, no eyebrows, contained. B bold (large contained photo under a wide highlighted heading, white offer panel on beige). Closer to live: *pending* |
| 6 | Claude Code | 2026-09-29 | uncommitted (issue 05) | Pass | Beige intro with a highlighted H1 in all three. A state pill drives default, focus, error (summary and per field) and success; clicked through at 375px with no overflow. B's form is an outlined box holding fields only. C bold (large contained showroom photo box, topic tiles). Minor: the state pill and variant switcher cover part of the form at 375px. Closer to live: *pending* |
| 7 | Claude Code | 2026-09-29 | uncommitted (issue 05) | Pass | Same staging screenshots as the earlier runs. Findings P0–P3, each with a rule and a fix, and a CRO section. Minor: flags an untilted badge, though badges aren't on the tilt list. |
| 8 | Claude Code | 2026-09-29 | uncommitted (issue 05) | Pass | Every planted violation flagged: quote CTA (P0), orange button, gradient text, side stripe and `shadow-lg` (P1), nested cards (P2, the nesting rule). Minor: the USP wrapper is flagged as "a leftover wrapper" with the fix to drop it, but the rule cited is the outlined-box shape, and the fallback fix keeps the border with `rounded-2`; i2 named the redundant border on white more clearly. |
| 9 | Claude Code | 2026-09-29 | uncommitted (issue 05) | Fail | A's smaller product cards crop product photos to about 0.93–1.19 at xl (16:9 is required on product media), the same failure as i2. Fixed since i2: no breadcrumb, no orange decoration. Otherwise: audit of staging with 12 ranked findings, beige intro holding the product lines, one configurator primary per variant, at most one green block, contained. C bold (large contained project photo with highlight, uneven chapters). Closer to live: *pending* |

Fourth-iteration smoke test (issue 07): prompts 4 and 2 in fresh Claude Code subagent sessions, output in `tmp/prototypes/rerun-i4/`. The skill was the issue 07 working tree on top of 91c4d43.

| # | Surface | Date | Skill version (commit) | Pass? | Notes |
|---|---|---|---|---|---|
| 4 | Claude Code | 2026-09-29 | uncommitted (issue 07) | Pass | Running text on white unboxed in all three; A's content block is the one beige box with the image flush to its edges (measured). Price chips per component: promo-label chip in A's intro and B's image tile, the theme's 16px chip on B's product tiles, the buy-box size in C. B's image tile has the scrim; reviews and FAQ are outlined rows on white; B's cards on sand and blog tiles on beige are borderless. No `has-[`, no arbitrary values, no overflow at 375px. Found a conflict between the blog tile's 16:9 photo and the "no `aspect-video` on editorial photos" check; the blog tile is now the named exception. |
| 2 | Claude Code | 2026-09-29 | uncommitted (issue 07) | Pass | Agreed grid layout in all three: filter groups outlined (A, C) or beige (B), sand trust block between rows, FAQ as outlined rows, SEO text unboxed with the "Lees meer" fade. Tiles on white outlined (28/28 measured), tiles on B's sand band borderless (4/4). Theme 16px chip on tiles, promo-label chip on C's image tiles, with the scrim. A uses the intro link cards. Product media 16:9. No `has-[`, no arbitrary values, no overflow at 375px. Open: long DE names still clamp at 3 lines in 3- and 4-up grids at xl. |

Fifth-iteration rerun (issue 10): all 9 prompts in fresh Claude Code sub-agent sessions with the lean main context from issue 09, compared with the i3 run (issue 06) in `tmp/prototypes/rerun-i5/compare.html`. Main-context tokens are the largest prompt on one turn of the eval session itself, sub-agents excluded, with the i3 figure from the issue 06 transcripts. Prompts 1, 4, 5 and 7 were rerun once because the first session handed off before its reviewer or audit axis reported; the rows grade the rerun. In 4 and 5 the rerun handed off early again, so the review was caught but not applied. Grading notes and the reviewer reports are in `tmp/prototypes/rerun-i5/`.

| # | Surface | Date | Skill version (commit) | Pass? | Main-context tokens (i3) | Notes |
|---|---|---|---|---|---|---|
| 1 | Claude Code | 2026-09-30 | 802e249 (read an uncommitted `Gumax<sup>®</sup>` edit mid-run) | Pass | 138k (163k) | Fixed since i3: colour cards are `.option-card`, no `has-[`. Beige intro with a white buy box, 16:9 product media, buy-box price size, one configurator primary per variant; B's sand band holds borderless white cards. The reviewer found no P0/P1; its fixes included A's failed logo-swap test (a beige box with a highlight added). |
| 2 | Claude Code | 2026-09-30 | 802e249 | Pass | 137k (168k) | Agreed grid layout in all three: outlined (A) or beige (B) filter boxes, sand tile band in C, FAQ as outlined rows, SEO text unboxed with the fade. Tiles 16:9 with the 16px chip. The reviewer's "A and B have no big moment" was kept: the builder treats a category grid as a product surface. |
| 3 | Claude Code | 2026-09-30 | 802e249 | Pass | 141k (141k) | Theme warning message in A, green block inside a sand box in C (one level, surface change). The reviewer caught a second big moment in C (highlight on the green block), which was removed. Minor: B and C have a second configurator primary in the notice block, added on the reviewer's P1. |
| 4 | Claude Code | 2026-09-30 | 802e249 (overlapped the edit) | Fail | 147k (180k) | B's closing CTA is a full-width sand band, which is only allowed for page chrome, the beige intro and tile bands. The reviewer caught it and C's missing brand moment, but the builder handed off before applying them. Fixed since i3: no `aspect-video` on lifestyle photos. Every primary is "In winkelwagen", with a scrim under A's tile text. |
| 5 | Claude Code | 2026-09-30 | 802e249 | Pass | 119k (130k) | Fixed since i3: every variant has a large contained image with the highlight (content block, bold image tile with scrim, editorial split). It's a section, so there's no beige intro. Minor: A's half-width photo is the weakest big moment, and its trade-off says so. The reviewer found no P0/P1 and its findings weren't applied (handed off). |
| 6 | Claude Code | 2026-09-30 | 802e249 | Pass | 145k (162k) | Beige intro in all three, states driven by a pill and by the live form, no overflow. The reviewer caught C's green success block on white (off the surface ladder), which was moved onto a sand band; all 10 findings fixed. Minor: a gap before "?" after C's highlight. |
| 7 | Claude Code | 2026-09-30 | 802e249 (overlapped the edit) | Pass | 91k (87k) | Design-system and CRO axes ran as parallel sub-agents and were awaited. The report shows each axis under its own heading, with 13 findings each with a rule and a fix, and names where the axes disagree. |
| 8 | Claude Code | 2026-09-30 | 802e249 | Pass | 68k (89k) | Every planted violation flagged, axes side by side: quote CTA (P0), orange button, gradient, stripe and `shadow-lg` (P1), nested white card (P2), USP wrapper (P2, fix drops it). Same weakness as i3: the wrapper finding leads with square corners, not the redundant border on white. |
| 9 | Claude Code | 2026-09-30 | 802e249 | Fail | 209k (191k) | A's intro is four image tiles, each with a primary "Stel nu samen": four primaries in one view (brand essential: one primary per view). The reviewer only flagged the four tiles as off-pattern (P3). Fixed since i3: product photos 16:9 everywhere. The reviewer caught white tile headings past the scrim and a second big moment in C, both fixed. The only prompt where tokens grew: two audit axes, a reviewer and a fix pass in one session. |

Sixth-iteration rerun (issue 14): all 10 prompts, the new keep-the-copy redesign (10) included, in fresh Claude Code sub-agent sessions with the issue 12 redesign rules and the issue 13 approved example, compared with the i5 run (issue 10) in `tmp/prototypes/rerun-i6/compare.html`; prompt 10 is shown beside the staging source. The skill was the issues 11–13 working tree on top of fff849f, unchanged during the run and committed afterwards as df8f6df. All 10 ran in one round with the issue 10 session notes; every reviewer and audit axis reported before hand-back. Main-context tokens are measured as in issue 10. Grading notes, the redesign checks (`tmp/shots/check-redesign.mjs`) and the staging source snapshots are in `tmp/prototypes/rerun-i6/`.

| # | Surface | Date | Skill version (commit) | Pass? | Main-context tokens (i5) | Notes |
|---|---|---|---|---|---|---|
| 1 | Claude Code | 2026-09-30 | df8f6df | Pass | 153k (138k) | Beige intro, 16:9 media, buy-box price size, one configurator primary per view (B's sticky bar only shows when the buy-box button is off screen). Gallery is placeholder boxes, as in i5. The reviewer's 8 lower findings were all applied, including B's big-number spec tiles. |
| 2 | Claude Code | 2026-09-30 | df8f6df | Pass | 144k (137k) | Agreed grid layout in all three; C's sand tile band holds borderless white tiles. Long DE names clamp in A (named in its trade-off), shown in full in B and C. Images are placeholders. |
| 3 | Claude Code | 2026-09-30 | df8f6df | Fail | 132k (141k) | New failure: C opens with a full-width sand notice band above the beige intro, so the first section isn't beige and the band is neither chrome, intro nor a tile band. The reviewer flagged it (P2); the builder kept it as "page chrome". A and B pass. |
| 4 | Claude Code | 2026-09-30 | df8f6df | Fail | 208k (147k) | A and B put the comparison table on a full-width beige band, which is not a tile band (i5 failed the same criterion on a sand CTA band). Otherwise every primary is "In winkelwagen", real images, FAQ rows borderless on a tinted band. Tokens grew most here: the session read the approved example and the project's page export. |
| 5 | Claude Code | 2026-09-30 | df8f6df | Pass | 132k (119k) | Content block, bold image tile with scrim, editorial split, each with the highlight. The reviewer's full-width sand band on C was removed. |
| 6 | Claude Code | 2026-09-30 | df8f6df | Pass | 164k (145k) | Beige intro in all three, states via the pill and the live form, FAQ outlined rows. All 8 reviewer findings fixed. |
| 7 | Claude Code | 2026-09-30 | df8f6df | Pass | 69k (91k) | Both axes in parallel and awaited; 16 findings with a rule and a fix, and a CRO section. Applies the new vertical-flow rule (tiles scroll sideways at 375px). |
| 8 | Claude Code | 2026-09-30 | df8f6df | Pass | 93k (68k) | Every planted violation flagged. Fixed since i3: the USP wrapper finding names running text boxed on white, not only the square corners. |
| 9 | Claude Code | 2026-09-30 | df8f6df | Pass | 174k (209k) | Fixed since i5: no four-tile intro with four primaries. All three start from the approved example and pass the redesign criteria: no content carousel, no "Lees meer" in a content block, nothing over a photo, a modest intro photo, only the page's images, no drawings or big numbers. Text not on the source: the approved "Vrij uitzicht" paraphrase and B's German test strings. Minor: A is the approved base plus a highlight, and the first primary is below the first viewport in A and B. |
| 10 | Claude Code | 2026-09-30 | df8f6df | Pass | 187k (new) | All six redesign criteria hold in every variant. The only non-source string is "Filteren & Sorteren", staging's own mobile label; source typos kept. Built from DESIGN.md rather than the example (a category grid, not a landing). Minor: no primary button (no configurator; the tiles lead to the product), and the large photos reuse the blog images. |
