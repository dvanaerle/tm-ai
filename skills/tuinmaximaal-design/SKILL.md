---
name: tuinmaximaal-design
description: Tuinmaximaal UI and UX in the house design system. Use for any Tuinmaximaal or Gumax page, section, component, prototype or design review.
---

# Tuinmaximaal design

[DESIGN.md](DESIGN.md) is the design system: tokens generated from the live theme, plus the brand rules. Read all of it before any design work; both jobs below depend on it.

The brand essentials, which every output honours:

- Build only with the theme's `tmx-*` and semantic classes, on the scales in DESIGN.md. Every value is a token.
- The primary button is #809700 with a 4px #6D8005 bottom border. Orange (#FF8000) marks prices, highlights, badges and active states, rotated −2° where the theme rotates it.
- Veranda and structure pages lead to the configurator; other products go straight to the cart. "Offerte" is a checkout payment method, so the flow ends in the cart.
- Body text is green (#003017) in ArticulatCF; the surfaces are light and warm.

## Pick the job

- **Build:** the user wants something made: a page, section, component or prototype. Read [references/build.md](references/build.md) and follow it. The result is one throwaway file with 3 structurally different variants (or the number asked for, at most 5) inside a Tuinmaximaal page shell, with a switcher.
- **Audit:** the user hands over an existing page, screenshot, URL or snippet to review. Read [references/audit.md](references/audit.md) and follow it. The result is a report with findings ranked by impact, each with the rule it breaks and a fix, plus a CRO assessment.

If a request asks for both ("review this block and suggest better versions"), audit first, then build variants that fix the top findings.

## Delegation

- **UI copy:** the `tuinmaximaal-copy` skill writes it.
- **Translations:** the `tuinmaximaal-translator` skill translates it.
- **Asset paths:** the `tuinmaximaal-asset-path` skill resolves real image, icon and PDF paths.

When one of these skills isn't available, write a clearly marked placeholder instead, such as `[PLACEHOLDER: USP about delivery]` or `[PLACEHOLDER: image, veranda anthracite]`, so nobody mistakes filler for approved text.

## Licence

The audit's craft floor and refine checklist are adapted from Impeccable (Apache-2.0); see [NOTICE.md](NOTICE.md).
