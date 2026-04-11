<!-- Last updated: 2026-04-11 -->
# 🏎️ MASTER PLAN — Vibe-Coder ULTRACAR

> **Single source of truth** for the vibe-coder repository.
> Repository: https://github.com/ibragimov-oasis/vibe-coder

---

## 🎯 The ULTRACAR Vision

Представь 31 автомобильную компанию: Ferrari, Lamborghini, Rolls-Royce, Tesla, Toyota, BMW, Mercedes, Ford, Nissan GT-R, Mini — и ещё 21.

Каждая машина хороша по-своему:
- **Ferrari** → скорость, гоночный двигатель, агрессивный дизайн
- **Rolls-Royce** → роскошь, премиальные материалы, тишина
- **Tesla** → электрика, умное ПО, автопилот
- **Toyota** → неубиваемая надёжность, семейная утилитарность
- **Lamborghini** → сырая мощь, экстремальная аэродинамика
- **Mini** → компактность, эффективность, манёвренность
- **BMW** → точность вождения, спортивная инженерия

Теперь представь, что все 31 компания сели за один стол и сказали:
> **"Мы строим ОДНУ машину. ULTRACAR. Мы делимся ВСЕМ — каждым патентом, каждой технологией, каждым болтом, каждым винтом. Берём ВСЁ и объединяем в одну сверхчеловеческую машину."**

Они создали подразделения:
- **Двигатель** → все 31 технологии двигателей в одном
- **Дизайн** → все 31 дизайн-языка объединены
- **Колёса** → каждая технология колёс унифицирована
- **Салон** → кожа Rolls-Royce + экран Tesla + эргономика BMW
- **Безопасность** → каждая система безопасности от каждого бренда
- **ПО** → автопилот Tesla + помощник BMW + всё остальное

Они НЕ выбирают "лучший" двигатель. Они берут ВСЕ двигатели, изучают ВСЕ технологии, объединяют пересекающееся, ДОБАВЛЯЮТ уникальное из каждого. Каждый болт имеет значение. Каждое нововведение сохраняется.

**ЭТО — НАША МИССИЯ.**

31 репозиторий = 31 автомобильная компания.
У каждого репо свои "технологии" — скиллы, агенты, промты, команды, хуки, системы памяти, UI-правила, логика оркестрации.

Результат = **ULTRACAR AI-инструментария** — самый мощный вайб-кодинг тулкит, когда-либо созданный.

---

## ⚡ Финальная Vibe-Coder Система (Цель фазы 6)

Вот как должна работать финальная система:

```
Запрос пользователя
        ↓
Оркестратор (RuFlo / DeerFlow / GSD / OMC)
        ↓
Маршрутизация → правильная роль агента
        ↓
Агент загружает: свои скиллы + промты + хуки
        ↓
Выполнение задачи
        ↓
Shannon автоматически проверяет security (если нужно)
        ↓
Lightpanda browser быстро проверяет UI (если нужно)
        ↓
Memory сохраняет контекст (Claude-Mem / Supermemory)
        ↓
Отчёт пользователю
```

**Пример:** Пользователь говорит Claude Max "сделай дизайн сайта":
1. Claude Max заходит в `workspace-config/claude/` → находит свои инструкции
2. Находит роль дизайнера в `agents/by-role/designer/`
3. Загружает скиллы дизайна из `skills/skills-design/`
4. Обращается к UI-компонентам в `ui-design/ui-components-galaxy/`
5. Применяет UI-правила из `ui-design/ui-rules/`
6. Lightpanda (9x быстрее Chrome) проверяет результат через браузер
7. Shannon делает security-проверку
8. Memory сохраняет весь контекст
9. Пользователь получает результат

**Пример 2:** Кто-то просит проверить сайт на уязвимости:
1. Оркестратор вызывает Shannon (security агента)
2. Shannon сканирует, находит все уязвимости
3. Один из агентов получает ошибки и просит дебаггера исправить
4. Дебаггер исправляет
5. Shannon снова проверяет
6. Если уязвимостей нет → отчёт пользователю

**Пример 3:** Плохой промт обнаружен:
1. Система видит, что промт слабый
2. Обращается к `prompts/prompts-templates/` — находит лучший промт
3. Применяет его автоматически
4. Продолжает выполнение с улучшенным промтом

---

## 🔩 Железные Правила (ЧИТАЙ ПЕРЕД КАЖДЫМ ДЕЙСТВИЕМ)

### Что нужно делать ✅

