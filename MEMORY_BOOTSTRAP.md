# MEMORY_BOOTSTRAP.md — Eliminate Cold-Start Problems

> **Purpose**: This file gives ANY interface instant context about ULTRACAR v3.0
> without needing to read 50+ files. Read this ONE file and you're operational.
> Last updated: 2026-04-15

---

## 🧠 What is ULTRACAR v3.0?

**One sentence**: An autonomous AI coding system built from 54 elite repositories that works across 6 development interfaces.

**The system**: 15 mega-agents (specialized AI roles), 23 orchestration systems (task coordination), 3 memory systems (context persistence), 12 MCP servers (tool integration), 3,000+ UI components, 3,000+ skills, 4,000+ prompts.

**How it works**: You read a mega-agent file (`COMBINED/agents/mega/`), which gives you the full methodology for that task type. The agent file tells you which skills to apply, which tools to use, and what process to follow.

---

## ⚡ Quick Start (literally 30 seconds)

```
1. What type of task? → Select agent from routing tree below
2. Read the agent file → COMBINED/agents/mega/<agent>.md
3. Execute using the agent's methodology
4. After → Run Shannon security check + save learnings
```

---

## 🧭 Agent Routing (memorize this)

| Task Type | Agent File |
|-----------|-----------|
| Bug/error/crash/fix | `mega-debugger.md` |
| UI/design/frontend | `mega-designer.md` |
| Plan/architecture/PRD | `mega-planner.md` |
| Research/analyze | `mega-researcher.md` |
| Security/vulnerability | `mega-security.md` |
| SEO/meta/sitemap | `mega-seo.md` |
| Code review | `mega-reviewer.md` |
| Test/TDD/coverage | `mega-tester.md` |
| Docs/README/API docs | `mega-writer.md` |
| Deploy/CI/CD/git | `mega-devops.md` |
| Infrastructure/swarm | `mega-infrastructure.md` |
| System design/ADR | `mega-architect.md` |
| Complex multi-concern | `mega-orchestrator.md` |
| Simple coding (default) | `mega-coder.md` |

---

## 🔴 5 Rules (NEVER break)

1. **Browser** = Lightpanda ONLY. Never Chrome. 9× faster.
2. **Memory** = Check supermemory before task, save after.
3. **Design** = Galaxy → shadcn → Impeccable → Taste-skill → Stitch → UI/UX Pro Max.
4. **Pipeline** = Task Master → Background Agent → Hermes → Shannon → Code Review Graph.
5. **Self-improve** = Hermes extracts patterns → creates skills → saves to memory.

---

## 🖥️ Your Interface (what you have)

| Interface | MCP | Unique Power | Config File |
|-----------|:---:|-------------|-------------|
| **Claude Code** | ✅ 9 servers | Hooks + Agent Teams + OMC + Subagents | `.claude/CLAUDE.md` |
| **Cursor** | ✅ 8 servers | Auto-attach rules + Composer | `.cursor/rules/main.mdc` |
| **Copilot** | ⚡ CLI | Squad teams + 15 .agent.md files | `.github/copilot-instructions.md` |
| **Codex** | ⚡ CLI | Sandboxed execution | `.codex/AGENTS.md` |
| **Gemini** | ⚡ CLI | nano-banana + 2M context + search | `.gemini/GEMINI.md` |
| **Antigravity** | ⚡ CLI | Browser subagent + image gen | `.antigravity/AGENTS.md` |

---

## 🎯 Karpathy 4 Principles (apply to ALL code)

1. **Think Before Coding** — state assumptions, present tradeoffs
2. **Simplicity First** — minimum code that solves the problem
3. **Surgical Changes** — only touch what the user asked for
4. **Goal-Driven** — define success, write tests first, loop until verified

---

## 📁 File Map (know where everything lives)

```
Root files:
  AGENTS.md              ← Full catalog (54 repos, 15 agents)
  CAPABILITIES.md        ← 5 hardcoded rules + capability registry
  PIPELINE_TRIGGER.md    ← Pre/post-task pipeline (interface-specific)
  INTERFACE_MATRIX.md    ← What tools work where
  PIPELINE.md            ← Extended pipeline architecture
  MEMORY_BOOTSTRAP.md    ← THIS FILE (quick-start context)

COMBINED/ directory:
  agents/mega/           ← 15 mega-agent files (START HERE)
  agents/by-role/        ← 336+ agents organized by role
  skills/                ← 3,000+ skills in 24 categories
  orchestration/         ← 23 orchestration systems
  security/              ← Shannon Pro pentester
  ui-design/             ← Galaxy + shadcn + Impeccable + Taste-skill + Stitch + UI/UX Pro Max
  mcp-servers/           ← MCP server configurations
  memory/                ← Memory system docs
  prompts/               ← 4,000+ prompts
  reference/             ← Claude HUD, cursor rules, selfhosted

Interface configs:
  .claude/               ← Claude Code (most capable)
  .cursor/               ← Cursor AI (2nd most capable)
  .github/               ← GitHub Copilot (Squad + agents)
  .codex/                ← OpenAI Codex (sandbox)
  .gemini/               ← Gemini CLI (multimodal)
  .antigravity/          ← Antigravity (browser + hooks)
```

---

## ✅ After Every Task

```
═══════════════════════════════════
✅ Security: [PASS / ISSUES FIXED]
✅ Learned:  [NONE / New pattern]
✅ Changed:  [files]
✅ Tests:    [PASS / FAIL / N/A]
═══════════════════════════════════
```

---

*This file eliminates cold-start. You now know enough to operate at full power.*
