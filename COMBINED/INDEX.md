# 📋 ULTRACAR INDEX — Полная карта всех 31 репозиториев

> Этот файл — результат ручного чтения каждого репо. Используй его как reference чтобы не перечитывать всё заново.

---

## 📁 REPO 1: Agents/shannon/
**Описание:** AI-pentester для веб-приложений от Keygraph. Автономно находит уязвимости и создаёт реальные эксплойты.
**README:** 936 строк | **CLAUDE.md:** 245 строк | **Лицензия:** AGPL-3.0

### Файлы (21 файлов + 7 папок):
| Файл | Размер | Тип/Роль | Куда в COMBINED |
|------|--------|----------|-----------------|
| `CLAUDE.md` | 15.6kb | Инструкции для Claude | `agents/by-interface/claude/` |
| `README.md` | 40.7kb | Документация | `security/shannon/` |
| `SHANNON-PRO.md` | 26.8kb | Pro-версия описание | `security/shannon/` |
| `COVERAGE.md` | 8.8kb | Покрытие уязвимостей | `security/shannon/` |
| `Dockerfile` | 5.4kb | Docker конфиг | `security/shannon/` |
| `docker-compose.yml` | 1.8kb | Docker compose | `security/shannon/` |
| `entrypoint.sh` | 524b | Docker entrypoint | `security/shannon/` |
| `package.json` | 673b | Node.js config | `security/shannon/` |
| `biome.json` | 851b | Linter config | `security/shannon/` |
| `tsconfig.base.json` | 676b | TS config | `security/shannon/` |
| `turbo.json` | 361b | Turborepo config | `security/shannon/` |
| `pnpm-lock.yaml` | 82kb | Lock file | ❌ SKIP (lock file) |
| `pnpm-workspace.yaml` | 77b | Workspace config | `security/shannon/` |

### Подпапки:
| Папка | Содержимое | Куда в COMBINED |
|-------|------------|-----------------|
| `claude/commands/debug.md` (6.3kb) | Команда /debug | `commands/debug/` |
| `claude/commands/pr.md` (2.8kb) | Команда /pr | `commands/review/` |
| `claude/commands/review.md` (7.8kb) | Команда /review | `commands/review/` |
| `sample-reports/` (3 файла, ~103kb) | Отчёты пентестов | `security/reports/` |
| `apps/worker/prompts/` (13 .txt файлов) | Промпты для агентов exploit/vuln/recon | `prompts/security/` |
| `apps/worker/prompts/shared/` (4 файла) | Общие промпт-части | `prompts/security/shared/` |
| `apps/worker/prompts/pipeline-testing/` (~12 файлов) | Тестовые промпты | `prompts/security/pipeline-testing/` |
| `apps/worker/configs/` (2 файла) | config-schema.json + example | `security/shannon/configs/` |
| `apps/cli/` | CLI код (TypeScript source) | `security/shannon/apps/cli/` |
| `apps/worker/src/` | Worker код (TypeScript source) | `security/shannon/apps/worker/` |
| `github/workflows/` (4 yml файла) | CI/CD | `security/shannon/github/` |
| `github/ISSUE_TEMPLATE/` (2 yml) | Issue шаблоны | `security/shannon/github/` |

---

## 📁 REPO 2: Agents/background-agents/
**Описание:** Open-source background coding agent (Open-Inspect). Работает пока ты спишь — создаёт PR, мультиплеер, Claude + Codex.
**README:** 208 строк | **CLAUDE.md:** 9 байт (пустой) | **AGENTS.md:** 7.8kb | **Лицензия:** MIT

### Файлы (11 файлов + 9 папок):
| Файл | Размер | Тип/Роль | Куда в COMBINED |
|------|--------|----------|-----------------|
| `AGENTS.md` | 7.8kb | Определения агентов | `agents/orchestrators/background-agents/` |
| `CLAUDE.md` | 9b | Пустой | ❌ SKIP |
| `README.md` | 10.8kb | Документация | `agents/orchestrators/background-agents/` |
| `VISIBLE_gitignore` | 1.1kb | Gitignore | ❌ SKIP |
| `VISIBLE_prettierrc` | 295b | Prettier config | ❌ SKIP |
| `eslint.config.js` | 3kb | ESLint config | ❌ SKIP |
| `package.json` | 1.5kb | Node config | `agents/orchestrators/background-agents/` |
| `package-lock.json` | 702kb | Lock file | ❌ SKIP |

