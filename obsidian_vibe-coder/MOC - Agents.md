---
title: MOC - Agents
tags:
  - domain/agents
  - artifact/moc
  - status/active
aliases:
  - agents map
  - mega-agents
created: 2026-04-18
type: moc
---

# 🗺️ MOC — Agents

> **Map of Content** для домена `Agents`.
> 15 мега-агентов + 336+ агентов по ролям. Выбери нужный по типу задачи.

## 🤖 15 Мега-агентов

### По типу задачи (routing)

| Задача | Агент |
|--------|-------|
| Полный пайплайн | [[agents/mega-orchestrator]] |
| Написать код | [[agents/mega-coder]] |
| Исправить баг | [[agents/mega-debugger]] |
| Спланировать | [[agents/mega-planner]] |
| Исследовать | [[agents/mega-researcher]] |
| Архитектура | [[agents/mega-architect]] |
| Дизайн UI | [[agents/mega-designer]] |
| Безопасность | [[agents/mega-security]] |
| SEO | [[agents/mega-seo]] |
| Ревью кода | [[agents/mega-reviewer]] |
| Тестирование | [[agents/mega-tester]] |
| Исполнить план | [[agents/mega-executor]] |
| Документация | [[agents/mega-writer]] |
| Git/CI/CD | [[agents/mega-devops]] |
| Инфраструктура | [[agents/mega-infrastructure]] |

## Routing Decision Tree

```
IF bug/error/crash/fix → mega-debugger
IF UI/design/frontend  → mega-designer
IF plan/architecture   → mega-planner
IF research/analyze    → mega-researcher
IF security/vuln       → mega-security
IF SEO/meta/sitemap    → mega-seo
IF review/code-review  → mega-reviewer
IF test/TDD/coverage   → mega-tester
IF docs/README         → mega-writer
IF deploy/CI/CD/git    → mega-devops
IF infra/swarm/scaling → mega-infrastructure
IF system-design/ADR   → mega-architect
IF complex (multiple)  → mega-orchestrator
DEFAULT (simple code)  → mega-coder
```

## 📂 По категории

### Building (Создание)
- [[agents/mega-coder]] — RuFlo + OMC + Superpowers + PraisonAI + Karpathy + 69 best practices
- [[agents/mega-executor]] — OMC + GSD + Ralph PRD loop + Archon YAML + Task Master
- [[agents/mega-architect]] — OMC + RuFlo + code-review-graph + Matt Pocock

### Analysis (Анализ)
- [[agents/mega-debugger]] — GSD + OMC + RuFlo + code-review-graph blast-radius
- [[agents/mega-reviewer]] — RuFlo + OMC + Superpowers + code-review-graph (8.2x)
- [[agents/mega-tester]] — OMC + GSD + RuFlo + Matt Pocock TDD

### Planning (Планирование)
- [[agents/mega-planner]] — GSD + OMC + RuFlo + Ralph + Matt Pocock + Task Master
- [[agents/mega-researcher]] — Hermes + GSD + DeerFlow + PraisonAI + markitdown
- [[agents/mega-writer]] — OMC + RuFlo + markitdown + Matt Pocock

### Creative (Творческие)
- [[agents/mega-designer]] — Galaxy + shadcn + Impeccable + Taste-skill + Stitch + UI/UX Pro Max
- [[agents/mega-seo]] — Claude-SEO + SEOMachine (10 agents, 26 skills, GA4/GSC)

### Operations (Операции)
- [[agents/mega-devops]] — OMC + RuFlo DevOps + git-guardrails + cc-connect
- [[agents/mega-infrastructure]] — RuFlo (80+ agents) + Squad + Multica
- [[agents/mega-orchestrator]] — RuFlo + GSD + OMC + Archon + Ralph + Squad + Task Master
- [[agents/mega-security]] — Shannon Pro + code-review-graph

## Связанные MOC

- [[MOC - System]] — Routing logic и pipeline
- [[MOC - Orchestration]] — Системы оркестрации под агентами
- [[MOC - Security]] — Shannon и security агент
- [[combined/Agents Overview]] — COMBINED/agents структура
- [[agents-by-role/index]] — 19 ролей, 189 агентов
- [[000 - Map of Maps]] — Главная карта

## 📂 Агенты по ролям (19 категорий, 189 агентов)

| Роль | Заметка | Агентов |
|------|---------|---------|
| Manager | [[agents-by-role/manager]] | 80 |
| Coder | [[agents-by-role/coder]] | 17 |
| Planner | [[agents-by-role/planner]] | 13 |
| Researcher | [[agents-by-role/researcher]] | 14 |
| Tester | [[agents-by-role/tester]] | 13 |
| Reviewer | [[agents-by-role/reviewer]] | 9 |
| Security | [[agents-by-role/security]] | 6 |
| UI Specialist | [[agents-by-role/ui-specialist]] | 7 |
| Architect | [[agents-by-role/architect]] | 5 |
| Writer | [[agents-by-role/writer]] | 4 |
| Debugger | [[agents-by-role/debugger]] | 3 |
| Other roles | [[agents-by-role/other-roles]] | 18 |

