---
title: MCP Servers Overview — .claude/mcp-servers
tags:
  - domain/mcp
  - artifact/index
  - status/active
  - source/combined
source: "../.claude/mcp-servers/"
created: 2026-04-18
type: mirror
aliases:
  - combined mcp
  - mcp directory
---

# 📄 MCP Servers Overview — .claude/mcp-servers

> **Тип:** Domain overview | **Источник:** `../.claude/mcp-servers/`
> **Краткое описание:** Структура директории .claude/mcp-servers — конфигурации 9 активных MCP серверов.

## Структура директории

```
.claude/mcp-servers/
├── mcp-lightpanda/          — Lightpanda Browser (9x faster CDP)
├── mcp-gitnexus/            — GitNexus (codebase map, analysis)
├── mcp-openviking/          — OpenViking (codebase context)
├── mcp-nano-banana/         — Nano-Banana (image generation, Gemini)
├── mcp-toolbox/             — MCP Toolbox (20+ databases)
├── mcp-markitdown/          — MarkItDown (PDF/DOCX/images → Markdown)
├── mcp-code-review-graph/   — Code Review Graph (8.2x, AST, 22 tools)
├── mcp-configs/             — JSON конфиги (claude, cursor)
│   ├── claude-settings.json
│   └── cursor-mcp.json
└── (supermemory — external URL)
```

## Конфиги по IDE

### Claude Code (`.claude/settings.json`)
```json
{
  "mcpServers": {
    "lightpanda": {...},
    "gitnexus": {...},
    "supermemory": {...},
    "openviking": {...},
    "code-review-graph": {...}
  }
}
```

### Cursor (`.cursor/mcp.json`)
Аналогичная структура, те же серверы.

## Lightpanda — быстрый старт

```bash
# macOS
curl -L -o lightpanda \
  https://github.com/lightpanda-io/browser/releases/download/nightly/lightpanda-aarch64-macos
chmod a+x ./lightpanda

# Запуск CDP сервера
./lightpanda serve --host 127.0.0.1 --port 9222
```

## code-review-graph — быстрый старт

```bash
pip install code-review-graph
code-review-graph build    # первый раз
code-review-graph update   # каждая сессия (< 2 сек)
```

## Связан с

- [[MOC - MCP Servers]] — родительский хаб
- [[MOC - Memory]] — Supermemory + OpenViking
- [[MOC - Security]] — code-review-graph

## 🔗 Связи

- [[000 - Map of Maps]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

