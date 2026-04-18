---
title: "MCP: MCP Toolbox (Databases)"
tags:
  - domain/mcp
  - artifact/server
  - status/active
  - source/combined
aliases:
  - mcp-toolbox
  - database mcp
  - 20 databases
created: 2026-04-18
type: mcp-note
source: "../COMBINED/mcp-servers/mcp-toolbox/"
---

# MCP: MCP Toolbox (Databases)

> **Источник:** `../COMBINED/mcp-servers/mcp-toolbox/`

## Описание

Унифицированный доступ к 20+ базам данных через MCP. Prebuilt tools для популярных СУБД.

## Поддерживаемые БД (20+)

PostgreSQL, MySQL, SQLite, MongoDB, Redis, BigQuery, Firestore, AlloyDB, Spanner, и другие.

## SDK поддержка

- **Python** SDK (`mcp-toolbox-sdk-python`)
- **JavaScript/Node.js** SDK
- **Go** SDK
- **Java** SDK

## Применение

```python
# Python пример
from mcp_toolbox import Database
db = Database("postgresql://...")
result = db.query("SELECT * FROM users LIMIT 10")
```

## Связи

- **Родительский MOC:** [[MOC - MCP Servers]]
- **Обзор MCP:** [[combined/MCP Servers Overview]]
- **Mega-агент:** [[agents/mega-coder]]

## См. также

- [[mcp-servers/mcp-code-review-graph]] — анализ кода
- [[combined/Agents Overview]] — агенты, использующие БД

## 🔗 Связи

- [[MOC - MCP Servers]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

