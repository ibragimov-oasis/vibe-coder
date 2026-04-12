# AGENTS.md — Universal Agent Catalog

> **Read by all AI interfaces**: Claude Code, GitHub Copilot, Cursor, Gemini CLI, OpenAI Codex
> Last updated: 2026-04-11

---

## QUICK START

Before using any agent, **always** read `CAPABILITIES.md` first.
The autonomous pipeline is described in `PIPELINE.md`.

---

## MEGA AGENTS (start here)

These are the primary agents combining the best capabilities from all 31 source repositories.
Full definitions: `COMBINED/agents/mega/`

| Agent | File | Purpose |
|-------|------|---------|
| `mega-orchestrator` | `mega-orchestrator.md` | Runs the full pipeline, coordinates all agents |
| `mega-debugger` | `mega-debugger.md` | GSD + OMC + RuFlo debugging combined |
| `mega-planner` | `mega-planner.md` | GSD 45kb planner + OMC strategic planning |
| `mega-researcher` | `mega-researcher.md` | Hermes + GSD + DeerFlow deep research |
| `mega-designer` | `mega-designer.md` | Galaxy + shadcn + UI/UX Pro Max rules |
| `mega-security` | `mega-security.md` | Shannon full pentester |
| `mega-seo` | `mega-seo.md` | claude-seo + Antigravity SEO skills |
| `mega-reviewer` | `mega-reviewer.md` | RuFlo + OMC + Superpowers code review |

---

## PIPELINE AGENTS

| Agent | Location | Role in Pipeline |
|-------|----------|-----------------|
| Background Agent | `COMBINED/orchestration/core-background-agents/` | Step 1: task execution |
| Hermes | `COMBINED/agents/agents-hermes/` | Step 2: self-learning loop |
| Shannon | `COMBINED/security/security-shannon/` | Step 3: security audit |

---

## AGENTS BY ROLE

### 🏗️ Architecture & Planning
- `mega-planner` — unified planning agent
- `mega-orchestrator` — pipeline orchestration
- `ruflo-core-planner` → `COMBINED/agents/by-role/planner/ruflo-core-planner.md`
- `gsd-planner` → `COMBINED/agents/by-role/planner/gsd-planner.md`

### 🐛 Debugging
- `mega-debugger` — unified debugging agent
- `gsd-debugger` → `COMBINED/agents/by-role/debugger/gsd-debugger.md`
- `debugger` → `COMBINED/agents/by-role/debugger/debugger.md`

### 🔬 Research & Analysis
- `mega-researcher` — unified research agent
- `gsd-advisor-researcher` → `COMBINED/agents/by-role/researcher/`
- `hermes` → `COMBINED/agents/agents-hermes/`

### 🎨 Design & UI
- `mega-designer` — unified design agent
- `ui-specialist` → `COMBINED/agents/by-role/ui-specialist/`

### 🔒 Security
- `mega-security` — unified security agent (Shannon)
- `security-reviewer` → `COMBINED/agents/by-role/security/`
- `ruflo-security-auditor` → `COMBINED/agents/by-role/security/`

### 📝 Code Review
- `mega-reviewer` — unified reviewer
- `reviewer` → `COMBINED/agents/by-role/reviewer/`

### 📈 SEO
- `mega-seo` — unified SEO agent

### ✍️ Writing & Docs
- `writer` → `COMBINED/agents/by-role/writer/`

---

## AGENTS BY INTERFACE

### Claude Code (`.claude/`)
Source: `COMBINED/agents/by-interface/agents-claude/`
Tools: All tools available including Bash, file I/O, MCP

### GitHub Copilot (`.github/`)
Source: `COMBINED/agents/by-interface/agents-copilot/`
Config: `.github/copilot-instructions.md`

### Cursor (`.cursor/`)
Source: `COMBINED/agents/by-interface/agents-cursor/`
Config: `.cursor/rules/`

### OpenAI Codex (`.codex/`)
Source: `COMBINED/agents/by-interface/agents-codex/`
Config: `.codex/AGENTS.md`

### Antigravity (`.antigravity/`)
Source: `COMBINED/agents/by-interface/agents-antigravity/`

### Gemini CLI (`.gemini/`)
Config: `.gemini/GEMINI.md`

---

## ORCHESTRATION SYSTEMS

| System | Location | Best for |
|--------|----------|---------|
| RuFlo | `COMBINED/orchestration/core-ruflo/` | Agent workflows |
| GSD | `COMBINED/orchestration/core-gsd/` | Task execution |
| OMC | `COMBINED/orchestration/core-omc/` | Multi-agent teams |
| DeerFlow | `COMBINED/orchestration/core-deer-flow/` | Deep research |
| Hermes | `COMBINED/orchestration/core-hermes/` | Self-learning |
| Background Agents | `COMBINED/orchestration/core-background-agents/` | Async tasks |

---

## SKILLS LIBRARY

1,500+ skills organized in `COMBINED/skills/`:
- `skills-ruflo/` — RuFlo skills
- `skills-seo/` — SEO: seo-audit, technical-seo, geo
- `skills-research/` — deep research
- `skills-platform/meta/` — skill creation
- `development/superpowers/` — Superpowers skills

---

## MCP TOOLS AVAILABLE

```json
{
  "lightpanda":  "REQUIRED browser — never use Chrome",
  "gitnexus":    "codebase map and analysis",
  "supermemory": "long-term memory across sessions",
  "openviking":  "codebase context memory",
  "nano-banana": "image generation via Gemini"
}
```

See full config in `.cursor/mcp.json`.
