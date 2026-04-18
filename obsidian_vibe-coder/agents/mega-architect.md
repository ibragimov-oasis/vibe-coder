---
title: mega-architect — System Architecture & Design
tags:
  - domain/agents
  - artifact/mega-agent
  - agent/mega-architect
  - status/active
source: "../COMBINED/agents/mega/mega-architect.md"
created: 2026-04-18
type: mirror
aliases:
  - architect
  - mega-architect
---

# 🤖 mega-architect — System Architecture & Design

> **Мега-агент** для системного дизайна, ADR, архитектурного анализа.
> Когда использовать: system-design, ADR, trade-off анализ.

## Когда использовать

```
IF system-design/ADR/trade-off → mega-architect
IF escalation from mega-debugger (3-failure) → mega-architect
```

## Источники

OMC + RuFlo + GSD + **Matt Pocock improve-codebase-architecture** + **code-review-graph (community detection)**

## Инструменты

- `code-review-graph` — community detection, structural analysis
- `gitnexus` — полная карта кодовой базы
- `supermemory` — прошлые архитектурные решения

## ADR формат

```markdown
# ADR-XXX: <Название решения>

## Статус: Proposed / Accepted / Deprecated

## Контекст
<Что привело к этому решению>

## Решение
<Что мы решили сделать>

## Последствия
### Положительные
### Отрицательные
```

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[agents/mega-planner]] — планирование после архитектуры
- [[agents/mega-debugger]] — получает эскалации

## Исходник

> 📂 `../COMBINED/agents/mega/mega-architect.md`

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

