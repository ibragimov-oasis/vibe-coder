---
title: Obsidian File Inventory Report
tags:
  - domain/obsidian
  - artifact/report
  - status/active
  - source/root
aliases:
  - file inventory
  - vault census
created: 2026-04-19
type: report
---

# Obsidian File Inventory Report

This file contains a repository-wide inventory for Obsidian knowledge graph analysis.

## 1) Overall totals

- Total files (excluding `.git`): **80478**
- Markdown files (`.md`): **22589** (28.07%)
- Non-Markdown files: **57889** (71.93%)
- Estimated Obsidian attachment files (images/PDF/audio/video/canvas/excalidraw): **1280**

## 2) Top file extensions by count

| Extension | Count | Share of all files |
|---|---:|---:|
| `.md` | 22589 | 28.07% |
| `.py` | 10874 | 13.51% |
| `.json` | 9631 | 11.97% |
| `.tsx` | 5832 | 7.25% |
| `.ts` | 5017 | 6.23% |
| `.html` | 4381 | 5.44% |
| `.js` | 2712 | 3.37% |
| `.go` | 2464 | 3.06% |
| `.mdx` | 2071 | 2.57% |
| `.map` | 1872 | 2.33% |
| `.patch` | 1302 | 1.62% |
| `[no_ext]` | 1003 | 1.25% |
| `.mdc` | 1002 | 1.25% |
| `.rs` | 750 | 0.93% |
| `.txt` | 740 | 0.92% |
| `.yml` | 706 | 0.88% |
| `.yaml` | 699 | 0.87% |
| `.sh` | 669 | 0.83% |
| `.png` | 469 | 0.58% |
| `.sql` | 459 | 0.57% |
| `.xsd` | 351 | 0.44% |
| `.ttf` | 339 | 0.42% |
| `.zig` | 327 | 0.41% |
| `.h` | 303 | 0.38% |
| `.mjs` | 273 | 0.34% |
| `.ipynb` | 226 | 0.28% |
| `.svg` | 215 | 0.27% |
| `.css` | 214 | 0.27% |
| `.csv` | 186 | 0.23% |
| `.sample` | 182 | 0.23% |
| `.cjs` | 166 | 0.21% |
| `.toml` | 130 | 0.16% |
| `.java` | 126 | 0.16% |
| `.cs` | 116 | 0.14% |
| `.php` | 108 | 0.13% |
| `.kt` | 103 | 0.13% |
| `.cpp` | 101 | 0.13% |
| `.example` | 93 | 0.12% |
| `.wav` | 89 | 0.11% |
| `.svelte` | 86 | 0.11% |

## 3) Markdown content breakdown

### 3.1 Primary categories (mutually exclusive)

| Category | Count | Share of `.md` |
|---|---:|---:|
| `skills` | 14115 | 62.49% |
| `prompts` | 314 | 1.39% |
| `agents` | 1359 | 6.02% |
| `docs_readme` | 3302 | 14.62% |
| `other_markdown` | 3499 | 15.49% |

### 3.2 Multi-tag categories (a file can be counted in multiple groups)

| Category | Count |
|---|---:|
| `skills_md` | 14115 |
| `prompts_md` | 328 |
| `agents_md` | 1709 |
| `instructions_md` | 175 |
| `docs_or_readme_md` | 4904 |

## 4) Obsidian graph connectivity signals

- Files with wiki-links `[[...]]`: **22322** out of **22589** (98.82%)
- Total wiki-link occurrences: **52870**
- Files with YAML frontmatter: **22038** out of **22589** (97.56%)
- Files with hashtag tags `#tag` (estimated): **3442** out of **22589** (15.24%)

## 5) Repeated Markdown filenames (common cause of visually similar nodes)

| Filename | Count |
|---|---:|
| `SKILL.md` | 6948 |
| `README.md` | 996 |
| `_index.md` | 334 |
| `implementation-playbook.md` | 326 |
| `charter.md` | 212 |
| `CLAUDE.md` | 143 |
| `source.md` | 86 |
| `AGENTS.md` | 83 |
| `history.md` | 69 |
| `index.md` | 65 |
| `CHANGELOG.md` | 61 |
| `HOW_IT_WORKS.md` | 56 |
| `patterns.md` | 45 |
| `testing.md` | 43 |
| `examples.md` | 42 |
| `security.md` | 41 |
| `TEMPLATE.md` | 39 |
| `hooks.md` | 36 |
| `coding-style.md` | 35 |
| `DESCRIPTION.md` | 35 |

## 6) Markdown concentration by directory (top entries)

| Directory (depth 2) | `.md` count |
|---|---:|
| `COMBINED/skills` | 12403 |
| `COMBINED/orchestration` | 5109 |
| `COMBINED/mcp-servers` | 1442 |
| `COMBINED/ui-design` | 958 |
| `COMBINED/agents` | 712 |
| `COMBINED/commands` | 315 |
| `COMBINED/prompts` | 250 |
| `COMBINED/workspace-config` | 242 |
| `COMBINED/REPO_DOCS` | 209 |
| `.claude/commands` | 186 |
| `COMBINED/memory` | 168 |
| `COMBINED/reference` | 159 |
| `.claude/skills` | 42 |
| `new_repos/obsidian-copilot` | 41 |
| `obsidian_vibe-coder/skills` | 40 |
| `obsidian_vibe-coder/root-docs` | 26 |
| `obsidian_vibe-coder/orchestration` | 17 |
| `obsidian_vibe-coder/obsidian-copilot` | 17 |
| `.github/agents` | 15 |
| `obsidian_vibe-coder/agents` | 15 |
| `obsidian_vibe-coder/agents-by-role` | 13 |
| `obsidian_vibe-coder/ui-design` | 13 |
| `obsidian_vibe-coder/mcp-servers` | 11 |
| `new_repos/obsidian-skills` | 11 |
| `.github/prompts` | 10 |
| `.claude/agents` | 9 |
| `obsidian_vibe-coder/combined` | 9 |
| `COMBINED/security` | 8 |
| `COMBINED/hooks` | 8 |
| `obsidian_vibe-coder/_governance` | 5 |

## 7) Key findings for the next phase

- Most Markdown files are concentrated in `COMBINED/skills` and `COMBINED/orchestration`.
- There are many repeated filenames (especially `SKILL.md`), which explains many similar labels in graph view.
- Nodes already exist at scale, but graph readability still depends on consistent wiki-links, tags, and MOC hub pages.

---

_Generated automatically: 2026-04-19 (UTC)._

## 🔗 Связи

- [[MOC - Sessions]] — All session reports
- [[000 - Map of Maps]] — Root index
- [[_governance/VAULT_GOVERNANCE]] — Vault governance
- [[_audit/COVERAGE_REPORT]] — Coverage audit
