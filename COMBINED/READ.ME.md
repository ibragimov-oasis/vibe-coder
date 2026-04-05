обновление: 04.04.2026
🎯 REFINED STRUCTURE: HIERARCHICAL + PREFIX-SOURCE

NEW COMBINED/
│
├── agents/                          # TOP-LEVEL CATEGORY
│   ├── by-role/                     # Cross-repo aggregate (SPECIAL)
│   │   ├── architect/
│   │   ├── coder/
│   │   ├── debugger/
│   │   ├── planner/
│   │   ├── reviewer/
│   │   ├── security/
│   │   ├── tester/
│   │   ├── researcher/
│   │   ├── ui-specialist/
│   │   ├── writer/
│   │   ├── manager/
│   │   ├── scientist/
│   │   ├── devops/
│   │   └── business/
│   │
│   ├── by-interface/                # Organized by AI platform
│   │   ├── agents-claude/           # All Claude agents
│   │   ├── agents-copilot/          # All Copilot agents
│   │   ├── agents-cursor/           # All Cursor agents
│   │   ├── agents-antigravity/      # All Antigravity agents
│   │   ├── agents-codex/            # All Codex agents
│   │   └── agents-opencode/         # All OpenCode agents
│   │
│   ├── agents-ruflo/                # RuFlo agents
│   ├── agents-omc/                  # oh-my-claudecode agents
│   ├── agents-gsd/                  # get-shit-done agents
│   ├── agents-superpowers/          # Superpowers agents
│   ├── agents-claude-skills/        # Claude Skills agents
│   ├── agents-deer-flow/            # DeerFlow agents
│   ├── agents-shannon/              # Shannon pentester
│   ├── agents-hermes/               # Hermes agents
│   └── agents-background/           # Background agents
│
├── skills/                          # TOP-LEVEL CATEGORY
│   ├── skills-ruflo/                # RuFlo skills
│   ├── skills-omc/                  # oh-my-claudecode skills
│   ├── skills-gsd/                  # get-shit-done skills
│   ├── skills-superpowers/          # Superpowers skills (14)
│   ├── skills-claude/               # Claude Skills (205)
│   ├── skills-antigravity/          # Antigravity skills (1,340+)
│   ├── skills-deer-flow/            # DeerFlow skills (15)
│   ├── skills-hermes/               # Hermes skills
│   ├── skills-copilot/              # Copilot skills
│   ├── skills-awesome-claude/       # Awesome Claude Code
│   ├── skills-everything-cc/        # Everything Claude Code
│   ├── skills-seo/                  # All SEO skills
│   ├── skills-research/             # All research skills
│   ├── skills-design/               # All design skills
│   ├── skills-data-analysis/        # Data analysis skills
│   ├── skills-writing/              # Writing/content skills
│   ├── skills-devops/               # DevOps skills
│   ├── skills-platform/             # Platform-specific (Obsidian, etc.)
│   └── skills-business/             # Business/growth skills
│
├── commands/                        # TOP-LEVEL CATEGORY
│   ├── commands-gsd/                # get-shit-done commands (57!)
│   ├── commands-superpowers/        # Superpowers commands
│   ├── commands-shannon/            # Shannon commands
│   ├── commands-omc/                # oh-my-claudecode commands
│   └── commands-general/            # General/shared commands
│
├── hooks/                           # TOP-LEVEL CATEGORY
│   ├── hooks-gsd/                   # get-shit-done hooks (5)
│   ├── hooks-superpowers/           # Superpowers hooks (4)
│   ├── hooks-ruflo/                 # RuFlo hooks
│   ├── hooks-background-agents/     # Background agents hooks
│   └── hooks-omc/                   # oh-my-claudecode hooks
│
├── orchestration/                   # TOP-LEVEL CATEGORY
│   ├── core-ruflo/                  # RuFlo: plugin, v2, v3, versions, docs
│   ├── core-omc/                    # OMC: bridge, src, templates, tests
│   ├── core-gsd/                    # GSD: sdk, bin, tests
│   ├── core-deer-flow/              # DeerFlow: backend, frontend, docker
│   ├── core-hermes/                 # Hermes: cli, gateway, tools
│   ├── core-background-agents/      # Background: control-plane, bots, runtime
│   ├── core-1code/                  # 1code desktop app
│   ├── core-vibe-kanban/            # Vibe-Kanban
│   └── workflows-terraform/         # Terraform IaC workflows
│
├── prompts/                         # TOP-LEVEL CATEGORY
│   ├── prompts-system/              # All system prompts merged
│   │   ├── claude/
│   │   ├── cursor/
│   │   ├── copilot/
│   │   ├── chatgpt/
│   │   ├── devin/
│   │   ├── windsurf/
│   │   ├── lovable/
│   │   ├── replit/
│   │   ├── gemini/
│   │   └── [30+ AI tools]/
│   ├── prompts-templates/           # All prompt templates
│   │   ├── prompts-chat/            # prompts.chat library
│   │   ├── vibe-coding/
│   │   ├── claude-skills/
│   │   └── optimization/
│   ├── prompts-leaked/              # Leaked system prompts
│   └── prompts-security/            # Shannon security prompts
│
├── memory/                          # TOP-LEVEL CATEGORY
│   ├── memory-claude-mem/           # Claude-Mem system
│   ├── memory-supermemory/          # Supermemory system
│   ├── memory-openviking/           # OpenViking system
│   └── memory-configs/              # All memory configurations
│
├── mcp-servers/                     # TOP-LEVEL CATEGORY
│   ├── mcp-gitnexus/                # GitNexus codebase knowledge graph
│   ├── mcp-lightpanda/              # Lightpanda browser (9x faster)
│   ├── mcp-hermes/                  # Hermes MCP server
│   ├── mcp-nano-banana/             # Nano-Banana Gemini image MCP
│   ├── mcp-openviking/              # OpenViking MCP
│   ├── mcp-pretext/                 # Pretext layout MCP
│   └── mcp-configs/                 # All MCP plugin configs
│
├── ui-design/                       # TOP-LEVEL CATEGORY
│   ├── ui-components-galaxy/        # Galaxy 3,000+ Uiverse components
│   ├── ui-components-shadcn/        # shadcn/ui React components
│   ├── ui-rules/                    # UI UX Pro Max rules (161 + 67)
│   └── ui-cursor-rules/             # All .cursorrules files
│
├── security/                        # TOP-LEVEL CATEGORY
│   ├── security-shannon/            # Shannon AI pentester
│   │   ├── apps/
│   │   ├── configs/
│   │   └── prompts/
│   └── security-reports/            # Security audit reports
│
├── reference/                       # TOP-LEVEL CATEGORY
│   └── reference-selfhosted/        # Awesome Self-Hosted catalog
│
└── [Documentation files at root]
    ├── INDEX.md
    ├── README.md
    ├── PHASE_1_SUMMARY.md
    ├── PHASE_2_COMPLETE.md
    ├── PHASE_3_COMPLETE.md
    ├── PHASE_4_PLAN.md
    ├── PHASE_5_PLAN.md
    ├── PHASE_6_PLAN.md
    ├── COMPLETE_STATUS_REPORT.md
    ├── QUICK_START_PHASES_4-6.md
    └── [other docs]
    🎯 KEY STRUCTURE PRINCIPLES:

Top-level categories = agents/, skills/, commands/, hooks/, orchestration/, prompts/, memory/, mcp-servers/, ui-design/, security/, reference/

Inside each category = PREFIX-SOURCE folders (agents-ruflo/, skills-antigravity/, etc.)

Special cases:

agents/by-role/ - Cross-repo aggregate organized by function
agents/by-interface/ - Further organized by AI platform
orchestration/ uses core-* prefix for unique system components
Super structured =

First level: WHAT (agents, skills, commands)
Second level: FROM WHERE (ruflo, omc, gsd, antigravity)
Easy navigation: cd agents/ then ls to see all agent sources
✅ BENEFITS:

Category clarity - Know immediately if you're looking for agents, skills, or commands
Source transparency - Within each category, see all sources at a glance
No deep nesting - Maximum 2 levels deep (category → source)
Easy comparison - All ruflo stuff together, all gsd stuff together
Intuitive navigation - Follows mental model: "I need an agent" → cd agents/ → ls
было : КОМПЛЕКСНЫЙ АНАЛИЗ И ПЛАН СТРУКТУРЫ COMBINED/
ЧАСТЬ 1: ОБЩИЕ ПАТТЕРНЫ МЕЖДУ РЕПОЗИТОРИЯМИ
1.1 Общие элементы во ВСЕХ категориях:
Agents (определения агентов):
* Присутствуют в: shannon, background-agents, hermes, superpowers, get-shit-done (18 агентов!), ruflo, claude-skills (16 агентов), awesome-copilot-main (230+ агентов)
* Общее: Все содержат определения AI-агентов с ролями
* Различия: Форматы (.md, .yaml), интерфейсы (Claude, Copilot, Codex), роли (debugger, planner, reviewer, executor)
Skills (навыки/возможности):
* Присутствуют в: antigravity (1,340+), claude-skills (205), superpowers (14), deer-flow (15), hermes, awesome-copilot-main, everything-claude-code
* Общее: Структура skills/ с подкатегориями
* Различия: Категоризация (по технологии vs по роли)
Commands (slash-команды):
* Присутствуют в: shannon (3), superpowers (3), get-shit-done (57!), claude-skills
* Общее: Markdown файлы с командами вида /command
* Различия: Назначение (debug, plan, review, autonomous)
Hooks (хуки жизненного цикла):
* Присутствуют в: superpowers (4), get-shit-done (5), ruflo, background-agents
* Общее: JavaScript файлы или конфиги для событий
* Различия: Типы событий (pre-commit, session-start, prompt-guard)
Prompts (промпты):
* Присутствуют в: shannon (30+ security prompts), prompts.chat (огромная библиотека), system-prompts коллекции (3 репо), vibe-coding
* Общее: Текстовые шаблоны для LLM
* Различия: Назначение (security, system, templates, leaked)
Configs (конфигурационные файлы):
* Присутствуют в: ВСЕХ репозиториях
* Общее: Plugin configs, MCP configs, IDE configs
* Различия: Интерфейс (Claude, Copilot, Cursor, Antigravity)
1.2 Уникальные элементы (только в ОДНОМ репо):
* Security testing - только shannon (apps/worker, sample-reports)
* Memory systems - claude-mem, supermemory, OpenViking
* UI components - galaxy (3000+), shadcn/ui, ui-ux-pro-max
* MCP servers - GitNexus, lightpanda, nano-banana
* Orchestration core - ruflo/core, oh-my-claudecode, 1code, vibe-kanban
* Reference data - awesome-selfhosted

