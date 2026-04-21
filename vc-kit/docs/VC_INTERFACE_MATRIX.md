---
tags:
  - domain/skills
  - artifact/doc
  - source/root
---

# INTERFACE_MATRIX.md — What Works Where

> **Cross-reference for ALL interfaces.** Maps every tool, MCP server, skill, and agent
> to the interfaces that support it, with activation instructions.
> Last updated: 2026-04-15
> Canonical source count: **54 repositories** (31 original + 23 new), see `VC_SOURCE_OF_TRUTH.md`.

---

## 🔌 MCP Servers

| Server | Claude Code | Cursor | Copilot | Codex | Gemini | Antigravity | CLI Workaround |
|--------|:-:|:-:|:-:|:-:|:-:|:-:|--------|
| **lightpanda** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ Browser subagent | `npx -y lightpanda-mcp` |
| **gitnexus** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | `npx -y gitnexus@latest mcp` |
| **supermemory** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | `npx -y supermemory search "<query>"` |
| **openviking** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | `npx -y @openviking/mcp` |
| **nano-banana** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI (native!) | ⚡ Built-in | `npx -y nano-banana-2-mcp` (needs `GEMINI_API_KEY`) |
| **mcp-toolbox** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | `npx -y @toolbox-sdk/server --prebuilt=postgres` |
| **markitdown** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | `pip install markitdown && markitdown <file>` |
| **code-review-graph** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | `uv run code-review-graph serve` |
| **claude-flow** | ✅ MCP | ❌ | ❌ | ❌ | ❌ | ❌ | Claude Code exclusive (agent teams) |
| **pretext** | ⚠️ PLANNED | ⚠️ PLANNED | — | — | — | — | Not yet configured |
| **task-master-ai** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | `npx -y task-master-ai` |
| **archon** | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | `npx archon run <workflow.yaml>` |

**Legend**: 
- ✅ MCP = Configured as MCP server, works natively
- ⚡ CLI = Use the CLI workaround command in terminal
- ⚠️ PLANNED = Documented but not yet configured
- ❌ = Not available for this interface

> **For interfaces without MCP**: Every tool that has a ⚡ CLI column can be used via terminal commands. The CLI commands give you the same functionality — just without the MCP integration layer. If a CLI command fails, skip gracefully and proceed.

---

## 🧠 Memory Systems (Phase 0 — runs before everything)

> See `MEMORY.md` for full protocol.

| Layer | System | Claude Code | Cursor | Copilot | Codex | Gemini | Antigravity | Method |
|:-----:|--------|:-:|:-:|:-:|:-:|:-:|:-:|--------|
| **1** ⛔ | **code-review-graph** | ✅ MCP (22 tools) | ✅ MCP (22 tools) | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | `code-review-graph build/update` |
| **2** | **Claude-Mem** | ✅ Plugin | ❌ | ❌ | ❌ | ❌ | ❌ | Claude Code plugin only |
| **2** | **Supermemory** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | Cross-platform alternative to Claude-Mem |
| **3** | **OpenViking** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | Optional L0/L1/L2 tiers |

**Layer 1 is MANDATORY** — auto-installs and builds on first session. Layers 2-3 are recommended.

---

## 🤖 Mega Agents (Universal — work in ALL interfaces)

All mega-agents are file-based (`COMBINED/agents/mega/*.md`). Any interface that can read files can use them.

| Agent | File | Best For | Routing Trigger |
|-------|------|----------|-----------------|
| mega-orchestrator | `mega-orchestrator.md` | Complex multi-concern tasks | "build a full...", "create a system...", complex request |
| mega-debugger | `mega-debugger.md` | Bug investigation | "fix", "error", "crash", "broken", "bug", "not working" |
| mega-planner | `mega-planner.md` | Architecture, PRDs | "plan", "architecture", "roadmap", "PRD", "design doc" |
| mega-researcher | `mega-researcher.md` | Deep research | "research", "analyze", "investigate", "compare" |
| mega-designer | `mega-designer.md` | UI/UX design | "design", "UI", "frontend", "component", "layout", "page" |
| mega-security | `mega-security.md` | Security audit | "security", "vulnerability", "audit", "pentest" |
| mega-seo | `mega-seo.md` | SEO optimization | "SEO", "meta tags", "sitemap", "search ranking" |
| mega-reviewer | `mega-reviewer.md` | Code review | "review", "code review", "PR review" |
| mega-tester | `mega-tester.md` | Testing & TDD | "test", "TDD", "coverage", "unit test" |
| mega-architect | `mega-architect.md` | System design | "system design", "ADR", "trade-off analysis" |
| mega-coder | `mega-coder.md` | Code implementation | Default for any coding task |
| mega-executor | `mega-executor.md` | Plan execution | "execute the plan", "implement the spec" |
| mega-writer | `mega-writer.md` | Documentation | "docs", "README", "documentation", "API docs" |
| mega-devops | `mega-devops.md` | Git, CI/CD | "deploy", "CI/CD", "git", "docker", "pipeline" |
| mega-infrastructure | `mega-infrastructure.md` | Swarm/infra | "infrastructure", "scaling", "consensus", "swarm" |

---

## 🎯 Skills by Interface

