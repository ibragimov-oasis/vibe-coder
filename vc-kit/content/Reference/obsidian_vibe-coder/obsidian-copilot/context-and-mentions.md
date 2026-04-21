---
title: "Obsidian Copilot: Context and Mentions"
tags:
  - domain/skills
  - domain/memory
  - domain/obsidian
  - artifact/guide
  - status/active
  - source/obsidian-copilot
aliases:
  - copilot context
  - obsidian mentions
  - at-mentions
created: 2026-04-18
type: mirror
source: "../new_repos/obsidian-copilot/docs/context-and-mentions.md"
---

# Obsidian Copilot: Context and Mentions

> **Источник:** `../new_repos/obsidian-copilot/docs/context-and-mentions.md`

## О чём

Управление контекстом AI: автоматический контекст, @-mentions, ручные команды. Определяет, что именно видит AI в запросе.

## Типы контекста

| Тип | Описание |
|-----|----------|
| Автоматический | Активная заметка, выделенный текст |
| @-mentions | Явное указание заметок/папок |
| Веб-контент | URL в запросе |
| Vault QA | Поиск по всему vault |

## @-mentions синтаксис

```
@note-name          # конкретная заметка
@folder/            # вся папка
@vault              # весь vault
```

## Связи

- **Родительский MOC:** [[MOC - Memory]]
- **Индекс Copilot:** [[obsidian-copilot/index]]
- **Vault search:** [[obsidian-copilot/vault-search-and-indexing]]
- **Message Architecture (дизайн):** [[obsidian-copilot/message-architecture]]

## См. также

- [[obsidian-copilot/chat-interface]] — интерфейс чата
- [[combined/Memory Overview]] — системы памяти Vibe-Coder

## 🔗 Связи

- [[MOC - System]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

