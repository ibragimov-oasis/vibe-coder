---
title: "Skill: improve-codebase-architecture"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - improve-codebase-architecture
  - architecture improvement
  - codebase refactoring
created: 2026-04-18
type: skill
source: "../COMBINED/skills/skills-development/improve-codebase-architecture/"
---

# 🏗️ Skill: improve-codebase-architecture

> **Что делает:** Анализирует и улучшает архитектуру кодовой базы с учётом best practices.
> **Автор:** Matt Pocock | **Агент:** [[agents/mega-architect]]

## Назначение

`improve-codebase-architecture` помогает:
- Обнаружить архитектурные запахи (code smells)
- Предложить структурные улучшения
- Спланировать поэтапную миграцию
- Оценить blast-radius изменений

## Анализ (что проверяем)

### Структурные проблемы
- **God objects** — класс/модуль делает слишком много
- **Circular dependencies** — A зависит от B, B от A
- **Deep coupling** — изменение X ломает Y, Z, W
- **Dead code** — неиспользуемые функции/модули
- **Duplicated logic** — одно и то же в N местах

### Метрики
- **Cohesion** (связность внутри модуля) — выше = лучше
- **Coupling** (зависимости между модулями) — ниже = лучше
- **Cyclomatic complexity** — ниже = проще тестировать
- **Test coverage** — выше = безопаснее рефакторинг

## Workflow

```
1. code-review-graph: построить граф зависимостей
2. Анализ: выявить узкие места
3. Приоритизация: что даёт больший impact?
4. Plan: request-refactor-plan для каждого улучшения
5. Execute: TDD + поэтапное выполнение
```

## Паттерны улучшения

| Проблема | Паттерн решения |
|----------|----------------|
| God object | Разбить на Single Responsibility |
| Circular dep | Dependency Inversion, интерфейсы |
| Deep coupling | Facade, Mediator |
| Duplicated logic | Extract → shared module |
| No tests | TDD backward (тесты для существующего) |

## Связи

- **Анализ:** [[mcp-servers/mcp-code-review-graph]]
- **Принцип:** [[skills/karpathy/simplicity-first]]
- **Агент:** [[agents/mega-architect]]
- **Зависимый навык:** [[skills/matt-pocock/request-refactor-plan]]
- **Индекс:** [[skills/skills-development]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[skills/matt-pocock/ubiquitous-language]] — единый язык как основа архитектуры
- [[orchestration/core-ruflo]] — RuFlo code simplifier агент
