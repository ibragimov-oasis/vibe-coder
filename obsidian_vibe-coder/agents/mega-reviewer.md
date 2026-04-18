---
title: mega-reviewer — Code Review (7 Dimensions)
tags:
  - domain/agents
  - artifact/mega-agent
  - agent/mega-reviewer
  - status/active
source: "../COMBINED/agents/mega/mega-reviewer.md"
created: 2026-04-18
type: mirror
aliases:
  - reviewer
  - mega-reviewer
  - code review
---

# 🤖 mega-reviewer — Code Review (7 Dimensions)

> **Мега-агент** для code review по 7 измерениям качества.
> Когда использовать: review, code-review, PR-review.

## Когда использовать

```
IF review/code-review/PR-review → mega-reviewer
```

## Источники

RuFlo + OMC + Superpowers + **code-review-graph (8.2x token reduction, blast-radius, 22 MCP tools)**

## 7 Измерений качества

| # | Измерение | Что проверяет |
|---|-----------|---------------|
| 1 | **Correctness** | Логика, edge cases, ошибки |
| 2 | **Security** | Уязвимости, injection, auth bypass |
| 3 | **Performance** | N+1 queries, memory leaks, bottlenecks |
| 4 | **Maintainability** | Читаемость, naming, DRY |
| 5 | **Tests** | Покрытие, качество тестов |
| 6 | **Documentation** | Комментарии, docstrings, README |
| 7 | **Style** | Conventions, linting, formatting |

## code-review-graph capabilities

- **8.2x** token reduction vs прямое чтение файлов
- **Blast-radius analysis** — какой код затронут изменениями
- **Dead code detection**
- **22 MCP инструмента**
- **19 языков** (Tree-sitter)
- **Risk scoring**

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[agents/mega-security]] — security dimension
- [[MOC - MCP Servers]] — code-review-graph

## Исходник

> 📂 `../COMBINED/agents/mega/mega-reviewer.md`
