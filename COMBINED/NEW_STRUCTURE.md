# 🎯 НОВАЯ СТРУКТУРА COMBINED/ — Unified Organization

> Объединенная структура с префиксами для ясности происхождения файлов
> Дата: 2026-04-02

---

## 📁 Полная структура COMBINED/

```
COMBINED/
│
├── agents/                          # ВСЕ определения агентов из всех репо
│   ├── by-role/                     # Сортировка по функциональной роли
│   │   ├── architect/               # Архитектурные агенты
│   │   │   ├── ruflo-architect.yaml
│   │   │   ├── gsd-architect.md
│   │   │   └── omc-architect.md
│   │   ├── coder/                   # Coding агенты
│   │   │   ├── ruflo-coder.yaml
│   │   │   ├── gsd-executor.md
│   │   │   ├── omc-executor.md
│   │   │   └── cs-fullstack-engineer.md
│   │   ├── debugger/                # Debug агенты
│   │   │   ├── gsd-debugger.md      # (42.7kb!)
│   │   │   ├── omc-debugger.md
│   │   │   └── cs-debugging-specialist.md
│   │   ├── planner/                 # Planning агенты
│   │   │   ├── gsd-planner.md       # (45kb!)
│   │   │   ├── omc-planner.md
│   │   │   └── superpowers-planner.md
│   │   ├── reviewer/                # Code review агенты
│   │   │   ├── ruflo-reviewer.yaml
│   │   │   ├── omc-code-reviewer.md
│   │   │   ├── superpowers-code-reviewer.md
│   │   │   └── gsd-verifier.md
│   │   ├── security/                # Security агенты
│   │   │   ├── ruflo-security-architect.yaml
│   │   │   ├── omc-security-reviewer.md
│   │   │   └── shannon-pentester.md
│   │   ├── tester/                  # Testing агенты
│   │   │   ├── ruflo-tester.yaml
│   │   │   ├── omc-test-engineer.md
│   │   │   └── cs-qa-specialist.md
│   │   ├── researcher/              # Research агенты
│   │   │   ├── gsd-phase-researcher.md
│   │   │   ├── gsd-project-researcher.md
│   │   │   ├── omc-analyst.md
│   │   │   └── deer-flow-deep-research.md
│   │   ├── ui-specialist/           # UI/UX агенты
│   │   │   ├── gsd-ui-auditor.md
│   │   │   ├── gsd-ui-researcher.md
│   │   │   ├── gsd-ui-checker.md
│   │   │   └── omc-designer.md
│   │   ├── writer/                  # Documentation агенты
│   │   │   ├── omc-writer.md
│   │   │   └── cs-technical-writer.md
│   │   ├── manager/                 # Project management
│   │   │   ├── gsd-roadmapper.md
│   │   │   └── cs-product-manager.md
│   │   ├── scientist/               # Data science
│   │   │   └── omc-scientist.md
│   │   ├── devops/                  # DevOps агенты
│   │   │   └── cs-devops-engineer.md
│   │   └── business/                # Business агенты
│   │       ├── cs-ceo-advisor.md
│   │       └── cs-cto-advisor.md
│   │
│   ├── by-interface/                # Сортировка по AI интерфейсу
│   │   ├── claude/                  # Claude Code agents
│   │   │   ├── shannon/             # Shannon's claude configs
│   │   │   ├── ruflo/               # RuFlo's claude configs
│   │   │   ├── superpowers/         # Superpowers configs
│   │   │   └── claude-skills/       # Claude Skills configs
│   │   ├── copilot/                 # GitHub Copilot
│   │   │   ├── awesome-copilot/     # 230+ Copilot agents
│   │   │   │   ├── 4.1-Beast.agent.md
│   │   │   │   ├── CSharpExpert.agent.md
│   │   │   │   ├── DjangoExpert.agent.md
│   │   │   │   └── ...230 files
│   │   │   ├── cookbook/            # Copilot SDK examples
│   │   │   │   ├── python/
│   │   │   │   ├── dotnet/
│   │   │   │   ├── go/
│   │   │   │   └── nodejs/
│   │   │   └── instructions/        # Copilot instructions
│   │   ├── cursor/                  # Cursor AI
│   │   │   └── superpowers-cursor/
│   │   ├── codex/                   # OpenAI Codex
│   │   │   └── superpowers-codex/
│   │   ├── antigravity/             # Antigravity interface
│   │   │   └── _agents/
│   │   └── opencode/                # OpenCode
│   │       └── superpowers-opencode/
│   │
│   └── orchestrators/               # Мульти-агентные системы
│       ├── background-agents/       # Open-Inspect platform
│       │   ├── docs/
│       │   ├── packages/            # control-plane, bots, runtime
│       │   └── scripts/
│       ├── hermes/                  # Hermes self-learning agent
│       │   ├── agent/               # Core agent
│       │   ├── cli/
│       │   ├── gateway/
│       │   ├── tools/
│       │   └── docs/
│       └── shannon/                 # Shannon pentester (moved from security/)
│           ├── apps/
│           ├── configs/
│           └── docs/
│
├── orchestration/                   # 🔄 ОБЪЕДИНЕННЫЕ системы оркестрации
│   │
│   ├── agents-ruflo/                # RuFlo agents
│   ├── agents-omc/                  # OMC agents (19 специализированных)
│   ├── agents-gsd/                  # GSD agents (18 агентов)
│   ├── agents-superpowers/          # Superpowers agents
│   ├── agents-deer-flow/            # DeerFlow agents
│   ├── agents-1code/                # 1code agents
│   │
│   ├── skills-ruflo/                # RuFlo skills
│   ├── skills-omc/                  # OMC skills
│   ├── skills-superpowers/          # Superpowers skills (14 workflow)
│   ├── skills-deer-flow/            # DeerFlow skills (15 public)
│   │
│   ├── commands-ruflo/              # RuFlo commands
│   ├── commands-omc/                # OMC commands
│   ├── commands-gsd/                # GSD commands (57!)
│   ├── commands-superpowers/        # Superpowers commands (3)
│   ├── commands-deer-flow/          # DeerFlow commands
│   │
│   ├── hooks-ruflo/                 # RuFlo hooks
│   ├── hooks-gsd/                   # GSD hooks (5)
│   ├── hooks-superpowers/           # Superpowers hooks (4)
│   │
│   ├── core-ruflo/                  # RuFlo core system
│   ├── core-omc/                    # OMC core
│   ├── core-gsd/                    # GSD core
│   ├── core-deer-flow/              # DeerFlow backend + frontend
│   │
│   ├── plugin-ruflo/                # RuFlo plugin system
│   ├── plugin-superpowers/          # Superpowers plugins
│   │
│   ├── versions-ruflo/              # RuFlo v2/, v3/
│   │
│   ├── docs-ruflo/                  # RuFlo documentation
│   ├── docs-omc/                    # OMC documentation
│   ├── docs-gsd/                    # GSD documentation
│   ├── docs-superpowers/            # Superpowers documentation
│   ├── docs-deer-flow/              # DeerFlow documentation
│   ├── docs-background-agents/      # Background Agents docs
│   │
│   ├── app-1code/                   # 1code desktop app (полностью)
│   ├── app-vibe-kanban/             # vibe-kanban (полностью)
│   │
│   └── workflows/                   # Общие workflow паттерны
│       └── terraform/               # Infrastructure code
│
├── skills/                          # ВСЕ skills из всех репо (не-orchestration)
│   ├── development/                 # Разработка
│   │   ├── antigravity/             # 1,340+ skills by category
│   │   │   ├── ai/
│   │   │   ├── backend/
│   │   │   ├── frontend/
│   │   │   ├── devops/
│   │   │   ├── data-science/
│   │   │   ├── mobile/
│   │   │   ├── testing/
│   │   │   └── ...много категорий
│   │   ├── claude-skills/           # 205 skills
│   │   │   ├── engineering/         # Core engineering
│   │   │   ├── engineering-team/    # Team practices
│   │   │   ├── product-team/        # Product management
│   │   │   ├── documentation/
│   │   │   └── standards/
│   │   ├── hermes/                  # Hermes skills
│   │   │   ├── builtin/
│   │   │   └── optional/
│   │   ├── awesome-copilot/         # Copilot skills
│   │   ├── awesome-claude-code/     # Curated skills
│   │   └── everything-claude-code/  # Hackathon winner
│   ├── seo/                         # SEO & Marketing
│   │   ├── claude-seo/              # SEO audit skill
│   │   └── claude-skills-marketing/ # Marketing skills
│   ├── research/                    # Research skills
│   │   └── consulting-analysis/
│   ├── data-analysis/               # Data analysis
│   │   ├── chart-visualization/
│   │   └── claude-skills-finance/
│   ├── design/                      # Design skills
│   │   ├── frontend-design/
│   │   └── image-generation/
│   ├── writing/                     # Content creation
│   │   ├── podcast/
│   │   ├── ppt/
│   │   └── documentation/
│   ├── devops/                      # DevOps skills
│   │   └── vercel-deploy/
│   ├── platform/                    # Platform-specific
│   │   └── obsidian/                # Obsidian skills
│   └── business/                    # Business skills
│       └── claude-skills-growth/
│
├── commands/                        # Slash-команды (не-orchestration)
│   ├── general/                     # Общие команды
│   │   └── claude-skills/           # Claude Skills commands
│   ├── plan/                        # Planning commands
│   ├── review/                      # Review commands
│   │   ├── shannon-pr.md
│   │   └── shannon-review.md
│   └── debug/                       # Debug commands
│       └── shannon-debug.md
│
├── hooks/                           # Lifecycle hooks (не-orchestration)
│   ├── pre-commit/                  # Git pre-commit
│   │   └── background-agents-husky/
│   └── notification/                # Session/notification hooks
│       └── background-agents/
│
├── prompts/                         # Промпты
│   ├── system-prompts/              # Системные промпты AI-инструментов
│   │   ├── claude/
│   │   ├── chatgpt/
│   │   ├── cursor/
│   │   ├── copilot/
│   │   ├── gemini/
│   │   └── ...30+ tools
│   ├── leaked/                      # Утечки промптов
│   │   └── system_prompts_leaks/
│   ├── templates/                   # Шаблоны промптов
│   │   ├── prompts-chat/            # 143k⭐ библиотека
│   │   ├── optimization/
│   │   ├── vibe-coding/
│   │   ├── vibe-coding-template/
│   │   ├── selfhosted/              # awesome-selfhosted
│   │   └── claude-skills-templates/
│   └── security/                    # Security prompts
│       └── shannon/                 # 30+ pentesting prompts
│           ├── exploit/
│           ├── vuln/
│           ├── recon/
│           ├── shared/
│           └── pipeline-testing/
│
├── memory/                          # Memory системы
│   ├── claude-mem/                  # Persistent memory compression
│   ├── supermemory/                 # #1 benchmark memory engine
│   ├── openviking/                  # ByteDance context DB
│   └── configs/                     # Memory configs
│       └── MEMORY_SETUP.md
│
├── mcp-servers/                     # MCP server implementations
│   ├── gitnexus/                    # Codebase knowledge graph
│   ├── lightpanda/                  # AI browser (9x faster)
│   ├── hermes/                      # Hermes MCP server
│   ├── nano-banana/                 # Gemini image MCP
│   ├── pretext/                     # Text layout
│   └── configs/                     # MCP configs
│       ├── superpowers-plugin/
│       ├── ruflo-plugin/
│       └── antigravity-plugin/
│
├── security/                        # Security tools
│   └── reports/                     # Sample security reports
│       └── shannon-samples/
│
├── ui-design/                       # UI/UX ресурсы
│   ├── components/                  # UI компоненты
│   │   ├── galaxy/                  # 3,000+ Uiverse components
│   │   └── shadcn/                  # shadcn/ui React components
│   ├── rules/                       # Design rules
│   │   └── ui-ux-pro-max/           # 161 rules + 67 styles
│   └── cursor-rules/                # Cursor UI rules
│       └── root-cursorrules/
│
└── reference/                       # Reference материалы
    └── awesome-selfhosted/          # Self-hosted tools catalog
```

