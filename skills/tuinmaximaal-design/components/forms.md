# Forms

A component file of [DESIGN.md](../DESIGN.md) → Components. A section named without a file, such as Colors or Elevation & Depth, is DESIGN.md's.

`form` and `fieldset` are `flex flex-col gap-4`. A `.field` is `flex flex-col gap-1.5`. A `fieldset` doesn't shrink below its content by default, so a row of option cards in one pushes the page wider at 375px; the prototype skeleton gives it `min-w-0`.

- **Source:** Figma `1329:15249` and `1331:14308` (input fields), `1333:20089` and `1333:20196` (textareas), and `1343:22101`, `1343:42177`, `1343:42718` and `1343:44817` (the dropdown), file "Tuinmaximaal for Claude". The theme's `.field`, `.form-input`, `.form-select` and `.form-textarea` are the base. The skeleton adds Figma's look, the warning feedback, the hint, the icons, the input groups and the dropdown on top of them (Known exceptions, below).
- **Structure:** a label, then `.control` (`relative flex flex-col gap-y-2`) holding the input, then an optional `p.hint`. `.field-group` stacks related fields with `gap-0.5`. `field-reserved` comes from the Hyvä parent theme (`base` doesn't style it); keep it on fields as the theme does.

  ```html
  <div class="field">
      <label for="postcode">Postcode</label>
      <div class="control"><input id="postcode" class="form-input" placeholder="1234 AB" aria-describedby="postcode-hint"></div>
      <p class="hint" id="postcode-hint">…</p><!-- optional -->
  </div>
  ```
- **Label:** 14px medium, `text-muted`, `gap-1.5` above the field. Required fields (`field-required` or `required`) get an asterisk in `danger`. Always put the label above the field. The theme's floating label (`field-floating`) isn't in Figma; don't use it in a prototype.
- **Field:** full width, 44px high (16px text, `px-3.5 py-2.5`), `rounded-1`, white, with a 1px `border`. The placeholder is `text-muted` at 90%; an entered value is `text` at 90%.
- **Hint:** `p.hint`, 14px `text-muted`, `gap-1.5` below the field, tied to it with `aria-describedby`. It says what the field needs ("Zonder spaties"), or, under feedback, what went wrong.
- **States:**
  - **Hover and active:** a `border-strong` border.
  - **Focus:** a `border-strong` border and the 4px `ring` at 50%.
  - **Disabled:** the whole field, label and hint included, at 50%.
- **Feedback:** add `field-error`, `field-warning` or `field-success` to the `.field`. The field then takes:
  - a border in `danger`, `warning` or `success`;
  - a focus ring in that colour at 20%;
  - the hint in its `-text` shade;
  - Figma's 20px status icon, 14px from the right: a triangle for an error, an exclamation mark for a warning, a check for success.

  The label stays `text-muted`. An error's message is the hint, in the words of the problem ("Vul een geldige postcode in"). A warning is for input that is accepted but unusual, such as a measurement outside the standard sizes. Success is for a check the customer is waiting for, such as a postcode lookup, not for every valid field. The theme's grey `.warning` line with an info icon predates Figma; use `field-warning` instead. `.messages` is the theme's error line and takes the same `-text` colour.
- **Icons:**
  - **Leading:** `--icon-leading` on `.control`, with a 24px inline SVG before the input, in `text-muted`. Use it for a search field or a field whose type an icon makes clear, not as decoration.
  - **Help:** a `button.field-help` after the input: Figma's 20px question-mark circle in `info`, with an `aria-label` naming the explanation ("Uitleg over de doorloophoogte"). It opens the tooltip or the explanation. Feedback hides it, because the status icon takes its place.
- **Input groups** (`.control > .input-group`):
  - **Leading dropdown:** a unit or country code before the value, in one box. The markup is `select.form-select`, `input.form-input`, then `span.field-icon` (`aria-hidden`, which shows the status icon under feedback) and an optional help button.
  - **Trailing dropdown:** the same box with the select last. Use it for a measurement with a unit ("mm", "cm").
  - **Prefix** (`.input-group.--prefix`): `span.input-prefix` holds fixed text before the value (`https://`, `€`), in its own box. Only the input takes the states and the feedback.
  - Every select in a group has its own `aria-label`. The group's box takes the hover, focus and feedback of a single field, and its select shows Figma's grey chevron.
- **Textarea:** the field's box at 160px (`h-40`), with the same states and feedback but no icon: Figma shows textarea feedback in the border and the hint only.
- **Select:** a native `select.form-select` is Figma's dropdown button: the field's box at `rounded-1.5` (6px), the value in `text`, and a grey 20px chevron 14px from the right (`pr-10.5`). It takes the field's states and feedback, but no status icon: Figma keeps the chevron. Use it for every plain choice (a quantity, a country, a sort order): it opens the phone's own picker and needs no script.
- **Dropdown** (`.dropdown`): the same button with a custom list, for options that need what a native select can't show: a leading image (a colour or product photo), a leading icon, or trailing text (a RAL code, a price, a stock line). The skeleton's script makes it work (`data-dropdown`).

  ```html
  <div class="field">
      <label for="kleur">Kleur</label>
      <div class="control">
          <div class="dropdown" data-dropdown>
              <button type="button" id="kleur" class="dropdown-button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="kleur-list">
                  <img src="…" alt=""><span>Antraciet</span><span class="dropdown-trailing">RAL 7016</span>
              </button>
              <ul class="dropdown-list" id="kleur-list" role="listbox" aria-labelledby="kleur" hidden>
                  <li class="dropdown-option" role="option" aria-selected="true"><img src="…" alt=""><span>Antraciet</span><span class="dropdown-trailing">RAL 7016</span></li>
                  <li class="dropdown-option" role="option" aria-selected="false" aria-disabled="true">…</li>
              </ul>
          </div>
      </div>
  </div>
  ```
  - **Button:** 44px, `rounded-1.5`, white, a 1px `border`, 16px `text`, with the grey chevron last. A leading 24px image (`rounded-0.5`) or a 24px outline icon in `text-muted` comes first, the value next, and trailing text in `text-muted` before the chevron, all `gap-2` apart. The button repeats the picked option's content; the script copies it on a pick.
  - **States:** hover a `border-strong` border; keyboard focus that border and the 4px `ring` at 50%; open the `border-strong` border and the chevron turned up, without a ring. Feedback (`field-error`, `field-warning`, `field-success`) colours the border and the hint as on a field, with no status icon. A `disabled` button dims the whole field.
  - **List:** `gap-1` (4px) under the button, full width, white, `rounded-2`, `p-2`, `shadow-lg`, no border, at most 416px high (ten options), then it scrolls.
  - **Options:** 14px `text` on a 20px line, `px-3.5 py-2.5` (40px, 44px with an image or icon), `rounded-1`, with the button's image, icon and trailing text at the same sizes. Hover and the selected option fill `neutral-50`; the selected option's name is semibold, without a check mark. A disabled option (`aria-disabled="true"`) is at 50% and can't be picked. The option the arrow keys reach adds a 2px `ring` inside it (a house addition: Figma's fill alone is too faint to follow).
  - **Keyboard:** a click, Enter, Space or an arrow key opens the list; the arrows, Home and End move; Enter or Space picks; Esc, Tab or a click outside closes. A pick fires a bubbling `dropdown-change` event with the option's `data-value` (or its text), for a prototype that updates a price or an image.
  - Keep every option to one line of name plus one short trailing value. A choice with a description per option is an option card (below), not a dropdown.
