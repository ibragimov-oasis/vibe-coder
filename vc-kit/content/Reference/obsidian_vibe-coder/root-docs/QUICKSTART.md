---
title: QUICKSTART — Quick Start Guide
tags:
  - domain/system
  - artifact/reference
  - status/active
  - source/root
  - lang/en
source: "../QUICKSTART.md"
created: 2026-04-18
type: mirror
aliases:
  - quickstart
  - quick start
  - getting started
---

# 📄 QUICKSTART — Quick Start Guide

> **Тип:** Mirror-заметка | **Источник:** `../QUICKSTART.md`
> **Краткое описание:** Инструкция быстрого старта. Как активировать Vibe-Coder в Claude Code, GitHub Copilot, Cursor и других IDE за 3 шага.

## О документе

QUICKSTART.md — первый файл для новых пользователей. Даёт минимальный набор шагов для активации системы в любом AI IDE.

## Ключевые шаги

1. Клонировать репозиторий: `git clone https://github.com/ibragimov-oasis/vibe-coder.git`
2. Скопировать конфигурации в проект:
   ```bash
   cp -r vibe-coder/COMBINED/claude/* YOUR_PROJECT/.claude/
   cp -r vibe-coder/COMBINED/copilot/* YOUR_PROJECT/.github/
   cp vibe-coder/COMBINED/cursor/COMBINED_CURSORRULES YOUR_PROJECT/.cursorrules
   ```
3. Открыть проект в AI IDE → AI сразу имеет 54 репо worth of skills

## По IDE

| IDE | Config |
|-----|--------|
| Claude Code | `.claude/` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cursor | `.cursorrules` |
| OpenAI Codex | `.codex/AGENTS.md` |
| Gemini CLI | `.gemini/GEMINI.md` |

## Связан с

- [[MOC - System]] — родительский хаб
- [[root-docs/README]] — полная история
- [[root-docs/INTERFACE_MATRIX]] — совместимость по IDE

## Исходник

> 📂 `../QUICKSTART.md` — читать оригинал для полного контента

## 🔗 Связи

- [[000 - Map of Maps]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

