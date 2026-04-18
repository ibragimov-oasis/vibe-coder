---
title: Document Registry — Full Source Scope
tags:
  - domain/obsidian
  - artifact/report
  - status/active
aliases:
  - document registry
  - source scope
  - mirror registry
created: 2026-04-18
updated: 2026-04-18
type: audit
---

# 📋 Document Registry — Full Source Scope

> **Назначение:** Полный реестр всех markdown-источников репозитория, отображаемых в vault.
> **Принцип:** Mirror-режим — ни одна строка оригинала не изменяется.
> **Формат:** `[приоритет] источник → vault-путь | статус`

---

## 🔴 Зона 1: Корневые документы (Critical)

| Источник | Vault-путь | Статус | MOC |
|----------|-----------|--------|-----|
| `README.md` | `root-docs/README.md` | ✅ Done | [[MOC - System]] |
| `CAPABILITIES.md` | `root-docs/CAPABILITIES.md` | ✅ Done | [[MOC - System]] |
| `AGENTS.md` | `root-docs/AGENTS.md` | ✅ Done | [[MOC - Agents]] |
| `PIPELINE.md` | `root-docs/PIPELINE.md` | ✅ Done | [[MOC - System]] |
| `PIPELINE_TRIGGER.md` | `root-docs/PIPELINE_TRIGGER.md` | ✅ Done | [[MOC - System]] |
| `INTERFACE_MATRIX.md` | `root-docs/INTERFACE_MATRIX.md` | ✅ Done | [[MOC - System]] |
| `QUICKSTART.md` | `root-docs/QUICKSTART.md` | ✅ Done | [[MOC - System]] |
| `CONTRIBUTING.md` | `root-docs/CONTRIBUTING.md` | ✅ Done | [[MOC - System]] |
| `MEMORY.md` | `root-docs/MEMORY.md` | ✅ Done | [[MOC - Memory]] |
| `MEMORY_SETUP.md` | `root-docs/MEMORY_SETUP.md` | ✅ Done | [[MOC - Memory]] |
| `MEMORY_BOOTSTRAP.md` | `root-docs/MEMORY_BOOTSTRAP.md` | ✅ Done | [[MOC - Memory]] |
| `ORCHESTRATION.md` | `root-docs/ORCHESTRATION.md` | ✅ Done | [[MOC - Orchestration]] |
| `MASTER_PLAN.md` | `root-docs/MASTER_PLAN.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `EXECUTION_PLAN.md` | `root-docs/EXECUTION_PLAN.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `AUDIT.md` | `root-docs/AUDIT.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `HOW_TO_COMBINE.md` | `root-docs/HOW_TO_COMBINE.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `MERGE_PLAN.md` | `root-docs/MERGE_PLAN.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `PHASED_MIGRATION_PLAN.md` | `root-docs/PHASED_MIGRATION_PLAN.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `RESTORATION_PLAN.md` | `root-docs/RESTORATION_PLAN.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `RESTORATION_COMPLETE.md` | `root-docs/RESTORATION_COMPLETE.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `REORGANIZATION_SUMMARY.md` | `root-docs/REORGANIZATION_SUMMARY.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `RESTRUCTURE_COMPLETE_SUMMARY.md` | `root-docs/RESTRUCTURE_COMPLETE_SUMMARY.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `STRUCTURE_VALIDATION_REPORT.md` | `root-docs/STRUCTURE_VALIDATION_REPORT.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `ALL_PHASES_COMPLETE.md` | `root-docs/ALL_PHASES_COMPLETE.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `COMBINED_FULL_STRUCTURE.md` | `root-docs/COMBINED_FULL_STRUCTURE.md` | ✅ Done | [[MOC - Plans & Roadmap]] |
| `QUICK_ANSWER_RU.md` | `root-docs/QUICK_ANSWER_RU.md` | ✅ Done | [[MOC - System]] |

**Итого Zone 1:** 26/26 ✅

---

## 🟡 Зона 2: COMBINED/agents — Мега-агенты (High)

