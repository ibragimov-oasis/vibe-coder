# Vibe Coder Kit (`vc-kit`)


> ⚠️ Важно: полный прежний (исторический) README сохранён без сокращений в `README_LEGACY.md`.

Набор готовых AI-конфигов и контента для встраивания в **ваш** проект без конфликтов.

> Коротко: не нужно копировать весь репозиторий в рабочий проект. Обычно достаточно скопировать только `vc-kit/` и запустить установщик.

---

## Что это и кому подходит

`vibe-coder` — это репозиторий-источник.
`vc-kit/` — это поставляемый пакет, который вы переносите в свой проект.

Подходит, если вы используете:
- Claude (`.claude/`)
- Cursor (`.cursor/`, `.cursorrules`)
- GitHub Copilot (`.github/copilot-instructions.md`)
- Antigravity (`.antigravity/`)
- Codex (`.codex/`)
- Gemini (`.gemini/`)

---

## Официальные варианты использования

### 1) Рекомендуемый (default): `vc-kit + install.sh`

Безопасная установка с защитой от конфликтов (`merge / skip / backup`).

### 2) Ручной selective-copy

Копируете только нужные папки из:
- `vc-kit/configs/`
- `vc-kit/rules/`

### 3) Advanced/optional: `npx` путь

Пока это не основной канал. Базовый и стабильный путь сейчас: локальный `vc-kit + install.sh`.

---

## Быстрый старт (3 команды)

```bash
git clone https://github.com/ibragimov-oasis/vibe-coder.git
cp -R vibe-coder/vc-kit /path/to/your-project/
cd /path/to/your-project && bash vc-kit/install.sh
```

Полезные флаги:

```bash
bash vc-kit/install.sh --dry-run   # только показать изменения
bash vc-kit/install.sh --yes       # без интерактива, default=merge
```

---

## Как `install.sh` защищает от конфликтов

Если целевой файл/папка уже есть (например, `.claude/`), скрипт спрашивает:

- `[m]erge` — копирует только отсутствующие файлы
- `[s]kip` — пропускает установку для этого пути
- `[b]ackup` — делает бэкап с timestamp и копирует комплект полностью

Скрипт также:
- пишет лог в корень проекта (`vc-kit-install-<timestamp>.log`)
- поддерживает rollback через сохраненные backup-пути

---

## Что куда копируется

| Источник в `vc-kit` | Цель в вашем проекте | Назначение |
|---|---|---|
| `configs/vc-claude` | `.claude` | Конфиги/команды/скиллы для Claude |
| `configs/vc-cursor` | `.cursor` | Правила и настройки Cursor |
| `configs/vc-github` | `.github` | Copilot instructions и GitHub-конфиги |
| `configs/vc-antigravity` | `.antigravity` | Skills/hooks/plugins для Antigravity |
| `configs/vc-codex` | `.codex` | Конфиги для Codex |
| `configs/vc-gemini` | `.gemini` | Конфиги для Gemini |
| `rules/vc-cursorrules` | `.cursorrules` | Глобальные Cursor rules |
| `rules/vc-obsidianignore` | `.obsidianignore` | Ignore-файл для Obsidian |
| `rules/vc-env-example` | `.env.example` | Шаблон env-переменных |

---

## Ручной способ (без скрипта)

Пример: только Claude + Cursor rules.

```bash
cp -R vibe-coder/vc-kit/configs/vc-claude /path/to/your-project/.claude
cp vibe-coder/vc-kit/rules/vc-cursorrules /path/to/your-project/.cursorrules
```

Рекомендуется сначала сделать backup ваших текущих конфигов вручную.

---

## Структура репозитория

Корень intentionally-clean:

```text
vibe-coder/
├── README.md
├── LICENSE
├── .gitignore
├── llms.txt
└── vc-kit/
```

Внутри `vc-kit/`:

```text
vc-kit/
├── install.sh
├── configs/     # vc-* версии бывших hidden .dot папок
├── rules/       # vc-* правила/файлы с потенциальными конфликтами
├── docs/        # VC_*.md документация
└── content/     # reference/content, не обязательно ставить в корень проекта
```

---

## FAQ

### Нужно ли копировать весь репозиторий в рабочий проект?
Нет. Обычно достаточно копировать только `vc-kit/`.

### Что лучше: копировать всё или ставить через `npx`?
На текущем этапе — лучше локальный `vc-kit + install.sh` (стабильно и прозрачно). `npx` можно добавить позже как отдельный installer.

### Что делать, если у меня уже есть `.claude`/`.cursor`/`.github`?
Запускайте `install.sh` и выбирайте `merge`, `skip` или `backup` для каждого конфликта.

### Как обновляться?
Обновите `vibe-coder`, затем снова скопируйте `vc-kit/` в проект и запустите `install.sh` (можно сначала `--dry-run`).

### Как удалить изменения?
Если использовали `backup`, восстановите из `*.backup.<timestamp>`. Также проверьте лог `vc-kit-install-*.log`.

---

## Дополнительные документы

- Quickstart: `vc-kit/docs/VC_QUICKSTART.md`
- Content index: `vc-kit/content/VC_CONTENT_INDEX.md`
- Прочие материалы: `vc-kit/docs/`
