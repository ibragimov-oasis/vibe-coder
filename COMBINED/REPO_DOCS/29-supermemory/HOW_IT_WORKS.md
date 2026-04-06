─────────────────────────────────────────────────────────

# Supermemory — How It Works

**Original repo:** https://github.com/supermemoryai/supermemory
**Stars:** ~15k ⭐
**Category:** Tools
**Local path in vibe-coder:** Tools/supermemory/
**License:** AGPL-3.0

---

## What it does (plain language for vibe-coders)

State-of-the-art memory and context engine for AI. #1 on LongMemEval, LoCoMo, and ConvoMem — the three major benchmarks for AI memory. Automatically learns from conversations, extracts facts, builds user profiles, handles knowledge updates and contradictions, forgets expired information. Full RAG, connectors (Google Drive, Gmail, Notion, OneDrive, GitHub), multi-modal extractors (PDFs, images/OCR, videos/transcription, code/AST-aware chunking). Available as SDK (npm + PyPI), browser extension, consumer app, Claude Code plugin, and MCP server.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers memory/RAG/profiles/connectors architecture
Step 2: AI reads `CLAUDE.md` → loads Claude Code integration instructions
Step 3: AI reads `CONTRIBUTING.md` → understands monorepo structure and contribution guidelines
Step 4: AI reads `apps/` → discovers web app, browser extension, MCP server, CLI, docs
Step 5: AI reads `packages/` → discovers SDK packages (client, tools, types)

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full guide — memory, profiles, search, connectors, extractors |
| CLAUDE.md | config | Claude Code system instructions |
| CONTRIBUTING.md | Documentation | Monorepo contribution guidelines |
| apps/web/ | directory | Consumer web app (Next.js) |
| apps/browser-extension/ | directory | Browser extension (ChatGPT, Claude, Twitter, t3 integrations) |
| apps/mcp/ | directory | MCP server |
| apps/cli/ | directory | CLI tool |
| apps/docs/ | directory | Documentation site |
| packages/ | directory | SDK packages (client, tools, types) |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .github/ | VISIBLE_github/ | CI/CD, Claude code review, auto-fix, publish workflows |
| .gitignore | VISIBLE_gitignore | Git ignore rules |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/29-supermemory/ | Documentation |
| CLAUDE.md | COMBINED/prompts/system/ | Claude system instructions |
| apps/mcp/ | COMBINED/mcp-servers/supermemory/ | MCP server |
| packages/ | COMBINED/memory/memory-supermemory/ | SDK packages |

---

## Key insights for ULTRACAR integration

- **#1 on all 3 memory benchmarks** — LongMemEval, LoCoMo, ConvoMem
- **Full memory stack** — fact extraction, user profiles, temporal tracking, contradiction handling
- **Connectors** — Google Drive, Gmail, Notion, OneDrive, GitHub auto-sync
- **Multi-modal** — PDFs, images (OCR), videos (transcription), code (AST-aware chunking)
- **Claude Code plugin** — built-in integration + MCP server
- **Browser extension** — integrates with ChatGPT, Claude, Twitter, t3.chat
- **Consumer app** — standalone at app.supermemory.ai
- **SDK** — npm + PyPI for building custom integrations
- **Complementary to Claude-Mem (Repo 26) and OpenViking (Repo 24)** — three different memory approaches
- **AGPL-3.0** — copyleft license

---

## How to restore hidden files (for end users)

```bash
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
