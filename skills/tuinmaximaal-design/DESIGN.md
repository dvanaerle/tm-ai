---
"version": "alpha"
"name": "Tuinmaximaal"
"description": "Generated from the Valantic base theme by tools/design-sync/sync.mjs. Do not edit the front matter by hand."
"colors":
  "primary": "#003017"
  "primary-dark": "#001A13"
  "on-primary": "#FFFFFF"
  "secondary-subtle": "#F8FCE6"
  "secondary": "#809700"
  "secondary-strong": "#6D8005"
  "on-secondary": "#FFFFFF"
  "accent": "#FF8000"
  "on-accent": "#FFFFFF"
  "surface": "#FFF5ED"
  "surface-raised": "#F5E6D7"
  "surface-strong": "#E0D2C5"
  "on-surface": "#003017"
  "text": "#003017"
  "text-muted": "#636363"
  "link": "#5C6B08"
  "link-hover": "#4B570A"
  "ring": "#A1A1A1"
  "border": "#E3E3E3"
  "border-strong": "#636363"
  "warning-subtle": "#FFFBEB"
  "warning": "#D97706"
  "warning-text": "#B45309"
  "on-warning-subtle": "#78350F"
  "danger-subtle": "#FEF2F2"
  "danger": "#DC2626"
  "danger-text": "#B91C1C"
  "on-danger-subtle": "#7F1D1D"
  "success-subtle": "#F0FDF4"
  "success": "#16A34A"
  "success-text": "#15803D"
  "on-success-subtle": "#14532D"
  "info-subtle": "#F0F9FF"
  "info": "#0284C7"
  "info-text": "#0369A1"
  "on-info-subtle": "#0C4A6E"
  "white": "#FFFFFF"
  "gray-50": "#F9FAFB"
  "gray-900": "#111827"
  "yellow-400": "#FACC15"
  "neutral-100": "#F5F5F5"
  "neutral-700": "#404040"
  "neutral-900": "#171717"
"typography":
  "h1":
    "fontFamily": "ArticulatCF"
    "fontSize": "1.75rem"
    "lineHeight": "1.25"
    "fontWeight": 900
  "h2":
    "fontFamily": "ArticulatCF"
    "fontSize": "1.5rem"
    "lineHeight": "1.25"
    "fontWeight": 900
  "h3":
    "fontFamily": "ArticulatCF"
    "fontSize": "1.375rem"
    "lineHeight": "1.5"
    "fontWeight": 700
  "h4":
    "fontFamily": "ArticulatCF"
    "fontSize": "1.25rem"
    "lineHeight": "1.5"
    "fontWeight": 700
  "h5":
    "fontFamily": "ArticulatCF"
    "fontSize": "1.125rem"
    "lineHeight": "1.5"
    "fontWeight": 700
  "h6":
    "fontFamily": "ArticulatCF"
    "fontSize": "1rem"
    "lineHeight": "1.5"
    "fontWeight": 600
  "body-md":
    "fontFamily": "ArticulatCF"
    "fontSize": "1rem"
    "lineHeight": "1.5"
    "fontWeight": 400
  "paragraph-sm":
    "fontFamily": "ArticulatCF"
    "fontSize": "0.75rem"
    "lineHeight": "1.5"
  "paragraph-esm":
    "fontFamily": "ArticulatCF"
    "fontSize": "0.625rem"
    "lineHeight": "1.5"
  "paragraph-tiny":
    "fontFamily": "ArticulatCF"
    "fontSize": "0.625rem"
    "lineHeight": "1.5"
    "fontWeight": 700
  "paragraph-highlight":
    "fontFamily": "ArticulatCF"
    "fontSize": "1rem"
    "lineHeight": "1.5"
    "fontWeight": 900
  "button-label":
    "fontFamily": "ArticulatCF"
    "fontSize": "1rem"
    "lineHeight": "1.5"
    "fontWeight": 700
  "form-label":
    "fontFamily": "ArticulatCF"
    "fontSize": "0.875rem"
    "lineHeight": "1.5"
    "fontWeight": 500
  "form-input":
    "fontFamily": "ArticulatCF"
    "fontSize": "1rem"
    "lineHeight": "1.375rem"
    "fontWeight": 400
  "message":
    "fontFamily": "ArticulatCF"
    "fontSize": "0.875rem"
    "lineHeight": "1.5"
    "fontWeight": 400
  "price":
    "fontFamily": "ArticulatCF"
    "fontSize": "1rem"
    "lineHeight": "1.5"
    "fontWeight": 900
  "text-3.75":
    "fontFamily": "ArticulatCF"
    "fontSize": "0.9375rem"
    "lineHeight": "1.5"
  "text-4.75":
    "fontFamily": "ArticulatCF"
    "fontSize": "1.1875rem"
    "lineHeight": "1"
"rounded":
  "1": "0.25rem"
  "1.5": "0.375rem"
  "2": "0.5rem"
  "full": "9999px"
"spacing":
  "1": "0.25rem"
  "1.5": "0.375rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "6": "1.5rem"
  "8": "2rem"
  "12": "3rem"
"components":
  "button-primary":
    "rounded": "{rounded.1}"
    "textColor": "{colors.white}"
    "backgroundColor": "{colors.secondary}"
    "padding": "0.75rem 1.5rem 0.5rem"
    "typography": "{typography.button-label}"
  "button-primary-border":
    "height": "4px"
    "backgroundColor": "{colors.secondary-strong}"
  "button-primary-hover":
    "textColor": "{colors.white}"
    "backgroundColor": "{colors.secondary-strong}"
  "button-primary-hover-border":
    "backgroundColor": "{colors.secondary-strong}"
  "button-secondary":
    "rounded": "{rounded.1}"
    "textColor": "{colors.text}"
    "padding": "0.625rem 1.5rem"
    "typography": "{typography.button-label}"
  "button-secondary-border":
    "size": "1px"
    "backgroundColor": "{colors.primary}"
  "button-secondary-hover":
    "textColor": "{colors.white}"
    "backgroundColor": "{colors.primary}"
  "button-secondary-hover-border":
    "backgroundColor": "{colors.primary}"
  "button-tertiary":
    "textColor": "{colors.text-muted}"
    "rounded": "{rounded.1}"
    "padding": "0.75rem 1.5rem"
    "typography": "{typography.button-label}"
  "button-tertiary-border":
    "size": "1px"
    "backgroundColor": "{colors.border}"
  "button-tertiary-hover":
    "backgroundColor": "{colors.white}"
    "textColor": "{colors.text-muted}"
  "button-tertiary-hover-border":
    "size": "1px"
    "backgroundColor": "{colors.border}"
  "button-tertiary-focus":
    "backgroundColor": "{colors.white}"
    "textColor": "{colors.text-muted}"
  "button-tertiary-focus-border":
    "size": "1px"
    "backgroundColor": "{colors.border-strong}"
  "button-tertiary-focus-ring":
    "size": "4px"
    "backgroundColor": "{colors.ring}"
  "button-transparent":
    "textColor": "{colors.link}"
    "rounded": "{rounded.1}"
    "padding": "0.75rem 1.5rem"
    "typography": "{typography.button-label}"
  "button-transparent-hover":
    "textColor": "{colors.link-hover}"
  "form-input":
    "rounded": "{rounded.1}"
    "backgroundColor": "{colors.white}"
    "textColor": "{colors.text}"
    "padding": "0.625rem 0.875rem"
    "typography": "{typography.form-input}"
  "form-input-border":
    "size": "1px"
    "backgroundColor": "{colors.border}"
  "form-input-hover-border":
    "backgroundColor": "{colors.border-strong}"
  "form-input-focus-border":
    "backgroundColor": "{colors.border-strong}"
  "form-input-focus-ring":
    "size": "4px"
    "backgroundColor": "{colors.text-muted}"
  "form-input-error-border":
    "backgroundColor": "{colors.danger}"
  "form-input-success-border":
    "backgroundColor": "{colors.success}"
  "form-label":
    "textColor": "{colors.text-muted}"
    "typography": "{typography.form-label}"
  "form-error-message":
    "textColor": "{colors.danger-text}"
  "form-choice":
    "size": "1.25rem"
    "backgroundColor": "{colors.white}"
  "form-choice-border":
    "size": "1px"
    "backgroundColor": "{colors.border}"
  "form-choice-checked":
    "backgroundColor": "{colors.secondary}"
    "textColor": "{colors.white}"
  "message-notice":
    "rounded": "{rounded.1}"
    "backgroundColor": "{colors.neutral-100}"
    "textColor": "{colors.neutral-900}"
    "padding": "0.75rem"
    "typography": "{typography.message}"
  "message-error":
    "rounded": "{rounded.1}"
    "backgroundColor": "{colors.danger-subtle}"
    "textColor": "{colors.on-danger-subtle}"
    "padding": "0.75rem"
    "typography": "{typography.message}"
  "message-error-icon":
    "textColor": "{colors.danger}"
  "message-success":
    "rounded": "{rounded.1}"
    "backgroundColor": "{colors.success-subtle}"
    "textColor": "{colors.on-success-subtle}"
    "padding": "0.75rem"
    "typography": "{typography.message}"
  "message-success-icon":
    "textColor": "{colors.success}"
  "message-info":
    "rounded": "{rounded.1}"
    "backgroundColor": "{colors.info-subtle}"
    "textColor": "{colors.on-info-subtle}"
    "padding": "0.75rem"
    "typography": "{typography.message}"
  "message-info-icon":
    "textColor": "{colors.info}"
  "message-warning":
    "rounded": "{rounded.1}"
    "backgroundColor": "{colors.warning-subtle}"
    "textColor": "{colors.on-warning-subtle}"
    "padding": "0.75rem"
    "typography": "{typography.message}"
  "message-warning-icon":
    "textColor": "{colors.warning}"
  "field-hint-warning":
    "textColor": "{colors.warning-text}"
  "status-warning-accent":
    "textColor": "{colors.warning}"
  "field-hint-danger":
    "textColor": "{colors.danger-text}"
  "status-danger-accent":
    "textColor": "{colors.danger}"
  "field-hint-success":
    "textColor": "{colors.success-text}"
  "status-success-accent":
    "textColor": "{colors.success}"
  "field-hint-info":
    "textColor": "{colors.info-text}"
  "status-info-accent":
    "textColor": "{colors.info}"
  "heading-highlight":
    "textColor": "{colors.white}"
    "backgroundColor": "{colors.accent}"
    "padding": "0.5rem 0.75rem 0.125rem"
  "paragraph-highlight":
    "textColor": "{colors.white}"
    "backgroundColor": "{colors.accent}"
    "padding": "0.25rem 0.75rem 0.125rem"
    "typography": "{typography.paragraph-highlight}"
  "price-box":
    "backgroundColor": "{colors.accent}"
    "textColor": "{colors.white}"
    "padding": "0.25rem 0.5rem"
    "typography": "{typography.price}"
  "product-tile":
    "rounded": "{rounded.2}"
    "backgroundColor": "{colors.white}"
    "textColor": "{colors.text}"
    "padding": "0.75rem 1rem"
  "product-tile-border":
    "size": "1px"
    "backgroundColor": "{colors.border}"
  "product-tile-hover-border":
    "size": "1px"
    "backgroundColor": "{colors.primary}"
  "selected-card":
    "backgroundColor": "{colors.secondary-subtle}"
  "selected-card-border":
    "size": "1px"
    "backgroundColor": "{colors.secondary}"
  "page":
    "backgroundColor": "{colors.white}"
    "textColor": "{colors.text}"
    "typography": "{typography.body-md}"
  "link":
    "textColor": "{colors.link}"
  "link-hover":
    "textColor": "{colors.link-hover}"
  "pill":
    "backgroundColor": "{colors.gray-50}"
    "textColor": "{colors.text}"
  "surface-box":
    "backgroundColor": "{colors.surface}"
    "textColor": "{colors.on-surface}"
    "rounded": "{rounded.2}"
  "surface-box-strong":
    "backgroundColor": "{colors.surface-raised}"
    "textColor": "{colors.on-surface}"
    "rounded": "{rounded.2}"
  "image-tile-scrim":
    "backgroundColor": "{colors.gray-900}"
  "split-image-quote-mark":
    "textColor": "{colors.surface-strong}"
  "modal-icon":
    "textColor": "{colors.yellow-400}"
  "message-outline":
    "textColor": "{colors.neutral-700}"
  "message-outline-border":
    "size": "1px"
    "backgroundColor": "{colors.border}"
  "shell-footer-divider-border":
    "size": "1px"
    "backgroundColor": "{colors.primary-dark}"
---
# Tuinmaximaal design system

The front matter above is generated from the Valantic `base` theme (Hyvä + Tailwind) by `tools/design-sync/sync.mjs` in the tm-ai workspace. Never edit it by hand, nor the regions between `design-sync` comments below. When the theme changes, re-run the sync: it also regenerates the prototype skeleton's component CSS, and it fails when a value quoted in this prose (a hex colour, a colour token, or a `text-`, `rounded-` or spacing class with a px value) no longer matches the theme. The colour tokens come from Figma `6767:34313`, kept in the sync's semantic table, each resolved to the theme colour it matches. Every other value comes from the theme code; if this document disagrees with it, the code wins.

Token keys are the Tailwind class suffixes: the colours are Figma's semantic tokens (`secondary` is `bg-secondary`, Colors), the rest mirror the theme's names: `spacing.4` is `p-4`, `rounded.1` is `rounded-1`, `typography.text-3.75` is `text-3.75`. Build with those classes and nothing else: no arbitrary values (`p-[13px]`, `text-[#123456]`).

## Overview

Tuinmaximaal sells garden and outdoor products across the Netherlands, Belgium, Germany, France and the UK. The core range is high-ticket structures: aluminium verandas, garden rooms, canopies and carports, next to non-configurable products such as bamboo decking.

**Audience.** Homeowners planning a considered, four-figure purchase, often over several sessions on both desktop and mobile. They arrive with intent: they are validating a decision, not browsing for inspiration. Many assemble the product themselves to save on installation. They need certainty about specifications, fit, delivery and whether the company stands behind the product.

**Decision moments.** The product page, the configurator, the cart and the checkout. At these moments the emotion to design for is *confidence*: answer the next doubt (specs, guarantee, delivery, and reviews where they are enabled) right where it would come up, before asking for the click.

**Visual reference: IKEA.** Clarity and modularity. Clear prices, guided choices, and a structure that makes a complex, modular product feel simple.

**Visual tone: Hornbach.** Bold, direct and project-driven. Heavy headings, confident about specs and dimensions, treating a big outdoor build as a manageable project. Practical, never precious.

**Source of principles: Apple's Human Interface Guidelines.** The visual principles below are translated from Apple's HIG. Apple is a source of principles only; IKEA and Hornbach stay the visual references, and the look stays theirs.

The result is large, mainstream, dependable retail: a light, warm canvas (white, beige and sand), deep green for structure and text, a lime-green primary action, and rare orange accents set at a −2° tilt. It is not a soft garden centre, not a luxury outdoor brand, and not a discount basement.

**Register.** There are two, with the same tokens and rules:

- **Product surfaces** (catalogue, product pages, cart): the design serves the shopping task.
- **Brand-forward pages** (homepage, category landings, campaigns): the design also carries the brand, with more of the expression options below.

### Design principles

1. **Reduce time-to-configure.** Every veranda and structure page shows a visible path to the configurator. Non-configurable products go straight to the cart. The purchase flow is configurator → cart → checkout. There is no quote-request flow: "offerte" is a payment method in the checkout, not a form or a CTA.
2. **Earn trust through specificity.** Show exact dimensions, materials, load ratings, warranty and delivery terms. Concrete information beats promises, and proof beats pressure.
3. **Modularity as a UI pattern.** The product is modular, so the interface is too: configuration steps, option sets and package tiers feel structured and logical, never overwhelming.
4. **Value clarity, not cheapness.** The price is visible, what's included is evident, and there are no hidden traps. Promotions stay on-brand, never loud sale-banner styling.
5. **Multi-country neutrality.** Every layout survives long German and French strings. Avoid idioms and layouts that depend on short text.

### Visual principles

The design principles decide what a view must do; these decide how it looks. Each ends in a flag line the audit checks.

1. **Clarity.** One message per view, readable at a glance: the heading states the point, and the rest of the view proves it. Flag: a view carrying several competing messages, or a heading that only makes sense after its body text.
2. **Deference.** The product photo and the specs lead; the chrome (borders, boxes, panels, decoration) steps back and leaves the space to them. Flag: chrome that draws the eye before the product or the content it holds.
3. **Depth.** Layers come from tone: white, beige and sand, one step apart, as Elevation & Depth sets out. Glass, blur and translucency never carry depth. Flag: depth from shadows, blur or translucency, a box nested in a box of the same surface, or nesting more than one level deep.
4. **Hierarchy.** One obvious first thing per view, then an obvious second. Flag: two or more elements of equal weight competing for the first look.

### Expression

The house style is fixed; expression comes from how the existing tokens are composed, always inside the container and the box rules (Layout, Elevation & Depth). Product surfaces use it sparingly, brand-forward pages generously. Restraint is part of the style: no eyebrow labels, no oversized buttons, no bulky decoration that makes a page look generated.

- **Large lifestyle photography.** A veranda in use, a finished garden, a project in progress: a large photo box inside the container, with `rounded-2`, and more image and less text than a spec sheet.
- **Editorial and asymmetric layouts.** Uneven splits (`col-span-2` beside `col-span-1`), text set beside a large photo instead of under it. The structure follows the content rather than a grid of equal cards.
- **A bolder −2° heading highlight.** A short phrase of the page's main heading on the orange chip, carrying the page's voice, still within the orange rules: one highlight per section, on large, heavy text.
- **Contrast in scale and density.** One large, calm moment against tighter blocks of proof, so the page has a focal point instead of evenly weighted sections.

The 28px cap stays: scale comes from black weight, the highlight and the ratio of image to text.

**Expression stays inside the house patterns.** It changes the composition, the photography and the highlight, never the interaction model or the content. A need filter, a card floating over a photo, a carousel of split images, a custom illustration or diagram, and a chart or big number ("365") the page doesn't already hold are not expression; the user rejected each of them on a redesign.

**The big moment.** Every page has exactly one, and everything around it stays calm:

- **Product surfaces:** the product photo plus the price box. The shopping task comes first, so there is no hero above them.
- **Brand-forward pages:** a large contained image with an orange heading highlight, a large project photo, or, on the homepage, the intro's image tiles (Components → Content patterns → Image tile). A category or landing page keeps its intro calm (Layout → Beige intro) and lets the product blocks or a large project photo below it carry the big moment.

**Logo-swap test.** Put another retailer's logo on the design. If it would still work unchanged, it isn't Tuinmaximaal yet: add a brand moment, such as a highlight, a project photo, a warm surface or specific proof.

### Redesigns

A redesign of an existing page keeps its content; the design reorganises it.

- **Keep the copy.** A "keep the copy" redesign reorders, splits and trims the page's own copy and uses the page's own images. It writes no new labels, captions, chart titles, stats or headings. When a structure needs a label the copy doesn't have (a filter, a tab set, a comparison row), leave the structure out or ask for the label.
- **No invented visuals.** No custom illustrations, drawn diagrams, bar charts or big "365"-style numbers. Data is shown only when it already sits on the page, and then as icons and ticks (a check-circle list, a ticked comparison row), never as a drawn chart.

## Colors

The palette is Figma's semantic layer (`6767:34313`), completed by a few Tailwind defaults. Each token is a Tailwind colour, and each is a CSS variable in the skeleton's `:root` block. Prototypes write only these names: `bg-surface`, `text-text-muted`, `border-border`, `ring-ring/50`. The theme's own classes resolve through the same variables. These are `.btn-primary`, the fields, the messages and the shell. Editing one variable therefore re-skins the whole prototype. The theme itself has no semantic layer yet (Known exceptions → Semantic colours). The `tmx-*` names in the Theme column are for reading theme code.

Figma's `primary` is the brand green and `secondary` is the lime action colour. The theme's `.btn-primary` is lime, so the primary button is `secondary`. Read a token as a colour role, not as a button name.

| Token | Value | Theme | Use |
|---|---|---|---|
| `primary` | #003017 | `tmx-primary-green` | The structural anchor: the shell bar, the secondary button, the product-tile hover border. |
| `primary-dark` | #001A13 | `tmx-primary-darkGreen` | The footer divider. |
| `on-primary` | #FFFFFF | white | Text and icons on `primary`. |
| `secondary` | #809700 | `tmx-primary-lighterGreen` | The action colour: the primary button, checked checkboxes and radios, selected cards, the current page, the USP check marks, the accordion hover. |
| `secondary-strong` | #6D8005 | `tmx-primary-lightGreen` | The action colour's shadow: the primary button's 4px bottom border and hover fill. |
| `secondary-subtle` | #F8FCE6 | `tmx-primary-lighterGreenSubtle` | The fill of a selected card and of the current page. |
| `on-secondary` | #FFFFFF | white | Text and glyphs on `secondary`. |
| `accent` | #FF8000 | `tmx-primary-orange` | An accent only: the price box, the heading and paragraph highlights, badges, the main menu's active item (Shell) and the pop-up close. In-page tabs mark the active tab with a beige pill, never orange (Components → Content patterns → Sticky product tabs). Orange never fills a button, never colours an action, and is never used as small text on white. |
| `on-accent` | #FFFFFF | white | Heavy text and the close icon on `accent` (Contrast). |
| `surface` | #FFF5ED | `tmx-secondary-beige` | The intro section of every page (the theme's `bg-container-beige`), surface boxes, the split image. |
| `surface-raised` | #F5E6D7 | `tmx-secondary-sand` | The stronger surface boxes and bands. White, `surface` and `surface-raised` are the only page surfaces (Elevation & Depth → Surfaces). |
| `surface-strong` | #E0D2C5 | `tmx-secondary-bone` | Used only for the split image's quote mark (Components → Content patterns → Split image). It is never a surface. |
| `on-surface` | #003017 | `tmx-primary-green` | Text on `surface` and `surface-raised`. |
| `text` | #003017 | `tmx-primary-green` (`text-body`) | Body text: never black or grey. |
| `text-muted` | #636363 | `tmx-neutral-grey` | Field labels, placeholders, the accordion answer, the pagination numbers. |
| `link` | #5C6B08 | none | Text links (`text-link underline hover:text-link-hover` in running text) and the image-text item's title. Contrast is 5.9:1 on white and 5.5:1 on beige. |
| `link-hover` | #4B570A | none | The link hover. |
| `ring` | #A1A1A1 | none (`ring-form-input` is #636363) | The focus ring, always at 50% (`ring-4 ring-ring/50`), as Figma's variable and its focus effect set it. The primary and secondary buttons ring in their own colour at 20% instead (Buttons). |
| `border` | #E3E3E3 | `tmx-neutral-lightGrey` | Resting borders on inputs, tiles, cards and filters, and the divider where two white surfaces meet. |
| `border-strong` | #636363 | `tmx-neutral-grey` | Hover and focus borders. |

- **Status (`warning`, `danger`, `success`, `info`).** These are Tailwind's amber, red, green and sky. `danger` is the theme's `error`: the classes stay `.message.error` and `.field-error`. Each status has four shades:
  - `-subtle` (50) for backgrounds;
  - the default (600) for icons and accents;
  - `-text` (700) for hint text under a field;
  - `on-…-subtle` (900) for message text.