ЧАСТЬ 2: СТРУКТУРА COMBINED/ - ПОЛНАЯ ИЕРАРХИЯ

Code

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
│       └── oh-my-claudecode/        # OMC system (отдельно в orchestration/)
│
├── orchestration/                   # Системы оркестрации
│   ├── ruflo/                       # RuFlo v3.5 enterprise
│   │   ├── core/                    # Ядро системы
│   │   ├── plugin/                  # Plugin система
│   │   ├── versions/                # v2/, v3/
│   │   └── docs/
│   ├── oh-my-claudecode/            # OMC multi-agent
│   │   ├── agents/                  # 19 специализированных агентов
│   │   ├── skills/                  # OMC skills
│   │   ├── commands/
│   │   └── docs/
│   ├── get-shit-done/               # GSD meta-prompting
│   │   ├── agents/                  # 18 GSD agents
│   │   ├── commands/                # 57 commands!
│   │   └── hooks/
│   ├── superpowers/                 # Superpowers workflow
│   │   ├── skills/                  # 14 workflow skills
│   │   ├── agents/
│   │   ├── commands/
│   │   └── hooks/
│   ├── deer-flow/                   # ByteDance super-agent
│   │   ├── backend/
│   │   ├── frontend/
│   │   └── skills/public/           # 15 skills
│   ├── 1code/                       # Desktop app
│   ├── vibe-kanban/                 # Kanban для agents
│   └── workflows/                   # Общие workflow паттерны
│       └── terraform/               # Infrastructure code
│
├── skills/                          # ВСЕ skills из всех репо
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
│   │   ├── superpowers/             # 14 workflow skills
│   │   │   ├── brainstorming/
│   │   │   ├── writing-plans/
│   │   │   ├── subagent-driven-development/
│   │   │   ├── test-driven-development/
│   │   │   └── ...
│   │   ├── deer-flow/               # 15 ByteDance skills
│   │   ├── hermes/                  # Hermes skills
│   │   │   ├── builtin/
│   │   │   └── optional/
│   │   ├── awesome-copilot/         # Copilot skills
│   │   ├── awesome-claude-code/     # Curated skills
│   │   ├── everything-claude-code/  # Hackathon winner
│   │   └── ruflo/                   # RuFlo skills
│   ├── seo/                         # SEO & Marketing
│   │   ├── claude-seo/              # SEO audit skill
│   │   └── claude-skills-marketing/ # Marketing skills
│   ├── research/                    # Research skills
│   │   ├── deer-flow-deep-research/
│   │   ├── deer-flow-github-research/
│   │   └── consulting-analysis/
│   ├── data-analysis/               # Data analysis
│   │   ├── deer-flow-data-analysis/
│   │   ├── chart-visualization/
│   │   └── claude-skills-finance/
│   ├── design/                      # Design skills
│   │   ├── deer-flow-frontend-design/
│   │   ├── deer-flow-image-generation/
│   │   └── ui-design/               # (see ui-design/ root)
│   ├── writing/                     # Content creation
│   │   ├── deer-flow-podcast/
│   │   ├── deer-flow-ppt/
│   │   └── documentation/
│   ├── devops/                      # DevOps skills
│   │   └── deer-flow-vercel-deploy/
│   ├── platform/                    # Platform-specific
│   │   └── obsidian/                # Obsidian skills
│   └── business/                    # Business skills
│       └── claude-skills-growth/
│
├── commands/                        # Slash-команды
│   ├── general/                     # Общие команды
│   │   └── gsd/                     # 57 GSD commands
│   │       ├── debug.md
│   │       ├── autonomous.md
│   │       ├── do.md
│   │       ├── fast.md
│   │       ├── quick.md
│   │       └── ...52 more
│   ├── plan/                        # Planning commands
│   │   ├── superpowers-brainstorm.md
│   │   ├── superpowers-execute-plan.md
│   │   └── superpowers-write-plan.md
│   ├── review/                      # Review commands
│   │   ├── shannon-pr.md
│   │   └── shannon-review.md
│   └── debug/                       # Debug commands
│       └── shannon-debug.md
│
├── hooks/                           # Lifecycle hooks
│   ├── pre-commit/                  # Git pre-commit
│   │   ├── ruflo/
│   │   └── background-agents-husky/
│   └── notification/                # Session/notification hooks
│       ├── gsd/                     # 5 GSD hooks
│       │   ├── check-update.js
│       │   ├── context-monitor.js
│       │   ├── prompt-guard.js
│       │   ├── statusline.js
│       │   └── workflow-guard.js
│       ├── superpowers/             # 4 Superpowers hooks
│       │   ├── hooks.json
│       │   ├── hooks-cursor.json
│       │   ├── run-hook.cmd
│       │   └── session-start
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
│       ├── shannon/                 # 30+ pentesting prompts
│       │   ├── exploit/
│       │   ├── vuln/
│       │   ├── recon/
│       │   ├── shared/
│       │   └── pipeline-testing/
│       └── general/
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
│   ├── shannon/                     # AI pentester
│   │   ├── apps/
│   │   │   ├── cli/
│   │   │   └── worker/
│   │   ├── configs/
│   │   ├── github/
│   │   └── README.md
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


