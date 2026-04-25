---
title: mega-debugger — Bug Investigation
tags:
  - domain/agents
  - artifact/mega-agent
  - agent/mega-debugger
  - status/active
source: "../.claude/agents/mega/mega-debugger.md"
created: 2026-04-18
type: mirror
aliases:
  - debugger
  - mega-debugger
---

# 🤖 mega-debugger — Bug Investigation

> **Мега-агент** для исследования и исправления багов.
> Когда использовать: любой bug, error, crash, broken functionality.

## Когда использовать

```
IF bug/error/crash/fix/broken → mega-debugger
```

## Источники

GSD + OMC + RuFlo + Superpowers + **code-review-graph (blast-radius)**

## Методология

### 3-failure circuit breaker
После 3 неудачных гипотез → **эскалация к mega-architect**

### Hypothesis-driven debugging

```
1. Observe — что именно сломано?
2. Hypothesize — 3 вероятных причины (от простого к сложному)
3. Test — доказать/опровергнуть гипотезу
4. Fix — минимальное хирургическое исправление
5. Verify — тесты зелёные, blast-radius проверен
```

## Инструменты

- `code-review-graph` — blast-radius analysis (что ещё может сломаться)
- `gitnexus` — понять контекст файла
- `lightpanda` — воспроизвести баг визуально

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[agents/mega-coder]] — исправление после диагноза
- [[agents/mega-architect]] — эскалация при circuit breaker

## Исходник

> 📂 `../.claude/agents/mega/mega-debugger.md`

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

