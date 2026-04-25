---
title: MOC - Memory
tags:
  - domain/memory
  - artifact/moc
  - status/active
aliases:
  - memory map
  - memory systems
created: 2026-04-18
type: moc
---

# 🗺️ MOC — Memory

> **Map of Content** для домена `Memory`.
> 3 системы памяти: краткосрочная, долгосрочная, контекст кодовой базы.

## 🧠 Три системы памяти

### 1. Supermemory — Долгосрочная память

- **#1** на LongMemEval, LoCoMo, ConvoMem
- URL: `https://mcp.supermemory.ai/mcp`
- Путь: `.claude/memory/memory-supermemory/`
- Использование: `mcp supermemory search "<query>"` / `mcp supermemory add "..."`
- CLI: `npx -y supermemory search "<query>"`

```
КОГДА ИСПОЛЬЗОВАТЬ:
✅ Проверить перед задачей: было ли это сделано раньше?
✅ Сохранить после задачи: что работало, что нет
✅ Cross-session память для паттернов и инсайтов
```

### 2. Claude-Mem — Краткосрочная память

- Сессионная память с автоматическим сжатием
- Путь: `.claude/memory/memory-claude-mem/`
- Назначение: сохранять контекст внутри сессии

### 3. OpenViking — Контекст кодовой базы

- Разработка ByteDance
- Путь: `.claude/mcp-servers/mcp-openviking/`
- Tiered loading: L0 / L1 / L2
- Назначение: filesystem paradigm для понимания кодовой базы

## ⛔ MEMORY-FIRST Protocol (RULE #2 из CAPABILITIES)

> **Это самое важное правило. Без него теряется ~87% эффективности.**

```bash
# ПЕРВОЕ действие в каждой сессии:
bash memory-bootstrap.sh

# Или вручную:
if [ ! -f .code-review-graph/graph.db ]; then
  pip install code-review-graph && code-review-graph build
else
  code-review-graph update  # < 2 секунды
fi
```

## 📖 Документация

- [[root-docs/MEMORY]] — 3-уровневая архитектура памяти (детали)
- `.claude/memory/` — Все файлы систем памяти
- `MEMORY_SETUP.md` — Инструкции установки 3 систем памяти

## Связанные MOC

- [[MOC - System]] — Memory как часть pipeline
- [[MOC - MCP Servers]] — Supermemory и OpenViking как MCP
- [[MOC - Orchestration]] — Hermes пишет в Supermemory
- [[000 - Map of Maps]] — Главная карта

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

