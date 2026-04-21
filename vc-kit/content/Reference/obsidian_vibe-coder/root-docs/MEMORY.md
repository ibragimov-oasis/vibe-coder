---
title: MEMORY — 3-Layer Memory Architecture
tags:
  - domain/memory
  - artifact/reference
  - status/active
  - source/root
source: "../MEMORY.md"
created: 2026-04-18
type: mirror
aliases:
  - memory architecture
  - memory setup
---

# 📄 MEMORY — 3-Layer Memory Architecture

> **Тип:** Mirror-заметка | **Источник:** `../MEMORY.md`
> **Краткое описание:** Полная архитектура 3 систем памяти Vibe-Coder: краткосрочная, долгосрочная и контекст кодовой базы.

## О документе

MEMORY.md описывает 3-уровневую архитектуру памяти системы. Это критический файл — Rule #2 из CAPABILITIES называет память "самым важным правилом". Без правильно настроенной памяти теряется ~87% эффективности.

## Три уровня памяти

### L1 — Claude-Mem (сессионная)
- **Назначение**: краткосрочная память внутри сессии
- **Особенность**: автоматическое сжатие контекста
- **Путь**: `COMBINED/memory/memory-claude-mem/`

### L2 — Supermemory (долгосрочная)
- **Назначение**: cross-session память, паттерны, инсайты
- **Рейтинг**: #1 на LongMemEval, LoCoMo, ConvoMem
- **URL**: `https://mcp.supermemory.ai/mcp`
- **CLI**: `npx -y supermemory search "<q>"` / `npx -y supermemory add "..."`

### L3 — OpenViking (кодовая база)
- **Назначение**: понимание структуры кодовой базы
- **Особенность**: tiered loading L0/L1/L2
- **Путь**: `COMBINED/mcp-servers/mcp-openviking/`

## Memory Bootstrap Protocol

```bash
# ПЕРВОЕ действие в каждой сессии:
bash memory-bootstrap.sh

# Что делает: строит/обновляет code graph (8.2x token reduction)
# Экономит ~87% токенов за сессию
```

## Связан с

- [[MOC - Memory]] — родительский хаб
- [[MOC - MCP Servers]] — Supermemory и OpenViking как MCP
- [[root-docs/CAPABILITIES]] — Rule #2: Memory-First

## Исходник

> 📂 `../MEMORY.md` — читать оригинал для полного контента

## 🔗 Связи

- [[000 - Map of Maps]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