- **`aria-invalid:`** is a theme variant for `[aria-invalid="true"]`, used for the error border and ring on a flagged field. Set `aria-invalid="true"` on an input with `field-error` as well.
- **Checkboxes, radios, option cards and product cards:** components/choices.md.

## Known exceptions

- **Forms (open, for the FED lead):** Figma's input fields and textareas (above) differ from the theme's `forms.css`, and prototypes follow Figma through the skeleton's unlayered overrides:
  - the theme's select has a green chevron 16px from the edge, `rounded-1` and a status icon beside the chevron, where Figma's dropdown button has a grey chevron 14px from the edge, `rounded-1.5` and no status icon;
  - the theme has no custom dropdown for options with an image, an icon or trailing text (Figma `1343:22101`);
  - the theme's focus ring is #636363 at 50%, where Figma uses `ring`;
  - the theme has no warning feedback, no hint class, no leading icon, no help button and no input groups;
  - its error icon is a circle, not Figma's triangle, and its status icons sit 16px from the edge instead of 14px;
  - it dims only the input when disabled, and has no textarea height.

  Figma is inconsistent in two places, and prototypes pick one value:
  - its textarea draws its error border in `danger-text`, and its input in `danger`: prototypes use `danger` for both;
  - its dropdown label is `text`, and its input label `text-muted`: prototypes keep `text-muted` for every label, so a form has one label colour.
