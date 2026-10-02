# Dialogs

A component file of [DESIGN.md](../DESIGN.md) → Components. A section named without a file, such as Colors or Elevation & Depth, is DESIGN.md's.

Figma `1495:12618` (modal) and `1495:13634` (pop-up), file "Tuinmaximaal for Claude". Both are a native `dialog` opened with `showModal()`, so the browser traps focus, closes on Esc and returns focus to the opener. The title takes `tabindex="-1" autofocus`, so focus lands on it (screen readers announce it) and not on the first button, which the theme paints in its hover fill, or on the field, which would open a phone keyboard. In a prototype, a button with `data-dialog-open="id"` opens one (the skeleton's script); a button inside a `form method="dialog"` closes it. Both are white, `rounded-2` (8px, not Figma's 12px), with `shadow-xl` over a 60% black backdrop, and hold green text (Figma's slate text is from a UI kit; the brand text is green).

**Modal: a decision that blocks the next step.** Removing a configured item from the cart, or continuing with a size outside the standard ("De berekende doorloophoogte is 1701 mm. Dit valt buiten de standaardmaten."). Information that doesn't need an answer is a message in the page (components/messages.md), never a modal. A modal opens only from the customer's own action.

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
- **Close:** the one orange control, top right: `accent` with `rounded-bl-2` and `p-2` around a 24px white close icon (Figma's Mingcute `close_line`). White on orange is 2.5:1, under the 3:1 a control's icon needs; it is a deliberate brand choice (Known exceptions, below), so keep the `aria-label` and the Esc and backdrop exits.
- **Photo:** the company's own lifestyle or project photo (Imagery), with an empty `alt` when it only decorates.

**Drawer: the details behind a card's "Ontdek meer".** Zonneplan's pattern: a panel that slides in from the right over a 60% black backdrop, for the full copy of a feature card or a slider card (components/content-patterns.md → Feature card, Feature slider). It opens only from the visitor's click, closes with its close button, Esc or a click on the backdrop, and its text stays in the HTML, so the page keeps its copy for SEO.

```html
<button type="button" class="… flex items-center gap-3 font-bold" data-dialog-open="drawer-id" aria-haspopup="dialog"><span>Ontdek meer</span><span class="btn-fill … size-10 rounded-full">…plus…</span></button>
<dialog class="drawer" id="drawer-id" aria-labelledby="drawer-id-title">
    <div class="drawer-header">
        <h2 class="drawer-title" id="drawer-id-title" tabindex="-1" autofocus>…</h2>
        <form method="dialog"><button class="drawer-close" aria-label="Sluiten"><svg …the pop-up's close icon…/></button></form>
    </div>
    <div class="drawer-body">
        <img class="aspect-video object-cover" src="…" alt="…"><!-- a packshot: object-contain p-4 bg-surface -->
        <div class="flex flex-col gap-4"><p>…the full copy…</p></div>
        <table>…the feature's rows from the comparison table…</table><!-- optional -->
        <div class="flex flex-wrap gap-2"><a class="btn btn-primary" href="…">…</a></div><!-- optional: the page's own CTA for this feature -->
    </div>
</dialog>
```

- **Panel:** white, full height, `max-w-lg` (512px) from the right edge, `rounded-l-2` from `sm` and full width below it, scrolling inside itself. The header is sticky: the title (`text-6 font-black`, Zonneplan's large heading), `pl-6 pt-6` (`pl-8 pt-8` from `sm`), with room on the right for the close button. The close is the pop-up's orange one (`drawer-close`: `accent` with `rounded-bl-2` and `p-2` around the 24px white close icon, in the top right corner), so every dialog that a visitor closes by hand shows the same close. It glides in from the right and back out over 300ms on a soft deceleration curve (`cubic-bezier(0.32, 0.72, 0, 1)`), the backdrop fading with it, and its content follows 75ms later with a short slide and a fade, so the panel leads and the text flows in after it. Native `dialog` open and close both animate (`@starting-style` and `allow-discrete` in the skeleton); a browser without them opens it at once. Under reduced motion the panel only fades.
- **Body:** `gap-6`: a 16:9 image, the full copy, and, where the page holds the data, the feature's rows from the comparison table with the same ticks, so the drawer shows which product has the feature. A primary appears only when the page's copy has one for this feature, as one primary per drawer.

## Known exceptions

- **Pop-up close:** the white close icon on orange is 2.52:1, below WCAG's 3:1 for a control's icon. The brand keeps it on purpose (above); the button's `aria-label`, Esc and the backdrop click keep the pop-up closable for everyone.
