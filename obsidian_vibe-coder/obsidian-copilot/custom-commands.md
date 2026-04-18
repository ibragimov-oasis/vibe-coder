---
title: "Obsidian Copilot: Custom Commands"
tags:
  - domain/skills
  - domain/obsidian
  - artifact/guide
  - status/active
  - source/obsidian-copilot
aliases:
  - copilot custom commands
  - obsidian custom commands
created: 2026-04-18
type: mirror
source: "../new_repos/obsidian-copilot/docs/custom-commands.md"
---

# Obsidian Copilot: Custom Commands

> **Источник:** `../new_repos/obsidian-copilot/docs/custom-commands.md`

## О чём

Пресет AI-промптов, определяемых один раз и используемых на любой заметке. Хранятся как `.md` файлы в vault.

## Способы вызова

- Right-click context menu
- Command palette
- Slash-команды в чате (`/command-name`)

## Создание команды

```markdown
---
name: Summarize
description: Summarize this note
system: You are a summarization assistant.
---
Summarize the following note in 3 bullet points:
{note}
```

## Связь с ULTRACAR

Аналог: **Prompt files** в `.github/prompts/*.prompt.md`, **Skills** в `COMBINED/skills/`.

## Связи

- **Родительский MOC:** [[MOC - Skills]]
- **Индекс Copilot:** [[obsidian-copilot/index]]
- **System prompts:** [[obsidian-copilot/system-prompts]]
- **ULTRACAR skills:** [[combined/Skills Overview]]

## См. также

- [[obsidian-copilot/agent-mode-and-tools]] — агентный режим
- [[obsidian-skills/obsidian-markdown]] — синтаксис файлов команд
