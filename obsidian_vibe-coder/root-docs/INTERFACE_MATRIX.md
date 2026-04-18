---
title: INTERFACE_MATRIX — IDE Tools Compatibility
tags:
  - domain/system
  - artifact/reference
  - status/active
  - source/root
  - lang/en
source: "../INTERFACE_MATRIX.md"
created: 2026-04-18
type: mirror
aliases:
  - interface matrix
  - ide compatibility
  - tools matrix
---

# 📄 INTERFACE_MATRIX — IDE Tools Compatibility

> **Тип:** Mirror-заметка | **Источник:** `../INTERFACE_MATRIX.md`
> **Краткое описание:** Матрица совместимости: какие инструменты (MCP, Skills, Hooks) работают в каком IDE.

## О документе

INTERFACE_MATRIX.md описывает что доступно в каждом AI IDE:
- Claude Code, GitHub Copilot, Cursor, OpenAI Codex, Gemini CLI, Antigravity
- Для каждого IDE: MCP серверы, Skills, Hooks, Специфические возможности

## Матрица совместимости

| Возможность | Claude Code | Copilot | Cursor | Codex | Gemini |
|-------------|:-----------:|:-------:|:------:|:-----:|:------:|
| MCP Servers | ✅ Native | ❌ CLI only | ✅ Native | ❌ | ❌ |
| Agent Skills | ✅ | ✅ | ✅ | ✅ | ❌ |
| Hooks | ✅ | ❌ manual | ❌ | ❌ | ❌ |
| Squad (teams) | ❌ | ✅ Native | ❌ | ❌ | ❌ |
| Background Agents | ✅ | ✅ Copilot | ❌ | ❌ | ❌ |
| Bash/Terminal | ✅ | ✅ | ✅ | ✅ | ✅ |

## GitHub Copilot специфика

- ✅ Squad — NATIVE (Copilot-specific)
- ✅ GitHub integration (PR, issues)
- ✅ Custom agents (`.github/agents/`)
- ✅ Prompt files (`.github/prompts/`)
- ❌ MCP → используй CLI команды

## CLI-альтернативы MCP для Copilot

| MCP Tool | CLI Command |
|----------|------------|
| Lightpanda | `npx -y lightpanda-mcp` |
| GitNexus | `npx -y gitnexus@latest mcp` |
| Supermemory | `npx -y supermemory search "<q>"` |
| Task Master | `npx -y task-master-ai` |

## Связан с

- [[MOC - System]] — родительский хаб
- [[MOC - MCP Servers]] — детали MCP серверов
- [[root-docs/CAPABILITIES]] — capabilities registry

## Исходник

> 📂 `../INTERFACE_MATRIX.md` — читать оригинал для полного контента
