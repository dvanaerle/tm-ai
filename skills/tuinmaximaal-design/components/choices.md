# Choices

A component file of [DESIGN.md](../DESIGN.md) → Components. A section named without a file, such as Colors or Elevation & Depth, is DESIGN.md's.

Figma `1412:30587` (the base), `1420:30806` (checkbox), `1420:31898` (radio button), `1420:32473` (check circle), `1426:30850` (radio button in a container) and `6969:1655` (product card), file "Tuinmaximaal for Claude". The theme's `.field.choice` is the base for a row; the skeleton adds Figma's sizes, the check circle, the hint and the cards (Known exceptions, below).

**Which control:**
- **Checkbox:** an independent yes or no, or several picks from a list: filters, add-ons, the terms.
- **Radio button:** exactly one of a few options, all visible. Beyond five options, use a select (components/forms.md).
- **Check circle** (`input[type="checkbox"].--circle`): a checkbox drawn round, for a pick on a tile or an image, where a square reads as a form field. Don't mix it with square checkboxes in one group.

**The control:** 20px (M), white, a 1px `border`: `rounded-1` for the checkbox, `rounded-full` for the radio and the check circle. Checked, it fills `secondary` with Figma's white glyph (a check, or the radio's dot) and no border.
- **Hover** (on the row or card): a `border-strong` border. A checked control doesn't change.
- **Keyboard focus:** a `border-strong` border and the 4px `ring` at 50%, checked or not; a mouse click shows no ring.
- **Disabled:** the control at 50%; a checked one turns white with a `border` border and a `border` glyph. The label stays at full strength, as in Figma.

**A row** (`.field.choice`): the control, then the label, top-aligned, `gap-2.5`. The label is 14px medium `text`. A hint or a help button needs the text wrapper:

```html
<div class="field choice"><input type="checkbox" id="nieuwsbrief"><label for="nieuwsbrief">Nieuwsbrief ontvangen</label></div>

<div class="field choice">
    <input type="checkbox" id="montage" aria-describedby="montage-hint">
    <div class="choice-text">
        <div class="choice-label"><label for="montage">Montageservice</label><button type="button" class="choice-help" aria-label="Uitleg over de montageservice"><svg>…</svg></button></div>
        <p class="hint" id="montage-hint">Wij plaatsen het hek binnen 2 weken</p>
    </div>
</div>
```
- **Hint:** `p.hint`, 14px `text-muted` on a 20px line, tied with `aria-describedby`.
- **Help:** `button.choice-help` after the label: Figma's 20px outline info icon in `text`, with an `aria-label` naming the explanation. Use it only when there is a real explanation behind it.
- **Sizes:** M is the default and has no class.
  - `--s`: a 16px control, `gap-2`, for dense lists such as a long filter list. The control is centred on the label's 20px line (Figma top-aligns it, 2px high).
  - `--l`: a 24px control and a 16px label on a 24px line, for a single key choice, such as the terms at checkout.
  - One group takes one size.
- A group of rows sits in a `fieldset` whose `legend` names the group.

**Option card** (`label.option-card`, the radio button in a container): a radio with its content in a white box, `rounded-1.5` (6px), `p-4`, a 1px `border`. Use it for a choice whose options need a hint, a price or delivery line, or a logo: payment and shipping methods, a package, a configurator step.

```html
<label class="option-card">
    <img class="option-card-media" src="…" alt=""><!-- optional, 16:9 -->
    <span class="option-card-row">
        <input type="radio" name="betaling" value="ideal">
        <span class="option-card-content">
            <span class="option-card-head">
                <span class="option-card-text"><span class="option-card-label">iDEAL</span><span class="option-card-hint">Direct betalen via je bank</span></span>
                <img class="option-card-image" src="…" alt="iDEAL"><!-- optional logo, 24px high -->
            </span>
            <span class="option-card-trailing">Gratis</span><!-- optional -->
        </span>
    </span>
</label>
```
- **Content:** the label 14px medium `text`, the hint 14px `text-muted`, the trailing text 16px `text`, `gap-3` below them. The logo sits top right. The media is a 16:9 image above the row, `rounded-2`.
- **States:** hover a `border-strong` border; keyboard focus that border and the radio's ring; selected Figma's 2px `secondary` border (a 1px outline inside the 1px border, so nothing shifts), `secondary-subtle` fill and a semibold label; disabled the whole card at 50%, its logo at 30%.
- The card is a `label`, so it holds no other control: put an explanation in the hint.
- **Tiles:** a card without a visible control (an image choice, such as a fence style) keeps its input `sr-only`; the card then takes the 4px focus ring itself. A size, a dimension or a colour is a swatch (below), not a tile. It is `relative`, so the `sr-only` input stays inside it.
- Stack cards `gap-3`, or put two or three in a row from `md`, all the same height. Never write `has-[…]:` variants yourself: the skeleton's `.option-card` has them.

