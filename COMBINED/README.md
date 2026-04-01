# COMBINED/ — Ready-to-Copy AI Configurations

> **Phase 3 Output** — All unified configs in one folder, ready to copy into any project.
> Originals remain untouched in their source locations.
> Last updated: 2026-04-01

---

## 🎯 Purpose

This folder contains the **combined, unified versions** of all AI tool configurations from the Vibe-Coder Arsenal. Copy any subfolder into your project root to instantly supercharge your AI assistant.

---

## 📁 Structure

```
COMBINED/
├── claude/                          # Claude Code configuration
│   ├── COMBINED_CLAUDE.md           # Master instructions (472 lines)
│   ├── COMBINED_SETTINGS.json       # Settings with hooks, agents, swarm config
│   ├── COMBINED_COMMANDS/           # 34 command files + 20 subdirectories
│   └── COMBINED_SKILLS/             # 39 skill packages
├── copilot/                         # GitHub Copilot configuration
│   └── COMBINED_COPILOT_INSTRUCTIONS.md  # Master Copilot instructions
├── cursor/                          # Cursor AI configuration
│   ├── COMBINED_CURSORRULES         # Master cursor rules file
│   └── COMBINED_CURSOR_RULES/       # Additional rule files
├── antigravity/                     # Antigravity configuration
│   ├── COMBINED_SKILLS/             # Skills marketplace + plugin config
│   ├── COMBINED_HOOKS/              # Hook documentation
│   └── COMBINED_PLUGINS/            # Plugin marketplace
├── prompts/                         # Prompt library
│   └── COMBINED_ALL_PROMPTS.md      # All prompts in one searchable file
├── ui/                              # UI/UX reference
│   └── COMBINED_DESIGN_SYSTEM.md    # Master design system guide
├── orchestration/                   # Orchestration systems
│   └── COMBINED_ORCHESTRATION.md    # 5 orchestration systems compared
└── memory/                          # Memory systems
    └── COMBINED_MEMORY_SETUP.md     # 3 memory systems compared
```

---

## 🚀 How to Use

### Quick Copy (All Tools)

```bash
# From the vibe-coder repo root:

# Claude Code
cp COMBINED/claude/COMBINED_CLAUDE.md YOUR_PROJECT/.claude/CLAUDE.md
cp COMBINED/claude/COMBINED_SETTINGS.json YOUR_PROJECT/.claude/settings.json
cp -r COMBINED/claude/COMBINED_COMMANDS/* YOUR_PROJECT/.claude/commands/
cp -r COMBINED/claude/COMBINED_SKILLS/* YOUR_PROJECT/.claude/skills/

# GitHub Copilot
cp COMBINED/copilot/COMBINED_COPILOT_INSTRUCTIONS.md YOUR_PROJECT/.github/copilot-instructions.md

# Cursor
cp COMBINED/cursor/COMBINED_CURSORRULES YOUR_PROJECT/.cursorrules
cp -r COMBINED/cursor/COMBINED_CURSOR_RULES/* YOUR_PROJECT/.cursor/rules/

# Antigravity
cp -r COMBINED/antigravity/COMBINED_SKILLS/* YOUR_PROJECT/.antigravity/skills/
cp -r COMBINED/antigravity/COMBINED_HOOKS/* YOUR_PROJECT/.antigravity/hooks/
cp -r COMBINED/antigravity/COMBINED_PLUGINS/* YOUR_PROJECT/.antigravity/plugins/
```

### Copy Just One Tool

If you only use one AI tool, copy just that subfolder:

```bash
# Example: Only Claude Code
mkdir -p YOUR_PROJECT/.claude/commands YOUR_PROJECT/.claude/skills
cp COMBINED/claude/COMBINED_CLAUDE.md YOUR_PROJECT/.claude/CLAUDE.md
cp COMBINED/claude/COMBINED_SETTINGS.json YOUR_PROJECT/.claude/settings.json
cp -r COMBINED/claude/COMBINED_COMMANDS/* YOUR_PROJECT/.claude/commands/
cp -r COMBINED/claude/COMBINED_SKILLS/* YOUR_PROJECT/.claude/skills/
```

