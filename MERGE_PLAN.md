# 🔀 Skill Merge Plan — Vibe-Coder Arsenal

> **For AI agents:** This document describes the merging strategy for duplicate skills across libraries. Follow these rules exactly when creating combined files.

## Status: IN PROGRESS

## Goal

Combine duplicate SKILL.md files from different libraries into unified "mega-versions" in `_combined/skills/`. **Only add, never reduce or delete content.**

## Rules for Merging

1. **NEVER delete or shorten** — only add new content
2. **Take the LARGEST version as base** — then add everything unique from other versions
3. **Preserve all code examples** — if version A has TypeScript examples and version B has Python, include BOTH
4. **Merge frontmatter** — combine metadata, add `sources:` field listing all origins
5. **Keep all sections** — if one version has a section the others don't, include it
6. **Mark sources** — add `<!-- Source: library-name -->` comments where content was merged from
7. **Original files stay untouched** — `_combined/` is a NEW folder, originals remain as-is

## Output Structure

```
_combined/
└── skills/
    ├── tdd-workflow/
    │   └── SKILL.md          ← merged from 4 sources
    ├── systematic-debugging/
    │   └── SKILL.md          ← merged from 3 sources
    ├── seo-audit/
    │   └── SKILL.md          ← merged from 3 sources
    └── ... (119 total)
```

## Frontmatter Template

```yaml
---
name: <skill-name>
description: "<combined description — longest/best from all sources>"
combined: true
sources:
  - library: "<library-name>"
    path: "<relative path to original>"
  - library: "<library-name>"
    path: "<relative path to original>"
merge_date: "2026-04-01"
---
```

## Phase 1 — Triple+ Duplicates (8 skills, 3+ libraries each)

Priority merges — these have the most divergent content.

| # | Skill | Libraries | Status |
|---|-------|-----------|--------|
| 1 | `tdd-workflow` / `test-driven-development` | hermes-agent, superpowers, antigravity, everything-claude-code | ✅ |
| 2 | `writing-plans` | hermes-agent, superpowers, antigravity | ✅ |
| 3 | `systematic-debugging` | hermes-agent, superpowers, antigravity | ✅ |
| 4 | `subagent-driven-development` | hermes-agent, superpowers, antigravity | ✅ |
| 5 | `skill-creator` | deer-flow, antigravity, OpenViking | ✅ |
| 6 | `seo-audit` | antigravity, claude-seo, claude-skills | ✅ |
| 7 | `requesting-code-review` | hermes-agent, superpowers, antigravity | ✅ |
| 8 | `deep-research` | deer-flow, antigravity, everything-claude-code | ✅ |

## Phase 2 — Orchestration + Agent Duplicates (20 skills)

Skills from Superpowers, RuFlo, DeerFlow, oh-my-claudecode, and Hermes Agent.

| # | Skill | Libraries | Status |
|---|-------|-----------|--------|
| 9 | `writing-skills` | superpowers, antigravity | ⬜ |
| 10 | `workflow-automation` | ruflo, antigravity | ⬜ |
| 11 | `verification-before-completion` | superpowers, antigravity | ⬜ |
| 12 | `using-superpowers` | superpowers, antigravity | ⬜ |
| 13 | `using-git-worktrees` | superpowers, antigravity | ⬜ |
| 14 | `security-audit` | ruflo, antigravity | ⬜ |
| 15 | `receiving-code-review` | superpowers, antigravity | ⬜ |
| 16 | `podcast-generation` | deer-flow, antigravity | ⬜ |
| 17 | `plan` | hermes-agent, oh-my-claudecode | ⬜ |
| 18 | `opencode` | hermes-agent, OpenViking | ⬜ |
| 19 | `github-workflow-automation` | ruflo, antigravity | ⬜ |
| 20 | `github-code-review` | hermes-agent, ruflo | ⬜ |
| 21 | `github-automation` | ruflo, antigravity | ⬜ |
| 22 | `github-issues` | hermes-agent, awesome-copilot | ⬜ |
| 23 | `github` | antigravity, OpenViking | ⬜ |
| 24 | `frontend-design` | deer-flow, antigravity | ⬜ |
| 25 | `finishing-a-development-branch` | superpowers, antigravity | ⬜ |
| 26 | `executing-plans` | superpowers, antigravity | ⬜ |
| 27 | `dispatching-parallel-agents` | superpowers, antigravity | ⬜ |
| 28 | `brainstorming` | superpowers, antigravity | ⬜ |

