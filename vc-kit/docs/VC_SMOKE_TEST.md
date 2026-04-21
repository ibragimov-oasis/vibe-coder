# VC_SMOKE_TEST

Мини-чеклист после внедрения `vibe-coder` в целевой проект.

## 0) Базовая проверка файлов

```bash
ls -la .claude/CLAUDE.md .github/copilot-instructions.md .antigravity/AGENTS.md 2>/dev/null
ls -la .cursor .codex .gemini .cursorrules .env.example 2>/dev/null
```

## 1) Claude Code

- [ ] Открыть новый сеанс в проекте.
- [ ] Дать запрос: «Create a plan for X».
- [ ] Убедиться, что агент работает в план-режиме и использует `.claude/CLAUDE.md`.

## 2) GitHub Copilot

- [ ] Открыть новый сеанс Copilot в этом проекте.
- [ ] Проверить, что читается `.github/copilot-instructions.md`.
- [ ] Дать запрос на сложную задачу и проверить, что маршрут/роли соответствуют инструкциям.

## 3) Antigravity

- [ ] Открыть новый сеанс Antigravity.
- [ ] Проверить наличие `.antigravity/AGENTS.md`.
- [ ] Дать задачу на исследование и убедиться, что учитываются ограничения интерфейса.

## 4) Итог готовности

Считаем интеграцию успешной, если:
- [ ] обязательные файлы есть;
- [ ] минимум 1 сценарий на каждом из 3 интерфейсов проходит;
- [ ] нет критических ошибок установки в `vc-kit-install-*.log`.

