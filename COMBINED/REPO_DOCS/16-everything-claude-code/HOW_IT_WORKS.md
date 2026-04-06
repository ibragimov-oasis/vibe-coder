─────────────────────────────────────────────────────────

# Everything Claude Code — How It Works

**Original repo:** https://github.com/affaan-m/everything-claude-code
**Stars:** ~50k ⭐
**Category:** Skills
**Local path in vibe-coder:** Skills/everything-claude-code/
**License:** MIT

---

## What it does (plain language for vibe-coders)

The #1 agent harness performance system for Claude Code. Provides 60+ skills, 20+ agents, 30+ commands, hooks, rules, and instincts — all designed to make AI agents faster, more reliable, and context-aware. Anthropic Hackathon Winner. Supports Claude Code, Cursor, Codex, OpenCode, Antigravity, and more. Includes ECC 2.0 alpha (Rust control-plane), AgentShield security scanning, session management, NanoClaw model routing, and multi-language rules (TypeScript, Python, Go, Swift, PHP, Kotlin, Java, C++, Rust). 1000+ internal tests passing. Plugin marketplace support.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers installation (plugin marketplace or `install.sh`), version history, and supported platforms
Step 2: AI reads `.agents/skills/*/SKILL.md` → loads 60+ skills (api-design, deep-research, e2e-testing, eval-harness, frontend-design, etc.)
Step 3: AI reads `.claude/commands/` → loads 30+ slash commands (/harness-audit, /loop-start, /quality-gate, /model-route, etc.)
Step 4: AI reads `rules/` → loads multi-language rules (common/, typescript/, python/, golang/, swift/, php/, etc.)
Step 5: AI reads `hooks/` → loads lifecycle hooks (SessionStart, Stop, pre-commit, etc.)
Step 6: AI reads `agents/` → loads 20+ specialized agents (typescript-reviewer, java-build-resolver, kotlin-reviewer, etc.)

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full installation guide, version history, platform support |
| .agents/skills/ | directory | 60+ SKILL.md files (api-design, deep-research, frontend-design, etc.) |
| .agents/plugins/marketplace.json | config | Plugin marketplace manifest |
| .claude/commands/ | directory | 30+ Claude Code slash commands |
| rules/ | directory | Multi-language rules (common, typescript, python, golang, swift, php, kotlin, java, c++, rust) |
| hooks/ | directory | Lifecycle hooks (SessionStart, Stop, pre-commit) |
| agents/ | directory | 20+ specialized agents with role-based configurations |
| install.sh | script | Multi-tool installer with profile support (--profile full/minimal/strict) |
| ecc2/ | directory | ECC 2.0 alpha — Rust control-plane prototype |
| CLAUDE.md | config | Claude Code system instructions |
| AGENTS.md | config | Agent orchestration instructions |

---

## Hidden config files (CRITICAL)

These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .agents/ | VISIBLE_agents/ | Skills, plugins, marketplace manifest |
| .claude/ | VISIBLE_claude/ | Commands, settings |
| .github/ | VISIBLE_github/ | CI/CD workflows |
| .gitignore | VISIBLE_gitignore | Git ignore rules |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/16-everything-claude-code/ | Documentation |
| .agents/skills/ | COMBINED/skills/by-domain/ | 60+ domain-specific skills |
| .claude/commands/ | COMBINED/commands/everything-cc/ | 30+ slash commands |
| rules/ | COMBINED/prompts/system/ecc-rules/ | Multi-language coding rules |
| agents/ | COMBINED/agents/by-role/ | Specialized agent definitions |
| hooks/ | COMBINED/hooks/ecc/ | Lifecycle hooks |

---

## Key insights for ULTRACAR integration

- **Largest agent harness system** — 60+ skills, 20+ agents, 30+ commands, hooks, rules, instincts
- **Anthropic Hackathon Winner** — official recognition from Anthropic
- **Multi-language rules architecture** — 12 language ecosystems with stack-specific rules
- **ECC 2.0 alpha** — Rust control-plane with dashboard, sessions, status, daemon
- **AgentShield** — built-in security scanning (1282 tests, 102 rules)
- **NanoClaw v2** — model routing, skill hot-load, session management
- **Overlaps heavily with claude-skills (Repo 15)** in skill count but focuses on performance and harness optimization
- **Plugin marketplace** — distributable via Claude Code marketplace
- **1000+ internal tests** — most thoroughly tested skill repo in collection

---

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
mv VISIBLE_agents/ .agents/
mv VISIBLE_claude/ .claude/
mv VISIBLE_github/ .github/
mv VISIBLE_gitignore .gitignore
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