- **Tailwind defaults.** The semantic layer has no token for these few uses:
  - `white`;
  - `gray-50` #F9FAFB: the blog tile's category pill, the modal footer and the notice message;
  - `gray-900` #111827: the image-tile scrim at 60%, the dialog backdrop and the video play wash. It is the nearest default to the theme's #11171F;
  - `yellow-400` #FACC15: the modal's warning icon, Figma's own value;
  - `neutral-700` #404040: the outline message's text. Figma has no neutral status.

  Any other Tailwind colour is off-palette unless this document names it (the RAL swatches, Known exceptions).

Colour proportions: warm and white surfaces carry about 60%, `primary` structure and text about 30%, and `secondary` and `accent` stay at about 10%. Accents work because they are rare. Keep green purposeful (header, footer, text, focused UI) rather than atmospheric: a green-dominant page reads as "plants", not "structures". On `primary`, text is `on-primary`; on `surface` and `surface-raised`, it is `on-surface`.

### Contrast

Meet WCAG 2.2 AA: 4.5:1 for body text, 3:1 for text of at least 24px, or at least 18.66px bold, and 3:1 for UI graphics. Safe pairs: green on white, beige or sand (above 12:1), and white on green. White text on a photo (the image tile) always sits on a dark scrim, so it reaches AA whatever the photo shows (Components → Content patterns → Image tile).

The linter's contrast warnings come from the live theme and are known:

| Component | Pair | Ratio | Rule for prototypes |
|---|---|---|---|
| `button-primary` | white on #809700 | 3.31:1 | Brand standard; keep it, at the default size anyway (Buttons → Sizes). Flag it in audits as a theme-level finding, not a prototype error. |
| `button-primary-hover` | white on #6D8005 | 4.43:1 | As above. |
| `form-choice-checked` | white glyph on #809700 | 3.31:1 | A non-text graphic; passes 3:1. |
| `heading-highlight`, `paragraph-highlight`, `price-box` | white on #FF8000 | 2.52:1 | Signature brand detail. Use it only on heavy text: headings, the paragraph highlight and the price box at its size per component (Components → Price box). The product tile's 16px weight-900 price is the theme's own choice, a documented exception like the primary button. Never put small or regular-weight text on orange. |

## Typography

There is one family: **ArticulatCF** (`font-body`), self-hosted and licensed. Prototypes use the stack `ArticulatCF, system-ui, sans-serif` and never bundle the font files. Hierarchy comes from weight and size, never from a second typeface. The available weights are 400, 500, 600 (`font-semibold`), 700 (`font-bold`) and 900 (`font-black`).

<!-- design-sync:headings -->
| Level | Class | Size / line-height | Weight |
|---|---|---|---|
| h1 | `.heading-1` → `text-7` | 28px / 1.25 | 900 |
| h2 | `.heading-2` → `text-6` | 24px / 1.25 | 900 |
| h3 | `.heading-3` → `text-5.5` | 22px / 1.5 | 700 |
| h4 | `.heading-4` → `text-5` | 20px / 1.5 | 700 |
| h5 | `.heading-5` → `text-4.5` | 18px / 1.5 | 700 |
| h6 | `.heading-6` → `text-4` | 16px / 1.5 | 600 |
<!-- /design-sync:headings -->

The black weight is used on h1 and h2 only. `.heading-small` steps h1 down to `text-6` and h2 down to `text-5`; it has no effect on h3–h6. `.heading-highlight` works on every heading level. Element tags carry these styles, so use real `h1`–`h6` elements.

- **Body:** `text-base` (16px / 1.5), weight 400, green. Cap reading columns at about 65–75ch.
- **Small text:** `.paragraph-sm` 12px, `.paragraph-esm` 10px, `.paragraph-tiny` 10px bold uppercase, only inside badges and pills.
- **No eyebrows.** Never put an eyebrow or kicker label (a small line, often uppercase or letter-spaced) above a heading, on any page type. The heading carries the point on its own; a highlight inside it adds the emphasis.
- **Highlights:** `.heading-highlight` puts white text on an orange chip (`px-3 pt-2 pb-0.5`), rotated −2°. `.paragraph-highlight` is the same chip at weight 900 (`w-fit px-3 pt-1 pb-0.5`). Every highlight tilts, on every heading level; a flat highlight is wrong (Shapes).
- **UI text:** buttons 16px semibold, field labels 14px medium-weight grey, inputs 16px regular with a 22px line-height, messages 14px, product-tile names 15px semibold (16px from `lg`), clamped to 3 lines.
- **Font sizes** are a fixed list, not a formula: <!-- design-sync:font-sizes -->`text-2.5` 10px, `text-3` 12px, `text-3.5` 14px, `text-3.75` 15px, `text-4` 16px, `text-4.5` 18px, `text-4.75` 19px (line-height 1), `text-5` 20px, `text-5.5` 22px, `text-6` 24px, `text-7` 28px<!-- /design-sync:font-sizes -->. There is nothing larger. Big hero statements get their weight from black type and the orange highlight, not from sizes beyond 28px.
- **Line heights:** the size classes carry their own line-height (1.5; 1.25 for `text-6` and `text-7`; 1 for `text-4.75`). The custom `leading-5.5` (22px) and `leading-7.5` (30px) join Tailwind's defaults.
- **Lists:** see Components → Lists; list items wrap their text in `.list-text`.
- **Gumax<sup>®</sup>:** in markup the registered sign is always superscript: write `Gumax<sup>®</sup>`, never a bare `Gumax®`, in headings, body, buttons and tables alike. Copy delivered as plain text by the copy or translator skill keeps `Gumax®`; convert it when you put it in the page. An `alt`, `title` or `aria-label` can't hold markup, so it keeps `Gumax®`.

## Layout