ЧАСТЬ 3: ПЛАН МИГРАЦИИ (что откуда куда)
3.1 Agents Migration
FROM → TO:

Code

Agents/shannon/claude/                          → COMBINED/agents/by-interface/claude/shannon/
Agents/background-agents/AGENTS.md              → COMBINED/agents/orchestrators/background-agents/
Agents/hermes-agent/AGENTS.md                   → COMBINED/agents/orchestrators/hermes/
Orchestration/superpowers/agents/               → COMBINED/agents/by-role/reviewer/
Orchestration/get-shit-done/agents/             → COMBINED/agents/by-role/ (распределить по ролям)
Orchestration/ruflo/agents/                     → COMBINED/agents/by-role/ + by-interface/claude/ruflo/
Orchestration/oh-my-claudecode/agents/          → COMBINED/orchestration/oh-my-claudecode/agents/
Skills/claude-skills/agents/                    → COMBINED/agents/by-role/ (распределить)
COMBINED/agents/by-interface/agents-copilot/_github/agents/     → COMBINED/agents/by-interface/copilot/awesome-copilot/
Skills/antigravity-awesome-skills/_agents/      → COMBINED/agents/by-interface/antigravity/
Правило сортировки по ролям:
* *debugger* → agents/by-role/debugger/
* *planner* → agents/by-role/planner/
* *reviewer*, *verifier* → agents/by-role/reviewer/
* *executor*, *coder* → agents/by-role/coder/
* *architect* → agents/by-role/architect/
* *tester*, *qa* → agents/by-role/tester/
* *security* → agents/by-role/security/
* *ui-*, *designer* → agents/by-role/ui-specialist/
* *writer*, *documentation* → agents/by-role/writer/
* *researcher*, *analyst* → agents/by-role/researcher/
3.2 Orchestration Migration

