# 15: Image-text item on beige and on white

**What to build:** The PageBuilder `pagebuilder-image-text-item` (a link card: text left, photo flush right) follows the repeated-card rule instead of being "the one bordered coloured card". The user's rule: on a beige background it is white; on white it is white with a grey border; it is never beige. On a category page it usually sits in the beige intro.

- **On beige:** white, no border, under the H1 and intro in the beige intro band. The H1 and intro run full width, and the cards' photos take the place of the intro's modest photo (the user's staging screenshot of /zonwering).
- **On white:** white with the 1px light-grey outline, as Figma `5360:12589` draws it: `min-h-33`, `p-6`, a 20px bold title, 8px gap, a 16px semibold link with a 16px arrow 4px after it, photo flush right with its outer corners rounded by the card.

**Status:** done

- [x] DESIGN.md → Content patterns replaces the "Intro link card" (Figma `1358:30013`, beige with a sand border) with "Image-text item", with the markup and both surfaces.
- [x] DESIGN.md → Layout → Beige intro puts the items in the category intro, not on white after it.
- [x] The "intro link card excepted" border exceptions are gone from DESIGN.md, build.md, audit.md and the eval; audit flags a beige item, or a bordered one on beige.
- [x] `tmp/prototypes/eval10-zonwering-i6.html` applies the rule: variants A and C carry the items in the beige intro (white, no border); variant B, on white, outlines them.

## Comments

- Both Figma links in the request pointed to `5360:12589` (the white-page variant). The beige variant follows the user's screenshot and the box decision; a Figma node for it would let the pattern cite one.
- Figma colours the link #8BA407, 2.8:1 on white, below AA for 16px text. The item keeps green link text and #8BA407 on hover, as before.
- The arrow is inline after the last word (`ml-1 inline size-4 align-middle`): in a flex row it detached from a wrapped link at 375px ("Monteer zelf uw zonwering").
- The photo's `alt` is empty: the title already names the link.
- **Wrapper (Figma `1358:29197`), added in the same session:** on a white page, a stacked column of items sits in one beige wrapper (`rounded-2 bg-container-beige px-6 pt-5 pb-8`, `gap-5`), with a 24px bold heading (`text-6 font-bold`) and the items `gap-2` apart, white without a border. On a beige or sand band there is no wrapper.
  - Variant B's column beside the FAQ now uses it. It has no heading: the /zonwering copy has none, and the prototype keeps the copy. So the wrapper takes `p-6` (`p-4` below `sm`).
  - At 375px the wrapper's padding pushed the column 22px past the page, because "productinformatie" can't break. The fix is `min-w-0` on the column, plus `p-4` and a `w-24` photo on the items below `sm`. `hyphens-auto` broke the word without a hyphen in Chrome, so it isn't used.
  - Figma sets the titles here at 600 (its H6), while `5360:12589` uses 700. The skill keeps `text-5 font-bold` on both.
  - `surface-box` is a DESIGN.md token, not a skeleton class, so the rule spells out the utilities.
- **Figma iteration adopted:** the item now follows `6838:38528` (on white or transparent) and `6842:32723` (on colour), file "Tuinmaximaal for Claude". The earlier `5360:12589` is superseded: the 20px title and separate arrow link are gone.
  - A bold title plus a 14px description, `gap-1`, with a 140px photo (`w-35`) at least 108px high (`min-h-27`).
  - `p-4` with a 14px title below `sm`; `p-5` with a 16px title from `sm`.
  - The skeleton has `image-text-item` classes from the sync. The default is outlined; `--on-surface` drops the border on beige.
- Figma's title colour is its "Link" variable #5C6B08: 5.9:1 on white, 5.5:1 on beige, so it passes AA. The theme has no token for it, and the sync's prose-drift check rejects non-theme hexes. So the title is `tmx-primary-green` with the #809700 hover, and DESIGN.md → Known exceptions → Link colour asks the FED lead for a token.
- Lighter green second (#8BA407) no longer applies to this item; it stays on the secondary link hover only.
- The wrapper's small-screen workaround (`w-24` photo, `p-4` items) is gone. The new item is compact enough: at 375px the wrapper's items are 311 × 108, and the 14px titles don't overflow.
- Measured in `tmp/prototypes/eval10-zonwering-i6.html`:
  - at 1280px, 400 × 113 items with `p-5`, a 16/700 title, a 14px description and a 140px photo, no border on beige;
  - at 375px, 343 × 108 items with `p-4` and a 14px title.
