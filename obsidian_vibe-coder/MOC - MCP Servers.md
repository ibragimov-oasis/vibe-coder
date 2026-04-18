---
title: MOC - MCP Servers
tags:
  - domain/mcp
  - artifact/moc
  - status/active
aliases:
  - mcp map
  - mcp servers
  - tools
created: 2026-04-18
type: moc
---

# 🗺️ MOC — MCP Servers

> **Map of Content** для домена `MCP Servers`.
> 9 активных серверов + 3 запланированных. Конфиги в `.cursor/mcp.json` и `.claude/settings.json`.

## ✅ Активные MCP серверы (9)

| Сервер | Заметка | Назначение | Ключ |
|--------|---------|-----------|------|
| **Lightpanda** | [[mcp-servers/mcp-lightpanda]] | Browser (9x faster, 16x less mem) | `lightpanda` |
| **GitNexus** | [[mcp-servers/mcp-gitnexus]] | Codebase map and analysis | `gitnexus` |
| **Supermemory** | [[mcp-servers/mcp-supermemory]] | Long-term memory (#1 benchmarks) | `supermemory` |
| **OpenViking** | [[mcp-servers/mcp-openviking]] | Codebase context (ByteDance) | `openviking` |
| **Nano-Banana** | [[mcp-servers/mcp-nano-banana]] | Image generation (Gemini) | `nano-banana` |
| **mcp-toolbox** | [[mcp-servers/mcp-toolbox]] | Database access (20+ DBs) | `mcp-toolbox` |
| **markitdown** | [[mcp-servers/mcp-markitdown]] | File→Markdown (PDF, DOCX, images, audio) | `markitdown` |
| **code-review-graph** | [[mcp-servers/mcp-code-review-graph]] | AST analysis (8.2x reduction, 22 tools) | `code-review-graph` |
| **Hermes MCP** | [[mcp-servers/mcp-hermes]] | Self-learning tools | `hermes` |

## ✅ Недавно активированные / Запланированные

| Сервер | Заметка | Статус | CLI |
|--------|---------|--------|-----|
| **Task Master AI** | [[orchestration/core-taskmaster]] | ✅ ACTIVE | `npx -y task-master-ai` |
| **Archon** | [[orchestration/core-archon]] | ⚡ CLI | `npx archon run <workflow.yaml>` |
| **Pretext** | [[mcp-servers/mcp-pretext]] | ⚠️ Planned | — |

## 📋 Конфигурация

- [[mcp-servers/mcp-configs]] — все конфигурационные файлы по интерфейсам

## 🌐 Lightpanda — ОБЯЗАТЕЛЬНЫЙ браузер

> **RULE #1 из CAPABILITIES:** ВСЕГДА Lightpanda, НИКОГДА Chrome.

```bash
# macOS install
curl -L -o lightpanda \
  https://github.com/lightpanda-io/browser/releases/download/nightly/lightpanda-aarch64-macos \
  && chmod a+x ./lightpanda

# Старт CDP сервера
./lightpanda serve --host 127.0.0.1 --port 9222
```

## 📋 Подключение к databases (mcp-toolbox)

Поддерживает: PostgreSQL, MySQL, BigQuery, MongoDB, Redis, Spanner, AlloyDB, и 13+ других.

## 📄 Конвертация файлов (markitdown)

Поддерживает: PDF, DOCX, XLSX, PPTX, HTML, изображения, аудио, ZIP архивы.

## 🔧 Конфиги

- Claude Code: `.claude/settings.json` → `mcpServers`
- Cursor: `.cursor/mcp.json`
- GitHub Copilot: CLI команды (native MCP не поддерживается)

## Связанные MOC

- [[MOC - Memory]] — Supermemory и OpenViking как MCP
- [[MOC - Security]] — code-review-graph для безопасности
- [[MOC - System]] — MCP как часть capabilities
- [[combined/MCP Servers Overview]] — Детали конфигурации
- [[000 - Map of Maps]] — Главная карта

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