**Product card** (`div.product-option`): a checkbox for an add-on product, with its photo: a mounting set, a care product, an extra post. Vertical by default, in a grid of two to four; `--horizontal` puts a 160×90px photo beside the text, for a list or a narrow column.

```html
<div class="product-option">
    <img class="product-option-media" src="…" alt="">
    <div class="product-option-content">
        <div class="product-option-text">
            <div class="product-option-head">
                <input type="checkbox" id="montageset" aria-describedby="montageset-hint">
                <label class="product-option-label" for="montageset">Montageset</label>
                <button type="button" class="choice-help" aria-label="Uitleg over de montageset"><svg>…</svg></button><!-- optional -->
            </div>
            <span class="product-option-hint" id="montageset-hint">RVS schroeven, 40 stuks</span>
        </div>
        <div class="product-option-bottom"><span>€ 24,95</span><!-- optional quantity selector --></div>
    </div>
</div>
```
- **Vertical:** white, `rounded-2`, a 1px `border`, a 16:9 photo on top (`rounded-1`), then `p-4`: the checkbox and the 14px semibold label, the hint in `text-muted` `gap-2` below, and the bottom row `gap-3` below that, with the trailing text (a price) in `text-muted` and an optional quantity selector.
- **Horizontal** (`--horizontal`): `p-4`, the photo left, `gap-3`; the label and the hint top right (`gap-1`), and the bottom row holds the trailing text and the checkbox, right-aligned:

  ```html
  <div class="product-option --horizontal">
      <img class="product-option-media" src="…" alt="">
      <div class="product-option-content">
          <div class="product-option-text"><label class="product-option-label" for="paal">Extra paal</label><span class="product-option-hint" id="paal-hint">…</span></div>
          <div class="product-option-bottom"><span>€ 12,95</span><input type="checkbox" id="paal" aria-describedby="paal-hint"></div>
      </div>
  </div>
  ```
- **The whole card toggles:** the label stretches over it, and the quantity selector and the help button sit above that. The states are the option card's, with `rounded-2`.
- **Quantity:** the product card's bottom row can hold the quantity selector (below). Stepping doesn't check the card; a React prototype can couple them.

**Swatch** (`label.swatch`, Figma `1385:32208` and `1385:32405`): a size, a dimension, a variant or a colour, picked from a row. It is the right control for every short option label ("180 × 90 cm", "XL", "Antraciet") where a radio list would be long and a select would hide the options. Each swatch is a label around an `sr-only` radio (a checkbox for a multi-pick filter), in a `fieldset` with a `legend`; the row is `.swatch-group` (`flex flex-wrap gap-2`).

```html
<fieldset class="flex flex-col gap-2">
    <legend class="text-3.5 font-medium text-text-muted">Hoogte</legend>
    <div class="swatch-group">
        <label class="swatch"><input type="radio" name="hoogte" value="90" class="sr-only" checked>90 cm</label>
        <label class="swatch"><input type="radio" name="hoogte" value="180" class="sr-only" disabled>180 cm</label>
    </div>
</fieldset>
```
- **Box:** white, a 2px `border`, `rounded-1.5` (6px) or `--round` (`rounded-full`), medium `text` centred on one line. One group takes one style and one size.
- **Sizes:** L (44px) is the default and has no class.

  | Size | Class | Height | Label |
  |---|---|---|---|
  | XS | `--xs` | 32px | 14px |
  | S | `--s` | 36px | 14px |
  | M | `--m` | 40px | 14px |
  | L | none | 44px | 16px |
  | XL | `--xl` | 48px | 16px |
  | 2XL | `--2xl` | 60px | 18px |
  | 3XL | `--3xl` | 80px | 20px |

  L on a product page and in a configurator; S or M in a filter or a product tile; 2XL and 3XL only for a step with a handful of large choices.
