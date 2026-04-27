---
title: "VC_MIGRATION_MAP.md"
aliases: ["VC_MIGRATION_MAP"]
tags:
  - vibe-coder
  - docs
date: 2026-04-27
cssclasses:
  - enriched-document
---

# VC_MIGRATION_MAP

## Root reorganization

| Old path | New path |
|---|---|
| `.claude/` | `vc-kit/configs/vc-claude/` |
| `.cursor/` | `vc-kit/configs/vc-cursor/` |
| `.github/` | `vc-kit/configs/vc-github/` |
| `.antigravity/` | `vc-kit/configs/vc-antigravity/` |
| `.codex/` | `vc-kit/configs/vc-codex/` |
| `.gemini/` | `vc-kit/configs/vc-gemini/` |
| `.claude/` | `vc-kit/content/.claude/` |
| `new_repos/` | `vc-kit/content/Reference/new_repos/` |
| `obsidian_vibe-coder/` | `vc-kit/content/Reference/obsidian_vibe-coder/` |
| `scratch/` | `vc-kit/content/Tools/scratch/` |
| `.cursorrules` | `vc-kit/rules/vc-cursorrules` |
| `.obsidianignore` | `vc-kit/rules/vc-obsidianignore` |
| `.env` | `vc-kit/rules/vc-env` |
| `.env.example` | `vc-kit/rules/vc-env-example` |
| `*.md` (except `README.md`) | `vc-kit/docs/VC_*.md` |
| root scripts (`*.py`, `*.js`, `*.sh`) | `vc-kit/content/Tools/` |

## Remaining root files

- `README.md`
- `LICENSE`
- `.gitignore`
- `llms.txt`
- `vc-kit/`