---

## 🎯 Ключевые изменения

### 1. Объединение orchestration/

Все файлы из систем оркестрации теперь в `orchestration/` с префиксами:

**Agents:**
- `agents-ruflo/` - RuFlo agents
- `agents-omc/` - oh-my-claudecode agents (19 специализированных)
- `agents-gsd/` - Get Shit Done agents (18 агентов)
- `agents-superpowers/` - Superpowers agents
- `agents-deer-flow/` - DeerFlow agents
- `agents-1code/` - 1code agents

**Skills:**
- `skills-ruflo/` - RuFlo skills
- `skills-omc/` - OMC skills
- `skills-superpowers/` - Superpowers skills (14 workflow)
- `skills-deer-flow/` - DeerFlow skills (15 public)

**Commands:**
- `commands-ruflo/` - RuFlo commands
- `commands-omc/` - OMC commands
- `commands-gsd/` - GSD commands (57!)
- `commands-superpowers/` - Superpowers commands (3)
- `commands-deer-flow/` - DeerFlow commands

**Hooks:**
- `hooks-ruflo/` - RuFlo hooks
- `hooks-gsd/` - GSD hooks (5)
- `hooks-superpowers/` - Superpowers hooks (4)

**Core системы:**
- `core-ruflo/` - RuFlo core (ядро системы)
- `core-omc/` - OMC core
- `core-gsd/` - GSD core
- `core-deer-flow/` - DeerFlow backend + frontend

