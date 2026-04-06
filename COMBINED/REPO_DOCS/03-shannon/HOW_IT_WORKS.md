─────────────────────────────────────────────────────────

# shannon — How It Works

Original repo: https://github.com/KeygraphHQ/shannon
Stars: 35k ⭐
Category: Security / Agents
Local path in vibe-coder: Agents/shannon/
License: MIT

## What it does (plain language for vibe-coders)

Shannon is an AI pentester that automatically analyzes source code, identifies vulnerabilities, and builds real exploits. It provides automated security workflows, effectively acting as an intelligent cyber-security analyst running against target projects.

## How the AI reads this repo (startup sequence)

Step 1: AI reads `CLAUDE.md` → learns custom testing commands and debug flows.\nStep 2: AI reads `SHANNON-PRO.md` → learns about advanced features and deployment pipelines.\nStep 3: AI uses specific prompt templates in `apps/worker/prompts/` to define its execution rules, scopes, and exploitation strategies.

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|------------|--------------|
| .claude/commands/debug.md | config/skill | Part of .claude component |
| .claude/commands/pr.md | config/skill | Part of .claude component |
| .claude/commands/review.md | config/skill | Part of .claude component |
| .dockerignore | file | Root configuration or documentation |
| .env.example | file | Root configuration or documentation |
| .gitattributes | file | Root configuration or documentation |
| .github/ISSUE_TEMPLATE/bug_report.yml | file | Part of .github component |
| .github/ISSUE_TEMPLATE/feature_request.yml | file | Part of .github component |
| .github/workflows/release-beta.yml | file | Part of .github component |
| .github/workflows/release.yml | file | Part of .github component |
| .github/workflows/rollback-beta.yml | file | Part of .github component |
| .github/workflows/rollback.yml | file | Part of .github component |
| .gitignore | file | Root configuration or documentation |
| .npmrc | file | Root configuration or documentation |
| .releaserc.json | file | Root configuration or documentation |
| CLAUDE.md | config/skill | Root configuration or documentation |
| COVERAGE.md | file | Root configuration or documentation |
| Dockerfile | file | Root configuration or documentation |
| LICENSE | file | Root configuration or documentation |
| README.md | Documentation | Explains how to install and use |
| SHANNON-PRO.md | file | Root configuration or documentation |
| apps/cli/.npmignore | file | Part of apps component |
| apps/cli/README.md | Documentation | Explains how to install and use |
| apps/cli/infra/compose.yml | file | Part of apps component |
| apps/cli/infra/router-config.json | file | Part of apps component |
| apps/cli/package.json | file | Part of apps component |
| apps/cli/src/commands/build.ts | file | Part of apps component |
| apps/cli/src/commands/logs.ts | file | Part of apps component |
| apps/cli/src/commands/setup.ts | file | Part of apps component |
| apps/cli/src/commands/start.ts | file | Part of apps component |
| apps/cli/src/commands/status.ts | file | Part of apps component |
| apps/cli/src/commands/stop.ts | file | Part of apps component |
| apps/cli/src/commands/uninstall.ts | file | Part of apps component |
| apps/cli/src/commands/workspaces.ts | file | Part of apps component |
| apps/cli/src/config/resolver.ts | file | Part of apps component |
| apps/cli/src/config/writer.ts | file | Part of apps component |
| apps/cli/src/docker.ts | file | Part of apps component |
| apps/cli/src/env.ts | file | Part of apps component |
| apps/cli/src/home.ts | file | Part of apps component |
| apps/cli/src/index.ts | file | Part of apps component |
| apps/cli/src/mode.ts | file | Part of apps component |
| apps/cli/src/paths.ts | file | Part of apps component |
| apps/cli/src/splash.ts | file | Part of apps component |
| apps/cli/tsconfig.json | file | Part of apps component |
| apps/cli/tsdown.config.ts | file | Part of apps component |
| apps/worker/configs/config-schema.json | file | Part of apps component |
| apps/worker/configs/example-config.yaml | file | Part of apps component |
| apps/worker/package.json | file | Part of apps component |
| apps/worker/prompts/exploit-auth.txt | file | Part of apps component |
| apps/worker/prompts/exploit-authz.txt | file | Part of apps component |
| apps/worker/prompts/exploit-injection.txt | file | Part of apps component |
| apps/worker/prompts/exploit-ssrf.txt | file | Part of apps component |
| apps/worker/prompts/exploit-xss.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/exploit-auth.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/exploit-authz.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/exploit-injection.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/exploit-ssrf.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/exploit-xss.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/pre-recon-code.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/recon.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/report-executive.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/shared/_filesystem.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/vuln-auth.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/vuln-authz.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/vuln-injection.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/vuln-ssrf.txt | file | Part of apps component |
| apps/worker/prompts/pipeline-testing/vuln-xss.txt | file | Part of apps component |
| apps/worker/prompts/pre-recon-code.txt | file | Part of apps component |
| apps/worker/prompts/recon.txt | file | Part of apps component |
| apps/worker/prompts/report-executive.txt | file | Part of apps component |
| apps/worker/prompts/shared/_exploit-scope.txt | file | Part of apps component |
| apps/worker/prompts/shared/_rules.txt | file | Part of apps component |
| apps/worker/prompts/shared/_target.txt | file | Part of apps component |
| apps/worker/prompts/shared/_vuln-scope.txt | file | Part of apps component |
| apps/worker/prompts/shared/login-instructions.txt | file | Part of apps component |
| apps/worker/prompts/vuln-auth.txt | file | Part of apps component |
| apps/worker/prompts/vuln-authz.txt | file | Part of apps component |
| apps/worker/prompts/vuln-injection.txt | file | Part of apps component |
| apps/worker/prompts/vuln-ssrf.txt | file | Part of apps component |
| apps/worker/prompts/vuln-xss.txt | file | Part of apps component |
| apps/worker/src/ai/audit-logger.ts | file | Part of apps component |
| apps/worker/src/ai/claude-executor.ts | file | Part of apps component |
| apps/worker/src/ai/message-handlers.ts | file | Part of apps component |
| apps/worker/src/ai/models.ts | file | Part of apps component |
| apps/worker/src/ai/output-formatters.ts | file | Part of apps component |
| apps/worker/src/ai/progress-manager.ts | file | Part of apps component |
| apps/worker/src/ai/queue-schemas.ts | file | Part of apps component |
| apps/worker/src/ai/router-utils.ts | file | Part of apps component |
| apps/worker/src/ai/types.ts | file | Part of apps component |
| apps/worker/src/audit/audit-session.ts | file | Part of apps component |
| apps/worker/src/audit/index.ts | file | Part of apps component |
| apps/worker/src/audit/log-stream.ts | file | Part of apps component |
| apps/worker/src/audit/logger.ts | file | Part of apps component |
| apps/worker/src/audit/metrics-tracker.ts | file | Part of apps component |
| apps/worker/src/audit/utils.ts | file | Part of apps component |
| apps/worker/src/audit/workflow-logger.ts | file | Part of apps component |
| apps/worker/src/config-parser.ts | file | Part of apps component |
| apps/worker/src/paths.ts | file | Part of apps component |
| apps/worker/src/progress-indicator.ts | file | Part of apps component |
| apps/worker/src/scripts/generate-totp.ts | file | Part of apps component |
| apps/worker/src/scripts/save-deliverable.ts | file | Part of apps component |
| apps/worker/src/services/agent-execution.ts | agent | Part of apps component |
| apps/worker/src/services/config-loader.ts | file | Part of apps component |
| apps/worker/src/services/container.ts | file | Part of apps component |
| apps/worker/src/services/error-handling.ts | file | Part of apps component |
| apps/worker/src/services/exploitation-checker.ts | file | Part of apps component |
| apps/worker/src/services/git-manager.ts | file | Part of apps component |
| apps/worker/src/services/index.ts | file | Part of apps component |
| apps/worker/src/services/preflight.ts | file | Part of apps component |
| apps/worker/src/services/prompt-manager.ts | file | Part of apps component |
| apps/worker/src/services/queue-validation.ts | file | Part of apps component |
| apps/worker/src/services/reporting.ts | file | Part of apps component |
| apps/worker/src/session-manager.ts | file | Part of apps component |
| apps/worker/src/temporal/activities.ts | file | Part of apps component |
| apps/worker/src/temporal/activity-logger.ts | file | Part of apps component |
| apps/worker/src/temporal/shared.ts | file | Part of apps component |
| apps/worker/src/temporal/summary-mapper.ts | file | Part of apps component |
| apps/worker/src/temporal/worker.ts | file | Part of apps component |
| apps/worker/src/temporal/workflow-errors.ts | file | Part of apps component |
| apps/worker/src/temporal/workflows.ts | file | Part of apps component |
| apps/worker/src/temporal/workspaces.ts | file | Part of apps component |
| apps/worker/src/types/activity-logger.ts | file | Part of apps component |
| apps/worker/src/types/agents.ts | agent | Part of apps component |
| apps/worker/src/types/audit.ts | file | Part of apps component |
| apps/worker/src/types/config.ts | file | Part of apps component |
| apps/worker/src/types/deliverables.ts | file | Part of apps component |
| apps/worker/src/types/errors.ts | file | Part of apps component |
| apps/worker/src/types/index.ts | file | Part of apps component |
| apps/worker/src/types/metrics.ts | file | Part of apps component |
| apps/worker/src/types/result.ts | file | Part of apps component |
| apps/worker/src/utils/billing-detection.ts | file | Part of apps component |
| apps/worker/src/utils/concurrency.ts | file | Part of apps component |
| apps/worker/src/utils/file-io.ts | file | Part of apps component |
| apps/worker/src/utils/formatting.ts | file | Part of apps component |
| apps/worker/src/utils/functional.ts | file | Part of apps component |
| apps/worker/src/utils/metrics.ts | file | Part of apps component |
| apps/worker/tsconfig.json | file | Part of apps component |
| assets/Keygraph_Button.png | file | Part of assets component |
| assets/announcements.png | file | Part of assets component |
| assets/discord.png | file | Part of assets component |
| assets/github-banner.png | file | Part of assets component |
| assets/linkedin.png | file | Part of assets component |
| assets/shannon-action.gif | file | Part of assets component |
| assets/shannon-banner.png | file | Part of assets component |
| assets/shannon-screen.png | file | Part of assets component |
| biome.json | file | Root configuration or documentation |
| docker-compose.yml | file | Root configuration or documentation |
| entrypoint.sh | file | Root configuration or documentation |
| package.json | file | Root configuration or documentation |
| pnpm-lock.yaml | file | Root configuration or documentation |
| pnpm-workspace.yaml | file | Root configuration or documentation |
| repos/.gitkeep | file | Part of repos component |
| sample-reports/shannon-report-capital-api.md | file | Part of sample-reports component |
| sample-reports/shannon-report-crapi.md | file | Part of sample-reports component |
| sample-reports/shannon-report-juice-shop.md | file | Part of sample-reports component |
| shannon | file | Root configuration or documentation |
| tsconfig.base.json | file | Root configuration or documentation |
| tsconfig.json | file | Root configuration or documentation |
| turbo.json | file | Root configuration or documentation |
| workspaces/.gitkeep | file | Part of workspaces component |