- **Container:** centred, `1rem` side padding, maximum 1314px from `xl`. All content and all images, lifestyle photos included, sit inside it. Only page chrome (header bars, breadcrumbs, USP bar), the beige intro and tinted tile bands (Elevation & Depth) may run full width, and only as colour bands whose content is contained. Images and boxes never bleed past the container.
- **Breakpoints (min-width):** `500px`, `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536. Build mobile-first and check every prototype at 375px, `md` and `xl`. Adapt on small screens; never remove critical functionality such as the configurator CTA, the price or the add-to-cart button.
- **Spacing:** a generated 4px scale, defined in the theme's `tailwind.config.js` (and its spacing generator). Token `N` equals N × 4px (`p-4` = 16px) and every step has a `.5` half-step that adds 2px (`gap-1.5` = 6px, `py-2.5` = 10px). It runs from 0 to 500px, plus `1/4`, `1/2`, `3/4`, `full` and `full-x2` percentages. The front matter lists only the rhythm steps below; every other step follows the rule.
- **Rhythm:** use 4–6px (`gap-1`, `gap-1.5`) for tight pairs such as a label and its input, 8–24px (`gap-2` to `gap-6`) inside components and 32–48px (`gap-8` to `gap-12`) between sections. Use more space above a heading than below it. Prefer `gap` on flex and grid parents over margins on children. Vary section spacing; uniform padding everywhere reads as a template.
- **Product media:** 16:9 (`aspect-video`), for product media only: the gallery, packshots and tile images. The blog tile's photo is the one editorial image at 16:9 (Components → Content patterns). Category tiles use 450 × 253, the product page 1536 × 864.
- **Editorial imagery:** lifestyle and project photos take any ratio the config has (`aspect-square`, or a spacing-scale height with `object-cover`), as a contained box with `rounded-2`.
- **Page grid:** `.columns` is a single-column grid with `gap-x-8 gap-y-4` inside the container.
- **Vertical flow.** Content stacks vertically, mobile-first: sections, product blocks and cards follow each other down the page, and no content sits in a carousel. The theme's own sliders, such as the related-products slider, stay.
- **Nothing over a photo.** No card, box or panel floats over or overlaps a photo; text sits beside or below its image. The image tile's heading, chip and button on the scrim are the one exception (Components → Content patterns → Image tile).
- **Beige intro.** Every page type opens with a beige first section: a full-width band with contained content.
  - **Homepage:** the image tiles (Components → Content patterns → Image tile).
  - **Content, brand and service pages:** the H1, the intro text and an optional CTA.
  - **Category page and category landing:** the H1 and intro beside a modest photo, side by side from `lg` (`lg:grid-cols-2`), the photo at a spacing-scale height (`h-56 md:h-72 object-cover rounded-2`). Large image tiles here read as bulky and "in your face"; they belong to the homepage. The page's image-text items (Components → Content patterns → Image-text item) sit in this band, under the H1 and intro, as white cards; with them, the H1 and intro run full width and the items' photos take the place of the modest photo.
  - **Product page:** the gallery and buy-box row, with the buy box white on beige.

  After the intro the background is free and white by default. On staging the category grid area and the product content section are white.

## Elevation & Depth

Depth comes from space and tone. Separate content in this order:

1. **Whitespace** groups related content. Reach for it first inside a section; between sections it doesn't replace the change of surface (Surfaces, below).
2. **A change of surface** separates groups, on the surface ladder below.
3. **A 1px border** only where it does work: on the theme components that own one (inputs, checkboxes, radios, the secondary button, the selected card, the outline message), on a repeated card on white (The box decision, below), on an outlined filter box, or a light-grey (#E3E3E3) one where two white surfaces meet and space can't separate them.

A white container on a white page stands on its whitespace alone, without a border, unless it is a repeated card or an outlined filter box. Text on a white page is never boxed just to separate it.

**Surfaces.** White, beige and sand are the only surfaces. Use them generously to separate content:

- **On white:** beige first, then sand for a stronger step.
- **On beige:** white.
- **On sand:** white or green.
- **Green:** at most one emphasis block per page, with white text.

**Change surface every one or two sections.** A beige or sand band, a surface box or a beige split image breaks the white at least every second section, so a page has no long bare-white stretch. "Whitespace first" is the rule inside a section, not a reason to run the whole page on white.

The reference is the homepage: a beige intro band holding the image tiles, a contained beige banner box on white, and a full-width sand band holding a contained group with one green column.

**The box decision.** Every block on a page gets one of three treatments, as the house Figma components have them. Decide it per block:

1. **A card that repeats** (a product tile, blog tile, review, image-text item or FAQ row) is a card: white, `rounded-2`. On white it has a 1px light-grey outline (`bg-white border border-border rounded-2`); an FAQ row is the accordion, with its own `rounded-1` (Content patterns → Accordion and FAQ). On a beige or sand band it has no border: the change of surface does the separating.
2. **One block that needs emphasis** (a quote, a text + image split image on beige, a promo) is a surface box (`surface-box`): beige, `rounded-2`, no border. Sand is the stronger step (`surface-box-strong`); the one green block is the strongest.
3. **Everything else has no box:** running text in one to four columns, text + image (the plain split image, Content patterns), video + text, a gallery, the SEO text. It sits inside the container, separated by whitespace, with its images `rounded-2`.

A card or surface box takes `p-4` to `p-6` (more on a split image), with `gap-3` to `gap-4` between cards. There is never one wrapper around everything, and a box or card holds its content directly, never another card of the same surface.

- **Filter groups** keep a box each, as on staging: outlined, or borderless beige, one style for all of them on a page.
- **No borders on coloured boxes.** A beige, sand or green box is separated by its tone.
- **One level of nesting,** and only when the inner box is a different surface: white tiles in a beige box, as on staging's product page. The same surface inside the same surface, or a third level, is wrong.

**Tinted tile bands.** A section of repeated cards may sit on a full-width beige or sand band, with its content in the container, to set it apart from the white around it (Figma "Tile's on colored background"). The cards on it are white without a border. A band is a colour only: its images and cards stay contained.

**Category grid.** The intro is a beige band. The grid area is white, with one box per filter group: outlined, or borderless beige. A sand trust or USP block sits between product rows. Below the grid, the FAQ is a list of outlined rows and the SEO text sits unboxed, clamped with the theme's "Lees meer" fade (`bg-gradient-showMore` over the last lines, then a flush transparent "Lees meer" button, `btn btn-transparent --flush`). Product tiles on the white grid keep their white info area and outline; on a tinted band they lose the outline.

- `shadow-1px` (inset 0 0 0 1px green) is a crisp selected or hover outline without layout shift. The product tile uses it together with the green hover border.
- `shadow-arrow` (0 4px 12px rgb(0 0 0 / 0.16)) is for the carousel arrows only (Components → Content patterns → Carousel arrows). The other floating elements take Tailwind's shadows, as in Figma: the dropdown list `shadow-lg` (Components → Forms → Dropdown), dialogs `shadow-xl` (Components → Dialogs).
- There are no decorative drop shadows on cards, no heavy or dark shadows, no glassmorphism, and the theme is always light.

## Shapes

Corners are small and consistent: `rounded-1` (4px) for buttons, inputs, checkboxes and messages, `rounded-2` (8px) for product tiles, cards, boxes and dialogs, and `rounded-full` for radios and pills, with `rounded-1.5` (6px) as the one step between 4px and 8px.

**The −2° rotation** is the signature brand detail. Every heading highlight, the paragraph highlight and the price box are rotated −2° (`-rotate-2`), and so are the promo labels: the highlight labels in the main banner, the promo banner and the content slider. Reproduce it exactly. Don't rotate anything else, and don't change the angle. A transform doesn't affect an inline element, so a highlight on a phrase inside a heading must be `inline-block` to tilt; the prototype skeleton sets this. Staging's homepage highlight ("genieten") is flat for that reason: a theme bug outside this skill. A struck-through old price is never rotated and has no chip.

## Components

**Figma first.** The "Tuinmaximaal for Claude" Figma file is the most up-to-date design. Where a component there differs from the theme, build the Figma version through the skeleton's prototype classes, and record the gap under Known exceptions for the FED lead. The theme still supplies the tokens: a Figma value without a token takes the nearest one, noted with the component. A component that exists only in the theme follows the theme.

Components with a `-border` or `-ring` suffix describe the stroke of the component they belong to, because the format has no border property. Their `backgroundColor` is the stroke colour, `size` is the stroke width, and `height` is used for a bottom-only border.

### Buttons

Figma `1286:12548` (the base) and `1286:12715` (the set). The theme's `.btn` is the base: `flex items-center justify-center`, `rounded-1`, `transition-all`. The skeleton adds Figma's sizes, icon layouts, states and the two new styles on top of it. Disabled buttons are at 50% (`opacity-50`, `cursor-not-allowed`).

**Styles:**

- **Primary** (`.btn-primary`): a `secondary` fill with `on-secondary` text and a **4px bottom border in `secondary-strong`**. The border sits inside the height, so the label stays centred on the whole button. Hover and active fill `secondary-strong`; focus keeps the fill and adds a 2px `secondary-strong` ring 2px outside the button (`ring-2 ring-secondary-strong ring-offset-2`, 4.4:1 on white). This is the only action colour: one primary action per view.
- **Secondary** (`.btn-secondary`): transparent, with `primary` text and a 1px `primary` border. Hover, focus and active fill `primary` with `on-primary` text; focus adds a 4px `primary` ring at 20%. Use it for the second action beside a primary.
- **Tertiary** (`.btn-tertiary`): transparent, with `text-muted` text and a 1px `border`. Hover and active turn the fill white, which shows on `surface` and `surface-raised`; focus adds a `border-strong` border and the 4px `ring` at 50%. Use it for a neutral third action or a tool, such as "Filters wissen" or "Vergelijken". It is the theme's `.btn-tertiary` redrawn (Known exceptions → Buttons).
- **Transparent** (`.btn-transparent`): no fill and no border, with `link` text that turns `link-hover`. Focus draws a 2px `link` ring (5.9:1 on white); active draws Figma's 3px `ring` at 50%. Use it for a quiet action that reads as a link but needs a button's size, such as "Lees meer" or "Toon alle reviews". `--flush` removes its side padding, so its label lines up with the text column it starts: a "Lees meer" toggle under a paragraph is `btn btn-transparent --flush --icon-leading`. The flush variant is a house addition.

**Sizes:** set a height, so a bordered button is exactly as tall as the primary. XL is the default and has no class.

| Size | Class | Height | Padding | Label | Icon | Icon only |
|---|---|---|---|---|---|---|
| S | `--s` | 36px (`h-9`) | `px-4` | 14px semibold | 20px | 20px |
| M | `--m` | 40px (`h-10`) | `px-5` | 14px semibold | 20px | 20px |
| L | `--l` | 44px (`h-11`) | `px-5` | 16px bold | 20px | 24px |
| XL | none | 48px (`h-12`) | `px-6` | 16px bold | 20px | 24px |
| 2XL | `--2xl` | 60px (`h-15`) | `px-8` | 18px semibold | 24px | 32px |

- **Which size:** XL everywhere by default: page actions, product blocks, dialogs and the product page's main CTA (`btn-primary w-full`).
  - L goes in a card or tile where 48px would dominate.
  - S and M go in dense UI: a filter bar, a table row, a toolbar. Never use them for a view's primary action, and give them a 44px hit area on touch screens.
  - 2XL is for a single hero or campaign CTA, and only when the brief asks.
  - Buttons side by side share one size.
- **The theme's size classes** (`btn-size-sm`, `btn-size-default`, `btn-size-lg`) predate Figma's sizes: never use them in a prototype.

**Icons:** an inline 20px SVG in `currentColor` (sizes above), `gap-1.5` from the label.

- `--icon-leading` puts the icon before the label and `--icon-trailing` after it. Either takes 2px off the icon side's padding, for optical balance.
- `--icon-only` makes a square button, with an `aria-label` naming the action. `--icon-only --round` makes it round (`rounded-full`).
- Use icons sparingly: a trailing chevron for "next" or a leading plus for "Lees meer", not an icon on every button.

**Layout:** add `w-full` for a full-width button. Buttons side by side, or wrapped onto a second line, are `gap-2` (8px) apart: `flex flex-wrap gap-2`. (The theme CSS also defines a misspelled `btm-size-full`; use `w-full` instead.)

**States:** `--hovered`, `--focused`, `--active` and `--disabled` force a state without interaction. The styleguide uses them, and they show states side by side in a prototype. Focus rings appear on keyboard focus (`:focus-visible`); a mouse click shows no ring.

### Forms

`form` and `fieldset` are `flex flex-col gap-4`. A `.field` is `flex flex-col gap-1.5`. A `fieldset` doesn't shrink below its content by default, so a row of option cards in one pushes the page wider at 375px; the prototype skeleton gives it `min-w-0`.

- **Source:** Figma `1329:15249` and `1331:14308` (input fields), `1333:20089` and `1333:20196` (textareas), and `1343:22101`, `1343:42177`, `1343:42718` and `1343:44817` (the dropdown), file "Tuinmaximaal for Claude". The theme's `.field`, `.form-input`, `.form-select` and `.form-textarea` are the base. The skeleton adds Figma's look, the warning feedback, the hint, the icons, the input groups and the dropdown on top of them (Known exceptions → Forms).
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
- **Checkboxes, radios, option cards and product cards:** Components → Choices.

### Choices

Figma `1412:30587` (the base), `1420:30806` (checkbox), `1420:31898` (radio button), `1420:32473` (check circle), `1426:30850` (radio button in a container) and `6969:1655` (product card), file "Tuinmaximaal for Claude". The theme's `.field.choice` is the base for a row; the skeleton adds Figma's sizes, the check circle, the hint and the cards (Known exceptions → Forms).

**Which control:**
- **Checkbox:** an independent yes or no, or several picks from a list: filters, add-ons, the terms.
- **Radio button:** exactly one of a few options, all visible. Beyond five options, use a select (Components → Forms).
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
- **Colour:** a colour swatch leads with `span.swatch-colour`, a 20px chip in the product colour (the RAL swatches' Tailwind defaults, Known exceptions → RAL swatches), before the colour's name. Figma only draws text swatches yet; the chip is a house addition. Always keep the name: the chip alone doesn't name the colour.

**Quantity** (Figma `816:24939`, three styles):
- **Plus and minus** (`.quantity`), the default on a product page, in the cart and in a product card: 176px (`w-44`; `--full` fills its column), 44px high, white, a 1px `border`, `rounded-1`: a minus button, the number (14px semibold `text`) and a plus button, 44px each, with 1px dividers. The skeleton's script steps a number input between its `min` (0 by default) and `max`, and fires `change`. In a `.field` it takes the field's label above it.

  ```html
  <div class="quantity"><button type="button" aria-label="Minder"><svg>…</svg></button><input type="number" min="1" max="10" value="1" aria-label="Aantal"><button type="button" aria-label="Meer"><svg>…</svg></button></div>
  ```
- **Dropdown** (`select.form-select.quantity-select`, 80px): a small fixed range (1 to 10) in a dense row, such as a cart line on a phone.
- **Input with an update button** (`.quantity-update`): an 80px number field and a 44px primary check button (`btn btn-primary --l --icon-only`, `aria-label="Aantal bijwerken"`), `gap-1`, for a large number typed at once, such as square metres of decking, when each change is confirmed.
- One page uses one style. The theme's unlayered `.field` and `.form-select` are full-width, so a width utility on them has no effect: use `quantity-select` and `--full`.

### Action menu

Figma `1286:17433`, file "Tuinmaximaal for Claude". A short menu of actions on one item, opened from a small tertiary icon button: a cart line's "Wijzigen", "Naar verlanglijst", "Verwijderen". The skeleton's script makes it work (`data-menu`).

```html
<div class="action-menu-wrap" data-menu>
    <button type="button" class="btn btn-tertiary --s --icon-only" aria-label="Acties voor Schuttingpaal Gumax®" aria-haspopup="menu" aria-expanded="false" aria-controls="acties-1"><svg>…</svg></button>
    <div class="action-menu" id="acties-1" role="menu" hidden>
        <p class="action-menu-title">Schuttingpaal Gumax®</p><!-- optional -->
        <button type="button" role="menuitem"><svg>…</svg>Wijzigen</button>
        <hr>
        <button type="button" role="menuitem" class="--danger"><svg>…</svg>Verwijderen</button>
    </div>
