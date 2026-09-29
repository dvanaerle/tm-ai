# 03: Craft and expression

**What to build:** The skill's second iteration. The user gets prototypes that keep the house style but no longer feel generic: no redundant grey borders, one clear big moment, braver compositions, and a light page frame that doesn't invite comparison with production. The audit holds the same standard. See "Second iteration" in the spec in this feature folder.

- **Baseline first.** Before anything changes, copy the first-iteration eval prototypes and screenshots to a baseline folder in the ignored temp prototypes area.
- **Page frame.** By default the prototype skeleton replaces the full shell (header, menu, USP bar, mobile search, breadcrumbs, footer) with one green bar in the header background, with the theme logo inside it (no hanging logo tab). Its height matches production's header on mobile and desktop, measured on staging at 375px and xl. The variant sits below it on white, or on beige for product and category pages. The build job uses the full shell only when the question is about the header, menu or footer.
- **Border rule.** The design document's depth rule becomes: whitespace groups content first, then a change of surface (white on beige or sand), and a 1px border only on theme components that own one (inputs, checkboxes, radios, product tile, secondary button, selected card) or where two white surfaces meet and space can't separate them. The product tile keeps its border everywhere, because packshots are photographed on white.
- **Visual principles.** A new subsection after the product design principles: Clarity, Deference, Depth (tonal layers, never glass or blur) and Hierarchy, translated to Tuinmaximaal, each with a flag line. The Overview names Apple's HIG as the source of the principles only; IKEA and Hornbach stay the visual references.
- **Expression within the theme.**
  - The design document gets dos for expression: full-width lifestyle photography, asymmetric and editorial layouts, a bolder −2° heading highlight (still within the orange rules), and contrast in scale and density. The 28px cap stays.
  - Big moment: the product photo plus the price box on product surfaces; a full-width image with an orange heading highlight, or a large project photo, on brand-forward pages.
  - 16:9 applies to product media only; editorial images may use any Tailwind aspect ratio, full-width bands and images that bleed past the container.
- **Build job.** A fourth variant axis (composition and expression), at least one deliberately bold variant per set named as such in its trade-off line, and a pre-delivery check for the border rule, the big moment and the logo-swap test.
- **Audit job.** New craft-floor flags: a border on a white container on a white page; no big moment, or more than one; a generic grid of equal cards; a failed logo-swap test; product media not at 16:9. The visual principles' flag lines join the design-system check.
- **Eval set.** The build pass criteria get the new checks, and prompt 8 gets a planted redundant border on a white wrapper.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [x] The baseline folder holds the first-iteration eval prototypes and screenshots, and is ignored by Git.
- [x] The skeleton renders the green logo bar at the measured header heights on mobile and desktop, with no menu, USP bar, search, breadcrumbs or footer; the build job says when the full shell is used instead.
- [x] The design document states the border rule, the visual principles with flag lines, the expression dos, the big moment per register and the image treatment, and credits Apple's HIG as a source of principles only.
- [x] The build job has the fourth axis, the bold-variant rule and the new pre-delivery checks; the audit job has the new flags.
- [x] The eval set has the new pass criteria and the extra planted violation in prompt 8.
- [x] The sync runs with zero linter errors, no drift errors on the new prose, and the skeleton's component-CSS region regenerated.
- [x] Rerunning evals 1, 4 and 8 passes the new criteria: no redundant borders, one bold variant per set, one big moment per variant, the logo bar, and the redundant border flagged in the audit.
