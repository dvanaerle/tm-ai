# 26: Figma swatches, quantity, action menu and reviews

**What to build:** the last batch of Figma sets ("Tuinmaximaal for Claude"):
- the swatch base `1385:32208` and set `1385:32405`: 70 variants of 7 sizes × rectangle or round × 5 states;
- quantity `816:24939`: plus and minus, dropdown, and an input with an update button;
- the action menu `1286:17433`;
- reviews:
  - the star icon `1382:28568` (filled, outline, stroke);
  - star `1382:28586`: 0–100% in 10% steps, in colour, mono and mono semi;
  - stars `1384:28794`;
  - the reviews summary `1385:28923` (24 variants) and the mini summary `1395:29980`.

**Status:** done

- [x] **Swatch:** `label.swatch` around an `sr-only` input, in `.swatch-group`.
  - It has a 2px border, `rounded-1.5` or `--round`, and 7 sizes (32 to 80px, with L at 44px as the default).
  - States: hover and selected in `secondary`, focus with the `ring`; disabled is neutral with Figma's diagonal strike.
  - `span.swatch-colour` is a house addition for colour picks.
  - DESIGN.md → Choices → Swatch has usage rules. The option card's tile bullet now points sizes and colours to the swatch.
- [x] **Quantity:**
  - `.quantity` follows the Quantity component: 176px, a 14px semibold number, and `--full`;
  - `select.form-select.quantity-select` is 80px;
  - `.quantity-update` is an 80px field with the L icon-only primary check button.
  - One style per page, with the reasons.
- [x] **Action menu:** `[data-menu]`, with the skeleton's script handling click, the keyboard, Esc and clicking outside.
  - The menu is 240px, `rounded-2`, `p-1` and `shadow-lg`, with an optional title and an `hr` divider.
  - Items are 32px with a 20px icon; `--danger` items are red. `--end` aligns the menu right.
- [x] **Reviews, gated on the brief:** reviews aren't enabled on the live site.
  - `span.stars` has `--rating` for any fraction, and three styles: the default, `--mono` and `--accent`.
  - `.reviews-summary` and `--mini`.
  - The count is `primary`, not orange.
  - The existing prose no longer offers reviews as default proof: Brand, Review cards, the Do's, build.md and audit.md, where an invented rating is now a finding.
- [x] Known exceptions: the theme gaps, the quantity's Figma inconsistencies, and a new Reviews entry (the gate and the count's colour).

## Comments

- **Measured headlessly** (`tmp/pick-check.mjs`):
  - swatch heights are 32/36/40/44/48/60/80, with widths within 1–3px of Figma (font metrics);
  - the swatch colours match Figma in every state: #E3E3E3 at rest, #809700 on hover and selected, #F8FCE6 when selected, and #F5F5F5, #D4D4D4 and #A3A3A3 at 75% when disabled;
  - the stars are 92×20, and a 3.1 rating fills 57px;
  - the summary is 14px, with the count as a 12px pill;
  - the quantity parts measure 176×44, 80×44, and 80 plus 44;
  - the menu is 240px with 32px items;
  - the keyboard flow works: open, the arrows wrapping, End, Esc back to the button, and Space and Enter;
  - no console errors on this check page, the earlier ones, or the example.
- **Width trap:** the theme's unlayered `.field` and `.form-select` take `w-full`, so width utilities lose to them. That is why the quantity got `quantity-select` and `--full`.
- **The skill's proposals:**
  - L is the default swatch size;
  - the colour chip;
  - the quantity style per context;
  - at most five menu items;
  - the default star colour is Figma's "Colour" style, with `--accent` kept away from the price box.
