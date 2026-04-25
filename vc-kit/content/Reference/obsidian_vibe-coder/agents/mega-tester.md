---
title: mega-tester — Testing & TDD Enforcement
tags:
  - domain/agents
  - artifact/mega-agent
  - agent/mega-tester
  - status/active
source: "../.claude/agents/mega/mega-tester.md"
created: 2026-04-18
type: mirror
aliases:
  - tester
  - mega-tester
  - tdd
---

# 🤖 mega-tester — Testing & TDD Enforcement

> **Мега-агент** для тестирования и соблюдения TDD.
> Когда использовать: test, TDD, coverage задачи.

## Когда использовать

```
IF test/TDD/coverage → mega-tester
```

## Источники

OMC + GSD + RuFlo + Superpowers + **Matt Pocock TDD + triage-issue**

## Testing Pyramid

```
70% Unit tests        — быстрые, изолированные
20% Integration tests — взаимодействие компонентов
10% E2E tests         — полный user journey
```

## TDD RED-GREEN-REFACTOR Cycle

```
🔴 RED:     Написать failing test первым
🟢 GREEN:   Минимальный код для прохождения
🔵 REFACTOR: Улучшить код без изменения поведения
```

## Matt Pocock TDD Skills

- `tdd` — полный workflow test-driven development
- `triage-issue` — анализ issues перед фиксом

## Инструменты

- `code-review-graph` — blast-radius анализ при изменениях
- `gitnexus` — понять зависимости для тестов

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[agents/mega-coder]] — TDD pair при разработке
- [[MOC - Skills]] — skills-development (TDD skill)

## Исходник

> 📂 `../.claude/agents/mega/mega-tester.md`

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

