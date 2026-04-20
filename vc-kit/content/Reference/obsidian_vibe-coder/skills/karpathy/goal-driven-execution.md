---
title: "Karpathy Principle 4: Goal-Driven Execution"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - goal-driven execution
  - karpathy principle 4
  - tests first execution
  - verifiable success
created: 2026-04-18
type: skill
source: "../COMBINED/skills/skills-claude/karpathy/"
---

# 🎯 Goal-Driven Execution

> **Принцип #4 из 4** — Andrej Karpathy
> **Встроен во все 15 мега-агентов ULTRACAR**

## Суть принципа

> "Тесты первыми → верифицируемые критерии успеха → цикл до верификации."

**Решает проблемы:**
- ❌ Дрейф задачи (scope creep)
- ❌ Неверифицированный прогресс
- ❌ "Кажется работает, я не проверял"
- ❌ Бесконечный рефакторинг без финиша

## Цикл исполнения

```
1. DEFINE: Что значит "готово"? (acceptance criteria)
   ↓
2. TEST: Написать тест для acceptance criteria (TDD)
   ↓
3. IMPLEMENT: Реализовать минимальный код
   ↓
4. VERIFY: Тест прошёл? 
   → YES: Done ✅
   → NO: вернуться к IMPLEMENT
```

## Определение "готово"

До начала кодирования ответь:
- "Тест X прошёл" — конкретная верификация
- "Пользователь может сделать Y" — сценарий использования
- "Метрика Z достигнута" — измеримый критерий

```markdown
## Definition of Done
- [ ] Unit тесты проходят (>90% coverage)
- [ ] E2E тест сценарий X работает
- [ ] Performance: < 200ms response time
- [ ] Code review approved
```

## Антипаттерны

```
❌ "Я думаю это работает"
❌ "Протестирую потом"
❌ "Это очевидно правильно, тесты не нужны"
❌ Бесконечный рефакторинг без прохождения теста
```

## Связь с ULTRACAR Pipeline

```
Task Master: определяет acceptance criteria
    ↓
mega-tester: TDD цикл
    ↓
Shannon: security verification
    ↓
code-review-graph: structural verification
    ↓
mega-reviewer: 7D review
    ↓
DONE ✅
```

## Связь с Matt Pocock Skills

→ [[skills/matt-pocock/tdd]] — практическая реализация этого принципа
→ [[skills/matt-pocock/write-a-prd]] — acceptance criteria в PRD

## Связи

- **Karpathy индекс:** [[skills/skills-claude-karpathy]]
- **TDD навык:** [[skills/matt-pocock/tdd]]
- **Принцип #3:** [[skills/karpathy/surgical-changes]]
- **Пайплайн:** [[root-docs/PIPELINE]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[agents/mega-tester]] — tester применяет Goal-Driven Execution
- [[orchestration/core-taskmaster]] — Task Master определяет DoD

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

