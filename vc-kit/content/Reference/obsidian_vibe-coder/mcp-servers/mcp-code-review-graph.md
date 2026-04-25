---
title: "MCP: Code Review Graph"
tags:
  - domain/mcp
  - artifact/server
  - status/active
  - source/combined
aliases:
  - code-review-graph
  - mcp code review graph
  - ast analysis mcp
created: 2026-04-18
type: mcp-note
source: "../.claude/mcp-servers/mcp-code-review-graph/"
---

# MCP: Code Review Graph

> **Источник:** `../.claude/mcp-servers/mcp-code-review-graph/`
> **CLI:** `uv run code-review-graph serve`
> **Экономия:** ~8.2x меньше токенов

## Описание

AST-граф анализ кода: **8.2× сокращение токенов**, blast-radius анализ, 19 языков, 22 MCP инструмента.

## Ключевые возможности

- **Blast-radius** — что сломается при изменении файла X
- **Dead code detection** — неиспользуемый код
- **Community detection** — связанные модули
- **19 языков** — JS, TS, Python, Go, Java, Rust, и др.

## Команды (ключевые)

```bash
code-review-graph build     # построить граф
code-review-graph update    # обновить граф (<2 сек)
code-review-graph query     # запросить граф
```

## Связи

- **Родительский MOC:** [[MOC - MCP Servers]]
- **Обзор MCP:** [[combined/MCP Servers Overview]]
- **Memory bootstrap:** [[root-docs/MEMORY_BOOTSTRAP]]
- **Mega-агент:** [[agents/mega-reviewer]]

## См. также

- [[mcp-servers/mcp-gitnexus]] — высокоуровневая карта кода
- [[combined/Security Overview]] — применяется в Shannon

## 🔗 Связи

- [[MOC - MCP Servers]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

