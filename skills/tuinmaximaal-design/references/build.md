# Build: a throwaway prototype with variants

A prototype is throwaway code that answers one design question. It holds several structurally different variants in one file, below a light page frame, with a floating switcher. The user flips between them, picks one or combines parts, and the file is thrown away. It never goes into the theme repo.

## 1. Shape

Pin down five things, from the request where possible, and a sixth for a redesign:

- **Question:** what the variants should settle, e.g. "where does the configurator CTA work best on the veranda PDP?"
- **Page goal:** what the visitor should do or understand.
- **Audience:** who arrives, from where, at which decision moment (see DESIGN.md → Overview).
- **Primary action:** the configurator for verandas and structures, the cart for every other product. Never a quote request.
- **N:** the number of variants. The default is 3 and the maximum is 5; beyond 5 they stop being different and turn into noise. If the user asks for more, build 5 and say why.
- **Source (redesigns only):** the page being redesigned and whether its copy is kept, e.g. `Source: /schuifwand, keep the copy.` The reviewer checks the copy against it. In a later round, add the agreed base and the one open question (step 3 → Later rounds).

Ask only for what is missing and can't be assumed. Otherwise assume, and write the whole shape as one line at the top of the file, replacing `PLAN_LINE` in the skeleton:

> `<!-- PLAN: Question: where does the configurator CTA work best? Goal: start configuring. Audience: returning visitors comparing sizes. Primary action: configurator. N: 3. -->`

**Start from the closest approved example.** When [examples.md](examples.md) has one for the page type (a category landing, for now), start from it instead of from scratch. Copy its parts file as the start of yours; it holds only the author's markup, so reading it is cheap. Keep its structure and patterns, and replace its copy, images, prices and needs with the source page's own. The example is the agreed base, so the variants vary only the question, as in a later round (step 3 → Later rounds). Add it to the plan line, e.g. `Base: examples/category-landing.`, and check the do/don't pairs in examples.md before drafting.

## 2. Pick the format

- **HTML** by default: one self-contained file that opens anywhere.
- **React** when the UI has real state worth judging: configurator steps, filters, a size picker that updates the price. Write it inside the same HTML skeleton, with React and ReactDOM loaded from a CDN (`https://unpkg.com/react@18/umd/react.production.min.js`, `https://unpkg.com/react-dom@18/umd/react-dom.production.min.js`) and JSX through `@babel/standalone` in a `<script type="text/babel">`. Don't use a bare React artifact: it can't load the theme's Tailwind config, so the semantic colour classes wouldn't exist. State lives in memory; nothing is saved and no real request or mutation is made.

## 3. Draft structurally different variants

Every variant answers the same question with a different structure. Vary at least one of these axes per variant, and preferably more than one:

- **Layout:** stacked single column, a two-column split, a sidebar, a sticky summary bar, a stepped flow. Never a content carousel: content stacks vertically (DESIGN.md → Layout → Vertical flow).
- **Hierarchy:** what the eye meets first: the price, the proof (specs, guarantee, and reviews only where they are enabled: DESIGN.md → Components → Reviews), the product image, or the choice to make.
- **Primary affordance:** where and how the one primary action appears: inline after the proof, sticky on scroll, at the top next to the price, as the first step of a guided flow.
- **Composition and expression:** how the view carries the brand, with the options in DESIGN.md → Expression: image-led (a large, contained lifestyle or project photo carries the view), editorial and asymmetric (uneven splits, text beside a large photo), calm (one big moment with generous space) or dense (proof packed tight).

At least one variant per set is **bold**: it takes a deliberate position with the expression options, further than feels safe, and its trade-off line starts with "Bold:". The set then spans the safe answer and the brave one, so the comparison shows what expression costs and earns. Boldness stays inside the register and the container: on product surfaces the product photo and price box remain the big moment, and the bold variant composes around them (a gallery that fills the container width, an editorial split, a dense proof band on sand); the large lifestyle photo belongs to brand-forward pages. Nothing bleeds past the container, not even in the bold variant.

