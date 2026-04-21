# VC_CONTENT_INDEX

Индекс контента `vc-kit/content`.

## Назначение

Разделяет:
1. **Installable layer** — то, что устанавливается в проект пользователя (`configs/`, `rules/`, `install.sh`)
2. **Reference/content layer** — материалы для чтения, повторного использования, адаптации

## Что устанавливается автоматически

Устанавливается через:
`vc-kit/install.sh`

Источник:
- `vc-kit/configs/*`
- `vc-kit/rules/vc-cursorrules`
- `vc-kit/rules/vc-obsidianignore`
- `vc-kit/rules/vc-env-example`

## Что НЕ устанавливается автоматически (reference-only)

Текущие каталоги в `content/`:
- `vc-kit/content/COMBINED`
- `vc-kit/content/Reference`
- `vc-kit/content/Tools`

Эти данные используются как библиотека/источник знаний и обычно не копируются целиком в корень проекта пользователя.

## Рекомендованная практика

- Для внедрения в проект используйте только `vc-kit + install.sh`.
- Для ручной настройки берите точечно нужные файлы из `configs/` и `rules/`.
- `content/` используйте как reference слой.
