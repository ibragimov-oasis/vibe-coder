---
title: "Skill: triage-issue"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - triage-issue
  - bug triage
  - issue analysis
created: 2026-04-18
type: skill
source: "../COMBINED/skills/skills-development/triage-issue/"
---

# 🔍 Skill: triage-issue

> **Что делает:** Анализирует bug-репорт / issue и создаёт структурированный план действий.
> **Автор:** Matt Pocock | **Агент:** [[agents/mega-debugger]]

## Назначение

`triage-issue` систематически анализирует проблемы:
- Оценивает severity и priority
- Определяет reproducibility
- Предлагает план расследования
- Исключает ложные alarm'ы

## Workflow

```
Input:  Issue / Bug report
         ↓
triage-issue:
  1. Классификация (bug / feature / question / duplicate)
  2. Severity assessment (P0-P4)
  3. Reproducibility check
  4. Root cause hypothesis
  5. Investigation plan
         ↓
Output: Triage report + action items
```

## Severity шкала

| Уровень | Описание | Действие |
|---------|----------|----------|
| **P0** | Critical / Production down | Немедленно |
| **P1** | Major functionality broken | Сегодня |
| **P2** | Minor functionality broken | В этом спринте |
| **P3** | UI/UX, polish | По возможности |
| **P4** | Nice to have | Backlog |

## Структура Triage Report

```markdown
## Triage: [Issue Title]

**Type:** bug | feature | question | duplicate
**Severity:** P0 | P1 | P2 | P3 | P4
**Reproducible:** Yes / No / Sometimes

### Observed Behavior
...

### Expected Behavior
...

### Root Cause Hypothesis
1. Возможная причина 1
2. Возможная причина 2

### Investigation Steps
- [ ] Шаг 1: проверить X
- [ ] Шаг 2: воспроизвести в Y

### Notes
Дополнительный контекст
```

## Связи

- **Принцип:** [[skills/karpathy/think-before-coding]]
- **Агент:** [[agents/mega-debugger]]
- **Индекс:** [[skills/skills-development]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[skills/matt-pocock/tdd]] — TDD как профилактика багов
- [[agents/mega-debugger]] — полный workflow дебагинга
