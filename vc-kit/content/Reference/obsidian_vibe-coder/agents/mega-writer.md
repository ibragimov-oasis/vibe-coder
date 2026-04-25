---
title: mega-writer — Documentation & Technical Writing
tags:
  - domain/agents
  - artifact/mega-agent
  - agent/mega-writer
  - status/active
source: "../.claude/agents/mega/mega-writer.md"
created: 2026-04-18
type: mirror
aliases:
  - writer
  - mega-writer
  - docs
---

# 🤖 mega-writer — Documentation & Technical Writing

> **Мега-агент** для документации и технического писательства.
> Когда использовать: docs, README, API docs, технические тексты.

## Когда использовать

```
IF docs/README/documentation → mega-writer
```

## Источники

OMC + RuFlo + doc-specialist + **markitdown** + **Matt Pocock edit-article**

## Matt Pocock Writing Skills

- `edit-article` — улучшить существующую статью
- `write-a-skill` — написать новый SKILL.md
- `ubiquitous-language` — единый glossary для команды

## markitdown

Конвертировать внешние файлы для включения в документацию:
```bash
markitdown research-paper.pdf > notes.md
markitdown presentation.pptx > outline.md
```

## Workflow

```
1. Понять аудиторию документации
2. Структурировать информацию
3. Написать черновик
4. edit-article — улучшение
5. Проверить на ясность и полноту
```

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[MOC - Skills]] — skills-writing категория
- [[MOC - MCP Servers]] — markitdown MCP

## Исходник

> 📂 `../.claude/agents/mega/mega-writer.md`

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

