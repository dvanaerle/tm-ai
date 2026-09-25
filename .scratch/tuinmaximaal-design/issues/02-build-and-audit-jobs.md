# 02: Build and audit jobs

**What to build:** The two full jobs of the skill. **Build:** the user gets a shaped, 3-variant throwaway prototype for UI/UX and CRO comparison. **Audit:** the user gets a ranked review of an existing page, screenshot or snippet. Both are loaded through per-job references so the skill entry stays lean. See the spec in this feature folder.

- **Build**, adapted from the UI branch of the existing `/prototype` skill. The content is copied into our skill, not called, because colleagues won't have `/prototype`:
  - a short shaping step: the question, page goal, audience, primary action and N, written as one line at the top of the prototype
  - 3 variants by default, at most 5, in one self-contained file
  - variants are **structurally different** (layout, hierarchy, primary affordance), never colour or copy tweaks; if two drafts are too similar, one is redone
  - each variant has a one-line note on the trade-off it tests
  - a floating bottom switcher, visually distinct from the design:
    - ← / label / → controls, where the label shows the key and name, e.g. "B (Sidebar layout)"
    - arrow-key cycling, except while an input, textarea or contenteditable is focused
    - the variant is kept in a `?variant=` value, so it can be shared and survives a reload
  - every variant renders inside a Tuinmaximaal page shell (header, USP bar, breadcrumbs, footer, built from DESIGN.md), so variants are judged in context, not in a vacuum. This replaces `/prototype`'s "mount on the existing route".
  - HTML by default, React when there is real state (configurator steps, filters), with state kept in memory and no real mutations
  - delivery depends on the surface: an artifact on claude.ai, the ignored temp prototypes area in the IDE
  - the hand-over invites mix-and-match feedback ("header from B, sidebar from C")
  - left out from `/prototype`: the production gate, the throwaway-branch capture, folding into production code, and the logic/state-machine branch
- **Delegation:** UI copy to `tuinmaximaal-copy`, translation to `tuinmaximaal-translator`, asset paths to `tuinmaximaal-asset-path`. When those skills are unavailable, clearly marked placeholders are used.
- **Audit:**
  - a craft floor adapted from Impeccable (Verify thresholds and Refuse defaults), rewritten as positive targets where possible, with an Apache-2.0 notice listing our changes
  - the refine checklist (polish, harden incl. long DE/FR strings and empty/error states, adapt to mobile)
  - the CRO lens (CTA visibility, trust signals: specs, guarantee, reviews, delivery; friction on the way to the configurator or cart)
  - output: findings ranked by impact, each with the violated rule and a concrete fix

**Blocked by:** 01 (Design system from theme to working skill)

**Status:** ready-for-agent

- [x] Build output always contains the requested number of variants (default 3, max 5), each with a trade-off line, and the variants differ in structure, not just colour
- [x] The switcher cycles with buttons and arrow keys, keeps the variant in `?variant=`, and each variant sits inside the Tuinmaximaal page shell
- [x] Prototypes use only `tmx-*` classes and design-system tokens, with no arbitrary values
- [x] Copy is delegated or visibly marked as a placeholder
- [x] The audit reports ranked findings with rule and fix, and includes a CRO section
- [x] The Apache-2.0 notice for the adapted Impeccable content is present
- [x] The skill entry routes to the build or audit reference and stays within its size budget
- [x] Evaluation prompts 3, 4, 7 and 8 pass in Claude Code; prompt 8 flags every planted violation (orange button, left-border stripe, gradient text, nested cards)

## Comments

**2026-09-25, implementation.**
- `SKILL.md` (34 lines) holds the brand essentials, routes to `references/build.md` or `references/audit.md`, and carries the delegation rules.
- Build: the skeleton now has a page shell modelled on the new site (https://m2stagingnl.intern.systems/): header with the theme logo, menu, USP bar, mobile search, breadcrumbs, footer. It also has a variant registry and a switcher (← / label + trade-off / →, arrow keys except in form fields, `?variant=`, works in sandboxed artifacts). A browser check covered buttons, arrow keys, wrap-around, the input guard, reload with `?variant=`, unknown keys and lowercase keys. React prototypes go inside the same HTML skeleton (React via CDN + Babel), because a bare React artifact can't load the theme config.
- Logo: `npm run design:sync` now copies the theme's `web/images/logo.svg` to `assets/logo.svg`, identical to the staging logo. Prototypes inline it. The theme repo's `git status` was unchanged.
- The skeleton gained the theme's `.list-base` and `.list-usps` (found missing in eval 4).
- Audit: craft floor, refine checklist and CRO lens adapted from Impeccable v4.4.0. `NOTICE.md` lists the changes, and `LICENSE-impeccable.txt` holds the Apache-2.0 text.
- Evals 3, 4, 7 and 8 pass in Claude Code; the results are in `evals/tuinmaximaal-design.md`.