| Skill Category | Path | Best In | Notes |
|---------------|------|:-------:|-------|
| skills-claude | `COMBINED/skills/skills-claude/` | All | Karpathy + 69 best practices — universal |
| skills-development | `COMBINED/skills/skills-development/` | All | Matt Pocock 20 skills — TDD, git-guardrails |
| skills-planning | `COMBINED/skills/skills-planning/` | All | PRD, grill-me, design-interface |
| skills-design | `COMBINED/skills/skills-design/` | All | Impeccable + Taste-skill |
| skills-seo | `COMBINED/skills/skills-seo/` | All | SEOMachine (10 agents, 26 skills) |
| skills-writing | `COMBINED/skills/skills-writing/` | All | edit-article, write-a-skill |
| skills-ruflo | `COMBINED/skills/skills-ruflo/` | Claude | Enterprise orchestration (uses subagents) |
| skills-superpowers | `COMBINED/skills/skills-superpowers/` | All | TDD, systematic dev |
| skills-omc | `COMBINED/skills/skills-omc/` | Claude | OMC delegation best in Claude (subagent system), methodology works everywhere |
| skills-copilot | `COMBINED/skills/skills-copilot/` | Copilot | Best in Copilot (native integration) |
| skills-hermes | `COMBINED/skills/skills-hermes/` | All | Self-learning patterns |
| skills-devops | `COMBINED/skills/skills-devops/` | All | CI/CD, deployment |
| skills-research | `COMBINED/skills/skills-research/` | All | Deep research methods |

---

## 💪 Interface Unique Strengths

| Interface | Unique Power | Status | How to Exploit |
|-----------|-------------|:------:|----------------|
| **Claude Code** | Hooks system (SessionStart, TaskCompleted, etc.) | ✅ Active | `settings.json` hooks auto-trigger pipeline |
| **Claude Code** | Agent Teams (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`) | ✅ Active | Multi-agent parallel work |
| **Claude Code** | OMC multi-agent delegation | ✅ Active | `/team`, agent catalog |
| **Claude Code** | Claude-Mem session memory | ✅ Active | Auto-captures via hooks |
| **Claude Code** | Subagent spawning | ✅ Active | Opus for complex, Haiku for simple |
| **Cursor** | Auto-attach rules (.mdc with globs) | ✅ Active | Rules fire on matching file patterns |
| **Cursor** | Composer mode | ✅ Active | Multi-file editing with full context |
| **Cursor** | 9 MCP servers | ✅ Active | `.cursor/mcp.json` — USE AGGRESSIVELY |
| **Copilot** | Squad agent teams | ✅ Documented | Casting, watch mode, decisions archive |
| **Copilot** | Native GitHub integration | ✅ Native | PR creation, issue management |
| **Copilot** | `.agent.md` custom agents | ✅ Active | `.github/agents/` — 15 mega-agents available |
| **Codex** | Sandboxed execution | ✅ Native | Safe batch/parallel operations |
| **Gemini** | nano-banana (native Gemini API) | ✅ Native | Image generation with natural affinity |
| **Gemini** | Long context (2M tokens) | ✅ Native | Read entire mega-agent files |
| **Gemini** | Search grounding | ✅ Native | Real-time research |
| **Antigravity** | Browser subagent | ✅ Active | Visual web testing and interaction |
| **Antigravity** | Built-in image generation | ✅ Active | UI mockups without external tools |
| **Antigravity** | Hooks + Plugins dirs | ⚠️ Partial | `.antigravity/hooks/` and `.antigravity/plugins/` |

---

## 🔄 Orchestration Systems by Interface Compatibility

| System | Methodology Works In | Best In | Requires |
|--------|:-:|:-:|:-:|
| OMC (multi-agent teams) | All (methodology) | Claude (subagents) | None — it's a process |
| Superpowers (TDD workflow) | All | All | None — it's a process |
| GSD (spec-driven dev) | All | All | None — it's a process |
| RuFlo (Q-Learning Router) | Claude | Claude | Agent teams env var |
| Squad (AI team via Copilot) | Copilot | Copilot | GitHub integration |
| Ralph (PRD autonomous loop) | All | All | File-based (progress.txt) |
| Hermes (self-learning) | All | All | File-based + supermemory |
| Shannon (security) | All | Claude, Cursor | Lightpanda MCP/CLI for dynamic |
| Background Agents | Claude | Claude | Sandboxed environments |
| Archon (YAML DAG) | All (CLI) | All | `npx archon run <workflow.yaml>` |
| Task Master | Claude + Cursor (MCP), All (CLI) | Claude, Cursor | MCP natively, or `npx -y task-master-ai` CLI |
| PraisonAI | Standalone service | — | Separate Python service |
| cc-connect | Standalone service | — | Separate service + chat platform |

---

## 📋 Quick Decision Guide

**I'm using Claude Code**: You have EVERYTHING. Full MCP, hooks, agent teams, OMC, subagents. Use this for complex tasks.

**I'm using Cursor**: You have 9 MCP servers + auto-attach rules. Use MCP aggressively — you're the 2nd most capable. Missing: hooks, agent teams.

**I'm using Copilot**: No MCP but you have Squad and GitHub integration. Best for PR reviews, issue-driven development, team coordination. Use CLI workarounds for tools. 15 mega-agents available as `.agent.md` files!

**I'm using Codex**: Sandboxed execution is your strength. Good for batch processing. Use CLI workarounds for tools. Read mega-agent files from `COMBINED/`.

**I'm using Gemini**: Image generation with nano-banana is natural. Long context lets you read entire files. Use CLI workarounds and leverage multimodal understanding.

**I'm using Antigravity**: Browser subagent + built-in image generation are your strengths. Use CLI workarounds for tools. Read mega-agent files from `COMBINED/`.

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps
