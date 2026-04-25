---
title: "Skill: request-refactor-plan"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - request-refactor-plan
  - refactor plan skill
  - refactoring skill
created: 2026-04-18
type: skill
source: "../.claude/skills/skills-planning/request-refactor-plan/"
---

# 🔧 Skill: request-refactor-plan

> **Что делает:** Запрашивает структурированный план рефакторинга с blast-radius анализом.
> **Автор:** Matt Pocock | **Karpathy принцип:** [[skills/karpathy/surgical-changes]]

## Назначение

`request-refactor-plan` помогает безопасно провести рефакторинг:
- Определяет scope изменений (blast-radius)
- Предотвращает случайные изменения несвязанного кода
- Создаёт тестируемые шаги
- Обеспечивает reversibility

## Workflow

```
1. Описать: что и почему нужно рефакторить
2. request-refactor-plan:
   a. Анализирует текущую структуру
   b. Определяет blast-radius
   c. Предлагает пошаговый план
   d. Указывает риски
3. Результат: Refactoring Plan
4. Исполнение: mega-executor по плану
```

## Структура Refactoring Plan

```markdown
# Refactoring Plan: [Цель]

## Current State
Что есть сейчас, почему это проблема.

## Target State
Как должно быть.

## Blast Radius
Файлы/модули, которые затронет рефакторинг.

## Steps (Atomic)
- [ ] Step 1: [Минимальное изменение] (reversible: да)
- [ ] Step 2: [Следующее изменение] (dep: step 1)
- [ ] Step N: [Финальный шаг]

## Risks
- Риск 1: ... (митигация: ...)

## Validation
- Тест 1: ...
- Тест 2: ...
```

## Принцип безопасности

> Каждый шаг должен быть reversible или forward-only с чёткой точкой отката.

## Связи

- **Принцип:** [[skills/karpathy/surgical-changes]]
- **Анализ blast-radius:** [[mcp-servers/mcp-code-review-graph]]
- **Агент:** [[agents/mega-architect]]
- **Индекс:** [[skills/skills-planning]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[skills/matt-pocock/improve-codebase-architecture]] — более глубокая архитектурная реструктуризация
- [[skills/matt-pocock/tdd]] — TDD как защита при рефакторинге

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

