---
description: Activate the planning agent for architecture, roadmaps, PRDs, and execution plans. Produces plans that any agent can execute without clarification.
---

# /plan — Planning Agent Launcher

This command activates **mega-planner** to create comprehensive, executable plans.

## What this command does

1. Loads `CAPABILITIES.md`
2. Checks `supermemory` for prior plans on this project
3. Maps codebase with `gitnexus` (for technical plans)
4. Activates `mega-planner` agent (`.claude/agents/mega-planner.md`)
5. Produces a plan any agent can execute without clarification

## Planning modes

| Mode | Command | Use when |
|------|---------|---------|
| **Execution plan** | `/plan <task>` | Breaking a task into agent steps |
| **Architecture** | `/plan architecture <system>` | Designing a new system |
| **Roadmap** | `/plan roadmap <feature>` | Multi-phase feature planning |
| **PRD** | `/plan prd <feature>` | Product requirements document |
| **ADR** | `/plan adr <decision>` | Architecture Decision Record |

## Plan quality standards

Every plan produced meets these criteria:
- ✅ Every task has a **named responsible agent**
- ✅ Every task has a **verification criterion**
- ✅ Dependencies are **explicit**
- ✅ Parallel opportunities are **identified**
- ✅ Risks are **listed with mitigations**
- ✅ Success criteria are **measurable**

## GSD phased structure

Plans follow GSD methodology:
```
Phase 0: Discovery    — understand current state
Phase 1: Foundation   — scaffolding, interfaces
Phase 2: Core         — main functionality
Phase 3: Integration  — connect pieces
Phase 4: Validation   — tests, Nyquist verification
Phase 5: Polish       — cleanup, documentation
```

## Handoff to execution

After `/plan` produces a plan, run:
- `/pipeline` — to execute the full plan autonomously
- Reference the plan in any mega-agent invocation

## References

- `.claude/agents/mega-planner.md` — full agent spec
- `.claude/agents/mega-orchestrator.md` — pipeline coordination
- `COMBINED/agents/by-role/planner/` — source planner agents