</div>
```
- **Menu:** 240px (`w-60`), white, `rounded-2`, `p-1`, `shadow-lg`, `gap-1` under its button; `--end` aligns it to the button's right edge (use it at the right of a row). The optional title is 14px semibold `text-muted`.
- **Items:** 32px (`px-2 py-1.5`), `rounded-1`, a 20px solid icon and a 14px medium label in `text`, `gap-1.5`; hover and keyboard focus fill `neutral-50`, and focus adds a 2px `ring` inside. A destructive item (`--danger`) is `danger` and comes last, after an `hr` divider in `border`.
- **Keyboard:** a click opens it; Enter, Space or ArrowDown opens it on the first item; the arrows (wrapping), Home and End move; Esc returns to the button; Tab or a click outside closes it.
- Keep it to five items or fewer, each a verb. A single action is a button, not a menu; a choice of values is a select or a dropdown (Components → Forms).

### Reviews

Figma `1382:28568` (the star icon), `1382:28586` (star), `1384:28794` (stars), `1385:28923` (reviews summary) and `1395:29980` (mini reviews summary), file "Tuinmaximaal for Claude".

**Reviews aren't enabled on the live site.** Show stars, scores or review counts only when the brief asks for reviews or says they are enabled, and never invent a rating: a prototype that shows one promises content the shop doesn't have. Without reviews, proof comes from the USP list, specs, the guarantee and delivery terms.

- **Stars** (`span.stars`): five 20px stars, overlapping by 2px (92 × 20), filled from the left by `--rating` (0 to 5, any fraction), with `role="img"` and an `aria-label` ("4,5 van 5 sterren"):
  - default: `amber-400` on `gray-200` stars, the style customers recognise;
  - `--mono`: `text` stars on `text` outlines, for a quiet place such as a product tile on beige;
  - `--accent`: `accent` stars on `accent` outlines. Keep it away from the price box and promo labels, which own the orange.

  ```html
  <span class="stars" style="--rating: 4.5" role="img" aria-label="4,5 van 5 sterren"></span>
  ```
- **Reviews summary** (`.reviews-summary`, `gap-3`): up to three parts, each optional: the title ("Reviews", 14px medium) with its count, the stars, then the score (14px semibold) and the total ("(12 reviews)", `text-muted`).

  ```html
  <div class="reviews-summary">
      <span><span class="reviews-title">Reviews</span><span class="reviews-count">12</span></span>
      <span class="stars" style="--rating: 4.5" role="img" aria-label="4,5 van 5 sterren"></span>
      <span><span class="reviews-score">4.5</span><span class="reviews-total">(12 reviews)</span></span>
  </div>
  ```
  The count is a 12px pill in `primary`; Figma draws it white on orange, which is 2.52:1 at 12px (a house deviation, Known exceptions → Reviews). Link the summary to the reviews when the page has them.
- **Mini summary** (`.reviews-summary.--mini`): one full star (`span.stars`, `aria-hidden`), the score and the total in brackets ("(12)"), `gap-0.5`, for a product tile or a search result.

### Messages

Figma `6814:5244` (file "Tuinmaximaal for Claude"). The theme's `.message` with the skeleton's Figma overrides: `flex items-start gap-3 p-4 rounded-1`, 14px text at 90%, no margin (the layout's gap spaces a stack), and a leading 20px icon in the status colour. Bold words inside take `font-semibold`; links are underlined. The types are notice (neutral, no icon), info, success, warning and error:

```html
<div class="message warning"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M11.0826 2.62334L18.2776 15.085C18.3874 15.275 18.4451 15.4906 18.4451 15.71C18.4451 15.9294 18.3874 16.145 18.2777 16.335C18.1679 16.525 18.0102 16.6828 17.8201 16.7925C17.6301 16.9022 17.4146 16.96 17.1951 16.96H2.80514C2.58573 16.96 2.37017 16.9022 2.18016 16.7925C1.99014 16.6828 1.83234 16.525 1.72264 16.335C1.61293 16.145 1.55517 15.9294 1.55518 15.71C1.55518 15.4906 1.61293 15.275 1.72264 15.085L8.91764 2.62334C9.39848 1.79001 10.601 1.79001 11.0826 2.62334ZM10.0001 4.08168L3.52681 15.2933H16.4735L10.0001 4.08168ZM10.0001 12.5C10.2212 12.5 10.4331 12.5878 10.5894 12.7441C10.7457 12.9004 10.8335 13.1123 10.8335 13.3333C10.8335 13.5544 10.7457 13.7663 10.5894 13.9226C10.4331 14.0789 10.2212 14.1667 10.0001 14.1667C9.77913 14.1667 9.56717 14.0789 9.41089 13.9226C9.25461 13.7663 9.16681 13.5544 9.16681 13.3333C9.16681 13.1123 9.25461 12.9004 9.41089 12.7441C9.56717 12.5878 9.77913 12.5 10.0001 12.5ZM10.0001 6.66668C10.2212 6.66668 10.4331 6.75447 10.5894 6.91075C10.7457 7.06703 10.8335 7.27899 10.8335 7.50001V10.8333C10.8335 11.0544 10.7457 11.2663 10.5894 11.4226C10.4331 11.5789 10.2212 11.6667 10.0001 11.6667C9.77913 11.6667 9.56717 11.5789 9.41089 11.4226C9.25461 11.2663 9.16681 11.0544 9.16681 10.8333V7.50001C9.16681 7.27899 9.25461 7.06703 9.41089 6.91075C9.56717 6.75447 9.77913 6.66668 10.0001 6.66668Z"/></svg><span>De berekende doorloophoogte is <strong class="font-semibold">1701 mm</strong>. …</span></div>
<div class="message error"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.66667C14.6025 1.66667 18.3333 5.3975 18.3333 10C18.3333 14.6025 14.6025 18.3333 10 18.3333C5.3975 18.3333 1.66667 14.6025 1.66667 10C1.66667 5.3975 5.3975 1.66667 10 1.66667ZM10 3.33333C8.23189 3.33333 6.5362 4.03571 5.28595 5.28595C4.03571 6.5362 3.33333 8.23189 3.33333 10C3.33333 11.7681 4.03571 13.4638 5.28595 14.714C6.5362 15.9643 8.23189 16.6667 10 16.6667C11.7681 16.6667 13.4638 15.9643 14.714 14.714C15.9643 13.4638 16.6667 11.7681 16.6667 10C16.6667 8.23189 15.9643 6.5362 14.714 5.28595C13.4638 4.03571 11.7681 3.33333 10 3.33333ZM10 12.5C10.221 12.5 10.433 12.5878 10.5893 12.7441C10.7455 12.9004 10.8333 13.1123 10.8333 13.3333C10.8333 13.5543 10.7455 13.7663 10.5893 13.9226C10.433 14.0789 10.221 14.1667 10 14.1667C9.77899 14.1667 9.56702 14.0789 9.41074 13.9226C9.25446 13.7663 9.16667 13.5543 9.16667 13.3333C9.16667 13.1123 9.25446 12.9004 9.41074 12.7441C9.56702 12.5878 9.77899 12.5 10 12.5ZM10 5C10.221 5 10.433 5.0878 10.5893 5.24408C10.7455 5.40036 10.8333 5.61232 10.8333 5.83333V10.8333C10.8333 11.0543 10.7455 11.2663 10.5893 11.4226C10.433 11.5789 10.221 11.6667 10 11.6667C9.77899 11.6667 9.56702 11.5789 9.41074 11.4226C9.25446 11.2663 9.16667 11.0543 9.16667 10.8333V5.83333C9.16667 5.61232 9.25446 5.40036 9.41074 5.24408C9.56702 5.0878 9.77899 5 10 5Z"/></svg><span>…</span></div>
<div class="message success"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.66667C14.6025 1.66667 18.3333 5.3975 18.3333 10C18.3333 14.6025 14.6025 18.3333 10 18.3333C5.3975 18.3333 1.66667 14.6025 1.66667 10C1.66667 5.3975 5.3975 1.66667 10 1.66667ZM10 3.33333C8.23189 3.33333 6.5362 4.03571 5.28595 5.28595C4.03571 6.5362 3.33333 8.23189 3.33333 10C3.33333 11.7681 4.03571 13.4638 5.28595 14.714C6.5362 15.9643 8.23189 16.6667 10 16.6667C11.7681 16.6667 13.4638 15.9643 14.714 14.714C15.9643 13.4638 16.6667 11.7681 16.6667 10C16.6667 8.23189 15.9643 6.5362 14.714 5.28595C13.4638 4.03571 11.7681 3.33333 10 3.33333ZM12.9458 6.98417C13.0955 6.83312 13.2971 6.74497 13.5096 6.73776C13.7221 6.73055 13.9293 6.80483 14.0888 6.94539C14.2483 7.08595 14.3481 7.28215 14.3677 7.49385C14.3873 7.70555 14.3252 7.91673 14.1942 8.08417L14.125 8.1625L9.47 12.8183C9.31112 12.9772 9.09943 13.0722 8.87514 13.0852C8.65085 13.0983 8.42957 13.0285 8.25333 12.8892L8.17333 12.8183L5.875 10.52C5.72395 10.3704 5.63581 10.1687 5.6286 9.95621C5.62139 9.74373 5.69566 9.53653 5.83622 9.37702C5.97678 9.2175 6.17299 9.11775 6.38469 9.09816C6.59639 9.07858 6.80757 9.14065 6.975 9.27167L7.05333 9.34167L8.82167 11.1092L12.9467 6.98417H12.9458Z"/></svg><span>…</span></div>
<div class="message info"><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.66667C14.6025 1.66667 18.3333 5.3975 18.3333 10C18.3333 14.6025 14.6025 18.3333 10 18.3333C5.3975 18.3333 1.66667 14.6025 1.66667 10C1.66667 5.3975 5.3975 1.66667 10 1.66667ZM10 3.33333C8.23189 3.33333 6.5362 4.03571 5.28595 5.28595C4.03571 6.5362 3.33333 8.23189 3.33333 10C3.33333 11.7681 4.03571 13.4638 5.28595 14.714C6.5362 15.9643 8.23189 16.6667 10 16.6667C11.7681 16.6667 13.4638 15.9643 14.714 14.714C15.9643 13.4638 16.6667 11.7681 16.6667 10C16.6667 8.23189 15.9643 6.5362 14.714 5.28595C13.4638 4.03571 11.7681 3.33333 10 3.33333ZM9.99167 8.33333C10.4567 8.33333 10.8333 8.71 10.8333 9.175V13.445C10.9922 13.5367 11.1163 13.6783 11.1865 13.8478C11.2567 14.0173 11.269 14.2052 11.2216 14.3824C11.1741 14.5595 11.0695 14.7161 10.9239 14.8278C10.7784 14.9395 10.6001 15 10.4167 15H10.0083C9.8978 15 9.78836 14.9782 9.68624 14.9359C9.58413 14.8936 9.49134 14.8316 9.41318 14.7535C9.33503 14.6753 9.27303 14.5825 9.23073 14.4804C9.18844 14.3783 9.16667 14.2689 9.16667 14.1583V10C8.94565 10 8.73369 9.9122 8.57741 9.75592C8.42113 9.59964 8.33333 9.38768 8.33333 9.16667C8.33333 8.94565 8.42113 8.73369 8.57741 8.57741C8.73369 8.42113 8.94565 8.33333 9.16667 8.33333H9.99167ZM10 5.83333C10.221 5.83333 10.433 5.92113 10.5893 6.07741C10.7455 6.23369 10.8333 6.44565 10.8333 6.66667C10.8333 6.88768 10.7455 7.09964 10.5893 7.25592C10.433 7.4122 10.221 7.5 10 7.5C9.77899 7.5 9.56702 7.4122 9.41074 7.25592C9.25446 7.09964 9.16667 6.88768 9.16667 6.66667C9.16667 6.44565 9.25446 6.23369 9.41074 6.07741C9.56702 5.92113 9.77899 5.83333 10 5.83333Z"/></svg><span>…</span></div>
<div class="message notice"><span>…</span></div>
```

- **Fill** (the default): a tinted `-subtle` background with `on-…-subtle` text and no border. The notice fill is the lightest grey (`gray-50`, as Figma has it); Figma has no neutral status, so the notice text keeps the theme's `neutral-900`.
- **Outline** (`--outline`, as in `message info --outline`): no fill, a 1px light-grey border and neutral text (`neutral-700`); the icon keeps its status colour. Use it for a calm inline note inside a busy step, such as a configurator hint beside the fields it explains. A message that needs attention, and any message outside a form, is a fill.
- **No side stripe** on either (Do's and Don'ts).
- **Role:** a message that appears after an action (a form error, a stock warning) takes `role="alert"`, or `role="status"` when it isn't urgent; a message present on load takes neither.
- **Icons:** Figma's own (Mingcute `alert_line` for warning, `warning_line` for error, `check_circle_line`, `information_line`), drawn in `currentColor`.

### Dialogs

Figma `1495:12618` (modal) and `1495:13634` (pop-up), file "Tuinmaximaal for Claude". Both are a native `dialog` opened with `showModal()`, so the browser traps focus, closes on Esc and returns focus to the opener. The title takes `tabindex="-1" autofocus`, so focus lands on it (screen readers announce it) and not on the first button, which the theme paints in its hover fill, or on the field, which would open a phone keyboard. In a prototype, a button with `data-dialog-open="id"` opens one (the skeleton's script); a button inside a `form method="dialog"` closes it. Both are white, `rounded-2` (8px, not Figma's 12px), with `shadow-xl` over a 60% black backdrop, and hold green text (Figma's slate text is from a UI kit; the brand text is green).

**Modal: a decision that blocks the next step.** Removing a configured item from the cart, or continuing with a size outside the standard ("De berekende doorloophoogte is 1701 mm. Dit valt buiten de standaardmaten."). Information that doesn't need an answer is a message in the page (Messages), never a modal. A modal opens only from the customer's own action.

```html
<dialog class="modal" id="size-check" aria-labelledby="size-check-title">
    <form method="dialog">
        <div class="modal-body">
            <svg class="modal-icon" viewBox="0 0 68 68" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M28.0736 10.536C30.6732 5.91437 37.3273 5.91437 39.927 10.536L58.9 44.2658C61.4498 48.7987 58.1741 54.3996 52.9733 54.3996H15.0273C9.82644 54.3996 6.55078 48.7987 9.10054 44.2658L28.0736 10.536ZM37.4 44.2C37.4 46.0778 35.8778 47.6 34 47.6C32.1222 47.6 30.6 46.0778 30.6 44.2C30.6 42.3222 32.1222 40.8 34 40.8C35.8778 40.8 37.4 42.3222 37.4 44.2ZM34 17C32.1222 17 30.6 18.5222 30.6 20.4V30.6C30.6 32.4778 32.1222 34 34 34C35.8778 34 37.4 32.4778 37.4 30.6V20.4C37.4 18.5222 35.8778 17 34 17Z"/></svg>
            <div class="modal-text">
                <h2 class="modal-title" id="size-check-title" tabindex="-1" autofocus>…</h2>
                <p>…</p>
            </div>
        </div>
        <div class="modal-actions">
            <button class="btn btn-secondary" value="cancel">…</button>
            <button class="btn btn-primary" value="confirm">…</button>
        </div>
    </form>
