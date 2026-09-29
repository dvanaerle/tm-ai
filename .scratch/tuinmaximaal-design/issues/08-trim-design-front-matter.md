# 08: Trim the design front matter

**What to build:** The design document describes the patterns prototypes build, not every value or detail the theme defines. Findings from a review of its size and an audit of which tokens the theme (`devdva02`, Valantic `base`) actually uses. The front-matter changes are made in the sync, so the next run doesn't bring them back.

**The cut rule.** A token or prose note stays if it serves a core role (body text, the surfaces white, beige, sand and green, the action colour, the orange accent, status, neutrals for borders and labels) or a pattern the skill describes (buttons, forms, messages, product tile, price box, the content patterns, lists, highlights). Single-use widget styling, module skins and chrome details go. Leaving them out is deliberate: the house rules and the designer's judgement cover what the document doesn't spell out.

1. **Spacing is the whole generated scale.** A sync run copies all 257 steps (0 to 125.5, plus the percentages) into the front matter, about a quarter of the document, and the scale adds nothing an agent can't get from one rule. After this ticket the `spacing` group holds the rhythm steps the prose recommends, under the theme's own keys and with the theme's values: `1` (4px), `1.5` (6px), `2` (8px), `3` (12px), `4` (16px), `6` (24px), `8` (32px) and `12` (48px). The theme's `tailwind.config.js` (and its spacing generator) stays the full definition, and the prose states the rule for everything else: N × 4px (`p-4` = 16px), a `.5` half-step that adds 2px (`gap-1.5` = 6px), from 0 to 500px, plus `1/4`, `1/2`, `3/4`, `full` and `full-x2`.
2. **Typography repeats itself.** Every theme font size is also written as a `text-*` entry, so `text-7` repeats h1, `text-6` h2, `text-3.5` the form label, and so on. After this ticket the typography group keeps the named roles plus the two sizes no role covers, `text-3.75` (15px, the product-tile name) and `text-4.75` (19px, "vanaf"). `button-label-lg` goes too: it belongs to `btn-size-lg`, which the prose forbids. The prose's font-size list is unchanged, so every size class is still documented.
3. **Corners list the whole scale.** The theme uses only 4px, 6px and 8px, plus `rounded-full`. After this ticket the `rounded` group holds `1` (4px), `1.5` (6px), `2` (8px) and `full`, and the Shapes prose lists the same four instead of the full scale.
4. **Niche components and the colours only they carry.** Under the cut rule these go from the front matter:
   - **Single-use details:** `pdp-info-note`, `palette-yellow`, `gallery-zoom-icon`, `blog-category-tag`, `show-more`, `slider-dot`, `slider-dot-active`, `pager`, `search-suggestion-hover`, `read-only-value`, `category` and `content-block-border`.
   - **The shell:** `header`, `header-*`, `logo-border`, `menu*`, `usps*`, `breadcrumbs` and `footer`. Prototypes already replace the shell with a single green bar, so its colours aren't tokens a prototype needs.
   - **Colours left without a role:** blue, yellow, dark grey, medium green, medium grey, red, brown, bone and dark green.

   Two kept patterns still need a colour whose component is going, so each keeps one component: `link-hover-secondary` (lighter green second, the intro link card's hover) and a `pill` component replacing `read-only-value` (lightest grey, the blog tile's category pill). Black stays: the image tile's scrim uses it.
5. **Prose that isn't a design rule.**
   - The Colors section drops the notes on the removed colours (dark green, medium green, bone, red, brown, blue, yellow, dark grey, medium grey) and on single-use details such as "show more" and the slider dot.
   - The Contrast table drops the breadcrumbs row.
   - The Shell section keeps its short bullet list and the prototype green bar, with no hexes for the dropped colours.
   - The Layout section's container-queries line goes: it's an implementation choice per component, not part of the house style, and the theme doesn't use the plugin.
   - The Typography section's `leading-11` (44px) and `leading-12` (48px) go, since the theme never uses them; `leading-5.5` and `leading-7.5` stay.
   - "Deliberately omitted" gets one line instead of a list: theme colours and details with a single niche use aren't part of the house style; build with the palette above.

