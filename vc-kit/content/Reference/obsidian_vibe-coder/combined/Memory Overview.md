---
title: Memory Overview — .claude/memory
tags:
  - domain/memory
  - artifact/index
  - status/active
  - source/combined
source: "../.claude/memory/"
created: 2026-04-18
type: mirror
aliases:
  - combined memory
  - memory directory
---

# 📄 Memory Overview — .claude/memory

> **Тип:** Domain overview | **Источник:** `../.claude/memory/`
> **Краткое описание:** Структура директории .claude/memory — 3 системы памяти.

## Структура директории

```
.claude/memory/
├── memory-supermemory/      — Long-term memory (#1 benchmarks)
│   └── mcp.json             — MCP конфигурация
├── memory-claude-mem/       — Session memory (Claude-Mem)
│   ├── README.md
│   └── hooks/               — Автоматическое сохранение
└── memory-openviking/       — Codebase context (OpenViking)
    ├── README.md
    └── config/
```

## Системы памяти

### Supermemory (`memory-supermemory/`)
- **#1** на LongMemEval benchmark
- Endpoints: `search`, `add`, `delete`, `list`
- MCP URL: `https://mcp.supermemory.ai/mcp`
- CLI: `npx -y supermemory`

### Claude-Mem (`memory-claude-mem/`)
- Сессионная память с автоматическим сжатием
- Hooks для автосохранения при каждом действии
- Local storage (no cloud required)

### OpenViking (`memory-openviking/`)
- Filesystem paradigm для AI codebase understanding
- Tiered loading: L0 (summaries) → L1 (details) → L2 (full)
- Специализация: ByteDance codebase navigation

## Bootstrap протокол

```bash
# Запустить в начале каждой сессии
bash memory-bootstrap.sh

# Что происходит:
# 1. code-review-graph build/update  (8.2x token reduction)
# 2. supermemory check  (прошлые паттерны)
# 3. openviking index update  (свежий codebase контекст)
```

## Связан с

- [[MOC - Memory]] — родительский хаб
- [[MOC - MCP Servers]] — Supermemory и OpenViking как MCP
- [[root-docs/MEMORY]] — архитектура памяти

## 🔗 Связи

- [[000 - Map of Maps]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