Code

Orchestration/ruflo/                            → COMBINED/orchestration/ruflo/
Orchestration/oh-my-claudecode/                 → COMBINED/orchestration/oh-my-claudecode/
Orchestration/get-shit-done/                    → COMBINED/orchestration/get-shit-done/
Orchestration/superpowers/                      → COMBINED/orchestration/superpowers/
Orchestration/deer-flow/                        → COMBINED/orchestration/deer-flow/
Orchestration/1code/                            → COMBINED/orchestration/1code/
Orchestration/vibe-kanban/                      → COMBINED/orchestration/vibe-kanban/
Agents/background-agents/terraform/             → COMBINED/orchestration/workflows/terraform/
3.3 Skills Migration

Code

Skills/antigravity-awesome-skills/skills/       → COMBINED/skills/development/antigravity/
Skills/claude-skills/engineering*/              → COMBINED/skills/development/claude-skills/
Skills/claude-skills/marketing-skill/           → COMBINED/skills/seo/claude-skills-marketing/
Skills/claude-skills/finance/                   → COMBINED/skills/skills-data-analysis/claude-skills-finance/
Skills/claude-skills/business-growth/           → COMBINED/skills/skills-business/claude-skills-growth/
Skills/superpowers/skills/                      → COMBINED/skills/development/superpowers/
Skills/deer-flow/skills/public/                 → COMBINED/skills/ (распределить по типам)
Skills/hermes-agent/skills/                     → COMBINED/skills/development/hermes/builtin/
Skills/hermes-agent/optional-skills/            → COMBINED/skills/development/hermes/optional/
Skills/awesome-copilot-main/skills/             → COMBINED/skills/development/awesome-copilot/
Skills/awesome-claude-code/                     → COMBINED/skills/development/awesome-claude-code/
Skills/everything-claude-code/                  → COMBINED/skills/development/everything-claude-code/
Skills/claude-seo/                              → COMBINED/skills/seo/claude-seo/
Skills/obsidian-skills/                         → COMBINED/skills/skills-platform/obsidian/
3.4 Commands Migration

Code

