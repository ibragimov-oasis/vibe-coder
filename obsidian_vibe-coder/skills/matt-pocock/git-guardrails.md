---
title: "Skill: git-guardrails"
tags:
  - domain/skills
  - domain/devops
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - git-guardrails
  - git guardrails
  - safe git operations
created: 2026-04-18
type: skill
source: "../COMBINED/skills/skills-development/git-guardrails-claude-code/"
---

# 🛡️ Skill: git-guardrails

> **Что делает:** Защищает от опасных git-операций (force push, удаление веток, rewrite history).
> **Автор:** Matt Pocock | **Агент:** [[agents/mega-devops]]

## Назначение

`git-guardrails` добавляет защитные проверки для опасных git команд:
- Блокирует `git push --force` на protected ветках
- Предупреждает перед `git reset --hard`
- Проверяет перед `git rebase` на публичных ветках
- Предотвращает случайные коммиты секретов

## Опасные команды и защита

| Команда | Риск | Защита |
|---------|------|--------|
| `git push --force` | Перезаписывает историю | Запретить на main/dev |
| `git reset --hard` | Потеря несохранённых изменений | Предупреждение + confirm |
| `git rebase origin/main` | Конфликты, потеря коммитов | Проверить чистоту ветки |
| `git stash drop` | Потеря stash | Список + confirm |
| `git branch -D` | Удаление ветки | Проверить merge status |

## Git Workflow (Branch Strategy)

```
feature/* → dev → main
   ↑             ↑
  PR только    PR только
```

## Commit Convention

```
feat(scope): description    — новая функциональность
fix(scope): description     — исправление бага
docs(scope): description    — документация
refactor(scope): description — рефакторинг
chore(scope): description   — рутина
test(scope): description    — тесты
```

## Проверки перед push

```bash
# 1. Нет секретов
git diff --staged | grep -i "secret\|password\|token\|key"

# 2. Тесты прошли
npm test # или pytest

# 3. Lint clean
npm run lint

# 4. На правильной ветке
git branch --show-current
```

## Связи

- **Принцип:** [[skills/karpathy/surgical-changes]]
- **Агент:** [[agents/mega-devops]]
- **Индекс:** [[skills/skills-development]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[skills/matt-pocock/tdd]] — тесты как защита
- [[agents/mega-devops]] — полный DevOps workflow

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

