# ПЛАН ПОЭТАПНОЙ МИГРАЦИИ VIBE-CODER ARSENAL
# ULTRACAR Migration - Phased Implementation Plan

**Дата создания:** 2 апреля 2026
**Источники:** MASTER_PLAN.md + COMBINED/READ.ME.md
**Цель:** Организовать 31 репозиторий (39,122 файла) в структурированную систему COMBINED/

---

## 📋 ОГЛАВЛЕНИЕ

- [ЭТАП 1: АУДИТ И АНАЛИЗ](#этап-1-аудит-и-анализ-репозитория)
- [ЭТАП 2: ПЕРЕМЕЩЕНИЕ ФАЙЛОВ](#этап-2-перемещение-файлов)
- [ЭТАП 3: ПРОВЕРКА ОСТАТКОВ](#этап-3-проверка-оставшихся-файлов)
- [Целевая Структура](#целевая-структура-combined)

---

## ПРИНЦИПЫ РАБОТЫ (ЧИТАТЬ ПЕРЕД НАЧАЛОМ)

### ✅ ЧТО ДЕЛАТЬ:
- **ПЕРЕМЕЩАТЬ**, НЕ копировать файлы (для отслеживания leftovers)
- Читать README.md КАЖДОГО репозитория перед началом работы
- Сохранять ОРИГИНАЛЬНЫЙ формат файлов (.py остаётся .py, .yaml → .yaml)
- Создавать подпапки по ролям, категориям, интерфейсам
- Вести полную индексацию в INDEX_MOVEMENTS.json
- Работать РЕПО ЗА РЕПО (не по папкам!)

### ❌ ЧТО НЕ ДЕЛАТЬ:
- НЕ создавать монолитные файлы ("всё в один .md")
- НЕ конвертировать Python/YAML/JSON в markdown
- НЕ смешивать роли (дебаггер ≠ тестер ≠ дизайнер)
- НЕ удалять ничего из оригиналов (пока только перемещение)
- НЕ пропускать README файлы

---

## ЭТАП 1: АУДИТ И АНАЛИЗ РЕПОЗИТОРИЯ

**Цель:** Полное понимание текущего состояния, создание карты файлов

### Фаза 1.1: Инвентаризация корневой структуры
**Время:** ~30 минут

**Задачи:**
1. Проверить наличие всех 31 репозитория
2. Проверить текущее состояние COMBINED/ (что уже есть из Phase 1)
3. Создать список всех top-level директорий
4. Подсчитать количество файлов в каждой категории

**Команды:**
```bash
# Подсчёт файлов по категориям
find Agents/ -type f | wc -l
find Orchestration/ -type f | wc -l
find Skills/ -type f | wc -l
find Prompts/ -type f | wc -l
find Tools/ -type f | wc -l
find UI-UX/ -type f | wc -l
find Reference/ -type f | wc -l

# Проверка COMBINED/
ls -la COMBINED/
```

**Результат:** Файл `COMBINED/PHASE_2_INVENTORY.md` со статистикой

---

### Фаза 1.2: Анализ категории "Agents"
**Время:** ~1 час

**Задачи:**
1. Просканировать `Agents/shannon/`
   - Прочитать README.md, CLAUDE.md
   - Составить список всех файлов агентов, команд, конфигов
   - Определить роли агентов

2. Просканировать `Agents/background-agents/`
   - Прочитать AGENTS.md, CLAUDE.md
   - Составить список файлов
   - Определить структуру пакетов

3. Просканировать `Agents/hermes-agent/`
   - Прочитать docs/README.md
   - Составить список файлов
   - Определить skills и их категории

**Команды:**
```bash
# Поиск всех агентов
find Agents/ -name "*.agent.md" -o -name "AGENTS.md" -o -name "*agent*.yaml"

# Поиск README файлов
find Agents/ -name "README.md" -o -name "CLAUDE.md"

# Структура папок
tree -L 3 Agents/
```

**Результат:** Файл `COMBINED/agents_analysis.json` с полной структурой

---

### Фаза 1.3: Анализ категории "Orchestration"
**Время:** ~1 час

**Задачи:**
1. Просканировать `Orchestration/superpowers/`
   - Прочитать AGENTS.md, CHANGELOG.md
   - 14 skills, 3 commands, 4 hooks
   - Определить структуру агентов по ролям

2. Просканировать `Orchestration/get-shit-done/`
   - 18 агентов, 57 команд, 5 хуков
   - Определить роли каждого агента по имени файла

3. Просканировать `Orchestration/ruflo/`
   - Определить версии (v2, v3)
   - Skills структура
   - Plugin система

4. Просканировать остальные: deer-flow, oh-my-claudecode, 1code, vibe-kanban

**Команды:**
```bash
# Статистика по orchestration
find Orchestration/ -name "*.md" | grep -i agent | wc -l
find Orchestration/ -name "*.md" | grep -i command | wc -l
find Orchestration/ -name "*.md" | grep -i skill | wc -l

tree -L 3 Orchestration/
```

**Результат:** Файл `COMBINED/orchestration_analysis.json`

---

### Фаза 1.4: Анализ категории "Skills"
**Время:** ~2 часа (самая большая категория)

**Задачи:**
1. `Skills/antigravity-awesome-skills/` - 1,340+ skills
   - Определить категории по папкам
   - Создать карту: skill_name → category

2. `Skills/claude-skills/` - 205 skills + 16 agents
   - Определить категории
   - Отделить агентов от skills

3. `Skills/awesome-copilot-main/` - 230+ agents
   - Copilot-specific структура
   - Cookbook/SDK примеры

4. Остальные: superpowers, deer-flow, hermes, everything-claude-code, awesome-claude-code, claude-seo, obsidian

**Команды:**
```bash
# Подсчёт skills
find Skills/antigravity-awesome-skills/skills/ -type d -mindepth 1 -maxdepth 1 | wc -l
find Skills/claude-skills/ -name "SKILL.md" | wc -l
find Skills/awesome-copilot-main/_github/agents/ -name "*.agent.md" | wc -l

# Категории antigravity
ls -1 Skills/antigravity-awesome-skills/skills/
```

**Результат:** Файл `COMBINED/skills_analysis.json` с полной картой
**Статус выполнения:** ✅ Завершено — см. `COMBINED/PHASE_1.4_COMPLETE.md` и `COMBINED/skills_analysis.json` (структура по 7 репозиториям + приоритеты миграции)

---

### Фаза 1.5: Анализ категорий "Prompts", "Tools", "UI-UX", "Reference"
**Время:** ~1.5 часа

**Задачи:**
1. **Prompts/**
   - prompts.chat (огромная библиотека)
   - system-prompts (3 источника для объединения)
   - system_prompts_leaks
   - Определить структуру по инструментам (Claude, ChatGPT, Cursor, etc.)

2. **Tools/**
   - claude-mem, supermemory, OpenViking (memory systems)
   - GitNexus, browser/lightpanda, nano-banana (MCP servers)
   - Определить что куда идёт

3. **UI-UX/**
   - galaxy (3,000+ компонентов)
   - ui/ (shadcn)
   - ui-ux-pro-max-skill (161 rules + 67 styles)

4. **Reference/**
   - awesome-selfhosted (каталог инструментов)

**Команды:**
```bash
# Prompts анализ
find Prompts/ -type d -mindepth 1 -maxdepth 1
find Prompts/ -name "*.md" | wc -l

# Tools анализ
ls -la Tools/

# UI-UX анализ
find UI-UX/galaxy/ -name "*.html" | wc -l
find UI-UX/ui/ -name "*.tsx" -o -name "*.jsx" | wc -l
```

**Результат:** Файлы `COMBINED/prompts_analysis.json`, `COMBINED/tools_analysis.json`, `COMBINED/ui_analysis.json`
**Статус выполнения:** ✅ Завершено — см. `COMBINED/PHASE_1.5_COMPLETE.md` и соответствующие *_analysis.json (17 репозиториев, приоритеты миграции по Prompts/Tools/UI-UX/Reference)

---

### Фаза 1.6: Создание Мастер-Индекса
**Время:** ~30 минут

**Задачи:**
1. Объединить все *_analysis.json в один MASTER_INDEX.json
2. Создать карту миграции: source → destination
3. Определить приоритеты (High/Medium/Low)
4. Подсчитать общее количество операций перемещения

**Результат:**
- `COMBINED/MASTER_INDEX.json` - полная карта репозитория
- `COMBINED/MIGRATION_MAP.json` - план перемещения файлов

---

## ЭТАП 2: ПЕРЕМЕЩЕНИЕ ФАЙЛОВ

**Цель:** Систематическое перемещение файлов в структуру COMBINED/

### Фаза 2.1: Создание целевой структуры папок
**Время:** ~15 минут

**Задачи:**
1. Создать все папки верхнего уровня в COMBINED/
2. Создать подпапки второго уровня
3. Создать подпапки третьего уровня (по необходимости)

**Команды:**
```bash
# Создание структуры
mkdir -p COMBINED/agents/{by-role,by-interface,orchestrators}
mkdir -p COMBINED/agents/by-role/{architect,coder,debugger,planner,reviewer,security,tester,researcher,ui-specialist,writer,manager,scientist,devops,business}
mkdir -p COMBINED/agents/by-interface/{claude,copilot,cursor,codex,antigravity,opencode}
mkdir -p COMBINED/orchestration/{ruflo,oh-my-claudecode,get-shit-done,superpowers,deer-flow,1code,vibe-kanban,workflows}
mkdir -p COMBINED/skills/{development,seo,research,data-analysis,design,writing,devops,platform,business}
mkdir -p COMBINED/commands/{general,plan,review,debug}
mkdir -p COMBINED/hooks/{pre-commit,post-commit,notification}
mkdir -p COMBINED/prompts/{system-prompts,leaked,templates,security}
mkdir -p COMBINED/memory/{claude-mem,supermemory,openviking,configs}
mkdir -p COMBINED/mcp-servers/{gitnexus,lightpanda,hermes,nano-banana,pretext,configs}
mkdir -p COMBINED/security/{shannon,reports}
mkdir -p COMBINED/ui-design/{components,rules,cursor-rules}
mkdir -p COMBINED/reference
```

**Результат:** Полная структура папок готова для миграции

---

### Фаза 2.2: Миграция Agents (HIGH Priority)
**Время:** ~3-4 часа

#### Подфаза 2.2.1: Agents/shannon/ → COMBINED/
**Задачи:**
```bash
# 1. Команды
mv Agents/shannon/.claude/commands/debug.md COMBINED/commands/debug/shannon-debug.md
mv Agents/shannon/.claude/commands/pr.md COMBINED/commands/review/shannon-pr.md
mv Agents/shannon/.claude/commands/review.md COMBINED/commands/review/shannon-review.md

# 2. Конфиги Claude
mv Agents/shannon/CLAUDE.md COMBINED/agents/by-interface/claude/shannon-CLAUDE.md
mv Agents/shannon/COVERAGE.md COMBINED/security/shannon/COVERAGE.md

# 3. Security файлы
mv Agents/shannon/sample-reports/* COMBINED/security/reports/shannon-samples/
mv Agents/shannon/apps/ COMBINED/security/shannon/apps/
mv Agents/shannon/workspaces/ COMBINED/security/shannon/workspaces/
mv Agents/shannon/repos/ COMBINED/security/shannon/repos/

# 4. Security prompts
mv Agents/shannon/apps/worker/prompts/* COMBINED/prompts/security/shannon/
```

**Индексация:** Записать каждое перемещение в INDEX_MOVEMENTS.json

---

#### Подфаза 2.2.2: Agents/background-agents/ → COMBINED/
**Задачи:**
```bash
# 1. Документация агентов
mv Agents/background-agents/CLAUDE.md COMBINED/agents/by-interface/claude/background-agents-CLAUDE.md
mv Agents/background-agents/AGENTS.md COMBINED/agents/orchestrators/background-agents/AGENTS.md

# 2. Пакеты
mv Agents/background-agents/packages/ COMBINED/agents/orchestrators/background-agents/packages/

# 3. Скрипты (сохранить .py формат)
mv Agents/background-agents/scripts/ COMBINED/agents/orchestrators/background-agents/scripts/

# 4. Документация
mv Agents/background-agents/docs/ COMBINED/agents/orchestrators/background-agents/docs/

# 5. Terraform
mv Agents/background-agents/terraform/ COMBINED/orchestration/workflows/terraform/

# 6. Workflows
mv Agents/background-agents/VISIBLE_github/workflows/ COMBINED/orchestration/workflows/background-agents/

# 7. Skills
mv Agents/background-agents/VISIBLE_claude/skills/onboarding/ COMBINED/skills/development/onboarding/

# 8. Hooks
mv Agents/background-agents/VISIBLE_husky/ COMBINED/hooks/pre-commit/background-agents-husky/
```

---

#### Подфаза 2.2.3: Agents/hermes-agent/ → COMBINED/
**Задачи:**
```bash
# 1. Core agent
mv Agents/hermes-agent/agent/ COMBINED/agents/orchestrators/hermes/agent/

# 2. CLI
mv Agents/hermes-agent/hermes_cli/ COMBINED/agents/orchestrators/hermes/cli/

# 3. Gateway
mv Agents/hermes-agent/gateway/ COMBINED/agents/orchestrators/hermes/gateway/

# 4. Environments
mv Agents/hermes-agent/environments/ COMBINED/agents/orchestrators/hermes/environments/

# 5. ACP components
mv Agents/hermes-agent/acp_adapter/ COMBINED/agents/orchestrators/hermes/acp_adapter/
mv Agents/hermes-agent/acp_registry/ COMBINED/agents/orchestrators/hermes/acp_registry/

# 6. Cron
mv Agents/hermes-agent/cron/ COMBINED/agents/orchestrators/hermes/cron/

# 7. Integrations
mv Agents/hermes-agent/honcho_integration/ COMBINED/agents/orchestrators/hermes/integrations/

# 8. Plans
mv Agents/hermes-agent/_plans/ COMBINED/agents/orchestrators/hermes/plans/

# 9. Configs
mv Agents/hermes-agent/datagen-config-examples/ COMBINED/agents/orchestrators/hermes/configs/

# 10. Docs
mv Agents/hermes-agent/docs/ COMBINED/agents/orchestrators/hermes/docs/

# 11. Workflows
mv Agents/hermes-agent/_github/workflows/ COMBINED/orchestration/workflows/hermes/

# 12. MCP Server
mv Agents/hermes-agent/mcp_serve.py COMBINED/mcp-servers/hermes/mcp_serve.py

# 13. Skills
# Для каждого skill в builtin/ и optional-skills/:
# - Прочитать SKILL.md
# - Определить категорию
# - Переместить в COMBINED/skills/[category]/hermes-[skill_name]/
```

---

#### Подфаза 2.2.4: Обработка агентов из Orchestration
**Задачи:**

**Superpowers агенты:**
```bash
# Прочитать каждый агент, определить роль, переместить
# Orchestration/superpowers/agents/*.md → COMBINED/agents/by-role/[role]/superpowers-[name].md
```

**Get-Shit-Done агенты (18 файлов):**
```bash
# По ролям из имён файлов:
mv Orchestration/get-shit-done/agents/gsd-debugger.md COMBINED/agents/by-role/debugger/
mv Orchestration/get-shit-done/agents/gsd-executor.md COMBINED/agents/by-role/coder/
mv Orchestration/get-shit-done/agents/gsd-planner.md COMBINED/agents/by-role/planner/
mv Orchestration/get-shit-done/agents/gsd-*-researcher.md COMBINED/agents/by-role/researcher/
mv Orchestration/get-shit-done/agents/gsd-roadmapper.md COMBINED/agents/by-role/manager/
# ... и т.д. для всех 18 агентов
```

**RuFlo агенты:**
```bash
# Прочитать, определить роль, переместить по ролям
# Orchestration/ruflo/agents/*.yaml → COMBINED/agents/by-role/[role]/ruflo-[name].yaml
```

**Claude Skills агенты (16 файлов):**
```bash
# Skills/claude-skills/agents/ → определить роль каждого
# Переместить в COMBINED/agents/by-role/[role]/claude-skills-[name].md
```

**Awesome Copilot агенты (230+ файлов):**
```bash
# Особый случай - Copilot specific, сохранить структуру
mv Skills/awesome-copilot-main/_github/agents/ COMBINED/agents/by-interface/copilot/awesome-copilot/
mv Skills/awesome-copilot-main/cookbook/ COMBINED/agents/by-interface/copilot/cookbook/
mv Skills/awesome-copilot-main/instructions/ COMBINED/agents/by-interface/copilot/instructions/
```

**Antigravity агенты:**
```bash
mv Skills/antigravity-awesome-skills/_agents/ COMBINED/agents/by-interface/antigravity/
```

**Результат:** Все агенты распределены по ролям и интерфейсам

---

### Фаза 2.3: Миграция Orchestration (MEDIUM Priority)
**Время:** ~2 часа

**Задачи:**
```bash
# 1. RuFlo
mv Orchestration/ruflo/ COMBINED/orchestration/ruflo/
# Внутри ruflo: core/, plugin/, versions/, docs/

# 2. Oh-My-ClaudeCode
mv Orchestration/oh-my-claudecode/ COMBINED/orchestration/oh-my-claudecode/

# 3. Get-Shit-Done
mv Orchestration/get-shit-done/get-shit-done/ COMBINED/orchestration/get-shit-done/core/
mv Orchestration/get-shit-done/hooks/ COMBINED/hooks/notification/gsd/
mv Orchestration/get-shit-done/commands/gsd/ COMBINED/commands/general/gsd/

# 4. Superpowers
mv Orchestration/superpowers/skills/ COMBINED/skills/development/superpowers/
mv Orchestration/superpowers/commands/ COMBINED/commands/plan/superpowers/
mv Orchestration/superpowers/hooks/ COMBINED/hooks/notification/superpowers/
mv Orchestration/superpowers/.claude-plugin/ COMBINED/mcp-servers/configs/superpowers-plugin/
mv Orchestration/superpowers/.cursor-plugin/ COMBINED/agents/by-interface/cursor/superpowers-cursor/

# 5. Deer-Flow
# Skills уже обработаны в Фаза 2.4, остальное:
mv Orchestration/deer-flow/backend/ COMBINED/orchestration/deer-flow/backend/
mv Orchestration/deer-flow/frontend/ COMBINED/orchestration/deer-flow/frontend/

# 6. 1code
mv Orchestration/1code/ COMBINED/orchestration/1code/

# 7. Vibe-Kanban
mv Orchestration/vibe-kanban/ COMBINED/orchestration/vibe-kanban/
```

---

### Фаза 2.4: Миграция Skills (HIGH Priority - самая большая)
**Время:** ~6-8 часов

#### Подфаза 2.4.1: Antigravity Skills (1,340+)
**Подход:** Категория за категорией

```bash
# Для каждой категории в Skills/antigravity-awesome-skills/skills/:
# 1. ai/ → COMBINED/skills/development/antigravity/ai/
# 2. backend/ → COMBINED/skills/development/antigravity/backend/
# 3. frontend/ → COMBINED/skills/development/antigravity/frontend/
# ... и т.д. для всех категорий

# Сохранить полную структуру со всеми SKILL.md, scripts/, references/, assets/
```

**Метод:**
```bash
# Перемещать целые папки skills
for skill_dir in Skills/antigravity-awesome-skills/skills/*/; do
  skill_name=$(basename "$skill_dir")
  # Определить категорию по содержимому
  # Переместить в соответствующую категорию
done
```

---

#### Подфаза 2.4.2: Claude Skills (205)
**Структура источника:**
- engineering-team/
- engineering/ (POWERFUL)
- marketing-skill/
- product-team/
- c-level-advisor/
- project-management/
- ra-qm-team/
- business-growth/
- finance/

```bash
# Development skills
mv Skills/claude-skills/engineering-team/ COMBINED/skills/development/claude-skills/engineering-team/
mv Skills/claude-skills/engineering/ COMBINED/skills/development/claude-skills/engineering/
mv Skills/claude-skills/product-team/ COMBINED/skills/development/claude-skills/product-team/
mv Skills/claude-skills/project-management/ COMBINED/skills/development/claude-skills/project-management/

# SEO & Marketing
mv Skills/claude-skills/marketing-skill/ COMBINED/skills/seo/claude-skills-marketing/

# Business
mv Skills/claude-skills/business-growth/ COMBINED/skills/business/claude-skills-growth/
mv Skills/claude-skills/c-level-advisor/ COMBINED/skills/business/claude-skills-c-level/

# Finance & Analysis
mv Skills/claude-skills/finance/ COMBINED/skills/data-analysis/claude-skills-finance/

# Healthcare/Compliance
mv Skills/claude-skills/ra-qm-team/ COMBINED/skills/business/claude-skills-ra-qm/

# Python scripts (268 файлов)
mv Skills/claude-skills/*/scripts/*.py COMBINED/skills/development/claude-skills/scripts/

# Templates
mv Skills/claude-skills/templates/ COMBINED/prompts/templates/claude-skills-templates/
```

---

#### Подфаза 2.4.3: Superpowers Skills (14)
```bash
# Уже перемещено в Фаза 2.3, проверить:
ls -la COMBINED/skills/development/superpowers/
```

---

#### Подфаза 2.4.4: Deer-Flow Skills (15)
**Распределить по типам:**
```bash
# Development
mv Orchestration/deer-flow/skills/public/bootstrap/ COMBINED/skills/development/deer-flow-bootstrap/
mv Orchestration/deer-flow/skills/public/find-skills/ COMBINED/skills/development/deer-flow-find-skills/
mv Orchestration/deer-flow/skills/public/skill-creator/ COMBINED/skills/development/deer-flow-skill-creator/
mv Orchestration/deer-flow/skills/public/surprise-me/ COMBINED/skills/development/deer-flow-surprise/

# Data Analysis
mv Orchestration/deer-flow/skills/public/chart-visualization/ COMBINED/skills/data-analysis/deer-flow-chart/
mv Orchestration/deer-flow/skills/public/data-analysis/ COMBINED/skills/data-analysis/deer-flow-data-analysis/

# Research
mv Orchestration/deer-flow/skills/public/consulting-analysis/ COMBINED/skills/research/deer-flow-consulting/
mv Orchestration/deer-flow/skills/public/deep-research/ COMBINED/skills/research/deer-flow-deep-research/
mv Orchestration/deer-flow/skills/public/github-deep-research/ COMBINED/skills/research/deer-flow-github/

# Design
mv Orchestration/deer-flow/skills/public/frontend-design/ COMBINED/skills/design/deer-flow-frontend-design/
mv Orchestration/deer-flow/skills/public/image-generation/ COMBINED/skills/design/deer-flow-image-generation/
# Также копия в UI:
cp -r COMBINED/skills/design/deer-flow-frontend-design/ COMBINED/ui-design/rules/deer-flow-frontend-design/

# Writing
mv Orchestration/deer-flow/skills/public/podcast-generation/ COMBINED/skills/writing/deer-flow-podcast/
mv Orchestration/deer-flow/skills/public/ppt-generation/ COMBINED/skills/writing/deer-flow-ppt/

# DevOps
mv Orchestration/deer-flow/skills/public/vercel-deploy-claimable/ COMBINED/skills/devops/deer-flow-vercel-deploy/

# Integration (не skill)
mv Orchestration/deer-flow/skills/public/claude-to-deerflow/ COMBINED/orchestration/deer-flow/claude-integration/
```

---

#### Подфаза 2.4.5: Остальные Skills репо
```bash
# Hermes skills - уже обработано в 2.2.3

# Awesome Copilot skills
mv Skills/awesome-copilot-main/skills/ COMBINED/skills/development/awesome-copilot/

# Awesome Claude Code
mv Skills/awesome-claude-code/ COMBINED/skills/development/awesome-claude-code/

# Everything Claude Code
mv Skills/everything-claude-code/ COMBINED/skills/development/everything-claude-code/

# Claude SEO
mv Skills/claude-seo/ COMBINED/skills/seo/claude-seo/

# Obsidian
mv Skills/obsidian-skills/ COMBINED/skills/platform/obsidian/
```

---

### Фаза 2.5: Миграция Commands & Hooks (MEDIUM Priority)
**Время:** ~1 час

#### Commands:
```bash
# Shannon - уже перемещено в 2.2.1
# Superpowers - уже перемещено в 2.3
# Get-Shit-Done - уже перемещено в 2.3

# Claude Skills commands (если есть)
mv Skills/claude-skills/commands/ COMBINED/commands/general/claude-skills/
```

#### Hooks:
```bash
# Superpowers - уже перемещено в 2.3
# Get-Shit-Done - уже перемещено в 2.3
# Background Agents - уже перемещено в 2.2.2

# RuFlo hooks
mv Orchestration/ruflo/.claude-plugin/hooks/ COMBINED/hooks/notification/ruflo/
mv Orchestration/ruflo/.githooks/ COMBINED/hooks/pre-commit/ruflo/
```

---

### Фаза 2.6: Миграция Prompts (MEDIUM Priority)
**Время:** ~2-3 часа

#### Подфаза 2.6.1: System Prompts (3 источника → объединить)
**Источники:**
1. `Prompts/system-prompts-and-models-of-ai-tools/`
2. `Prompts/system-prompts/`
3. Частично в leaked

**Стратегия:** Объединить по инструментам

```bash
# Для каждого AI инструмента (Claude, ChatGPT, Cursor, Copilot, Gemini, etc.):
# 1. Найти все промпты этого инструмента в 3 источниках
# 2. Переместить в COMBINED/prompts/system-prompts/[tool_name]/
# 3. Если дубликаты - добавить суффикс (source1, source2, source3)

# Пример для Claude:
mkdir -p COMBINED/prompts/system-prompts/claude/
mv Prompts/system-prompts-and-models-of-ai-tools/claude*.md COMBINED/prompts/system-prompts/claude/
mv Prompts/system-prompts/claude*.md COMBINED/prompts/system-prompts/claude/

# Повторить для всех 30+ инструментов
```

---

#### Подфаза 2.6.2: Template Prompts
```bash
# Prompts.chat (огромная библиотека)
mv Prompts/prompts.chat/ COMBINED/prompts/templates/prompts-chat/

# Optimization prompts
mv Prompts/optimization/ COMBINED/prompts/templates/optimization/

# Vibe Coding
mv Prompts/vibe-coding/ COMBINED/prompts/templates/vibe-coding/
mv Prompts/vibe-coding-prompt-template/ COMBINED/prompts/templates/vibe-coding-template/

# Claude Skills templates - уже перемещено в 2.4.2
```

---

#### Подфаза 2.6.3: Leaked Prompts
```bash
mv Prompts/system_prompts_leaks/ COMBINED/prompts/leaked/system_prompts_leaks/
```

---

#### Подфаза 2.6.4: Security Prompts
```bash
# Shannon security prompts - уже перемещено в 2.2.1
# Проверить:
ls -la COMBINED/prompts/security/shannon/
```

---

### Фаза 2.7: Миграция Memory Systems (LOW Priority)
**Время:** ~30 минут

```bash
# Claude-Mem
mv Tools/claude-mem/ COMBINED/memory/claude-mem/

# Supermemory
mv Tools/supermemory/ COMBINED/memory/supermemory/

# OpenViking
mv Tools/OpenViking/ COMBINED/memory/openviking/

# Memory configs
mv MEMORY_SETUP.md COMBINED/memory/configs/MEMORY_SETUP.md

# Everything Claude Code memory configs (если есть)
# Уже в skills/development/everything-claude-code/
```

---

### Фаза 2.8: Миграция MCP Servers (LOW Priority)
**Время:** ~30 минут

```bash
# GitNexus
mv Tools/GitNexus/ COMBINED/mcp-servers/gitnexus/

# Lightpanda browser
mv Tools/browser/ COMBINED/mcp-servers/lightpanda/

# Nano Banana (Gemini image MCP)
mv Tools/nano-banana-2-mcp/ COMBINED/mcp-servers/nano-banana/

# Pretext
mv Tools/pretext/ COMBINED/mcp-servers/pretext/

# Hermes MCP - уже перемещено в 2.2.3

# Plugin configs - уже перемещены в 2.3 и 2.4
# Проверить:
ls -la COMBINED/mcp-servers/configs/
```

---

### Фаза 2.9: Миграция UI/UX (LOW Priority)
**Время:** ~1 час

```bash
# Galaxy (3,000+ components)
mv UI-UX/galaxy/ COMBINED/ui-design/components/galaxy/

# shadcn/ui
mv UI-UX/ui/ COMBINED/ui-design/components/shadcn/

# UI UX Pro Max (161 rules + 67 styles)
mv UI-UX/ui-ux-pro-max-skill/ COMBINED/ui-design/rules/ui-ux-pro-max/

# Cursor rules
mv .cursorrules COMBINED/ui-design/cursor-rules/root-cursorrules
mv .cursor/rules/ COMBINED/ui-design/cursor-rules/cursor-rules/
```

---

### Фаза 2.10: Миграция Reference (LOW Priority)
**Время:** ~15 минут

```bash
# Awesome Self-Hosted
mv Reference/awesome-selfhosted-master/ COMBINED/reference/awesome-selfhosted/
```

---

### Фаза 2.11: Финализация миграции
**Время:** ~30 минут

**Задачи:**
1. Создать финальный INDEX_MOVEMENTS.json со всеми перемещениями
2. Создать COMBINED/INDEX.md с человекочитаемой картой
3. Создать INDEX.md для каждой категории:
   - COMBINED/agents/INDEX.md
   - COMBINED/skills/INDEX.md
   - COMBINED/commands/INDEX.md
   - COMBINED/orchestration/INDEX.md
4. Подсчитать статистику перемещений

---

## ЭТАП 3: ПРОВЕРКА ОСТАВШИХСЯ ФАЙЛОВ

**Цель:** Убедиться что ничего не потеряно, обработать leftovers

### Фаза 3.1: Сканирование оригинальных папок
**Время:** ~1 час

**Задачи:**
1. Просканировать каждую оригинальную папку (Agents/, Orchestration/, Skills/, etc.)
2. Найти все файлы которые НЕ были перемещены
3. Исключить из списка:
   - Build artifacts (node_modules/, dist/, build/)
   - Lock files (package-lock.json, pnpm-lock.yaml)
   - Config files (.gitignore, .env*, tsconfig.json)
   - Пустые файлы

**Команды:**
```bash
# Найти все файлы в исходных папках
find Agents/ Orchestration/ Skills/ Prompts/ Tools/ UI-UX/ Reference/ -type f > /tmp/all_original_files.txt

# Найти все файлы в COMBINED/
find COMBINED/ -type f > /tmp/all_combined_files.txt

# Сравнить и найти разницу (с учётом переименования)
# Это требует сравнения по содержимому или по записям в INDEX_MOVEMENTS.json
```

**Результат:** Файл `COMBINED/LEFTOVERS.txt` со списком необработанных файлов

---

### Фаза 3.2: Категоризация Leftovers
**Время:** ~1 час

**Задачи:**
1. Для каждого leftover файла:
   - Прочитать файл
   - Прочитать README родительской папки
   - Определить тип и назначение
   - Принять решение:
     - Переместить в существующую категорию
     - Создать новую подкатегорию
     - Пропустить (build artifact, config, etc.)

**Метод:**
```bash
# Для каждого файла в LEFTOVERS.txt:
# 1. Определить тип
file_type=$(file "$leftover_file")

# 2. Прочитать контекст
parent_dir=$(dirname "$leftover_file")
cat "$parent_dir/README.md"

# 3. Классифицировать
# - agent? skill? command? hook? prompt? config? other?

# 4. Переместить или пропустить
```

**Результат:**
- `COMBINED/LEFTOVERS_CATEGORIZED.json` - категоризированный список
- `COMBINED/LEFTOVERS_SKIPPED.txt` - список пропущенных (build artifacts, etc.)

---

### Фаза 3.3: Обработка категоризированных Leftovers
**Время:** ~2 часа

**Задачи:**
1. Для каждой категории leftovers:
   - Если файлы подходят в существующую структуру → переместить
   - Если нужна новая подкатегория → создать и переместить
   - Если файлы дублируют уже перемещённое → пропустить

2. Обновить INDEX_MOVEMENTS.json

**Пример:**
```bash
# Если найден agent который не попал в миграцию:
mv "$leftover_agent" COMBINED/agents/by-role/[role]/leftover-[name].md

# Если найден skill:
mv "$leftover_skill" COMBINED/skills/[category]/leftover-[name]/

# Если найден config:
mv "$leftover_config" COMBINED/[appropriate_category]/configs/
```

---

### Фаза 3.4: Финальная верификация
**Время:** ~30 минут

**Задачи:**
1. Пересканировать оригинальные папки
2. Убедиться что остались только:
   - Build artifacts
   - Config files
   - .git/
   - Очень специфичные файлы которые сознательно пропущены

3. Создать финальный отчёт

**Команды:**
```bash
# Финальный подсчёт
find Agents/ -type f | grep -v node_modules | grep -v ".git" | wc -l
find COMBINED/ -type f | wc -l

# Создать статистику
python3 << EOF
import json
with open('COMBINED/INDEX_MOVEMENTS.json') as f:
    movements = json.load(f)

print(f"Total files moved: {len(movements['moved'])}")
print(f"Total files skipped: {len(movements['skipped'])}")
print(f"Total operations: {len(movements['moved']) + len(movements['skipped'])}")
EOF
```

**Результат:**
- `COMBINED/MIGRATION_COMPLETE.md` - финальный отчёт
- `COMBINED/STATISTICS.json` - статистика миграции

---

## ЦЕЛЕВАЯ СТРУКТУРА COMBINED/

```
COMBINED/
│
├── agents/                          # ВСЕ определения агентов
│   ├── by-role/                     # Сортировка по роли
│   │   ├── architect/               # Архитектурные агенты
│   │   ├── coder/                   # Coding агенты (executor)
│   │   ├── debugger/                # Debug агенты
│   │   ├── planner/                 # Planning агенты
│   │   ├── reviewer/                # Code review агенты
│   │   ├── security/                # Security агенты
│   │   ├── tester/                  # Testing агенты
│   │   ├── researcher/              # Research агенты
│   │   ├── ui-specialist/           # UI/UX агенты
│   │   ├── writer/                  # Documentation агенты
│   │   ├── manager/                 # Project management
│   │   ├── scientist/               # Data science
│   │   ├── devops/                  # DevOps агенты
│   │   └── business/                # Business агенты (CEO, CTO)
│   │
│   ├── by-interface/                # Сортировка по AI интерфейсу
│   │   ├── claude/                  # Claude Code agents
│   │   │   ├── shannon/
│   │   │   ├── ruflo/
│   │   │   ├── superpowers/
│   │   │   ├── oh-my-claudecode/
│   │   │   └── claude-skills/
│   │   ├── copilot/                 # GitHub Copilot
│   │   │   ├── awesome-copilot/     # 230+ агентов
│   │   │   ├── cookbook/            # SDK примеры
│   │   │   └── instructions/
│   │   ├── cursor/                  # Cursor AI
│   │   ├── codex/                   # OpenAI Codex
│   │   ├── antigravity/             # Antigravity interface
│   │   └── opencode/                # OpenCode
│   │
│   └── orchestrators/               # Мульти-агентные системы
│       ├── background-agents/       # Open-Inspect platform
│       ├── hermes/                  # Hermes self-learning agent
│       └── oh-my-claudecode/        # OMC (также в orchestration/)
│
├── orchestration/                   # Системы оркестрации
│   ├── ruflo/                       # RuFlo v3.5 enterprise
│   │   ├── core/
│   │   ├── plugin/
│   │   ├── versions/
│   │   └── docs/
│   ├── oh-my-claudecode/            # OMC multi-agent
│   ├── get-shit-done/               # GSD meta-prompting
│   ├── superpowers/                 # Superpowers workflow
│   ├── deer-flow/                   # ByteDance super-agent
│   ├── 1code/                       # Desktop app
│   ├── vibe-kanban/                 # Kanban для agents
│   └── workflows/                   # Общие workflow паттерны
│
├── skills/                          # ВСЕ skills
│   ├── development/                 # Разработка
│   │   ├── antigravity/             # 1,340+ skills
│   │   ├── claude-skills/           # 205 skills
│   │   ├── superpowers/             # 14 workflow skills
│   │   ├── deer-flow-*/             # Deer-Flow dev skills
│   │   ├── hermes/                  # Hermes skills
│   │   ├── awesome-copilot/
│   │   ├── awesome-claude-code/
│   │   └── everything-claude-code/
│   ├── seo/                         # SEO & Marketing
│   ├── research/                    # Research skills
│   ├── data-analysis/               # Data analysis
│   ├── design/                      # Design skills
│   ├── writing/                     # Content creation
│   ├── devops/                      # DevOps skills
│   ├── platform/                    # Platform-specific (Obsidian)
│   └── business/                    # Business skills
│
├── commands/                        # Slash-команды
│   ├── general/                     # Общие команды
│   │   └── gsd/                     # 57 GSD commands
│   ├── plan/                        # Planning commands
│   ├── review/                      # Review commands
│   └── debug/                       # Debug commands
│
├── hooks/                           # Lifecycle hooks
│   ├── pre-commit/                  # Git pre-commit
│   ├── post-commit/                 # Git post-commit
│   └── notification/                # Session/notification hooks
│       ├── gsd/                     # 5 GSD hooks
│       ├── superpowers/             # 4 Superpowers hooks
│       └── background-agents/
│
├── prompts/                         # Промпты
│   ├── system-prompts/              # Системные промпты (30+ tools)
│   │   ├── claude/
│   │   ├── chatgpt/
│   │   ├── cursor/
│   │   ├── copilot/
│   │   ├── gemini/
│   │   └── ...
│   ├── leaked/                      # Утечки промптов
│   ├── templates/                   # Шаблоны промптов
│   │   ├── prompts-chat/            # 143k⭐ библиотека
│   │   ├── optimization/
│   │   ├── vibe-coding/
│   │   └── claude-skills-templates/
│   └── security/                    # Security prompts
│       └── shannon/                 # 30+ pentesting prompts
│
├── memory/                          # Memory системы
│   ├── claude-mem/                  # Persistent memory compression
│   ├── supermemory/                 # #1 benchmark memory engine
│   ├── openviking/                  # ByteDance context DB
│   └── configs/                     # Memory configs
│
├── mcp-servers/                     # MCP server implementations
│   ├── gitnexus/                    # Codebase knowledge graph
│   ├── lightpanda/                  # AI browser (9x faster)
│   ├── hermes/                      # Hermes MCP server
│   ├── nano-banana/                 # Gemini image MCP
│   ├── pretext/                     # Text layout
│   └── configs/                     # MCP configs (plugin.json)
│
├── security/                        # Security tools
│   ├── shannon/                     # AI pentester
│   │   ├── apps/
│   │   ├── configs/
│   │   └── README.md
│   └── reports/                     # Sample security reports
│
├── ui-design/                       # UI/UX ресурсы
│   ├── components/                  # UI компоненты
│   │   ├── galaxy/                  # 3,000+ Uiverse components
│   │   └── shadcn/                  # shadcn/ui React components
│   ├── rules/                       # Design rules
│   │   └── ui-ux-pro-max/           # 161 rules + 67 styles
│   └── cursor-rules/                # Cursor UI rules
│
├── reference/                       # Reference материалы
│   └── awesome-selfhosted/          # Self-hosted tools catalog
│
├── INDEX_MOVEMENTS.json             # Полный лог перемещений (машиночитаемый)
├── INDEX.md                         # Человекочитаемая карта
├── MIGRATION_COMPLETE.md            # Финальный отчёт
└── STATISTICS.json                  # Статистика миграции
```

---

## ИНДЕКСАЦИЯ И ОТСЛЕЖИВАНИЕ

### Формат INDEX_MOVEMENTS.json

```json
{
  "migration_date": "2026-04-02",
  "total_files": 39122,
  "total_moved": 35000,
  "total_skipped": 4122,
  "moved": [
    {
      "id": 1,
      "source": "Agents/shannon/.claude/commands/debug.md",
      "destination": "COMBINED/commands/debug/shannon-debug.md",
      "type": "command",
      "timestamp": "2026-04-02T10:30:00Z",
      "status": "completed"
    },
    {
      "id": 2,
      "source": "Agents/shannon/CLAUDE.md",
      "destination": "COMBINED/agents/by-interface/claude/shannon-CLAUDE.md",
      "type": "config",
      "timestamp": "2026-04-02T10:31:00Z",
      "status": "completed"
    }
    // ... 34,998 more entries
  ],
  "skipped": [
    {
      "path": "Agents/shannon/node_modules/",
      "reason": "build_artifact",
      "timestamp": "2026-04-02T10:30:00Z"
    },
    {
      "path": "Orchestration/ruflo/package-lock.json",
      "reason": "lock_file",
      "timestamp": "2026-04-02T11:00:00Z"
    }
    // ... 4,120 more entries
  ],
  "statistics": {
    "by_category": {
      "agents": 280,
      "skills": 1560,
      "commands": 63,
      "hooks": 9,
      "prompts": 2500,
      "orchestration": 8,
      "memory": 3,
      "mcp_servers": 5,
      "security": 1,
      "ui_design": 3001,
      "reference": 1
    },
    "by_priority": {
      "HIGH": 1840,
      "MEDIUM": 2563,
      "LOW": 3004
    }
  }
}
```

---

## ОЖИДАЕМЫЕ РЕЗУЛЬТАТЫ

### По завершении ЭТАПА 1:
- ✅ Полная карта репозитория (MASTER_INDEX.json)
- ✅ План миграции (MIGRATION_MAP.json)
- ✅ Анализ каждой категории (*_analysis.json)
- ✅ Понимание объёма работы

### По завершении ЭТАПА 2:
- ✅ Все 35,000+ файлов перемещены в структуру COMBINED/
- ✅ Оригинальный формат файлов сохранён
- ✅ Агенты распределены по ролям
- ✅ Skills распределены по категориям
- ✅ Полная индексация в INDEX_MOVEMENTS.json

### По завершении ЭТАПА 3:
- ✅ Все leftovers обработаны
- ✅ Финальный отчёт создан
- ✅ Статистика миграции подсчитана
- ✅ Репозиторий готов к следующей фазе (слияние дубликатов)

---

## СТАТИСТИКА И МЕТРИКИ

### Ожидаемое время выполнения:
- **ЭТАП 1:** ~7 часов (аудит и анализ)
- **ЭТАП 2:** ~20-25 часов (миграция)
- **ЭТАП 3:** ~5 часов (проверка leftovers)
- **ИТОГО:** ~32-37 часов чистой работы

### Ожидаемые объёмы:
- **Файлов для перемещения:** ~35,000
- **Agents:** ~280 файлов
- **Skills:** ~1,560 папок
- **Commands:** ~63 файла
- **Hooks:** ~9 файлов
- **Prompts:** ~2,500 файлов
- **UI Components:** ~3,000 файлов
- **Пропущено (build artifacts):** ~4,122 файла

---

## СЛЕДУЮЩИЕ ШАГИ (ПОСЛЕ ЭТОГО ПЛАНА)

### Этап 4: Умное Слияние Дубликатов
После завершения миграции:
1. Найти дубликаты по именам/ролям
2. Прочитать каждый дубликат
3. Создать мега-файлы объединяя уникальное
4. Убрать повторы

### Этап 5: Оркестрация
Настроить связи между всеми компонентами

---

## ВОПРОСЫ И УТОЧНЕНИЯ

1. **Старые MEGA_*.md файлы:** Оставить как есть (не трогать)
2. **_combined/ папка:** Не интегрировать в новую структуру
3. **Порядок работы:** Репо за репо, а не по папкам
4. **Перемещение vs Копирование:** ПЕРЕМЕЩАТЬ для отслеживания leftovers

---

**ГОТОВО К УТВЕРЖДЕНИЮ И НАЧАЛУ РАБОТЫ**

Как только этот план утверждён, можем начинать с **ЭТАП 1, Фаза 1.1**.
