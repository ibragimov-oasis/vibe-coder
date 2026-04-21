# VC_QUICKSTART

Быстрый запуск `vc-kit` в вашем проекте.

## 1) Скопировать kit

```bash
git clone https://github.com/ibragimov-oasis/vibe-coder.git
cp -R vibe-coder/vc-kit /path/to/your-project/
```

## 2) Запустить безопасную установку

```bash
cd /path/to/your-project
bash vc-kit/install.sh
```

### Режимы

```bash
bash vc-kit/install.sh --dry-run
bash vc-kit/install.sh --yes
```

- `--dry-run` — только показывает, что будет сделано.
- `--yes` — non-interactive режим, при конфликте default=`merge`.

## 3) Проверить результат

После установки проверьте нужные цели в вашем проекте:
- `.claude/`
- `.cursor/`
- `.github/`
- `.antigravity/`
- `.codex/`
- `.gemini/`
- `.cursorrules`

---

## Контракт безопасности конфликтов

Если цель уже существует, установщик спросит:
- `[m]erge` — копировать только отсутствующие файлы
- `[s]kip` — пропустить
- `[b]ackup` — сделать backup и поставить комплект полностью

Лог установки сохраняется как `vc-kit-install-<timestamp>.log` в корне проекта.

---

## Ручная установка (без скрипта)

Копируйте только нужные части из:
- `vc-kit/configs/`
- `vc-kit/rules/`

Пример:

```bash
cp -R vibe-coder/vc-kit/configs/vc-github /path/to/your-project/.github
cp vibe-coder/vc-kit/rules/vc-cursorrules /path/to/your-project/.cursorrules
```

---

## Важно

`vc-kit/content/` — это reference/content слой. Его не обязательно ставить в корень проекта.

См. индекс контента:
`vc-kit/content/VC_CONTENT_INDEX.md`
