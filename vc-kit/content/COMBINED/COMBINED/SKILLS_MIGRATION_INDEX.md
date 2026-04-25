---
tags:
  - domain/skills
  - artifact/doc
  - source/combined-root
---

# Skills Migration Index - Phase 2.4

## Summary
- Total files in mapped Phase 2.4 targets: 4393
- Source repositories covered: Antigravity, Claude Skills, Superpowers, Deer-Flow, Awesome Copilot, Awesome Claude Code, Everything Claude Code, Claude SEO, Obsidian
- Status: COMPLETE

## Mapping and Validation

| Segment | Source | Target | Target Files | Source Files Remaining | Status |
|---|---|---|---:|---:|---|
| 2.4.1 Antigravity | `Skills/antigravity-awesome-skills/skills` | `.claude/skills/development/antigravity` | 73 | 0 | ✅ |
| 2.4.2 Claude Skills (dev base) | `Skills/claude-skills` | `.claude/skills/development/claude-skills` | 1978 | 0 | ✅ |
| 2.4.2 Claude marketing | `Skills/claude-skills/marketing-skill` | `.claude/skills/seo/claude-skills-marketing` | 1 | 0 | ✅ |
| 2.4.2 Claude finance | `Skills/claude-skills/finance` | `.claude/skills/skills-data-analysis/claude-skills-finance` | 1 | 0 | ✅ |
| 2.4.2 Claude growth | `Skills/claude-skills/business-growth` | `.claude/skills/skills-business/claude-skills-growth` | 1 | 0 | ✅ |
| 2.4.2 Claude c-level | `Skills/claude-skills/c-level-advisor` | `.claude/skills/skills-business/claude-skills-c-level` | 3 | 0 | ✅ |
| 2.4.2 Claude ra-qm | `Skills/claude-skills/ra-qm-team` | `.claude/skills/skills-business/claude-skills-ra-qm` | 1 | 0 | ✅ |
| 2.4.2 Claude templates | `Skills/claude-skills/templates` | `.claude/prompts/templates/claude-skills-templates` | 3 | 0 | ✅ |
| 2.4.3 Superpowers | `.claude/orchestration/superpowers/skills` | `.claude/skills/development/superpowers` | 44 | 0 | ✅ |
| 2.4.4 Deer bootstrap | `Orchestration/deer-flow/skills/public/bootstrap` | `.claude/skills/development/deer-flow-bootstrap` | 3 | 0 | ✅ |
| 2.4.4 Deer find-skills | `Orchestration/deer-flow/skills/public/find-skills` | `.claude/skills/development/deer-flow-find-skills` | 2 | 0 | ✅ |
| 2.4.4 Deer skill-creator | `Orchestration/deer-flow/skills/public/skill-creator` | `.claude/skills/development/deer-flow-skill-creator` | 20 | 0 | ✅ |
| 2.4.4 Deer surprise | `Orchestration/deer-flow/skills/public/surprise-me` | `.claude/skills/development/deer-flow-surprise` | 1 | 0 | ✅ |
| 2.4.4 Deer chart | `Orchestration/deer-flow/skills/public/chart-visualization` | `.claude/skills/skills-data-analysis/deer-flow-chart` | 28 | 0 | ✅ |
| 2.4.4 Deer data-analysis | `Orchestration/deer-flow/skills/public/data-analysis` | `.claude/skills/skills-data-analysis/deer-flow-data-analysis` | 2 | 0 | ✅ |
| 2.4.4 Deer consulting | `Orchestration/deer-flow/skills/public/consulting-analysis` | `.claude/skills/research/deer-flow-consulting` | 1 | 0 | ✅ |
| 2.4.4 Deer deep-research | `Orchestration/deer-flow/skills/public/deep-research` | `.claude/skills/research/deer-flow-deep-research` | 1 | 0 | ✅ |
| 2.4.4 Deer github-research | `Orchestration/deer-flow/skills/public/github-deep-research` | `.claude/skills/research/deer-flow-github` | 3 | 0 | ✅ |
| 2.4.4 Deer frontend-design | `Orchestration/deer-flow/skills/public/frontend-design` | `.claude/skills/design/deer-flow-frontend-design` | 2 | 0 | ✅ |
| 2.4.4 Deer image-generation | `Orchestration/deer-flow/skills/public/image-generation` | `.claude/skills/design/deer-flow-image-generation` | 3 | 0 | ✅ |
| 2.4.4 Deer podcast | `Orchestration/deer-flow/skills/public/podcast-generation` | `.claude/skills/skills-writing/deer-flow-podcast` | 3 | 0 | ✅ |
| 2.4.4 Deer ppt | `Orchestration/deer-flow/skills/public/ppt-generation` | `.claude/skills/skills-writing/deer-flow-ppt` | 2 | 0 | ✅ |
| 2.4.4 Deer devops | `Orchestration/deer-flow/skills/public/vercel-deploy-claimable` | `.claude/skills/skills-devops/deer-flow-vercel-deploy` | 2 | 0 | ✅ |
| 2.4.4 Deer integration | `Orchestration/deer-flow/skills/public/claude-to-deerflow` | `.claude/orchestration/deer-flow/claude-integration` | 3 | 0 | ✅ |
| 2.4.5 Awesome Copilot | `Skills/awesome-copilot-main/skills` | `.claude/skills/development/awesome-copilot` | 14 | 0 | ✅ |
| 2.4.5 Awesome Claude Code | `Skills/awesome-claude-code` | `.claude/skills/development/awesome-claude-code` | 288 | 0 | ✅ |
| 2.4.5 Everything Claude Code | `Skills/everything-claude-code` | `.claude/skills/development/everything-claude-code` | 1697 | 0 | ✅ |
| 2.4.5 Claude SEO | `Skills/claude-seo` | `.claude/skills/seo/claude-seo` | 200 | 0 | ✅ |
| 2.4.5 Obsidian | `Skills/obsidian-skills` | `.claude/skills/skills-platform/obsidian` | 13 | 0 | ✅ |

## Notes
- Migration used MOVE operations and preserved file formats and internal subdirectory structure.
- Deer-Flow frontend design skill is also copied to `.claude/ui-design/rules/deer-flow-frontend-design`.
- Claude Skills agents were routed to `.claude/agents/by-role/` by filename role rules from `.claude/READ.ME.md`.
- Claude Skills Python scripts were consolidated to `.claude/skills/development/claude-skills/scripts/`.

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

