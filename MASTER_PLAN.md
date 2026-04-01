# 🗺️ MASTER PLAN — Vibe-Coder Arsenal
> This file is the single source of truth for all AI agents and contributors working on this repository.
> **Read this before doing anything else.**

---

## 🎯 End Goal

One repository that any vibe-coder can clone once — and their AI assistant (Claude, Copilot, Cursor, Antigravity, Gemini CLI, etc.) immediately becomes smarter, more autonomous, and more powerful. No configuration. No research. Just clone → code.

---

## 📁 Current State (What We Have)

31 downloaded public repositories, organized into 7 categories:

| Folder | Contents |
|--------|----------|
| `Agents/` | Background Agents, Hermes Agent, Shannon (pentester) |
| `Orchestration/` | 1Code, DeerFlow, Get Shit Done, oh-my-claudecode, RuFlo, Superpowers, Vibe Kanban |
| `Prompts/` | prompts.chat, System Prompt leaks ×2, Vibe-Coding Prompt Template |
| `Reference/` | Awesome Self-Hosted |
| `Skills/` | Antigravity Skills, Awesome Claude Code, Awesome Copilot, Claude SEO, Claude Skills, Everything Claude Code, Obsidian Skills |
| `Tools/` | GitNexus, OpenViking, Lightpanda Browser, Claude-Mem, Nano Banana 2 MCP, Pretext, Supermemory |
| `UI_UX/` | Galaxy (Uiverse), shadcn/ui, UI UX Pro Max |

**Key problem:** All repos exist separately. AI tools look for specific root folders (`.claude/`, `.github/copilot-instructions.md`, `.cursorrules`, `.antigravity/`, etc.). Right now, there are duplicates and conflicts across repos. They need to be merged into unified, non-conflicting root configs.

---

## 🔑 How AI Tools Use Root Folders (Critical Knowledge)

When you open a project in any AI coding tool, the tool automatically reads these special folders/files:

| AI Tool | Reads From |
|---------|-----------|
| Claude Code | `.claude/` → `CLAUDE.md`, `commands/`, `settings.json` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cursor | `.cursorrules` or `.cursor/rules/` |
| Antigravity | `.antigravity/` → skills, hooks, plugins |
| Windsurf | `.windsurfrules` |
| Gemini CLI | `.gemini/` |
| Any agent | `llms.txt` (public context file for AI crawlers) |

**Our strategy:** Build the best possible version of each of these root configs by combining all relevant content from all 31 repos — without deleting a single line.

---

## 📋 PHASE 1 — Audit & Map (Do First)

**Goal:** Understand exactly what files exist across all repos before touching anything.

### Tasks:
- [x] For each of the 31 folders, list all files inside root config folders (`.claude/`, `.github/`, `.antigravity/`, etc. — now renamed without dots)
- [x] Identify duplicates: same filename in multiple repos (e.g., `CLAUDE.md` appears in 6 repos)
- [x] Identify unique files: only appear in one repo
- [x] Create a map: `AUDIT.md` — table of every config file, which repo it came from, and what it does

**Copilot Prompt for Phase 1:**
```
Read every subfolder inside this repository. For each folder in Agents/, Orchestration/, Skills/, Tools/, UI_UX/, Prompts/, Reference/ — find all files that were originally root config files (they now have underscores or "visible_" prefix instead of dots, e.g., _claude/, visible_github/, _cursorrules). List them in a markdown table: Folder | File | Original Name | Content Summary. Save the result as AUDIT.md in the root of this repository.
```

---

## 📋 PHASE 2 — Build Unified Root Configs (Core Work)

**Goal:** Merge all instructions, skills, hooks, and prompts into single powerful root config files. Never delete — only combine and improve.

### 2.1 — Claude Code Config (`.claude/`)

Merge all `CLAUDE.md` files and all `commands/` folders from:
- Everything Claude Code
- Claude Skills
- Superpowers
- oh-my-claudecode
- RuFlo (ClaudeFlow)
- Get Shit Done
- Awesome Claude Code (curated list → extract best items)

**Output:**
```
.claude/
  CLAUDE.md              ← combined master instructions
  commands/              ← all commands from all repos, deduplicated
    orchestrate.md
    memory.md
    seo.md
    [all others]
  settings.json          ← merged settings
  skills/                ← all skill files combined
```

**Rule:** If two files have the same name and purpose → merge content (add new lines at bottom, never overwrite). If same name but different purpose → keep both, rename one with suffix `_v2`.