**Plugin системы:**
- `plugin-ruflo/` - RuFlo plugin system
- `plugin-superpowers/` - Superpowers plugins

**Версии:**
- `versions-ruflo/` - RuFlo v2/, v3/

**Документация:**
- `docs-ruflo/` - RuFlo documentation
- `docs-omc/` - OMC documentation
- `docs-gsd/` - GSD documentation
- `docs-superpowers/` - Superpowers documentation
- `docs-deer-flow/` - DeerFlow documentation
- `docs-background-agents/` - Background Agents docs

**Standalone приложения:**
- `app-1code/` - 1code desktop app (полностью)
- `app-vibe-kanban/` - vibe-kanban (полностью)

---

## 📊 Преимущества новой структуры

### 1. Ясность происхождения
Каждый файл сразу показывает откуда он пришел через префикс:
- `agents-ruflo/` - из RuFlo
- `skills-gsd/` - из Get Shit Done
- `commands-omc/` - из oh-my-claudecode

### 2. Легкое объединение
Все компоненты одного типа рядом:
- Все agents в одной области
- Все skills в одной области
- Все commands в одной области

### 3. Централизованная orchestration/
Вся логика оркестрации в одном месте, но с четкой категоризацией по источникам.

### 4. Сохранены уникальные компоненты
Уникальные папки (core, plugin, versions) сохранены с префиксами:
- `core-ruflo/` - только у RuFlo
- `versions-ruflo/` - только у RuFlo
- `plugin-ruflo/` - только у RuFlo и Superpowers

