# 10: Rerun against i3

**What to build:** The user can see whether the lean main context (09) kept or improved quality while cutting context. All 9 eval prompts are rerun in fresh sessions with the updated skill, and each result is compared with its issue 06 counterpart at 375px and `xl` in one comparison file in the ignored temp prototypes area.

**Blocked by:** 09 (Lean main context).

**Status:** done

- [x] All 9 prompts are rerun in fresh Claude Code sessions with the updated skill.
- [x] One comparison file shows every build prompt's i3 and new screenshots side by side at 375px and `xl`.
- [x] Every result is checked against the full pass criteria.
- [x] The eval set's results table has a row per prompt with the date, the commit, the pass or fail, the main-context token use, and notes on any failed criterion.
- [x] The hand-over names the prompts where the reviewer sub-agent caught a violation that shipped in the 06 run, and any prompt where quality dropped.

## Comments

- Ran as fresh general-purpose sub-agent sessions, as in 06: `claude -p` isn't authenticated on this machine. Nested sub-agents (the reviewer, the audit axes) work inside them. Output in `tmp/prototypes/rerun-i5/`: `compare.html` (i3 vs i5 at 375px and `xl`), `grading-notes.md`, `reviews/` (every reviewer report) and the check JSON. `tmp/shots/check-i5.mjs` adds `has-[` and price sizes to check-i3; `tokens.mjs` measures main-context tokens from the session transcripts.
- Harness limit: a sub-agent session is sometimes told to hand off while its own background sub-agent is still running, and the late report lands in the root session. Round 1 lost the review in 1, 4 and 5 and the design-system axis in 7; all four were rerun, and the rerun of 4 and 5 lost the review again. A top-level session would be woken by the notification, so this is a sub-agent eval limit, but build.md could say to start the reviewer in the foreground and wait for it.
- The skill changed on disk at 08:10 (uncommitted `Gumax<sup>®</sup>` rule and issue 11 edits, not from this ticket); only the reruns of 1, 4 and 7 overlapped it.
- Result: 7 of 9 pass (i3: 5). Fixed since i3: 1 (`has-[`), 5 (no big moment), and 4's and 9's i3 image failures. New failures: 4 (full-width sand CTA band, caught by the reviewer but not applied) and 9 (four primaries in one view, missed by the reviewer). Main context fell on 6 of 9 prompts (1, 2, 4, 5, 6 and 8, by 8–23 %), stayed flat on 3 and grew on 7 (+4 %) and 9 (+10 %).
