# Action menu

A component file of [DESIGN.md](../DESIGN.md) → Components. A section named without a file, such as Colors or Elevation & Depth, is DESIGN.md's.

Figma `1286:17433`, file "Tuinmaximaal for Claude". A short menu of actions on one item, opened from a small tertiary icon button: a cart line's "Wijzigen", "Naar verlanglijst", "Verwijderen". The skeleton's script makes it work (`data-menu`).

```html
<div class="action-menu-wrap" data-menu>
    <button type="button" class="btn btn-tertiary --s --icon-only" aria-label="Acties voor Schuttingpaal Gumax®" aria-haspopup="menu" aria-expanded="false" aria-controls="acties-1"><svg>…</svg></button>
    <div class="action-menu" id="acties-1" role="menu" hidden>
        <p class="action-menu-title">Schuttingpaal Gumax®</p><!-- optional -->
        <button type="button" role="menuitem"><svg>…</svg>Wijzigen</button>
        <hr>
        <button type="button" role="menuitem" class="--danger"><svg>…</svg>Verwijderen</button>
    </div>
</div>
```
- **Menu:** 240px (`w-60`), white, `rounded-2`, `p-1`, `shadow-lg`, `gap-1` under its button; `--end` aligns it to the button's right edge (use it at the right of a row). The optional title is 14px semibold `text-muted`.
- **Items:** 32px (`px-2 py-1.5`), `rounded-1`, a 20px solid icon and a 14px medium label in `text`, `gap-1.5`; hover and keyboard focus fill `neutral-50`, and focus adds a 2px `ring` inside. A destructive item (`--danger`) is `danger` and comes last, after an `hr` divider in `border`.
- **Keyboard:** a click opens it; Enter, Space or ArrowDown opens it on the first item; the arrows (wrapping), Home and End move; Esc returns to the button; Tab or a click outside closes it.
- Keep it to five items or fewer, each a verb. A single action is a button, not a menu; a choice of values is a select or a dropdown (components/forms.md).

## Known exceptions

- **Action menu (open, for the FED lead):** the theme has no action menu matching Figma's.