Bold is bold within the house patterns (DESIGN.md → Expression). It may change the composition (splits, order, density, one large contained photo), the photography (which of the page's images leads, and how large) and the highlight. It may not change the interaction model or the content: no need filter, no card floating over a photo, no product or content carousel, no custom drawing, chart or big number, and no copy the page doesn't have. A bold variant that needs one of these is the wrong bold; take a further position on composition instead.

**Later rounds.** Once the user agrees a direction ("A, but with the tabs from C"), the next round builds every variant on that agreed base and varies only the question still open. Name that question in the plan line; everything else stays as agreed, and a variant that re-opens a settled part is redone.

Every variant, bold or not, follows these rules:

- **Containers:** all content and all images sit inside the container. Only the beige intro, page chrome and tinted tile bands may run full width, as colour bands with contained content (DESIGN.md → Layout).
- **Beige intro:** a variant that is a whole page opens with a beige first section for its page type (a single section or component sits where it would on its page): the H1, intro and an optional CTA on content, brand and service pages; the H1 and intro beside a modest photo on a category page or landing, never large image tiles (those are the homepage's), with its link tiles or product-line cards on white after it; the gallery and buy-box row, with the buy box white on beige, on a product page. After it the background is white by default (DESIGN.md → Layout → Beige intro).
- **Surfaces:** white, beige and sand only, on the ladder (on white: beige, then sand; on beige: white; on sand: white or green), and at most one green emphasis block with white text. Change surface every one or two sections (a band, a box or a beige split image), so no variant runs a long bare-white stretch (DESIGN.md → Elevation & Depth → Surfaces).
- **The box decision:** decide for every block, in this order (DESIGN.md → Elevation & Depth → The box decision):
  1. Is it a card that repeats (product tile, blog tile, review, link card, FAQ row)? A white `rounded-2` card: with `border border-border` on white, without a border on a beige or sand band.
  2. Is it the one block that needs emphasis (a quote, a text + image block, a promo)? A beige surface box with `rounded-2` and no border; sand for a stronger step. With an image or video, use the skeleton's split image (`.split-image` > `.split-image-media` + `.split-image-text`, DESIGN.md → Components → Content patterns → Split image), short or long copy alike: the text sets the height and the image covers its half up to the box edges. Without a box, the same component takes `--plain`. Never hand-build it, never a padded box with a separately rounded image inside, and never an image in the grid flow that sets the height itself. A product split image stays light: the name, the price, the first sentence, the USP list and two buttons; no "Lees meer", no icon rows, no colour lines (DESIGN.md → Content patterns → Split image).
  3. Anything else (running text, text + image, video + text, a gallery, the SEO text): no box. Contain it and separate it with whitespace; round its images with `rounded-2`.

  Filter groups keep a box each, outlined or borderless beige, one style for all. Never one wrapper around everything. Coloured boxes have no border. Nest one level at most, and only when the inner box changes surface. On a category grid, follow DESIGN.md → Elevation & Depth → Category grid. Use the Figma patterns in DESIGN.md → Components → Content patterns (split image, image tile, image-text item, blog tile, reviews, quote, accordion and FAQ, carousel arrows) and DESIGN.md → Components → Forms, Pagination and Dialogs instead of inventing a new treatment.
- **Price box:** size it by its component from DESIGN.md → Components → Price box: the theme's 16px chip on a product tile, the promo-label chip ("vanaf" plus the amount) on an image tile or promo, the largest price in the buy box. Never one size for every price on the page.
- **Choices:** checkboxes, radios, swatches and selectable cards follow DESIGN.md → Components → Choices (sizes, dimensions and colours are swatches; the quantity is the plus-and-minus selector; an item's actions are the action menu): `.field.choice` rows, `label.option-card` for a choice with a hint, price or logo (its input `sr-only` only on a swatch or size tile), and `.product-option` for an add-on product with a photo. The skeleton styles their selected and focus states. Never write `has-[:checked]:` or any other `has-[…]:` variant: it is an arbitrary variant.
- **Text on photos:** white text on a photo (the image tile) always sits on the scrim from DESIGN.md → Components → Content patterns → Image tile. No card, box or panel floats over or overlaps a photo.
- **Vertical flow:** content stacks vertically, mobile-first; no content carousel. Only the theme's own sliders, such as related products, may slide. "+ Lees meer" for secondary text in cards appears in one section per page at most.
- **No eyebrows:** no eyebrow or kicker label above a heading, on any page type. Uppercase `paragraph-tiny` appears only inside badges and pills.
- **Buttons:** Figma's styles and sizes (DESIGN.md → Buttons). XL, with no size class, is the default; `--s`, `--m`, `--l` and `--2xl` are for the cases it lists, and the theme's `btn-size-*` classes are never used. A link-like action is `btn-transparent` (`--flush` when it starts a text column), and `btn-tertiary` is the grey outline. Icons take `--icon-leading`, `--icon-trailing` or `--icon-only`. Buttons side by side share a size and are `gap-2` apart (`flex flex-wrap gap-2`). A full-width CTA is `btn btn-primary w-full`.
- **Tilt:** every heading highlight, paragraph highlight, price box and promo label tilts −2°.

Colour, copy or icon swaps never count as a variant: all variants use the same design system. After drafting, compare them pairwise. If two share the same layout, hierarchy, primary affordance and composition, redo one with an explicit exclusion ("not a two-column split"). Each variant may drop the others' layout entirely; only the page frame is shared.

Give each variant a short name (e.g. "Sidebar layout") and one trade-off line that says what it tests and what it gives up:

> "Tests whether proof before price lifts configurator starts, at the cost of a lower price position."
>
> "Bold: tests whether a full-width project photo under a highlighted heading makes the landing page sell the finished garden, at the cost of the first product tile moving below the fold."

Every variant still meets the brand essentials in SKILL.md: one primary button per view, the configurator or cart path visible, orange only on price, highlights, badges and the main menu's active item, and one big moment for the page's register (DESIGN.md → Expression).

## 4. Wire it together

The prototype is the skeleton in [../assets/prototype-skeleton.html](../assets/prototype-skeleton.html) with the Tailwind config, the logo and your parts filled in. You write only the parts: the plan line, the variant registry and the variant sections, plus an optional title, extra head tags, breadcrumb and body scripts.

**The parts:**

1. **Plan:** the shape line from step 1.
2. **Registry:** one entry per variant in `prototype-variants`: `key` (A, B, C…), `name` and `tradeoff`. The switcher reads it.
3. **Sections:** each variant in the `<main>` as `<section data-variant="KEY">`. Don't put display classes on the section itself; wrap the variant's layout in a child element. In React, render the sections from the root; the switcher also hides sections that are rendered later.
4. **Markup:** the skeleton's component styles stay as they are: the block between the `design-sync` markers is the theme's own component CSS, regenerated by the sync, so it uses the theme's selectors. Write the theme's markup to match: `.btn btn-primary`; `.field` > `label` + `.control` > `.form-input`; `.field choice` > `input` + `label` for checkboxes and radios; `.message info` > `svg` + `span`; `.price-container` > `.price` for the orange price, `.old-price` > `.price` for the struck-through one; `label.option-card` > `input.sr-only` + content for a selectable card; `.split-image` > `.split-image-media` > `img` + `.split-image-text` > heading, `p`, `.split-image-actions` for the split image; `ul.list-usps` > `li` > `.list-text`; `.product-tile` > `.product-tile-info` > `.product-tile-name`. Extra styles go in a separate `<style type="text/tailwindcss">` block in the head, and every class in an `@apply` must exist in the config: one unknown class stops the Tailwind CDN from building the whole style block.
5. **Frame:** keep the page frame as it is: one green `h-15` bar with the `h-11` logo inside, at every breakpoint, and nothing else: no breadcrumb, menu or USP bar. It doesn't invite reviewers to compare a hand-built shell with production, so they judge the variants. The variant sits below it on white and opens with its own beige intro section (step 3); don't colour `<body>`. Only when the question is about the header, menu or footer, use the full shell in [../assets/page-shell.html](../assets/page-shell.html) instead: its header part replaces the frame, its footer goes after `</main>`, and you give it a breadcrumb.
6. **Switcher:** keep it as is. It shows ← / "B (Sidebar layout)" plus the trade-off / →, cycles with the arrow keys except while an input, select, textarea or contenteditable is focused, and keeps the variant in `?variant=` so a link is shareable and survives a reload. It is prototype chrome: black and pill-shaped, so it reads as separate from the design.

**Assembly by script, where you can run `node` (Claude Code):** don't read the skeleton, the config or the logo; the script fills them in, so a truncated config or an altered logo can't happen. Write the parts to `<name>.parts.html` in the folder step 7 picks, each slot opened by a `<!-- slot: NAME -->` line:

```html
<!-- slot: plan -->
Question: where does the configurator CTA work best? Goal: start configuring. Audience: returning visitors comparing sizes. Primary action: configurator. N: 3.
<!-- slot: title -->
Veranda PDP
<!-- slot: variants -->
[
  { "key": "A", "name": "Sidebar layout", "tradeoff": "Tests whether …, at the cost of …" }
]
<!-- slot: head -->
<style type="text/tailwindcss">…</style>
<!-- slot: main -->
<section data-variant="A">…</section>
<!-- slot: scripts -->
<script type="text/babel">…</script>
```

`plan`, `variants` and `main` are required. The optional slots are `title`, `head` (extra styles, the React and Babel scripts), `breadcrumb` (its text switches to the full shell) and `scripts` (the React root). Write every `data-variant="KEY"` literally, in `main` or in the JSX in `scripts`. Then run, with the skill's own folder:

```bash
node <skill folder>/scripts/assemble.mjs <folder>/<name>.parts.html <folder>/<name>.html
```

The script writes the self-contained file, or exits non-zero without writing and names the problem: a missing, empty, repeated or unknown slot, invalid registry JSON, an entry without a key, name or trade-off, repeated keys, more than 5 variants, a key without its section or a section without its key, or a placeholder left unfilled. Fix the parts file and run it again; never patch the output by hand.

**Inline assembly, where you can't run `node` (claude.ai, Desktop) or the script is missing:** fill the skeleton yourself, which gives the same file:

1. Replace `PLAN_LINE` with the plan and `TAILWIND_CONFIG` with the full contents of [../assets/tailwind.config.js](../assets/tailwind.config.js).
2. Replace `LOGO_SVG` with the full contents of [../assets/logo.svg](../assets/logo.svg) (the theme's own logo), adding `class="h-11 w-auto" aria-hidden="true"` to its `<svg>` tag (the same height at every breakpoint, in the frame and the full shell). Inline it; never link to the file, so the prototype stays self-contained.
3. Replace the registry's example entry with yours, and the example section in `<main>` with your sections.
4. Put extra head tags just before `</head>` and body scripts just before `</body>`. A title makes the `<title>` read `PROTOTYPE · <title> · Tuinmaximaal`. For the full shell, drop the shell's leading comment, fill its `LOGO_SVG` and `BREADCRUMB`, swap the skeleton's page-frame comment and `<header>` for the part above `<main>…</main>`, and put the rest after `</main>`.

Colour only with the semantic tokens and the Tailwind defaults DESIGN.md → Colors names (`bg-surface`, `text-text-muted`, `border-border`, never `tmx-*`), next to the theme's component classes, on the scales in DESIGN.md. No arbitrary values (`p-[13px]`, `text-[#123456]`), no inline styles, no new colours. If a value you need doesn't exist, use the nearest token and list the gap in the hand-over. Use inline SVG icons in `currentColor`.

## 5. Copy and assets

Follow the delegation rules in SKILL.md. A redesign that keeps the copy (DESIGN.md → Overview → Redesigns) uses the page's own copy and images only: reorder, split and trim them, but write no new labels, captions, chart titles, stats or headings, and draw no illustrations, diagrams or charts. When a structure needs a label the copy doesn't have, leave the structure out or ask the user for it; a placeholder doesn't make it fine. Write the brand as `Gumax<sup>®</sup>` in markup, also when delegated copy says `Gumax®`; only attribute text (`alt`, `aria-label`) keeps the plain sign. Every text without an approved source is a visible placeholder, e.g. `[PLACEHOLDER: USP about delivery]`. Real prices, dimensions and specs come from the request; otherwise they are placeholders too. Test the longest German or French string the layout will meet: put it in at least one variant.

## 6. Check before delivering

Your own read of a draft you just wrote misses what a fresh reader sees, so a reviewer checks it:

- **With sub-agents (Claude Code):** once the file is written, start one reviewer sub-agent. Give it only the prototype's path and the skill's folder, with this prompt: "Review the prototype at `<path>`. Read `<skill folder>/references/review.md` and follow it." Don't pass the brief, the plan or your reasoning; the reviewer judges the file alone. It returns findings ranked P0–P3. Fix them all in one pass (in the parts file, then run the script again), except any you judge wrong: keep those and say why in the hand-over. Don't start a second review.
- **Without sub-agents:** go through the checks below yourself, as the reviewer would.

The checks:

- The file has N variants (3 by default, at most 5), each with a name and a trade-off line in the registry.
- The variants differ in layout, hierarchy, primary affordance or composition, not in colour or copy.
- Every variant sits below the green logo bar (the full shell only for a question about the header, menu or footer), and the switcher works with buttons and arrow keys and updates `?variant=`.
- At least one variant is bold, and its trade-off line starts with "Bold:". It is bold in composition, photography or the highlight, not through a need filter, a floating card, a carousel or a drawing. In a later round, every variant shares the agreed base and varies only the open question.
- **Keep the copy:** in a redesign that keeps the copy, every heading, label, caption and number comes from the source page, and every image is one of its own. No new labels, chart titles or stats; no illustrations, diagrams, bar charts or big numbers. Data the page holds shows as icons and ticks.
- **Flow:** no content carousel (only the theme's own sliders, such as related products), and no card, box or panel over or overlapping a photo.
- **Rhythm:** the surface changes every one or two sections; there is no run of three bare-white sections. A category or landing intro is the H1 and intro beside a modest photo, not large image tiles.
- **Borders:** whitespace and surface changes do the separating. Borders appear only on theme components that own one (inputs, checkboxes, radios, secondary button, selected card), on repeated cards on white, on outlined filter boxes, or where two white surfaces meet and space can't separate them; any other white container on a white page has none, and cards on a tinted band have none.
- **Big moment:** each variant has exactly one, matching the register: the product photo plus the price box on product surfaces, a large contained image with an orange heading highlight, a large project photo or the intro's image tiles on brand-forward pages.
- **Containers:** every image and every piece of content sits inside the container; only the beige intro, page chrome and tinted tile bands run full width, as colour bands.
- **Beige intro:** each whole-page variant opens with the beige first section for its page type, and the background after it is white unless a box or band says otherwise.
- **Surfaces:** only white, beige and sand on the ladder, at most one green block.
- **Box decision:** go block by block and name its treatment: card (repeated: outlined on white, borderless on a tinted band), beige box (the one block that needs emphasis) or no box (everything else). No running text boxed on white just to separate it; every text + image block uses the skeleton's `split-image` classes (beige, or `--plain`), with the image covering its half (no beige strip above or below the image, no image in a padded box, no own margin or width on the block); a product split image holds only the name, price, first sentence, USP list and two buttons, with no "Lees meer", icon rows or colour lines; "+ Lees meer" in cards appears in one section at most; no wrapper around everything; no border on a coloured box; nesting one level deep at most, and only with a change of surface.
- **Price box:** each price chip matches its component in DESIGN.md → Components → Price box (no 16px chip on an image tile, no promo-size chip on a product tile).
- **Option cards:** selectable cards use `.option-card` or `.product-option`; there is no `has-[` in the file.
- **Scrim:** every piece of white text on a photo sits on the scrim.
- **Buttons and brand:** buttons side by side are `gap-2` apart and share a size, no theme `btn-size-*` class is used, and there is no bare `Gumax®` in page text (it is `Gumax<sup>®</sup>`; only attribute text keeps the plain sign).
- **Restraint:** no eyebrow or kicker label above any heading, no 2XL button the brief didn't ask for, and every highlight, price box and promo label tilted −2°.
- **Images:** list every image in the file with one line each: product media or editorial, its ratio, and its crop. Product media (the gallery, packshots, product and category tile images, a product photo in any card) are 16:9 (`aspect-video`) at every breakpoint and never stretched off it by `size-full object-cover` in a card of another shape. Lifestyle and project photos are editorial: never `aspect-video` or `md:aspect-video` (the blog tile's photo is the one exception, 16:9 as DESIGN.md → Components → Content patterns gives it), but the ratio the composition asks for, inside the container with `rounded-2`. Fix any line that breaks this before delivering.
- **Logo-swap test:** with another retailer's logo, no variant would still work unchanged. Where one would, add a brand moment: a highlight, a project photo, a warm surface, specific proof.
- Every class comes from the theme config; there are no arbitrary values.
- The primary action is the #809700 button; orange appears only on price, highlight, badge or the main menu's active item. In-page tabs mark the active tab with the beige pill, not an orange bar.
- Text pairs meet AA contrast, apart from the theme's documented exceptions in DESIGN.md.
- Each variant meets the craft floor in [audit.md](audit.md) → Craft floor: headings that stand without a label above them, emphasis from weight, size and the orange highlight.
- Each variant works at 375px, `md` and `xl`, and holds with the long DE/FR string.
- All copy is delegated, taken from the source page, or visibly marked as a placeholder.
- **Build traps:** five that earlier rounds hit. Check each in the rendered file, not the markup alone:
  - **Screen-reader text in a scroll container.** An `sr-only` element is absolutely positioned; inside a scroll container without a position (an `overflow-x-auto` tab row or table wrapper) it escapes to the page and widens it at 375px. The skeleton makes scroll containers and `.option-card` `relative`; a hand-built scroller with other overflow classes needs `relative` too. Check: at 375px the page doesn't scroll sideways (`document.documentElement.scrollWidth` equals the viewport width).
  - **A fieldset that won't shrink.** A `fieldset` keeps its content's minimum width, so a row of cards in it pushes the page wider. The skeleton gives every `fieldset` `min-w-0`; don't override it.
  - **Measuring before Tailwind has styled the page.** The Tailwind CDN builds the styles after the page's scripts run, so a script that measures layout (a sticky offset, a scroll spy, a tab indicator) at load reads unstyled sizes. Measure inside a `ResizeObserver` callback on the element (or re-measure on resize), never once at start-up.
  - **An override in the wrong layer.** Some theme rules in the skeleton sit outside any `@layer` (`.message`, `.form-select`), and an unlayered rule beats every layer, so an override of one inside `@layer components` silently loses. Write such an override in a plain `<style type="text/tailwindcss">` rule, outside any layer, and check the computed value.
  - **Lazy images in screenshots.** Automated full-page screenshots don't scroll, so `loading="lazy"` images below the fold stay blank. The skeleton switches lazy images to eager loading; images a script adds later are switched too. Check that every image in a screenshot has loaded before judging it.

## 7. Deliver and hand over

- **claude.ai or Desktop:** deliver the file as an HTML artifact.
- **Claude Code:** write it (and its parts file) to `tmp/prototypes/<name>.html` in the workspace and give the path. Before writing, run `git check-ignore -q tmp/prototypes/<name>.html`. Exit code 0 means the path is ignored; 128 means the folder isn't a Git repository, which is fine too. Exit code 1 means Git would pick the file up: write it to `tuinmaximaal-prototypes/` in the system temp folder instead, don't edit the repository's `.gitignore`, and say so in the hand-over. Open the file through a local server if `file://` blocks the CDN.

In the hand-over, list each variant as `key (name): trade-off`, explain that `?variant=B` opens a variant directly, and name any missing tokens or placeholder facts. After a review by a sub-agent, add a short **Review** list: each finding with its rank and what you changed, or why you kept it. Invite mix-and-match feedback: "I want the header from B with the sidebar from C" is usually the design the user actually wants, and the next round combines it.
