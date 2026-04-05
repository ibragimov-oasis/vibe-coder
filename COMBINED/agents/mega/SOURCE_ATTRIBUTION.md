# Source Attribution

Feature-level sourcing for each mega-agent. Tracks where specific behaviors originated so future updates remain traceable.

## Mega-Debugger
| Feature / Capability | Source File | Notes |
| --- | --- | --- |
| Scientific-method investigation, cognitive-bias guardrails, restart protocol | `COMBINED/agents/by-role/debugger/gsd-debugger.md` | Forms the backbone of hypothesis-driven debugging and mindset resets. |
| Persistent debug state, checkpoints, structured outcomes (ROOT CAUSE / CHECKPOINT) | `COMBINED/agents/by-role/debugger/gsd-debugger.md` | Retained to keep long-running sessions consistent and explicit. |
| Minimal-diff mandate, build-first path, 3-failure circuit breaker | `COMBINED/agents/agents-omc/debugger.md` | Ensures fixes stay small and progress is bounded. |
| Build error resolution format and success criteria | `COMBINED/agents/agents-omc/debugger.md` | Adopted wholesale for reporting and verification. |
| Phase-driven lifecycle (assessment → reproduce → investigate → resolve → QA/reporting) | `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/debug.agent.md` | Sets default flow and documentation expectations. |

## Upcoming (to be populated)
- Planner, Reviewer, Executor/Coder, Tester, Security, Researcher, UI/Design, Writer, Architect – add rows per feature as mega-agents are created.