Agents/shannon/claude/commands/                 → COMBINED/commands/ (по типу)
Orchestration/superpowers/commands/             → COMBINED/commands/plan/
Orchestration/get-shit-done/commands/gsd/       → COMBINED/commands/general/gsd/
Skills/claude-skills/commands/                  → COMBINED/commands/general/
3.5 Hooks Migration

Code

Orchestration/superpowers/hooks/                → COMBINED/hooks/notification/superpowers/
Orchestration/get-shit-done/hooks/              → COMBINED/hooks/notification/gsd/
Orchestration/ruflo/githooks/                   → COMBINED/hooks/pre-commit/ruflo/
Agents/background-agents/_husky/                → COMBINED/hooks/pre-commit/background-agents/
3.6 Prompts Migration

Code

Agents/shannon/apps/worker/prompts/             → COMBINED/prompts/security/security-shannon/
Prompts/prompts.chat/                           → COMBINED/prompts/templates/prompts-chat/
Prompts/system-prompts-and-models*/             → COMBINED/prompts/system-prompts/ (merge)
Prompts/system-prompts/                         → COMBINED/prompts/system-prompts/ (merge)
Prompts/system_prompts_leaks/                   → COMBINED/prompts/leaked/
Prompts/optimization/                           → COMBINED/prompts/templates/optimization/
Prompts/vibe-coding/                            → COMBINED/prompts/templates/vibe-coding/
Prompts/vibe-coding-prompt-template/            → COMBINED/prompts/templates/vibe-coding-template/
Skills/claude-skills/templates/                 → COMBINED/prompts/templates/claude-skills-templates/
3.7 Memory Migration

Code

COMBINED/memory/memory-claude-mem/                               → COMBINED/memory/claude-mem/
Tools/supermemory/                              → COMBINED/memory/supermemory/
COMBINED/mcp-servers/mcp-openviking/                               → COMBINED/memory/openviking/
MEMORY_SETUP.md                                 → COMBINED/memory/configs/
3.8 MCP Servers Migration

Code

Tools/GitNexus/                                 → COMBINED/mcp-servers/gitnexus/
COMBINED/mcp-servers/mcp-lightpanda/ (lightpanda)                     → COMBINED/mcp-servers/lightpanda/
Tools/nano-banana-2-mcp/                        → COMBINED/mcp-servers/nano-banana/
COMBINED/mcp-servers/mcp-pretext/                                  → COMBINED/mcp-servers/pretext/
Agents/hermes-agent/mcp_serve.py                → COMBINED/mcp-servers/hermes/
Orchestration/superpowers/claude-plugin/        → COMBINED/mcp-servers/configs/superpowers-plugin/
Orchestration/ruflo/claude-plugin/              → COMBINED/mcp-servers/configs/ruflo-plugin/
Skills/antigravity*/_claude-plugin/             → COMBINED/mcp-servers/configs/antigravity-plugin/
3.9 Security Migration

Code

Agents/shannon/                                 → COMBINED/security/security-shannon/
Agents/shannon/sample-reports/                  → COMBINED/security/security-reports/shannon-samples/
3.10 UI/UX Migration

Code

UI-UX/galaxy/                                   → COMBINED/ui-design/ui-components-galaxy/
COMBINED/ui-design/ui-components-shadcn/ (shadcn)                              → COMBINED/ui-design/ui-components-shadcn/
UI-UX/ui-ux-pro-max-skill/                      → COMBINED/ui-design/ui-rules/ui-ux-pro-max/
.cursorrules + .cursor/rules/                   → COMBINED/ui-design/ui-cursor-rules/
3.11 Reference Migration

Code

Reference/reference-selfhosted/            → COMBINED/reference/reference-selfhosted/

ЧАСТЬ 4: СПЕЦИАЛЬНЫЕ ПРАВИЛА ОБЪЕДИНЕНИЯ
4.1 System Prompts (3 источника → 1 папка)
Источники:
1. Prompts/system-prompts-and-models-of-ai-tools/
2. Prompts/system-prompts/
3. Prompts/system_prompts_leaks/
Стратегия:

