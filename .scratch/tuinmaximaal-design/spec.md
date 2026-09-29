# Spec: universal `tuinmaximaal-design` skill

Status: ready-for-agent

## Problem Statement

The Tuinmaximaal team wants to generate UI/UX variations and design audits that follow the Tuinmaximaal design system and brand, using Claude on the web (claude.ai / Desktop) as well as in the IDE (Claude Code). Today the `tuinmaximaal-design` folder is not a working skill: it has no skill entry file, so nothing loads it. Its design document has drifted from the live Valantic theme: the heading scale, font-size scale, status colours, form inputs, product tile and purchase flow are all wrong. Two more design documents and two context documents exist elsewhere in the workspace, and they contradict each other, for example orange for CTAs vs orange as accent only, a "grotesque" body font vs ArticulatCF, and a quote flow vs configurator-to-cart. The documents were set up for Impeccable, which most colleagues won't have installed and which doesn't run on claude.ai. As a result, output quality depends on which file happens to be loaded and on who runs it.

**Second iteration.** Once the skill worked, its first prototypes followed the design system but disappointed as designs:

- **Inconsistent grey borders.** The agent put 1px light-grey borders on white containers on a white page, where whitespace alone would do. The cause is the design document's depth rule ("white content on beige or sand surfaces, separated by 1px light-grey borders"), which the agent reads as "border everything".
- **Generic designs.** The build job lets variants differ only in layout, hierarchy and CTA placement. The design document has many don'ts and hardly any dos for expression, and the brand-forward register is named once and never explained. So every set of variants lands on the same safe pattern: equal grids, every image at 16:9 full width, no single strong moment.
- **A page shell that never matches production.** Every prototype carries a hand-built header, menu, USP bar, search, breadcrumbs and footer. They always differ from the live site in some way, so reviewers end up comparing the shell with production instead of judging the variants.

## Solution

One self-contained, model-invoked skill, `tuinmaximaal-design`, that behaves the same on claude.ai / Desktop and in Claude Code, with no dependency on Impeccable. It has two jobs:

- **Build:** a short shaping step (page goal, audience, primary action), then a throwaway prototype containing 3 clearly different variants with a switcher. Each variant states the trade-off it tests, for UI/UX and CRO exploration.
- **Audit:** reviews an existing page, screenshot or snippet against the design system and a craft floor. It includes a refine checklist and a CRO lens, and reports findings in priority order.

The design system lives in one Google DESIGN.md-spec document inside the skill. Its tokens are generated from the Valantic theme code, which is the source of truth, by a sync script in the workspace. The same script also builds the Tailwind config the prototypes use. The skill stays portable, so it can be bundled for claude.ai by hand when needed; packaging is not part of this work. The design document must cover everything in the theme's styleguide (StyleGuide module, Tailwind cheatsheet, dev rules). All other design and context documents in the workspace are merged into it, turned into pointers, or archived.

**Second iteration.** The skill keeps the house style and gains craft and creativity:

- **Visual principles.** Apple's Human Interface Guidelines principles, translated to Tuinmaximaal: Clarity, Deference, Depth and Hierarchy. They are a source of ideas, not a visual reference. IKEA and Hornbach stay the visual references, and nothing of Apple's look (Liquid Glass, blur, translucency, dark minimalism) is copied.
- **Borders.** Space first, then tone, then a border, and a border only where it does work.
- **Expression within the theme.** Full-width lifestyle photography, editorial and asymmetric layouts, bolder use of the −2° highlight, contrast in scale and density, and one big moment per page, all with the existing tokens.
- **Bolder variant sets.** A fourth variant axis, composition and expression, and at least one bold variant in every set.
- **A lighter page shell.** A green bar with the logo replaces the full shell by default.
- **Audit parity.** The audit flags the same things the build job now avoids.

Success is judged by rerunning the evaluation set against a saved baseline, with the user as judge.

## User Stories

