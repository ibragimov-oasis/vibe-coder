# Vibe Kanban — How It Works

**Original repo:** https://github.com/BloopAI/vibe-kanban
**Stars:** 10k ⭐
**Category:** Orchestration / UI
**Local path in vibe-coder:** COMBINED/orchestration/core-vibe-kanban/
**License:** MIT

---

## What it does (plain language for vibe-coders)
Vibe Kanban is a kanban board UI for coding agents. Plan work with kanban issues (create, prioritize, assign), run agents in workspaces (each gets a branch, terminal, dev server), review diffs with inline comments, preview your app in built-in browser with devtools, switch between 10+ coding agents (Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode, Droid, CCR, Qwen Code), and create PRs with AI-generated descriptions. Built with Rust + Node.js + pnpm. One command: `npx vibe-kanban`.

---

## How the AI reads this repo (startup sequence)
Step 1: AI reads **README.md** → learns kanban board for coding agents, workspace model, diff review, multi-agent support
Step 2: AI reads **AGENTS.md** → learns project architecture, contribution guidelines
Step 3: AI uses `npx vibe-kanban` → starts Vibe Kanban UI
Step 4: AI creates issues on kanban board → plans work
Step 5: AI creates workspaces → runs coding agents with isolated branches
Step 6: AI reviews diffs → sends feedback to agents
Step 7: AI previews app → built-in browser with devtools

---

## All files and what they do
| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Main docs: overview, installation, usage |
| AGENTS.md | Agent configuration | Project architecture, coding agent patterns |
| CLAUDE.md | Claude integration | Symlink to AGENTS.md |
| CODE-OF-CONDUCT.md | Code of conduct | Community guidelines |
| CONTRIBUTORS.md | Contributors | List of contributors |
| Cargo.toml, Cargo.lock | Rust config | Rust dependencies and build config |
| Dockerfile | Docker config | Container build instructions |
| Caddyfile.example | Caddy config | Example reverse proxy config |
| assets/ | Assets | Images, logos, screenshots |
| cargo/ | Cargo config | Additional Rust cargo configuration |

---

## Hidden config files (CRITICAL)
These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .DS_Store | .DS_Store | macOS metadata (kept as-is) |

---

## Routing — where each file belongs in COMBINED/
| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md, AGENTS.md | orchestration/core-vibe-kanban/ | Core kanban orchestration UI |
| Cargo.toml, Dockerfile | orchestration/core-vibe-kanban/ | Build configuration |
| assets/ | orchestration/core-vibe-kanban/assets/ | UI assets |

---

## Key insights for ULTRACAR integration
- **Unique capability:** Visual kanban board UI for planning and managing coding agent work
- **Multi-agent support:** 10+ coding agents (Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode, Droid, CCR, Qwen Code)
- **Workspace model:** Each workspace = isolated branch + terminal + dev server
- **Built-in browser:** Preview app with devtools, inspect mode, device emulation
- **Diff review:** Inline comments sent directly to agent
- **PR creation:** AI-generated PR descriptions
- **Tech stack:** Rust (backend) + Node.js + pnpm (frontend)
- **Prerequisites:** Rust (latest stable), Node.js (>=20), pnpm (>=8), cargo-watch, sqlx-cli
- **Dev server:** `pnpm run dev` starts backend + web app
- **Self-hosting:** Can deploy own Vibe Kanban Cloud instance
- **By BloopAI:** Same team behind bloop code search
- **Hiring:** vibekanban.com has job listings
- **Official website:** vibekanban.com
- **Community:** GitHub Discussions for features, GitHub Issues for bugs, Discord
- **Conflicts:** None identified — UI layer for existing agents
- **Special setup:** Rust toolchain, Node.js, pnpm, database setup

---

## How to restore hidden files (for end users)
```bash
# No hidden files renamed (only .DS_Store which is kept as-is)
```

---

## Status
- [x] README read
- [x] File tree fetched (via local copy)
- [x] Hidden files identified (1 file)
- [x] Routing map complete
- [ ] Added to MASTER_INDEX.md
