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

| Сервер | Назначение | Ключ | Путь |
|--------|-----------|------|------|
| **Lightpanda** | Browser (9x faster, 16x less mem) | `lightpanda` | `COMBINED/mcp-servers/mcp-lightpanda/` |
| **GitNexus** | Codebase map and analysis | `gitnexus` | `COMBINED/mcp-servers/mcp-gitnexus/` |
| **Supermemory** | Long-term memory (#1 benchmarks) | `supermemory` | `https://mcp.supermemory.ai/mcp` |
| **OpenViking** | Codebase context (ByteDance) | `openviking` | `COMBINED/mcp-servers/mcp-openviking/` |
| **Nano-Banana** | Image generation (Gemini) | `nano-banana` | `COMBINED/mcp-servers/mcp-nano-banana/` |
| **mcp-toolbox** | Database access (20+ DBs) | `mcp-toolbox` | `COMBINED/mcp-servers/mcp-toolbox/` |
| **markitdown** | File→Markdown (PDF, DOCX, images, audio) | `markitdown` | `COMBINED/mcp-servers/mcp-markitdown/` |
| **code-review-graph** | AST analysis (8.2x reduction, 22 tools) | `code-review-graph` | `COMBINED/mcp-servers/mcp-code-review-graph/` |
| **claude-flow** | Agent teams (Claude Code only) | `claude-flow` | — |

## ✅ Недавно активированные

| Сервер | Статус | CLI |
|--------|--------|-----|
| **Task Master AI** | ✅ ACTIVE | `npx -y task-master-ai` |
| **Archon** | ⚡ CLI | `npx archon run <workflow.yaml>` |
| **Pretext** | ⚠️ Planned | — |

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