---

## 🔄 Маппинг старой → новой структуры

### Orchestration systems:

**RuFlo:**
- `orchestration/ruflo/core/` → `orchestration/core-ruflo/`
- `orchestration/ruflo/plugin/` → `orchestration/plugin-ruflo/`
- `orchestration/ruflo/versions/` → `orchestration/versions-ruflo/`
- `orchestration/ruflo/docs/` → `orchestration/docs-ruflo/`
- RuFlo agents → `orchestration/agents-ruflo/`
- RuFlo skills → `orchestration/skills-ruflo/`

**oh-my-claudecode:**
- `orchestration/oh-my-claudecode/agents/` → `orchestration/agents-omc/`
- `orchestration/oh-my-claudecode/skills/` → `orchestration/skills-omc/`
- `orchestration/oh-my-claudecode/commands/` → `orchestration/commands-omc/`
- `orchestration/oh-my-claudecode/docs/` → `orchestration/docs-omc/`
- `orchestration/oh-my-claudecode/` (остальное) → `orchestration/core-omc/`

**Get Shit Done:**
- `orchestration/get-shit-done/agents/` → `orchestration/agents-gsd/`
- `orchestration/get-shit-done/commands/` → `orchestration/commands-gsd/`
- `orchestration/get-shit-done/hooks/` → `orchestration/hooks-gsd/`
- `orchestration/get-shit-done/` (остальное) → `orchestration/core-gsd/`

**Superpowers:**
- `orchestration/superpowers/agents/` → `orchestration/agents-superpowers/`
- `orchestration/superpowers/skills/` → `orchestration/skills-superpowers/`
- `orchestration/superpowers/commands/` → `orchestration/commands-superpowers/`
- `orchestration/superpowers/hooks/` → `orchestration/hooks-superpowers/`
- `orchestration/superpowers/plugins/` → `orchestration/plugin-superpowers/`
- `orchestration/superpowers/docs/` → `orchestration/docs-superpowers/`

**DeerFlow:**
- `orchestration/deer-flow/skills/public/` → `orchestration/skills-deer-flow/`
- `orchestration/deer-flow/backend/` + `frontend/` → `orchestration/core-deer-flow/`
- `orchestration/deer-flow/docs/` → `orchestration/docs-deer-flow/`

**1code:**
- `orchestration/1code/` → `orchestration/app-1code/`

**vibe-kanban:**
- `orchestration/vibe-kanban/` → `orchestration/app-vibe-kanban/`

---

## 📝 Следующие шаги

1. ✅ Структура определена в документе
2. ⏳ Выполнить реорганизацию файлов
3. ⏳ Обновить INDEX.md
4. ⏳ Создать MIGRATION_V2.md с описанием изменений
5. ⏳ Проверить все пути и ссылки

---

*Новая структура COMBINED/ — Unified Organization with Clear Prefixes*
*Дата создания: 2026-04-02*
