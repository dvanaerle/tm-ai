# Spec: /verlichting redesign prototype

Status: ready-for-agent

## Problem Statement

The /verlichting landing page (production: `tuinmaximaalnl.intern.systems/verlichting`) sells two add-ons for a terrasoverkapping: the Gumax® Lighting System and Gumax® ledspots. The page has grown by stacking blocks and now works against the visitor:

- **Repetition.** The Smart Home story appears twice, the Lighting System's "acht lichtscènes" paragraph appears twice, both product tiles repeat at the bottom, and "Kies uw Lighting System" appears five times. Visitors scroll past the same message without learning anything new.
- **No clear choice.** The two products never sit side by side on what sets them apart (colour spectrum, per-armatuur control, Smart Home, 4- or 6-set), so a visitor has to piece the difference together from two USP lists and eight feature blocks.
- **Competing actions.** Product links, the configurator ("Stel samen met een terrasoverkapping") and repeated CTAs all compete; there is no single primary action per view.
- **Flat feature story.** The eight feature blocks read as a long run with little rhythm or colour, so the atmosphere the copy promises doesn't come across.

The team wants to rethink structure, UX and interface for the new website, keep the copy, and see visual options before deciding.

## Solution

One throwaway prototype, built with the `tuinmaximaal-design` skill's Build job, that holds three variants of the redesigned page below the green logo bar, with the switcher. It starts from the approved category-landing example (/schuifwand) and keeps the page's own copy and images, deduplicated, with no new words.

Every variant shares the same base, from the top:

1. **Beige intro:** H1, two intro sentences, a modest lifestyle photo, and the configurator as a secondary button.
2. **Sticky product tabs** for the two products.
3. **Two light split images**, one per product, with its own primary action.
4. **A comparison table**, Lighting System vs ledspots, with ticks.
5. **The feature story**, the only part the variants vary:
   - **A, "Kaarten op beige":** white cards on a beige band, with "+ Lees meer". One green block.
   - **B, "Afwisselende blokken":** split images in boxes that alternate beige and sand. One green block.
   - **C, Bold: "Één groot moment":** "Geniet van bijzondere momenten" with an orange highlight above one large contained photo, then a dense card grid on sand. Two green blocks.

The user judges the variants side by side, picks a direction or combines parts, and decides whether the design system should allow more than one green block per page.

## User Stories

1. As a visitor who already owns an overkapping, I want to see right away that lighting can be added later, so that I know this page is for me.
2. As a visitor still choosing an overkapping, I want a visible route to the configurator, so that I can add lighting while I build my overkapping.
3. As a visitor, I want the page to open with a calm beige intro that names the topic, so that I know where I am without a busy first screen.
4. As a visitor, I want both products and their starting prices directly under the intro, so that I see what's on offer before I read anything long.
5. As a visitor scrolling a long page, I want sticky tabs with each product's thumbnail, name and "Vanaf" price, so that I can jump back to the choice at any moment.
6. As a visitor, I want the active tab marked with the beige pill, so that I know which product block I'm looking at.
7. As a visitor, I want one light block per product with name, price, one sentence and the USP list, so that I can grasp each product in seconds.
8. As a visitor, I want one clear primary button per product ("Kies uw Lighting System", "Kies uw ledspots"), so that I know how to buy it.
9. As a visitor interested in the Lighting System, I want "Meer informatie" next to its primary button, so that I can read the product details first.
10. As a visitor interested in ledspots, I want "Stel samen met een terrasoverkapping" next to its primary button, so that I can order them with a new overkapping.
11. As a visitor, I want prices shown as "Vanaf €307" and "Vanaf €169" in the price chip, so that I see the entry price without campaign noise.
12. As a visitor comparing the two products, I want a table with ticks on dimbaar, afstandsbediening, warm-to-koelwit, colour spectrum, per-armatuur control, Smart Home, 4- or 6-set and easy mounting, so that I can choose without reading every block.
13. As a visitor, I want the comparison table right after the product blocks, so that it answers "which one" while the products are still in mind.
14. As a visitor, I want each feature told once, so that I don't scroll past the same Smart Home or lichtscènes text twice.
15. As a visitor, I want the feature story to have colour and rhythm (beige, sand, white cards, a green emphasis block), so that it feels like the atmosphere it describes rather than a white wall of text.
16. As a visitor, I want the mounting message ("Eenvoudige bevestiging") emphasised, so that my main doubt as an owner ("does this fit my existing overkapping?") is answered.
17. As a visitor in variant A, I want feature cards with a photo, heading and first sentence and the rest behind "+ Lees meer", so that I can scan quickly and open only what interests me.
18. As a visitor in variant B, I want each feature as a photo-and-text block, alternating left and right on beige and sand, so that I can read the full story calmly.
19. As a visitor in variant C, I want one large photo under "Geniet van bijzondere momenten", so that the page sells the finished evening on the terrace.
20. As a mobile visitor (375px), I want every block to stack vertically without sideways scrolling, so that the page works on my phone.
21. As a visitor on a tablet or desktop, I want the table and split images to use the width without leaving the container, so that the page looks composed.
22. As a reviewer, I want to switch variants with the switcher or the arrow keys, so that I can compare them quickly.
23. As a reviewer, I want `?variant=B` to open a variant directly, so that I can share a link to one.
24. As a reviewer, I want each variant's name and trade-off line in the switcher, so that I know what it tests.
25. As a reviewer, I want the shared base identical across variants, so that I judge only the feature story.
26. As a reviewer, I want variant C to use two green blocks, so that I can experience whether one-per-page is too strict.
27. As a content editor, I want every heading, sentence, label and image to come from the current page, so that no new copy has to be approved.
28. As a content editor, I want "Gumax®" rendered as Gumax with a superscript ® in page text, so that the brand follows the house style.
29. As a designer, I want the prototype to use only the theme's tokens and component classes, so that a chosen direction can move into the theme without translation.
30. As a designer, I want the hand-over to list any rule the prototype deliberately stretches, so that we decide on it rather than discover it later.