| Источник | Vault-путь | Статус | MOC |
|----------|-----------|--------|-----|
| `COMBINED/agents/mega/mega-orchestrator.md` | `agents/mega-orchestrator.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-coder.md` | `agents/mega-coder.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-debugger.md` | `agents/mega-debugger.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-planner.md` | `agents/mega-planner.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-researcher.md` | `agents/mega-researcher.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-designer.md` | `agents/mega-designer.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-security.md` | `agents/mega-security.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-seo.md` | `agents/mega-seo.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-reviewer.md` | `agents/mega-reviewer.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-tester.md` | `agents/mega-tester.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-architect.md` | `agents/mega-architect.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-executor.md` | `agents/mega-executor.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-writer.md` | `agents/mega-writer.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-devops.md` | `agents/mega-devops.md` | ✅ Done | [[MOC - Agents]] |
| `COMBINED/agents/mega/mega-infrastructure.md` | `agents/mega-infrastructure.md` | ✅ Done | [[MOC - Agents]] |

**Итого Zone 2:** 15/15 ✅

---

## 🟡 Зона 3: COMBINED/orchestration (High)

| Источник | Vault-путь | Статус |
|----------|-----------|--------|
| `core-ruflo/` | `orchestration/core-ruflo.md` | ✅ Done |
| `core-gsd/` | `orchestration/core-gsd.md` | ✅ Done |
| `core-omc/` | `orchestration/core-omc.md` | ✅ Done |
| `core-deer-flow/` | `orchestration/core-deer-flow.md` | ✅ Done |
| `core-hermes/` | `orchestration/core-hermes.md` | ✅ Done |
| `core-background-agents/` | `orchestration/core-background-agents.md` | ✅ Done |
| `core-1code/` | `orchestration/core-1code.md` | ✅ Done |
| `superpowers/` | `orchestration/superpowers.md` | ✅ Done |
| `core-vibe-kanban/` | `orchestration/core-vibe-kanban.md` | ✅ Done |
| `core-archon/` | `orchestration/core-archon.md` | ✅ Done |
| `core-ralph/` | `orchestration/core-ralph.md` | ✅ Done |
| `core-squad/` | `orchestration/core-squad.md` | ✅ Done |
| `core-multica/` | `orchestration/core-multica.md` | ✅ Done |
| `core-praisonai/` | `orchestration/core-praisonai.md` | ✅ Done |
| `core-cc-connect/` | `orchestration/core-cc-connect.md` | ✅ Done |
| `core-taskmaster/` | `orchestration/core-taskmaster.md` | ✅ Done |
| `core-refly/` | `orchestration/core-refly.md` | ✅ Done |

**Итого Zone 3:** 17/17 ✅

---

## 🟡 Зона 4: COMBINED/skills (High → Long-tail)

### 4a. Категории навыков (overview level) — Выполнено

| Категория | Vault-путь | Статус |
|-----------|-----------|--------|
| `skills-claude/karpathy/` | `skills/skills-claude-karpathy.md` | ✅ Done |
| `skills-claude/best-practice/` | `skills/skills-claude-best-practice.md` | ✅ Done |
| `skills-development/` | `skills/skills-development.md` | ✅ Done |
| `skills-planning/` | `skills/skills-planning.md` | ✅ Done |
| `skills-ruflo/` | `skills/skills-ruflo.md` | ✅ Done |
| `skills-everything-cc/` | `skills/skills-everything-cc.md` | ✅ Done |
| `skills-superpowers/` | `skills/skills-superpowers.md` | ✅ Done |
| `skills-design/` | `skills/skills-design.md` | ✅ Done |
| `skills-seo/` | `skills/skills-seo.md` | ✅ Done |
| `skills-writing/` | `skills/skills-writing.md` | ✅ Done |
| `skills-research/` | `skills/skills-research.md` | ✅ Done |
| `skills-devops/` | `skills/skills-devops.md` | ✅ Done |
| `skills-hermes/` | `skills/skills-hermes.md` | ✅ Done |
| `skills-background/` | `skills/skills-background.md` | ✅ Done |
| `skills-omc/` | `skills/skills-omc.md` | ✅ Done |
| `skills-business/` | `skills/skills-business.md` | ✅ Done |
| `skills-data-analysis/` | `skills/skills-data-analysis.md` | ✅ Done |
| `skills-awesome-claude/` | `skills/skills-awesome-claude.md` | ✅ Done |
| `skills-copilot/` | `skills/skills-copilot.md` | ✅ Done |
| `skills-antigravity/` | `skills/skills-antigravity.md` | ✅ Done |
| `skills-platform/` | `skills/skills-platform.md` | ✅ Done |