| Правило | Описание |
|---------|----------|
| ✅ Читай README сначала | Перед любым репо — СНАЧАЛА читай его README.md |
| ✅ Сохраняй оригинальные форматы | `.py → .py`, `.yaml → .yaml`, `.json → .json` — НИКОГДА не конвертируй в markdown |
| ✅ Создавай подпапки | По ролям, категориям, интерфейсам — никогда не дампи всё в одну папку |
| ✅ Оставляй оригиналы нетронутыми | Только КОПИИ в COMBINED/ — оригиналы священны |
| ✅ Веди INDEX.md | Откуда скопировал → куда → что сделал — логируй каждое действие |
| ✅ Каждый болт важен | Даже если файлы похожи — включай оба. В ULTRACAR каждый болт имеет значение |
| ✅ При сомнении — включай | Лучше включить лишнее, чем пропустить важное |

### Что запрещено ❌

| Запрет | Причина |
|--------|---------|
| ❌ Монолитные файлы | Не создавай файлы "всё в одном .md" — никто не сможет в них ориентироваться |
| ❌ Конвертация форматов | Не переводи Python/YAML/JSON в markdown |
| ❌ Смешивание ролей | Дебаггер ≠ тестер ≠ дизайнер — роли должны быть чистыми |
| ❌ Удаление оригиналов | Никогда не удаляй ничего из исходных папок |
| ❌ Пропуск README | README файлы содержат всю важную информацию — не пропускай их |
| ❌ Суммирование | Если файл 800 строк — все 800 строк должны попасть в комбинированный файл |

### Форматы файлов

```
.py   → остаётся .py     (Python скрипты)
.yaml → остаётся .yaml   (конфиги)
.yml  → остаётся .yml    (GitHub Actions)
.json → остаётся .json   (плагины, маркетплейс)
.md   → остаётся .md     (документация, агенты, скиллы)
.sh   → остаётся .sh     (bash скрипты)
.ts   → остаётся .ts     (TypeScript)
.js   → остаётся .js     (JavaScript)
.toml → остаётся .toml   (конфиги)
.csv  → остаётся .csv    (данные)
.txt  → остаётся .txt    (текст)
```

**НИКОГДА не конвертируй один формат в другой.**

---

## ✅ Что Сделано (Фазы 0–3)

### Фаза 0 — Настройка
- Репозиторий создан, 31 исходный репо скачан
- Структура `COMBINED/` спроектирована и утверждена
- Железные правила установлены

### Фаза 1 — Миграция файлов ✅
- Все 31 репо просканированы, README прочитаны
- Все файлы скопированы в `COMBINED/` с правильной структурой
- `INDEX.md` и `MIGRATION_MAP.json` ведутся
- Остаточные файлы (leftovers) категоризированы и обработаны

### Фаза 2 — Организация и стандарты ✅
- Применено именование PREFIX-SOURCE (`skills-*`, `agents-*`, `hooks-*`)
- Дубликаты обнаружены по всем репо
- Категоризация по ролям, интерфейсам и доменам

### Фаза 3 — Реструктуризация ✅
- Финальная PREFIX-SOURCE структура валидирована
- Все агенты организованы в `by-role/` и `by-interface/`
- Скиллы организованы по источнику/домену
- Оркестрация разделена по `core-*` папкам
- `workspace-config/` добавлен для IDE-конфигов Claude/Cursor/Antigravity
- `REPO_DOCS/` добавлен с документацией всех 32 исходных репо
- Отчёт валидации: `COMBINED/RESTRUCTURE_VALIDATION_REPORT.md`

---

## 📁 Текущая Структура COMBINED/

