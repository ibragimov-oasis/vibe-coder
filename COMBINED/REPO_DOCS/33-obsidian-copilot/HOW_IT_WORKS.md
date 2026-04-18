---
tags:
  - domain/skills
  - artifact/doc
  - source/REPO_DOCS
---

─────────────────────────────────────────────────────────

# Obsidian Copilot — How It Works

**Original repo:** https://github.com/logancyang/obsidian-copilot
**Stars:** ~10k ⭐
**Category:** Obsidian Plugin
**Local path in vibe-coder:** new_repos/obsidian-copilot/
**License:** AGPL-3.0

---

## What it does (plain language for vibe-coders)

Copilot for Obsidian is a full-featured AI assistant plugin that turns any Obsidian vault into a second brain with AI capabilities. It provides chat with vault notes, RAG over your entire knowledge base, inline AI tools, custom agents inside Obsidian, and local model support. It is the bridge between the ULTRACAR agent system and Obsidian knowledge management.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads README.md → discovers Chat, Q&A, RAG, inline tools, local models
Step 2: AI reads docs/ → gets API, configuration, and feature documentation
Step 3: AI reads src/ → understands plugin architecture (TypeScript, React, Obsidian API)
Step 4: Use for: saving AI task outputs to Obsidian vault automatically via vault RAG

---

## Key insights for ULTRACAR integration

- **Obsidian AI bridge** — connects ULTRACAR agents to Obsidian vault for memory
- **RAG over vault** — AI can search the Obsidian vault as long-term memory
- **Chat with notes** — query any note using natural language
- **vault integration** — the obsidian_vibe-coder/ vault is designed to work with this plugin

---

## ULTRACAR Role

Use as the **Obsidian memory layer** — after completing any AI task:
1. AI creates/updates a note in obsidian_vibe-coder/ via obsidian-update.sh
2. Obsidian Copilot plugin indexes the note into RAG
3. Future queries can retrieve this knowledge from vault

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Routing map complete

─────────────────────────────────────────────────────────

## 🔗 Связи

- [[000 - Map of Maps]] — REPO_DOCS
- [[000 - Map of Maps]] — Map of Maps