### 4b. Wave 9 — Matt Pocock 20 Individual Skills (🔲 Planned → In Progress)

| Навык | Vault-путь | Статус |
|-------|-----------|--------|
| `write-a-prd` | `skills/matt-pocock/write-a-prd.md` | ✅ Done |
| `prd-to-plan` | `skills/matt-pocock/prd-to-plan.md` | ✅ Done |
| `prd-to-issues` | `skills/matt-pocock/prd-to-issues.md` | ✅ Done |
| `grill-me` | `skills/matt-pocock/grill-me.md` | ✅ Done |
| `design-an-interface` | `skills/matt-pocock/design-an-interface.md` | ✅ Done |
| `request-refactor-plan` | `skills/matt-pocock/request-refactor-plan.md` | ✅ Done |
| `tdd` | `skills/matt-pocock/tdd.md` | ✅ Done |
| `triage-issue` | `skills/matt-pocock/triage-issue.md` | ✅ Done |
| `git-guardrails` | `skills/matt-pocock/git-guardrails.md` | ✅ Done |
| `improve-codebase-architecture` | `skills/matt-pocock/improve-codebase-architecture.md` | ✅ Done |
| `ubiquitous-language` | `skills/matt-pocock/ubiquitous-language.md` | ✅ Done |
| `edit-article` | `skills/matt-pocock/edit-article.md` | ✅ Done |
| `write-a-skill` | `skills/matt-pocock/write-a-skill.md` | ✅ Done |

### 4c. Wave 9 — Karpathy 4 Individual Principles (🔲 Planned → In Progress)

| Принцип | Vault-путь | Статус |
|---------|-----------|--------|
| Think Before Coding | `skills/karpathy/think-before-coding.md` | ✅ Done |
| Simplicity First | `skills/karpathy/simplicity-first.md` | ✅ Done |
| Surgical Changes | `skills/karpathy/surgical-changes.md` | ✅ Done |
| Goal-Driven Execution | `skills/karpathy/goal-driven-execution.md` | ✅ Done |

---

## 🟡 Зона 5: COMBINED/mcp-servers (High)

| Источник | Vault-путь | Статус |
|----------|-----------|--------|
| `mcp-lightpanda/` | `mcp-servers/mcp-lightpanda.md` | ✅ Done |
| `mcp-gitnexus/` | `mcp-servers/mcp-gitnexus.md` | ✅ Done |
| `mcp-supermemory/` | `mcp-servers/mcp-supermemory.md` | ✅ Done |
| `mcp-openviking/` | `mcp-servers/mcp-openviking.md` | ✅ Done |
| `mcp-code-review-graph/` | `mcp-servers/mcp-code-review-graph.md` | ✅ Done |
| `mcp-markitdown/` | `mcp-servers/mcp-markitdown.md` | ✅ Done |
| `mcp-toolbox/` | `mcp-servers/mcp-toolbox.md` | ✅ Done |
| `mcp-nano-banana/` | `mcp-servers/mcp-nano-banana.md` | ✅ Done |
| `mcp-pretext/` | `mcp-servers/mcp-pretext.md` | ✅ Done |
| `mcp-hermes/` | `mcp-servers/mcp-hermes.md` | ✅ Done |
| configs | `mcp-servers/mcp-configs.md` | ✅ Done |

**Итого Zone 5:** 11/11 ✅

---

## 🟡 Зона 6: COMBINED/ui-design (High)

### 6a. Overview notes — Выполнено

