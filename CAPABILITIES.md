# VIBE-CODER CAPABILITIES REGISTRY

> **The Brain of the System** — Every agent reads this file first.
> Last updated: 2026-04-11

---

## ⚡ HARDCODED RULES — NON-NEGOTIABLE

### RULE #1: BROWSER
For **ANY** web request, screenshot, or site check —
**ALWAYS** use Lightpanda Browser (9× faster than Chrome, 16× less memory).
**NEVER** use a regular browser. **EVER.**

```bash
# Start Lightpanda CDP server
./lightpanda serve --host 127.0.0.1 --port 9222
# MCP server: see mcpServers.lightpanda in .cursor/mcp.json or .claude/settings.json
```

### RULE #2: MEMORY
- **Short-term** (session): claude-mem → `COMBINED/memory/`
- **Long-term** (cross-session): supermemory → `https://mcp.supermemory.ai/mcp`
- **Codebase context**: OpenViking → `COMBINED/mcp-servers/mcp-openviking/`

Before **ANY** task: check memory for prior work.
After **ANY** task: save learnings to supermemory.

### RULE #3: UI / DESIGN
If a task involves UI, frontend, or design:
1. **First** → Galaxy (`COMBINED/ui-design/galaxy/`) — 3,000+ components
2. **Then** → shadcn/ui (`COMBINED/ui-design/shadcn-ui/`)
3. **Then** → UI/UX Pro Max rules (`COMBINED/ui-design/ui-ux-pro-max/`) — 161 rules
4. **Agent**: `mega-designer` → `COMBINED/agents/mega/mega-designer.md`

### RULE #4: SELF-IMPROVEMENT
After **EVERY** completed task: Hermes agent runs the self-learning loop.
It extracts patterns, creates new skills, and updates supermemory.

### RULE #5: SECURITY
After **EVERY** feature or fix: Shannon agent runs a security audit.
If vulnerabilities found → fix them before marking complete.

---

## CAPABILITY MAP BY TASK TYPE

### 🐛 coding / debugging
```
agents:  mega-debugger, gsd-debugger, omc-debugger, ruflo-debugger
         → COMBINED/agents/mega/mega-debugger.md
         → COMBINED/agents/by-role/debugger/

tools:   gitnexus (code analysis + map)
         lightpanda (visual verification)
memory:  openviking (codebase context)
```

### 🔒 security / pentesting
```
agents:  mega-security, shannon-pentester
         → COMBINED/agents/mega/mega-security.md
         → COMBINED/security/security-shannon/

flow:    mega-security → find vulnerabilities
         → mega-debugger → fix
         → mega-security → re-test
         → repeat until clean

tools:   lightpanda (browser-based attacks: XSS, injection, SSRF)
         gitnexus (static analysis)
```

### 🔬 research / analysis
```
agents:  mega-researcher, hermes-agent, deer-flow-deep-research
         → COMBINED/agents/mega/mega-researcher.md
         → COMBINED/agents/agents-hermes/
         → COMBINED/orchestration/core-deer-flow/

tools:   lightpanda (web browsing)
memory:  supermemory (prior research)
```

### 🎨 design / ui / ux
```
agents:  mega-designer, omc-designer, gsd-ui-auditor
         → COMBINED/agents/mega/mega-designer.md
         → COMBINED/agents/by-role/ui-specialist/

sources: COMBINED/ui-design/galaxy/          ← start here (3,000+ components)
         COMBINED/ui-design/shadcn-ui/
         COMBINED/ui-design/ui-ux-pro-max/

tools:   nano-banana-mcp (image generation via Gemini)
```

### 📈 seo
```
agents:  mega-seo, claude-seo
         → COMBINED/agents/mega/mega-seo.md

skills:  COMBINED/skills/skills-seo/
         → seo-audit, technical-seo, geo, content-optimization
```

### 🗓️ planning / architecture
```
agents:  mega-planner, mega-orchestrator, gsd-planner, omc-planner
         → COMBINED/agents/mega/mega-planner.md
         → COMBINED/agents/mega/mega-orchestrator.md
         → COMBINED/agents/by-role/planner/

tools:   gitnexus (codebase map)
         openviking (context)
```

### 📖 code review
```
agents:  mega-reviewer, ruflo-reviewer, omc-code-reviewer
         → COMBINED/agents/mega/mega-reviewer.md
         → COMBINED/agents/by-role/reviewer/
```

### 🧠 self-improvement / learning
```
agents:  hermes-agent
         → COMBINED/agents/agents-hermes/

trigger: automatically after every completed task
actions: extract patterns → create skills → update supermemory
         → optionally update CAPABILITIES.md
```

---

## MCP SERVERS (use these tools)

| Server | Purpose | Config key |
|--------|---------|-----------|
| `lightpanda` | REQUIRED browser for all web tasks | `lightpanda` |
| `gitnexus` | Codebase map & analysis | `gitnexus` |
| `supermemory` | Long-term memory | `supermemory` |
| `openviking` | Codebase context memory | `openviking` |
| `nano-banana` | Image generation via Gemini | `nano-banana` |

Full config: `.cursor/mcp.json`, `.claude/settings.json`

---

## KEY LOCATIONS

```
COMBINED/
├── agents/
│   ├── mega/              ← MEGA AGENTS (start here)
│   ├── by-role/           ← agents by function
│   └── by-interface/      ← agents by platform
├── skills/                ← 1,500+ skills
├── orchestration/         ← 7 orchestration systems
│   ├── core-ruflo/
│   ├── core-omc/
│   ├── core-gsd/
│   ├── core-deer-flow/
│   ├── core-hermes/
│   └── core-background-agents/
├── security/
│   └── security-shannon/  ← Shannon pentester
├── memory/                ← Memory systems
├── mcp-servers/           ← MCP integrations
├── ui-design/             ← Galaxy, shadcn, ui-ux-pro-max
└── prompts/               ← 2,500+ prompts
```

---

## PIPELINE REFERENCE

See `PIPELINE.md` for the full autonomous execution pipeline.
See `AGENTS.md` for the complete agent catalog.
See `COMBINED/agents/mega/README.md` for mega-agent documentation.
