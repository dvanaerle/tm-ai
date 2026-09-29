# Notice

## Impeccable

Parts of [references/audit.md](references/audit.md) (the craft floor and the refine checklist) are adapted from **Impeccable** v4.4.0.

- Original work: https://github.com/pbakaus/impeccable
- Copyright 2025 Paul Bakaus
- Licence: Apache License 2.0; the full text is in [LICENSE-impeccable.txt](LICENSE-impeccable.txt)
- Source files: `reference/craft-floor.md` (Verify and Refuse), `reference/audit.md`, `reference/polish.md`, `reference/harden.md` and `reference/adapt.md`

Our changes:

- Condensed into one audit reference for Tuinmaximaal; Impeccable's commands, scripts, detector, hooks and context loading are not used.
- The Refuse defaults are rewritten as positive targets, each followed by the pattern to flag.
- Dropped items that conflict with the Tuinmaximaal design system or don't apply to it: sourcing and self-hosting a display face, theming browser surfaces, one authored motion moment and effects beyond transform and opacity, geometric masks, light or dark per use scene, the display-size and tracking thresholds.
- Thresholds adjusted to DESIGN.md: the 28px type ceiling, 100–300ms motion, the theme's breakpoints, 16:9 product media.
- The 0–4 dimension scores are replaced by findings ranked P0–P3, each with the rule it breaks and a fix in theme classes.
- Added the Tuinmaximaal design-system checks, long DE/FR strings in the harden step, and a CRO lens (CTA visibility, trust signals, friction).
- Added craft-floor items of our own: the border rule, one big moment per page, the logo-swap test, 16:9 for product media only, and generic card grids under Structure; later the container width, the beige intro, borders on coloured boxes, and eyebrow labels as their own Headings item.
- The nested-cards rule allows one level of nesting when the inner box changes surface, and flags one wrapper around everything.

The build job in [references/build.md](references/build.md) is adapted from the UI branch of the `prototype` skill and contains no Impeccable content.
