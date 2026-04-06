─────────────────────────────────────────────────────────

# Pretext — How It Works

**Original repo:** https://github.com/chenglou/pretext
**Stars:** ~2k ⭐
**Category:** Tools
**Local path in vibe-coder:** Tools/pretext/
**License:** MIT

---

## What it does (plain language for vibe-coders)

Pure JavaScript/TypeScript library for multiline text measurement & layout. No DOM reflow needed. Supports all languages (Arabic, Hebrew, Hindi, Japanese, Korean, Khmer, etc.), emojis, mixed-bidi text. Renders to DOM, Canvas, SVG, and soon server-side. Uses the browser's own font engine as ground truth. Enables proper virtualization, masonry layouts, and layout shift prevention without guesstimates.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers API (prepare/layout, prepareWithSegments/layoutWithLines), features
Step 2: AI reads `CLAUDE.md` → loads Claude Code system instructions
Step 3: AI reads `AGENTS.md` → loads agent orchestration instructions
Step 4: AI reads `STATUS.md` → understands current development status
Step 5: AI reads `DEVELOPMENT.md` → learns development setup (bun)
Step 6: AI reads `RESEARCH.md` → understands text measurement research
Step 7: AI reads `.cursor/rules/` → loads Cursor rules (use-bun-instead-of-node)

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full API guide with code examples |
| CLAUDE.md | config | Claude Code system instructions |
| AGENTS.md | config | Agent orchestration instructions |
| STATUS.md | Documentation | Current development status |
| DEVELOPMENT.md | Documentation | Development setup guide |
| RESEARCH.md | Documentation | Text measurement research notes |
| SECURITY.md | Documentation | Security policy |
| TODO.md | Documentation | Development roadmap |
| CHANGELOG.md | Documentation | Version history |
| .cursor/rules/ | directory | Cursor rules (use-bun-instead-of-node) |
| accuracy/ | directory | Accuracy benchmarks (Chrome, Firefox, Safari) |
| benchmarks/ | directory | Performance benchmarks |
| corpora/ | directory | Test text corpora (Arabic, Hebrew, Hindi, Japanese, Korean, Khmer, etc.) |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .cursor/ | VISIBLE_cursor/ | Cursor rules |
| .github/ | VISIBLE_github/ | GitHub Pages workflow |
| .gitignore | VISIBLE_gitignore | Git ignore rules |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/28-pretext/ | Documentation |
| CLAUDE.md | COMBINED/prompts/system/ | Claude system instructions |
| AGENTS.md | COMBINED/agents/by-role/ | Agent definitions |
| .cursor/rules/ | COMBINED/prompts/system/ | Cursor rules |

---

## Key insights for ULTRACAR integration

- **Unique in collection** — only text measurement/layout library
- **No DOM reflow** — pure arithmetic text layout, critical for performance
- **Universal language support** — tested with Arabic, Hebrew, Hindi, Japanese, Korean, Khmer corpora
- **Bun-first** — uses Bun instead of Node.js (noted in .cursor rules)
- **CLAUDE.md + AGENTS.md** — proper Claude Code integration
- **Cursor rules** — `.cursor/rules/use-bun-instead-of-node.mdc`
- **Complementary to UI repos (30-32)** — provides text measurement for UI components
- **Accuracy tracking** — benchmarks against Chrome, Firefox, Safari rendering

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_cursor/ .cursor/
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
