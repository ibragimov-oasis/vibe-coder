# oh-my-claudecode (OMC) — How It Works

**Original repo:** https://github.com/Yeachan-Heo/oh-my-claudecode
**Stars:** 5k ⭐
**Category:** Orchestration / Multi-agent
**Local path in vibe-coder:** COMBINED/orchestration/core-omc/
**License:** MIT

---

## What it does (plain language for vibe-coders)
oh-my-claudecode (OMC) is multi-agent orchestration for Claude Code with zero learning curve. Just install, setup, and use autopilot. It coordinates specialized agents (19 types: explore, analyst, planner, architect, debugger, executor, verifier, etc.), team mode (staged pipeline: plan → prd → exec → verify → fix loop), and optional Codex/Gemini workers via tmux CLI. Features deep interview for requirements clarification, notepad system, state management, and AI slop cleaner. Install via marketplace or npm, works with Claude Code/Codex/Gemini.

---

## How the AI reads this repo (startup sequence)
Step 1: AI reads **README.md** → learns zero learning curve philosophy, Team mode, agent catalog (19 agents), installation methods
Step 2: AI uses `/omc-setup` → configuration wizard
Step 3: AI uses `autopilot: build X` → automatic build with orchestration
Step 4: AI uses `/team N:executor "task"` → spawn N agents for parallel execution
Step 5: AI reads **docs/** → detailed guides, workflows, migration from legacy versions

---

## All files and what they do
| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md (+ translations) | Documentation | Main docs in 7 languages (EN, KO, ZH, JA, ES, VI, PT) |
| docs/ | Documentation | Migration guides, CLI reference, workflows |
| dist/ | Distribution | Compiled/packaged OMC code |

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
| README.md, docs/ | orchestration/core-omc/ | Core multi-agent orchestration |
| dist/ | orchestration/core-omc/dist/ | Compiled distribution |
| Agents | agents/agents-omc/ | OMC agents (19 types) |
| Skills | skills/skills-omc/ | OMC skills |
| Hooks | hooks/hooks-omc/ | OMC hooks |

---

## Key insights for ULTRACAR integration
- **Unique capability:** Zero learning curve multi-agent orchestration — "Don't learn Claude Code. Just use OMC."
- **Team mode (canonical):** Staged pipeline (team-plan → team-prd → team-exec → team-verify → team-fix loop) since v4.1.7
- **19 specialized agents:** explore (haiku), analyst (opus), planner (opus), architect (opus), debugger (sonnet), executor (sonnet), verifier (sonnet), tracer (sonnet), security-reviewer (sonnet), code-reviewer (opus), test-engineer (sonnet), designer (sonnet), writer (haiku), qa-tester (sonnet), scientist (sonnet), document-specialist (sonnet), git-master (sonnet), code-simplifier (opus), critic (opus)
- **Deep interview:** Socratic questioning to clarify requirements before coding
- **Codex & Gemini workers:** v4.4.0+ uses tmux CLI workers (`omc team N:codex`, `omc team N:gemini`)
- **State management:** `state_read`, `state_write`, `state_clear`, `state_list_active`, `state_get_status`
- **Notepad system:** `notepad_read`, `notepad_write_priority`, `notepad_write_working`, `notepad_write_manual`
- **Project memory:** `project_memory_read`, `project_memory_write`, `project_memory_add_note`, `project_memory_add_directive`
- **AI slop cleaner:** `/deslop` or "anti-slop" keyword triggers cleanup
- **Installation:** Marketplace (`/plugin install oh-my-claudecode`) or npm (`npm i -g oh-my-claude-sisyphus@latest`)
- **Multi-platform:** Claude Code, Codex, Gemini
- **Created by Yeachan-Heo:** Active development, Discord community
- **oh-my-codex sibling:** Same orchestration for OpenAI Codex CLI
- **Conflicts:** May overlap with GSD, RuFlo — can be used together or pick one
- **Special setup:** Claude Code with `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in settings.json

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
