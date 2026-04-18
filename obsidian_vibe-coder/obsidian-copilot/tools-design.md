---
title: "Obsidian Copilot: Design — Tool System"
tags:
  - domain/skills
  - domain/agents
  - domain/obsidian
  - artifact/design
  - status/active
  - source/obsidian-copilot
aliases:
  - copilot tool system
  - tool registry
  - copilot tools design
created: 2026-04-18
type: mirror
source: "../new_repos/obsidian-copilot/designdocs/TOOLS.md"
---

# Obsidian Copilot: Design — Tool System

> **Источник:** `../new_repos/obsidian-copilot/designdocs/TOOLS.md`

## О чём

Централизованный реестр инструментов агента: `ToolRegistry` singleton, унифицированный интерфейс для открытия, настройки и выполнения инструментов. Проектирован с поддержкой MCP.

## Архитектура

```
ToolRegistry (singleton)
  ├── discover()    — обнаружение доступных инструментов
  ├── configure()   — настройка инструмента
  └── execute()     — выполнение инструмента
```

## MCP-готовность

Система спроектирована для лёгкой интеграции MCP-инструментов в будущем.

## Связь с ULTRACAR

Аналог: **MCP servers** в ULTRACAR — единая точка регистрации инструментов для агентов.

## Связи

- **Родительский MOC:** [[MOC - MCP Servers]]
- **Индекс Copilot:** [[obsidian-copilot/index]]
- **Agent Mode:** [[obsidian-copilot/agent-mode-and-tools]]
- **CLI Integration:** [[obsidian-copilot/obsidian-cli-integration]]

## См. также

- [[combined/MCP Servers Overview]] — MCP в ULTRACAR
- [[combined/Agents Overview]] — агентная система ULTRACAR

## 🔗 Связи

- [[MOC - System]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

