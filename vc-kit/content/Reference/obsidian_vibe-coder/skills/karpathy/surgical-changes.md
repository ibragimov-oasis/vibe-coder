---
title: "Karpathy Principle 3: Surgical Changes"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - surgical changes
  - karpathy principle 3
  - minimal changes
  - blast radius
created: 2026-04-18
type: skill
source: "../COMBINED/skills/skills-claude/karpathy/"
---

# 🔪 Surgical Changes

> **Принцип #3 из 4** — Andrej Karpathy
> **Встроен во все 15 мега-агентов Vibe-Coder**

## Суть принципа

> "Каждая изменённая строка должна напрямую относиться к задаче пользователя."

**Решает проблемы:**
- ❌ Ортогональные правки (изменение несвязанного кода)
- ❌ "Пока был здесь, поправил и это"
- ❌ Неожиданный blast-radius изменений
- ❌ "Рефакторинг заодно"

## Blast Radius Analysis

Перед любым изменением:
```
1. Какие файлы/модули будут затронуты?
2. Какие тесты могут сломаться?
3. Какие зависимости есть?
4. Есть ли неожиданные ripple effects?
```

→ Инструмент: [[mcp-servers/mcp-code-review-graph]] (blast-radius анализ)

## Правила

1. **One thing at a time** — один PR = одно изменение
2. **No accidental refactoring** — не трогай то, что не относится к задаче
3. **Trace every line** — каждая изменённая строка должна иметь обоснование
4. **Isolate concerns** — рефакторинг и фича — отдельные PR

## Пример

```diff
# Задача: "Исправить опечатку в сообщении ошибки"

# ✅ Surgical (только то, что нужно):
- return "Authentification failed"
+ return "Authentication failed"

# ❌ Non-surgical (лишние изменения):
- return "Authentification failed"
+ return "Authentication failed"
  
# "пока здесь":
- function authenticate(usr, pwd) {
+ function authenticate(username, password) {   ← НЕ нужно для задачи
```

## Git Protocol

```bash
# Изолируй изменения:
git add -p  # добавляй только нужные hunks
git diff --staged  # проверь что собираешься коммитить
```

## Связь с Matt Pocock Skills

→ [[skills/matt-pocock/request-refactor-plan]] — если нужны большие изменения — сначала план
→ [[skills/matt-pocock/git-guardrails]] — защита от случайных коммитов

## Связи

- **Karpathy индекс:** [[skills/skills-claude-karpathy]]
- **Blast-radius инструмент:** [[mcp-servers/mcp-code-review-graph]]
- **Принцип #2:** [[skills/karpathy/simplicity-first]]
- **Принцип #4:** [[skills/karpathy/goal-driven-execution]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[agents/mega-reviewer]] — 7D review включает проверку blast-radius
- [[agents/mega-debugger]] — дебаг с минимальным воздействием

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

