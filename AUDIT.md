# 🔍 AUDIT.md — Vibe-Coder Arsenal Config File Map

> Generated as part of Phase 1 — Audit & Map  
> Last updated: 2026-04-01

## Summary

- **Total repos scanned:** 31
- **Total config files/folders found:** 172
- **Repos with renamed config items:** 14
- **Duplicate config files (appear in 2+ repos):** 21 types
- **Unique config files (appear in only 1 repo):** 38+

---

## Full Config File Map

### Legend
- `_prefix` = renamed from `.prefix` (e.g., `_github` → `.github`)
- `VISIBLE_prefix` = renamed from `.prefix` (e.g., `VISIBLE_git` → `.git`)
- `unhidden_prefix` = renamed from `.prefix` (e.g., `unhidden_claude` → `.claude`)

### Agents/

| Repo | Renamed File/Folder | Original Name | Content Summary |
|------|---------------------|---------------|-----------------|
| background-agents | `VISIBLE_claude/` | `.claude/` | Skills folder with Claude Code skill definitions |
| background-agents | `VISIBLE_git/` | `.git/` | Git repository data (hooks, refs, objects) |
| background-agents | `VISIBLE_github/` | `.github/` | Workflows folder for CI/CD automation |
| background-agents | `VISIBLE_gitignore` | `.gitignore` | Standard Node.js/TypeScript ignore patterns |
| background-agents | `VISIBLE_husky/` | `.husky/` | Git hooks for lint-staged pre-commit |
| background-agents | `VISIBLE_openinspect/` | `.openinspect/` | Setup script for openinspect tool |
| background-agents | `VISIBLE_prettierignore` | `.prettierignore` | Prettier ignore patterns (node_modules, build) |
| background-agents | `VISIBLE_prettierrc` | `.prettierrc` | Prettier config (semi, singleQuote, tabWidth) |
| background-agents | `VISIBLE_vercelignore` | `.vercelignore` | Vercel deployment ignore patterns |
| hermes-agent | `_github/` | `.github/` | Issue templates, PR template, workflows (tests, docker, docs) |
| hermes-agent | `_plans/` | `.plans/` | Development plans for OpenAI API server and streaming support |
| hermes-agent | `_dockerignore` | `.dockerignore` | Docker build ignore patterns |
| hermes-agent | `_env.example` | `.env.example` | Environment variables template (large, 15KB) |
| hermes-agent | `_envrc` | `.envrc` | direnv configuration |
| hermes-agent | `_gitignore` | `.gitignore` | Python/Node ignore patterns |
| hermes-agent | `_gitmodules` | `.gitmodules` | Git submodules configuration |
| shannon | `claude/` | `claude/` (not renamed) | Commands folder for Claude CLI |

### Orchestration/

| Repo | Renamed File/Folder | Original Name | Content Summary |
|------|---------------------|---------------|-----------------|
| deer-flow | `_github/` | `.github/` | Issue templates, copilot-instructions.md, workflows |
| deer-flow | `_dockerignore` | `.dockerignore` | Docker build ignore patterns |
| deer-flow | `_env.example` | `.env.example` | Environment variables template |
| deer-flow | `_gitattributes` | `.gitattributes` | Git attributes for line endings |
| deer-flow/backend | `_vscode/` | `.vscode/` | VS Code settings (extensions, settings.json) |
| deer-flow/frontend | `_vscode/` | `.vscode/` | VS Code settings for frontend |
| deer-flow/frontend | `_env.example` | `.env.example` | Frontend environment template |
| deer-flow/frontend | `_npmrc` | `.npmrc` | NPM registry config |
| deer-flow/frontend | `_prettierignore` | `.prettierignore` | Prettier ignore patterns |
| oh-my-claudecode | `claude-plugin_FOLDER_TO_COPY/` | `.claude-plugin/` | Claude plugin manifest (marketplace.json, plugin.json) |
| oh-my-claudecode | `github_FOLDER_TO_COPY/` | `.github/` | GitHub folder with CLAUDE.md |
| ruflo | `claude/` | `claude/` (not renamed) | Extensive Claude config (agents, commands, skills, settings.json, mcp.json) |
| superpowers | `claude-plugin/` | `claude-plugin/` (not renamed) | Claude plugin manifest |
| superpowers | `cursor-plugin/` | `cursor-plugin/` (not renamed) | Cursor plugin manifest |
| vibe-kanban | `github/` | `github/` (not renamed) | GitHub folder (not underscore-prefixed) |

