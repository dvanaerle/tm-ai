---
name: Tuinmaximaal Design System

colors:
  tmx-primary-green: "#003017"
  tmx-primary-lighterGreen: "#809700"
  tmx-primary-lightGreen: "#6D8005"
  tmx-primary-darkGreen: "#001A13"
  tmx-primary-lighterGreenSecond: "#8BA407"
  tmx-primary-orange: "#FF8000"
  tmx-secondary-sand: "#F5E6D7"
  tmx-secondary-beige: "#FFF5ED"
  tmx-secondary-bone: "#E0D2C5"
  tmx-neutral-white: "#FFFFFF"
  tmx-neutral-lightGrey: "#E3E3E3"
  tmx-neutral-grey: "#636363"
  tmx-status-success: "#22C55E"
  tmx-status-success-bg: "#F0FDF4"
  tmx-status-error: "#EF4444"
  tmx-status-error-bg: "#FEF2F2"
  tmx-status-warning: "#EAB308"
  tmx-status-warning-bg: "#FEFCE8"
  tmx-status-info: "#3B82F6"
  tmx-status-info-bg: "#EFF6FF"

typography:
  fontFamily: ArticulatCF, sans-serif
  heading-1:
    fontSize: 36px
    fontWeight: "900"
    lineHeight: 1.306
  heading-2:
    fontSize: 30px
    fontWeight: "900"
    lineHeight: 1.3
  heading-3:
    fontSize: 24px
    fontWeight: "900"
    lineHeight: 1.292
  heading-4:
    fontSize: 20px
    fontWeight: "700"
    lineHeight: 1.3
  heading-5:
    fontSize: 18px
    fontWeight: "700"
    lineHeight: 1.278
  heading-6:
    fontSize: 16px
    fontWeight: "600"
    lineHeight: 1.3125
  body-lg:
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 1.5
  body-md:
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 1.5
  body-sm:
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 1.5
  body-xs:
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 1.5
  label-md:
    fontSize: 16px
    fontWeight: "600"
    lineHeight: 1.5
  label-sm:
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 1.5

rounded:
  sm: 4px
  lg: 8px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 40px

components:
  button-primary:
    backgroundColor: "{colors.tmx-primary-lighterGreen}"
    textColor: "{colors.tmx-neutral-white}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: 12px 24px 8px 24px
    borderBottom: "4px solid {colors.tmx-primary-lightGreen}"
  button-primary-hover:
    backgroundColor: "{colors.tmx-primary-lightGreen}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.tmx-primary-green}"
    border: "1px solid {colors.tmx-primary-green}"
    rounded: "{rounded.sm}"
    padding: 10px 24px
  button-secondary-hover:
    backgroundColor: "{colors.tmx-primary-green}"
    textColor: "{colors.tmx-neutral-white}"
    border: "1px solid {colors.tmx-primary-green}"
  button-tertiary:
    textColor: "{colors.tmx-primary-green}"
    padding: 0px
  button-tertiary-hover:
    textColor: "{colors.tmx-primary-lighterGreen}"
  heading-highlight:
    backgroundColor: "{colors.tmx-primary-orange}"
    textColor: "{colors.tmx-neutral-white}"
    fontWeight: "900"
    padding: 8px 12px 2px 12px
    transform: "rotate(-2deg)"
    display: "inline"
  paragraph-highlight:
    backgroundColor: "{colors.tmx-primary-orange}"
    textColor: "{colors.tmx-neutral-white}"
    fontWeight: "700"
    padding: 4px 12px 2px 12px
    transform: "rotate(-2deg)"
    display: "inline"
  price-badge:
    backgroundColor: "{colors.tmx-primary-orange}"
    textColor: "{colors.tmx-neutral-white}"
    fontWeight: "900"
    padding: 4px 8px
    transform: "rotate(-2deg)"
    display: "block"
  price-badge-old:
    textDecoration: "line-through"
    fontWeight: "500"
  navigation:
    backgroundColor: "{colors.tmx-secondary-sand}"
    textColor: "{colors.tmx-primary-green}"
  navigation-active:
    backgroundColor: "{colors.tmx-primary-orange}"
    textColor: "{colors.tmx-neutral-white}"
  breadcrumbs:
    backgroundColor: "{colors.tmx-secondary-beige}"
    textColor: "#8A7B6C"
  input-default:
    backgroundColor: "{colors.tmx-neutral-white}"
    textColor: "{colors.tmx-primary-green}"
    border: "1px solid {colors.tmx-neutral-lightGrey}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 14px
  input-default-focus:
    border: "1px solid {colors.tmx-neutral-grey}"
    ring: "{colors.tmx-neutral-grey}"
  input-default-error:
    border: "1px solid {colors.tmx-primary-orange}"
  input-default-success:
    border: "1px solid {colors.tmx-primary-lighterGreen}"
  input-disabled:
    opacity: "0.5"
    cursor: "not-allowed"
  checkbox:
    backgroundColor: "{colors.tmx-neutral-white}"
    border: "1px solid {colors.tmx-neutral-grey}"
    size: 20px
    rounded: "{rounded.sm}"
  checkbox-checked:
    backgroundColor: "{colors.tmx-primary-lighterGreen}"
    border: "1px solid {colors.tmx-primary-lighterGreen}"
  radio:
    backgroundColor: "{colors.tmx-neutral-white}"
    border: "1px solid {colors.tmx-neutral-grey}"
    size: 20px
    rounded: "{rounded.full}"
  radio-checked:
    backgroundColor: "radial-gradient(circle, {colors.tmx-primary-green} 35%, {colors.tmx-neutral-white} 40%)"
    border: "1px solid {colors.tmx-primary-green}"
  choice-error:
    backgroundColor: "{colors.tmx-neutral-white}"
    border: "1px solid {colors.tmx-primary-orange}"
  choice-inactive:
    backgroundColor: "{colors.tmx-neutral-lightGrey}"
    border: "1px solid {colors.tmx-neutral-lightGrey}"
  message-base:
    rounded: "{rounded.sm}"
    padding: 8px 8px 8px 20px
  message-success:
    backgroundColor: "{colors.tmx-status-success-bg}"
    borderLeft: "4px solid {colors.tmx-status-success}"
  message-error:
    backgroundColor: "{colors.tmx-status-error-bg}"
    borderLeft: "4px solid {colors.tmx-status-error}"
  message-warning:
    backgroundColor: "{colors.tmx-status-warning-bg}"
    borderLeft: "4px solid {colors.tmx-status-warning}"
  message-info:
    backgroundColor: "{colors.tmx-status-info-bg}"
    borderLeft: "4px solid {colors.tmx-status-info}"
