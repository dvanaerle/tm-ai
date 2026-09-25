# SEO — `/bamboe-vlonder` on the new site

Type: issue
Status: ready-for-human
Written: 2026-08-21
Measured on: https://tuinmaximaalnl.intern.systems/bamboe-vlonder (Playwright, DOM after load)
Compared against: https://www.tuinmaximaal.nl/bamboe-vlonder

## What was measured

Title, meta description, robots, canonical, hreflang, Open Graph, heading order, every
`<img>` (alt, title, dimensions, loading) and every JSON-LD block.

**The page text is not changed by anything below.** Every item is an attribute, a meta
element or a JSON-LD value.

## Parity note, read this first

Title, description and all twelve content-image alt texts on the new site are **identical to
production**. The gaps below are therefore not new-site defects: they are shared by both
sites. Changing them on the new site alone would *create* a difference the parity log then
reports as a defect. Each change below is to be made on **both sites**, or on production
first — except the two items marked *new site only*.

## Findings

### Correct already

- One `<h1>`: *Ontdek de Gumax® bamboe vlonder*. Keyword-led, matches the title.
- Title 42 characters, primary keyword first, brand last.
- Description 123 characters, keyword present, ends in a call to action.
- `lang="nl"`, responsive viewport, `robots: INDEX,FOLLOW`.
- FAQ content is marked up as `FAQPage` and mirrors the six visible questions.
- Twelve content images already carry descriptive Dutch alt text.

### 1. No canonical URL — high

No `<link rel="canonical">` on either site. A CMS page reachable with tracking parameters
splits its own signals.

```html
<link rel="canonical" href="https://www.tuinmaximaal.nl/bamboe-vlonder">
```

### 2. No hreflang alternates — high

Six store views, no `rel="alternate"` links. The page cannot be grouped with its
counterparts in the other stores. Add one line per store that has this page, plus
`x-default`.

### 3. No Open Graph or Twitter tags — medium

No `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, no `twitter:card`. Shared
links fall back to whatever the scraper guesses.

### 4. Alt text that is a filename — high

Nine images carry their filename as alt text. Suggested values (Dutch, matching the page):

| File | Now | Set to |
| --- | --- | --- |
| `2026-07-23-KortingActie-NL-31Aug.svg` (twice, links to the overkapping builder) | `2026-07-23-KortingActie-NL-31Aug` | `Kortingsactie Gumax terrasoverkappingen, geldig tot 31 augustus` — confirm the offer wording in the SVG |
| `NL-LaagstePrijsGarantie_RGB_Oranje.svg` (in the page body) | `NL-LaagstePrijsGarantie_RGB_Oranje` | `Tuinmaximaal laagsteprijsgarantie` — the same file in the header already has this |
| `logo-thuiswinkel-waarborg.png` | `logo-thuiswinkel-waarborg` | `Thuiswinkel Waarborg` |
| `Customer_service-contact-us.png` | `Customer_service-contact-us` | `Medewerker van de klantenservice van Tuinmaximaal`, or `alt=""` if it is decoration |
| `customer_service-mobile-2.png` | `customer_service-mobile-2` | as above |
| `total-terrace-height.png` (calculator help) | `total-terrace-height` | `Maatschets: totale terrashoogte, van maaiveld tot bovenkant vlonder` |
| `decking-skirting-linear-meters.png` | `decking-skirting-linear-meters` | `Maatschets: strekkende meters kantafwerking rond de vlonder` |
| `decking-joist.png` | `decking-joist` | `Maatschets: onderregels onder de bamboe vlonderplanken` |
| `decking-pedestals.png` | `decking-pedestals` | `Maatschets: dragers onder de onderregels van de vlonder` |

The promo banner is rendered twice (a desktop and a mobile copy). Only one copy should carry
the alt text; the hidden copy takes `alt=""` so it is not read twice.

Lowercase brand alts in the payment row — `ideal`, `visa`, `visa electron`, `paypal`,
`maestro`, `mastercard`, `pin`, `overboeking`, `Vpay` — should be capitalised as the brands
are: `iDEAL`, `Visa`, `Visa Electron`, `PayPal`, `Maestro`, `Mastercard`, `Pinbetaling`,
`Overboeking`, `V PAY`.

### 5. Heading level skipped — medium

`H2 Meestgestelde vragen` is followed by six `H4` questions. Make them `H3`. The visible
text does not change; only the tag does.

### 6. No image is lazy-loaded, and eight have no dimensions — medium

Every `<img>` reports `loading="auto"`. Nothing below the fold defers, and the hero
(`Bamboe_vlonderplanken.jpg`, 1200×717) has no priority hint.

- Hero: `fetchpriority="high"`, no `loading="lazy"`.
- Everything below the fold: `loading="lazy"`.
- Add `width` and `height` to `woca-exterior-cleaner.png`, `woca-exterior-teak-olie.png`,
  `Reinigen_bamboe_vlonder_V2_.png`, `ACC-30000-0001_07.jpg`, `FSC.png`, and the four
  calculator diagrams. Missing intrinsic size is a layout-shift source.

### 7. Structured-data defects

- **`AggregateRating` sits at the top level** with an `itemReviewed` array, rather than
  nested inside the item it rates. A site-wide rating on a content page is not eligible for
  a review snippet, and this shape will be reported as invalid. Nest it in the `Store` node,
  or drop it from this page. — medium
- **`Store.image` points at `https://devavz01nl.intern.systems/media/logo/stores/2/TM_logo_1.png`**
  — a third host, neither production nor the new site. *New site only*; a configuration
  leak, and it must not reach production. — high
- `WebSite`, `Organization` and `Store` all carry `intern.systems` URLs. Expected before
  release, but it goes on the release checklist. *New site only*.
- The FAQ answers embed HTML (`<p>`, `<a>`) in `acceptedAnswer.text`. Tolerated, but plain
  text is the safer form.
- No `Product` or `Offer` markup, although the page has a working price calculator with a
  price range. Adding it is the one item here with upside beyond hygiene — it is a content
  decision, not a fix. — low

### 8. The unreleased site is crawlable — high, new site only

`robots.txt` on `tuinmaximaalnl.intern.systems` is a copy of production's and allows this
page, and the page itself says `INDEX,FOLLOW`. If the host is reachable from outside, the
new site can be indexed before release and compete with production. Block the host until
release (HTTP auth, or `Disallow: /` for the whole host), and do not carry that block over
at release.

## Next

Items 1, 2, 3, 4 and 5 are content-management work on both sites. Items 6 and 7 are theme
and configuration work. Item 8 is for whoever owns the `intern.systems` host.