### Подпапки:
| Папка | Содержимое | Куда в COMBINED |
|-------|------------|-----------------|
| `VISIBLE_claude/skills/` | Onboarding skill | `skills/development/onboarding/` |
| `docs/` (10 .md файлов + adr/) | Setup, How It Works, Debugging, Automations и др. | `agents/orchestrators/background-agents/docs/` |
| `packages/` (8 подпапок: control-plane, github-bot, linear-bot, modal-infra, sandbox-runtime, shared, slack-bot, web) | Все пакеты платформы | `agents/orchestrators/background-agents/packages/` |
| `scripts/` (3 bash скрипта) | D1 миграция, KV→D1, Wrangler secrets | `agents/orchestrators/background-agents/scripts/` |
| `terraform/` (3 подпапки: d1, environments, modules + README) | Инфра-код | `orchestration/workflows/terraform/` |
| `VISIBLE_github/workflows/` | CI/CD | `agents/orchestrators/background-agents/workflows/` |
| `VISIBLE_husky/` | Git hooks | `hooks/pre-commit/` |
| `VISIBLE_openinspect/` | Lifecycle scripts | `agents/orchestrators/background-agents/openinspect/` |

---

## 📁 REPO 3: Agents/hermes-agent/
**Описание:** Самообучающийся AI-агент от Nous Research. Telegram/Discord/Slack. Бежит на $5 VPS.
**README:** 10.6kb | **AGENTS.md:** 20.8kb | **Лицензия:** Apache-2.0

### Файлы (37 файлов + 24 папки — огромный репо!):
| Файл | Размер | Тип/Роль | Куда в COMBINED |
|------|--------|----------|-----------------|
| `run_agent.py` | 420kb | Главный агент | `agents/orchestrators/hermes/` |
| `cli.py` | 345kb | CLI интерфейс | `agents/orchestrators/hermes/` |
| `AGENTS.md` | 20.8kb | Определения агентов | `agents/orchestrators/hermes/` |
| `batch_runner.py` | 55kb | Пакетный запуск | `agents/orchestrators/hermes/` |
| `hermes_state.py` | 50kb | Состояние агента | `agents/orchestrators/hermes/` |
| `trajectory_compressor.py` | 64kb | Сжатие траекторий | `agents/orchestrators/hermes/` |
| `mcp_serve.py` | 31kb | MCP сервер | `mcp-servers/hermes/` |
| `RELEASE_v0.5.0.md` | 32.8kb | Release notes | `agents/orchestrators/hermes/releases/` |
| `cli-config.yaml.example` | 41kb | Пример конфига | `agents/orchestrators/hermes/configs/` |

### Ключевые подпапки:
| Папка | Содержимое | Куда в COMBINED |
|-------|------------|-----------------|
| `agent/` | Ядро агента (Python) | `agents/orchestrators/hermes/agent/` |
| `gateway/` | API gateway | `agents/orchestrators/hermes/gateway/` |
| `hermes_cli/` | CLI утилиты | `agents/orchestrators/hermes/cli/` |
| `optional-skills/` | Дополнительные скиллы | `skills/development/hermes-*` |
| `skills/` | Встроенные скиллы | `skills/development/hermes-builtin/` |
| `tools/` | Инструменты агента | `agents/orchestrators/hermes/tools/` |
| `honcho_integration/` | Интеграция с Honcho | `agents/orchestrators/hermes/integrations/` |
| `docs/` | Документация | `agents/orchestrators/hermes/docs/` |
| `environments/` | Env конфиги | `agents/orchestrators/hermes/environments/` |
| `cron/` | Планировщик | `agents/orchestrators/hermes/cron/` |
| `datagen-config-examples/` | Примеры конфигов | `agents/orchestrators/hermes/configs/` |

---

## 📁 REPO 4: Orchestration/superpowers/
**Описание:** Полный dev workflow — AI специт, планирует, запускает суб-агентов. 129k+ ⭐
**README:** 7.1kb

