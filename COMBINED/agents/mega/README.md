# COMBINED/agents/mega — Mega Agents

> **The unified best-of-breed agents from all 31 repositories.**
> Each mega-agent merges the capabilities of its source agents into one comprehensive specialist.
> Last updated: 2026-04-11

---

## What Are Mega Agents?

Mega agents are synthesized agents that combine the best prompts, logic, and strategies from multiple source agents across the 31 repositories. They are the **recommended starting point** for any task.

---

## Catalog

| File | Name | Merged Sources | Best For |
|------|------|---------------|---------|
| `mega-orchestrator.md` | Mega Orchestrator | RuFlo + GSD + OMC orchestrators | Pipeline coordination, delegation |
| `mega-debugger.md` | Mega Debugger | GSD debugger + OMC debugger + RuFlo debugger | All debugging tasks |
| `mega-planner.md` | Mega Planner | GSD planner (45kb) + OMC planner + RuFlo planner | Planning, architecture, roadmaps |
| `mega-researcher.md` | Mega Researcher | Hermes + GSD researcher + DeerFlow | Deep research, analysis |
| `mega-designer.md` | Mega Designer | Galaxy + shadcn + UI/UX Pro Max | UI/UX design, components |
| `mega-security.md` | Mega Security | Shannon (full) | Security audits, pentesting |
| `mega-seo.md` | Mega SEO | claude-seo + Antigravity SEO skills | SEO optimization |
| `mega-reviewer.md` | Mega Reviewer | RuFlo + OMC + Superpowers reviewers | Code review, quality |

---

## Usage

In Claude Code:
```
/agent mega-debugger investigate the failing tests in src/
```

In Cursor:
```
@mega-planner create an architecture plan for the new feature
```

In any interface — reference the agent file directly:
```
See: COMBINED/agents/mega/mega-orchestrator.md
```

---

## Source Agent Locations

| Source System | Location |
|--------------|---------|
| RuFlo agents | `COMBINED/agents/agents-ruflo/` |
| GSD agents | `COMBINED/agents/by-role/` (gsd-* prefixed) |
| OMC agents | `COMBINED/orchestration/core-omc/` |
| DeerFlow agents | `COMBINED/agents/agents-deer-flow/` |
| Hermes agents | `COMBINED/agents/agents-hermes/` |
| Shannon (security) | `COMBINED/security/security-shannon/` |
| Background agents | `COMBINED/agents/background-agents/` |

---

## Creating New Mega Agents

Follow this process:
1. Identify all source agents for the domain (grep `COMBINED/agents/`)
2. Read each source agent's system prompt
3. Extract: best role definition, strongest heuristics, clearest output format
4. Merge into a single agent file in this directory
5. Update this README and `COMBINED/agents/INDEX.md`