---

# Tuinmaximaal Design System

## Brand & Style

Tuinmaximaal is a Dutch outdoor living and garden retail brand. The design language is **Warm Commerce** — purposeful, grounded, and service-forward. Every decision should feel like it was made by someone who knows their products well and respects the customer's time.

**Green is the foundation.** Deep forest green (`tmx-primary-green`) carries authority and trust. It anchors text, borders, and secondary actions. When in doubt, default to green.

**Orange is reserved for urgency.** It appears on prices, promotional highlights, active navigation markers, and error states — never decoratively. If something needs attention, it gets orange. Nothing else does.

**Lime green drives action.** The lighter green (`tmx-primary-lighterGreen`) signals forward progress: primary buttons, checked states, success borders. It should feel earned — not scattered.

**Warm neutrals create breathing room.** Beige and sand surfaces soften the density of ecommerce layouts without becoming decorative. They are backgrounds, not statements.

**Remove the unnecessary to let the essential shine.** Every element must help the user understand, decide, or act. Prioritize clarity over complexity. Never add elements for decoration alone. Let the design feel refined without drawing attention to itself.

## Colors

The palette is organised into four groups: primary greens, accent, warm neutrals, and status.

### Primary Greens

- **`tmx-primary-darkGreen` (`#001A13`):** The deepest tone. Used for high-contrast surfaces.
- **`tmx-primary-green` (`#003017`):** The core brand color. Default for body text, borders, secondary buttons, and navigation text.
- **`tmx-primary-lightGreen` (`#6D8005`):** The pressed/hover state for primary buttons. Also used as the bottom border on primary buttons to create tactile depth.
- **`tmx-primary-lighterGreen` (`#809700`):** The lime green action color. Primary button fill, checked states, success borders, pager background. Always paired with white text.
- **`tmx-primary-lighterGreenSecond` (`#8BA407`):** A slightly warmer lime. Used for link hover states and inline text links within product content.

### Accent

- **`tmx-primary-orange` (`#FF8000`):** The urgency color. Price badges, promotional highlights, active navigation marker, error borders. Never decorative.

### Warm Neutrals

- **`tmx-secondary-sand` (`#F5E6D7`):** Navigation backgrounds and USP bars.
- **`tmx-secondary-beige` (`#FFF5ED`):** Default warm surface for page backgrounds and content containers.
- **`tmx-secondary-bone` (`#E0D2C5`):** Dividers and mobile menu borders.
- **`tmx-neutral-white` (`#FFFFFF`):** Form input surfaces and card backgrounds.
- **`tmx-neutral-lightGrey` (`#E3E3E3`):** Default resting border for form inputs, product tile outlines, and inactive choice controls.
- **`tmx-neutral-grey` (`#636363`):** Deepened border on form focus and default choice control borders.

### Status

Each status color has a border value and a `-bg` tint for the message background.

- **Success:** `tmx-status-success` (`#22C55E`) / `tmx-status-success-bg` (`#F0FDF4`)
- **Error:** `tmx-status-error` (`#EF4444`) / `tmx-status-error-bg` (`#FEF2F2`)
- **Warning:** `tmx-status-warning` (`#EAB308`) / `tmx-status-warning-bg` (`#FEFCE8`)
- **Info:** `tmx-status-info` (`#3B82F6`) / `tmx-status-info-bg` (`#EFF6FF`)

