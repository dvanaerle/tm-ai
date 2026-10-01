# 21: Semantic colour tokens

**What to build:** The Figma semantic colour layer `6767:34313` ("Tuinmaximaal for Claude") becomes the skill's palette, completed by Tailwind defaults, so that one edit re-skins a prototype. The user chose semantic classes over `tmx-*` for prototypes.

**Status:** done

- [x] The sync keeps Figma's 36 tokens in a semantic table, each resolved to the theme colour it matches. `link` and `link-hover` keep Figma's own values. The table generates:
  - the front matter colours, with the old `primary` = lime alias dropped;
  - a `:root` block of `--color-*` RGB channels in the skeleton;
  - Tailwind colours built as `rgb(var(--color-*) / <alpha-value>)`.
- [x] The theme's colour maps in the prototype config resolve through the same variables, so `.btn-primary`, the fields, the messages and the shell follow a re-skin. The theme's `text-link` becomes Figma's `link` / `link-hover`.
- [x] The skeleton's own classes, the page shell, the prototype switcher and the approved example use semantic names and Tailwind defaults only. A new test fails if the example has a `tmx-*` class.
- [x] DESIGN.md:
  - Colors is a token table (token, value, theme source, use), plus the status groups and the Tailwind defaults;
  - the class names are renamed throughout;
  - Link colour becomes `link` in the image-text item title, the FAQ answer and inline links;
  - Known exceptions: Link colour is replaced by "Semantic colours (open, for the FED lead)", and the RAL swatches use the nearest Tailwind defaults.
- [x] build.md, audit.md, SKILL.md and the eval name the semantic tokens. Audits still accept `tmx-*` in theme code.

## Comments

- **Mapping:** 32 of the 36 Figma values match a theme hex exactly. The status groups are Tailwind's amber, red, green and sky, which the theme already copies into `tmx-status-*`. Figma's `danger` is the theme's `error`, and `on-*-subtle` is the theme's `-strong`.
- **Figma inconsistencies, reported to the user:**
  - The `ring` variable is a flat #A1A1A1, but its chip says #636363 at 50%. The skeleton first followed the chip and the theme; issue 22 flips it to #A1A1A1, the value the variable and the focus effect agree on.
  - Some chip labels say "suble".
  - The warning chip is labelled "on-warning" where the others are `on-…-subtle`. The skill uses `on-warning-subtle`.
- **Tailwind defaults**, for what the layer has no token for:
  - `white`;
  - `gray-50`: the pill, the modal footer and the notice;
  - `gray-900`: the scrim, the backdrop and the play wash. It replaces the theme's #11171F, and at 60% the difference is invisible;
  - `yellow-400`: Figma's exact modal icon, which replaces the nearest-token compromise;
  - `neutral-700`: the outline message's text;
  - the RAL swatches: `zinc-700`, `neutral-950`, `stone-400` and `neutral-500`, the nearest by RGB distance.

  The sync checks each default against the theme's `tailwindcss/colors`.
- **Token preference:** where tokens share a hex, the utility decides which one a theme value means. #003017 is `text` in a `textColor`, `primary` otherwise; #636363 is `ring` in a `ringColor` and `border-strong` in a `borderColor`. The theme's white stays Tailwind's `white`.
- **Class names follow Figma literally:** `text-text`, `text-text-muted`, `border-border`, `ring-ring/50`, as in shadcn. Groups nest (`surface`, `surface-raised`), so `bg-surface` survives the merge with the theme's `backgroundColor.secondary` object. The compile check proves it.
- **Verified headlessly** (`tmp/semantic-check.mjs`) on the example and the dialogs, messages and split-image check pages:
  - no console errors;
  - body #003017, `.btn-primary` #809700 with a #6D8005 border, `surface` #FFF5ED, `link` #5C6B08, `border` #E3E3E3;
  - setting `--color-secondary` and `--color-surface` recolours the primary buttons and the beige surfaces, after the button's 150ms transition.
- **Not updated:** `tmp/prototypes/eval10-zonwering-i6.html` (gitignored) still carries copies of the old CSS.
