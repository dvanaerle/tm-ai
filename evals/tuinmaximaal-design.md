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

Build prompts (1–6, 9 when it is a build) must also have 3 genuinely different variants, each with a trade-off line.

Audit prompts (7, 8, 9 when it is an audit) must also have ranked findings, each with a rule and a fix, plus a CRO assessment covering CTA visibility, trust signals and friction. Prompt 8 must flag every planted violation.

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
   <div class="rounded-2 border border-tmx-neutral-lightGrey p-6">
     <div class="rounded-2 bg-white p-4 shadow-lg border-l-4 border-tmx-primary-orange">
       <h2 class="bg-gradient-to-r from-tmx-primary-orange to-tmx-primary-yellow bg-clip-text text-transparent">Nu 20% korting</h2>
       <p>Bestel vandaag nog je nieuwe veranda.</p>
       <button class="rounded-1 bg-tmx-primary-orange px-6 py-2.5 text-white">Vraag offerte aan</button>
     </div>
   </div>
   ```

   Planted violations: an orange button, a left-border stripe, gradient text, nested cards (plus a quote-request CTA and a non-theme drop shadow).
9. **Real request.** Add one recent real request from the Tuinmaximaal team here before the run.

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