## Typography

Single typeface: **ArticulatCF**, sans-serif fallback.

- **Headings:** Font-black (900) for H1–H3, bold (700) for H4, semi-bold (600) for H5–H6.
- **Body:** Regular weight, 16px base, line height 1.5.
- **Labels:** Semi-bold, 14–16px for buttons and interactive controls.

## Layout & Spacing

The layout uses a **fixed-max-width container** of 1314px, centered with 1rem horizontal padding at all breakpoints. The responsive grid scales across four breakpoints:

| Breakpoint | Min-width | Columns |
|---|---|---|
| mobile | — | 1 |
| `sm` | 640px | 2 |
| `md` | 768px | 3 |
| `lg` | 1024px | 4 |

The main content area takes 3 of 4 columns at `lg`, with the sidebar occupying 1. Full-width layouts remove the max-width constraint and horizontal padding entirely.

Pages always open with a full-viewport-width `tmx-secondary-beige` introduction zone — containing the page title, breadcrumbs, or hero — followed by a white background for the main content. Never reverse this order.

A strict 4px base scale governs all spacing. `xs` (4px) and `sm` (8px) for gaps within components; `md` (16px) for internal padding on controls and cards; `lg` (24px) between components; `xl` (32px) for content overlays and banners. Sections use `lg` (24px) vertical padding on mobile, `section` (40px) on desktop. When a section's background needs to extend edge-to-edge beyond the container, use a full-width background — do not constrain it to the container width.

## Elevation & Depth

The interface is intentionally flat. Depth is expressed through border weight and color contrast only.

Primary buttons use a 4px bottom border in a darker green. Dropdowns and flyout panels use a single directional shadow (`0 4px 12px 0 rgba(0,0,0,0.16)`). Everything else uses border color shifts to communicate state.

## Shapes

Three steps: `sm` (4px) for interactive controls — buttons, inputs, checkboxes, messages; `lg` (8px) for content containers — product tiles, cards, banners; `full` (9999px) exclusively for radio buttons. Never mix scales within the same component type.

## Components

### Buttons & Actions

- **Primary:** Lime green fill, 4px darker green bottom border, white text. Strongest CTA on any screen.
- **Secondary:** Transparent fill, green border and text. Inverts to solid green on hover.
- **Tertiary:** No background, no border, no padding. Text link for low-priority actions only.

### Highlights & Price Badge

All three share a `-2deg` rotation and orange background — applying it to one but not another breaks the system.

- **Heading highlight:** `display: inline`, font weight 900. One per content block maximum.
- **Paragraph highlight:** Same as heading highlight, font weight 700.
- **Price badge:** `display: block`, font weight 900, `4px 8px` padding. The old price sits alongside it — plain text, medium weight, line-through. Never apply the orange treatment to the old price.

### Navigation

Page-level navigation only — global header is a separate template concern.

- Navigation surfaces: `tmx-secondary-sand` background, `tmx-primary-green` text.
- Active item: `tmx-primary-orange` background indicator.
- Breadcrumbs: `tmx-secondary-beige` surface, `#8A7B6C` text.
- In-page tabs: `tmx-primary-green` active border, `tmx-neutral-lightGrey` resting border.

### Forms & Inputs

White surface, `tmx-neutral-lightGrey` resting border, deepens to `tmx-neutral-grey` on focus. Error uses orange border — always pair with a visible message below the field. Success uses lime green border. Floating labels compress to 75% scale on activation. Select fields use a branded chevron icon.

### Choice Controls

**Checkbox** — 20px square, `rounded.sm`. White bg, grey border at rest. Checked: lime green bg and border. Error: orange border. Inactive: light grey bg and border. Always paired with a label, 12px gap.

**Radio** — 20px circle, `rounded.full`. White bg, grey border at rest. Checked: radial gradient (green dot 35%, white 40%). Error: orange border. Inactive: light grey bg and border. Always paired with a label, 12px gap.

Group multiple controls in a flex column.

### Messages & Lists

Messages use `message-base` (4px radius, `8px 8px 8px 20px` padding) extended by each variant's background and 4px left border in the relevant status color.

The base list uses a dash (`-`) marker in a flex row with 6px gap. The USP list uses a 20px green checkmark icon with slightly more vertical gap.

## Do's and Don'ts

**Do** use the `-2deg` rotation consistently across heading highlights, paragraph highlights, and price badges. These three elements form a visual language — applying the rotation to one and not another breaks the system.

**Do** use orange exclusively for urgency signals: prices, highlights, active navigation state, and error borders. Never use it for decorative purposes.

**Don't** apply the orange price badge treatment to old or crossed-out prices. The old price must always be plain text with a line-through.

**Don't** use shadows to create depth in flat UI surfaces — borders and color contrast are the only depth signals for form elements, cards, and list items. Reserve shadows for elements that genuinely float above the page (dropdowns, tooltips, slider arrows).
