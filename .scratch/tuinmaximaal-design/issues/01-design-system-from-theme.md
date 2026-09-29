# 01: Design system from theme to working skill

**What to build:** A working `tuinmaximaal-design` skill in Claude Code whose design document is generated from the Valantic `base` theme and carries the full brand prose, so that a user asking for a Tuinmaximaal prototype gets on-brand output. The workspace keeps one source of truth for design. See the spec in this feature folder for all decisions.

- **Coverage of the theme's styleguide is the bar.** The sources are:
  - the StyleGuide module and its sections (buttons, colors, form, messages, typography)
  - the Tailwind cheatsheet and dev rules in the theme
  - the Tailwind config and the component CSS
  Everything these define must be represented in the skill: as a token, as a component in DESIGN.md, or as a rule in the prose. Anything left out on purpose is listed with a reason.
- A sync script in the workspace takes the theme repo path as an argument, with a default. It:
  - regenerates the DESIGN.md front matter (colors, typography, rounded, spacing, components) and the prototype Tailwind config from the theme's Tailwind config and component CSS
  - runs the DESIGN.md linter
  - is read-only towards the theme repo
- Token keys mirror the Tailwind `tmx-*` names. Semantic meaning comes from components that reference those colours: button primary/secondary/tertiary plus hover and the 4px bottom border, form states, messages, product tile, price box, heading/paragraph highlight. There is a `primary` alias.
- DESIGN.md prose follows the spec's section order:
  - the Overview combines IKEA (visual reference), Hornbach (visual tone), and the audience and decision moments from the old product document
  - the first principle is "Reduce time-to-configure": configurator for verandas and structures, cart for other products
  - motion, elevation and the −2° rotation are included
  - the checkout theme is listed as a known exception
  - facts come from the theme code, not the old documents
- A minimal skill entry: model-invoked, English, portable frontmatter only, pointing to DESIGN.md. It includes a basic prototype flow that uses the generated Tailwind config through the CDN and the font stack ArticulatCF, system-ui, sans-serif. It is installed from the workspace into the personal skills folder.
- The evaluation set file is created with all 9 prompts and the pass criteria from the spec.
- Workspace cleanup:
  - the useful content of the shared brand design, product and `.impeccable` documents and of the skill's old design-context file is merged in, then those files are deleted
  - the shared brand README becomes a pointer to the skill
  - the legacy design document moves to the archive
  - the workspace README links are updated

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [x] Every item in the theme's styleguide sections, cheatsheet and dev rules is covered in DESIGN.md or listed as a deliberate omission with a reason
- [x] The sync script runs against the theme repo and leaves it unmodified (clean `git status` there)
- [ ] The DESIGN.md linter reports zero errors; any remaining warnings are justified in `omitted`
- [x] Colour, spacing, radius and font-size tokens match the theme Tailwind config 1:1
- [x] Headings reflect the theme: h1 28 / h2 24 / h3 22 / h4 20 / h5 18 / h6 16 px, black weight on h1–h2 only
- [x] Messages have no border; the primary button is `#809700` with a `#6D8005` bottom border; orange is documented for price, highlights, badges and active states only
- [ ] No "quote request" CTA guidance remains; the purchase flow is configurator → cart
- [x] Only one active design document exists in the workspace; the old ones are merged, deleted or archived, and no links are broken
- [x] The skill triggers in Claude Code on a Tuinmaximaal prototype request
- [x] Evaluation prompts 1, 2, 5 and 6 pass all pass criteria in Claude Code

## Comments

**2026-09-25, implementation.**
- The sync lives at `tools/design-sync/sync.mjs` (`npm run design:sync`), with the linter pinned at `@google/design.md@0.4.0`. The theme repo's `git status` was identical before and after every run.
- Colour, spacing, radius and font-size tokens were checked 1:1 against the theme config: 42 colours, 257 spacing steps, 10 radii and 11 font sizes, with no mismatches.
- The linter reports 0 errors and 8 warnings, all real contrast findings in the live theme: white on #809700 is 3.31:1, white on #FF8000 is 2.52:1, and brown on beige is 3.81:1. Linter 0.4.0 can't justify warnings in `omitted`: that key only accepts absent sections, and listing a present section adds a warning. The justification is therefore in DESIGN.md under Colors → Contrast.
- The four merged files `shared/brand/DESIGN.md`, `shared/brand/PRODUCT.md`, `shared/brand/.impeccable.md` and `skills/tuinmaximaal-design/design-context.md` are deleted (review follow-up).

**2026-09-25, review follow-up.**
- The sync also regenerates the prototype skeleton's component CSS from the theme CSS (flattened, with the theme's own selectors) and compiles it with the theme's Tailwind install, so a class the prototype config lacks fails the sync.
- The heading table and font-size list in DESIGN.md are generated regions; every other value the prose quotes (hex colours, `tmx-*` colour pairs, `text-`, `rounded-` and spacing classes with a px value) is checked against the theme, and drift fails the sync.
- `.gitignore` ignores `/tmp/`; the build job checks with `git check-ignore` that its output path is ignored before writing.
- Eval results are recorded in `evals/tuinmaximaal-design.md`.
- Styleguide coverage: every item in the StyleGuide sections, the cheatsheet and the dev rules was checked. The missing ones are now in DESIGN.md: full-width and forced-state buttons, filled, disabled and disabled-checked controls, the floating label, `field-group`, `field-reserved`, `aria-invalid:`, the notice message without an icon, line heights and container queries. Deliberate omissions and their reasons are listed under Known exceptions → Deliberately omitted.
