# 1Code — How It Works

**Original repo:** https://github.com/21st-dev/1code
**Stars:** 5.4k ⭐
**Category:** Orchestration / UI
**Local path in vibe-coder:** COMBINED/orchestration/core-1code/
**License:** MIT

---

## What it does (plain language for vibe-coders)
1Code is a desktop app that runs Claude Code, Codex, and other coding agents with a visual UI. It's like Cursor, but for multiple AI agents. Each chat runs in its own git worktree (isolated from main branch), agents can work in background cloud sandboxes while your laptop sleeps, you get live browser previews of dev branches, and a kanban board to visualize sessions. It has built-in git client, diff previews, plan mode, MCP server management, and can trigger agents from GitHub/Linear/Slack.

---

## How the AI reads this repo (startup sequence)
Step 1: AI reads **README.md** → learns multi-agent support (Claude/Codex), git worktree isolation, background execution, visual UI features
Step 2: AI reads **AGENTS.md** → learns project architecture, tech stack, contribution guidelines
Step 3: AI reads **CLAUDE.md** → learns Claude-specific integration, how to use 1Code with Claude Code
Step 4: AI uses 1Code UI → visual interface for coding agents

---

## All files and what they do
| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Main docs: features, installation, usage |
| AGENTS.md | Agent configuration | Project architecture, agent patterns |
| CLAUDE.md | Claude integration | Claude Code specific integration guide |
| build/ | Build output | Compiled application files |
| drizzle/ | Database | Drizzle ORM migrations and schema |
| git/ | Git integration | Git worktree and branch management |
| bun.lock, bun.lockb | Bun lockfiles | Dependency lock files for Bun runtime |
| electron-builder.yml | Build config | Electron app build configuration |
| electron-shim.js | Electron shim | Electron runtime shim |
| env.example | Environment template | Example environment variables |

---

## Hidden config files (CRITICAL)
These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .DS_Store | .DS_Store | macOS metadata (kept as-is) |
| .env.example | env.example | Environment variables template |

---

## Routing — where each file belongs in COMBINED/
| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md, AGENTS.md, CLAUDE.md | orchestration/core-1code/ | Core orchestration system |
| build/, drizzle/, git/ | orchestration/core-1code/ | Application code |
| bun.lock, electron-builder.yml | orchestration/core-1code/ | Build configuration |

---

## Key insights for ULTRACAR integration
- **Unique capability:** Visual desktop app for coding agents with kanban board, diff previews, git worktree isolation
- **Multi-agent support:** Run Claude Code, Codex, and other agents in one app
- **Git worktree isolation:** Each chat session in isolated worktree (never touch main branch)
- **Background execution:** Cloud sandboxes that run when laptop sleeps
- **Live browser previews:** See dev branches running in real browser
- **Automations:** Trigger agents from GitHub, Linear, Slack (@1code tags)
- **MCP integration:** Built-in MCP server management and plugin marketplace
- **Plan mode:** Structured planning with markdown preview before execution
- **Pro/Max subscription:** Automations and API access require paid tier
- **Conflicts:** None identified — desktop UI layer for existing agents
- **Special setup:** Requires Bun runtime, Python 3.11, Xcode (macOS), Claude/Codex binaries

---

## How to restore hidden files (for end users)
```bash
# Run this in the local vibe-coder folder to restore original names:
cd COMBINED/orchestration/core-1code/
mv env.example .env.example
```

---

## Status
- [x] README read
- [x] File tree fetched (via local copy)
- [x] Hidden files identified (2 files)
- [x] Routing map complete
- [ ] Added to MASTER_INDEX.md
