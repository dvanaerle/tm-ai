# 20: Dialogs: the modal and the pop-up

**What to build:** The Figma modal `1495:12618` and pop-up `1495:13634` (file "Tuinmaximaal for Claude") become DESIGN.md → Components → Dialogs. The user chose to include both. The modal is for a decision that blocks the next step. The pop-up is for a campaign or newsletter signup only when the brief asks, and never on load or in the buying flow.

**Status:** done

- [x] DESIGN.md → Dialogs covers both on a native `dialog`, with markup, the layout per breakpoint and the usage rules.
- [x] Shapes allows `rounded-3` (12px) for dialogs only. Elevation gives dialogs `shadow-xl`. The orange Don't names the pop-up close as the one orange control.
- [x] The sync generates `modal-*` and `popup-*` classes. The skeleton script opens a dialog from `data-dialog-open`, closes a pop-up on a backdrop click, and pauses the variant arrow keys while a dialog is open. The sync is clean, and the approved example was re-assembled with the script.
- [x] build.md and audit.md point to Dialogs; the eval gains a should-not line for pop-ups on load or in the buying flow and for modals that only inform.

## Comments

- **Figma first, with token and accessibility mappings:**
  - The widths (592/800/880px) map to the default `max-w-xl`, `max-w-3xl` and `max-w-4xl`; below `sm` the browser's own dialog margin gives Figma's 328px.
  - The shadow is Tailwind's `shadow-xl`, the same shadow as Figma's "Shadow/xl".
  - The 68px exclamation is `size-17` in `tmx-primary-yellow`, the nearest token to Figma's #FACC15.
  - The pop-up title is 28px (`text-7`), because Figma's 30px has no size in the config.
  - Figma's slate text (#1E293B, #475569) comes from a UI kit; the text is brand green.
  - The close icon was first made green for contrast (white on orange is 2.52:1, green 5.81:1); the user's review restored Figma's white (below).
- **Focus:** Chromium ignores `autofocus` on the `dialog` element itself, even with `tabindex` (tested in Playwright's Chromium 153). The first focusable element then gets focus: the modal's secondary button, which the theme paints in its hover fill on `:focus`, or the pop-up's field, which opens a phone keyboard. So the title takes `tabindex="-1" autofocus` with `focus:outline-none`. Focus lands on the title, and screen readers announce it.
- **Measured headlessly** (`tmp/dialogs-check.mjs`, at 375, 640 and 1280px):
  - Modal: 337, 576 and 768px wide, 32px body padding (corners: see the review below); stacked and centred below `lg`, a row from `lg`; the footer on #F9FAFB, buttons stacked below `sm`, sharing the row from `sm`, and right-aligned from `lg`.
  - Pop-up: the photo on top at 256px, then 300px on the left from `lg`; a 40px orange close.
  - Esc closes the modal, a backdrop click closes the pop-up, and focus lands on the title in all six cases.
- One `design:sync` run crashed once, just after an edit; three reruns were clean and the output is unchanged.
- **User review:**
  - Both dialogs take `rounded-2` (8px), not Figma's 12px, so Shapes no longer needs `rounded-3`.
  - The stacked pop-up has square top corners (`rounded-t-none`, 8px again from `lg`), so its photo has no radius.
  - The close icon is white, as Figma draws it, even though white on orange is 2.52:1. DESIGN.md → Known exceptions → Pop-up close records it, and audit.md no longer flags it.
  - Measured: modal 8px on every corner at every width; pop-up `0 0 8 8` at 375 and 640px and `8 8 8 8` at 1280px; close icon rgb(255, 255, 255) on #FF8000.