```
COMBINED/
│
├── agents/                          # 336+ AI агентов
│   ├── by-role/                     # По функции
│   │   ├── analyst/
│   │   ├── architect/
│   │   ├── business/
│   │   ├── coder/
│   │   ├── debugger/
│   │   ├── devops/
│   │   ├── executor/
│   │   ├── manager/
│   │   ├── plan-checker/
│   │   ├── planner/
│   │   ├── researcher/
│   │   ├── reviewer/
│   │   ├── scientist/
│   │   ├── security/
│   │   ├── synthesizer/
│   │   ├── tester/
│   │   ├── ui-specialist/
│   │   ├── verifier/
│   │   └── writer/
│   ├── by-interface/                # По платформе
│   │   ├── agents-antigravity/
│   │   ├── agents-claude/
│   │   ├── agents-codex/
│   │   ├── agents-copilot/
│   │   ├── agents-cursor/
│   │   └── agents-opencode/
│   ├── agents-claude-skills/
│   ├── agents-deer-flow/
│   ├── agents-ruflo/
│   ├── agents-superpowers/
│   ├── background-agents/
│   └── mega/                        # 🔄 Фаза 4: unified mega-agents
│
├── skills/                          # 1,500+ пакетов скиллов
│   ├── skills-antigravity/
│   ├── skills-awesome-claude/
│   ├── skills-background/
│   ├── skills-business/
│   ├── skills-claude/
│   ├── skills-copilot/
│   ├── skills-data-analysis/
│   ├── skills-deer-flow/
│   ├── skills-design/
│   ├── skills-devops/
│   ├── skills-everything-cc/
│   ├── skills-hermes/
│   ├── skills-omc/
│   ├── skills-platform/
│   ├── skills-research/
│   ├── skills-ruflo/
│   ├── skills-seo/
│   ├── skills-superpowers/
│   └── skills-writing/
│
├── commands/                        # 67+ slash-команд
│   ├── commands-gsd/
│   ├── commands-omc/
│   ├── commands-ruflo/
│   ├── commands-shannon/
│   └── commands-superpowers/
│
├── hooks/                           # Хуки автоматизации
│   ├── hooks-1code/
│   ├── hooks-background-agents/
│   ├── hooks-gsd/
│   ├── hooks-omc/
│   ├── hooks-ruflo/
│   └── hooks-superpowers/
│
├── prompts/                         # 2,500+ промтов
│   ├── prompts-leaked/
│   ├── prompts-security/
│   ├── prompts-system/
│   └── prompts-templates/
│
├── orchestration/                   # 7 систем оркестрации
│   ├── core-1code/
│   ├── core-background-agents/
│   ├── core-deer-flow/
│   ├── core-gsd/
│   ├── core-hermes/
│   ├── core-omc/
│   ├── core-ruflo/
│   ├── core-vibe-kanban/
│   ├── superpowers/
│   └── workflows-terraform/
│
├── memory/                          # Системы памяти
│   ├── memory-claude-mem/           ← сжатая персистентная память
│   └── memory-supermemory/          ← #1 по бенчмаркам памяти
│
├── mcp-servers/                     # MCP интеграции
│   ├── mcp-configs/
│   ├── mcp-gitnexus/
│   ├── mcp-hermes/
│   ├── mcp-lightpanda/              ← браузер (9x быстрее Chrome)
│   ├── mcp-nano-banana/
│   ├── mcp-openviking/
│   └── mcp-pretext/
│
├── ui-design/                       # 3,000+ UI компонентов
│   ├── ui-components-galaxy/        ← 3000+ элементов Uiverse.io
│   ├── ui-components-shadcn/        ← кастомизируемые React компоненты
│   ├── ui-cursor-rules/             ← все .cursorrules файлы
│   └── ui-rules/                    ← 161 UI правило + 67 стилей
│
├── security/                        # Инструменты безопасности
│   ├── security-shannon/            ← AI пентестер (35k stars)
│   └── security-reports/            ← образцы отчётов
│
├── reference/                       # Справочная документация
│   └── reference-selfhosted/
│
├── workspace-config/                # IDE-конфиги
│   ├── claude/                      ← Claude Code (команды + скиллы)
│   │   ├── commands/                ← /команды для Claude Code
│   │   └── skills/                  ← скиллы для Claude Code
│   ├── cursor/                      ← Cursor AI (правила)
│   │   └── rules/
│   └── antigravity/                 ← Antigravity (хуки, плагины, скиллы)
│       ├── hooks/
│       ├── plugins/
│       └── skills/
│
├── REPO_DOCS/                       # Документация всех 32 исходных репо
│   ├── 01-background-agents/
│   ├── 02-hermes-agent/
│   ├── 03-shannon/
│   ├── 04-1code/
│   ├── 05-deer-flow/
│   ├── 06-get-shit-done/
│   ├── 07-oh-my-claudecode/
│   ├── 08-ruflo/
│   ├── 09-superpowers/
│   ├── 10-vibe-kanban/
│   ├── 11-antigravity/
│   ├── 12-awesome-claude-code/
│   ├── 13-awesome-copilot/
│   ├── 14-claude-seo/
│   ├── 15-claude-skills/
│   ├── 16-everything-claude-code/
│   ├── 17-obsidian-skills/
│   ├── 18-awesome-chatgpt-prompts/
│   ├── 19-system-prompts-by-tool/
│   ├── 20-system-prompts-leaks/
│   ├── 21-vibe-coding-template/
│   ├── 22-awesome-selfhosted/
│   ├── 23-gitnexus/
│   ├── 24-openviking/
│   ├── 25-lightpanda/
│   ├── 26-claude-mem/
│   ├── 27-nano-banana-mcp/
│   ├── 28-pretext/
│   ├── 29-supermemory/
│   ├── 30-galaxy/
│   ├── 31-shadcn/
│   └── 32-ui-ux-pro-max/
│
└── INDEX.md                         # Полный лог всех файлов и перемещений
```

