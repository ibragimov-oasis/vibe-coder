─────────────────────────────────────────────────────────

# GitNexus — How It Works

**Original repo:** https://github.com/abhigyanpatwari/GitNexus
**Stars:** ~5k ⭐
**Category:** Tools
**Local path in vibe-coder:** Tools/gitnexus/
**License:** PolyForm Noncommercial 1.0.0

---

## What it does (plain language for vibe-coders)

Indexes any codebase into a knowledge graph — every dependency, call chain, cluster, and execution flow — then exposes it through smart tools so AI agents never miss code. Like DeepWiki but deeper: tracks every relationship, not just descriptions. CLI + MCP for daily dev with Cursor/Claude Code/Codex/Windsurf/OpenCode. Web UI for quick exploration. Uses LadybugDB and Tree-sitter for parsing. Enterprise version includes PR review, auto-updating code wiki, multi-repo support.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers CLI + MCP vs Web UI modes, installation, enterprise features
Step 2: AI reads `.claude/skills/gitnexus/*/SKILL.md` → loads 7 skills (CLI, debugging, exploring, guide, impact-analysis, PR review, refactoring)
Step 3: AI reads `ARCHITECTURE.md` → understands packages, index → graph → MCP flow
Step 4: AI reads `RUNBOOK.md` → learns operational procedures (analyze, embeddings, recovery)
Step 5: AI reads `GUARDRAILS.md` → understands safety rules for contributors and agents
Step 6: AI reads `.cursorrules` → loads Cursor AI rules for the project

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full guide — CLI, Web UI, MCP, enterprise |
| ARCHITECTURE.md | Documentation | Package structure, index → graph → MCP flow |
| RUNBOOK.md | Documentation | Operational procedures |
| GUARDRAILS.md | Documentation | Safety rules for contributors/agents |
| TESTING.md | Documentation | Test commands |
| CONTRIBUTING.md | Documentation | License, setup, commits, PRs |
| .claude/skills/gitnexus/ | directory | 7 Claude Code skills |
| .claude-plugin/ | directory | Plugin manifest and marketplace |
| .cursor/ | directory | Cursor rules (monorepo, eval) |
| .cursorrules | config | Cursor AI rules |
| .github/ | directory | CI/CD, release config, issue/PR templates |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .claude/ | VISIBLE_claude/ | 7 Claude Code skills |
| .claude-plugin/ | VISIBLE_claude-plugin/ | Plugin manifest |
| .cursor/ | VISIBLE_cursor/ | Cursor rules |
| .cursorrules | VISIBLE_cursorrules | Cursor AI rules |
| .github/ | VISIBLE_github/ | CI/CD, release, issue/PR templates |
| .gitattributes | VISIBLE_gitattributes | Git attributes |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/23-gitnexus/ | Documentation |
| .claude/skills/ | COMBINED/skills/by-domain/gitnexus/ | 7 code analysis skills |
| .cursorrules | COMBINED/prompts/system/ | Cursor AI rules |
| ARCHITECTURE.md | COMBINED/REPO_DOCS/23-gitnexus/ | Architecture reference |

---

## Key insights for ULTRACAR integration

- **Knowledge graph for code** — unique approach vs. flat file analysis
- **MCP server** — exposes codebase graph to any AI agent via MCP
- **7 Claude Code skills** — CLI, debugging, exploring, guide, impact-analysis, PR review, refactoring
- **Bridge mode** — `gitnexus serve` connects CLI-indexed repos to Web UI
- **LadybugDB** — native fast persistent storage for the graph
- **Tree-sitter parsing** — AST-level code understanding
- **Enterprise version** — PR blast radius analysis, auto-updating wiki, multi-repo
- **Cursor + Claude support** — both .cursorrules and .claude/ skills included

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_claude/ .claude/
mv VISIBLE_claude-plugin/ .claude-plugin/
mv VISIBLE_cursor/ .cursor/
mv VISIBLE_cursorrules .cursorrules
mv VISIBLE_github/ .github/
mv VISIBLE_gitattributes .gitattributes
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
