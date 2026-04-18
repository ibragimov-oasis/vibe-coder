---
title: "Obsidian Copilot: Design — Message Architecture"
tags:
  - domain/skills
  - domain/memory
  - domain/obsidian
  - artifact/design
  - status/active
  - source/obsidian-copilot
aliases:
  - message architecture
  - copilot message design
created: 2026-04-18
type: mirror
source: "../new_repos/obsidian-copilot/designdocs/MESSAGE_ARCHITECTURE.md"
---

# Obsidian Copilot: Design — Message Architecture

> **Источник:** `../new_repos/obsidian-copilot/designdocs/MESSAGE_ARCHITECTURE.md`

## О чём

Архитектура управления сообщениями и обработки контекста — замена legacy SharedState. Принципы: clean architecture, single source of truth, computed views, project isolation.

## Ключевые концепции

- **Single Source of Truth** — одно хранилище сообщений
- **Computed Views** — представления генерируются из состояния
- **Project Isolation** — каждый проект полностью изолирован

## Связь с Context Engineering

Подробности слоёв контекста (L1-L5) — в [[obsidian-copilot/context-engineering-design]].

## Связи

- **Родительский MOC:** [[MOC - Memory]]
- **Индекс Copilot:** [[obsidian-copilot/index]]
- **Context Engineering:** [[obsidian-copilot/context-engineering-design]]
- **Projects:** [[obsidian-copilot/projects]]

## См. также

- [[combined/Memory Overview]] — архитектура памяти ULTRACAR
- [[combined/Orchestration Overview]] — изоляция контекста в оркестрации

## 🔗 Связи

- [[MOC - System]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

