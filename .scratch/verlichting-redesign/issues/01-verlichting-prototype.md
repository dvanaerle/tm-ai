# 01: /verlichting prototype with three feature-story variants

**What to build:** The user can open one throwaway prototype of the redesigned /verlichting landing page and flip between three variants with the switcher. All three share the same base:

- a beige intro;
- sticky product tabs;
- a light split image for the Lighting System and one for the ledspots;
- the Lighting System vs ledspots comparison table.

They differ only in the feature story:

- **A, "Kaarten op beige":** white cards on a beige band, with "+ Lees meer"; one green block.
- **B, "Afwisselende blokken":** split images in boxes that alternate beige and sand; one green block.
- **C, Bold: "Één groot moment":** "Geniet van bijzondere momenten" with an orange highlight above one large contained photo, then a dense card grid on sand; two green blocks.

The page's own copy and images are used, deduplicated, with no new words. The hand-over lists the variants, the review findings and the rule stretches for the user to decide on. The full decisions are in the spec (`.scratch/verlichting-redesign/spec.md`); build with the `tuinmaximaal-design` skill's Build job.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] The plan line, base, copy, images, links, prices and table rows match the spec's Implementation Decisions.
- [ ] The two removed banners' background images are taken from the live page; the table caption comes from the page's own copy or from the user, never newly written.
- [ ] The parts file assembles with the skill's assemble script without errors.
- [ ] Each variant has a name and trade-off line in the switcher; C's starts with "Bold:".
- [ ] The base is identical in all three variants; only the feature story differs.
- [ ] Each feature appears once: one merged Smart home block, no repeated lichtscènes paragraph, no bottom product tiles, no promo banner or struck-through prices.
- [ ] "Eenvoudige bevestiging" is the green block in every variant, and "Smart home integratie" is the second one in C only.
- [ ] In the rendered file at 375px, `md` and `xl`:
  - there is no sideways scroll at 375px;
  - every image loads;
  - the switcher works with its buttons and the arrow keys;
  - `?variant=` opens a variant and survives a reload;
  - the sticky tabs follow the scroll with the beige pill.
- [ ] One reviewer sub-agent has reviewed the file. Its findings are fixed in one pass in the parts file and reassembled; C's second green block is kept and explained.
- [ ] The hand-over gives each variant as `key (name): trade-off`, explains `?variant=`, lists the review findings with the action taken, any placeholders, and the rule stretches to decide on.