1. As a marketer on claude.ai, I want to ask for a Tuinmaximaal landing-page section and get on-brand output, so that I don't need the IDE or design knowledge.
2. As a developer in Claude Code, I want the same skill to behave the same as on the web, so that colleagues get comparable results whatever surface they use.
3. As a user, I want the skill to trigger when I mention Tuinmaximaal UI, UX, a page, a prototype or a design review, so that I don't have to remember a command.
4. As a user, I want the skill not to trigger on non-Tuinmaximaal design work, so that other projects aren't forced into the Tuinmaximaal brand.
5. As a user, I want every prototype to contain 3 variants in one file with a switcher, so that I can compare approaches side by side.
6. As a CRO specialist, I want each variant to take a genuinely different approach (layout, hierarchy, CTA placement, composition) rather than a colour swap, so that the comparison teaches me something.
7. As a CRO specialist, I want each variant to carry a one-line note on the trade-off it tests, so that I can tell stakeholders why it exists.
8. As a user, I want to ask for a different number of variants, so that I can go wider or narrower when needed.
9. As a user, I want a short shaping step before building (page goal, audience, primary action), so that the variants answer the right question.
10. As a user, I want HTML prototypes by default, so that they open anywhere without a build step.
11. As a user, I want a React prototype when the UI has real state (configurator steps, filters), so that interactions can be judged.
12. As a claude.ai user, I want prototypes delivered as artifacts, so that I can view them in the browser straight away.
13. As an IDE user, I want prototypes written to the workspace's ignored temp area, so that throwaway files never end up in Git.
14. As a user, I want prototypes to use the theme's real Tailwind class names (`tmx-*`), so that what I see translates directly to the Valantic theme.
15. As a user, I want prototypes to use only design-system tokens and no arbitrary values, so that they respect the theme's dev rules.
16. As a user, I want prototypes to use ArticulatCF when installed and fall back to `system-ui, sans-serif`, so that nothing breaks where the font is unavailable.
17. As a brand owner, I want the primary button to always be lighter green `#809700` with its darker bottom border, so that CTAs match the live site.
18. As a brand owner, I want orange used only for price, highlights, badges and active states, so that orange never becomes the action colour.
19. As a brand owner, I want the −2° rotated orange highlight (heading highlight, paragraph highlight, price box) reproduced exactly, so that the signature brand detail survives.
20. As a brand owner, I want body text in brand green `#003017`, so that prototypes feel like the site.
21. As a brand owner, I want heavy headings (black weight on h1–h2) and a bold, direct, project-driven visual tone inspired by Hornbach, so that the design carries the brand's confidence.
22. As a brand owner, I want IKEA-like clarity and modularity as the visual reference, so that complex products feel approachable.
23. As a sales owner, I want veranda and structure pages to always show a visible path to the configurator, so that "time-to-configure" is minimised.
24. As a sales owner, I want non-configurable products to go straight to the cart, so that simple purchases stay simple.
25. As a user, I want the skill to know that "offerte" is a checkout payment method, not a quote-request form, so that it never invents a quote CTA.
26. As a user, I want messages and alerts styled as the theme does (tinted background, icon, no border), so that prototypes match real components.
27. As a user, I want form fields to show the theme's default, focus, error and success states, so that forms look production-real.
28. As a user, I want product tiles to match the theme (border, hover state, white info area, rotated price box), so that category prototypes are credible.
29. As a user, I want layouts to survive long German and French strings, so that multi-country pages don't break.
30. As a user, I want every prototype to work on mobile at the theme's breakpoints, so that I'm not only reviewing desktop.
31. As a user, I want AA contrast to be met, and orange-on-white limited to large or bold text, so that output is accessible.
32. As a user, I want motion limited to state changes with reduced-motion respected, so that prototypes follow the brand motion rules.
33. As a user, I want UI copy handed to `tuinmaximaal-copy` when it is available, so that microcopy follows the Tuinmaximaal writing guide.
34. As a user, I want translations handed to `tuinmaximaal-translator` when it is available, so that brand terminology is right in DE/FR/UK.
35. As a claude.ai user without those skills, I want clearly marked placeholder copy, so that nobody mistakes filler for approved text.
36. As a user, I want image and asset paths resolved by `tuinmaximaal-asset-path` when real assets are referenced, so that paths match the media conventions.
37. As a reviewer, I want to hand the skill a screenshot, URL capture or snippet and get an audit, so that I can check existing pages.
38. As a reviewer, I want audit findings ranked by impact, with the violated rule and a concrete fix, so that I know what to act on first.
39. As a reviewer, I want the audit to check tokens, components, contrast, responsiveness, long-string resilience and craft-floor defaults, so that the review is complete rather than ad hoc.
40. As a CRO specialist, I want the audit to assess CTA visibility, trust signals (specs, guarantee, reviews, delivery) and friction on the way to the configurator or cart, so that design and conversion are reviewed together.
41. As a reviewer, I want the refine checklist (polish, harden, adapt to mobile) inside the audit, so that I don't need separate commands.
42. As a maintainer, I want the design tokens generated from the Valantic theme's Tailwind config and component CSS, so that the skill can't drift from the code.
43. As a maintainer, I want the token names to mirror the Tailwind `tmx-*` names, with semantic aliases in the components block, so that tokens are both readable and directly usable.
44. As a maintainer, I want the design document to pass the Google DESIGN.md linter without errors, so that its structure is valid and portable.
45. As a maintainer, I want one command that syncs tokens, lints and builds the prototype Tailwind config, so that updating the skill is routine.
46. As a maintainer, I want the sync to accept the theme repo path as an argument, with a sensible default, so that it works on other machines.
47. As a maintainer, I want the sync never to commit or write anything in the theme repo, so that the webshop codebase stays untouched.
48. As a maintainer, I want the rules the Google spec can't express (motion, elevation, the rotation) kept as brand-wide prose, and job-specific details kept in per-job references, so that `SKILL.md` stays lean.
49. As a maintainer, I want a single source of truth for design, so that a brand change is a one-place edit.
50. As a maintainer, I want the old workspace design and context documents merged, turned into pointers, or archived, so that no agent loads stale guidance.
51. As a maintainer, I want the adapted Impeccable craft-floor content credited under Apache-2.0 with a notice and a note of our changes, so that we meet the licence.
52. As a maintainer, I want the craft floor phrased as positive targets where possible, so that the skill doesn't prime the very patterns it bans.
53. As a brand owner, I want everything in the theme's styleguide (StyleGuide module, cheatsheet, dev rules) covered by the skill or listed as a deliberate omission, so that nothing from the styleguide gets lost.
54. As an IDE user, I want to install the skill from the workspace into my personal skills folder, so that I always run the maintained copy.
55. As a maintainer, I want the skill description under 200 characters, so that claude.ai accepts it.
56. As a maintainer, I want `SKILL.md` under 500 lines, with only portable frontmatter and no reliance on hooks, scripts or repo files at runtime, so that it runs unchanged on both surfaces.
57. As a maintainer, I want a fixed evaluation set of test prompts with pass criteria, so that I can tell whether a change to the skill made results better or worse.
58. As a maintainer, I want the full evaluation set run in Claude Code, and the skill kept portable, so that bundling it for claude.ai later needs no changes.
59. As a brand owner, I want the PDP button colour mismatch (`#8BA407` vs `#809700`) recorded as a theme bug, so that the skill standardises on one primary colour and the theme gets fixed separately.
60. As a user, I want the skill to state its known exceptions (checkout uses a separate LESS theme), so that I know when its guidance doesn't apply.

