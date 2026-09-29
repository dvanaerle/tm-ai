# Build: a throwaway prototype with variants

A prototype is throwaway code that answers one design question. It holds several structurally different variants in one file, below a light page frame, with a floating switcher. The user flips between them, picks one or combines parts, and the file is thrown away. It never goes into the theme repo.

## 1. Shape

Pin down five things, from the request where possible:

- **Question:** what the variants should settle, e.g. "where does the configurator CTA work best on the veranda PDP?"
- **Page goal:** what the visitor should do or understand.
- **Audience:** who arrives, from where, at which decision moment (see DESIGN.md → Overview).
- **Primary action:** the configurator for verandas and structures, the cart for every other product. Never a quote request.
- **N:** the number of variants. The default is 3 and the maximum is 5; beyond 5 they stop being different and turn into noise. If the user asks for more, build 5 and say why.

Ask only for what is missing and can't be assumed. Otherwise assume, and write the whole shape as one line at the top of the file, replacing `PLAN_LINE` in the skeleton:

> `<!-- PLAN: Question: where does the configurator CTA work best? Goal: start configuring. Audience: returning visitors comparing sizes. Primary action: configurator. N: 3. -->`

## 2. Pick the format

- **HTML** by default: one self-contained file that opens anywhere.
- **React** when the UI has real state worth judging: configurator steps, filters, a size picker that updates the price. Write it inside the same HTML skeleton, with React and ReactDOM loaded from a CDN (`https://unpkg.com/react@18/umd/react.production.min.js`, `https://unpkg.com/react-dom@18/umd/react-dom.production.min.js`) and JSX through `@babel/standalone` in a `<script type="text/babel">`. Don't use a bare React artifact: it can't load the theme's Tailwind config, so the `tmx-*` classes wouldn't exist. State lives in memory; nothing is saved and no real request or mutation is made.

## 3. Draft structurally different variants

Every variant answers the same question with a different structure. Vary at least one of these axes per variant, and preferably more than one:

- **Layout:** stacked single column, a two-column split, a sidebar, a sticky summary bar, a stepped flow.
- **Hierarchy:** what the eye meets first: the price, the proof (specs, reviews, guarantee), the product image, or the choice to make.
- **Primary affordance:** where and how the one primary action appears: inline after the proof, sticky on scroll, at the top next to the price, as the first step of a guided flow.
- **Composition and expression:** how the view carries the brand, with the options in DESIGN.md → Expression: image-led (a large, contained lifestyle or project photo carries the view), editorial and asymmetric (uneven splits, text beside a large photo), calm (one big moment with generous space) or dense (proof packed tight).

At least one variant per set is **bold**: it takes a deliberate position with the expression options, further than feels safe, and its trade-off line starts with "Bold:". The set then spans the safe answer and the brave one, so the comparison shows what expression costs and earns. Boldness stays inside the register and the container: on product surfaces the product photo and price box remain the big moment, and the bold variant composes around them (a gallery that fills the container width, an editorial split, a dense proof band on sand); the large lifestyle photo belongs to brand-forward pages. Nothing bleeds past the container, not even in the bold variant.

Every variant, bold or not, follows these rules:

- **Containers:** all content and all images sit inside the container. Only the beige intro, page chrome and tinted tile bands may run full width, as colour bands with contained content (DESIGN.md → Layout).
- **Beige intro:** a variant that is a whole page opens with a beige first section for its page type (a single section or component sits where it would on its page): the H1, intro and an optional CTA on content, brand and service pages; the H1 and intro with its link tiles or product-line cards on white on a category page; the gallery and buy-box row, with the buy box white on beige, on a product page. After it the background is white by default (DESIGN.md → Layout → Beige intro).
- **Surfaces:** white, beige and sand only, on the ladder (on white: beige, then sand; on beige: white; on sand: white or green), and at most one green emphasis block with white text (DESIGN.md → Elevation & Depth → Surfaces).
- **The box decision:** decide for every block, in this order (DESIGN.md → Elevation & Depth → The box decision):
  1. Is it a card that repeats (product tile, blog tile, review, link card, FAQ row)? A white `rounded-2` card: with `border border-tmx-neutral-lightGrey` on white, without a border on a beige or sand band.
  2. Is it the one block that needs emphasis (a quote, a text + image content block, a promo)? A beige surface box with `rounded-2` and no border; sand for a stronger step. With an image, use the content block: the image fills its half up to the box edges, never a padded box with a separately rounded image inside.
  3. Anything else (running text, text + image, video + text, a gallery, the SEO text): no box. Contain it and separate it with whitespace; round its images with `rounded-2`.

  Filter groups keep a box each, outlined or borderless beige, one style for all. Never one wrapper around everything. Coloured boxes have no border, except the intro link card. Nest one level at most, and only when the inner box changes surface. On a category grid, follow DESIGN.md → Elevation & Depth → Category grid. Use the Figma patterns in DESIGN.md → Components → Content patterns (content block, image tile, intro link card, blog tile, reviews, quote, FAQ, carousel arrows) instead of inventing a new treatment.