Code

COMBINED/prompts/system-prompts/
├── claude/                  # Все Claude промпты из 3 источников
├── chatgpt/                 # Все ChatGPT промпты
├── cursor/
├── copilot/
├── gemini/
└── ...30+ tools (по имени инструмента)
4.2 Deer-Flow Skills (15 skills → распределить)

Code

deer-flow/skills/public/bootstrap/              → skills/development/deer-flow-bootstrap/
deer-flow/skills/public/chart-visualization/    → skills/skills-data-analysis/
deer-flow/skills/public/consulting-analysis/    → skills/research/
deer-flow/skills/public/data-analysis/          → skills/skills-data-analysis/
deer-flow/skills/public/deep-research/          → skills/research/
deer-flow/skills/public/frontend-design/        → skills/design/ + ui-design/
deer-flow/skills/public/image-generation/       → skills/design/
deer-flow/skills/public/podcast-generation/     → skills/skills-writing/
deer-flow/skills/public/ppt-generation/         → skills/skills-writing/
deer-flow/skills/public/vercel-deploy*/         → skills/skills-devops/
4.3 Copilot Integration (awesome-copilot-main)
Структура источника:

Code

awesome-copilot-main/
├── _github/agents/         # 230+ agent files
├── cookbook/copilot-sdk/   # SDK examples (python, dotnet, go, nodejs)
├── instructions/           # Copilot instructions
└── skills/                 # Copilot-specific skills
Целевая структура:

Code

COMBINED/agents/by-interface/copilot/
├── awesome-copilot/        # Сохранить как есть все 230+ агентов
│   ├── 4.1-Beast.agent.md
│   ├── CSharpExpert.agent.md
│   └── ...228 more
├── cookbook/               # SDK examples
│   ├── python/
│   ├── dotnet/
│   ├── go/
│   └── nodejs/
└── instructions/           # Instructions

ЧАСТЬ 5: ФАЙЛЫ КОТОРЫЕ ПРОПУСКАЕМ (SKIP)
5.1 Build/Config файлы (не переносить):
* package-lock.json, pnpm-lock.yaml, yarn.lock
* node_modules/, .next/, dist/, build/
* .prettierrc, .eslintrc, biome.json
* .gitignore, .env*
* tsconfig.json, vite.config.js, turbo.json
5.2 Пустые файлы:
* Agents/background-agents/CLAUDE.md (9 bytes)
5.3 GitHub специфичные файлы (опционально):
* .github/workflows/ (CI/CD - оставить в оригинальных репо)
* .github/ISSUE_TEMPLATE/
* .github/PULL_REQUEST_TEMPLATE/

ЧАСТЬ 6: ПРИОРИТЕТ ОПЕРАЦИЙ
Фаза 1: Создание структуры папок
1. Создать все папки верхнего уровня
2. Создать подпапки второго уровня
3. Создать подпапки третьего уровня
Фаза 2: Миграция по приоритету
1. HIGH: Agents (самое важное - определения агентов)
2. HIGH: Skills (самая большая категория)
3. MEDIUM: Commands, Hooks
4. MEDIUM: Prompts
5. LOW: Orchestration (перенести как есть)
6. LOW: Memory, MCP Servers, Security
7. LOW: UI/UX, Reference
Фаза 3: Создание индексов
1. COMBINED/INDEX.md - общая карта
2. COMBINED/agents/INDEX.md - все агенты
3. COMBINED/skills/INDEX.md - все скиллы
4. COMBINED/commands/INDEX.md - все команды

ЧАСТЬ 7: СТАТИСТИКА
Объем переноса:
* ~39,000 файлов из 31 репо
* 2,603 папки
* Agents: 280+ файлов агентов
* Skills: 1,560+ skills
* Commands: 63+ команд
* Hooks: 9+ hooks
* Prompts: 2,500+ файлов промптов
* UI Components: 3,000+ компонентов
</plan>
Now let me analyze the structure patterns across different repository types. Let me create a comprehensive analysis and plan:
<plan>
