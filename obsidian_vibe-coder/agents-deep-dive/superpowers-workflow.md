---
title: "Agents Deep-Dive: Superpowers Workflow"
tags:
  - domain/agents
  - artifact/index
  - status/active
  - source/combined
aliases:
  - superpowers workflow
  - superpowers agents
  - systematic dev workflow
created: 2026-04-18
type: agents-deepdive
source: "../COMBINED/orchestration/superpowers/"
---

# ⚡ Superpowers Workflow — Agents Deep-Dive

> **Источник:** `../COMBINED/orchestration/superpowers/`
> **Репозиторий:** Superpowers (129k⭐) — Universal development workflow
> **Философия:** Systematic > Ad-hoc, Test-Driven, Evidence-Based
> **Мета-агент:** [[agents/mega-coder]]

---

## 7-шаговый Workflow

```
Step 1: brainstorming
  ↓ "Рафинируй идею через уточняющие вопросы"
Step 2: using-git-worktrees
  ↓ "Изолированное рабочее пространство в новой ветке"
Step 3: writing-plans
  ↓ "Разбей на задачи 2-5 минут каждая"
Step 4: subagent-driven-development
  ↓ "Свежий подагент на каждую задачу + двухэтапный review"
Step 5: test-driven-development
  ↓ "RED-GREEN-REFACTOR"
Step 6: requesting-code-review
  ↓ "Ревью против плана"
Step 7: finishing-a-development-branch
  ↓ "Проверка тестов + презентация опций"
```

---

## Ключевые принципы Superpowers

| Принцип | Описание |
|---------|----------|
| **Test-Driven** | Тесты пишутся первыми, всегда |
| **Systematic over Ad-hoc** | Процесс > угадывание |
| **Complexity reduction** | Простота как первичная цель |
| **Evidence over claims** | Верифицировать перед объявлением "готово" |
| **Subagent delegation** | Свежий контекст = чище результат |

---

## Subagent-Driven Development (шаг 4)

Уникальная фича: **каждая задача** выполняется новым подагентом:

```
Plan task list
    ↓
For each task:
  → Launch fresh subagent
  → Execute task
  → Two-stage review (draft → final)
  → Next task
```

**Зачем:** Предотвращает "context rot" — деградацию качества при длинном контексте.

---

## Двухэтапный Review

```
Stage 1 (Draft Review):
  - Проверить против плана
  - Нет ли отклонений от задачи?

Stage 2 (Final Review):
  - Тесты прошли?
  - Нет ли breaking changes?
  - Security check?
```

---

## Git Worktrees (шаг 2)

```bash
# Создать изолированное рабочее пространство
git worktree add ../feature-xyz feature/xyz

# Работать в изолированной директории
cd ../feature-xyz
# ... делать изменения ...

# Убрать после merge
git worktree remove ../feature-xyz
```

---

## Связи

- **MOC:** [[MOC - Agents]]
- **MOC:** [[MOC - Orchestration]]
- **Система:** [[orchestration/superpowers]]
- **TDD навык:** [[skills/matt-pocock/tdd]]
- **Мета-агент:** [[agents/mega-coder]]
- **Map:** [[000 - Map of Maps]]

## См. также

- [[agents-deep-dive/omc-team-roles]] — OMC команда
- [[skills/karpathy/goal-driven-execution]] — Goal-Driven = суть Superpowers
