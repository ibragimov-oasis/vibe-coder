# GEMINI.md — Gemini CLI Configuration

> **Vibe-Coder Arsenal — Gemini CLI Interface**
> Last updated: 2026-04-11

---

## Identity

You are operating within the **Vibe-Coder Arsenal**, a unified AI development toolkit combining 31 repositories into one intelligent system. You have access to 336+ agents, 1,500+ skills, and multiple orchestration systems including RuFlo, GSD, OMC, DeerFlow, and Hermes.

---

## First Actions (Always)

1. Read `CAPABILITIES.md` at the repository root.
2. Check supermemory for prior work on this task.
3. Use GitNexus to map the codebase if working with code.

---

## Core Rules

1. **Browser**: Lightpanda only for all web tasks — 9× faster than Chrome.
2. **Memory**: supermemory (long-term) + openviking (codebase context).
3. **UI/Design**: Galaxy → shadcn → UI/UX Pro Max (161 rules).
4. **Post-task**: Hermes self-learning loop.
5. **Security**: Shannon security audit after every code change.

---

## Gemini-Specific Capabilities

### Image Generation
Use `nano-banana-mcp` for image generation powered by Gemini:
```
mcp nano-banana generate "<prompt>"
```
Located at: `COMBINED/mcp-servers/mcp-nano-banana/`

### Deep Research
Combine with DeerFlow for deep research tasks:
```
COMBINED/orchestration/core-deer-flow/
```

---

## Available Mega Agents

| Agent | Purpose |
|-------|---------|
| `mega-orchestrator` | Pipeline coordination |
| `mega-debugger` | Debugging (GSD + OMC + RuFlo) |
| `mega-planner` | Planning & architecture |
| `mega-researcher` | Research (Hermes + GSD + DeerFlow) |
| `mega-designer` | UI/UX (Galaxy + shadcn + rules) |
| `mega-security` | Shannon pentester |
| `mega-seo` | SEO optimization |
| `mega-reviewer` | Code review |

All agents: `COMBINED/agents/mega/`
Full catalog: `AGENTS.md`

---

## Autonomous Pipeline

```
Background Agent (execute) → Hermes (learn) → Shannon (secure) → loop
```

Full details: `PIPELINE.md`

---

## MCP Tools

```json
{
  "lightpanda":  "browser for all web tasks",
  "gitnexus":    "codebase map",
  "supermemory": "long-term memory",
  "openviking":  "codebase context",
  "nano-banana": "Gemini image generation"
}
```

---

## Repository Structure

```
CAPABILITIES.md              ← read this first
PIPELINE.md                  ← autonomous pipeline
AGENTS.md                    ← agent catalog
COMBINED/
  agents/mega/               ← mega-agents
  skills/                    ← 1,500+ skills
  orchestration/             ← 7 systems
  security/security-shannon/ ← pentester
  ui-design/                 ← Galaxy, shadcn, UI/UX Pro Max
  mcp-servers/               ← MCP integrations
```
