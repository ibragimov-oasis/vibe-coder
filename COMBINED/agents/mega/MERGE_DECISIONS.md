# Merge Decisions

Design notes that explain how each mega-agent is assembled. Decisions capture chosen base implementations, unique features preserved from each source, and follow-up tasks.

## Mega-Debugger (created 2026-04-05)
- **Base implementation:** `COMBINED/agents/by-role/debugger/gsd-debugger.md` for its scientific method, hypothesis discipline, and persistent debug state guidance.
- **Augmented with:**
  - `COMBINED/agents/agents-omc/debugger.md` → minimal-diff mandate, build error resolution path, 3-failure circuit breaker, explicit success criteria/output format.
  - `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/debug.agent.md` → phased flow (assessment → reproduce → investigate → resolve → QA) and documentation expectations.
- **Integration choices:**
  - Keep GSD’s cognitive-bias and restart protocols as the investigation backbone.
  - Embed OMC’s build-first workflow and minimal-change constraint directly into the execution policy and checklist.
  - Adopt Copilot’s phase names for the default lifecycle and reporting structure.
- **Open follow-ups:**
  - Add performance-debug specifics if a Ruflo/Superpowers debugger surface is located later.
  - Attach tool-specific quickstarts (lsp_diagnostics_directory vs. direct build) per language family.

## Next Priority Order
1) Planner – reconcile GSD planner with Ruflo goal planners and OMC planner; map Copilot planner variants to capabilities matrix.
2) Reviewer – merge Ruflo, OMC, Superpowers reviewer with Copilot reviewers; separate security vs. architecture review tracks.
3) Executor/Coder – align GSD executor with Ruflo coder templates and OMC executor minimal-change policies.
4) Tester – merge Ruflo tester with OMC QA tester and Copilot browser/playwright testers.
5) Security – combine Ruflo security auditor/architect with OMC security reviewer and Copilot security onboarding.

Document decisions per role as drafts before publishing each mega-agent.
