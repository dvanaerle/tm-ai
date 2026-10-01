# Reviews

A component file of [DESIGN.md](../DESIGN.md) → Components. A section named without a file, such as Colors or Elevation & Depth, is DESIGN.md's.

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
  The count is a 12px pill in `primary`; Figma draws it white on orange, which is 2.52:1 at 12px (a house deviation, Known exceptions, below). Link the summary to the reviews when the page has them.
- **Mini summary** (`.reviews-summary.--mini`): one full star (`span.stars`, `aria-hidden`), the score and the total in brackets ("(12)"), `gap-0.5`, for a product tile or a search result.

## Known exceptions

- **Reviews (a house deviation from Figma):** reviews aren't enabled on the live site, so prototypes show them only when a brief asks (above). Figma's review count is 12px white on `accent` (2.52:1); prototypes set it in `primary` with `on-primary`, in line with "never put small text on orange" (Colors). The theme has no star rating matching Figma's.
