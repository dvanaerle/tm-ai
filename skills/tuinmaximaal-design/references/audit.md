# Audit: review a page, screenshot or snippet

<!-- The craft floor and the refine checklist are adapted from Impeccable v4.4.0 by Paul Bakaus (Apache-2.0). Modified for Tuinmaximaal; see ../NOTICE.md for what changed. -->

An audit judges existing work against DESIGN.md, a craft floor and a CRO lens, and reports findings ranked by impact. It documents and recommends; it changes nothing unless the user asks for fixes.

## 1. Read the input

- **Snippet or file:** read the classes and markup directly. Resolve every class against the theme config: anything outside the `tmx-*` and semantic names, or any `[…]` value, is off-system.
- **Screenshot:** judge what is visible. Estimate colours and sizes against the palette and scale, and name the token you think was meant.
- **URL:** capture it at 375px and `xl` when a browser tool is available; otherwise ask for a screenshot.

Note what the evidence can't show (hover and focus states, the exact contrast in a compressed screenshot, behaviour at other widths) and keep those checks out of the findings, or mark them "unverified".

Checkout pages run on a separate LESS theme: judge them against their own styles (DESIGN.md → Known exceptions). Brand contrast exceptions (white on #809700 and on #FF8000, brown breadcrumbs) are reported once, as theme-level notes, not as errors of the page under review.

## 2. Design system

Check the input against DESIGN.md, section by section:

- **Tokens:** only theme classes and scale values; no arbitrary values, inline colours, new fonts or sizes above 28px (`text-7`).
- **Action colour:** the primary button is #809700 with the 4px #6D8005 bottom border; there is one primary action per view; secondary and tertiary are visibly quieter. Buttons are `btn-size-sm` or the default size; `btn-size-lg` is a finding.
- **Orange:** only on the price box, heading and paragraph highlights, badges and active states. An orange button, link or small text is a finding.
- **Purchase path:** verandas and structures lead to the configurator, other products to the cart. Any quote-request CTA or form is a finding ("offerte" is a checkout payment method).
- **Components:** messages have a tinted background, an icon and no border; product tiles have a white info area and the rotated price box; form fields show the theme's states; headings use the h1–h6 scale with black weight on h1–h2 only.
- **Shape and depth:** `rounded-1` for controls, `rounded-2` for tiles and cards; separation by whitespace, then a change of surface, then a 1px border only where Elevation & Depth gives one; `shadow-arrow` only on floating elements; the −2° rotation only on highlights, price boxes and promo labels.
- **Tilt:** every heading highlight, the paragraph highlight, the price box and the promo labels tilt −2°. A flat heading highlight is a theme-level finding: the theme rotates an inline span, which a transform doesn't affect (DESIGN.md → Shapes). Report it under Theme-level notes, not as an error of the page.
- **Surfaces:** white, beige and sand only, on the ladder in DESIGN.md → Elevation & Depth → Surfaces, plus at most one green emphasis block; green for structure and text; no dark theme. A bone surface, any other surface colour, or a second green block is a finding.
- **Layout:** the container rule and the beige intro per page type (DESIGN.md → Layout); boxes and, on a category page, the category grid (DESIGN.md → Elevation & Depth). The craft floor below flags the misses.
- **Visual principles:** apply the flag line of each principle in DESIGN.md → Visual principles (Clarity, Deference, Depth, Hierarchy) to every view.

## 3. Craft floor

Each item is a target; the "flag" line names the common pattern that misses it.

**Verify on the result:**

- **Contrast:** body and placeholder text reach 4.5:1, large text 3:1. On coloured surfaces, secondary text is tinted from the surface or the text colour, never a neutral grey.
- **Spacing:** related items sit close together and distinct groups are clearly separated, with more space above a heading than below it; section spacing varies instead of repeating one padding everywhere.
- **Type:** body lines run about 65–75 characters; the heading steps are obvious in size and weight; headings wrap in balanced lines.
- **Motion:** motion confirms a state change and stays within 100–300ms with ease-out or ease-in-out; reduced motion keeps the state change visible.
- **States:** every control has hover, focus, disabled, loading and error states; lists and results have an empty state; focus is visible from the keyboard.
- **Copy:** controls name their action ("Configureer je veranda", not "Klik hier"); errors name the problem and how to recover.
- **Coverage:** everything the page promises can be found within seconds.

**Composition:**

- **Containers:** the page is split into boxes, one per job, and a box nests one level deep at most, only when the inner box is a different surface (white tiles in a beige box). Flag: nested cards that don't change surface (a white card in a white card, a bordered wrapper around a card), nesting past one level, or one wrapper around everything.
- **Container width:** every image and piece of content sits inside the container; only page chrome and the beige intro run full width, as colour bands. Flag: a full-bleed image or content outside the container.
- **Intro:** the page opens with the beige first section for its page type (DESIGN.md → Layout → Beige intro). Flag: no beige intro.
- **Emphasis:** emphasis comes from weight, size and the orange highlight. Flag: gradient text (`bg-clip-text` with a gradient).
- **Alerts and callouts:** a status is shown with a tinted background and an icon. Flag: a coloured `border-left` or `border-right` above 1px on cards, list items, callouts or alerts.
- **Depth:** depth comes from tonal layers. Flag: decorative or heavy drop shadows (`shadow-lg` and similar), hard offset shadows, glass and blur.
- **Borders:** whitespace groups content, then a change of surface separates groups; a border sits only on a theme component that owns one, on an outlined box (white, 1px light grey, `rounded-2`, one job, holding its content directly; DESIGN.md → Elevation & Depth → Boxes), or where two white surfaces meet and space can't separate them. Flag: a bordered white container on a white page that isn't an outlined box (it wraps other boxes or cards, has square corners, or is bordered only for decoration), a border on a coloured (beige, sand or green) box, or outlined and beige boxes mixed for the same role.
- **Big moment:** each page has exactly one, matching its register (DESIGN.md → Expression). Flag: no big moment, or more than one competing for it.
- **Brand:** the page passes the logo-swap test (DESIGN.md → Expression). Flag: with another retailer's logo, the page would still work unchanged.
- **Images:** product media sit at 16:9; editorial images take the ratio the composition asks for. Flag: product media at any other ratio.
- **Structure:** the page structure follows the content and the decision the visitor makes. Flag: a generic grid of equal cards where the content asks for something else (a comparison, a sequence, one big moment), a page built from same-size icon-heading-text cards, the big-number-plus-stats hero template, section numbers without meaning, a modal for a task that doesn't need one.
- **Headings:** a heading stands on its own. Flag: an eyebrow or kicker label above a heading, on any page type (uppercase `paragraph-tiny` belongs only inside badges and pills).
- **Icons:** one drawn icon set, in one stroke and weight. Flag: emoji or unicode glyphs used as icons.
- **Placeholders:** real content, or visibly marked placeholders. Flag: soft-shadowed rectangles, sparklines or fake charts standing in for content.

## 4. Refine checklist

- **Polish:** alignment to the spacing scale, same-role text styled the same, consistent icon sizes, image aspect ratios fixed (16:9 for product media) so nothing shifts, terminology and capitalisation consistent.
- **Harden:** the longest German and French strings fit (text expands 30–40% over Dutch): buttons grow with their label instead of having a fixed width, flex and grid children can shrink (`min-w-0`), long product names clamp or wrap without breaking the layout. Empty, error, loading and success states exist where the page can hit them. Prices, dates and numbers use the market's format.
- **Adapt to mobile:** the layout works at 375px, `md` and `xl`; touch targets are at least 44 × 44px; nothing depends on hover; the price, the primary action and the configurator or cart path stay visible on mobile; multi-column layouts stack in a sensible order.

## 5. CRO lens

Assess conversion alongside design, for the page's primary action:

- **CTA visibility:** is the one primary action obvious in the first viewport on mobile and desktop, labelled with what happens next, and free from competing buttons of equal weight? Is the configurator path visible on every veranda or structure view, and add-to-cart on other products?
- **Trust signals:** are specs (dimensions, materials, load ratings), the guarantee, reviews and delivery terms (time, costs) shown near the decision point, concrete rather than vague?
- **Friction:** count the steps and distractions between arrival and the configurator or cart: hidden or unclear prices, surprise costs, extra fields, dead ends, a quote detour, choices without guidance, long DE/FR labels that push the CTA below the fold.

## 6. Report

Rank the findings by impact:

- **P0 Blocking:** the visitor can't reach or complete the primary action, or the page misleads (wrong purchase path, quote CTA, hidden price).
- **P1 Major:** a brand-system break customers see (orange action, off-system colours, broken component patterns), an AA failure outside the known exceptions, or broken mobile layout.
- **P2 Minor:** craft-floor misses and refine items with a workaround.
- **P3 Polish:** small inconsistencies. Keep P3 short; noise hides what matters.

Use this structure:

```markdown
**Verdict:** one or two sentences: does it hold the Tuinmaximaal system, and what matters most.

### Findings
1. **[P1] Orange primary button** · `button.bg-tmx-primary-orange`
   - Rule: DESIGN.md → Colors: orange is an accent only; the primary button is #809700 (Buttons → Primary).
   - Impact: the action reads as a price or promotion; white on orange is 2.52:1 at 16px.
   - Fix: `class="btn btn-primary"` (or `bg-btn-primary border-b-4 border-btn-primary text-btn-primary pt-3 pb-2`).
2. …

### CRO
- **CTA visibility:** assessment and the finding numbers it relates to.
- **Trust signals:** what is present, what is missing.
- **Friction:** the path to the configurator or cart, and what slows it.

### What works
- Patterns to keep.

### Theme-level notes
- Known theme exceptions touched by this page (if any).
```

Every finding has a location, the rule it breaks (a DESIGN.md section or a craft-floor item), the impact and a concrete fix in theme classes. A combined issue (e.g. an orange button that is also a quote CTA) may be one finding, as long as each broken rule is named. Offer to apply the fixes, or to build variants of the weakest part with the build job.