</dialog>
```

- **Body:** `p-8`. Below `lg` the icon sits centred above the centred text (`gap-4`); from `lg` it sits left of left-aligned text (`gap-6`). The title is 20px semibold (`text-5 font-semibold leading-7`), the text 16px, `gap-2` apart. The 68px exclamation (`size-17`) is `yellow-400`, the nearest token to Figma's yellow; use it for a warning, and leave it out of a neutral question.
- **Actions:** a lightest-grey footer (`gray-50`, `px-6 py-4`, `gap-3`) with the secondary (the way back, "Annuleren") before the primary (the decision). Below `sm` they stack full width, the primary at the bottom; from `sm` they share the row; from `lg` they sit right at their own width.
- **Width:** the browser's side margin below `sm`, `max-w-xl` from `sm`, `max-w-3xl` from `lg` (Figma's 592px and 800px on the nearest widths).

**Pop-up: a campaign or newsletter signup, only when the brief asks for one.** It never opens in a product page, configurator, cart or checkout, and never on load: at most once per visit, after the customer has scrolled or stayed a while. In a prototype, a button opens it. It closes with the close button, Esc or a click on the backdrop, and holds one field and one primary.

```html
<dialog class="popup" id="newsletter" aria-labelledby="newsletter-title">
    <div class="popup-media"><img src="…" alt=""></div>
    <div class="popup-content">
        <div class="popup-text">
            <h2 class="popup-title" id="newsletter-title" tabindex="-1" autofocus>…</h2>
            <p>…</p>
        </div>
        <form class="popup-form" action="…">
            <label class="sr-only" for="newsletter-email">E-mailadres</label>
            <input class="form-input" id="newsletter-email" type="email" autocomplete="email" placeholder="…">
            <button class="btn btn-primary">…</button>
        </form>
    </div>
    <form method="dialog"><button class="popup-close" aria-label="Sluiten"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 13.4144L17.6568 19.0713C18.0473 19.4618 18.6805 19.4618 19.071 19.0713C19.4615 18.6807 19.4615 18.0476 19.071 17.657L13.4142 12.0002L19.071 6.34335C19.4615 5.95283 19.4615 5.31966 19.071 4.92914C18.6805 4.53861 18.0473 4.53861 17.6568 4.92914L12 10.586L6.34309 4.92912C5.95257 4.5386 5.3194 4.5386 4.92888 4.92912C4.53836 5.31965 4.53836 5.95281 4.92888 6.34334L10.5857 12.0002L4.92888 17.6571C4.53836 18.0476 4.53836 18.6807 4.92888 19.0713C5.3194 19.4618 5.95257 19.4618 6.34309 19.0713L12 13.4144Z"/></svg></button></form>
</dialog>
```

- **Below `lg`:** the photo on top (`h-64`), with square top corners: the pop-up is rounded only at the bottom (`rounded-t-none`), so the photo has no radius. Then `pt-8 px-6 pb-6` with centred text, `gap-8` to the form, the field and a full-width primary `gap-4` apart. **From `lg`:** all four corners rounded, the photo on the left (`w-75`, 300px) and left-aligned text, with the primary at its own width on the right. Width: `max-w-xl`, and `max-w-4xl` from `lg` (Figma's 592px and 880px).
- **Title:** `text-7 font-semibold leading-9` (28px; Figma's 30px has no size in the config).
- **Close:** the one orange control, top right: `accent` with `rounded-bl-2` and `p-2` around a 24px white close icon (Figma's Mingcute `close_line`). White on orange is 2.5:1, under the 3:1 a control's icon needs; it is a deliberate brand choice (Known exceptions → Pop-up close), so keep the `aria-label` and the Esc and backdrop exits.
- **Photo:** the company's own lifestyle or project photo (Imagery), with an empty `alt` when it only decorates.

### Product tile

The product tile is a 1px light-grey border with `rounded-2` and `overflow-hidden`. On hover it gets a green border plus `shadow-1px`, with colour and shadow transitions. It has a 16:9 image and a **white info area** (`py-3 px-4`) holding the name (15/16px semibold, clamped to 3 lines), up to three dash-prefixed USPs in 14px, and the price. The price sits in the **orange price box**: white weight-900 text on #FF8000, `py-1 px-2`, rotated −2°. The old price is struck through, 16px medium, with no box and no rotation, before the price. In related-product sliders the tile gets a full-width primary button. On white the tile has its 1px light-grey outline; on a beige or sand band it has none (Elevation & Depth → The box decision).

### Price box

The price box scales with its component; pick the size by component, not from the global `price` token. Every chip is `bg-price` with white text, tilted −2°, and the old price is never in a chip.

| Component | Chip | Source |
|---|---|---|
| Product tile | the theme's `.price-container` > `.price`: 16px weight 900, `py-1 px-2` (Figma draws `p-2`); the old price 16px medium, struck through, before it | `product-prices.css`, Figma `1358:30459` |
| Image tile and promo label | "vanaf" `text-4.75` semibold, then the amount `text-6` black (24px), `px-2 py-1.5`, `gap-1.5` between them; below `md` "vanaf" is `text-3.75` and the amount `text-5` | the theme's promo-banner label, Figma `1530:37200` |
| Product page buy box | the largest on the page: the final price `text-5`, `text-6` from `md`; the old price 16px semibold green, 20px from `md`, struck through | `product-prices.css` (`.buy-box-wrapper`) |

Figma draws the image-tile amount at 28px with `py-2.5`; the theme's promo label, which the tile reuses, sets 24px and `py-1.5`, and the theme wins. Use the table's classes on a `span` chip where the theme markup doesn't apply (the image tile, a promo label).

### Pagination

Figma `1495:7515` (file "Tuinmaximaal for Claude"), below a product grid or any paged list. The theme's pager doesn't match it yet (Known exceptions → Pagination); prototypes use the skeleton's `pagination` classes:

```html
<div class="pagination">
    <p class="pagination-amount">Producten 1 tot 12 van 188 in totaal</p>
    <nav class="pagination-pages" aria-label="Paginering">
        <ol>
            <li><span class="pagination-item --arrow" aria-disabled="true" aria-label="Vorige"><svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></span></li>
            <li><a class="pagination-item" href="…" aria-current="page"><span class="sr-only">U lees momenteel pagina </span>1</a></li>
            <li><a class="pagination-item" href="…"><span class="sr-only">Pagina </span>2</a></li>
            <li class="hidden sm:block"><a class="pagination-item" href="…"><span class="sr-only">Pagina </span>3</a></li>
            <li><a class="pagination-item" href="…" aria-label="Verder springen">…</a></li>
            <li><a class="pagination-item" href="…"><span class="sr-only">Pagina </span>16</a></li>
            <li><a class="pagination-item --arrow" href="…" aria-label="Volgende"><svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></li>
        </ol>
    </nav>
    <div class="pagination-limiter"><label for="limiter">Toon</label><select id="limiter" class="form-select w-auto">…</select></div>
