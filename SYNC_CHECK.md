# SYNC_CHECK.md — Governance Drift Prevention

> **Run this checklist whenever canonical source files change.**
> Prevents interface configs from silently diverging from the system design.
> Last updated: 2026-04-18

---

## When to Run This Checklist

Run this checklist when ANY of the following files change:

| Source File Changed | Check These Files |
|--------------------|-------------------|
| `CAPABILITIES.md` | All 6 interface configs + `CORE.md` |
| `PIPELINE_TRIGGER.md` | All 6 interface configs + `CORE.md` |
| `AGENTS.md` | All 6 interface configs + `AUDIT_MATRIX.md` |
| `INTERFACE_MATRIX.md` | All 6 interface configs + `AUDIT_MATRIX.md` |
| `.claude/settings.json` (MCP servers added/removed) | `INTERFACE_MATRIX.md` + `AUDIT_MATRIX.md` + `.cursor/mcp.json` (check parity) |
| `.cursor/mcp.json` (MCP servers added/removed) | `INTERFACE_MATRIX.md` + `AUDIT_MATRIX.md` + `.claude/settings.json` |
| `CORE.md` | All 6 interface configs (verify they reference CORE.md) |
| New mega-agent added to `COMBINED/agents/mega/` | `AGENTS.md` + `CAPABILITIES.md` + `INTERFACE_MATRIX.md` + All 6 interface configs |
| New skill category added to `COMBINED/skills/` | `COMBINED/skills/INDEX.md` (portability table) |

---

## 6-Interface Sync Checklist

When any canonical source changes, verify ALL 6 interface configs have the change:

### Claude Code (`.claude/CLAUDE.md`)
- [ ] Self-identification block present
- [ ] Memory bootstrap block references `bash memory-bootstrap.sh`
- [ ] Agent routing decision tree is current (matches PIPELINE_TRIGGER.md)
- [ ] All active MCP servers listed (check against `.claude/settings.json`)
- [ ] Hooks section present (SessionStart, TaskCompleted, etc.)
- [ ] Squad section N/A (Claude-exclusive: agent teams instead)
- [ ] POST-TASK CHECKLIST present with Shannon + Hermes steps
- [ ] CORE.md referenced

### GitHub Copilot (`.github/copilot-instructions.md`)
- [ ] Self-identification block present
- [ ] Memory bootstrap block present (CLI commands, not MCP)
- [ ] Agent routing decision tree is current (matches PIPELINE_TRIGGER.md)
- [ ] Squad auto-trigger section present for complex tasks
- [ ] All CLI tool alternatives listed for all MCP servers
- [ ] skills-copilot cross-reference present
- [ ] POST-TASK CHECKLIST present with Shannon + Hermes steps
- [ ] CORE.md referenced

### Cursor AI (`.cursor/rules/main.mdc`)
- [ ] Self-identification block present
- [ ] Memory bootstrap block present (MCP commands)
- [ ] Agent routing decision tree is current (matches PIPELINE_TRIGGER.md)
- [ ] `orchestration.mdc` has `alwaysApply: true`
- [ ] All MCP servers listed (check against `.cursor/mcp.json`)
- [ ] Composer mode instructions present
- [ ] POST-TASK pipeline present with Shannon + Hermes steps
- [ ] CORE.md referenced

### OpenAI Codex (`.codex/AGENTS.md`)
- [ ] Self-identification block present
- [ ] Memory bootstrap block present (CLI commands)
- [ ] Agent routing decision tree is current (matches PIPELINE_TRIGGER.md)
- [ ] Sandbox parallel execution patterns present
- [ ] All CLI tool alternatives listed
- [ ] POST-TASK CHECKLIST present
- [ ] CORE.md referenced

### Gemini CLI (`.gemini/GEMINI.md`)
- [ ] Self-identification block present
- [ ] Memory bootstrap block present (CLI commands)
- [ ] Agent routing decision tree is current (matches PIPELINE_TRIGGER.md)
- [ ] Search grounding usage section present (when to use vs Lightpanda)
- [ ] Long context (2M) exploitation notes present
- [ ] nano-banana native advantage documented
- [ ] POST-TASK CHECKLIST present
- [ ] CORE.md referenced

### Antigravity (`.antigravity/AGENTS.md`)
- [ ] Self-identification block present
- [ ] Memory bootstrap block present (CLI commands)
- [ ] Agent routing decision tree is current (matches PIPELINE_TRIGGER.md)
- [ ] Browser subagent vs Lightpanda rule clarified
- [ ] Built-in tools listed (image gen, web search, URL reader)
- [ ] POST-TASK CHECKLIST present
- [ ] CORE.md referenced

