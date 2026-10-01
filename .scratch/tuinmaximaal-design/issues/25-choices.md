# 25: Figma checkboxes, radios, option cards and product cards

**What to build:** these Figma sets ("Tuinmaximaal for Claude") become DESIGN.md → Components → Choices:
- the base `1412:30587`: 72 variants of type (checkbox, radio button, check circle) × size (S, M, L) × checked × state (default, hover, focus, disabled);
- checkbox `1420:30806`, radio button `1420:31898` and check circle `1420:32473`: 72 each, adding the label, the label with hint and an optional info icon;
- the radio button in a container `1426:30850`: 40 variants of state × hint × trailing text × image, with an optional media image;
- the product card `6969:1655`: 80 variants of position (vertical, horizontal) × state × hint × trailing text × image, with an optional info icon and quantity selector.

**Status:** done

- [x] The control (unlayered overrides of the theme's `.field.choice`):
  - Figma's glyphs as masks, in the S, M and L sizes;
  - the check circle (`input[type="checkbox"].--circle`);
  - hover, keyboard-only focus, checked and disabled, where disabled checked is white at 50%.
- [x] The row: `gap-2.5` (S `gap-2`), a 14px medium `text` label (L 16px), `.choice-text` with `p.hint` and `.choice-label` with `button.choice-help`.
- [x] `.option-card` is redrawn as Figma's radio container:
  - `rounded-1.5`, `p-4`, a visible radio, an optional media image and logo, a hint and trailing text;
  - the 2px selected border as a 1px outline inside the border;
  - a semibold label when selected;
  - disabled at 50%, with the logo at 30%.

  The `sr-only` tile variant keeps its card focus ring.
- [x] `.product-option` (vertical, `--horizontal`): the label stretches over the card, so a click anywhere toggles it. `.quantity` is a 44px stepper; the skeleton script steps it within `min` and `max`.
- [x] The hint line is now 20px, on fields too (it was 21px).
- [x] Docs:
  - DESIGN.md gains Components → Choices, with usage rules, and Forms points to it;
  - Known exceptions → Forms gains the theme gap and Figma's inconsistencies;
  - build.md and audit.md point to Choices.

## Comments

- **Measured headlessly** (`tmp/choice-check.mjs`):
  - controls are 16, 20 and 24px, with radius 4px or full;
  - the checked fill is #809700 with the glyph in white; disabled checked is white with an #E3E3E3 glyph at 50%;
  - hover draws #636363; keyboard focus draws the `ring` at 50%, and a mouse click draws none;
  - labels are 14/20 medium, or 16/24 at L; hints are 14/20 `text-muted`;
  - the option card is 6px with a 16px padding; selected, its border plus outline make 2px of #809700 on #F8FCE6, with a semibold label;
  - the product card is 8px; the horizontal image is 160×90;
  - behaviour:
    - clicking a card or its photo toggles it, and clicking the quantity or help button doesn't;
    - the quantity steps and stops at 0 and at `max`;
    - the accessibility tree reads `checkbox "Montageset"`, the help button, and the `spinbutton "Aantal"`;
  - no console errors, on the check pages or the example.
- **Figma inconsistencies** (in Known exceptions → Forms):
  - the L radio's label is 18/28 with a 16px hint, where the checkbox and check circle use 16/24 with 14px;
  - one L disabled checked checkbox has a semibold label;
  - the info icon is #09244B (the skill uses `text`);
  - the product card's focus equals its hover (the skill adds the control's ring);
  - a disabled row dims only its control, while a disabled field dims all of it.
- **House additions:**
  - the S control is centred on its 20px line;
  - no help button inside `label.option-card`, because a label can't hold another control;
  - stepping the quantity doesn't check the card.
- **Usage rules are the skill's proposal:**
  - a checkbox for independent picks; a radio for one of up to five, with a select beyond that; a check circle for picks on a tile or image;
  - S for dense lists and L for a single key choice;
  - an option card for a choice with a hint, price or logo, and a product card for an add-on product.
