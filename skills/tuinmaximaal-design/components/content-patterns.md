# Content patterns

A component file of [DESIGN.md](../DESIGN.md) → Components. A section named without a file, such as Colors or Elevation & Depth, is DESIGN.md's.

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

  - **On beige** (the default): one beige box, `rounded-2` and `overflow-hidden`. Below `lg` the photo sits on top (`h-64`, `h-90` from `sm`, Figma's 360px) with the text under it at `p-6`. From `lg` it is two equal halves: the photo covers its half flush to the box edges (at least `min-h-80`) and the text sets the height at `p-12`. It is the "one block that needs emphasis" with an image (Elevation & Depth → The box decision); several in a row, such as one per product line, alternate the image side. The box is always beige (`bg-surface`): a split image never takes sand. Where the section needs a stronger step, it sits on a full-width sand band as a whole, and its split images turn `--plain` (Elevation & Depth → Surfaces).
  - **Plain** (`--plain`): no box. The photo is `rounded-2` on its own, stacked above the text below `md` (`gap-6`), and from `md` beside it (`gap-6`, `gap-12` from `lg`), stretched to the text's height (at least `min-h-64`), with the text centred against it. This is the box decision's unboxed "text + image", on white or on a beige or sand band.
  - **Text:** `gap-4` (16px), top-aligned in the beige box. The heading is a plain `h2` (24px black) with Figma's 32px line-height. The optional intro is `text-4.5 font-medium` (18px), the paragraphs body text. The optional quote is 24px regular (`text-6`) with `py-4`, behind Figma's quote mark in bone (`surface-strong` #E0D2C5, decorative, `aria-hidden`). Buttons, when the block has them, sit in `split-image-actions`: 8px more above them (`mt-2`), a primary beside a secondary, `gap-2` apart. The paragraphs and the quote are at 90%, as Figma sets them. In a keep-the-copy redesign the intro and quote appear only when the copy has them.
  - **The image covers its half:** it is absolutely positioned (`absolute inset-0 size-full object-cover`), so it never sets the height and, on beige, never leaves a strip above or below it. A video gets `split-image-play` over it: a 20% black wash with a centred white play icon of `size-25` (100px), as a `button` with an accessible name. The block sits in the container as a direct child of its section, never inside another box, without margins or widths of its own; the section's gap spaces it. Never a padded box with a separately rounded image inside it, and never an image in the grid flow with `h-full`, which lets the photo's own ratio set the height.

  **A product split image stays light.** It holds the product name, the price (the promo-label chip, Price box), the first sentence of the copy, the USP list and the two buttons, nothing else. It has no "Lees meer": opening it grows the text, and the flush photo stretches with it. It has no icon rows and no colour lines such as "Handgrepen in 3 kleuren". The rest of the copy goes to a section of its own: feature cards with a read-more or a drawer (Read more, below; components/dialogs.md → Drawer).
- **Product card (stacked).** The other product block, for two or three product lines that the visitor compares side by side: the same light content as the product split image (name, price chip, first sentence, USP list, two buttons), stacked under a 16:9 photo (`w-full aspect-video object-cover`) in a beige card without a border (`flex flex-col overflow-hidden rounded-2 bg-surface`, text `p-6 lg:p-8`), its two buttons stacked full width (`mt-auto flex flex-col gap-2 pt-2`, each `w-full h-auto min-h-12 py-2.5`): a long label such as "Stel samen met een terrasoverkapping" wraps onto two lines at 375px, and the button grows with it instead of clipping the text. The cards sit in the skeleton's `card-grid`: as many columns of at least 384px as fit (`--wide`: 448px), one below that, `gap-6`. Auto-fill keeps its empty columns, so two cards at `xl` fill two of three 384px columns, or two 448px columns with `--wide`. Four or more product lines take the split image, one under the other. The cards take the anchors of the sticky product tabs; cards side by side share a top, so the tab script marks the first of them.
- **Read more.** Secondary text in a card opens in place with the skeleton's `read-more`: the first sentence shows, the rest opens between it and the toggle, and the toggle reads "Lees minder" while open, so the button always sits under the text it controls. The text stays in the HTML (SEO). One section per page uses it; for longer copy, or copy with data or a photo of its own, use the drawer instead (components/dialogs.md → Drawer). Never a `details` whose summary sits above the opened text.

  ```html
  <p>…first sentence…</p>
  <div class="read-more">
      <div class="read-more-body" id="more-id"><div class="read-more-inner"><div class="flex flex-col gap-4 pb-2"><p>…the rest…</p></div></div></div>
      <button type="button" class="btn btn-transparent --flush --icon-leading read-more-toggle" aria-expanded="false" aria-controls="more-id" data-label-closed="Lees meer" data-label-open="Lees minder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg><span>Lees meer</span></button>
  </div>
  ```

  The body opens by its grid rows (0fr to 1fr, 200ms, none with reduced motion) and the plus turns into a cross. Cards in a grid keep equal heights: the grid stretches every card in a row (`flex h-full flex-col`), so an opened card grows its whole row.
- **Feature card.** A repeated white card for one feature or benefit (borderless on a sand band, outlined on white): either an icon tile (`size-12 rounded-2 bg-surface`, a 24px outline icon) or a 16:9 image on top, then a `heading-4` title, the first sentence, and its way to the rest: a read-more, or "Ontdek meer" beside a filled round plus (the label bold, the plus a `btn-fill` circle of `size-8` with a 16px plus, the whole row one `button` with `data-dialog-open`, at least `min-h-11`) that opens the feature's drawer. Icon tiles are always beige (`bg-surface`), in a card and in the comparison table alike. Cards in a grid keep equal heights. Icons make a grid scannable where the page has no photo per feature; they are icons, never drawings.
- **Feature slider.** Apple's "Why buy" row and Figma `57:3252` (file "Tuinmaximaal website"), for the feature cards below the products, on [Swiper](https://swiperjs.com/), which the theme already ships (Amasty_LibSwiperJs): swipe and drag on touch and mouse, no scrollbar. In a prototype, load `swiper@11/swiper-bundle.min.css` and `.js` from jsDelivr in the head.

  ```html
  <div class="feature-slider bg-surface-raised">
      <div class="container py-12">
          <div class="swiper"><div class="swiper-wrapper">
              <div class="swiper-slide"><article class="flex h-full flex-col overflow-hidden rounded-2 bg-white">…16:9 image, title, first sentence, <button class="btn btn-fill --m --icon-only --round" data-dialog-open="…" aria-label="Ontdek meer: …">…plus…</button></article></div>
          </div></div>
          <div class="feature-slider-nav"><button class="slider-arrow" data-slider-prev aria-label="Vorige">…</button><button class="slider-arrow" data-slider-next aria-label="Volgende">…</button></div>
      </div>
  </div>
  ```

  - **Row:** it starts at the container's left edge and runs out to the right edge of the screen; the full-width band clips it, so the page never scrolls sideways. Slides are `w-4/5` (`w-80` from `sm`) and `gap-4` apart (`slidesPerView: 'auto'`, `spaceBetween: 16`), all the same height.
  - **Cards:** every slide is the same white card: a 16:9 image, a `heading-4` title, the first sentence, and the filled plus at the bottom right (`--m`, 40px, with a 44px hit area) that opens the feature's drawer (components/dialogs.md → Drawer). One colour for every card: the green block, or any card of another surface, sits outside the row.
  - **Navigation:** under the row, right-aligned, only the two slider arrows; no pagination dots, the arrows are the pagination. Round `size-12`, a `secondary` fill (lime, `secondary-strong` on hover) while they can move, an outline (`border-strong` at 40%, a muted arrow) at their end. No shadow.
  - **Script:** `new Swiper(…, { slidesPerView: 'auto', spaceBetween: 16, observer: true, observeParents: true, navigation })`. Its keyboard module stays off in a prototype, because the arrow keys switch variants; the observer re-measures a slider in a variant that was hidden.

  Only feature cards slide: the products, their prices and their buttons stack. A page with three or more feature or benefit cards gets the feature slider in at least one variant of a build (build.md → 4).
- **Image tile.** Figma `1530:37197` and the homepage's category entries. A contained lifestyle photo with `rounded-2` and `overflow-hidden`, with a soft dark scrim behind the text (`bg-gradient-to-br from-gray-900/60 via-transparent to-transparent` over the top left, and the same `to-tr` over the bottom left). It holds a white heading top left in `text-7 font-black` (the promo banner's title; Figma draws 30px), a price chip under it at the image-tile size (Price box), and a default-size primary button bottom left ("Stel nu samen", "Bekijk producten"). A tile without a price ("Losse onderdelen", "Zelf monteren of via partner?") keeps the heading and the button. Two or six tiles in the intro are the big moment of the homepage; a category or landing intro uses the H1 and intro beside a modest photo instead (Layout → Beige intro). The scrim is required: white text never sits on a bare photo.
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
- **Blog tile.** A repeated card: a photo at 16:9 (`aspect-video`), rounded at the top, then `p-4` with a category pill (`bg-gray-50 rounded-full text-3.5 px-3 py-1`), a `text-4 font-semibold` title, a `text-3.5` excerpt clamped to 3 lines (`line-clamp-3`) and a flush transparent "Lees verder" button with a trailing arrow (`btn btn-transparent --flush --icon-trailing`). Outlined on white, borderless on a tinted band.
- **Review cards.** Only when reviews are enabled (components/reviews.md). Outlined white cards on white, with the reviews summary above them.
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
- **Comparison table ("Alle …").** Below the product blocks, one table compares the products on the needs the copy names: a column per product (a 16:9 thumbnail and the short name, linking to its block, and from `lg` the product-tile price chip), then a row per need with a tick (the check-circle in `secondary`) or a grey dash, each with `sr-only` "ja" or "nee". From `sm` each need has its beige icon tile (`size-8 rounded-1 bg-surface`). Everything in a product column is centred: the header (`flex flex-col items-center text-center`), the price chip, each tick (`text-center`, the icon `inline-block`) and the button. From `md` it adds a row of colour swatches, and from `lg` a row with a full-width primary button per product. With two or three products it fits 375px without sideways scrolling: `w-full table-fixed`, short names that may wrap (`break-words hyphens-auto`), the need icons only from `sm`, the colour row only from `md` (`hidden md:table-row`), and the button row and price chips only from `lg`. With four or more, the columns get too narrow and the names wrap badly, so the table scrolls sideways inside the container: the wrapper `overflow-x-auto snap-x scroll-pl-36`, the table `w-max min-w-full`, the label column sticky (`sticky left-0 z-10 bg-white w-36 min-w-36`), each product column `w-32 min-w-32 snap-start`. It scrolls only where the columns don't fit, and the page itself never scrolls sideways (build.md → Build traps). No cards in the table; in a keep-the-copy redesign every label comes from the page (Overview → Redesigns). See the approved example ([assets/examples/category-landing.html](assets/examples/category-landing.html)).
- **Carousel arrows.** The theme's slider buttons, for the theme's own sliders (Layout → Vertical flow): `size-12` white squares at 90% opacity (`bg-white/90`), `rounded-1`, `shadow-arrow`, a green arrow icon, placed over the images. The feature slider has its own round arrows without a shadow (Feature slider). Figma adds a light-grey border; the theme has none, and the theme wins.
- **Buttons.** Default size everywhere (48px high), a primary beside a secondary where a block offers two actions, `gap-2` apart (Buttons).
