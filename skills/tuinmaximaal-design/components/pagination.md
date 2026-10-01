# Pagination

A component file of [DESIGN.md](../DESIGN.md) → Components. A section named without a file, such as Colors or Elevation & Depth, is DESIGN.md's.

Figma `1495:7515` (file "Tuinmaximaal for Claude"), below a product grid or any paged list. The theme's pager doesn't match it yet (Known exceptions, below); prototypes use the skeleton's `pagination` classes:

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

## Known exceptions

- **Pagination (open, for the FED lead):** the theme's `Magento_Theme/templates/html/pager.phtml` still draws 40px items, an underlined bold current page and solid #809700 arrow squares with white chevrons. Figma `1495:7515` replaces it (above), and the theme is to be refactored to match; until then prototypes follow Figma through the skeleton's `pagination` classes, with the theme's structure (`nav > ol > li`, `aria-current="page"`, the sr-only "Pagina" labels and the jump links) under new class names, so the refactor restyles the template without changing its behaviour.