This follows the Google DESIGN.md spec, where token groups are optional and its examples are a handful of named steps, not full scales. It overrides issue 01's rule that every theme value appears 1:1 as a token. The rest of issue 01 stands: the remaining colours and components stay generated from the theme exactly as they are, including every state token and every status shade (the `-text` and neutral shades are unused in the theme today but are kept for the upcoming status alerts).

**Blocked by:** None (can start immediately).

**Status:** done

- [x] A sync run writes a `spacing` group with exactly the eight rhythm steps above, their values read from the theme's spacing (not typed by hand).
- [x] A sync run writes the named typography roles plus `text-3.75` and `text-4.75`, read from the theme; no other `text-*` entry and no `button-label-lg`.
- [x] A sync run writes a `rounded` group with exactly `1`, `1.5`, `2` and `full`.
- [x] A sync run writes none of the components or colours listed in finding 4, and writes `link-hover-secondary` and `pill`.
- [x] The other colours and components, including every state token and status shade, are unchanged.
- [x] Every colour left in the front matter is referenced by a component, so the linter reports no unused colour.
- [x] The sync fails loudly if a spacing key, font size or corner it keeps is missing from the theme.
- [x] The prose describes the full spacing rule, points to the theme's `tailwind.config.js` as its source, and says the front matter lists only the rhythm steps; the token-naming example no longer uses a dropped entry.
- [x] The Shapes prose lists only `rounded-1`, `rounded-1.5`, `rounded-2` and `rounded-full`.
- [x] The prose changes in finding 5 are made; no prose mentions a dropped colour's hex or name, except the one "Deliberately omitted" line.
- [x] The prose drift check still validates classes quoted with a px value and hex colours against the theme config (for example `py-2.5` = 10px).
- [x] The spec records the cut rule, and that the theme config is leading for the full scales.
- [x] `npm run design:sync` passes: no lint errors, no new warnings, no drift, the prototype skeleton compiles.
- [x] The prototype Tailwind config and skeleton CSS are unchanged.

## Decisions

From the review of the front matter's size and the theme token audit (grilling session, 2026-09-29):

- **The document describes the patterns prototypes build,** not a full copy of the theme, by the cut rule above. Not every detail is explained, on purpose: fewer rules leave room for design judgement inside the house style.
- **The theme's `tailwind.config.js` is leading.** Class names stay the theme's own (`rounded-1`, `rounded-2`, `text-3.5`), not Tailwind's default equivalents (`rounded`, `rounded-lg`, `text-sm`), so prototype markup matches the theme's.
- **Spacing keeps a short group, not none.** The eight rhythm steps, under the theme's keys; no semantic names such as `gutter` or `margin`, which the theme doesn't have.
- **Dropped items get one line, not a list with replacements.** The audit already treats a colour outside the palette as a finding, which covers live pages.
- **The `primary` alias stays.** It repeats `tmx-primary-lighterGreen`, but it's the linter's way to name the main colour.
- **The change lives in the sync, not in a hand edit,** so the next sync doesn't bring the removed entries back and the document can't drift from the theme.
- **States and status shades stay.** Hover, focus and border state tokens are kept even where they repeat their base token, and all status shades stay for the upcoming status alerts.
- **Kept colours stay referenced through a pattern component** (added during implementation). With the shell and single-use components gone, beige, sand and black had no component left, so the linter flagged them as unused. They're now carried by `surface-box` (beige), `surface-box-strong` (sand) and `image-tile-scrim` (black), all patterns the prose already describes.
- **Out of scope:** trimming the rest of the prose (for example the overlap between the Contrast and Price box tables), rerunning the evals, and cleaning up unused tokens in the theme itself.
