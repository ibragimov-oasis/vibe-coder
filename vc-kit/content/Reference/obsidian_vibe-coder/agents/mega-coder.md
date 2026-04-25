---
title: mega-coder — Code Implementation
tags:
  - domain/agents
  - artifact/mega-agent
  - agent/mega-coder
  - status/active
source: "../.claude/agents/mega/mega-coder.md"
created: 2026-04-18
type: mirror
aliases:
  - coder
  - mega-coder
---

# 🤖 mega-coder — Code Implementation

> **Мега-агент** для написания кода.
> Когда использовать: простые и средние coding задачи (default агент).

## Когда использовать

```
DEFAULT (simple coding task) → mega-coder
IF feature implementation    → mega-coder
IF code generation           → mega-coder
```

## Источники

RuFlo + OMC + Superpowers + Claude-Skills + **PraisonAI** + **Karpathy 4 principles** + **69 best practices**

## Karpathy Principles в действии

1. **Think Before Coding** — чётко сформулируй задачу, назови предположения
2. **Simplicity First** — минимальный код, никаких speculative features
3. **Surgical Changes** — трогай только нужное, не "улучшай" соседний код
4. **Goal-Driven Execution** — тесты первыми, loop до верификации

## Workflow

```
1. Read CAPABILITIES.md
2. Check supermemory для прошлых паттернов
3. Map codebase (gitnexus)
4. Write failing test first (TDD)
5. Implement minimum code to pass
6. Refactor
7. Verify
```

## Инструменты

- `gitnexus` — понять структуру кодовой базы
- `openviking` — контекст кодовой базы
- `code-review-graph` — blast-radius до и после
- `lightpanda` — браузерное тестирование

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[MOC - Skills]] — skills-everything-cc, skills-ruflo
- [[agents/mega-tester]] — TDD pair

## Исходник

> 📂 `../.claude/agents/mega/mega-coder.md`

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