- **States:** hover a `secondary` border; keyboard focus that border and the 4px `ring` at 50%; selected the `secondary` border and a `secondary-subtle` fill. Disabled (sold out, or not available with the other picks): a `neutral-100` fill, a `neutral-300` border, `neutral-400` text at 75%, struck through by Figma's 2px diagonal line. Keep a disabled swatch visible, so the customer sees the option exists.
- **Colour:** a colour swatch leads with `span.swatch-colour`, a 20px chip in the product colour (the RAL swatches' Tailwind defaults, Known exceptions, below), before the colour's name. Figma only draws text swatches yet; the chip is a house addition. Always keep the name: the chip alone doesn't name the colour.

**Quantity** (Figma `816:24939`, three styles):
- **Plus and minus** (`.quantity`), the default on a product page, in the cart and in a product card: 176px (`w-44`; `--full` fills its column), 44px high, white, a 1px `border`, `rounded-1`: a minus button, the number (14px semibold `text`) and a plus button, 44px each, with 1px dividers. The skeleton's script steps a number input between its `min` (0 by default) and `max`, and fires `change`. In a `.field` it takes the field's label above it.

  ```html
  <div class="quantity"><button type="button" aria-label="Minder"><svg>…</svg></button><input type="number" min="1" max="10" value="1" aria-label="Aantal"><button type="button" aria-label="Meer"><svg>…</svg></button></div>
  ```
- **Dropdown** (`select.form-select.quantity-select`, 80px): a small fixed range (1 to 10) in a dense row, such as a cart line on a phone.
- **Input with an update button** (`.quantity-update`): an 80px number field and a 44px primary check button (`btn btn-primary --l --icon-only`, `aria-label="Aantal bijwerken"`), `gap-1`, for a large number typed at once, such as square metres of decking, when each change is confirmed.
- One page uses one style. The theme's unlayered `.field` and `.form-select` are full-width, so a width utility on them has no effect: use `quantity-select` and `--full`.

## Known exceptions

- **Choices (open, for the FED lead):** prototypes follow Figma's choices (above) through the skeleton's unlayered overrides:
  - the theme's checkbox and radio (`.field.choice`) have one 20px size, a 16px regular label, a 12px gap and a full-strength disabled checked control, where Figma has three sizes, a 14px medium label, `gap-2.5` and the control at 50%; it has no check circle, no hint on a choice, and no option card, product card or quantity selector.

  Figma's choices differ from each other in a few places, and prototypes follow the majority:
  - the large radio's label is 18px on a 28px line with a 16px hint, where the large checkbox and check circle use 16px on 24px with a 14px hint: prototypes use the latter for all three;
  - one large disabled checked checkbox has a semibold label: prototypes keep medium;
  - the info icon is a UI-kit navy without a token: prototypes use `text`;
  - the product card's focus state equals its hover: prototypes add the control's focus ring, as the radio container does;
  - a disabled choice row dims only its control, where a disabled field dims label and hint too: prototypes follow Figma in both;
  - the product card's quantity shows a 16px medium number, where the Quantity component (`816:24939`) uses 14px semibold: prototypes use the component's;
  - the Quantity component's input style draws a slate UI-kit border and text: prototypes use the field's (`.form-input`).

  The theme has no swatch or quantity selector matching Figma's.
- **RAL swatches (open, for the FED lead):** the theme has no tokens for the product colours (RAL 7016, 9016, 9005, 1019, 9007). Prototypes approximate them with the nearest Tailwind defaults: `zinc-700` for anthracite (7016), `white` (9016), `neutral-950` (9005), `stone-400` (1019) and `neutral-500` (9007), each swatch with a light-grey border and the RAL name in its title. The lead decides between swatch tokens and a documented product-colour exception.