## Phase 3 — SEO Cluster (16 skills)

All from `antigravity-awesome-skills` + `claude-seo`.

| # | Skill | Libraries | Status |
|---|-------|-----------|--------|
| 29 | `seo` | antigravity, claude-seo | ⬜ |
| 30 | `seo-content` | antigravity, claude-seo | ⬜ |
| 31 | `seo-competitor-pages` | antigravity, claude-seo | ⬜ |
| 32 | `seo-dataforseo` | antigravity, claude-seo | ⬜ |
| 33 | `seo-geo` | antigravity, claude-seo | ⬜ |
| 34 | `seo-hreflang` | antigravity, claude-seo | ⬜ |
| 35 | `seo-image-gen` | antigravity, claude-seo | ⬜ |
| 36 | `seo-images` | antigravity, claude-seo | ⬜ |
| 37 | `seo-page` | antigravity, claude-seo | ⬜ |
| 38 | `seo-plan` | antigravity, claude-seo | ⬜ |
| 39 | `seo-programmatic` | antigravity, claude-seo | ⬜ |
| 40 | `seo-schema` | antigravity, claude-seo | ⬜ |
| 41 | `seo-sitemap` | antigravity, claude-seo | ⬜ |
| 42 | `seo-technical` | antigravity, claude-seo | ⬜ |
| 43 | `ai-seo` | antigravity, claude-skills | ⬜ |
| 44 | `programmatic-seo` | antigravity, claude-skills | ⬜ |

## Phase 4 — Marketing & CRO Cluster (30 skills)

All from `antigravity-awesome-skills` + `claude-skills`.

| # | Skill | Libraries | Status |
|---|-------|-----------|--------|
| 45 | `ab-test-setup` | antigravity, claude-skills | ⬜ |
| 46 | `ad-creative` | antigravity, claude-skills | ⬜ |
| 47 | `analytics-tracking` | antigravity, claude-skills | ⬜ |
| 48 | `app-store-optimization` | antigravity, claude-skills | ⬜ |
| 49 | `brand-guidelines` | antigravity, claude-skills | ⬜ |
| 50 | `browser-automation` | antigravity, claude-skills | ⬜ |
| 51 | `churn-prevention` | antigravity, claude-skills | ⬜ |
| 52 | `cold-email` | antigravity, claude-skills | ⬜ |
| 53 | `competitor-alternatives` | antigravity, claude-skills | ⬜ |
| 54 | `content-creator` | antigravity, claude-skills | ⬜ |
| 55 | `content-strategy` | antigravity, claude-skills | ⬜ |
| 56 | `copy-editing` | antigravity, claude-skills | ⬜ |
| 57 | `copywriting` | antigravity, claude-skills | ⬜ |
| 58 | `email-sequence` | antigravity, claude-skills | ⬜ |
| 59 | `form-cro` | antigravity, claude-skills | ⬜ |
| 60 | `free-tool-strategy` | antigravity, claude-skills | ⬜ |
| 61 | `landing-page-generator` | antigravity, claude-skills | ⬜ |
| 62 | `launch-strategy` | antigravity, claude-skills | ⬜ |
| 63 | `marketing-ideas` | antigravity, claude-skills | ⬜ |
| 64 | `marketing-psychology` | antigravity, claude-skills | ⬜ |
| 65 | `onboarding-cro` | antigravity, claude-skills | ⬜ |
| 66 | `page-cro` | antigravity, claude-skills | ⬜ |
| 67 | `paid-ads` | antigravity, claude-skills | ⬜ |
| 68 | `paywall-upgrade-cro` | antigravity, claude-skills | ⬜ |
| 69 | `popup-cro` | antigravity, claude-skills | ⬜ |
| 70 | `pricing-strategy` | antigravity, claude-skills | ⬜ |
| 71 | `referral-program` | antigravity, claude-skills | ⬜ |
| 72 | `signup-flow-cro` | antigravity, claude-skills | ⬜ |
| 73 | `social-content` | antigravity, claude-skills | ⬜ |
| 74 | `code-reviewer` | antigravity, claude-skills | ⬜ |

## Phase 5 — Dev & Architecture Cluster (25 skills)