---

## 🔄 Следующие Шаги

### Фаза 4 — Мега-Агенты

**Цель:** Создать единые "мега-агенты" объединяя дубликаты одной роли из разных репо.

**Принцип работы:**
1. Зайди в `agents/by-role/debugger/` — там несколько дебаггеров из разных репо
2. Прочитай каждый файл, найди уникальное в каждом
3. Найди что повторяется (убери дубли)
4. Создай **один мега-файл** роли: `agents/mega/mega-debugger.md`

**Формат мега-агента:**
```markdown
# MEGA DEBUGGER AGENT
# Объединение из [N] репозиториев
# Источники: gsd-debugger, superpowers-debugger, ruflo-debugger

## Роль и идентичность
[Лучшее описание из всех источников, объединённое]
"Ты senior expert debugger и гений анализа ошибок..."

## Основные инструкции
[Уникальные инструкции из каждого источника]

## Процесс работы
[Лучший процесс из всех источников]

## Правила и ограничения
[Все правила из всех источников]

## Источники
- gsd-debugger.md (get-shit-done)
- superpowers-debugger.md (superpowers)
- ruflo-debugger.md (ruflo)
```

**Важно:** Если у роли есть интерфейс-специфичные версии (Claude vs Cursor vs Copilot) — оставляй их отдельно!

Повторить для: `tester`, `planner`, `seo`, `designer`, `researcher`, `reviewer`, `executor`, `security`, `roadmapper`, `advisor` + все скиллы, хуки, команды.

**Ссылки:** `COMBINED/PHASE_4_PLAN.md`, `COMBINED/PHASE_4_MERGE_RECOMMENDATIONS.md`

---

### Фаза 5 — Полный Аудит

**Цель:** Убедиться что ничего не пропущено. Проверить каждый исходный репо против `COMBINED/`.

**Формат INDEX.md:**
| Исходный путь | Тип | Куда скопировано | Что сделано | Статус |
|---|---|---|---|---|
| Agents/shannon/CLAUDE.md | agent | COMBINED/agents/by-interface/agents-claude/ | скопировано | ✅ |
| Orchestration/ruflo/agents/ruflo-planner.md | agent | COMBINED/agents/by-role/planner/ | скопировано | ✅ |

**Результат:** `COMBINED/audit/PHASE_5_AUDIT_REPORT.md`

**Ссылки:** `COMBINED/PHASE_5_PLAN.md`, `COMBINED/PHASE_5_VALIDATION_AUDIT.md`

---

### Фаза 6 — Оркестрация (Финальная Сборка ULTRACAR)

**Цель:** Соединить всё вместе так чтобы работало идеально.

**Что нужно настроить:**
- Claude Code → `workspace-config/claude/`
- Cursor → `workspace-config/cursor/`
- GitHub Copilot → `workspace-config/antigravity/` + `agents/by-interface/agents-copilot/`
- Shannon авто-пентест после деплоя
- Lightpanda browser для быстрой проверки UI
- Claude-Mem + Supermemory для персистентного контекста
- Промт-прокси: если промт слабый → система находит лучший из `prompts/prompts-templates/`

**Quick Start после настройки:**
```
# Claude Code — 3 минуты
1. Скопируй COMBINED/workspace-config/claude/ → .claude/ в твоём проекте
2. Скопируй нужные скиллы из COMBINED/skills/ → .claude/skills/
3. Используй /команды из COMBINED/workspace-config/claude/commands/
4. Запусти: claude "построй [твою идею]"
   → Claude теперь имеет интеллект 31 репо

# Cursor — 3 минуты
1. Скопируй COMBINED/workspace-config/cursor/rules/ → .cursor/rules/ в твоём проекте
2. Добавь нужных агентов из COMBINED/agents/by-interface/agents-cursor/

# GitHub Copilot — 3 минуты
1. Используй COMBINED/agents/by-interface/agents-copilot/
2. Добавь инструкции из COMBINED/workspace-config/antigravity/
```

**Ссылки:** `COMBINED/PHASE_6_PLAN.md`, `COMBINED/PHASE_6_ORCHESTRATION_INTEGRATION.md`