## Implementation Decisions

**Job and format.** The `tuinmaximaal-design` Build job, HTML (not React), N = 3. The parts file is assembled by the skill's assemble script; the output goes to the workspace's ignored prototype folder.

**Plan line.** `Question: how should the feature story be structured and coloured? Goal: choose a light and go to its product. Audience: overkapping owners adding lighting, and buyers still configuring. Primary action: the product (cart path); the configurator is secondary. N: 3. Source: /verlichting, keep the copy (deduplicated). Base: examples/category-landing. Components: content patterns.` Add any other indexed component the draft turns out to need, and read it first.

**Page type.** A landing page like /schuifwand, not a category page. The intro is therefore the example's: H1 and intro beside a modest photo, products after it. (Putting the product cards inside the intro was considered and dropped.)

**Promo.** The Voordeelweken banner and the struck-through campaign prices are left out; they are temporary.

**Shared base, identical in all variants:**

- **Beige intro.** H1 "Verlichting onder de overkapping". Intro: the first two sentences of "Sfeervolle verlichting voor uw overkapping" ("Licht is een echte sfeerbepaler onder uw terrasoverkapping. Zomerse zonneschijn zorgt voor een riante lichtinval onder uw overkapping."). Photo: `Tuinmaximaal_Verlichting_Assets6.jpg`. Button: "Stel samen met een terrasoverkapping" (secondary) to `/terrasoverkapping`.
- **Sticky product tabs**, as in the example: thumbnail, name and "Vanaf €" price per product, the beige pill on the active tab.
- **Product split images**, light, image alternating sides. Each holds only the name, the price chip, one sentence, the USP list and two buttons.
  - **Gumax® Lighting System:** "Vanaf €307". Sentence: "Het nieuwe en patent pending verlichtingssysteem waarmee u de perfecte sfeer kiest voor werkelijk ieder moment." USPs: Kies uw breed kleurenspectrum; Van warm tot koelwit licht; Per lichtarmatuur in te stellen; Eenvoudig bedienbaar; Eenvoudig bevestigen. Buttons: "Kies uw Lighting System" (primary) to `/lighting-system`, "Meer informatie" (secondary) to `/lighting-system/productinformatie`. Image: `Tuinmaximaal_Verlichting_Assets2.1.jpg`.
  - **Gumax® ledspots:** "Vanaf €169". Sentence: "Met de afstandsbediening heeft u met één druk op de knop een fraai verlicht buitenterras." USPs: Warme sfeerverlichting; Dimbare ledspots; Meegeleverde afstandsbediening; Verkrijgbaar als 4- of 6-set; Eenvoudige montage. Buttons: "Kies uw ledspots" (primary) to `/losse-onderdelen?terrasoverkappingen_onderdelen=6021`, "Stel samen met een terrasoverkapping" (secondary) to `/terrasoverkapping`. Image: `Tuinmaximaal_Verlichting_Assets5.jpg`.
  - The source's 1531×521 banners are product media here, so they show at 16:9 per the build rules; crop to keep the lit overkapping in frame.
- **Comparison table** on white, after the product blocks, following the example's comparison-table pattern (ticks at every width, prices and buttons from `lg`). Columns: Lighting System, ledspots. Rows and ticks, confirmed by the user:

  | Row | Lighting System | Ledspots |
  |---|---|---|
  | Dimbaar | ✓ | ✓ |
  | Meegeleverde afstandsbediening | ✓ | ✓ |
  | Van warm tot koelwit licht | ✓ | ✗ |
  | Breed kleurenspectrum / Multi-colour mode | ✓ | ✗ |
  | Per lichtarmatuur in te stellen | ✓ | ✗ |
  | Smart Home | ✓ | ✗ |
  | Verkrijgbaar als 4- of 6-set | ✗ | ✓ |
  | Eenvoudig bevestigen | ✓ | ✓ |

  The table needs a caption; use an existing heading or line from the page, or ask the user. Don't write a new one.