---

## MCP Server Parity Check

When MCP servers are added or changed, verify across all interfaces:

| MCP Server | Claude `.claude/settings.json` | Cursor `.cursor/mcp.json` | Copilot CLI table | Codex CLI table | Gemini CLI table | Antigravity CLI table |
|-----------|:---:|:---:|:---:|:---:|:---:|:---:|
| lightpanda | ✅ | ✅ | ✅ | ✅ | ✅ | N/A (browser subagent) |
| gitnexus | ✅ | ✅ | ✅ CLI | ✅ CLI | ✅ CLI | ✅ CLI |
| supermemory | ✅ | ✅ | ✅ CLI | ✅ CLI | ✅ CLI | ✅ CLI |
| openviking | ✅ | ✅ | ✅ CLI | ✅ CLI | ✅ CLI | ✅ CLI |
| nano-banana | ✅ | ✅ | ✅ CLI | ✅ CLI | ✅ native | ✅ native |
| mcp-toolbox | ✅ | ✅ | ✅ CLI | ✅ CLI | ✅ CLI | ✅ CLI |
| markitdown | ✅ | ✅ | ✅ CLI | ✅ CLI | ✅ CLI | ✅ CLI |
| code-review-graph | ✅ | ✅ | ✅ CLI | ✅ CLI | ✅ CLI | ✅ CLI |
| task-master-ai | ✅ | ✅ | ✅ CLI | ✅ CLI | ✅ CLI | ✅ CLI |
| archon | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI |
| claude-flow | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| pretext | ⚠️ planned | ⚠️ planned | — | — | — | — |

---

## Skill Cross-Pollination Check

When new skill categories are added, determine portability and update all relevant configs:

```
UNIVERSAL skills (add references to ALL 6 interface configs):
  - skills-claude/karpathy/        → 4 principles, works anywhere
  - skills-claude/best-practice/   → 69 tips, works anywhere
  - skills-superpowers/            → TDD workflow, works anywhere
  - skills-development/            → Matt Pocock 20 skills, works anywhere
  - skills-planning/               → PRD, grill-me, works anywhere
  - skills-design/                 → Impeccable + Taste-skill, works anywhere
  - skills-writing/                → edit-article, works anywhere
  - skills-devops/                 → CI/CD, works anywhere
  - skills-research/               → deep-research, works anywhere
  - skills-seo/                    → SEOMachine, works anywhere
  - skills-hermes/                 → self-learning, works anywhere

INTERFACE-OPTIMIZED skills (reference in primary + compatible interfaces):
  - skills-copilot/   → Best in Copilot; also works in Claude, Cursor, Codex, Gemini
  - skills-ruflo/     → Best in Claude (subagent spawning); methodology works everywhere
  - skills-omc/       → Best in Claude; methodology works everywhere
  - skills-antigravity/ → Best in Antigravity (hooks/plugins); skills work everywhere

INTERFACE-EXCLUSIVE skills (only reference in owning interface):
  - Claude-Mem session memory → Claude Code only
  - Squad integration → Copilot only
  - Auto-attach .mdc rules → Cursor only
  - Browser recording (WebP) → Antigravity only
  - Search grounding → Gemini only
  - Sandboxed parallel execution → Codex only
```

---

## Post-Sync Validation

After making sync changes, run the REALITY_TEST.md scenarios mentally:
- [ ] Scenario 1 ("admin dashboard") works in Claude, Copilot, Cursor
- [ ] Scenario 2 ("fix auth bug") works in all interfaces
- [ ] Scenario 3 ("security audit payments") works in all interfaces

Then update `AUDIT_MATRIX.md` scores if improvements were made.

---

## Drift Detection Heuristics

Signs that interface configs have drifted from canonical sources:

1. **Outdated agent count** — CAPABILITIES.md says "15 mega-agents" but an interface config says different
2. **Missing new MCP server** — settings.json has a new server but interface CLI table doesn't have it
3. **Routing mismatch** — Decision tree in interface config doesn't match PIPELINE_TRIGGER.md
4. **Missing skill category** — New skills/ subdirectory exists but not referenced anywhere
5. **Wrong interface name** — Config says "You are ULTRACAR v3.0 running as X" but loaded from wrong file
6. **Post-task checklist out of date** — Shannon or Hermes steps changed in PIPELINE_TRIGGER.md but not synced to interface configs