---

## 📊 Метрики Проекта

| Метрика | Значение |
|---------|---------|
| Исходных репозиториев | 31 |
| Всего файлов | ~44,800+ |
| Агентов | 336+ |
| Скиллов | 1,500+ |
| Промтов | 2,500+ |
| UI Компонентов | 3,000+ |
| Систем оркестрации | 7 |
| MCP Серверов | 7 |
| Систем памяти | 3 |

---

## 📦 Исходные Репозитории (31)

| # | Репо | Категория | Звёзды | Статус |
|---|------|----------|--------|--------|
| 1 | background-agents | Оркестрация | — | ✅ Мигрировано |
| 2 | hermes-agent | Оркестрация / MCP | 21k⭐ | ✅ Мигрировано |
| 3 | shannon | Безопасность | 35k⭐ | ✅ Мигрировано |
| 4 | 1code | Оркестрация | — | ✅ Мигрировано |
| 5 | deer-flow | Оркестрация | 55k⭐ | ✅ Мигрировано |
| 6 | get-shit-done (GSD) | Оркестрация | 46k⭐ | ✅ Мигрировано |
| 7 | oh-my-claudecode (OMC) | Оркестрация | — | ✅ Мигрировано |
| 8 | ruflo | Оркестрация | 29k⭐ | ✅ Мигрировано |
| 9 | superpowers | Скиллы / Агенты | 129k⭐ | ✅ Мигрировано |
| 10 | vibe-kanban | Оркестрация | — | ✅ Мигрировано |
| 11 | antigravity | Агенты / Скиллы | — | ✅ Мигрировано |
| 12 | awesome-claude-code | Агенты / Скиллы | — | ✅ Мигрировано |
| 13 | awesome-copilot | Агенты / Промты | — | ✅ Мигрировано |
| 14 | claude-seo | Скиллы (SEO) | — | ✅ Мигрировано |
| 15 | claude-skills | Скиллы | — | ✅ Мигрировано |
| 16 | everything-claude-code | Скиллы / Команды | — | ✅ Мигрировано |
| 17 | obsidian-skills | Скиллы | — | ✅ Мигрировано |
| 18 | awesome-chatgpt-prompts | Промты | 143k⭐ | ✅ Мигрировано |
| 19 | system-prompts-by-tool | Промты | — | ✅ Мигрировано |
| 20 | system-prompts-leaks | Промты | — | ✅ Мигрировано |
| 21 | vibe-coding-template | Промты / Шаблоны | — | ✅ Мигрировано |
| 22 | awesome-selfhosted | Референс | — | ✅ Мигрировано |
| 23 | gitnexus | MCP Сервер | — | ✅ Мигрировано |
| 24 | openviking | MCP / Память | — | ✅ Мигрировано |
| 25 | lightpanda | Браузер / MCP | — | ✅ Мигрировано |
| 26 | claude-mem | Память | — | ✅ Мигрировано |
| 27 | nano-banana-mcp | MCP Сервер | — | ✅ Мигрировано |
| 28 | pretext | MCP Сервер | — | ✅ Мигрировано |
| 29 | supermemory | Память | — | ✅ Мигрировано |
| 30 | galaxy (uiverse) | UI Компоненты | — | ✅ Мигрировано |
| 31 | shadcn/ui | UI Компоненты | — | ✅ Мигрировано |
| 32 | ui-ux-pro-max | UI Правила | — | ✅ Мигрировано |

---

## 🗝️ Ключевые Документы

| Документ | Назначение |
|----------|-----------|
| `COMBINED/README.md` | Главный обзор тулкита и быстрый старт |
| `COMBINED/INDEX.md` | Полный лог перемещения файлов |
| `COMBINED/agents/INDEX.md` | Каталог агентов |
| `COMBINED/skills/INDEX.md` | Каталог скиллов |
| `ORCHESTRATION.md` | Гид по всем 7 системам оркестрации |
| `MEMORY_SETUP.md` | Настройка систем памяти |
| `QUICKSTART.md` | Как быстро начать работу |
| `AUDIT.md` | Результаты аудита |
| `COMBINED/PHASE_4_PLAN.md` | Детальный план фазы 4 (Мега-Агенты) |
| `COMBINED/PHASE_5_PLAN.md` | Детальный план фазы 5 (Аудит) |
| `COMBINED/PHASE_6_PLAN.md` | Детальный план фазы 6 (Оркестрация) |

---

*Последнее обновление: 2026-04-11*
