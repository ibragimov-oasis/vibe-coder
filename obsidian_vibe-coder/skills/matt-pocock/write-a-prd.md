---
title: "Skill: write-a-prd"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - write-a-prd
  - prd skill
  - product requirements document
created: 2026-04-18
type: skill
source: "../COMBINED/skills/skills-planning/write-a-prd/"
---

# ✍️ Skill: write-a-prd

> **Что делает:** Создаёт полный Product Requirements Document (PRD) на основе идеи/задачи.
> **Автор:** Matt Pocock | **Используется в:** [[agents/mega-planner]], [[orchestration/core-ralph]]

## Назначение

Навык `write-a-prd` помогает AI-агенту сформировать структурированный PRD, который:
- Чётко описывает что нужно сделать и почему
- Определяет scope, acceptance criteria и out-of-scope
- Создаёт основу для `prd-to-plan` и `prd-to-issues`

## Workflow

```
1. Пользователь: описывает идею / задачу
2. write-a-prd: задаёт уточняющие вопросы (или сразу пишет)
3. Результат: структурированный PRD
4. Следующий шаг: prd-to-plan ИЛИ prd-to-issues
```

## Структура выходного PRD

```markdown
# PRD: [Название фичи]

## Problem Statement
Что не работает / чего не хватает?

## Goal
Чего хотим достичь?

## Users / Stakeholders
Кто пользователи?

## Requirements (In Scope)
- [ ] Требование 1
- [ ] Требование 2

## Out of Scope
- Что НЕ делаем в этой итерации

## Acceptance Criteria
- [ ] Критерий 1 (верифицируемый)
- [ ] Критерий 2

## Open Questions
- ?
```

## Советы по применению

- Используй `grill-me` **перед** write-a-prd для прояснения требований
- PRD должен быть достаточно конкретным для `prd-to-plan`
- Acceptance criteria должны быть тестируемыми

## Связи

- **Индекс навыков:** [[skills/skills-planning]]
- **Следующий навык:** [[skills/matt-pocock/prd-to-plan]]
- **Альтернатива:** [[skills/matt-pocock/grill-me]] (сначала вопросы)
- **Система:** [[orchestration/core-ralph]] — PRD-driven loop
- **Мета-агент:** [[agents/mega-planner]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[skills/matt-pocock/prd-to-issues]] — PRD → GitHub Issues
- [[orchestration/core-taskmaster]] — Task Master: parse_prd
- [[skills/skills-claude-karpathy]] — Think Before Coding принцип
