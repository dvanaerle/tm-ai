# 09: Lean main context

**What to build:** Both jobs keep the main context for shaping and judging, and hand the mechanical and independent work elsewhere, the way the `code-review` skill runs its axes in sub-agents. Three changes:

1. **Assembly by script.** In a Build the agent writes only the variant sections, the variant registry and the plan line. A script bundled with the skill fills the skeleton's `TAILWIND_CONFIG` and `LOGO_SVG` placeholders and writes the self-contained file. The Tailwind config, the skeleton and the logo (about 60 KB together) no longer pass through the main context, and a truncated config or an altered logo can't happen.
2. **Fresh-context review after Build.** Build step 6 is the author grading their own work. After drafting, a reviewer sub-agent gets only the prototype path. It checks the file against the audit and the Build step 6 checks and returns ranked findings. The main agent fixes them in one pass, and the hand-over names what the review found and what was fixed.
3. **Audit on parallel axes.** An Audit runs a design-system sub-agent (DESIGN.md, the design-system checks and the craft floor) and a CRO sub-agent (purchase path, big moment, logo-swap test) in parallel. The report shows each axis under its own heading, not re-ranked across axes. For a URL, a sub-agent takes the 375px and `xl` captures, so screenshots stay out of the main context.

The skill also runs in claude.ai and Desktop, where it delivers an HTML artifact. Where scripts or sub-agents aren't available, every step falls back to what the skill does today, inline, as the Delegation section already does for the sibling skills.

Per-variant builder sub-agents are out of scope: each would reread DESIGN.md, and independently drafted variants tend to converge. Revisit only if the rerun (10) shows variants that aren't different enough.

**Blocked by:** None (can start immediately).

**Status:** done

- [x] A Build in Claude Code never reads the Tailwind config, skeleton or logo into the main context; the script's output is identical to a manually assembled file for the same variants.
- [x] The script fails loudly when a placeholder is missing or left unfilled.
- [x] After drafting, a reviewer sub-agent with only the file path reviews the prototype, and the hand-over lists its findings and the fixes.
- [x] An Audit runs the design-system and CRO axes as parallel sub-agents and reports them side by side, without re-ranking across axes.
- [x] A URL audit takes its 375px and `xl` captures in a sub-agent; only findings reach the main context.
- [x] Without scripts or sub-agents, Build and Audit still work inline, with the same output as before this ticket.
- [x] SKILL.md, build.md and audit.md describe the new flow; the brand essentials in SKILL.md are unchanged.

## Comments

- `skills/tuinmaximaal-design/scripts/assemble.mjs` fills the skeleton from a slotted parts file (`plan`, `variants`, `main`; optional `title`, `head`, `breadcrumb` for the full shell, `scripts`). `npm test` (`tools/tests/assemble.test.mjs`, 17 tests) checks it against a manual assembly of the real assets (frame, React, full shell) and checks that it exits non-zero without writing when a placeholder or slot is missing, unfilled or inconsistent.
- The reviewer brief lives in `references/review.md`, which only the sub-agent reads. A smoke test on a bare two-variant file returned ranked one-line findings and listed what it couldn't verify.
- The audit's axis split: the design system covers audit steps 2 to 4 minus the purchase path, the big moment and the logo-swap test, which go to CRO with step 5. The inline report keeps the single-list structure.