**Deduplication (the feature story's content).** The feature story holds these blocks once each, with the page's own headings and copy:

1. **Sfeervolle verlichting voor uw overkapping:** the rest of that copy after the two intro sentences. Photo: `Tuinmaximaal_Verlichting_Assets6.jpg`, or the "Van warm en koelwit tot kleurrijk licht" banner photo, so the intro photo isn't repeated in the same view.
2. **Meegeleverde afstandsbediening:** its paragraph. Photo: one of the two remote-control images.
3. **Smart home integratie:** one merged block. Heading "Smart home integratie", body the longer "Smart Home" paragraph (lichtscènes, Multi-colour mode, routines). Drop the shorter one and the repeated "acht lichtscènes" paragraph. Photo: `Tuinmaximaal_Verlichting_Assets4.png` or the Multi-colour mode image.
4. **Optimale lichtopbrengst:** its paragraph. Photo: `Tuinmaximaal_Verlichting_Assets10.jpg`.
5. **Eenvoudige bevestiging:** its paragraph, as the green emphasis block. Photo: `Tuinmaximaal_Verlichting_Assets11.jpg`.
6. **Geniet van bijzondere momenten:** heading plus its line. A standalone block in variant C only; in A and B its photo may be reused elsewhere.

The two bottom product tiles and the separate "Van warm en koelwit tot kleurrijk licht" banner are dropped. The "Geniet" and "Van warm" banners may be CSS background images on the source page; extract their URLs from the live page.

**Variants (feature story only):**

- **A, "Kaarten op beige".** The features as white cards without a border on a beige band: photo, the page's heading, first sentence, the rest behind "+ Lees meer". This is the page's one "+ Lees meer" section. "Eenvoudige bevestiging" is the one green block. Trade-off: tests whether a scannable card grid gets visitors through the features, at the cost of hiding most of the copy.
- **B, "Afwisselende blokken".** Each feature as a split image in a box, images alternating left and right, boxes alternating beige and sand, with all copy visible. "Eenvoudige bevestiging" is the one green block. Trade-off: tests whether calm editorial blocks carry the atmosphere, at the cost of a longer scroll.
- **C, Bold: "Één groot moment".** "Geniet van bijzondere momenten" as a heading with an orange −2° highlight on part of its own text, above one large contained lifestyle photo (inside the container, `rounded-2`). Then the remaining features as a dense card grid on a sand band. Two green blocks: "Eenvoudige bevestiging" and "Smart home integratie". The trade-off line starts with "Bold:" and says it tests the photo-led moment and a second green block, at the cost of the one-green-block rule.

**Rules in force.** All of `references/build.md`: the container, surface ladder, box decision, split-image classes, price-chip sizes, button sizes and `gap-2`, the −2° tilt, no eyebrows, no carousel, no arbitrary values, Gumax with superscript ® in page text, image ratios (product media 16:9, lifestyle photos editorial). There is one deliberate exception: variant C's second green block.

## Testing Decisions

A good check judges what a reviewer sees in the assembled, rendered prototype, not how the parts file is written. No new test code is added; three existing checks cover it:

1. **The assemble script.** The parts file assembles without errors (slots, registry, variant keys and sections, no unfilled placeholder). Prior art: the existing assemble tests define what the script rejects.
2. **The rendered prototype**, checked in a browser at 375px, `md` and `xl`:
   - At 375px the page doesn't scroll sideways (the document's scroll width equals the viewport width).
   - Every image has loaded.
   - The switcher cycles with its buttons and the arrow keys, and `?variant=` opens and survives a reload.
   - The sticky tabs follow the scroll and move the beige pill.
   - The build traps in build.md step 7 are checked in the rendered file.
3. **The reviewer sub-agent.** One fresh reviewer gets only the prototype's path and the skill's folder and follows `references/review.md`. Fix every finding in one pass, in the parts file, then reassemble. Variant C's second green block is expected to be flagged: keep it and explain why in the hand-over. Don't start a second review.

The hand-over lists each variant as `key (name): trade-off`, explains `?variant=`, names any placeholder or missing token, gives the review findings with their rank and the action taken, and lists the rule stretches the user should decide on.

## Out of Scope

- Implementing the redesign in the Magento/Valantic theme.
- Writing or rewriting copy, including a new table caption, theme labels ("Sfeer", "Bediening", "Montage") or the promo banner.
- Charts, colour-spectrum swatches, gradients, diagrams or other new visuals.
- The Voordeelweken campaign and struck-through prices.
- Translations (DE/FR); only the longest-string layout check from build.md applies.
- Product pages `/lighting-system` and `/losse-onderdelen`, and the configurator.
- Adopting a variant as an approved example, and its addition to the example tests.
- Changing DESIGN.md's one-green-block rule; that is decided after the user has seen variant C.

## Further Notes

- The grilling settled every decision above. The user wants creativity and colour in the feature story ("not a white background with transparent text"); boxes, bands and cards carry that within the surface ladder.
- Whether /verlichting-style landings may hold the products inside the intro was raised and rejected. Category pages (e.g. /glazen-schuifwand) show products; landing pages (/verlichting, /schuifwand) follow the example's intro.
- After the user picks a direction, a later round builds every variant on the agreed base and varies only the next open question (build.md → Later rounds).
