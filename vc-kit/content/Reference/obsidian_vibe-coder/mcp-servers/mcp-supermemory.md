---
title: "MCP: Supermemory (Long-term Memory)"
tags:
  - domain/mcp
  - domain/memory
  - artifact/server
  - status/active
  - source/combined
aliases:
  - supermemory
  - mcp supermemory
  - long-term memory mcp
created: 2026-04-18
type: mcp-note
source: "../COMBINED/mcp-servers/"
---

# MCP: Supermemory (Long-term Memory)

> **Источник:** `../COMBINED/mcp-servers/`
> **URL:** `https://mcp.supermemory.ai/mcp`
> **Rule #2:** Check BEFORE task, Save AFTER task.

## Описание

Долгосрочная память между сессиями. #1 на бенчмарках. Сохраняет инсайты, паттерны, контекст задач.

## Команды

```bash
# Поиск перед задачей
npx -y supermemory search "<ключевые слова задачи>"

# Сохранение после задачи
npx -y supermemory add "<что сделано и почему>" --tags "<domain>"
```

## Rule #2 протокол

1. ✅ **До задачи:** `supermemory search` — проверить предыдущий опыт
2. ✅ **После задачи:** `supermemory add` — сохранить новые паттерны

## Связи

- **Родительский MOC:** [[MOC - Memory]]
- **Обзор памяти:** [[combined/Memory Overview]]
- **Rule #2:** [[_governance/VAULT_GOVERNANCE]]

## См. также

- [[mcp-servers/mcp-openviking]] — контекст кодовой базы
- [[root-docs/MEMORY_SETUP]] — настройка всех систем памяти

## 🔗 Связи

- [[MOC - MCP Servers]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