Second iteration: craft and expression.

61. As a designer, I want white containers on a white page to have no border, so that the layout feels open instead of boxed in.
62. As a designer, I want related content grouped by whitespace first, so that borders stop doing work that spacing can do.
63. As a designer, I want a change of surface (white on beige or sand) as the second way to separate groups, so that depth comes from the brand's warm tones.
64. As a designer, I want a border only on theme components that own one (inputs, checkboxes, radios, product tile, secondary button, selected card) or where two white surfaces meet and space can't separate them, so that borders are consistent and purposeful.
65. As a brand owner, I want the product tile to keep its 1px light-grey resting border, because packshots are photographed on white and without the border the tile runs into the page.
66. As a reviewer, I want the audit to flag a border on a white container on a white page, so that the build and audit jobs hold the same standard.
67. As a designer, I want the skill to apply Apple's HIG principles (Clarity, Deference, Depth, Hierarchy) translated to Tuinmaximaal, so that the designs gain craft without losing the house style.
68. As a designer, I want Clarity to mean one message per view that reads at a glance, so that visitors understand a section without studying it.
69. As a designer, I want Deference to mean that the product photo and the specs lead and the UI chrome steps back, so that the product sells itself.
70. As a designer, I want Depth to come from tonal layers (white, beige, sand) and never from glass, blur or translucency, so that it stays within the theme's no-glassmorphism rule.
71. As a designer, I want Hierarchy to make the one thing that matters most in each view obvious, so that the eye knows where to go first.
72. As a brand owner, I want Apple used only as a source of principles and not as a visual reference, so that prototypes don't start to look like Apple (dark, minimal) instead of a mainstream DIY retailer.
73. As a brand owner, I want IKEA and Hornbach to stay the visual references, so that the look stays clear, modular, bold and practical.
74. As a maintainer, I want every visual principle to carry a flag line the audit can use, so that the principles can be checked, not just admired.
75. As a designer, I want full-width lifestyle photography and bigger image-to-text ratios allowed, so that pages feel less like a spec sheet.
76. As a designer, I want asymmetric and editorial layouts allowed, so that not every section is a grid of equal cards.
77. As a brand owner, I want the −2° orange highlight usable as a bolder design element, still within the orange rules, so that the signature detail carries more of the brand.
78. As a designer, I want contrast in scale and density (one big moment, calm around it), so that a page has a focal point.
79. As a maintainer, I want the 28px type cap kept, with scale coming from black weight, the highlight and the ratio of image to text, so that prototypes only use classes the theme has.
80. As a designer, I want 16:9 kept for product media only, and editorial imagery free to use any Tailwind aspect ratio, full-width bands and images that bleed past the container, so that images stop looking uniform.
81. As a CRO specialist, I want the product photo and the price box to be the big moment on product surfaces (PDP, category, cart), with no extra hero, so that the shopping task stays first.
82. As a marketer, I want a full-width image with an orange heading highlight, or a large project photo, as the big moment on brand-forward pages (homepage, landings, campaigns), so that those pages feel like a brand.
83. As a CRO specialist, I want composition and expression (image-led, editorial and asymmetric, calm or dense) as a fourth variant axis, so that variant sets explore more than layout and CTA placement.
84. As a designer, I want at least one variant in every set to take a deliberately bold position, so that the agent doesn't pick the safe option three times.
85. As a designer, I want every variant to pass a logo-swap test (with another retailer's logo it must no longer work unchanged), so that no variant could be any shop's.
86. As a reviewer, I want the audit to flag a missing big moment, a generic card grid and a failed logo-swap test, so that audits catch generic designs too.
87. As a reviewer, I want prototypes without the hand-built header, menu, USP bar, search, breadcrumbs and footer, so that I judge the variants instead of comparing the shell with production.
88. As a CRO specialist, I want a green bar with the logo at production's header height, on mobile and desktop, so that the first-viewport check (price and CTA visible without scrolling) stays honest.
89. As a designer, I want the full shell back when the question is about the header, menu or footer, so that shell work is still possible.
90. As a maintainer, I want the rerun of the evaluation set compared against a saved baseline of the first-iteration prototypes at 375px and xl, so that it is clear whether the changes made the designs better.

## Implementation Decisions

- **One skill, model-invoked.** Its name is `tuinmaximaal-design`, and it is written in English. The description is scoped to Tuinmaximaal UI/UX, prototypes and design reviews, and stays under 200 characters.
- **Skill modules:**
  - **Skill entry.** Holds the brand essentials every job needs, plus the two job flows (build, audit) with clear completion criteria. It routes to references per job.
  - **Design document.** Follows Google's DESIGN.md spec (alpha): YAML front matter tokens (colors, typography, rounded, spacing, components) and prose sections in spec order: Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts.
    - The Overview merges IKEA as the visual reference, Hornbach as the visual tone, and the audience and decision-moment material from the old product document.
    - The first design principle is "Reduce time-to-configure".
    - Brand-wide items the spec can't express (motion, elevation, the −2° rotation) stay here as prose. Deliberate gaps go in `omitted` with reasons.
  - **Prototype reference.** Adapted from the UI branch of the existing `/prototype` skill and copied in, not called, because colleagues won't have it. It covers:
    - a shaping step: the question, page goal, audience, primary action and N
    - 3 variants by default, at most 5, in one file, each structurally different and with a trade-off line
    - a floating bottom switcher (← / label / →, arrow keys, `?variant=`)
    - a page frame around every variant, so it is judged in context (the full header, USP bar, breadcrumbs and footer in the first iteration; a green logo bar from the second, see below)
    - HTML by default, React when there is state
    - surface-specific delivery: an artifact on the web, the ignored temp prototypes area in the IDE
    - Tailwind via CDN with the generated config

    Left out from `/prototype`: the production gate, the throwaway-branch capture, folding into production code, and the logic branch.
  - **Audit reference.** Contains the craft floor adapted from Impeccable (Verify thresholds and Refuse defaults, rewritten as positive targets where possible), the refine checklist, and the CRO lens. The output is findings ranked by impact, each with the rule it violates and a fix.
  - **Generated Tailwind config.** Mirrors the theme's `tmx` namespace and scales so prototypes use the real class names.
  - **Licence notice.** Apache-2.0 attribution for the adapted Impeccable content, listing what we changed.
- **Token naming.** Colour keys mirror the Tailwind names (e.g. `tmx-primary-lighterGreen`). Semantic meaning comes from `components` entries that reference those colours, such as button-primary, its hover state, price, heading-highlight and message states. The linter's missing-primary warning is resolved with a `primary` alias or a justified `omitted` entry.
- **Source of truth.** The Valantic `base` theme (Hyvä + Tailwind) in the webshop repo: its Tailwind config, spacing generator, and the typography, button, form and message component CSS. The corrected facts the skill must reflect:
  - heading scale h1 28 / h2 24 / h3 22 / h4 20 / h5 18 / h6 16 px, black weight on h1–h2 only
  - a fixed font-size list
  - `tmx.status` colours for messages, which have no borders
  - form inputs with `rounded-1` and a focus ring
  - product tile: white info area and a rotated orange price box
  - primary button `#809700` with a 4px `#6D8005` bottom border
  - purchase flow: configurator → cart
- **Sync script** (workspace build step, Node). It takes the theme repo path as an argument with a default. It then:
  1. regenerates the design document's front matter from the theme
  2. regenerates the prototype Tailwind config
  3. runs the DESIGN.md linter

  It is read-only towards the theme repo and never commits. It is not needed at skill runtime.
- **Distribution.** The workspace skills folder is the master copy. For claude.ai the skill can be bundled by hand when needed (e.g. a zip or a single combined file); this is not automated. Claude Code installs from the workspace into the personal skills folder. The webshop repo gets no copy, because production theme code is out of scope.
- **Delegation.** UI copy goes to `tuinmaximaal-copy`, translation to `tuinmaximaal-translator`, and asset paths to `tuinmaximaal-asset-path`. When those skills are missing, the skill falls back to marked placeholders.
- **Workspace cleanup:**
  - The shared brand design, product and `.impeccable` documents are removed after their useful content is merged.
  - The shared brand README becomes a pointer to the skill.
  - The legacy design document moves to the archive.
  - The skill's old design-context file is merged and removed.
  - The workspace README links are updated.
- **Impeccable** is uninstalled from the user's global setup by the user (a manual step, see Further Notes), so IDE testing matches colleagues' setups.
- **PDP button colour** `#8BA407` is treated as a theme bug. The skill uses `#809700`, and a ticket is raised for the theme outside this spec.

### Second iteration: craft and expression

- **Border rule (design document, Elevation & Depth).** Replaces the depth rule "white content on beige or sand surfaces, separated by 1px light-grey borders" with an order of preference:
  1. whitespace groups related content
  2. a change of surface (white on beige or sand) separates groups
  3. a 1px border only on theme components that own one (inputs, checkboxes, radios, product tile, secondary button, selected card) or where two white surfaces meet and space can't separate them

  The product tile keeps its theme border in every context, because packshots are photographed on white.
- **Visual principles (design document).** A new subsection right after the existing product design principles, so both jobs read it and it sits next to the principles it balances against. Four principles, each translated to Tuinmaximaal and each ending in a flag line the audit uses:
  - **Clarity:** one message per view, readable at a glance.
  - **Deference:** the product photo and the specs lead, and the chrome (borders, boxes, decoration) steps back.
  - **Depth:** tonal layers of white, beige and sand, never glass, blur or translucency.
  - **Hierarchy:** one obvious first thing per view.

  The Overview names Apple's HIG as the source of these principles only. IKEA and Hornbach stay the visual references.
- **Expression within the theme (design document).** A short section of dos for the brand-forward and product registers:
  - full-width lifestyle photography and bigger image-to-text ratios
  - asymmetric and editorial layouts
  - the −2° heading highlight as a bolder design element, still within the orange rules
  - contrast in scale and density

  The 28px type cap stays; scale comes from black weight, the highlight and the ratio of image to text.
- **Big moment per register.** Every page has one. On product surfaces (PDP, category, cart) it is the product photo plus the price box, with no extra hero. On brand-forward pages (homepage, category landings, campaigns) it is a full-width image with an orange heading highlight, or a large project photo.
- **Image treatment (design document, Layout).** 16:9 applies to product media only. Editorial and lifestyle imagery may use any Tailwind aspect ratio, full-width bands and images that bleed past the container.
- **Build job:**
  - Composition and expression (image-led, editorial and asymmetric, calm or dense) becomes a fourth variant axis next to layout, hierarchy and primary affordance.
  - At least one variant per set takes a deliberately bold position with the expression options, and its trade-off line says so.
  - The pre-delivery checklist gets the logo-swap test ("with another retailer's logo, would this variant still work unchanged? Then add a brand moment: a highlight, a project photo, a warm surface, specific proof"), the border rule and the big-moment check.
- **Audit job.** The craft floor gets these flags: a border on a white container on a white page, no big moment (or more than one), a generic grid of equal cards where the content asks for something else, a failed logo-swap test, and product-media crops other than 16:9. The visual principles' flag lines join the design-system check.
- **Page frame (prototype skeleton and build job).** By default the full shell (header, menu, USP bar, mobile search, breadcrumbs, footer) is replaced by one green bar (the header background) with the theme logo inside it: no hanging logo tab, no other elements. The bar's height matches production's header on mobile and desktop, measured from staging at 375px and xl rather than guessed. Below it the variant sits on the page background: white, or beige for product and category pages. The full shell is used only when the prototype's question is about the header, menu or footer; it stays available for that case.
- **Sync compatibility.** Every hex value, `tmx-*` colour and px-valued class quoted in the new prose must match the theme, because the sync checks them. The slimmed-down skeleton keeps the generated component-CSS region intact so the sync can keep regenerating it.
- **Tracking.** The first-iteration eval prototypes and screenshots are copied to a baseline folder in the ignored temp prototypes area before any rerun, so the comparison has a fixed "before".

## Testing Decisions

- **What makes a good test.** It judges only the external output of the skill (the prototype or the audit report) or of the sync script (the generated files and linter result). It never judges how the skill text is worded. A test is a fixed prompt plus checkable pass criteria.
- **Seam 1: skill output (primary).** A fixed evaluation set is run through the finished skill in Claude Code:
  1. Veranda PDP section with the configurator CTA
  2. Category product-tile grid with long German product names
  3. Notification block prototype, 3 variants
  4. Bamboo decking landing prototype, linking to the cart (non-configurable)
  5. Campaign banner prototype with heading highlight
  6. Form with error and success states
  7. Audit of a screenshot of an existing page
  8. Audit of a deliberately sloppy block (orange button, left-border stripe, gradient text, nested cards)
  9. One recent real request from the user

  Pass criteria for every prompt:
  - only `tmx-*` tokens and no arbitrary values
  - primary button `#809700`
  - orange only for price and highlights
  - AA contrast
  - works on mobile
  - long strings don't break the layout
  - copy is delegated or marked as a placeholder

  Build prompts also need 3 genuinely different variants, each with a trade-off line. Audit prompts also need ranked findings with rules and fixes, plus a CRO assessment (CTA visibility, trust signals, friction). Prompt 8 must flag every planted violation.
- **Seam 2: sync script.** Pointed at the theme repo, it must produce:
  - a design document that passes the DESIGN.md linter with zero errors
  - colour, spacing, radius and font-size tokens that match the theme's Tailwind config 1:1
  - a Tailwind config with the same `tmx` names

  It must leave the theme repo unmodified.
- **Second iteration, seam 1.** The same 9 prompts, with these extra pass criteria for build prompts:
  - no border on a white container on a white page; borders only on theme components or where two white surfaces meet
  - at least one bold variant per set, named as such in its trade-off line
  - one big moment per variant, matching the register
  - 16:9 only on product media
  - the green logo bar instead of the full shell, unless the prompt is about the shell
  - every variant passes the logo-swap test

  Audit prompt 8 gets one more planted violation, a redundant border on a white wrapper, and must flag it. The rerun is compared side by side with the baseline at 375px and xl. The user judges whether the designs are less generic; that criterion is a human judgement and isn't automated.
- **Second iteration, seam 2.** The sync script runs unchanged after the edits: zero linter errors, no drift errors on the new prose, and the skeleton's component-CSS region regenerated without errors.
- **Prior art.** Seam 1 reuses the evaluation set and its results table from the first iteration. Seam 2 reuses the sync script's own drift and unknown-class checks. Before the first iteration there was no prior art in this workspace. The DESIGN.md linter (and its diff command, for regressions between versions) is the external tool used by seam 2.

## Out of Scope

- Automated packaging for claude.ai (zip or single-file bundle); done by hand when needed.
- Production Hyvä/Tailwind theme code in the webshop repo.
- Magento PageBuilder and Magezon PageBuilder output. The blog-import skill keeps its own PageBuilder rules.
- The checkout theme (separate LESS theme). It is listed in the skill as a known exception.
- Figma output.
- Any runtime dependency on Impeccable, and rebuilding Impeccable's wider command set (animate, colorize, delight, overdrive, live, etc.).
- Fixing the PDP button colour in the theme; that is tracked separately.
- Changing the written tone of voice, which stays owned by `tuinmaximaal-copy`.
- Second iteration: Apple's visual language (Liquid Glass, blur, translucency, dark minimalism) and Apple as a visual reference.
- Second iteration: type sizes above 28px, new tokens, or any change to the theme, including removing the product tile's border.
- Second iteration: rebuilding the production header faithfully in prototypes.

## Further Notes

- The Google DESIGN.md spec is at version alpha, so the linter version should be pinned and re-checked after upgrades.
- claude.ai sources disagree on the description limit (200 vs 1024 characters). 200 is the safe target.
- ArticulatCF is a licensed font and must not be bundled in the skill.
- The theme's StyleGuide module (`/styleguide` route), Tailwind cheatsheet and dev rules are sources the skill must cover, not just cross-checks.
- Two points were settled at the end of the design session and are assumed in this spec: no skill copy in the webshop repo, and a CRO lens in audits.
- The work is split into two tickets (01: design system from theme to working skill; 02: build and audit jobs). Manual checks by the user after ticket 02, not covered by a ticket:
  - portability (description ≤ 200 characters, portable frontmatter, skill entry < 500 lines, no runtime repo dependencies, no font files)
  - pinning the linter version
  - running all 9 evaluation prompts
  - uninstalling Impeccable globally
- The second iteration came out of a design review of the first prototypes (inconsistent grey borders, generic designs, a shell that differs from production). It gets its own tickets from 03 onward. After those tickets the user reruns the evaluation set, compares it with the baseline, and records the results in the evaluation set's results table.
- Apple's HIG exists in two versions: the classic principles (Clarity, Deference, Depth) and the 2025 set that came with Liquid Glass (Hierarchy, Harmony, Consistency). The skill takes Clarity, Deference and Depth from the first and Hierarchy from the second. Harmony and Consistency are already covered by the design system itself.
