---
title: "Obsidian Copilot: Design — Context Engineering"
tags:
  - domain/skills
  - domain/memory
  - domain/obsidian
  - artifact/design
  - status/active
  - source/obsidian-copilot
aliases:
  - context engineering design
  - layered prefix system
  - L1 L2 L3 context
created: 2026-04-18
type: mirror
source: "../new_repos/obsidian-copilot/designdocs/CONTEXT_ENGINEERING.md"
---

# Obsidian Copilot: Design — Context Engineering

> **Источник:** `../new_repos/obsidian-copilot/designdocs/CONTEXT_ENGINEERING.md`
> **Тип:** Дизайн-документ — Layered Prefix System

## О чём

Архитектура многоуровневой системы контекста Copilot:

- **L1** — системный промпт (глобальный)
- **L2** — проектный контекст (автопродвижение)
- **L3** — пользовательский контекст (@-mentions)
- **L4** — результаты vault search
- **L5** — история чата + текущий запрос

## Ключевые принципы

- Строгий порядок приоритетов между слоями
- L2 auto-promotion: часто используемый контекст поднимается выше
- Cache optimization для снижения стоимости API

## Связь с Vibe-Coder

Аналог: многоуровневая система памяти OpenViking (L0/L1/L2 tiered loading).

## Связи

- **Родительский MOC:** [[MOC - Memory]]
- **Индекс Copilot:** [[obsidian-copilot/index]]
- **Message Architecture:** [[obsidian-copilot/message-architecture]]
- **Context and Mentions:** [[obsidian-copilot/context-and-mentions]]

## См. также

- [[combined/Memory Overview]] — системы памяти Vibe-Coder
- [[obsidian-copilot/vault-search-and-indexing]] — L4 слой

## 🔗 Связи

- [[MOC - System]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

