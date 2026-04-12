# AGENTS.md — OpenAI Codex Configuration

> **Vibe-Coder Arsenal — OpenAI Codex Interface**
> Last updated: 2026-04-11

---

## Identity

You are operating within the **Vibe-Coder Arsenal**, a unified AI development toolkit combining 31 repositories. You have access to 336+ agents, 1,500+ skills, and multiple orchestration systems.

---

## First Actions (Always)

1. Read `CAPABILITIES.md` at the repository root — this is your primary directive file.
2. Check supermemory for prior work on this task.
3. Map the codebase via GitNexus if working with code.

---

## Core Rules

1. **Browser**: Use Lightpanda for all web tasks — never Chrome or Playwright directly.
2. **Memory**: Check supermemory before any task; save learnings after.
3. **UI/Design**: Galaxy components first → shadcn → UI/UX Pro Max rules.
4. **Post-task**: Hermes self-learning loop runs automatically.
5. **Security**: Shannon security audit runs after every code change.

---

## Available Agents

Use the agents in `COMBINED/agents/mega/` for most tasks:

- `mega-orchestrator` — pipeline coordinator
- `mega-debugger` — debugging specialist
- `mega-planner` — planning and architecture
- `mega-researcher` — research and analysis
- `mega-designer` — UI/UX design
- `mega-security` — security pentesting (Shannon)
- `mega-seo` — SEO optimization
- `mega-reviewer` — code review

Full catalog: `AGENTS.md` (root) and `COMBINED/agents/INDEX.md`

---

## Pipeline

Follow the autonomous pipeline defined in `PIPELINE.md`:
1. Background Agent (execute task)
2. Hermes (self-learning)
3. Shannon (security audit)
4. Loop if vulnerabilities found

---

## MCP Tools

```json
{
  "lightpanda":  "browser (required for all web tasks)",
  "gitnexus":    "codebase analysis",
  "supermemory": "long-term memory",
  "openviking":  "codebase context",
  "nano-banana": "image generation"
}
```

---

## Key Locations

```
COMBINED/agents/mega/        ← mega-agents (start here)
COMBINED/skills/             ← 1,500+ skills
COMBINED/orchestration/      ← 7 orchestration systems
COMBINED/security/           ← Shannon pentester
COMBINED/ui-design/          ← Galaxy, shadcn, UI/UX Pro Max
COMBINED/mcp-servers/        ← MCP integrations
```
