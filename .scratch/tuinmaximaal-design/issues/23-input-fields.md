# 23: Figma input fields and textareas

**What to build:** These Figma sets ("Tuinmaximaal for Claude") become DESIGN.md → Components → Forms:
- the input bases and set `1329:15249` and `1331:14308`: 600 variants of type × state × feedback × label, icons and hint;
- the textarea bases and set `1333:20089` and `1333:20196`: 64 variants.

**Status:** done

- [x] The sync adds unlayered overrides of the theme's `forms.css`:
  - 44px fields (46px until issue 24 found the 2px error), and the value in `text` at 90%;
  - the focus ring in `ring` at 50%;
  - a 160px textarea without a status icon;
  - disabled dims the whole field;
  - `p.hint`;
  - `field-warning`, next to the theme's error and success;
  - Figma's Heroicon status icons (the error triangle, the warning exclamation, the success check), 14px from the edge, with `pr-10`.
- [x] Icons: `--icon-leading` (24px, `text-muted`) and `button.field-help` (the 20px question mark in `info`, hidden under feedback).
- [x] Input groups: the leading and trailing dropdowns share one box, with Figma's grey chevron and `span.field-icon` for the status icon. `--prefix` keeps its own box, and only the input takes the states.
- [x] DESIGN.md → Forms is rewritten: source, markup, label, field, hint, states, feedback with usage rules, icons, input groups and textarea. The floating label is dropped for prototypes. Known exceptions gains Forms (the theme gap). audit.md and build.md point to Forms.
- [x] The front matter's `form-input` typography is on the 24px line.

## Comments

- **Measured headlessly** (`tmp/inputs-check.mjs`, 24 fields: 4 types × 4 feedbacks, 4 textareas, filled, disabled, hover and focus):
  - Fields are 44px (re-measured in issue 24) and textareas 160px.
  - Borders are #E3E3E3 at rest and #636363 on hover and focus.
  - Focus draws the `ring` at 50%; feedback focus draws the status colour at 20%.
  - Hints are 14px in `text-muted` or the status `-text` shade; labels are 14px medium `text-muted`.
  - Disabled fields are at 50%, and the icons sit 14px from the edge.
  - The group selects are `pl-3.5` with `pr-9` (leading) or `pr-9.5` (trailing), within the width of "XX" of Figma.
  - No console errors.
- **Specificity:** the theme's status-icon padding reaches grouped inputs through `@apply` chains of up to (0,6,0), so the group paddings carry `!`. The textarea icon and padding do too.
- **Figma inconsistency:** the textarea's error border is `danger-text` and the input's is `danger`; the skill uses `danger` for both. Recorded in Known exceptions → Forms.
- **Usage rules are the skill's proposal:**
  - a warning for accepted but unusual input;
  - success only for a check the customer waits for;
  - the help button only with a real explanation;
  - the leading icon only when it clarifies the field.