</div>
```

- **Items:** 46px square at least (`h-11.5 min-w-11.5`), `rounded-1`, a 1px light-grey border, 16px bold grey numbers, `gap-2` apart. Hover gives a grey border and green text, like a form field. The current page (`aria-current="page"`) takes the selected-card look: #F8FCE6 with a 2px #809700 border and green text. The arrows are green 24px icons; on the first or last page the arrow is a `span` with `aria-disabled="true"` at 50% opacity.
- **Slots:** five page slots from `sm`, four below it (`hidden sm:block` on one), so the row fits 375px: the first page, the current page's neighbours, "…" as the theme's jump link, and the last page. Below `sm` the items take `px-3`, from `sm` Figma's `px-5`.
- **Layout:** from `lg` one row: the amount left, the pages centred, the limiter right (both sides `flex-1`, so the pages stay centred however long the amount runs). Below `lg` the pages come first, centred, with the amount and the limiter in a row under them. The amount and the "Toon" label are 14px green; the limiter is Figma's dropdown: the theme's `.form-select` at 80px (`w-20`), `rounded-1.5` (6px), with `pl-3.5` and room for the chevron (`pr-9`).
- **Labels** are the store's own: "Producten %1 tot %2 van %3 in totaal" (Magento_Theme, nl_NL), "Vorige", "Volgende", an `sr-only` "Pagina" before each number, and on the current page the store's "You're currently reading page" ("U lees momenteel pagina", as staging spells it).

### Content patterns

The house Figma file (Tuinmaximaal website → Content (Desktop), node `1358:29886`) settles these patterns. Its values are mapped onto the theme's scale; where Figma goes past the 28px cap, the nearest step is used.

- **Split image (text + image or video).** Figma `2255:2866` (on beige) and `6843:32950` (without a background), file "Tuinmaximaal for Claude"; in the theme, the PageBuilder "image with text" block (`content-types/page-builder-block-image-with-text.css`). The one text + image component, for a two-line promo as much as a long read: Figma designs it per breakpoint. It replaces the older content block (`1358:30318`, `1358:30329`). Build it with the skeleton's `split-image` classes, never by hand:

  ```html
  <div class="split-image"><!-- add --media-right for the image on the right; add --plain for no background -->
      <div class="split-image-media"><img src="…" alt="…" loading="lazy"></div>
      <div class="split-image-text">
          <h2>…</h2>
          <p class="split-image-intro">…</p><!-- optional -->
          <p>…</p>
          <blockquote class="split-image-quote"><svg width="34" height="31" viewBox="0 0 34.0887 30.816" fill="currentColor" aria-hidden="true"><path d="M13.6407 30.816V16.032H7.30473C7.30473 13.664 7.75273 11.68 8.64873 10.08C9.54473 8.416 11.2087 7.168 13.6407 6.336V0C11.6567 0.256001 9.80073 0.864 8.07273 1.824C6.40873 2.72 4.96873 3.872 3.75273 5.28C2.53673 6.688 1.57673 8.32 0.872728 10.176C0.232728 12.032 -0.0552727 14.016 0.00872724 16.128V30.816H13.6407ZM34.0887 30.816V16.032H27.7527C27.7527 13.664 28.2007 11.68 29.0967 10.08C29.9927 8.416 31.6567 7.168 34.0887 6.336V0C32.1047 0.256001 30.2487 0.864 28.5207 1.824C26.8567 2.72 25.4167 3.872 24.2007 5.28C22.9847 6.688 22.0247 8.32 21.3207 10.176C20.6807 12.032 20.3927 14.016 20.4567 16.128V30.816H34.0887Z"/></svg><p>…</p></blockquote><!-- optional -->
          <div class="split-image-actions"><a class="btn btn-primary" href="…">…</a><a class="btn btn-secondary" href="…">…</a></div><!-- optional -->
      </div>
  </div>
  ```

  - **On beige** (the default): one beige box, `rounded-2` and `overflow-hidden`. Below `lg` the photo sits on top (`h-64`, `h-90` from `sm`, Figma's 360px) with the text under it at `p-6`. From `lg` it is two equal halves: the photo covers its half flush to the box edges (at least `min-h-80`) and the text sets the height at `p-12`. It is the "one block that needs emphasis" with an image (Elevation & Depth → The box decision); several in a row, such as one per product line, alternate the image side.
  - **Plain** (`--plain`): no box. The photo is `rounded-2` on its own, stacked above the text below `md` (`gap-6`), and from `md` beside it (`gap-6`, `gap-12` from `lg`), stretched to the text's height (at least `min-h-64`), with the text centred against it. This is the box decision's unboxed "text + image", on white or on a beige or sand band.
  - **Text:** `gap-4` (16px), top-aligned in the beige box. The heading is a plain `h2` (24px black) with Figma's 32px line-height. The optional intro is `text-4.5 font-medium` (18px), the paragraphs body text. The optional quote is 24px regular (`text-6`) with `py-4`, behind Figma's quote mark in bone (`surface-strong` #E0D2C5, decorative, `aria-hidden`). Buttons, when the block has them, sit in `split-image-actions`: 8px more above them (`mt-2`), a primary beside a secondary, `gap-2` apart. The paragraphs and the quote are at 90%, as Figma sets them. In a keep-the-copy redesign the intro and quote appear only when the copy has them.
  - **The image covers its half:** it is absolutely positioned (`absolute inset-0 size-full object-cover`), so it never sets the height and, on beige, never leaves a strip above or below it. A video gets `split-image-play` over it: a 20% black wash with a centred white play icon of `size-25` (100px), as a `button` with an accessible name. The block sits in the container as a direct child of its section, never inside another box, without margins or widths of its own; the section's gap spaces it. Never a padded box with a separately rounded image inside it, and never an image in the grid flow with `h-full`, which lets the photo's own ratio set the height.

  **A product split image stays light.** It holds the product name, the price (the promo-label chip, Price box), the first sentence of the copy, the USP list and the two buttons, nothing else. It has no "Lees meer": opening it grows the text, and the flush photo stretches with it. It has no icon rows and no colour lines such as "Handgrepen in 3 kleuren". The rest of the copy goes to a section of its own. "+ Lees meer" (a flush transparent button that opens the rest, Buttons) is fine for secondary text in cards, in one section per page.
- **Image tile.** Figma `1530:37197` and the homepage's category entries. A contained lifestyle photo with `rounded-2` and `overflow-hidden`, with a soft dark scrim (`image-tile-scrim`) behind the text (`bg-gradient-to-br from-gray-900/60 via-transparent to-transparent` over the top left, and the same `to-tr` over the bottom left). It holds a white heading top left in `text-7 font-black` (the promo banner's title; Figma draws 30px), a price chip under it at the image-tile size (Price box), and a default-size primary button bottom left ("Stel nu samen", "Bekijk producten"). A tile without a price ("Losse onderdelen", "Zelf monteren of via partner?") keeps the heading and the button. Two or six tiles in the intro are the big moment of the homepage; a category or landing intro uses the H1 and intro beside a modest photo instead (Layout → Beige intro). The scrim is required: white text never sits on a bare photo.
- **Image-text item.** PageBuilder's `pagebuilder-image-text-item`. Figma `6838:38528` (on white or transparent) and `6842:32723` (on colour), file "Tuinmaximaal for Claude": a white link card with a bold title and a short description on the left and a photo flush on the right. The surface decides the border, as for every repeated card (Elevation & Depth → The box decision). Build it with the skeleton's `image-text-item` classes:

  ```html
  <div class="grid gap-4 lg:grid-cols-3">
      <a class="image-text-item --on-surface" href="…"><!-- drop --on-surface on white: it adds the light-grey outline -->
          <span class="image-text-item-text">
              <span class="image-text-item-title">…</span>
              <span>…</span>
          </span>
          <img class="image-text-item-media" src="…" alt="" loading="lazy">
      </a>
  </div>
  ```

  - **On beige** (`--on-surface`), its usual place: in a category page's beige intro, under the H1 and intro (Layout → Beige intro). White, no border. Never a beige card on beige.
  - **On white:** white with the 1px light-grey outline.
  - **In a wrapper:** Figma `1358:29197`. On a white page, a column of items (beside an FAQ or running text, or in a sidebar) goes in one beige wrapper (`flex flex-col gap-5 rounded-2 bg-surface px-6 pt-5 pb-8`), with a heading in `text-6 font-bold` (24px) and the items stacked `gap-2` apart as `--on-surface`. The heading comes from the page's copy; without one, the wrapper takes `p-6` (`p-4` below `sm`) and holds the items only. The wrapper's column is `min-w-0`. On a beige or sand band there is no wrapper: the items stand on the band.
  - **Sizes:** at least 108px high (`min-h-27`); the photo is 140px wide (`w-35`), rounded on its outer corners by the card, with an empty `alt`, since the title names the link. The text is centred, `gap-1` (4px) apart: `p-4` with a 14px title below `sm`, `p-5` with a 16px title from `sm`, and the description at 14px and 90% throughout. Three in a row from `lg`, `gap-4` apart.
  - **Link colour:** the title is `link` and turns `link-hover` when the card is hovered, as Figma draws it (Colors).
  - **Copy:** the title is the link text. The description is the page's own second line: a staging card's link label ("Meer over zonwering") works as one. There is no separate arrow link.
- **Blog tile.** A repeated card: a photo at 16:9 (`aspect-video`), rounded at the top, then `p-4` with a category pill (`pill`: `bg-gray-50 rounded-full text-3.5 px-3 py-1`), a `text-4 font-semibold` title, a `text-3.5` excerpt clamped to 3 lines (`line-clamp-3`) and a flush transparent "Lees verder" button with a trailing arrow (`btn btn-transparent --flush --icon-trailing`). Outlined on white, borderless on a tinted band.
- **Review cards.** Only when reviews are enabled (Components → Reviews). Outlined white cards on white, with the reviews summary above them.
- **Quote.** A beige surface box with the quote in `text-4.5 font-semibold`, beside a column of running text. Inside a split image the quote takes its own style (`split-image-quote`).
- **Accordion and FAQ.** Figma `2255:4455` (file "Tuinmaximaal for Claude"). A native `details` element with the skeleton's `accordion` classes, so it opens without a script and the browser handles the keyboard:

  ```html
  <div class="flex flex-col gap-2">
      <details class="accordion"><!-- add --on-surface on a beige or sand band, --plain inside a box -->
          <summary class="accordion-title"><span>…</span><svg class="accordion-toggle --closed" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M4 10h12M10 4v12"/></svg><svg class="accordion-toggle --open" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M4 10h12"/></svg></summary>
          <div class="accordion-body"><p>…</p></div>
      </details>
  </div>
  ```

  - **Row:** white, a 1px light-grey border and `rounded-1` (4px, as Figma draws it, not the cards' `rounded-2`), `gap-2` (8px) between rows. The question is 16px bold green in `px-4 py-3`, so the whole 48px row is the hit area, and it turns #809700 on hover. A plus sits on the right when closed and a minus when open (20px, `accordion-toggle`), 6px from the text.
  - **Answer:** 14px grey (`text-3.5 text-text-muted`, 5.9:1 on white), 12px under the question and 12px above the bottom edge. It may hold paragraphs, a list or links (`text-link underline hover:text-link-hover`).
  - **Leading icon (optional):** a 20px outline icon before the question, `aria-hidden`, for an accordion whose rows are topics (delivery, warranty), not for an FAQ.
  - **On a beige or sand band** (`--on-surface`): white rows without the border, as for every card on a band.
  - **Plain** (`--plain`): no border and no padding, for an accordion inside a box that already separates it, such as a filter group or a card. The rows stay `gap-2` apart and 24px high, the minimum target size.
  - **FAQ:** the outlined accordion on white, one `details` per question, under the section's `h2`. The questions and answers are the page's own. Several may be open at once, and none is open at first.
- **Sticky product tabs.** A category landing with a few product lines puts a tab bar under the intro that links to each product's block and follows the scroll: `sticky top-0 z-40 bg-white`, with a light-grey bottom border where it meets the white page (`border-b border-border`). Each tab holds a 16:9 thumbnail (`w-16 aspect-video object-cover rounded-1`, hidden below `sm`), the product name (`text-3.5 md:text-4 font-semibold`) and the "Vanaf €" price (`text-3 md:text-3.5`), at least `min-h-11` high; on small screens the row scrolls sideways (`overflow-x-auto snap-x`). The active tab gets the beige pill (`bg-surface rounded-2`, with `aria-current`); there is no orange bar and no text-only tab. A script marks the tab of the block in view and reads positions on scroll, never at start-up (build.md → Build traps). The blocks take `scroll-mt-28`, so the bar doesn't cover their top. See the approved example ([assets/examples/category-landing.html](assets/examples/category-landing.html)).
- **Comparison table ("Alle …").** Below the product blocks, one table compares the products on the needs the copy names: a column per product (a 16:9 thumbnail and the short name, linking to its block, and from `lg` the product-tile price chip), then a row per need with a tick (the check-circle in `secondary`) or a grey dash, each with `sr-only` "ja" or "nee". From `md` it adds a row of colour swatches, and from `lg` a row with a full-width primary button per product. It fits 375px without sideways scrolling: `w-full table-fixed`, short names that may wrap (`break-words hyphens-auto`), the need icons only from `sm`, the colour row only from `md` (`hidden md:table-row`), and the button row and price chips only from `lg`, because at `md` a four-product column is too narrow for "Stel nu samen" on one line. No slider and no cards; in a keep-the-copy redesign every label comes from the page (Overview → Redesigns). See the approved example ([assets/examples/category-landing.html](assets/examples/category-landing.html)).
- **Carousel arrows.** The theme's slider buttons, for the theme's own sliders only (Layout → Vertical flow): `size-12` white squares at 90% opacity (`bg-white/90`), `rounded-1`, `shadow-arrow`, a green arrow icon, placed over the images. Figma adds a light-grey border; the theme has none, and the theme wins.
- **Buttons.** Default size everywhere (48px high), a primary beside a secondary where a block offers two actions, `gap-2` apart (Buttons).

### Heading and paragraph highlight

See Typography. The orange chip with white text, rotated −2°, is used for at most one highlight per section, on a short phrase inside a heading or on a standalone label.

### Lists

`.list-usps` is a column with `gap-2` and a 20px #809700 check-circle marker, 14px text, used for USPs and selling points. The marker is `shrink-0`, so it keeps its size when the text wraps; the theme lets it shrink, and the prototype skeleton corrects this. A hand-built USP icon gets `shrink-0` too. `.list-base` uses dash markers, `gap-1` and 14px text.

### Shell

- **Header:** green with white text, a search field and an orange cart-count badge.
- **Menu:** sand on desktop, beige on mobile. The active item is marked in orange.
- **USP bar:** beige on desktop, sand on mobile, with lighter-green check marks.
- **Breadcrumbs:** on beige, below the USP bar.
- **Footer:** green with white text.
- **Checkout:** out of scope; see Known exceptions.

Prototypes replace this shell with a single green bar holding the logo, unless the question is about the shell itself; then they use the full shell in `assets/page-shell.html`, built with the theme's own shell classes (see the build reference). In prototypes the bar is `h-15` and the logo `h-11` at every breakpoint, in the light frame and the full shell alike.

## Motion

Motion confirms a state change (hover, focus, open/close, selection); it never performs.

- The theme uses `transition-all` on buttons, `transition-colors` and `transition-shadow` on tiles, 200–300ms for accordions, sliders and the footer, and 100ms `ease-in-out` for floating labels. Keep durations between 100 and 300ms with ease-out or ease-in-out easing. No bounce and no elastic easing.
- Animate `transform`, `opacity` and colour only; never width, height, padding or margin. For expand and collapse, transition `grid-template-rows` from 0fr to 1fr. Chevrons rotate 180° when a panel opens.
- Always honour `prefers-reduced-motion`: drop non-essential transitions (`motion-reduce:transition-none`).

## Do's and Don'ts

**Do**

- Colour with the semantic tokens and the Tailwind defaults in Colors (`bg-surface`, `text-text-muted`, `border-border`), next to the theme's component classes (`btn-primary`, `form-input`, `message`). Use only values from the theme's scales (Layout → Spacing, Shapes, the font-size list in Typography).
- Give every veranda or structure view a visible configurator CTA, and every other product a direct add-to-cart button.
- Keep the primary button #809700 with its 4px #6D8005 bottom border. Keep the secondary, tertiary and transparent buttons visibly quieter.
- Use orange only for the price box, heading and paragraph highlights, badges and the main menu's active item, always with the −2° tilt where the theme uses it.
- Lead with proof at decision points: USP check lists, specs, guarantee and delivery terms, and reviews only when they are enabled (Components → Reviews).
- Keep surfaces light and warm, with green for structure and text. Separate content with whitespace first, then a change of surface, and a border only where Elevation & Depth gives one.
- Open every page with a beige intro, keep all content and images inside the container, and make the box decision per block: repeated cards as cards, one emphasised block as a beige box, everything else unboxed on whitespace (Elevation & Depth → The box decision).
- Size the price box by its component (Components → Price box).
- Give every page one big moment for its register, and compose around it with the expression options (Overview → Expression): large contained lifestyle photography, editorial and asymmetric layouts, a bolder heading highlight, contrast in scale and density.
- Test with long German and French strings, and at 375px, `md` and `xl`.

**Don't**

- Don't add a quote-request CTA or form; "offerte" is only a checkout payment method.
- Don't use orange buttons, orange links or orange small text; the pop-up's close button is the one orange control (Components → Dialogs). Blog links in the theme are orange; don't copy them.
- Don't put coloured side stripes (`border-l-4` and similar) on cards, alerts or messages.
- Don't use gradient text, decorative gradients, glassmorphism, neon accents or a dark theme.
- Don't nest a box in a box of the same surface, don't nest more than one level deep, and don't build endless identical card grids.
- Don't wrap the whole page in one box, and don't box running text on a white page just to separate it. Don't border a white container on a white page unless it is a repeated card or an outlined filter box, don't border a card on a tinted band, and don't border a coloured box anywhere.
- Don't put a padded beige split image around a separately rounded image; the image fills its half up to the box edges. Don't put "Lees meer", icon rows or colour lines in a product split image.
- Don't write new copy or draw new visuals in a "keep the copy" redesign (Overview → Redesigns), don't put content in a carousel, and don't float a card over a photo (Layout).
- Don't open a category or landing page with large image tiles, and don't run more than two sections on bare white in a row.
- Don't put white text on a photo without a scrim. (The scrim is the one functional gradient; decorative gradients stay out.)
- Don't let images or content bleed past the container, and don't use any surface other than white, beige, sand and one green block.
- Don't put an eyebrow or kicker label above a heading, and don't use the theme's `btn-size-*` classes (Buttons → Sizes).
- Don't use arbitrary values, new colours, other fonts or type sizes above 28px.
- Don't rotate anything other than the highlights and price boxes.
- Don't centre everything, and don't apply the same padding to every section.

## Known exceptions

- **Checkout:** the checkout runs on a separate LESS theme. This document doesn't describe it, and audits of checkout pages judge it against its own styles.
- **PDP configurator button:** the theme uses #8BA407 (`tmx-primary-lighterGreenSecond`) there. That is a theme bug tracked outside this skill; always use `secondary`.
- **Blog links:** the theme uses orange text; it's a legacy usage, not a pattern.
- **Semantic colours (open, for the FED lead):** Figma `6767:34313` defines the semantic layer (Colors), and prototypes build with it. The theme doesn't have the layer yet:
  - its `tailwind.config.js` names colours `tmx-*` and per component (`btn`, `productTile`, `form`), and leaves Hyvä's `primary` and `secondary` slots empty;
  - it has no colour for `link` and `link-hover`, and its `text-link` is green with a lime hover.

  So a prototype's `bg-surface` has to become `bg-tmx-secondary-beige` or `bg-container-beige` in a template until the theme adopts the layer. The Theme column in Colors is that mapping. A theme that adopts the layer as CSS variables gets the same one-edit re-skin as the prototypes.
- **Forms (open, for the FED lead):** Figma's input fields and textareas (Components → Forms) differ from the theme's `forms.css`, and prototypes follow Figma through the skeleton's unlayered overrides:
  - the theme's select has a green chevron 16px from the edge, `rounded-1` and a status icon beside the chevron, where Figma's dropdown button has a grey chevron 14px from the edge, `rounded-1.5` and no status icon;
  - the theme has no custom dropdown for options with an image, an icon or trailing text (Figma `1343:22101`);
  - the theme's focus ring is #636363 at 50%, where Figma uses `ring`;
  - the theme has no warning feedback, no hint class, no leading icon, no help button and no input groups;
  - its error icon is a circle, not Figma's triangle, and its status icons sit 16px from the edge instead of 14px;
  - it dims only the input when disabled, and has no textarea height;
  - its checkbox and radio (`.field.choice`) have one 20px size, a 16px regular label, a 12px gap and a full-strength disabled checked control, where Figma has three sizes, a 14px medium label, `gap-2.5` and the control at 50%; it has no check circle, no hint on a choice, and no option card, product card or quantity selector (Components → Choices).

  Figma is inconsistent in two places, and prototypes pick one value:
  - its textarea draws its error border in `danger-text`, and its input in `danger`: prototypes use `danger` for both;
  - its dropdown label is `text`, and its input label `text-muted`: prototypes keep `text-muted` for every label, so a form has one label colour.

  Figma's choices differ from each other in a few places, and prototypes follow the majority:
  - the large radio's label is 18px on a 28px line with a 16px hint, where the large checkbox and check circle use 16px on 24px with a 14px hint: prototypes use the latter for all three;
  - one large disabled checked checkbox has a semibold label: prototypes keep medium;
  - the info icon is a UI-kit navy without a token: prototypes use `text`;
  - the product card's focus state equals its hover: prototypes add the control's focus ring, as the radio container does;
  - a disabled choice row dims only its control, where a disabled field dims label and hint too: prototypes follow Figma in both;
  - the product card's quantity shows a 16px medium number, where the Quantity component (`816:24939`) uses 14px semibold: prototypes use the component's;
  - the Quantity component's input style draws a slate UI-kit border and text: prototypes use the field's (`.form-input`).

  The theme has no swatch, action menu, quantity selector or star rating matching Figma's (Components → Choices, Action menu, Reviews).
- **Reviews (a house deviation from Figma):** reviews aren't enabled on the live site, so prototypes show them only when a brief asks (Components → Reviews). Figma's review count is 12px white on `accent` (2.52:1); prototypes set it in `primary` with `on-primary`, in line with "never put small text on orange" (Colors).
- **Buttons (open, for the FED lead):** Figma `1286:12715` redraws the theme's buttons, and prototypes follow Figma through the skeleton (Components → Buttons). The theme differs in these ways:
  - it has three sizes (`btn-size-sm`, the default, `btn-size-lg` with 24px text) instead of Figma's five, and no icon-leading, icon-trailing or icon-only layouts;
  - its labels are semibold at every size;
  - its `.btn-tertiary` is a green text link with no padding, where Figma draws a grey outline, and it has no transparent button;
  - focus shows the hover fill, where Figma keeps the fill and adds a ring, and there is no active state.

  The secondary and tertiary borders sit outside the padding, so those buttons are 2px wider than Figma draws them; the heights match.
- **Focus rings (a house deviation from Figma):** Figma's focus rings are soft: `secondary` or `primary` at 20%, and `ring` at 50%. Each is well under the 3:1 a focus indicator needs against the page (WCAG 1.4.11). The secondary's fill and the tertiary's `border-strong` border (5.9:1) still show focus, so those two keep Figma's rings. The primary and the transparent button change nothing else on focus, so their rings are solid: the primary gets `ring-2 ring-secondary-strong ring-offset-2` and the transparent `ring-2 ring-link` (Components → Buttons). Figma is to follow.
- **Pop-up close:** the white close icon on orange is 2.52:1, below WCAG's 3:1 for a control's icon. The brand keeps it on purpose (Components → Dialogs); the button's `aria-label`, Esc and the backdrop click keep the pop-up closable for everyone.
- **Messages (open, for the FED lead):** the theme's `.message` is `p-3 gap-2 mb-2` with a #F5F5F5 notice. Figma `6814:5244` sets `p-4 gap-3`, no margin, text at 90%, a lightest-grey notice and an outline variant (Components → Messages); prototypes follow Figma through the skeleton's unlayered overrides until the theme is updated.
- **Pagination (open, for the FED lead):** the theme's `Magento_Theme/templates/html/pager.phtml` still draws 40px items, an underlined bold current page and solid #809700 arrow squares with white chevrons. Figma `1495:7515` replaces it (Components → Pagination), and the theme is to be refactored to match; until then prototypes follow Figma through the skeleton's `pagination` classes, with the theme's structure (`nav > ol > li`, `aria-current="page"`, the sr-only "Pagina" labels and the jump links) under new class names, so the refactor restyles the template without changing its behaviour.
- **RAL swatches (open, for the FED lead):** the theme has no tokens for the product colours (RAL 7016, 9016, 9005, 1019, 9007). Prototypes approximate them with the nearest Tailwind defaults: `zinc-700` for anthracite (7016), `white` (9016), `neutral-950` (9005), `stone-400` (1019) and `neutral-500` (9007), each swatch with a light-grey border and the RAL name in its title. The lead decides between swatch tokens and a documented product-colour exception.

### Deliberately omitted

Sources checked: the StyleGuide module (buttons, colors, form, messages, typography), `tailwind.cheatsheet.md`, `tailwind.dev.rules.md`, `tailwind.spacing.md`, `tailwind.config.js` and the component CSS.

- **Niche colours and details:** theme colours and details with a single niche use aren't part of the house style; build with the palette above.
- **Font sizes `text-6.5` and `text-7.5` to `text-15`**, and the **`aspect-11/5`** ratio: the cheatsheet lists them, but `tailwind.config.js` doesn't define them, so the classes don't compile. The config wins.
- **PageBuilder and content-type styles** (`components/valantic/pagebuilder/`, `theme/components/content-types/`) and **module skins** (Amasty, Mirasvit, Fancybox, Swiper, the bamboo decking calculator): out of scope for prototypes. The one exception is the image-with-text block, which the skeleton mirrors as `split-image` (Components → Content patterns → Split image).
- **Image utilities** (`bg-right-arrow`, `bg-close`, `bg-search` and the `content-chevron` family): they point at theme image files that prototypes can't load. Use inline SVG icons in `currentColor` instead.
- **Adding values:** the dev rules allow a new token only after agreement with the DEV/FED lead, recorded in the cheatsheet. A prototype never adds one; if a value is missing, flag it in the hand-off.