### Структура:
| Элемент | Содержимое | Куда в COMBINED |
|---------|------------|-----------------|
| `skills/` (14 папок) | brainstorming, dispatching-parallel-agents, executing-plans, finishing-a-development-branch, receiving-code-review, requesting-code-review, subagent-driven-development, systematic-debugging, test-driven-development, using-git-worktrees, using-superpowers, verification-before-completion, writing-plans, writing-skills | `skills/development/superpowers-*` |
| `agents/code-reviewer.md` (3.9kb) | Code reviewer агент | `agents/by-role/reviewer/` |
| `commands/` (3 файла) | brainstorm.md, execute-plan.md, write-plan.md | `commands/plan/` |
| `hooks/` (4 файла) | hooks.json, hooks-cursor.json, run-hook.cmd, session-start | `hooks/notification/` |
| `claude-plugin/` | Plugin конфиг | `mcp-servers/configs/` |
| `cursor-plugin/` | Cursor plugin | `agents/by-interface/cursor/` |
| `codex/` | Codex plugin | `agents/by-interface/codex/` |
| `opencode/` | OpenCode plugin | `agents/by-interface/opencode/` |

---

## 📁 REPO 5: Orchestration/get-shit-done/
**Описание:** Meta-prompting для Claude Code, Gemini CLI, Codex, Copilot, Cursor. Amazon, Google, Shopify используют.
**README:** 35kb | **CHANGELOG:** 87.6kb

### Структура:
| Элемент | Содержимое | Куда в COMBINED |
|---------|------------|-----------------|
| `agents/` **(18 агентов!)** | gsd-debugger (42.7kb!), gsd-planner (45kb!), gsd-executor (20.8kb), gsd-plan-checker (26.2kb), gsd-phase-researcher (26.4kb), gsd-verifier (24.3kb), gsd-roadmapper (18.4kb), gsd-codebase-mapper (16.5kb), gsd-project-researcher (17.5kb), gsd-ui-auditor (14.3kb), gsd-integration-checker (13.2kb), gsd-ui-researcher (13kb), gsd-ui-checker (10.4kb), gsd-user-profiler (8.5kb), gsd-research-synthesizer (7.2kb), gsd-nyquist-auditor (5.3kb), gsd-assumptions-analyzer (4.5kb), gsd-advisor-researcher (4.4kb) | `agents/by-role/` по ролям |
| `commands/gsd/` **(57 команд!)** | debug, autonomous, do, fast, quick, forensics, thread, ship, review, research-phase, plan-phase, execute-phase, и ещё 45 | `commands/general/gsd-*` |
| `hooks/` (5 файлов) | gsd-check-update.js, gsd-context-monitor.js, gsd-prompt-guard.js, gsd-statusline.js, gsd-workflow-guard.js | `hooks/notification/gsd-*` |

---

## 📁 REPO 6: Orchestration/ruflo/
**Описание:** Enterprise AI orchestration — 100+ агентов, самообучение, 6000+ коммитов.
**README:** 287kb | **CLAUDE.md:** 38.3kb | **AGENTS.md:** 21.2kb

### Структура:
| Элемент | Содержимое | Куда в COMBINED |
|---------|------------|-----------------|
| `agents/` (7 файлов) | architect.yaml, coder.yaml, reviewer.yaml, security-architect.yaml, tester.yaml, config.toml, README.md | `agents/by-interface/claude/ruflo-*` |
| `agents/skills/` | Скиллы агентов | `skills/development/ruflo-*` |
| `claude/` | Claude конфиг | `agents/by-interface/claude/` |
| `claude-plugin/` | Plugin конфиг | `mcp-servers/configs/` |
| `githooks/` | Git hooks | `hooks/pre-commit/ruflo-*` |
| `ruflo/` | Ядро системы | `orchestration/ruflo/core/` |
| `plugin/` | Plugin система | `orchestration/ruflo/plugin/` |
| `v2/`, `v3/` | Версии | `orchestration/ruflo/versions/` |

---

