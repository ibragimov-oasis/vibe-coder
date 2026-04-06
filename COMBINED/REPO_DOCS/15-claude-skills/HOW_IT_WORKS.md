─────────────────────────────────────────────────────────

# Claude Skills — How It Works

**Original repo:** https://github.com/alirezarezvani/claude-skills
**Stars:** ~5.2k ⭐
**Category:** Skills
**Local path in vibe-coder:** Skills/claude-skills/
**License:** MIT

---

## What it does (plain language for vibe-coders)

The most comprehensive open-source library of Claude Code skills and agent plugins — 248 production-ready skills, 23 agents, 3 personas, and 22 commands. Works on 11 AI coding tools: Claude Code, OpenAI Codex, Gemini CLI, OpenClaw, Cursor, Aider, Windsurf, Kilo Code, OpenCode, Augment, and Antigravity. Covers engineering, DevOps, marketing, compliance, C-level advisory, and more. Includes 332 Python CLI scripts (all stdlib-only, zero pip installs).

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers the full skill catalog, installation methods, and multi-tool support
Step 2: AI reads `.claude/commands/` → loads 10+ slash commands (review, security-scan, seo-auditor, git/clean, git/cm, etc.)
Step 3: AI reads `.claude-plugin/plugin.json` → understands the plugin manifest and skill organization
Step 4: AI reads individual `skills/*/SKILL.md` → loads domain-specific skills (engineering, product, marketing, C-level)
Step 5: AI reads `.codex/skills-index.json` → understands cross-platform skill mapping for Codex

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full skill catalog, installation guide, multi-tool support docs |
| .claude/commands/ | directory | 10+ Claude Code slash commands (review, security-scan, git operations, etc.) |
| .claude-plugin/plugin.json | config | Plugin manifest for Claude Code marketplace |
| .claude-plugin/marketplace.json | config | Marketplace listing metadata |
| .codex-plugin/plugin.json | config | Plugin manifest for OpenAI Codex |
| .codex/skills-index.json | config | Skills index for Codex platform |
| .codex/skills/ | directory | 200+ skill definitions formatted for Codex |
| .autoresearch/ | directory | Auto-research skill descriptions |
| skills/ | directory | Root skills directory — 248 SKILL.md files organized by domain |
| agents/ | directory | 23 specialized agent definitions |
| scripts/ | directory | 332 Python CLI scripts (stdlib-only) |
| scripts/convert.sh | script | Converts skills to 7 other AI tool formats |
| scripts/gemini-install.sh | script | Gemini CLI installation script |
| scripts/codex-install.sh | script | Codex installation script |
| scripts/install.sh | script | Multi-tool installer (--tool cursor/aider/windsurf/etc.) |

---

## Hidden config files (CRITICAL)

These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .claude/ | VISIBLE_claude/ | Claude Code commands (review, security-scan, git ops, etc.) |
| .claude-plugin/ | VISIBLE_claude-plugin/ | Plugin manifest and marketplace config |
| .codex-plugin/ | VISIBLE_codex-plugin/ | Codex plugin manifest |
| .codex/ | VISIBLE_codex/ | Codex skills index and 200+ skill files |
| .autoresearch/ | VISIBLE_autoresearch/ | Auto-research skill descriptions |
| .github/ | VISIBLE_github/ | CI/CD, issue templates, release config |
| .gitignore | VISIBLE_gitignore | Git ignore rules |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/15-claude-skills/ | Documentation |
| .claude/commands/ | COMBINED/commands/claude-skills/ | 10+ reusable slash commands |
| skills/*/SKILL.md | COMBINED/skills/by-domain/ | 248 domain-specific skills |
| agents/ | COMBINED/agents/by-role/ | 23 specialized agents |
| scripts/ | COMBINED/REPO_DOCS/15-claude-skills/scripts/ | 332 Python CLI tools |
| .claude-plugin/ | COMBINED/REPO_DOCS/15-claude-skills/plugin/ | Plugin configuration reference |

---

## Key insights for ULTRACAR integration

- **Largest skill library by count** — 248 skills across engineering, product, marketing, compliance, C-level advisory, finance
- **Multi-platform** — works on 11 AI coding tools with automatic format conversion via `scripts/convert.sh`
- 332 Python scripts are all stdlib-only (zero dependencies) — can run anywhere
- Plugin system supports both Claude Code and OpenAI Codex marketplaces
- Includes C-level advisory skills (CEO, CFO, CTO, CMO, COO, CPO, CISO, CRO, CHRO) — unique business domain coverage
- Overlaps with antigravity (Repo 11) in skill count but covers different domains (business/marketing vs engineering)
- `scripts/install.sh --tool antigravity` provides direct Antigravity integration

---

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
mv VISIBLE_claude/ .claude/
mv VISIBLE_claude-plugin/ .claude-plugin/
mv VISIBLE_codex-plugin/ .codex-plugin/
mv VISIBLE_codex/ .codex/
mv VISIBLE_autoresearch/ .autoresearch/
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
