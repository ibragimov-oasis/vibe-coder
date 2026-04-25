---
title: "Skill: prd-to-issues"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - prd-to-issues
  - prd to github issues
created: 2026-04-18
type: skill
source: "../.claude/skills/skills-planning/prd-to-issues/"
---

# 🐛 Skill: prd-to-issues

> **Что делает:** Конвертирует PRD в GitHub Issues с labels, milestones и acceptance criteria.
> **Автор:** Matt Pocock | **Используется в:** [[agents/mega-planner]], [[agents/mega-devops]]

## Назначение

Навык `prd-to-issues` создаёт структурированные GitHub Issues из PRD:
- Каждый requirement → отдельный Issue
- Добавляет labels (feature, bug, enhancement)
- Устанавливает milestones и зависимости
- Добавляет acceptance criteria как чеклисты

## Структура выходного Issue

```markdown
## Issue: [Название требования]

**Labels:** feature, priority-high
**Milestone:** v1.0

### Problem
Описание проблемы из PRD.

### Solution
Что нужно реализовать.

### Acceptance Criteria
- [ ] Критерий 1
- [ ] Критерий 2

### Dependencies
- Закрыть #X перед этим

### Out of Scope
- Что НЕ входит в этот issue
```

## Workflow

```
Input:  PRD
         ↓
prd-to-issues:
  1. Парсит requirements секцию
  2. Создаёт Issue per requirement
  3. Назначает labels и milestone
  4. Добавляет cross-references
         ↓
Output: Список Issues (markdown или GitHub API)
```

## Связи

- **Предыдущий навык:** [[skills/matt-pocock/write-a-prd]]
- **Параллельный:** [[skills/matt-pocock/prd-to-plan]] (execution plan)
- **Индекс:** [[skills/skills-planning]]
- **GitHub навык:** [[skills/matt-pocock/git-guardrails]]
- **Мета-агент:** [[agents/mega-devops]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[orchestration/core-taskmaster]] — Task Master: create_issue
- [[agents/mega-planner]] — интегрирует prd-to-issues в workflow

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