### Copy Reference Files

```bash
# Prompts, orchestration, memory, UI/UX guides
cp COMBINED/prompts/COMBINED_ALL_PROMPTS.md YOUR_PROJECT/
cp COMBINED/orchestration/COMBINED_ORCHESTRATION.md YOUR_PROJECT/
cp COMBINED/memory/COMBINED_MEMORY_SETUP.md YOUR_PROJECT/
cp COMBINED/ui/COMBINED_DESIGN_SYSTEM.md YOUR_PROJECT/
```

---

## 📊 What's Included

### Claude Code (`claude/`)

| File | Description | Source |
|------|-------------|--------|
| `COMBINED_CLAUDE.md` | Master instructions from 8+ repos | oh-my-claudecode, claude-skills, background-agents, ruflo, get-shit-done, superpowers, everything-claude-code, awesome-claude-code |
| `COMBINED_SETTINGS.json` | Full settings with hooks, agents, swarm, memory | ruflo v3.5 |
| `COMBINED_COMMANDS/` | 34 commands + 20 sub-categories | All Claude Code repos |
| `COMBINED_SKILLS/` | 39 specialized skill packages | All skill libraries |

### GitHub Copilot (`copilot/`)

| File | Description | Source |
|------|-------------|--------|
| `COMBINED_COPILOT_INSTRUCTIONS.md` | Master Copilot instructions | awesome-copilot, deer-flow, oh-my-claudecode, get-shit-done, superpowers |

### Cursor (`cursor/`)

| File | Description | Source |
|------|-------------|--------|
| `COMBINED_CURSORRULES` | Master rules file | GitNexus, UI repos, conventions |
| `COMBINED_CURSOR_RULES/` | Category-specific rules | All cursor-compatible repos |

### Antigravity (`antigravity/`)

| File | Description | Source |
|------|-------------|--------|
| `COMBINED_SKILLS/` | Skills marketplace config | Antigravity Awesome Skills |
| `COMBINED_HOOKS/` | Hook documentation | Antigravity hooks |
| `COMBINED_PLUGINS/` | Plugin marketplace config | Antigravity plugins |

### Prompts (`prompts/`)

| File | Description | Source |
|------|-------------|--------|
| `COMBINED_ALL_PROMPTS.md` | 330+ prompts searchable | prompts.chat, system-prompts, vibe-coding-template |

### UI/UX (`ui/`)

| File | Description | Source |
|------|-------------|--------|
| `COMBINED_DESIGN_SYSTEM.md` | Master design reference | Galaxy, shadcn/ui, UI UX Pro Max, Pretext |

### Orchestration (`orchestration/`)

| File | Description | Source |
|------|-------------|--------|
| `COMBINED_ORCHESTRATION.md` | 5 systems compared with guides | ruflo, deer-flow, GSD, OMC, superpowers |

### Memory (`memory/`)

| File | Description | Source |
|------|-------------|--------|
| `COMBINED_MEMORY_SETUP.md` | 3 memory systems with setup | claude-mem, supermemory, OpenViking |

---

## ⚠️ Important Notes

1. **Originals are unchanged** — All source files remain in their original locations
2. **These are copies** — Edit either the originals or the COMBINED versions, but keep them in sync
3. **Rename on copy** — When copying to your project, rename to match the expected format (e.g., `COMBINED_CLAUDE.md` → `CLAUDE.md`)
4. **Settings may need adjustment** — `COMBINED_SETTINGS.json` contains paths specific to the ruflo setup; update paths for your project
5. **Skills are self-contained** — Each skill package works independently

---

*Generated as part of Phase 3 of the MASTER_PLAN.md*
*Source: Vibe-Coder Arsenal — 31 repos, 7 categories*
