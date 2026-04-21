---
tags:
  - domain/agents
  - artifact/mega-agent
  - source/mega
---

# Mega Agents — Vibe-Coder

> **15 unified mega-agents** — start here for any task.
> Each mega-agent merges the best capabilities from multiple source repositories.
> Last updated: 2026-04-13

---

## Agent Catalog

| Agent | Purpose | Model | Sources |
|-------|---------|-------|---------|
| [mega-orchestrator](mega-orchestrator.md) | Full pipeline coordination, task routing | opus | RuFlo + GSD + OMC + BG Agents + Superpowers |
| [mega-debugger](mega-debugger.md) | Bug investigation, root cause analysis | sonnet | GSD + OMC + RuFlo + Superpowers |
| [mega-planner](mega-planner.md) | Architecture, roadmaps, PRDs | opus | GSD 45kb + OMC + RuFlo |
| [mega-researcher](mega-researcher.md) | Deep research, technical analysis | opus | Hermes + GSD + DeerFlow |
| [mega-designer](mega-designer.md) | UI/UX design, component creation | sonnet | Galaxy + shadcn + UI/UX Pro Max |
| [mega-security](mega-security.md) | Security pentesting (Shannon Pro) | opus | Shannon Pro (35k⭐) |
| [mega-seo](mega-seo.md) | SEO optimization, GEO | sonnet | Claude-SEO + Antigravity |
| [mega-reviewer](mega-reviewer.md) | Code review (7 dimensions) | opus | RuFlo + OMC + Superpowers |
| [mega-tester](mega-tester.md) | Testing, TDD enforcement | sonnet | OMC + GSD + RuFlo + Superpowers |
| [mega-architect](mega-architect.md) | System architecture (READ-ONLY) | opus | OMC + RuFlo + GSD |
| [mega-coder](mega-coder.md) | Code implementation | sonnet | RuFlo + OMC + Superpowers + Claude-Skills |
| [mega-executor](mega-executor.md) | Plan execution | sonnet | OMC + GSD |
| [mega-writer](mega-writer.md) | Documentation, technical writing | sonnet | OMC + RuFlo + doc-specialist |
| [mega-devops](mega-devops.md) | Git, CI/CD, deployment | sonnet | OMC + RuFlo DevOps |
| [mega-infrastructure](mega-infrastructure.md) | Swarm/consensus/infra coordination | opus | RuFlo (80+ agents) |

---

## How to Choose

| Task Type | Primary Agent | Support Agent |
|-----------|--------------|---------------|
| Bug fix | mega-debugger | mega-tester |
| New feature | mega-coder | mega-tester |
| Architecture design | mega-architect | mega-planner |
| Full project | mega-orchestrator | mega-planner |
| Security audit | mega-security | mega-debugger (for fixes) |
| Code review | mega-reviewer | — |
| Documentation | mega-writer | — |
| UI/UX work | mega-designer | mega-reviewer |
| SEO optimization | mega-seo | mega-researcher |
| Research | mega-researcher | — |
| DevOps/deployment | mega-devops | — |
| Distributed systems | mega-infrastructure | mega-architect |
| Unknown/complex | mega-orchestrator | (it will route) |

---

## The Autonomous Pipeline

```
mega-orchestrator (route task)
    ↓
specialist mega-agent (execute)
    ↓
mega-tester (verify)
    ↓
Hermes (learn)
    ↓
mega-security / Shannon (audit)
    ↓
✅ Complete (or loop back for fixes)
```

See `PIPELINE.md` for full specification.

## 🔗 Связи

- [[MOC - Agents]] — Agent catalog
- [[MOC - Skills]] — Skills library

