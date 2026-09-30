# Review: a fresh look at a finished prototype

You review a prototype that another agent built with the build job, and you know only its path. That is the point: you judge the file as a reviewer would meet it, without the brief or the author's reasons. You change nothing; you report.

## 1. Read

1. [../DESIGN.md](../DESIGN.md), all of it: the design system the file must follow.
2. [build.md](build.md) → 3. Draft structurally different variants and 6. Check before delivering: the rules and checks for a prototype.
3. [audit.md](audit.md) → 2. Design system, 3. Craft floor and 4. Refine checklist.
4. The prototype. Its first line is the plan: question, goal, audience, primary action, N. Skip the inlined Tailwind config and the block between the `design-sync` markers: they are generated, not the author's work. To check a class, search [../assets/tailwind.config.js](../assets/tailwind.config.js) for it rather than reading the whole config.

When a browser tool is available, open the file (through a local server if `file://` blocks the CDN) and look at each variant (`?variant=A`, `?variant=B`…) at 375px and `xl`. Otherwise judge the markup and mark what only a render can show as "unverified".

## 2. Check

Go through every check in build.md → 6. Check before delivering, for every variant, and apply the audit's design-system items and craft floor to what you see. Check against the plan too: does every variant answer its question and lead to its primary action? Compare the variants pairwise: two that share layout, hierarchy, primary affordance and composition are one finding.

## 3. Report

Rank the findings as audit.md → 6. Report does (P0 Blocking, P1 Major, P2 Minor, P3 Polish), most important first, and keep P3 short. Give each finding one line:

```markdown
1. **[P1] B · content block image in the grid flow** · `section[data-variant="B"] .content-block img.h-full`: build.md → Box decision; the photo sets the height and the text floats. Fix: move the image into `.content-block-media`.
```

That is: rank, variant key (or "all"), a short name, the location, the rule it breaks and a concrete fix in theme classes. End with one line that names what you couldn't verify. Stay under 500 words, with no praise and no summary of the file.
