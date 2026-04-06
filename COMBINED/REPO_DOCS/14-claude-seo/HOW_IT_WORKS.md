─────────────────────────────────────────────────────────

# Claude SEO — How It Works

**Original repo:** https://github.com/AgriciDaniel/claude-seo
**Stars:** ~2k ⭐
**Category:** Skills
**Local path in vibe-coder:** Skills/claude-seo/
**License:** MIT

---

## What it does (plain language for vibe-coders)

A comprehensive SEO audit skill for Claude Code. You install it, then run commands like `/seo audit https://yoursite.com` and it performs technical SEO analysis, on-page analysis, content quality (E-E-A-T), schema markup validation, image optimization, sitemap architecture review, AI search optimization (GEO), local SEO, Google API integration, and generates PDF reports. It uses parallel subagents to run multiple analyses simultaneously.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `CLAUDE.md` → learns the project structure, coding standards, and development workflow
Step 2: AI reads `skills/seo/SKILL.md` → loads the master SEO skill with all references (E-E-A-T framework, CWV thresholds, schema types, quality gates)
Step 3: AI reads individual `skills/seo-*/SKILL.md` files → loads specialized sub-skills (audit, page, schema, sitemap, content, geo, local, maps, backlinks, etc.)
Step 4: AI reads `agents/seo-*.md` → learns about 13 specialized subagents that handle parallel audit tasks
Step 5: AI reads `hooks/hooks.json` → discovers pre-commit hooks for schema validation

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Installation guide, commands reference, demo GIFs |
| CLAUDE.md | config | Project structure and development standards for Claude |
| .claude-plugin/plugin.json | config | Plugin manifest for Claude Code marketplace |
| .claude-plugin/marketplace.json | config | Marketplace listing metadata |
| agents/ | directory | 13 specialized SEO subagents (technical, content, schema, geo, local, maps, etc.) |
| skills/seo/SKILL.md | skill | Master SEO skill with references and quality gates |
| skills/seo-audit/SKILL.md | skill | Full website audit with parallel subagent delegation |
| skills/seo-page/SKILL.md | skill | Deep single-page analysis |
| skills/seo-schema/SKILL.md | skill | Schema.org markup detection and validation |
| skills/seo-sitemap/SKILL.md | skill | Sitemap analysis and generation |
| skills/seo-content/SKILL.md | skill | Content quality and E-E-A-T analysis |
| skills/seo-geo/SKILL.md | skill | AI search optimization (Generative Engine Optimization) |
| skills/seo-local/SKILL.md | skill | Local SEO analysis |
| skills/seo-maps/SKILL.md | skill | Google Maps intelligence |
| skills/seo-google/SKILL.md | skill | Google Search Console, PageSpeed, CrUX, GA4 APIs |
| skills/seo-backlinks/SKILL.md | skill | Backlink analysis and quality assessment |
| skills/seo-competitor-pages/SKILL.md | skill | Competitor page analysis |
| skills/seo-images/SKILL.md | skill | Image optimization analysis |
| skills/seo-image-gen/SKILL.md | skill | AI image generation for SEO |
| skills/seo-technical/SKILL.md | skill | Technical SEO deep-dive |
| skills/seo-plan/SKILL.md | skill | Strategic SEO planning with industry templates |
| skills/seo-programmatic/SKILL.md | skill | Programmatic SEO |
| skills/seo-hreflang/SKILL.md | skill | Hreflang tag analysis |
| scripts/ | directory | 20+ Python scripts for fetching pages, Google APIs, screenshot capture, NLP |
| hooks/hooks.json | config | Pre-commit hooks for schema validation |
| hooks/validate-schema.py | script | Schema validation hook |
| extensions/banana/ | directory | Extension for Gemini-powered image generation |
| extensions/dataforseo/ | directory | DataForSEO API integration |
| extensions/firecrawl/ | directory | Firecrawl backlink analysis integration |
| docs/ | directory | Architecture, commands, installation, MCP integration, troubleshooting docs |
| install.sh | script | Unix/macOS installation script |
| install.ps1 | script | Windows PowerShell installation script |

---

## Hidden config files (CRITICAL)

These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .claude-plugin/ | VISIBLE_claude-plugin/ | Plugin manifest and marketplace config |
| .devcontainer/ | VISIBLE_devcontainer/ | Dev container configuration |
| .github/ | VISIBLE_github/ | CI/CD, issue templates, funding config |
| .gitignore | VISIBLE_gitignore | Git ignore rules |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/14-claude-seo/ | Documentation |
| CLAUDE.md | COMBINED/prompts/system/ | Project-level Claude instructions |
| skills/seo*/SKILL.md | COMBINED/skills/seo/ | 15+ SEO skill definitions |
| agents/seo-*.md | COMBINED/agents/by-role/seo/ | 13 specialized SEO subagents |
| hooks/ | COMBINED/hooks/validation/ | Pre-commit schema validation |
| scripts/ | COMBINED/REPO_DOCS/14-claude-seo/scripts/ | Python utility scripts |

---

## Key insights for ULTRACAR integration

- **Most comprehensive SEO skill** in the ecosystem — 15+ sub-skills, 13 subagents, 20+ scripts
- Plugin architecture with extensions (banana for images, dataforseo for data, firecrawl for backlinks)
- Uses Claude Code plugin system (marketplace.json + plugin.json)
- Has hooks integration for automated schema validation
- Includes Google API integration scripts — requires API keys for Search Console, PageSpeed, GA4
- No conflicts with other repos — unique SEO domain specialization

---

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
mv VISIBLE_claude-plugin/ .claude-plugin/
mv VISIBLE_devcontainer/ .devcontainer/
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
