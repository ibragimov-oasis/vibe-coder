---
title: "Orchestration: Hermes (Self-Learning)"
tags:
  - domain/orchestration
  - domain/memory
  - artifact/system
  - status/active
  - source/combined
aliases:
  - hermes
  - self-learning loop
  - pattern extraction
created: 2026-04-18
type: system-note
source: "../COMBINED/orchestration/core-hermes/"
---

# Orchestration: Hermes (Self-Learning)

> **Источник:** `../COMBINED/orchestration/core-hermes/`

## Описание

Self-learning loop: после каждой задачи Hermes извлекает паттерны, создаёт skills, сохраняет в память. **Step 2** в основном пайплайне Vibe-Coder.

## Процесс

```
Задача завершена → Hermes запускается
  → Извлечь паттерны
  → Создать skill файл в COMBINED/skills/{domain}/
  → Сохранить в supermemory
  → Обновить OpenViking контекст
```

## Вывод

Новые skills в `COMBINED/skills/{domain}/{skill-name}/SKILL.md`

## Связи

- **Родительский MOC:** [[MOC - Orchestration]]
- **Обзор оркестрации:** [[combined/Orchestration Overview]]
- **Pipeline Step 2:** [[root-docs/PIPELINE]]
- **Memory:** [[combined/Memory Overview]]

## См. также

- [[orchestration/core-background-agents]] — Step 1 пайплайна
- [[orchestration/core-taskmaster]] — Step 0 пайплайна

## 🔗 Связи

- [[MOC - Orchestration]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