- **Price box:** size it by its component from DESIGN.md → Components → Price box: the theme's 16px chip on a product tile, the promo-label chip ("vanaf" plus the amount) on an image tile or promo, the largest price in the buy box. Never one size for every price on the page.
- **Option cards:** a selectable card (colour, size, package) is `label.option-card` around an `sr-only` radio or checkbox and the card's content; the skeleton styles its selected and focus states. Never write `has-[:checked]:` or any other `has-[…]:` variant: it is an arbitrary variant.
- **Text on photos:** white text on a photo (the image tile) always sits on the scrim from DESIGN.md → Components → Content patterns → Image tile.
- **No eyebrows:** no eyebrow or kicker label above a heading, on any page type. Uppercase `paragraph-tiny` appears only inside badges and pills.
- **Buttons:** `btn-size-sm` or the default size only; never `btn-size-lg`. A full-width CTA is `btn btn-primary w-full`.
- **Tilt:** every heading highlight, paragraph highlight, price box and promo label tilts −2°.

Colour, copy or icon swaps never count as a variant: all variants use the same design system. After drafting, compare them pairwise. If two share the same layout, hierarchy, primary affordance and composition, redo one with an explicit exclusion ("not a two-column split"). Each variant may drop the others' layout entirely; only the page frame is shared.

Give each variant a short name (e.g. "Sidebar layout") and one trade-off line that says what it tests and what it gives up:

> "Tests whether proof before price lifts configurator starts, at the cost of a lower price position."
>
> "Bold: tests whether a full-width project photo under a highlighted heading makes the landing page sell the finished garden, at the cost of the first product tile moving below the fold."

Every variant still meets the brand essentials in SKILL.md: one primary button per view, the configurator or cart path visible, orange only on price, highlights, badges and active states, and one big moment for the page's register (DESIGN.md → Expression).

## 4. Wire it together

Start from [../assets/prototype-skeleton.html](../assets/prototype-skeleton.html):

