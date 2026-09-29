# 05: Containers, surfaces and restraint

**What to build:** The skill's third iteration, from the user's review of the i2 prototypes against staging (home, the terrasoverkapping and zonwering category pages, and a veranda product page). The user gets prototypes that look like the live site: contained layouts, a beige intro on every page, colour separation from white, beige and sand boxes, and no bulky or AI-looking details. The audit holds the same standard.

- **Buttons.** Prototypes use `btn-size-sm` and the default size only. Staging uses no size class at all; the product page's main CTA is a default-size `btn-primary w-full`. The design document keeps `btn-size-lg` as a theme fact but says never to use it. The white-on-lime contrast note no longer points at the large size: it is a brand standard, so use the default size anyway.
- **No eyebrows.** No eyebrow or kicker label above a heading, on any page type. `tracking-loose` is removed from the typography guidance; uppercase `paragraph-tiny` stays only inside badges and pills. The build job states this as a rule, not just the audit.
- **The tilt.** Every heading highlight tilts −2°, as do the paragraph highlight, the price box and the promo labels. Staging's home highlight ("genieten") is flat because the theme rotates an inline span, which a transform doesn't affect. That is a theme bug outside this repo: the audit flags a flat highlight as a theme-level finding.
- **Logo bar.** The green bar is `h-15` and the logo `h-11` at every breakpoint, in both the default page frame and the full shell. It no longer tracks production's taller desktop header.
- **Containers.** All content and all images, lifestyle photos included, sit inside the container. Only page chrome (header bars, breadcrumbs, USP bar) and the beige intro may run full width, and only as colour bands with contained content. "Full-width lifestyle photography", "bleed past the container" and the full-bleed options in the bold-variant guidance are removed; an editorial image is a contained box with `rounded-2`.
- **Beige intro.** Every page type opens with a beige first section:
  - Content, brand and service pages: the H1, intro text and an optional CTA.
  - Category page: the H1 and intro with its link tiles or product-line cards on white, as staging does.
  - Product page: the gallery and buy-box row, with the buy box white on beige.

  After the intro the background is free and white by default. "Product and category pages sit on beige" is removed: staging's category grid area and product content section are white.
- **Surfaces.** White, beige and sand are the only surfaces. Bone is removed as a surface and stays only as the shell's mobile-menu divider. Use the surfaces generously for separation:
  - **On white:** beige first, then sand for a stronger step.
  - **On beige:** white.
  - **On sand:** white or green.
  - **Green:** at most one emphasis block per page, with white text.
  - **Reference pattern:** the homepage. A beige intro wrapper with image tiles, a contained beige banner box on white, and a full-width sand band holding a contained group with one green column.
- **Boxes.** A page is split into boxes, one per job (intro, each filter group, trust or USP block, SEO text, FAQ, blog), with `rounded-2`, `p-4` to `p-6` and a gap of 3 to 4. There is never one wrapper around everything.
  - "One box per filter group" is a named pattern, from staging's category page.
  - Coloured boxes have no border; the product tile keeps its own.
  - One level of nesting is allowed when the inner box is a different surface (white tiles in a beige box, as on staging's product page). The same surface inside the same surface, or a third level, is a finding.
- **Category grid, as agreed.**
  - **Intro:** a beige band.
  - **Grid area:** white, with one borderless beige box per filter group.
  - **Between product rows:** a sand trust or USP block.
  - **Below the grid:** SEO text and FAQ in beige boxes.
  - **Product tiles:** keep their white info area and border.
- **Audit job.** It flags:
  - `btn-size-lg`.
  - An eyebrow label.
  - A flat heading highlight (theme-level).
  - A full-bleed image or content outside the container.
  - A missing beige intro.
  - A bone surface or any surface other than white, beige, sand and one green block.
  - A border on a coloured box.
  - One wrapper around everything.
  - Nesting that doesn't change surface, or goes past one level.

  The nested-cards rule changes to match the one-level allowance.
- **Eval set.** The build pass criteria get these checks, and prompt 8's planted nested cards still count as a violation under the new nesting rule.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [x] The design document states the button sizes, the eyebrow ban, the tilt on every highlight, the container rule, the beige intro per page type, the surface ladder with the homepage as reference, and the box rules with the filter-group pattern; the full-bleed wording, bone as a surface and "product and category pages sit on beige" are gone.
- [x] The build job's page frame renders the `h-15` bar with the `h-11` logo at every breakpoint, as does the full shell, checked by screenshot at 375px and xl.
- [x] The build job's rules and pre-delivery checks cover the eyebrow ban, button sizes, containers, the beige intro, the surface ladder and the box rules; the bold-variant guidance no longer offers full-bleed options.
- [x] The audit job has every new flag listed above, and the nested-cards rule allows one level with a surface change.
- [x] The eval set's build pass criteria include the new checks, and prompt 8's planted nested cards still fail them.
- [x] The sync runs with zero linter errors, no drift errors on the new prose, and the skeleton's component-CSS region regenerated.
- [x] Smoke test: rerunning eval 2 gives a category grid following the agreed layout, and rerunning eval 8 still flags every planted violation.
