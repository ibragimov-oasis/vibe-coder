---
title: "Obsidian Copilot: Vault Search and Indexing"
tags:
  - domain/skills
  - domain/memory
  - domain/obsidian
  - artifact/guide
  - status/active
  - source/obsidian-copilot
aliases:
  - copilot vault search
  - vault indexing
  - obsidian RAG
created: 2026-04-18
type: mirror
source: "../new_repos/obsidian-copilot/docs/vault-search-and-indexing.md"
---

# Obsidian Copilot: Vault Search and Indexing

> **Источник:** `../new_repos/obsidian-copilot/docs/vault-search-and-indexing.md`

## О чём

Поиск по vault для ответов на вопросы, основанных на содержимом заметок. Два типа поиска.

## Типы поиска

| Тип | Описание |
|-----|----------|
| Semantic search | Векторный поиск по смыслу (embedding) |
| Exact search | Полнотекстовый поиск по ключевым словам |

## Управление индексом

```
Copilot Settings → Vault QA → Index vault
```

- Индексируются `.md` файлы
- Настраиваемые исключения (папки, файлы)
- Статус индекса видно в настройках

## Связь с ULTRACAR

Аналог: **OpenViking MCP** — кодовая база контекст-память для ULTRACAR.

## Связи

- **Родительский MOC:** [[MOC - Memory]]
- **Индекс Copilot:** [[obsidian-copilot/index]]
- **Контекст и mentions:** [[obsidian-copilot/context-and-mentions]]
- **ULTRACAR память:** [[combined/Memory Overview]]

## См. также

- [[obsidian-copilot/projects]] — изолированные AI рабочие пространства
- [[obsidian-skills/obsidian-bases]] — database views поверх vault

## 🔗 Связи

- [[MOC - System]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

