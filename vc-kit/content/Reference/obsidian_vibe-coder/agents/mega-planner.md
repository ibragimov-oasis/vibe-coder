---
title: mega-planner — Architecture & PRD Planning
tags:
  - domain/agents
  - artifact/mega-agent
  - agent/mega-planner
  - status/active
source: "../.claude/agents/mega/mega-planner.md"
created: 2026-04-18
type: mirror
aliases:
  - planner
  - mega-planner
---

# 🤖 mega-planner — Architecture & PRD Planning

> **Мега-агент** для архитектуры, роадмапов и PRD.
> Когда использовать: нужен план, архитектура, или PRD.

## Когда использовать

```
IF plan/architecture/roadmap/PRD → mega-planner
```

## Источники

GSD + OMC + RuFlo + **Ralph** + **Matt Pocock (PRD, grill-me, prd-to-plan)** + **Task Master**

## Навыки Matt Pocock

| Навык | Назначение |
|-------|-----------|
| `write-a-prd` | Написать полноценный PRD |
| `prd-to-plan` | PRD → execution plan с задачами |
| `prd-to-issues` | PRD → GitHub Issues |
| `grill-me` | Задать уточняющие вопросы перед планом |
| `improve-codebase-architecture` | Улучшить архитектуру |

## GSD Methodology

```
Phase 0: Discovery    — понять текущее состояние
Phase 1: Foundation   — scaffolding, интерфейсы
Phase 2: Core         — основная функциональность
Phase 3: Integration  — связать части
Phase 4: Validation   — тесты, верификация
Phase 5: Polish       — чистка, документация
```

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[MOC - Orchestration]] — Ralph PRD loop
- [[agents/mega-executor]] — исполнение после плана
- [[MOC - Skills]] — skills-planning

## Исходник

> 📂 `../.claude/agents/mega/mega-planner.md`

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