## 📁 REPO 7: Orchestration/deer-flow/
**Описание:** ByteDance's super-agent harness. #1 GitHub Trending.
**README:** 30.4kb | **skills/public/** — 15 скиллов

### Skills (skills/public/):
| Скилл | Описание | Куда в COMBINED |
|-------|----------|-----------------|
| `bootstrap/` | Начальная настройка | `skills/development/deer-flow-bootstrap` |
| `chart-visualization/` | Визуализация данных | `skills/data-analysis/` |
| `claude-to-deerflow/` | Интеграция Claude | `orchestration/deer-flow/` |
| `consulting-analysis/` | Консалтинг | `skills/research/` |
| `data-analysis/` | Анализ данных | `skills/data-analysis/` |
| `deep-research/` | Глубокий ресерч | `skills/research/` |
| `find-skills/` | Поиск скиллов | `skills/development/` |
| `frontend-design/` | UI дизайн | `skills/design/` + `ui-design/` |
| `github-deep-research/` | GitHub ресерч | `skills/research/` |
| `image-generation/` | Генерация картинок | `skills/design/` |
| `podcast-generation/` | Подкасты | `skills/writing/` |
| `ppt-generation/` | Презентации | `skills/writing/` |
| `skill-creator/` | Создание скиллов | `skills/development/` |
| `surprise-me/` | Сюрприз | `skills/development/` |
| `vercel-deploy-claimable/` | Деплой | `skills/devops/` |

---

## 📁 REPO 8-10: oh-my-claudecode, 1code, vibe-kanban
**oh-my-claudecode:** Multi-agent orchestration для Claude Code → `orchestration/oh-my-claudecode/`
**1code:** Desktop app для Claude Code, Codex → `orchestration/1code/`
**vibe-kanban:** Kanban для coding agents → `orchestration/vibe-kanban/`

---

## 📁 REPO 11: Skills/antigravity-awesome-skills/
**Описание:** 1,340+ agentic skills. 29k+ ⭐. Самая большая коллекция скиллов.
**README:** 55.4kb | **CATALOG.md:** 384.6kb(!) | **skills_index.json:** 855.9kb

### Ключевые папки:
| Папка | Описание | Куда в COMBINED |
|-------|----------|-----------------|
| `skills/` | 1340+ скиллов в подпапках | `skills/development/antigravity-*` |
| `_agents/` | Определения агентов | `agents/by-interface/antigravity/` |
| `_claude-plugin/` | Plugin конфиг | `mcp-servers/configs/` |
| `apps/` | Приложения | `skills/development/antigravity-apps/` |
| `scripts/` | Скрипты | `skills/development/antigravity-scripts/` |
| `plugins/` | Плагины | `skills/development/antigravity-plugins/` |
| `tools/` | Утилиты | `skills/development/antigravity-tools/` |

---

## 📁 REPO 12: Skills/claude-skills/
**Описание:** 205 skills + 16 agents + 268 Python scripts. 5,200+ ⭐
**README:** 17.9kb | **CLAUDE.md:** 11kb | **26 подпапок + 16 файлов**

### Ключевые категории:
| Папка | Описание | Куда в COMBINED |
|-------|----------|-----------------|
| `agents/` | 16 агентов | `agents/by-role/` |
| `engineering/` | Инженерные скиллы | `skills/development/` |
| `engineering-team/` | Командные скиллы | `skills/development/` |
| `business-growth/` | Бизнес рост | `skills/development/` |
| `marketing-skill/` | Маркетинг | `skills/seo/` |
| `finance/` | Финансы | `skills/data-analysis/` |
| `documentation/` | Документация | `skills/writing/` |
| `product-team/` | Продуктовые скиллы | `skills/development/` |
| `scripts/` | 268 Python CLI скриптов | `skills/development/claude-skills-scripts/` |
| `commands/` | Slash commands | `commands/general/` |
| `orchestration/` | Оркестрация | `orchestration/` |
| `standards/` | Стандарты | `skills/development/` |
| `templates/` | Шаблоны | `prompts/templates/` |
| `unhidden_claude/` | Claude конфиг | `agents/by-interface/claude/` |

---

## 📁 REPO 13-17: Skills (остальные)
| Репо | Описание | Куда |
|------|----------|------|
| `everything-claude-code/` | Anthropic Hackathon Winner, 50k+ ⭐ | `skills/development/everything-cc-*` |
| `awesome-copilot-main/` | Agents + skills для Copilot | `agents/by-interface/copilot/` |
| `awesome-claude-code/` | Curated list скиллов Claude Code | `skills/development/awesome-cc-*` |
| `claude-seo/` | SEO audit skill | `skills/seo/claude-seo-*` |
| `obsidian-skills/` | Скиллы для Obsidian | `skills/platform/obsidian-*` |

---

## 📁 REPO 18-21: Prompts
| Репо | Описание | Куда |
|------|----------|------|
| `system-prompts-and-models-of-ai-tools/` | Системные промпты 30+ AI-инструментов | `prompts/system-prompts/[tool]/` |
| `system-prompts/` | Ещё коллекция промптов | `prompts/system-prompts/[tool]/` |
| `system_prompts_leaks/` | Утечки промптов | `prompts/leaked/` |
| `prompts.chat/` | 143k⭐ библиотека промптов | `prompts/templates/` |
| `optimization/` | Оптимизация промптов | `prompts/templates/optimization/` |
| `vibe-coding/` | Вайб-кодинг промпты | `prompts/templates/vibe-coding/` |
| `vibe-coding-prompt-template/` | Шаблон для MVP | `prompts/templates/vibe-coding-template/` |

---

## 📁 REPO 22-28: Tools
| Репо | Описание | Куда |
|------|----------|------|
| `claude-mem/` | Persistent memory для Claude | `memory/claude-mem/` |
| `supermemory/` | #1 memory benchmark | `memory/supermemory/` |
| `GitNexus/` | Codebase knowledge graph | `mcp-servers/gitnexus/` |
| `browser/` (lightpanda) | AI browser, Zig, 9x faster | `mcp-servers/lightpanda/` |
| `OpenViking/` | ByteDance context DB | `mcp-servers/openviking/` |
| `nano-banana-2-mcp/` | Gemini image MCP | `mcp-servers/nano-banana/` |
| `pretext/` | Text layout library | `mcp-servers/pretext/` |

---

## 📁 REPO 29-31: Reference + UI-UX
| Репо | Описание | Куда |
|------|----------|------|
| `awesome-selfhosted-master/` | Mega-list self-hosted tools | `prompts/templates/selfhosted/` |
| `ui-ux-pro-max-skill/` | 161 rules + 67 styles | `ui-design/rules/` |
| `galaxy/` | 3000+ UI компонентов | `ui-design/components/galaxy/` |
| `ui/` (shadcn) | Компоненты React | `ui-design/components/shadcn/` |

---

## 📁 Root config files
| Файл | Куда |
|------|------|
| `.cursorrules` (5.7kb) | `ui-design/cursor-rules/` |
| `.cursor/rules/` | `ui-design/cursor-rules/` |
| `.antigravity/` | `skills/development/antigravity-root/` |
| `ORCHESTRATION.md` (12.3kb) | `orchestration/` |
| `MEMORY_SETUP.md` (11kb) | `memory/configs/` |

---

## 🚀 ЭТАП 2: УМНОЕ СЛИЯНИЕ И РЕОРГАНИЗАЦИЯ
- **Реорганизация**: Некорректно вложенные агенты (`claude-skills-agents` и `ruflo-agents`) перемещены непосредственно в соответствующие папки ролей (например, `COMBINED/agents/by-role/manager/`).
- **Слияние**: Уникальные специализации (напр. `gsd-ui-checker` и `gsd-integration-checker`, или `cs-ceo-advisor`) сохранены отдельными файлами в рамках их папок ролей, согласно правилу "специализированные роли остаются отдельно".
- Полных 1-к-1 дубликатов (например, два одинаковых Markdown файла "tester") между репозиториями не оказалось; все агенты имеют свои уникальные функции, интерфейсы (md vs yaml) или промпты.

## 📊 ИТОГО:
- **31 репозиторий** прочитано
- **~18 агентов** (GSD) + agents из 5 других репо
- **~1,400+ скиллов** (antigravity) + 205 (claude-skills) + 14 (superpowers) + 15 (deer-flow) + extras
- **57 slash-команд** (GSD) + 3 (superpowers) + 3 (shannon)
- **30+ системных промптов** утёкших AI-инструментов
- **5 hooks** (GSD) + 4 (superpowers)
- **3000+ UI компонентов** (galaxy)