| # | Skill | Libraries | Status |
|---|-------|-----------|--------|
| 75 | `tdd-workflow` | antigravity, everything-claude-code | ⬜ |
| 76 | `python-patterns` | antigravity, everything-claude-code | ⬜ |
| 77 | `frontend-slides` | antigravity, everything-claude-code | ⬜ |
| 78 | `e2e-testing` | antigravity, everything-claude-code | ⬜ |
| 79 | `exa-search` | antigravity, everything-claude-code | ⬜ |
| 80 | `claude-api` | antigravity, everything-claude-code | ⬜ |
| 81 | `architecture-decision-records` | antigravity, everything-claude-code | ⬜ |
| 82 | `blueprint` | antigravity, everything-claude-code | ⬜ |
| 83 | `codebase-onboarding` | claude-skills, everything-claude-code | ⬜ |
| 84 | `design-system` | everything-claude-code, ui-ux-pro-max | ⬜ |
| 85 | `senior-architect` | antigravity, claude-skills | ⬜ |
| 86 | `senior-frontend` | antigravity, claude-skills | ⬜ |
| 87 | `senior-fullstack` | antigravity, claude-skills | ⬜ |
| 88 | `product-manager` | antigravity, claude-skills | ⬜ |
| 89 | `product-manager-toolkit` | antigravity, claude-skills | ⬜ |
| 90 | `schema-markup` | antigravity, claude-skills | ⬜ |
| 91 | `snowflake-development` | antigravity, claude-skills | ⬜ |
| 92 | `site-architecture` | antigravity, claude-skills | ⬜ |
| 93 | `prd` | awesome-copilot, claude-skills | ⬜ |
| 94 | `remember` | awesome-copilot, claude-skills | ⬜ |
| 95 | `postgresql-optimization` | antigravity, awesome-copilot | ⬜ |
| 96 | `copilot-sdk` | antigravity, awesome-copilot | ⬜ |
| 97 | `webapp-testing` | antigravity, awesome-copilot | ⬜ |
| 98 | `web-design-guidelines` | deer-flow, antigravity | ⬜ |
| 99 | `google-workspace` | hermes-agent, claude-skills | ⬜ |

## Phase 6 — Supply Chain & Industry Cluster (10 skills)

| # | Skill | Libraries | Status |
|---|-------|-----------|--------|
| 100 | `carrier-relationship-management` | antigravity, everything-claude-code | ⬜ |
| 101 | `customs-trade-compliance` | antigravity, everything-claude-code | ⬜ |
| 102 | `energy-procurement` | antigravity, everything-claude-code | ⬜ |
| 103 | `inventory-demand-planning` | antigravity, everything-claude-code | ⬜ |
| 104 | `logistics-exception-management` | antigravity, everything-claude-code | ⬜ |
| 105 | `production-scheduling` | antigravity, everything-claude-code | ⬜ |
| 106 | `quality-nonconformance` | antigravity, everything-claude-code | ⬜ |
| 107 | `returns-reverse-logistics` | antigravity, everything-claude-code | ⬜ |

## Phase 7 — Remaining (12 skills)

| # | Skill | Libraries | Status |
|---|-------|-----------|--------|
| 108 | `ui-ux-pro-max` | antigravity, ui-ux-pro-max-skill | ⬜ |
| 109 | `shadcn` | antigravity, ui | ⬜ |
| 110 | `tmux` | antigravity, OpenViking | ⬜ |
| 111 | `defuddle` | antigravity, obsidian-skills | ⬜ |
| 112 | `obsidian-markdown` | antigravity, obsidian-skills | ⬜ |
| 113 | `obsidian-cli` | antigravity, obsidian-skills | ⬜ |
| 114 | `obsidian-bases` | antigravity, obsidian-skills | ⬜ |
| 115 | `json-canvas` | antigravity, obsidian-skills | ⬜ |
| 116 | `agentmail` | hermes-agent, antigravity | ⬜ |
| 117 | `base` | hermes-agent, antigravity | ⬜ |
| 118 | `setup` | oh-my-claudecode, claude-skills | ⬜ |
| 119 | `videodb` | antigravity, everything-claude-code | ⬜ |

---

## Progress Tracking

- Total skills to merge: **119**
- Completed: **8** (Phase 1 complete ✅)
- In progress: **0**
- Remaining: **111** (Phases 2-7)
