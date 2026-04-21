# VC_AGENT_PROMPTS_RU

Готовые копипаст-промты для внедрения `vibe-coder` в чужой проект.

---

## MASTER PROMPT — «внедри vibe-coder в мой проект»

Ты внедряешь `vibe-coder` в мой репозиторий строго по контракту.

Контекст:
- Используй только `vc-kit/` как поставляемый пакет.
- Канонический счётчик источников: 54 (31 original + 23 new).
- Source of truth: `vc-kit/docs/VC_SOURCE_OF_TRUTH.md`.

Сделай по шагам:
1. Проверь наличие `vc-kit/` в корне проекта.
2. Запусти безопасный предпросмотр:
   - `bash vc-kit/install.sh --dry-run`
3. Выполни установку:
   - `bash vc-kit/install.sh`
4. При конфликтах используй policy:
   - default = `merge`
   - `skip` только если путь не нужен
   - `backup` если есть риск потери локальных настроек
5. Проверь обязательные интерфейсные файлы:
   - `.claude/CLAUDE.md`
   - `.github/copilot-instructions.md`
   - `.antigravity/AGENTS.md`
6. Проверь дополнительные цели:
   - `.cursor/`, `.codex/`, `.gemini/`, `.cursorrules`, `.env.example`
7. Подтверди, что bootstrap/pipeline документы доступны:
   - `vc-kit/docs/VC_CORE.md`
   - `vc-kit/docs/VC_PIPELINE_TRIGGER.md`
   - `vc-kit/docs/VC_INTERFACE_MATRIX.md`
8. Дай финальный отчёт:
   - что установлено
   - что было в merge/skip/backup
   - какие ручные шаги остались
   - статус «готово / не готово» с причинами.

Критерий «ГОТОВО»:
- обязательные файлы присутствуют;
- установка завершилась без критических ошибок;
- ты показал команды проверки и результат;
- дал короткий smoke-check для Copilot, Claude, Antigravity.

---

## QUICK START PROMPT — короткий

Внедри `vibe-coder` в этот проект через `vc-kit`.
Действуй так:
1) `bash vc-kit/install.sh --dry-run`
2) `bash vc-kit/install.sh`
3) проверь `.claude/CLAUDE.md`, `.github/copilot-instructions.md`, `.antigravity/AGENTS.md`
4) выдай краткий отчёт готовности.

---

## VERIFICATION PROMPT — проверка корректности внедрения

Проверь, что интеграция `vibe-coder` активирована корректно.

Обязательно:
1) проверь наличие:
   - `.claude/CLAUDE.md`
   - `.github/copilot-instructions.md`
   - `.antigravity/AGENTS.md`
2) проверь, что есть:
   - `.cursor/`, `.codex/`, `.gemini/`, `.cursorrules`, `.env.example`
3) проверь, что доступны docs:
   - `vc-kit/docs/VC_CORE.md`
   - `vc-kit/docs/VC_PIPELINE_TRIGGER.md`
   - `vc-kit/docs/VC_INTERFACE_MATRIX.md`
4) дай отчёт по чеклисту PASS/FAIL и точные команды, что запускались.

---

## DIAGNOSTIC PROMPT — если «не работает»

Диагностируй, почему после установки `vibe-coder` поведение агента не изменилось.

Проверь по порядку:
1) `vc-kit` действительно в корне целевого проекта.
2) установка запускалась (`vc-kit-install-*.log` существует).
3) нужные файлы реально в корне (`.claude/.github/.antigravity`).
4) IDE/агент-сессия перезапущены после установки.
5) интерфейс соответствует своим ограничениям из `VC_INTERFACE_MATRIX.md`.
6) нет ли конфликтов, которые ушли в `skip`.
7) если есть backup — не восстановлены ли старые конфиги поверх новых.

В конце:
- выдай root cause;
- дай минимальный план исправления (пошагово);
- перечисли, что проверить повторно после фикса.