### Reference/

| Repo | Renamed File/Folder | Original Name | Content Summary |
|------|---------------------|---------------|-----------------|
| awesome-selfhosted-master | `_github/` | `.github/` | Issue templates, PR template |

### Skills/

| Repo | Renamed File/Folder | Original Name | Content Summary |
|------|---------------------|---------------|-----------------|
| antigravity-awesome-skills | `_github/` | `.github/` | CODEOWNERS, FUNDING.yml, MAINTENANCE.md, workflows, issue templates |
| antigravity-awesome-skills | `_claude-plugin/` | `.claude-plugin/` | Plugin manifest with 1,326 skills (marketplace.json) |
| antigravity-awesome-skills | `_agents/` | `.agents/` | Plugins folder with marketplace.json |
| awesome-copilot-main | `_github/` | `.github/` | Agents, copilot-instructions.md, plugin, workflows |
| awesome-copilot-main | `_vscode/` | `.vscode/` | Extensions, mcp.json, settings.json, tasks.json |
| awesome-copilot-main | `_schemas/` | `.schemas/` | JSON schemas (collection, cookbook, tools) |
| awesome-copilot-main | `_all-contributorsrc` | `.all-contributorsrc` | Contributors configuration |
| awesome-copilot-main | `_codespellrc` | `.codespellrc` | Codespell spell-checking config |
| awesome-copilot-main | `_editorconfig` | `.editorconfig` | Editor configuration (indent, charset) |
| awesome-copilot-main | `_gitattributes` | `.gitattributes` | Git attributes |
| claude-skills | `unhidden_github/` | `.github/` | FUNDING.yml, workflows, issue templates, automation docs |
| claude-skills | `unhidden_claude/` | `.claude/` | Commands folder |
| claude-skills | `unhidden_claude-plugin/` | `.claude-plugin/` | Marketplace.json with many skills |
| claude-skills | `unhidden_codex/` | `.codex/` | Skills folder and skills-index.json |
| claude-skills | `unhidden_gemini/` | `.gemini/` | Skills folder (269 items) and skills-index.json |
| claude-skills | `unhidden_autoresearch/` | `.autoresearch/` | SEO automation folder |
| claude-skills | `unhidden_gitignore` | `.gitignore` | Standard ignore patterns |
| claude-skills | `unhidden_yamllintignore` | `.yamllintignore` | YAML linting ignore patterns |
| claude-skills/* (8 subdirs) | `unhidden_claude-plugin/` | `.claude-plugin/` | Per-skill-category plugin manifests |
| claude-skills/* (8 subdirs) | `unhidden_codex/` | `.codex/` | Per-skill-category codex definitions |
| everything-claude-code | `agents/_agents/` | `agents/.agents/` | Plugins and 29 skill subdirectories |
| everything-claude-code | `claude/` (not renamed) | - | Commands, enterprise, homunculus, rules, skills, team configs |

### Tools/

| Repo | Renamed File/Folder | Original Name | Content Summary |
|------|---------------------|---------------|-----------------|
| GitNexus | `gitnexus/_claude/` | `gitnexus/.claude/` | settings.local.json with permissions |
| GitNexus | `gitnexus-claude-plugin/_claude-plugin/` | `.claude-plugin/` | Plugin.json manifest |
| GitNexus | `eval/_env.example` | `.env.example` | Eval environment template |
| GitNexus | `cursorrules` | `.cursorrules` | Cursor AI rules (not underscore-prefixed) |
| GitNexus | `windsurfrules` | `.windsurfrules` | Windsurf AI rules (not underscore-prefixed) |
| OpenViking | `bot/_github/` | `bot/.github/` | Workflows folder |
| OpenViking | `bot/_dockerignore` | `bot/.dockerignore` | Bot Docker ignore patterns |

### UI-UX/

| Repo | Renamed File/Folder | Original Name | Content Summary |
|------|---------------------|---------------|-----------------|
| ui | `_github/` | `.github/` | Discussion templates, FUNDING, workflows, dependabot.yml, scripts |
| ui | `_claude/` | `.claude/` | settings.local.json with Bash/WebSearch permissions |
| ui | `_cursor/` | `.cursor/` | Rules folder with registry-bases-parity.mdc |
| ui | `_vscode/` | `.vscode/` | VS Code settings.json |
| ui | `_changeset/` | `.changeset/` | Changeset config for versioning (README.md, config.json) |
| ui | `_commitlintrc.json` | `.commitlintrc.json` | Commitlint configuration |
| ui | `_editorconfig` | `.editorconfig` | Editor configuration |
| ui | `_eslintignore` | `.eslintignore` | ESLint ignore patterns |
| ui | `_eslintrc.json` | `.eslintrc.json` | ESLint configuration |
| ui | `_gitignore` | `.gitignore` | Git ignore patterns |
| ui | `_kodiak.toml` | `.kodiak.toml` | Kodiak merge bot configuration |
| ui | `_npmrc` | `.npmrc` | NPM configuration |
| ui | `_nvmrc` | `.nvmrc` | Node.js version specification |
| ui | `_prettierignore` | `.prettierignore` | Prettier ignore patterns |

---

## Duplicates (Same Config in Multiple Repos)

Files that appear in more than one repo, grouped by type.

### `.github/` folder
**Found in 10 repos:**
- Agents: `hermes-agent`, `background-agents` (as VISIBLE_github)
- Orchestration: `deer-flow`
- Reference: `awesome-selfhosted-master`
- Skills: `antigravity-awesome-skills`, `awesome-copilot-main`, `claude-skills` (as unhidden_github)
- Tools: `OpenViking/bot`
- UI-UX: `ui`

**Contents vary but commonly include:**
- `workflows/` - CI/CD automation
- `ISSUE_TEMPLATE/` - Bug reports, feature requests
- `PULL_REQUEST_TEMPLATE.md` - PR guidelines
- `copilot-instructions.md` (deer-flow, awesome-copilot-main) - AI coding assistant guidance
- `CODEOWNERS`, `FUNDING.yml`, `dependabot.yml`

### `.claude/` folder
**Found in 4 repos:**
- Agents: `background-agents` (as VISIBLE_claude)
- Tools: `GitNexus/gitnexus`
- UI-UX: `ui`
- Skills: `claude-skills` (as unhidden_claude)

**Contents:**
- `settings.local.json` - Permissions and tool allowlists
- `skills/` - Claude skill definitions
- `commands/` - Custom Claude commands

### `.vscode/` folder
**Found in 4 repos:**
- Orchestration: `deer-flow/backend`, `deer-flow/frontend`
- Skills: `awesome-copilot-main`
- UI-UX: `ui`

**Contents:**
- `settings.json` - Editor settings
- `extensions.json` - Recommended extensions
- `mcp.json` - MCP configuration (awesome-copilot-main)
- `tasks.json` - Build tasks (awesome-copilot-main)

### `.claude-plugin/` folder
**Found in 4+ repos:**
- Skills: `antigravity-awesome-skills`, `claude-skills` (+ 8 subdirectories)
- Tools: `GitNexus/gitnexus-claude-plugin`
- Orchestration: `oh-my-claudecode` (as claude-plugin_FOLDER_TO_COPY)

**Contents:**
- `plugin.json` - Plugin metadata (name, version, description, author)
- `marketplace.json` - Skill marketplace listing

### `.cursor/` folder
**Found in 1 repo:**
- UI-UX: `ui`

**Contents:**
- `rules/` - MDC rule files for cursor behavior

### `copilot-instructions.md`
**Found in 2 repos:**
- Orchestration: `deer-flow/_github/`
- Skills: `awesome-copilot-main/_github/`

**Purpose:** Repository-specific instructions for GitHub Copilot

### `.gitignore`
**Found (renamed) in 3 repos:**
- Agents: `hermes-agent` (as _gitignore), `background-agents` (as VISIBLE_gitignore)
- UI-UX: `ui` (as _gitignore)
- Skills: `claude-skills` (as unhidden_gitignore)

### `.editorconfig`
**Found in 2 repos:**
- Skills: `awesome-copilot-main` (as _editorconfig)
- UI-UX: `ui` (as _editorconfig)

### `.env.example`
**Found in 4 repos:**
- Agents: `hermes-agent` (as _env.example)
- Orchestration: `deer-flow` (as _env.example), `deer-flow/frontend` (as _env.example)
- Tools: `GitNexus/eval` (as _env.example), `GitNexus/gitnexus` (as _env.example)

### `CLAUDE.md` / `AGENTS.md`
**Found in 26+ repos (not renamed, but key config files):**
- Nearly every repo has one or both at the root level
- Some repos have them in subdirectories as well
- Many repos symlink `CLAUDE.md` → `AGENTS.md`

### `mcp.json`
**Found in 5+ repos:**
- Skills: `awesome-copilot-main/_vscode/`, `everything-claude-code/`
- Orchestration: `oh-my-claudecode/`, `ruflo/claude/`
- Tools: `GitNexus/`, `claude-mem/`

### `plugin.json`
**Found in 12+ repos:**
- Skills: `antigravity-awesome-skills`, `claude-seo`, `everything-claude-code`, `obsidian-skills`
- Tools: `GitNexus`, `claude-mem`, `nano-banana-2-mcp`
- Orchestration: `oh-my-claudecode`, `ruflo`, `superpowers`
- UI-UX: `ui-ux-pro-max-skill`

### `settings.json` (claude)
**Found in 5+ repos:**
- Orchestration: `ruflo/claude/`
- Prompts: `prompts.chat/claude/`
- Tools: `claude-mem/claude/`

### Skill Folders
**`skills/` folder found in 15+ repos:**
Common across agents, orchestration, and skill repositories.

---

## Unique Files (Appear in Only One Repo)

| Folder | Repo | File | Notes |
|--------|------|------|-------|
| Agents | background-agents | `VISIBLE_husky/` | Git pre-commit hooks with lint-staged |
| Agents | background-agents | `VISIBLE_openinspect/` | OpenInspect setup script |
| Agents | background-agents | `VISIBLE_vercelignore` | Vercel deployment ignore |
| Agents | hermes-agent | `_plans/` | Development plans (.plans folder) |
| Agents | hermes-agent | `_envrc` | direnv configuration |
| Agents | hermes-agent | `_gitmodules` | Git submodules |
| Skills | antigravity-awesome-skills | `_agents/` | Agent plugins marketplace |
| Skills | antigravity-awesome-skills | `_github/MAINTENANCE.md` | Detailed repo maintenance guide |
| Skills | awesome-copilot-main | `_schemas/` | JSON schemas for validation |
| Skills | awesome-copilot-main | `_all-contributorsrc` | All-contributors config |
| Skills | awesome-copilot-main | `_codespellrc` | Spell-checking config |
| Skills | awesome-copilot-main | `_github/agents/` | Agentic workflow definitions |
| Skills | awesome-copilot-main | `_github/plugin/` | GitHub plugin marketplace |
| Skills | claude-skills | `unhidden_gemini/` | Gemini-specific skills (269 skills!) |
| Skills | claude-skills | `unhidden_codex/` | Codex-specific skills |
| Skills | claude-skills | `unhidden_autoresearch/` | SEO automation tools |
| Skills | claude-skills | `unhidden_yamllintignore` | YAML lint ignore patterns |
| Skills | everything-claude-code | `agents/_agents/skills/` | 29 specialized skill categories |
| Skills | everything-claude-code | `codex-plugin/` | OpenAI Codex plugin |
| Tools | GitNexus | `cursorrules` | Cursor AI behavior rules |
| Tools | GitNexus | `windsurfrules` | Windsurf AI behavior rules |
| UI-UX | ui | `_changeset/` | Changeset versioning config |
| UI-UX | ui | `_commitlintrc.json` | Commit message linting |
| UI-UX | ui | `_kodiak.toml` | Kodiak auto-merge bot |
| UI-UX | ui | `_nvmrc` | Node version manager config |
| UI-UX | ui | `_cursor/rules/` | Cursor behavior rules (MDC format) |

---

## Non-Renamed but Important Config Patterns

Several repos have config folders/files that were NOT renamed (no underscore/VISIBLE prefix). These are **intentionally visible** in the original repos:

| Folder | Repo | Pattern | Notes |
|--------|------|---------|-------|
| Multiple | Various | `claude/` | Claude config folder (not .claude) |
| Multiple | Various | `claude-plugin/` | Plugin manifest folder |
| Multiple | Various | `cursor/` | Cursor config folder |
| Multiple | Various | `github/` | GitHub folder (not .github) |
| Multiple | Various | `skills/` | Skills definitions folder |
| Multiple | Various | `agents/` | Agent definitions folder |
| Multiple | Various | `commands/` | CLI command definitions |
| Multiple | Various | `hooks/` | Git/tool hooks |
| Tools | GitNexus | `cursorrules`, `windsurfrules` | AI rules files |
| Tools | GitNexus | `prettierignore`, `prettierrc` | Prettier config |

---

## Notes for Phase 2 — Merge Considerations

### High-Value Files to Merge
1. **`copilot-instructions.md`** - Combine guidance from deer-flow and awesome-copilot-main
2. **`.claude/settings.local.json`** - Merge permission allowlists from ui and GitNexus
3. **`plugin.json` / `marketplace.json`** - Create unified plugin manifest
4. **`mcp.json`** - Combine MCP server configurations
5. **`CLAUDE.md` / `AGENTS.md`** - Create comprehensive agent instructions

### Skill Categories to Consolidate
From `claude-skills` and `everything-claude-code`:
- api-design, backend-patterns, frontend-patterns
- coding-standards, documentation-lookup
- deep-research, market-research
- security-review, tdd-workflow
- 29 specialized categories in everything-claude-code

### Workflow Templates to Review
From `_github/workflows/`:
- CI/CD patterns (tests, builds, linting)
- Publishing workflows (npm, pages)
- Issue/PR automation
- Security scanning

### Potential Conflicts
- Different `.prettierrc` configurations (check consistency)
- Overlapping skill definitions across repos
- Different permission models in settings.local.json
- Naming convention variations (claude vs .claude, plugin vs .claude-plugin)

### Gemini Integration Opportunity
`claude-skills/unhidden_gemini/` contains 269 Gemini-specific skills - consider cross-platform compatibility.

### Recommended Merge Priority
1. **Core configs**: `CLAUDE.md`, `AGENTS.md`, `mcp.json`
2. **Skills**: Deduplicate and merge skill definitions
3. **Plugins**: Unified marketplace.json
4. **Workflows**: Select best CI/CD patterns
5. **Editor configs**: Standardize .vscode, .cursor settings

---

## Statistics Summary

| Category | Count |
|----------|-------|
| Total folders renamed with `_` prefix | 21 |
| Total folders renamed with `VISIBLE_` prefix | 9 |
| Total folders renamed with `unhidden_` prefix | 64+ |
| Total files renamed with `_` prefix | 24 |
| Total files renamed with `VISIBLE_` prefix | 5 |
| Total `CLAUDE.md` files found | 35+ |
| Total `AGENTS.md` files found | 23+ |
| Total `plugin.json` files found | 14 |
| Total `mcp.json` files found | 7 |
| Total `skills/` folders found | 34 |

---

## Phase 3 — COMBINED/ Directory (Created 2026-04-01)

The `COMBINED/` directory was created as a standalone, copy-ready collection of all unified configs.

| Subfolder | Contents | Source | Files |
|-----------|----------|--------|-------|
| `claude/COMBINED_CLAUDE.md` | Master Claude instructions | `.claude/CLAUDE.md` | 1 |
| `claude/COMBINED_SETTINGS.json` | Settings with hooks, swarm, agents | `.claude/settings.json` | 1 |
| `claude/COMBINED_COMMANDS/` | All commands (agents, swarm, memory, etc.) | `.claude/commands/` | 182 |
| `claude/COMBINED_SKILLS/` | All skill packages | `.claude/skills/` | 39 dirs |
| `copilot/COMBINED_COPILOT_INSTRUCTIONS.md` | Master Copilot instructions | `.github/copilot-instructions.md` | 1 |
| `cursor/COMBINED_CURSORRULES` | Master cursor rules | `.cursorrules` | 1 |
| `cursor/COMBINED_CURSOR_RULES/` | Category-specific rules | `.cursor/rules/` | 1 |
| `antigravity/COMBINED_SKILLS/` | Skills marketplace | `.antigravity/skills/` | 2 |
| `antigravity/COMBINED_HOOKS/` | Hook documentation | `.antigravity/hooks/` | 1 |
| `antigravity/COMBINED_PLUGINS/` | Plugin marketplace | `.antigravity/plugins/` | 1 |
| `prompts/COMBINED_ALL_PROMPTS.md` | All prompts searchable | `Prompts/COMBINED_PROMPTS.md` | 1 |
| `ui/COMBINED_DESIGN_SYSTEM.md` | Master design reference | `UI-UX/COMBINED_DESIGN_SYSTEM.md` | 1 |
| `orchestration/COMBINED_ORCHESTRATION.md` | 5 orchestration systems | `ORCHESTRATION.md` | 1 |
| `memory/COMBINED_MEMORY_SETUP.md` | 3 memory systems | `MEMORY_SETUP.md` | 1 |

**Totals:** 238 files across 74 directories.

---

*End of Audit Report*