1. Replace `TAILWIND_CONFIG` with the full contents of [../assets/tailwind.config.js](../assets/tailwind.config.js). Keep the skeleton's component styles as they are: the block between the `design-sync` markers is the theme's own component CSS, regenerated by the sync, so it uses the theme's selectors. Write the theme's markup to match: `.btn btn-primary`; `.field` > `label` + `.control` > `.form-input`; `.field choice` > `input` + `label` for checkboxes and radios; `.message info` > `svg` + `span`; `.price-container` > `.price` for the orange price, `.old-price` > `.price` for the struck-through one; `label.option-card` > `input.sr-only` + content for a selectable card; `ul.list-usps` > `li` > `.list-text`; `.product-tile` > `.product-tile-info` > `.product-tile-name`. Extra styles go in a separate `<style type="text/tailwindcss">` block, and every class in an `@apply` must exist in the config: one unknown class stops the Tailwind CDN from building the whole style block.
2. Replace `PLAN_LINE` with the shape line from step 1, and `LOGO_SVG` with the full contents of [../assets/logo.svg](../assets/logo.svg) (the theme's own logo), adding `class="h-11 w-auto" aria-hidden="true"` to its `<svg>` tag (the same height at every breakpoint, in the frame and the full shell). Inline it; never link to the file, so the prototype stays self-contained.
3. Fill the `prototype-variants` registry with one entry per variant: `key` (A, B, C…), `name` and `tradeoff`. The switcher reads it.
4. Put each variant in the `<main>` as `<section data-variant="KEY">`. Don't put display classes on the section itself; wrap the variant's layout in a child element. In React, render the sections from the root; the switcher also hides sections that are rendered later.
5. Keep the page frame as it is: one green `h-15` bar with the `h-11` logo inside, at every breakpoint, and nothing else: no breadcrumb, menu or USP bar. It doesn't invite reviewers to compare a hand-built shell with production, so they judge the variants. The variant sits below it on white and opens with its own beige intro section (step 3); don't colour `<body>`. Only when the question is about the header, menu or footer, swap the frame for the full shell in [../assets/page-shell.html](../assets/page-shell.html): its header part replaces the frame, its footer goes after `</main>`, and you fill its breadcrumb.
6. Keep the switcher as is. It shows ← / "B (Sidebar layout)" plus the trade-off / →, cycles with the arrow keys except while an input, select, textarea or contenteditable is focused, and keeps the variant in `?variant=` so a link is shareable and survives a reload. It is prototype chrome: black and pill-shaped, so it reads as separate from the design.

Use only `tmx-*` and the theme's semantic classes, on the scales in DESIGN.md. No arbitrary values (`p-[13px]`, `text-[#123456]`), no inline styles, no new colours. If a value you need doesn't exist, use the nearest token and list the gap in the hand-over. Use inline SVG icons in `currentColor`.

## 5. Copy and assets

Follow the delegation rules in SKILL.md. Every text without an approved source is a visible placeholder, e.g. `[PLACEHOLDER: USP about delivery]`. Real prices, dimensions and specs come from the request; otherwise they are placeholders too. Test the longest German or French string the layout will meet: put it in at least one variant.

## 6. Check before delivering

- The file has N variants (3 by default, at most 5), each with a name and a trade-off line in the registry.
- The variants differ in layout, hierarchy, primary affordance or composition, not in colour or copy.
- Every variant sits below the green logo bar (the full shell only for a question about the header, menu or footer), and the switcher works with buttons and arrow keys and updates `?variant=`.
- At least one variant is bold, and its trade-off line starts with "Bold:".
- **Borders:** whitespace and surface changes do the separating. Borders appear only on theme components that own one (inputs, checkboxes, radios, secondary button, selected card), on repeated cards on white, on outlined filter boxes, on the intro link card, or where two white surfaces meet and space can't separate them; any other white container on a white page has none, and cards on a tinted band have none.
- **Big moment:** each variant has exactly one, matching the register: the product photo plus the price box on product surfaces, a large contained image with an orange heading highlight, a large project photo or the intro's image tiles on brand-forward pages.
- **Containers:** every image and every piece of content sits inside the container; only the beige intro, page chrome and tinted tile bands run full width, as colour bands.
- **Beige intro:** each whole-page variant opens with the beige first section for its page type, and the background after it is white unless a box or band says otherwise.
- **Surfaces:** only white, beige and sand on the ladder, at most one green block.
- **Box decision:** go block by block and name its treatment: card (repeated: outlined on white, borderless on a tinted band), beige box (the one block that needs emphasis) or no box (everything else). No running text boxed on white just to separate it; a content block with an image has the image flush to its half, not a separately rounded image inside padding; no wrapper around everything; no border on a coloured box except the intro link card; nesting one level deep at most, and only with a change of surface.
- **Price box:** each price chip matches its component in DESIGN.md → Components → Price box (no 16px chip on an image tile, no promo-size chip on a product tile).
- **Option cards:** selectable cards use `.option-card`; there is no `has-[` in the file.
- **Scrim:** every piece of white text on a photo sits on the scrim.
- **Restraint:** no eyebrow or kicker label above any heading, no `btn-size-lg`, and every highlight, price box and promo label tilted −2°.
- **Images:** list every image in the file with one line each: product media or editorial, its ratio, and its crop. Product media (the gallery, packshots, product and category tile images, a product photo in any card) are 16:9 (`aspect-video`) at every breakpoint and never stretched off it by `size-full object-cover` in a card of another shape. Lifestyle and project photos are editorial: never `aspect-video` or `md:aspect-video` (the blog tile's photo is the one exception, 16:9 as DESIGN.md → Components → Content patterns gives it), but the ratio the composition asks for, inside the container with `rounded-2`. Fix any line that breaks this before delivering.
- **Logo-swap test:** with another retailer's logo, no variant would still work unchanged. Where one would, add a brand moment: a highlight, a project photo, a warm surface, specific proof.
- Every class comes from the theme config; there are no arbitrary values.
- The primary action is the #809700 button; orange appears only on price, highlight, badge or active elements.
- Text pairs meet AA contrast, apart from the theme's documented exceptions in DESIGN.md.
- Each variant meets the craft floor in [audit.md](audit.md) → Craft floor: headings that stand without a label above them, emphasis from weight, size and the orange highlight.
- Each variant works at 375px, `md` and `xl`, and holds with the long DE/FR string.
- All copy is delegated or visibly marked as a placeholder.

## 7. Deliver and hand over

- **claude.ai or Desktop:** deliver the file as an HTML artifact.
- **Claude Code:** write it to `tmp/prototypes/<name>.html` in the workspace and give the path. Before writing, run `git check-ignore -q tmp/prototypes/<name>.html`. Exit code 0 means the path is ignored; 128 means the folder isn't a Git repository, which is fine too. Exit code 1 means Git would pick the file up: write it to `tuinmaximaal-prototypes/` in the system temp folder instead, don't edit the repository's `.gitignore`, and say so in the hand-over. Open the file through a local server if `file://` blocks the CDN.

In the hand-over, list each variant as `key (name): trade-off`, explain that `?variant=B` opens a variant directly, and name any missing tokens or placeholder facts. Invite mix-and-match feedback: "I want the header from B with the sidebar from C" is usually the design the user actually wants, and the next round combines it.
