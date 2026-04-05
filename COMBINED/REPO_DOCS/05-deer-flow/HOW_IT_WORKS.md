# DeerFlow 2.0 — How It Works

**Original repo:** https://github.com/bytedance/deer-flow
**Stars:** 55k ⭐
**Category:** Orchestration / Super Agent
**Local path in vibe-coder:** COMBINED/orchestration/core-deer-flow/
**License:** MIT

---

## What it works (plain language for vibe-coders)
DeerFlow (Deep Exploration and Efficient Research Flow) by ByteDance is an open-source "super agent harness" that orchestrates sub-agents, memory, and sandboxes to do almost anything. It's a ground-up rewrite (v2.0 shares no code with v1). Full-stack: Python 3.12 backend (LangGraph + FastAPI), Next.js 16 + React 19 frontend, nginx gateway on localhost:2026. Features skill system, sub-agent coordination, sandbox modes, MCP server integration, IM channels (Telegram/Discord/Slack), and long-term memory with context engineering.

---

## How the AI reads this repo (startup sequence)
Step 1: AI reads **README.md** → learns DeerFlow is super agent harness, v2.0 architecture, one-line agent setup, quick start, skills & tools
Step 2: AI follows `https://raw.githubusercontent.com/bytedance/deer-flow/main/Install.md` → installation instructions for coding agents
Step 3: AI uses `make dev` → starts all services (backend + frontend + nginx on localhost:2026)
Step 4: AI reads **backend/** → Python packages, agent logic, memory, sandboxes
Step 5: AI reads **frontend/** → Next.js app, UI components, API integration

---

## All files and what they do
| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md (+ translations) | Documentation | Main docs in 5 languages (EN, ZH, JA, FR, RU) |
| Makefile | Build automation | Bootstrap, install, lint, test, run dev |
| backend/ | Python backend | LangGraph + FastAPI gateway, agent harness |
| frontend/ | Next.js frontend | React 19 UI, real-time updates |
| docs/ | Documentation | Architecture guides, API docs |

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
| README.md, Makefile, docs/ | orchestration/core-deer-flow/ | Core super agent harness |
| backend/, frontend/ | orchestration/core-deer-flow/ | Full-stack application |
| Skills | skills/skills-deer-flow/ | DeerFlow skills |

---

## Key insights for ULTRACAR integration
- **Unique capability:** ByteDance's super agent harness — full-stack orchestration platform
- **Highest stars in orchestration:** 55k ⭐ (second only to Superpowers overall)
- **Ground-up rewrite:** v2.0 shares no code with v1 (v1 maintained on 1.x branch)
- **GitHub Trending #1:** February 28, 2026
- **Full-stack:** Python 3.12 + Next.js 16 + React 19 + nginx
- **Local dev:** Single command `make dev` starts all services on localhost:2026
- **Runtime requirements:** Node.js >=22, pnpm 10, Python >=3.12, uv, nginx
- **Extensible skills:** Skill-based architecture for capabilities
- **Sub-agent coordination:** Orchestrates multiple sub-agents
- **Sandbox modes:** Isolated execution environments
- **MCP integration:** Model Context Protocol server support
- **IM channels:** Telegram, Discord, Slack integration
- **Long-term memory:** Persistent memory across sessions
- **Context engineering:** Advanced context management
- **BytePlus InfoQuest:** Integrated intelligent search and crawling toolset
- **Recommended models:** Doubao-Seed-2.0-Code, DeepSeek v3.2, Kimi 2.5
- **Official website:** deerflow.tech with real demos
- **Conflicts:** None identified — enterprise-grade alternative to other orchestration systems
- **Special setup:** Full dev environment (Python, Node, pnpm, uv, nginx)

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
