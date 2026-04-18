---
title: mega-researcher — Deep Research
tags:
  - domain/agents
  - artifact/mega-agent
  - agent/mega-researcher
  - status/active
source: "../COMBINED/agents/mega/mega-researcher.md"
created: 2026-04-18
type: mirror
aliases:
  - researcher
  - mega-researcher
---

# 🤖 mega-researcher — Deep Research

> **Мега-агент** для глубокого исследования.
> Когда использовать: research, analyze, investigate задачи.

## Когда использовать

```
IF research/analyze/investigate → mega-researcher
```

## Источники

Hermes + GSD + DeerFlow + **PraisonAI** + **markitdown (file→markdown)**

## Инструменты

### DeerFlow (ByteDance research)
- LangGraph + FastAPI архитектура
- Multi-step research synthesis
- Параллельные research threads

### markitdown — конвертация файлов
Поддерживает: PDF, DOCX, XLSX, PPTX, HTML, изображения, аудио, ZIP

### Lightpanda — web research
```bash
# ОБЯЗАТЕЛЬНО: только Lightpanda для web (никогда Chrome)
./lightpanda serve --host 127.0.0.1 --port 9222
```

## Workflow

```
1. Check supermemory — было ли это исследовано?
2. Lightpanda web research (параллельные threads)
3. markitdown для конвертации найденных файлов
4. DeerFlow синтез + анализ
5. Hermes — сохранить найденные паттерны
6. Сохранить в supermemory
```

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[MOC - Memory]] — Supermemory для результатов
- [[MOC - MCP Servers]] — Lightpanda и markitdown

## Исходник

> 📂 `../COMBINED/agents/mega/mega-researcher.md`