## Hidden config files (CRITICAL)

These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|---------------|--------------------|---------|
| .claude/ | VISIBLE_claude/ | Claude Code configuration |
| .gitattributes | VISIBLE_gitattributes | Custom hidden file/folder |
| .dockerignore | VISIBLE_dockerignore | Custom hidden file/folder |
| .npmrc | VISIBLE_npmrc | Custom hidden file/folder |
| .releaserc.json | VISIBLE_releaserc.json | Custom hidden file/folder |
| .github/ | VISIBLE_github/ | GitHub workflows |
| .env.example | VISIBLE_env.example | Custom hidden file/folder |
| .gitignore | VISIBLE_gitignore | Git ignore rules |

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|-----------------------|-----|
| README.md | COMBINED/REPO_DOCS/03-shannon/ | Documentation |
| .claude/commands/pr.md | COMBINED/agents/by-role/shannon/ | Core agent files |
| .claude/commands/review.md | COMBINED/agents/by-role/shannon/ | Core agent files |
| CLAUDE.md | COMBINED/prompts/system/ | System instructions |
| .claude/commands/debug.md | COMBINED/agents/by-role/shannon/ | Core agent files |

## Key insights for ULTRACAR integration

- Dedicated heavily to Security/Pentesting rather than general development.\n- Robust structured workflows via Temporal, representing a very advanced multi-agent orchestrator tailored for finding vulnerabilities.\n- Integrates out-of-the-box pre-written prompts for explicit vulnerability classes (e.g., SSRF, XSS, injection).

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
mv VISIBLE_claude/ .claude/
mv VISIBLE_gitattributes .gitattributes
mv VISIBLE_dockerignore .dockerignore
mv VISIBLE_npmrc .npmrc
mv VISIBLE_releaserc.json .releaserc.json
mv VISIBLE_github/ .github/
mv VISIBLE_env.example .env.example
mv VISIBLE_gitignore .gitignore
```

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md
─────────────────────────────────────────────────────────
