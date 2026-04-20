---
title: CAPABILITIES — ULTRACAR Capabilities Registry
tags:
  - domain/system
  - artifact/reference
  - status/active
  - source/root
  - lang/en
source: "../CAPABILITIES.md"
created: 2026-04-18
type: mirror
aliases:
  - capabilities
  - rules
  - hardcoded rules
---

# 📄 CAPABILITIES — ULTRACAR Capabilities Registry

> **Тип:** Mirror-заметка | **Источник:** `../CAPABILITIES.md`
> **Краткое описание:** Мозг системы. 5 non-negotiable rules + Karpathy principles + полный реестр возможностей. Каждый агент читает этот файл первым.

## О документе

CAPABILITIES.md — это "мозг системы". Читается каждым агентом до начала любой задачи. Содержит 5 hardcoded rules которые НЕЛЬЗЯ нарушать, Karpathy 4 Principles, полный capability map (агенты, оркестрация, память, MCP, дизайн, навыки).

## Karpathy 4 Principles (применяются ко ВСЕМ агентам)

1. **Think Before Coding** — состояние предположений явно, push back если есть более простой подход
2. **Simplicity First** — минимальный код, no speculative features, no abstractions for single-use
3. **Surgical Changes** — трогай только нужное, не "улучшай" соседний код
4. **Goal-Driven Execution** — определи критерии успеха, loop до верификации, тесты первыми

## 5 Hardcoded Rules

### RULE #1: BROWSER
```
ВСЕГДА Lightpanda (9× быстрее, 16× меньше памяти)
НИКОГДА не использовать Chrome. EVER.
```

### RULE #2: MEMORY-FIRST
```
ПЕРВОЕ действие в каждой сессии: bash memory-bootstrap.sh
Без этого теряется ~87% эффективности
```

### RULE #3: DESIGN HIERARCHY
```
Galaxy → shadcn → Impeccable → Taste-skill → Stitch → UI/UX Pro Max
Только если все 6 не подходят — custom (документируй почему)
```

### RULE #4: AUTONOMOUS PIPELINE
```
Step 0:   Task Master          → структура задач из PRD
Step 0.5: Archon (optional)    → YAML DAG workflow
Step 1:   Background Agent     → исполнение задачи
Step 2:   Hermes               → self-learning loop
Step 3:   Shannon              → security audit
Step 4:   Code Review Graph    → structural verification
Loop:     if vulnerabilities   → вернуться к Step 1
Done:     if clean             → deliver report
```

### RULE #5: SELF-IMPROVEMENT
```
После каждой задачи → Hermes:
- Извлечь reusable patterns
- Создать skill files в COMBINED/skills/{domain}/
- Обновить supermemory
```

## Связан с

- [[MOC - System]] — родительский хаб
- [[root-docs/AGENTS]] — каталог агентов
- [[root-docs/PIPELINE]] — детали пайплайна
- [[root-docs/PIPELINE_TRIGGER]] — routing decision tree

## Исходник

> 📂 `../CAPABILITIES.md` — читать оригинал для полного контента

## 🔗 Связи

- [[000 - Map of Maps]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

