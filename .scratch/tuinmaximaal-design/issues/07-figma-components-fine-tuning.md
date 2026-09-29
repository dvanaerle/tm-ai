# 07: Fine-tuning from the Figma components

**What to build:** The skill's fourth iteration, from the user's review of the i3 prototypes against the house Figma components ([Tuinmaximaal website → Content (Desktop)](https://www.figma.com/design/wDIT75ExH0XtOnYIrozPlM/Tuinmaximaal-website?node-id=1358-29886), node `1358:29886`) and two screenshots of live components (product tiles, and category image tiles on the homepage). The prototypes were "almost there" but box every piece of content the same way. The user gets prototypes that decide, per block, between no box, a surface box and an outlined card, as the Figma file does, and that size the price box per component. The audit holds the same standard. Figma is the source of truth where it and 05 disagree; the conflicts are listed under **Decisions** so the user can overrule them.

Screenshots of the Figma sections are in `tmp/figma/` (ignored), and node IDs are given below so they can be fetched again.

- **The box decision.** The design document replaces "one box per job" with a three-way decision, stated as a rule the build job applies to every block:
  1. **A card that repeats** (product tile, blog tile, review, link card, FAQ row) is a card. On white it's white with a 1px `tmx-neutral-lightGrey` (#E3E3E3) outline and `rounded-2`. On beige or sand it's white with no border: the surface change does the separating. The one exception is the link card in the intro (below).
  2. **One block that needs emphasis** (a quote, a text + image content block, a promo) is a beige surface box with `rounded-2` and no border. Sand is the stronger step.
  3. **Everything else** has no box: running text in one to four columns, text + image, video + text, a gallery, the SEO text. It's contained and separated by whitespace, with images `rounded-2`. Text on a white page is not put in a box just to separate it.

  Replace "a page is split into boxes, one per job" and "one box per job (intro, each filter group, trust or USP block, SEO text, FAQ, blog)". Filter groups keep their box (outlined, or borderless beige), as agreed in 05. The FAQ becomes a list of outlined rows, and the SEO text sits unboxed with the theme's "Lees meer" fade.
- **Tinted tile bands.** A section of repeated cards may sit on a full-width beige or sand band, with its content contained, to set it apart from the white around it (Figma "Tile's on colored background", `1358:30380`). This loosens 05's container rule: page chrome, the beige intro and tinted tile bands may run full width, as colour bands only. Images and boxes still never bleed.
- **Content block (text + image, background colour).** Figma `1358:30318` and `1358:30329`. A beige box with `rounded-2`, split in half. The text side has generous padding (`p-20` at xl, 80px), an H3 at 32px/40 heavy, body text, and a primary button beside a secondary one. The image fills the other half up to the box edges, with no padding, and is rounded only on its outer corners. The image may sit left or right. This is the pattern for "one block that needs emphasis" with an image, and it replaces a padded box with a separate rounded image inside it.
- **Image tile (category entry with overlay).** Figma `1530:37197` and the user's homepage screenshot. A contained lifestyle photo with `rounded-2` and a soft dark scrim in the top-left and bottom-left corners. It holds a white heading (30px heavy, H2 style) top-left, a price label under the heading, and a default-size primary button bottom-left ("Stel nu samen", "Bekijk producten"). A tile without a price, such as "Losse onderdelen" or "Zelf monteren of via partner?", keeps the heading and the button. Used in the intro (two or six tiles) as the brand-forward big moment on home and category pages. White text on a photo needs the scrim for AA; the build job checks it.
- **Intro link card.** Figma `1358:30013`. In the beige intro, a card with a 1.5px sand (`tmx-secondary-sand`) border on three sides and `rounded-2`, `p-6` text (a 20px bold title and an arrow link in `tmx-primary-lighterGreenSecond`), and a photo flush on the right edge, rounded on its outer corners. Three in a row on desktop. This is the one bordered coloured card; the "no border on a coloured box" rule gets this exception.
- **Price box per component.** The theme's `price` token is 16px weight 900, and the prototypes used that everywhere. The price box scales with its component:

  | Component | Chip | Figma |
  |---|---|---|
  | Product tile | 16px heavy amount, `p-2`, old price 16px medium, struck through, no chip, before it | `1358:30459` |
  | Image tile and promo label | "vanaf" at about 19px demi-bold, then the amount at 28px heavy, `px-2 py-2.5`, gap 6px | `1530:37200` |
  | Product page buy box | Largest on the page; measure it from staging's PDP before building | — |

  All chips are `bg-price`, white text and tilted −2°. The design document gives the table; the build job picks the size by component instead of by the global token. The contrast note ("prices of at least 20px") is corrected: the product tile's 16px heavy price is the theme's own choice, a documented exception like the primary button.
- **Details the Figma file settles.**
  - Blog tile: a 16:9-ish photo, a category pill (`bg-tmx-neutral-lightestGrey`, 14px), a 16px demi-bold title, a 14px excerpt clamped to 3 lines and a "Lees verder →" link. Outlined on white; see Decisions for beige.
  - Review cards: outlined white cards on white, with the Trustpilot-style rating summary as an outlined pill.
  - Quote: a beige box, 18px demi-bold, beside a text column.
  - Carousel arrows: 48px white/90 squares with a light-grey border and a soft shadow, over the images. This is a theme component, the one allowed shadow outside `shadow-arrow`; check it against the theme before documenting.
  - Buttons: default size everywhere (48px high), primary beside secondary, as 05 has it.
- **Carried over from 06.** These failures recurred and the build job's rules didn't stop them:
  - The arbitrary `has-[:checked]:` variant on option cards (i3 prompt 1, i2 prompt 3, issue 03 run 2). The build job names the theme's checked-card pattern to use instead, or a small skeleton class if the theme has none.
  - 16:9 put on lifestyle photos (`md:aspect-video`, i3 prompt 4) and product photos cropped off 16:9 in small cards (`size-full object-cover`, i3 prompt 9). The pre-delivery check says which images are product media and gets a line on each crop.
- **Audit job.** It flags:
  - A box around plain text content on white.
  - A missing outline on repeated white cards on white, or an outline on white cards on a tinted band.
  - A padded content block with a separately rounded image inside, instead of the flush split.
  - A price box sized against its component (a 16px chip on an image tile, a 28px chip on a product tile).
  - White text on a photo without a scrim.
- **Eval set.** The build pass criteria swap "one box per job" for the three-way box decision and add the price box per component. Prompt 2's category grid keeps its agreed layout, with the FAQ as outlined rows. Prompt 8's planted violations still count.

**Decisions** (taken from Figma; the user may overrule them before this starts):

- **Product tile on beige or sand: no border.** The Figma product tiles lose the border on a tinted band. DESIGN.md said "the tile keeps its border on every background", from staging, and the Figma blog tiles keep it on beige. This ticket follows the Figma product tiles for all repeated cards (one rule), so blog tiles on beige lose the border too.
- **Intro link cards: beige with a sand border**, as Figma draws them, as the named exception to "no border on a coloured box".
- **Full-width tinted tile bands: allowed**, as colour bands with contained content.

**Blocked by:** None (can start immediately). Best done after 05 and 06 are committed.

**Status:** done

- [x] The design document states the three-way box decision, the tinted tile band, the content block, image tile, intro link card and blog tile patterns, and the price box table; "one box per job", "the tile keeps its border on every background" and the "prices of at least 20px" contrast wording are gone or corrected.
- [x] The build job's rules and pre-delivery checks apply the box decision per block, pick the price box by component, name the checked-card pattern in place of `has-[:checked]:`, and require a crop line for every image.
- [x] The audit job has every new flag listed above.
- [x] The eval set's build pass criteria include the box decision and the price box per component.
- [x] The sync runs with zero linter errors and no drift errors on the new prose, and the skeleton's component-CSS region is regenerated if any class changed.
- [x] Smoke test: rerunning eval 4 (a content-heavy landing page) gives unboxed text on white, a flush-image content block and correctly sized price chips; rerunning eval 2 gives borderless tiles on a tinted band where one is used, and outlined tiles on white.