> 📄 **Detailed skill merge plan → see [`SKILL_MERGE_PLAN.md`](./SKILL_MERGE_PLAN.md)**
> 119 specific skills mapped across all libraries. Phase 1 (8 triple+ duplicates) already complete ✅

---

### 2.2 — GitHub Copilot Config (`.github/`)

Merge all `copilot-instructions.md` files from:
- Awesome Copilot
- Get Shit Done
- Superpowers (Copilot section)
- Vibe-Coding Prompt Template

**Output:**
```
.github/
  copilot-instructions.md    ← combined master Copilot instructions
  workflows/                 ← any GitHub Actions from repos
```

---

### 2.3 — Cursor Config (`.cursor/` + `.cursorrules`)

Merge all `.cursorrules` and `.cursor/rules/` content from all repos.

**Output:**
```
.cursorrules               ← single combined rules file
.cursor/
  rules/                   ← organized rule files by category
```

---

### 2.4 — Antigravity Config (`.antigravity/`)

Merge all Antigravity skills, hooks, plugins from:
- Antigravity Awesome Skills (1,340+ skills)
- Any Antigravity configs from other repos

**Output:**
```
.antigravity/
  skills/        ← all skills
  hooks/         ← all hooks
  plugins/       ← all plugins
```

---

### 2.5 — Orchestration Master Config

Combine orchestration logic from:
- RuFlo (ClaudeFlow) — 100+ specialized agents, swarm coordination
- DeerFlow (ByteDance) — sub-agents, memory, sandboxes
- Get Shit Done — meta-prompting, context rot solution
- oh-my-claudecode — autopilot mode
- Superpowers — spec + plan + launch loop

**Output:** `ORCHESTRATION.md` — master document explaining how all orchestration systems work together and which to use for which task.

---

### 2.6 — Memory & Context Config

Combine memory systems from:
- Claude-Mem — persistent compressed memory for Claude Code
- Supermemory — state-of-the-art context engine
- OpenViking (ByteDance) — unified memory, resources, skills

**Output:** `MEMORY_SETUP.md` — instructions for activating memory across different AI tools.

---

### 2.7 — Prompts Master Library

Combine prompts from:
- prompts.chat (143k+ stars) — general prompt library
- System Prompts Leaks ×2 — how top AI tools are instructed
- Vibe-Coding Prompt Template — MVP workflow prompts
- Everything Claude Code — optimized agent prompts

**Output:**
```
Prompts/
  COMBINED_PROMPTS.md     ← all prompts in one searchable file
  vibe-coding/            ← prompts for building products
  system-prompts/         ← reference: how major AI tools are built
  optimization/           ← prompts that improve other prompts
```

---

### 2.8 — UI/UX Master Config

Combine design resources from:
- Galaxy (3,000+ UI elements)
- shadcn/ui (React components)
- UI UX Pro Max (161 reasoning rules + 67 styles)
- Pretext (advanced text layout)

**Output:** `UI_UX/COMBINED_DESIGN_SYSTEM.md` — master reference for AI to generate beautiful UIs using all available resources.

---

### 2.9 — Lightpanda Browser Instructions

Add to `.claude/commands/` and `copilot-instructions.md`:
> "For any web browsing, testing, or scraping tasks, prefer Lightpanda browser (9x faster, 16x less memory than Chrome). Setup instructions: [link to Lightpanda folder]"

---

## 📋 PHASE 3 — Create Combined Files (Without Touching Originals)

**Rule:** Originals stay untouched. All combined files go into new `COMBINED/` folders.

```
COMBINED/
  claude/
    COMBINED_CLAUDE.md
    COMBINED_COMMANDS/
  copilot/
    COMBINED_COPILOT_INSTRUCTIONS.md
  cursor/
    COMBINED_CURSORRULES
  antigravity/
    COMBINED_SKILLS/
    COMBINED_HOOKS/
  prompts/
    COMBINED_ALL_PROMPTS.md
  ui/
    COMBINED_DESIGN_SYSTEM.md
  orchestration/
    COMBINED_ORCHESTRATION.md
  memory/
    COMBINED_MEMORY_SETUP.md
```

---

## 📋 PHASE 4 — Root Level Setup Files

Files that go in the **root of the repository** so any AI immediately understands the whole system:

```
/
  README.md              ← already done ✅
  MASTER_PLAN.md         ← this file ✅
  SKILL_MERGE_PLAN.md    ← 119 skills merge tracker ✅ (Phase 1 of 7 complete)
  AUDIT.md               ← to be created in Phase 1
  llms.txt               ← AI crawler index of everything in this repo
  QUICKSTART.md          ← 5-minute guide: clone → activate → vibe
  HOW_TO_COMBINE.md      ← instructions for future AI agents combining more repos
```

### `llms.txt` format:
```
# Vibe-Coder Arsenal
> The ultimate toolkit for AI-powered development. 31 repos, 7 categories.

## Skills
- Claude Skills: /Skills/claude-skills/
- Antigravity Skills: /Skills/antigravity-awesome-skills/
...

## How to activate
Copy COMBINED/ contents to your project root and restore dot-prefixes.
```

---

## 📋 PHASE 5 — QUICKSTART Guide

A file so simple anyone can use this in 5 minutes:

```markdown
# QUICKSTART

## Step 1: Clone
git clone https://github.com/ibragimov-oasis/vibe-coder.git

## Step 2: Copy to your project
cp -r vibe-coder/COMBINED/.claude YOUR_PROJECT/
cp -r vibe-coder/COMBINED/.github YOUR_PROJECT/
cp vibe-coder/COMBINED/.cursorrules YOUR_PROJECT/

## Step 3: Restore hidden names (ask your AI)
"Rename all folders and files in my project that start with _ or visible_ 
back to their original dot-prefix format (e.g., _claude → .claude)"

## Step 4: Vibe
Open your project. Your AI now has 31 repos worth of skills and instructions.
```

---

## 📋 PHASE 6 — Make Public & Promote

- [ ] Add Binance wallet to README `Support` section
- [ ] Set repo to Public on GitHub
- [ ] Add topics/tags: `vibe-coding`, `ai-tools`, `claude-code`, `copilot`, `cursor`, `antigravity`, `llm`, `prompt-engineering`
- [ ] Post to: GitHub Trending (via stars), Reddit r/ChatGPT, r/ClaudeAI, r/LocalLLaMA, Twitter/X, TikTok, Instagram

---

## ⚙️ Rules for All AI Agents Working on This Repo

1. **Never delete original files.** Only create new combined versions.
2. **Never summarize or shorten.** Only add and expand.
3. **When merging:** Append unique content from source B to the bottom of target A. Add a comment header indicating which repo it came from.
4. **When naming combined files:** Use `COMBINED_` prefix.
5. **Update AUDIT.md** after any changes.
6. **If unsure where a file belongs:** Put it in `Reference/` and note it in AUDIT.md.
7. **Lightpanda browser > Playwright** for any web tasks.
8. **Check `llms.txt`** to understand the full scope before working.

---

## 🤖 Master Copilot Prompt (Use This to Start Any Session)

```
Read the file MASTER_PLAN.md in the root of this repository. 
Then read AUDIT.md if it exists.
Your task is to work through the phases in order, starting from the first incomplete phase.
Rules:
- Never delete any original files
- Only create new COMBINED_ files
- Append, never overwrite, when merging
- After each phase, update AUDIT.md
- Ask me before making any structural changes not described in MASTER_PLAN.md

Begin by telling me: which phase is complete, which is in progress, and what you'll do next.
```

---

## 📊 Progress Tracker

| Phase | Status | Notes |
|-------|--------|-------|
| Phase 1 — Audit | ✅ Complete | AUDIT.md created — 172 config files mapped across 31 repos |
| Phase 2 — Build Unified Configs | ✅ Complete | .claude/ .github/ .cursorrules .antigravity/ ORCHESTRATION.md MEMORY_SETUP.md Prompts/COMBINED_PROMPTS.md UI-UX/COMBINED_DESIGN_SYSTEM.md all created |
| Phase 3 — Create COMBINED/ folder | ✅ Complete | COMBINED/ created with 238 files across 74 dirs — claude/, copilot/, cursor/, antigravity/, prompts/, ui/, orchestration/, memory/ + README.md |
| Phase 4 — Root Level Files | ✅ Complete | README ✅, MASTER_PLAN ✅, MERGE_PLAN ✅, AUDIT ✅, llms.txt ✅, QUICKSTART.md ✅, HOW_TO_COMBINE.md ✅ |
| Phase 5 — QUICKSTART | ✅ Complete | Full guide with copy-paste commands for all AI tools, orchestration, memory, FAQ |
| Phase 6 — Go Public | ⬜ Not started | Need wallet address |

---

*Last updated: 2026-04-01*
*Maintained by: [@ibragimov-oasis](https://github.com/ibragimov-oasis)*
