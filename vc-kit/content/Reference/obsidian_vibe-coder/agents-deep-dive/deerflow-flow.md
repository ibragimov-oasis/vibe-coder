---
title: "Agents Deep-Dive: DeerFlow Research Flow"
tags:
  - domain/agents
  - artifact/index
  - status/active
  - source/combined
aliases:
  - deerflow agents
  - deerflow research flow
  - research agents deep-dive
created: 2026-04-18
type: agents-deepdive
source: "../.claude/orchestration/core-deer-flow/"
---

# 🦌 DeerFlow Research Flow — Agents Deep-Dive

> **Источник:** `../.claude/orchestration/core-deer-flow/`
> **Репозиторий:** DeerFlow от ByteDance (55k⭐) — Multi-step research с LangGraph + FastAPI
> **Мета-агент:** [[agents/mega-researcher]]

---

## Архитектура DeerFlow

```
Исследовательский вопрос
        ↓
    [Coordinator]
      /   |   \
     /    |    \
[Planner] [WebSearch] [Analyst]
     \    |    /
      \   |   /
    [Synthesizer]
        ↓
    Финальный отчёт
```

---

## Агенты DeerFlow

### Coordinator
- Оркестрирует весь research workflow
- Разбивает сложный вопрос на подзадачи
- Назначает агентов

### Planner
- Создаёт план исследования
- Определяет источники для поиска
- Составляет вопросы для каждого источника

### WebSearch Agent (использует Lightpanda)
- Поиск по интернету
- Извлечение контента через [[mcp-servers/mcp-lightpanda]]
- Конвертация в Markdown через [[mcp-servers/mcp-markitdown]]

### Analyst
- Анализирует собранную информацию
- Выявляет паттерны и противоречия
- Оценивает качество источников

### Synthesizer
- Объединяет результаты всех агентов
- Создаёт структурированный отчёт
- Добавляет источники и ссылки

---

## Workflow (5 шагов)

```
1. DECOMPOSE: Разбить исследовательский вопрос
2. SEARCH:    Параллельный поиск по источникам
3. ANALYZE:   Анализ каждого источника
4. VALIDATE:  Перекрёстная проверка
5. SYNTHESIZE: Финальный отчёт
```

---

## Типичные задачи

- "Сравни технологии X vs Y vs Z"
- "Исследуй текущее состояние области N"
- "Найди best practices для задачи M"
- "Собери данные о производительности компонента K"

---

## Интеграция с Vibe-Coder

- Используется [[agents/mega-researcher]] как основной движок
- [[mcp-servers/mcp-lightpanda]] — 9x быстрее Chrome для web scraping
- [[mcp-servers/mcp-markitdown]] — конвертация PDF/DOCX в Markdown
- Результаты сохраняются в [[mcp-servers/mcp-supermemory]]

---

## Связи

- **MOC:** [[MOC - Agents]]
- **MOC:** [[MOC - Orchestration]]
- **Система:** [[orchestration/core-deer-flow]]
- **Role index:** [[agents-by-role/researcher]]
- **Мета-агент:** [[agents/mega-researcher]]
- **Map:** [[000 - Map of Maps]]

## См. также

- [[agents-by-role/researcher]] — все researcher агенты
- [[mcp-servers/mcp-markitdown]] — конвертация файлов

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

