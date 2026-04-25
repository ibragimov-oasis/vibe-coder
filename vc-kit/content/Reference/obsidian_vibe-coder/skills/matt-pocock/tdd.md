---
title: "Skill: tdd"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - tdd skill
  - test driven development
  - red-green-refactor
  - tdd cycle
created: 2026-04-18
type: skill
source: "../.claude/skills/skills-development/tdd/"
---

# 🔴🟢🔵 Skill: tdd

> **Что делает:** Применяет цикл RED-GREEN-REFACTOR для разработки через тесты.
> **Автор:** Matt Pocock | **Агент:** [[agents/mega-tester]]

## Назначение

`tdd` — фундаментальный навык разработки Vibe-Coder:
- **Karpathy принцип:** [[skills/karpathy/goal-driven-execution]] — "тесты первыми"
- Гарантирует верифицируемый прогресс
- Предотвращает регрессии
- Улучшает дизайн кода

## TDD Цикл (RED-GREEN-REFACTOR)

```
🔴 RED:    Написать failing test (тест не проходит — это норма!)
            ↓
🟢 GREEN:  Написать минимальный код для прохождения теста
            ↓
🔵 REFACTOR: Улучшить код без изменения поведения
            ↓
           Повторить
```

## Пирамида тестирования

```
     /E2E\
    /------\     10% — медленные, дорогие
   /  INT   \
  /----------\   20% — умеренные
 /    UNIT    \
/--------------\ 70% — быстрые, дешёвые
```

## Правила применения

1. **Тест должен упасть сначала** — если тест сразу проходит, он проверяет не то что нужно
2. **Минимальный код** — только то, что нужно для прохождения теста
3. **Одно изменение за раз** — не RED → GREEN несколько изменений одновременно
4. **Рефакторинг только на GREEN** — не рефакторить на RED

## Интеграция с Vibe-Coder

```
Task Master: define tasks
    ↓
mega-tester: tdd cycle per task
    ↓
code-review-graph: blast-radius проверка
    ↓
mega-reviewer: 7-dimensional review
```

## Связи

- **Принцип:** [[skills/karpathy/goal-driven-execution]]
- **Агент:** [[agents/mega-tester]]
- **Индекс:** [[skills/skills-development]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[skills/matt-pocock/triage-issue]] — приоритизация перед TDD
- [[skills/skills-superpowers]] — Superpowers TDD workflow
- [[orchestration/core-omc]] — OMC: test-engineer роль

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

