# 06: Rerun against i2

**What to build:** The user can see at a glance whether the third iteration brought the prototypes closer to the live site. All 9 eval prompts are rerun with the updated skill, and each result is shown next to its i2 counterpart at 375px and xl in one comparison file in the ignored temp prototypes area. The verdict on "less generic" is the user's; this ticket prepares everything up to that verdict and records it.

**Blocked by:** 05 (Containers, surfaces and restraint).

**Status:** ready-for-agent

- [x] All 9 prompts are rerun in fresh sessions in Claude Code with the updated skill.
- [x] One comparison file shows every build prompt's i2 and new screenshots side by side at 375px and xl.
- [x] Every result is checked against the full pass criteria, including the third-iteration checks from 05.
- [x] The eval set's results table has a row per prompt with the date, the commit and the pass or fail, and notes on any failed criterion.
- [ ] The hand-over asks the user for the "less generic" verdict per prompt and records it in the results table, for this run and for the i2 rows that 04 left pending.
