# 22: Figma buttons

**What to build:** The Figma button base `1286:12548` and set `1286:12715` ("Tuinmaximaal for Claude") become DESIGN.md → Components → Buttons. The set has 500 variants:
- 5 sizes: S, M, L, XL and 2XL;
- 4 styles: Primary, Secondary, Tertiary and Transparent;
- 5 icon layouts: none, leading, trailing, only and only round;
- 5 states: default, hover, focus, active and disabled.

**Status:** done

- [x] The sync generates the sizes from one table: height, padding, the icon side's padding, the label and the icon sizes. XL is the default `.btn`; `--s`, `--m`, `--l` and `--2xl` set the others. `--icon-leading`, `--icon-trailing`, `--icon-only` and `--round` set the icon layouts.
- [x] States follow Figma:
  - Primary's focus keeps its fill and adds a `secondary` ring at 20%.
  - Secondary's focus fills and adds a `primary` ring at 20%.
  - Tertiary is redrawn as a grey outline: `border`, `text-muted`, white on hover and active, `border-strong` plus the `ring` on focus.
  - Transparent is new: `link` / `link-hover` with a 4px ring on focus and a 3px ring when active.
  - The `--active` forced state is added.
- [x] `--flush` is a house addition: a transparent button with no side padding, for a "Lees meer" toggle that lines up with its text column. The example's four toggles use it (checked: flush at x = 16, like the paragraph, and 48px high).
- [x] The `ring` token flips to Figma's #A1A1A1. Figma's variable and its "Focus/Default" effect (#A1A1A1 at 50%) agree; only the chip label said #636363. The theme's field focus ring keeps #636363.
- [x] DESIGN.md:
  - Buttons is rewritten: the styles, a size table with usage rules, icons, layout and states;
  - the tertiary-hover contrast row is dropped;
  - Known exceptions gains Buttons (the theme gap) and Focus rings (soft rings, open for the design lead);
  - the "Lees meer" and blog-tile links become flush transparent buttons.
- [x] build.md, audit.md, the eval and the example test replace the `btn-size-sm` / `btn-size-lg` rules with Figma's sizes.

## Comments

- **Measured headlessly** (`tmp/buttons-check.mjs`, 120 variants):
  - Heights are 36, 40, 44, 48 and 60px.
  - Labels are 14/20 semibold at S and M, 16/24 bold at L and XL, and 18/28 semibold at 2XL.
  - Icons are 20px, 24px at 2XL. Icon-only is 20, 20, 24, 24 and 32px, and those buttons are square or round at the button's height.
  - The icon side's padding is 2px less.
  - The primary keeps `pt-1` at every size, so its 4px border sits inside the height as in Figma.
  - All colours and rings match the Figma values.
  - No console errors.
- **Widths:** within 1px of Figma for primary and transparent. Secondary and tertiary are 2px wider, because the CSS border sits outside the padding and Figma's stroke sits inside. Recorded in Known exceptions → Buttons.
- **Size usage** is the skill's proposal; Figma does not set it:
  - XL by default;
  - L in cards;
  - S and M in dense UI, never for the primary action, with a 44px hit area on touch;
  - 2XL only for a hero CTA the brief asks for.
- **Accessibility (the user took the recommendation):** Figma's 20% and 50% rings fail 3:1 (WCAG 1.4.11). The primary's focus now draws `ring-2 ring-secondary-strong ring-offset-2` (4.4:1), and the transparent button's draws `ring-2 ring-link` (5.9:1). Secondary and tertiary keep Figma's rings, because their fill or border change carries the focus. Known exceptions → Focus rings records this as a house deviation for Figma to follow. The size rules and the 2px border width stay as proposed.
- The theme's `.btn span { mt-0.5 }` still nudges a `span` label 2px down; labels can be bare text.
