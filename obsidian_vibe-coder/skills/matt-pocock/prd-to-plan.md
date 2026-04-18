---
title: "Skill: prd-to-plan"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - prd-to-plan
  - prd to execution plan
created: 2026-04-18
type: skill
source: "../COMBINED/skills/skills-planning/prd-to-plan/"
---

# 📋 Skill: prd-to-plan

> **Что делает:** Конвертирует PRD в пошаговый план реализации с задачами и зависимостями.
> **Автор:** Matt Pocock | **Используется в:** [[agents/mega-planner]], [[agents/mega-executor]]

## Назначение

Навык `prd-to-plan` принимает готовый PRD и создаёт actionable execution plan:
- Разбивает requirements на атомарные задачи (2–5 минут каждая)
- Определяет порядок выполнения и зависимости
- Создаёт базу для делегирования подзадачам

## Workflow

```
Input:  PRD (write-a-prd output)
         ↓
prd-to-plan:
  1. Анализирует requirements
  2. Декомпозирует на задачи
  3. Устанавливает порядок и зависимости
  4. Оценивает сложность
         ↓
Output: Execution plan (markdown checklist)
```

## Структура выходного плана

```markdown
# Execution Plan: [PRD Name]

## Phase 1: Setup
- [ ] Задача 1.1 — описание (dep: none)
- [ ] Задача 1.2 — описание (dep: 1.1)

## Phase 2: Core Implementation
- [ ] Задача 2.1 — описание (dep: 1.x)
- [ ] Задача 2.2 — описание

## Phase 3: Testing & Polish
- [ ] Задача 3.1 — тесты
- [ ] Задача 3.2 — финальная проверка

## Success Criteria
- [ ] Acceptance criterion 1 из PRD
```

## Интеграция с Task Master

[[orchestration/core-taskmaster]] умеет автоматически:
```
parse_prd → create_task (для каждой задачи) → analyze_project_complexity
```

## Связи

- **Предыдущий навык:** [[skills/matt-pocock/write-a-prd]]
- **Параллельный:** [[skills/matt-pocock/prd-to-issues]] (GitHub Issues вместо плана)
- **Индекс:** [[skills/skills-planning]]
- **Система исполнения:** [[orchestration/core-ralph]]
- **Мета-агент:** [[agents/mega-executor]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[orchestration/core-taskmaster]] — автоматизация плана через MCP
- [[orchestration/core-archon]] — YAML DAG для детерминированного выполнения
- [[skills/skills-claude-karpathy]] — Goal-Driven Execution принцип

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