| Ресурс | Vault-путь | Статус |
|--------|-----------|--------|
| Galaxy | `ui-design/galaxy.md` | ✅ Done |
| shadcn/ui | `ui-design/shadcn.md` | ✅ Done |
| Impeccable | `ui-design/impeccable.md` | ✅ Done |
| Taste-skill | `ui-design/taste-skill.md` | ✅ Done |
| Stitch | `ui-design/stitch.md` | ✅ Done |
| UI/UX Pro Max | `ui-design/ui-ux-pro-max.md` | ✅ Done |
| Combined Design System | `ui-design/combined-design-system.md` | ✅ Done |
| Cursor Rules | `ui-design/cursor-rules.md` | ✅ Done |

### 6b. Wave 11 — UI Components Gallery (🔲 Planned → In Progress)

| Категория | Vault-путь | Статус |
|-----------|-----------|--------|
| Galaxy Components | `ui-design/gallery/galaxy-components.md` | ✅ Done |
| shadcn Component Showcase | `ui-design/gallery/shadcn-showcase.md` | ✅ Done |
| Impeccable Commands Ref | `ui-design/gallery/impeccable-commands.md` | ✅ Done |
| UI Patterns (anti-slop) | `ui-design/gallery/ui-patterns.md` | ✅ Done |
| Design Tokens & Variables | `ui-design/gallery/design-tokens.md` | ✅ Done |

---

## 🟢 Зона 7: new_repos/ (Long-tail — приоритетные)

### Wave 10 — Agents deep-dive (Top 10 agents)

| Источник | Vault-путь | Статус |
|----------|-----------|--------|
| Shannon audit agents | `agents-deep-dive/shannon-agents.md` | ✅ Done |
| RuFlo core roles | `agents-deep-dive/ruflo-roles.md` | ✅ Done |
| DeerFlow research flow | `agents-deep-dive/deerflow-flow.md` | ✅ Done |
| OMC team roles | `agents-deep-dive/omc-team-roles.md` | ✅ Done |
| Superpowers workflow | `agents-deep-dive/superpowers-workflow.md` | ✅ Done |

### obsidian-skills — Выполнено

| Источник | Vault-путь | Статус |
|----------|-----------|--------|
| obsidian-markdown | `obsidian-skills/obsidian-markdown.md` | ✅ Done |
| obsidian-bases | `obsidian-skills/obsidian-bases.md` | ✅ Done |
| obsidian-cli | `obsidian-skills/obsidian-cli.md` | ✅ Done |
| json-canvas | `obsidian-skills/json-canvas.md` | ✅ Done |
| defuddle | `obsidian-skills/defuddle.md` | ✅ Done |

### obsidian-copilot — Выполнено (17 notes)

> All notes present in `obsidian-copilot/`

---

## 📊 Сводный реестр — статистика

| Зона | Всего | Done | Remaining |
|------|-------|------|-----------|
| Zone 1: Root docs | 26 | 26 | 0 |
| Zone 2: Mega-agents | 15 | 15 | 0 |
| Zone 3: Orchestration | 17 | 17 | 0 |
| Zone 4a: Skills overview | 21 | 21 | 0 |
| Zone 4b: Matt Pocock skills | 13 | 13 | 0 |
| Zone 4c: Karpathy individual | 4 | 4 | 0 |
| Zone 5: MCP Servers | 11 | 11 | 0 |
| Zone 6a: UI Design overview | 8 | 8 | 0 |
| Zone 6b: UI Gallery | 5 | 5 | 0 |
| Zone 7a: Agents deep-dive | 5 | 5 | 0 |
| Zone 7b: obsidian-skills | 5 | 5 | 0 |
| Zone 7c: obsidian-copilot | 17 | 17 | 0 |
| Governance+MOCs+Welcome | 15 | 15 | 0 |
| **Итого** | **162** | **162** | **0** |

---

## 🔗 Связи

- [[_governance/VAULT_GOVERNANCE]] — инварианты безопасности
- [[_audit/COVERAGE_REPORT]] — покрытие vault
- [[000 - Map of Maps]] — главная карта
- [[MOC - Plans & Roadmap]] — волны и фазы
