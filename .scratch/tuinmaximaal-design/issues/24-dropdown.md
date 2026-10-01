# 24: Figma dropdown

**What to build:** these Figma sets ("Tuinmaximaal for Claude") become DESIGN.md → Components → Forms → Select and Dropdown:
- the dropdown button base `1343:22012` and set `1343:22101`: 336 variants of type (default, leading image, leading icon) × trailing text × state × feedback × label × hint;
- the list item base `1343:42044` and set `1343:42177`: 24 variants;
- the list `1343:42718` and the open dropdown `1343:44817`: 6 each.

**Status:** done

- [x] The native `.form-select` takes Figma's dropdown button: `rounded-1.5`, the value in `text`, a grey 20px chevron 14px from the edge (`pr-10.5`), and no status icon under feedback.
- [x] `.dropdown` is a custom combobox button and listbox, for options with a leading image, a leading icon or trailing text:
  - the button: 44px, `rounded-1.5`, with hover, focus (the `ring` at 50%), open (the chevron up, no ring), feedback and disabled states;
  - the list: `mt-1`, `rounded-2`, `p-2`, `shadow-lg`, at most 416px high;
  - options: 14px on a 20px line, `neutral-50` on hover and selected, semibold when selected, disabled at 50%.
- [x] The skeleton script (`data-dropdown`) opens, moves, picks and closes with the mouse and the keyboard (`aria-activedescendant`), copies the pick into the button and fires `dropdown-change`.
- [x] **Fix to issue 23:** Figma's fields are 44px, not 46px. Figma draws its 24px line inside the stroke, so the theme's 22px line was right. The `leading-6` override now applies to the textarea only.
- [x] DESIGN.md: Forms → Select and Dropdown, the field height, Elevation (`shadow-lg` for the list, `shadow-arrow` for the carousel arrows only), and Known exceptions → Forms (the theme's select, the missing dropdown, the label inconsistency). audit.md points to them.

## Comments

- **Measured headlessly** (`tmp/dropdown-check.mjs`: 24 dropdowns, 6 types × 4 feedbacks, plus selects, disabled and open):
  - buttons and selects are 44px with a 6px radius; the chevron is #636363 at 20px; borders are #E3E3E3, #636363 on hover and when open, and the status colour under feedback, including on focus;
  - focus draws the `ring` at 50%, or the status colour at 20%;
  - the list is 416px with an 8px radius and `shadow-lg`; options are 40px, or 44px with an image or icon;
  - the keyboard flow works: arrows skip a disabled option, Home and End, Space and Enter pick, Esc and Tab close, and a disabled button doesn't open;
  - the accessibility tree reads `combobox "Kleur": Antraciet RAL 7016`;
  - no console errors; the input fields re-measure at 44px.
- **Figma inconsistency:** the dropdown's label is `text` (#003017), and the input's is `text-muted`. The skill keeps `text-muted` for every label.
- **Nearest token:** Figma's list shadow is Tailwind v2's `shadow-lg` (second layer 0 4px 6px −2px at 5%); prototypes use v3's `shadow-lg`.
- **The skill's proposals:**
  - the native select for every plain choice, and the dropdown only when the options need an image, an icon or trailing text;
  - the 416px list height;
  - the keyboard's ring on the active option (a house addition, since `neutral-50` on white is 1.04:1);
  - `dropdown-change` for prototypes that react to a pick.
