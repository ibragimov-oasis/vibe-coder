---
title: MOC - Prompts
tags:
  - domain/prompts
  - artifact/moc
  - status/active
aliases:
  - prompts map
  - prompt library
created: 2026-04-18
type: moc
---

# 🗺️ MOC — Prompts

> **Map of Content** для домена `Prompts`.
> 250+ промптов в 5 категориях. Источники: `.claude/prompts/`.

## 📚 Категории промптов

| Категория | Путь | Описание |
|-----------|------|----------|
| `prompts-leaked` | `.claude/prompts/prompts-leaked/` | Системные промпты AI-продуктов (Cursor, Devin, Manus, v0, Windsurf, Claude...) |
| `prompts-templates` | `.claude/prompts/prompts-templates/` | Reusable шаблоны для задач разработки |
| `prompts-ai-systems` | `.claude/prompts/prompts-ai-systems/` | Системные промпты AI-инструментов |
| `prompts-system-models` | `.claude/prompts/prompts-system-models/` | Архивные промпты (Google, Anthropic, OpenAI) |
| `prompts-system` | `.claude/prompts/prompts-system/` | Общие системные промпты |

## 🔑 Ключевые промпты

### Leaked AI System Prompts (`prompts-leaked/`)
- **Anthropic/claude-code.md** — полный системный промпт Claude Code
- **Google/gemini-2.5-pro-api.md** — Gemini 2.5 Pro
- **OpenAI/GPT-4o.md** — GPT-4o системный промпт
- **Cursor/Agent.md** — Cursor AI агент
- **Manus/Prompt.md** — Manus multi-agent
- **Devin/system.md** — Devin автономный инженер

### Шаблоны разработки (`prompts-templates/`)
- **vibe-coding-prompt-template/** — полный шаблон вайб-кодинга (deep research → PRD → tech design → agent notes)
- **claude-skills-templates/** — шаблоны для создания Claude Skills
- **selfhosted/** — awesome-selfhosted интеграция

## 📊 Статистика

| Метрика | Значение |
|---------|---------|
| Всего файлов | 250 |
| prompts-leaked | ~100 |
| prompts-templates | ~100 |
| prompts-ai-systems | ~40 |
| prompts-system-models | ~3 |
| prompts-system | ~5 |

## 🔗 Связанные MOC

- [[MOC - Skills]] — Навыки используют промпты
- [[MOC - Agents]] — Агенты работают на системных промптах
- [[MOC - System]] — Архитектура Vibe-Coder
- [[000 - Map of Maps]] — Главная карта

## 📦 Источники

- `prompts-leaked` — community-collected leaked AI system prompts
- `prompts-ai-systems` — [Awesome AI System Prompts](https://github.com/dontriskit/awesome-ai-system-prompts)
- `prompts-system-models` — [System Prompts and Models](https://github.com/x1xhlol/system-prompts-and-models)
- `prompts-templates` — RuFlo + GSD + OMC + vibe-coding-template

## 🔗 Связи

- [[MOC - Skills]] — Skills use prompts
- [[MOC - Agents]] — Agents run on system prompts
- [[MOC - System]] — Vibe-Coder architecture
- [[prompts/prompts-ai-systems]] — AI system prompts collection
- [[prompts/prompts-templates]] — Reusable prompt templates
- [[000 - Map of Maps]] — Map of Maps
