# Vibe Coder Kit (vc-kit)

Этот репозиторий теперь упакован как **kit для встраивания в ваш проект**.
Главная идея: вы копируете `vc-kit/` в свой репозиторий и безопасно устанавливаете нужные конфиги через `install.sh` без поломки уже существующих файлов.

## Быстрый старт (3 команды)

```bash
# 1) Скопируйте vc-kit/ в корень своего проекта
cp -R /path/to/vibe-coder/vc-kit ./vc-kit

# 2) Запустите безопасную установку
bash vc-kit/install.sh

# 3) Или сначала посмотрите план изменений
bash vc-kit/install.sh --dry-run
```

## Что делает install.sh

Скрипт устанавливает конфиги в ваш проект с защитой от конфликтов.
Если целевой путь уже существует, для каждого конфликта доступно:

- `merge` — добавить только недостающие файлы (существующие не перезаписываются)
- `skip` — пропустить этот путь
- `backup` — создать backup с timestamp и установить версию из `vc-kit`

Дополнительные режимы:

- `--dry-run` — показать действия без изменений
- `--yes` — неинтерактивный режим (по умолчанию выбирается `merge`)

## Ручной способ (без скрипта)

Если не хотите использовать скрипт:

1. Откройте `vc-kit/configs/` и `vc-kit/rules/`
2. Скопируйте только нужные элементы вручную
3. Переименуйте их в dot-формат:
   - `vc-claude` → `.claude`
   - `vc-cursor` → `.cursor`
   - `vc-github` → `.github`
   - `vc-antigravity` → `.antigravity`
   - `vc-cursorrules` → `.cursorrules`

## Что куда ставится

| Источник в `vc-kit` | Цель в проекте | Зачем |
|---|---|---|
| `configs/vc-claude` | `.claude` | Конфиги/агенты Claude Code |
| `configs/vc-cursor` | `.cursor` | Правила Cursor |
| `configs/vc-github` | `.github` | GitHub workflows/prompts/agents |
| `configs/vc-antigravity` | `.antigravity` | Конфиги Antigravity |
| `configs/vc-codex` | `.codex` | Конфиги OpenAI Codex |
| `configs/vc-gemini` | `.gemini` | Конфиги Gemini CLI |
| `rules/vc-cursorrules` | `.cursorrules` | Cursor rules |
| `rules/vc-obsidianignore` | `.obsidianignore` | Исключения Obsidian |
| `rules/vc-env-example` | `.env.example` | Шаблон переменных окружения |

## Структура репозитория

В корне оставлено только основное:

- `README.md`
- `LICENSE`
- `.gitignore`
- `llms.txt`
- `vc-kit/`

Всё остальное перенесено в `vc-kit/`:

- `configs/` — переименованные dot-конфиги (`vc-*`)
- `content/` — основной контент репозитория
- `docs/` — документация (`VC_*.md`)
- `rules/` — конфликтные корневые файлы в безопасном виде
- `install.sh` — установщик

## FAQ

### Нужно ли копировать весь репозиторий?
Нет. Основной сценарий: копируете только `vc-kit/`.

### Что лучше: копировать руками или запускать скрипт?
Лучше `install.sh`: он не перезаписывает ваш проект вслепую и умеет backup/merge.

### Есть ли npx-установщик?
Пока нет. Это план для v2 после стабилизации структуры.

### Как обновляться?
Обновляете папку `vc-kit/` из upstream и повторно запускаете `install.sh`.

### Как откатить изменения?
Если выбирали `backup`, восстановите пути из созданных `*.backup.<timestamp>`.
