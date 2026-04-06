─────────────────────────────────────────────────────────

# background-agents — How It Works

Original repo: https://github.com/ColeMurray/background-agents
Stars: 1.4k ⭐
Category: Agents
Local path in vibe-coder: Agents/background-agents/
License: MIT

## What it does (plain language for vibe-coders)

Background Agents (Open-Inspect) provides a hosted background coding agent that you can dispatch to work on tasks while you focus on other things. It integrates with GitHub, Slack, and your browser, spawning sandboxed environments that use Claude or Codex to autonomously implement PRs.

## How the AI reads this repo (startup sequence)

Step 1: AI reads `CLAUDE.md` → learns high-level commands, system setup, database migration commands, and coding conventions.
Step 2: AI reads `AGENTS.md` → learns the architecture patterns (Web Client, Control Plane, Data Plane) and WebSocket orchestration.
Step 3: AI uses `.claude/skills/onboarding/SKILL.md` to learn about the specific developer onboarding flow, triggered when the agent sets itself up.

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|------------|--------------|
| .claude/skills/onboarding/SKILL.md | config/skill | Part of .claude component |
| .github/workflows/ci.yml | file | Part of .github component |
| .github/workflows/deploy-web.yml | file | Part of .github component |
| .github/workflows/terraform.yml | file | Part of .github component |
| .gitignore | file | Root configuration or documentation |
| .husky/pre-commit | directory | Part of .husky component |
| .openinspect/setup.sh | file | Part of .openinspect component |
| .prettierignore | file | Root configuration or documentation |
| .prettierrc | file | Root configuration or documentation |
| .vercelignore | file | Root configuration or documentation |
| AGENTS.md | agent | Root configuration or documentation |
| CLAUDE.md | config/skill | Root configuration or documentation |
| CONTRIBUTING.md | file | Root configuration or documentation |
| LICENSE | file | Root configuration or documentation |
| README.md | Documentation | Explains how to install and use |
| docs/AUTOMATIONS.md | file | Part of docs component |
| docs/DEBUGGING_PLAYBOOK.md | file | Part of docs component |
| docs/GETTING_STARTED.md | file | Part of docs component |
| docs/HOW_IT_WORKS.md | file | Part of docs component |
| docs/IMAGE_PREBUILD.md | file | Part of docs component |
| docs/OPENAI_MODELS.md | file | Part of docs component |
| docs/SETUP_GUIDE.md | file | Part of docs component |
| docs/adr/0001-single-provider-scm-boundaries.md | file | Part of docs component |
| docs/adr/0002-shared-session-contracts-and-correlation-boundary.md | file | Part of docs component |
| docs/provider-contribution-checklist.md | file | Part of docs component |
| docs/ramp-inspect-agent.md | agent | Part of docs component |
| docs/shadcn-ui-integration-plan.md | file | Part of docs component |
| eslint.config.js | file | Root configuration or documentation |
| package-lock.json | file | Root configuration or documentation |
| package.json | file | Root configuration or documentation |
| packages/control-plane/Dockerfile.test | file | Part of packages component |
| packages/control-plane/README.md | Documentation | Explains how to install and use |
| packages/control-plane/package.json | file | Part of packages component |
| packages/control-plane/src/auth/crypto.test.ts | file | Part of packages component |
| packages/control-plane/src/auth/crypto.ts | file | Part of packages component |
| packages/control-plane/src/auth/github-app.test.ts | file | Part of packages component |
| packages/control-plane/src/auth/github-app.ts | file | Part of packages component |
| packages/control-plane/src/auth/github.ts | file | Part of packages component |
| packages/control-plane/src/auth/index.ts | file | Part of packages component |
| packages/control-plane/src/auth/internal.ts | file | Part of packages component |
| packages/control-plane/src/auth/openai.test.ts | file | Part of packages component |
| packages/control-plane/src/auth/openai.ts | file | Part of packages component |
| packages/control-plane/src/auth/webhook-key.test.ts | file | Part of packages component |
| packages/control-plane/src/auth/webhook-key.ts | file | Part of packages component |
| packages/control-plane/src/db/automation-store.test.ts | file | Part of packages component |
| packages/control-plane/src/db/automation-store.ts | file | Part of packages component |
| packages/control-plane/src/db/global-secrets.test.ts | file | Part of packages component |
| packages/control-plane/src/db/global-secrets.ts | file | Part of packages component |
| packages/control-plane/src/db/instrumented-d1.test.ts | file | Part of packages component |
| packages/control-plane/src/db/instrumented-d1.ts | file | Part of packages component |
| packages/control-plane/src/db/integration-settings.test.ts | file | Part of packages component |
| packages/control-plane/src/db/integration-settings.ts | file | Part of packages component |
| packages/control-plane/src/db/model-preferences.ts | file | Part of packages component |
| packages/control-plane/src/db/repo-images.test.ts | file | Part of packages component |
| packages/control-plane/src/db/repo-images.ts | file | Part of packages component |
| packages/control-plane/src/db/repo-metadata.test.ts | file | Part of packages component |
| packages/control-plane/src/db/repo-metadata.ts | file | Part of packages component |
| packages/control-plane/src/db/repo-secrets.test.ts | file | Part of packages component |
| packages/control-plane/src/db/repo-secrets.ts | file | Part of packages component |
| packages/control-plane/src/db/secrets-validation.test.ts | file | Part of packages component |
| packages/control-plane/src/db/secrets-validation.ts | file | Part of packages component |
| packages/control-plane/src/db/session-index.test.ts | file | Part of packages component |
| packages/control-plane/src/db/session-index.ts | file | Part of packages component |
| packages/control-plane/src/db/user-scm-tokens.test.ts | file | Part of packages component |
| packages/control-plane/src/db/user-scm-tokens.ts | file | Part of packages component |
| packages/control-plane/src/index.ts | file | Part of packages component |
| packages/control-plane/src/logger.ts | file | Part of packages component |
| packages/control-plane/src/realtime/events.test.ts | file | Part of packages component |
| packages/control-plane/src/realtime/events.ts | file | Part of packages component |
| packages/control-plane/src/realtime/index.ts | file | Part of packages component |
| packages/control-plane/src/router.spawn-child.test.ts | file | Part of packages component |
| packages/control-plane/src/router.ts | file | Part of packages component |
| packages/control-plane/src/routes/automations.test.ts | file | Part of packages component |
| packages/control-plane/src/routes/automations.ts | file | Part of packages component |
| packages/control-plane/src/routes/integration-settings.ts | file | Part of packages component |
| packages/control-plane/src/routes/model-preferences.ts | file | Part of packages component |
| packages/control-plane/src/routes/repo-images.ts | file | Part of packages component |
| packages/control-plane/src/routes/repos.ts | file | Part of packages component |
| packages/control-plane/src/routes/secrets.ts | file | Part of packages component |
| packages/control-plane/src/routes/shared.ts | file | Part of packages component |
| packages/control-plane/src/sandbox/client.ts | file | Part of packages component |
| packages/control-plane/src/sandbox/index.ts | file | Part of packages component |
| packages/control-plane/src/sandbox/lifecycle/decisions.test.ts | file | Part of packages component |
| packages/control-plane/src/sandbox/lifecycle/decisions.ts | file | Part of packages component |
| packages/control-plane/src/sandbox/lifecycle/manager.test.ts | file | Part of packages component |
| packages/control-plane/src/sandbox/lifecycle/manager.ts | file | Part of packages component |
| packages/control-plane/src/sandbox/provider.ts | file | Part of packages component |
| packages/control-plane/src/sandbox/providers/modal-provider.test.ts | file | Part of packages component |
| packages/control-plane/src/sandbox/providers/modal-provider.ts | file | Part of packages component |
| packages/control-plane/src/scheduler/do-fetcher-adapter.test.ts | file | Part of packages component |
| packages/control-plane/src/scheduler/do-fetcher-adapter.ts | file | Part of packages component |
| packages/control-plane/src/scheduler/durable-object.test.ts | file | Part of packages component |
| packages/control-plane/src/scheduler/durable-object.ts | file | Part of packages component |
| packages/control-plane/src/scheduler/index.ts | file | Part of packages component |
| packages/control-plane/src/session/alarm/handler.test.ts | file | Part of packages component |
| packages/control-plane/src/session/alarm/handler.ts | file | Part of packages component |
| packages/control-plane/src/session/callback-notification-service.test.ts | file | Part of packages component |
| packages/control-plane/src/session/callback-notification-service.ts | file | Part of packages component |
| packages/control-plane/src/session/contracts.test.ts | file | Part of packages component |
| packages/control-plane/src/session/contracts.ts | file | Part of packages component |
| packages/control-plane/src/session/durable-object.ts | file | Part of packages component |
| packages/control-plane/src/session/event-persistence.test.ts | file | Part of packages component |
| packages/control-plane/src/session/event-persistence.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/child-sessions.handler.test.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/child-sessions.handler.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/messages.handler.test.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/messages.handler.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/participants.handler.test.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/participants.handler.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/pull-request.handler.test.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/pull-request.handler.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/sandbox.handler.test.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/sandbox.handler.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/session-lifecycle.handler.test.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/session-lifecycle.handler.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/ws-token.handler.test.ts | file | Part of packages component |
| packages/control-plane/src/session/http/handlers/ws-token.handler.ts | file | Part of packages component |
| packages/control-plane/src/session/http/routes.test.ts | file | Part of packages component |
| packages/control-plane/src/session/http/routes.ts | file | Part of packages component |
| packages/control-plane/src/session/index.ts | file | Part of packages component |
| packages/control-plane/src/session/message-queue.test.ts | file | Part of packages component |
| packages/control-plane/src/session/message-queue.ts | file | Part of packages component |
| packages/control-plane/src/session/openai-token-refresh-service.test.ts | file | Part of packages component |
| packages/control-plane/src/session/openai-token-refresh-service.ts | file | Part of packages component |
| packages/control-plane/src/session/participant-service.test.ts | file | Part of packages component |
| packages/control-plane/src/session/participant-service.ts | file | Part of packages component |
| packages/control-plane/src/session/presence-service.test.ts | file | Part of packages component |
| packages/control-plane/src/session/presence-service.ts | file | Part of packages component |
| packages/control-plane/src/session/pull-request-service.test.ts | file | Part of packages component |
| packages/control-plane/src/session/pull-request-service.ts | file | Part of packages component |
| packages/control-plane/src/session/repository.test.ts | file | Part of packages component |
| packages/control-plane/src/session/repository.ts | file | Part of packages component |
| packages/control-plane/src/session/sandbox-events.test.ts | file | Part of packages component |
| packages/control-plane/src/session/sandbox-events.ts | file | Part of packages component |
| packages/control-plane/src/session/schema.test.ts | file | Part of packages component |
| packages/control-plane/src/session/schema.ts | file | Part of packages component |
| packages/control-plane/src/session/services/message.service.test.ts | file | Part of packages component |
| packages/control-plane/src/session/services/message.service.ts | file | Part of packages component |
| packages/control-plane/src/session/stop-execution.test.ts | file | Part of packages component |
| packages/control-plane/src/session/types.ts | file | Part of packages component |
| packages/control-plane/src/session/websocket-manager.test.ts | file | Part of packages component |
| packages/control-plane/src/session/websocket-manager.ts | file | Part of packages component |
| packages/control-plane/src/source-control/branch-resolution.test.ts | file | Part of packages component |
| packages/control-plane/src/source-control/branch-resolution.ts | file | Part of packages component |
| packages/control-plane/src/source-control/config.test.ts | file | Part of packages component |
| packages/control-plane/src/source-control/config.ts | file | Part of packages component |
| packages/control-plane/src/source-control/errors.ts | file | Part of packages component |
| packages/control-plane/src/source-control/index.ts | file | Part of packages component |
| packages/control-plane/src/source-control/providers/constants.ts | file | Part of packages component |
| packages/control-plane/src/source-control/providers/github-provider.test.ts | file | Part of packages component |
| packages/control-plane/src/source-control/providers/github-provider.ts | file | Part of packages component |
| packages/control-plane/src/source-control/providers/gitlab-provider.test.ts | file | Part of packages component |
| packages/control-plane/src/source-control/providers/gitlab-provider.ts | file | Part of packages component |
| packages/control-plane/src/source-control/providers/index.test.ts | file | Part of packages component |
| packages/control-plane/src/source-control/providers/index.ts | file | Part of packages component |
| packages/control-plane/src/source-control/providers/types.ts | file | Part of packages component |
| packages/control-plane/src/source-control/types.ts | file | Part of packages component |
| packages/control-plane/src/types.ts | file | Part of packages component |
| packages/control-plane/src/utils/models.test.ts | file | Part of packages component |
| packages/control-plane/src/utils/models.ts | file | Part of packages component |
| packages/control-plane/src/webhooks/automation-webhook.ts | file | Part of packages component |
| packages/control-plane/src/webhooks/index.ts | file | Part of packages component |
| packages/control-plane/src/webhooks/sentry.ts | file | Part of packages component |
| packages/control-plane/test/integration/apply-migrations.ts | file | Part of packages component |
| packages/control-plane/test/integration/auth.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/automation-store.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/child-session-ops.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/cleanup.ts | file | Part of packages component |
| packages/control-plane/test/integration/create-pr.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/d1-session-index.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/do-internal-routes.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/durable-object.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/env.d.ts | file | Part of packages component |
| packages/control-plane/test/integration/events-messages-list.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/global-secrets.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/helpers.ts | file | Part of packages component |
| packages/control-plane/test/integration/integration-settings.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/prompt-enqueue.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/reasoning-effort.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/repo-images.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/sandbox-events.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/scheduler-events.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/scheduler.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/session-lifecycle.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/spawn-children.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/stop-execution.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/tsconfig.json | file | Part of packages component |
| packages/control-plane/test/integration/webhooks.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/websocket-client.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/websocket-sandbox.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/worker-fetch.test.ts | file | Part of packages component |
| packages/control-plane/test/integration/ws-token-participants.test.ts | file | Part of packages component |
| packages/control-plane/tsconfig.json | file | Part of packages component |
| packages/control-plane/vitest.config.ts | file | Part of packages component |
| packages/control-plane/vitest.integration.config.ts | file | Part of packages component |
| packages/control-plane/wrangler.jsonc | file | Part of packages component |
| packages/github-bot/README.md | Documentation | Explains how to install and use |
| packages/github-bot/package.json | file | Part of packages component |
| packages/github-bot/src/github-auth.ts | file | Part of packages component |
| packages/github-bot/src/handlers.ts | file | Part of packages component |
| packages/github-bot/src/index.ts | file | Part of packages component |
| packages/github-bot/src/logger.ts | file | Part of packages component |
| packages/github-bot/src/prompts.ts | file | Part of packages component |
| packages/github-bot/src/types.ts | file | Part of packages component |
| packages/github-bot/src/utils/integration-config.ts | file | Part of packages component |
| packages/github-bot/src/utils/internal.ts | file | Part of packages component |
| packages/github-bot/src/verify.ts | file | Part of packages component |
| packages/github-bot/test/github-auth.test.ts | file | Part of packages component |
| packages/github-bot/test/handlers.test.ts | file | Part of packages component |
| packages/github-bot/test/integration-config.test.ts | file | Part of packages component |
| packages/github-bot/test/prompts.test.ts | file | Part of packages component |
| packages/github-bot/test/verify.test.ts | file | Part of packages component |
| packages/github-bot/test/webhook.test.ts | file | Part of packages component |
| packages/github-bot/tsconfig.json | file | Part of packages component |
| packages/github-bot/vitest.config.ts | file | Part of packages component |
| packages/linear-bot/INTEGRATION.md | file | Part of packages component |
| packages/linear-bot/README.md | Documentation | Explains how to install and use |
| packages/linear-bot/package.json | file | Part of packages component |
| packages/linear-bot/src/__tests__/pure-functions.test.ts | file | Part of packages component |
| packages/linear-bot/src/callbacks.helpers.test.ts | file | Part of packages component |
| packages/linear-bot/src/callbacks.ts | file | Part of packages component |
| packages/linear-bot/src/classifier/index.ts | file | Part of packages component |
| packages/linear-bot/src/classifier/repos.ts | file | Part of packages component |
| packages/linear-bot/src/completion/extractor.ts | file | Part of packages component |
| packages/linear-bot/src/index.ts | file | Part of packages component |
| packages/linear-bot/src/kv-store.test.ts | file | Part of packages component |
| packages/linear-bot/src/kv-store.ts | file | Part of packages component |
| packages/linear-bot/src/logger.ts | file | Part of packages component |
| packages/linear-bot/src/model-resolution.ts | file | Part of packages component |
| packages/linear-bot/src/plan.test.ts | file | Part of packages component |
| packages/linear-bot/src/plan.ts | file | Part of packages component |
| packages/linear-bot/src/types.ts | file | Part of packages component |
| packages/linear-bot/src/utils/crypto.test.ts | file | Part of packages component |
| packages/linear-bot/src/utils/crypto.ts | file | Part of packages component |
| packages/linear-bot/src/utils/integration-config.ts | file | Part of packages component |
| packages/linear-bot/src/utils/internal.ts | file | Part of packages component |
| packages/linear-bot/src/utils/linear-client.ts | file | Part of packages component |
| packages/linear-bot/src/webhook-handler.test.ts | file | Part of packages component |
| packages/linear-bot/src/webhook-handler.ts | file | Part of packages component |
| packages/linear-bot/tsconfig.json | file | Part of packages component |
| packages/linear-bot/vitest.config.ts | file | Part of packages component |
| packages/linear-bot/wrangler.toml | file | Part of packages component |
| packages/modal-infra/.env.example | file | Part of packages component |
| packages/modal-infra/README.md | Documentation | Explains how to install and use |
| packages/modal-infra/deploy.py | file | Part of packages component |
| packages/modal-infra/pyproject.toml | file | Part of packages component |
| packages/modal-infra/src/__init__.py | file | Part of packages component |
| packages/modal-infra/src/app.py | file | Part of packages component |
| packages/modal-infra/src/auth/__init__.py | file | Part of packages component |
| packages/modal-infra/src/cli.py | file | Part of packages component |
| packages/modal-infra/src/functions.py | file | Part of packages component |
| packages/modal-infra/src/images/__init__.py | file | Part of packages component |
| packages/modal-infra/src/images/base.py | file | Part of packages component |
| packages/modal-infra/src/log_config.py | file | Part of packages component |
| packages/modal-infra/src/registry/__init__.py | file | Part of packages component |
| packages/modal-infra/src/registry/models.py | file | Part of packages component |
| packages/modal-infra/src/registry/store.py | file | Part of packages component |
| packages/modal-infra/src/sandbox/__init__.py | file | Part of packages component |
| packages/modal-infra/src/sandbox/manager.py | file | Part of packages component |
| packages/modal-infra/src/scheduler/__init__.py | file | Part of packages component |
| packages/modal-infra/src/scheduler/image_builder.py | file | Part of packages component |
| packages/modal-infra/src/web_api.py | file | Part of packages component |
| packages/modal-infra/tests/__init__.py | file | Part of packages component |
| packages/modal-infra/tests/conftest.py | file | Part of packages component |
| packages/modal-infra/tests/test_build_sandbox.py | file | Part of packages component |
| packages/modal-infra/tests/test_code_server.py | file | Part of packages component |
| packages/modal-infra/tests/test_image_builder_v2.py | file | Part of packages component |
| packages/modal-infra/tests/test_sandbox.py | file | Part of packages component |
| packages/modal-infra/tests/test_sandbox_env_vars.py | file | Part of packages component |
| packages/modal-infra/tests/test_scheduler.py | file | Part of packages component |
| packages/modal-infra/tests/test_snapshot_store.py | file | Part of packages component |
| packages/modal-infra/tests/test_tunnel_ports.py | file | Part of packages component |
| packages/modal-infra/uv.lock | file | Part of packages component |
| packages/sandbox-runtime/pyproject.toml | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/__init__.py | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/auth/__init__.py | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/auth/github_app.py | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/auth/internal.py | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/bridge.py | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/constants.py | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/entrypoint.py | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/log_config.py | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/plugins/codex-auth-plugin.ts | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/plugins/inspect-plugin.js | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/tools/_bridge-client.js | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/tools/cancel-task.js | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/tools/get-task-status.js | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/tools/spawn-task.js | file | Part of packages component |
| packages/sandbox-runtime/src/sandbox_runtime/types.py | file | Part of packages component |
| packages/sandbox-runtime/tests/__init__.py | file | Part of packages component |
| packages/sandbox-runtime/tests/conftest.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_bridge_ack.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_bridge_event_buffer.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_bridge_git_identity.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_bridge_message_tracking.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_bridge_push.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_bridge_reconnection.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_bridge_sse.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_bridge_stop.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_code_server_supervisor.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_codex_auth_plugin_setup.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_entrypoint_build_mode.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_entrypoint_urls.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_log_config.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_openai_oauth_setup.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_setup_script.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_start_script.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_supervisor_monitor.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_tool_installation.py | file | Part of packages component |
| packages/sandbox-runtime/tests/test_types.py | file | Part of packages component |
| packages/shared/package.json | file | Part of packages component |
| packages/shared/src/auth.ts | file | Part of packages component |
| packages/shared/src/completion/extractor.ts | file | Part of packages component |
| packages/shared/src/cron.test.ts | file | Part of packages component |
| packages/shared/src/cron.ts | file | Part of packages component |
| packages/shared/src/git.test.ts | file | Part of packages component |
| packages/shared/src/git.ts | file | Part of packages component |
| packages/shared/src/index.ts | file | Part of packages component |
| packages/shared/src/logger.ts | file | Part of packages component |
| packages/shared/src/models.ts | file | Part of packages component |
| packages/shared/src/triggers/conditions.test.ts | file | Part of packages component |
| packages/shared/src/triggers/conditions.ts | file | Part of packages component |
| packages/shared/src/triggers/glob.test.ts | file | Part of packages component |
| packages/shared/src/triggers/glob.ts | file | Part of packages component |
| packages/shared/src/triggers/index.ts | file | Part of packages component |
| packages/shared/src/triggers/registry.ts | file | Part of packages component |
| packages/shared/src/triggers/sentry/conditions.test.ts | file | Part of packages component |
| packages/shared/src/triggers/sentry/conditions.ts | file | Part of packages component |
| packages/shared/src/triggers/sentry/context.ts | file | Part of packages component |
| packages/shared/src/triggers/sentry/index.ts | file | Part of packages component |
| packages/shared/src/triggers/sentry/normalizer.test.ts | file | Part of packages component |
| packages/shared/src/triggers/sentry/normalizer.ts | file | Part of packages component |
| packages/shared/src/triggers/sentry/signature.ts | file | Part of packages component |
| packages/shared/src/triggers/testing.ts | file | Part of packages component |
| packages/shared/src/triggers/types.ts | file | Part of packages component |
| packages/shared/src/triggers/webhook/conditions.test.ts | file | Part of packages component |
| packages/shared/src/triggers/webhook/conditions.ts | file | Part of packages component |
| packages/shared/src/triggers/webhook/context.ts | file | Part of packages component |
| packages/shared/src/triggers/webhook/index.ts | file | Part of packages component |
| packages/shared/src/triggers/webhook/normalizer.test.ts | file | Part of packages component |
| packages/shared/src/triggers/webhook/normalizer.ts | file | Part of packages component |
| packages/shared/src/types/index.ts | file | Part of packages component |
| packages/shared/src/types/integrations.ts | file | Part of packages component |
| packages/shared/tsconfig.json | file | Part of packages component |
| packages/slack-bot/package.json | file | Part of packages component |
| packages/slack-bot/src/branch-preferences.ts | file | Part of packages component |
| packages/slack-bot/src/callbacks.ts | file | Part of packages component |
| packages/slack-bot/src/classifier/index.test.ts | file | Part of packages component |
| packages/slack-bot/src/classifier/index.ts | file | Part of packages component |
| packages/slack-bot/src/classifier/repos.ts | file | Part of packages component |
| packages/slack-bot/src/completion/blocks.test.ts | file | Part of packages component |
| packages/slack-bot/src/completion/blocks.ts | file | Part of packages component |
| packages/slack-bot/src/completion/extractor.test.ts | file | Part of packages component |
| packages/slack-bot/src/completion/extractor.ts | file | Part of packages component |
| packages/slack-bot/src/completion/index.ts | file | Part of packages component |
| packages/slack-bot/src/dm-utils.test.ts | file | Part of packages component |
| packages/slack-bot/src/dm-utils.ts | file | Part of packages component |
| packages/slack-bot/src/index.test.ts | file | Part of packages component |
| packages/slack-bot/src/index.ts | file | Part of packages component |
| packages/slack-bot/src/logger.ts | file | Part of packages component |
| packages/slack-bot/src/types/index.ts | file | Part of packages component |
| packages/slack-bot/src/utils/internal.ts | file | Part of packages component |
| packages/slack-bot/src/utils/repo.ts | file | Part of packages component |
| packages/slack-bot/src/utils/resolve-users.test.ts | file | Part of packages component |
| packages/slack-bot/src/utils/resolve-users.ts | file | Part of packages component |
| packages/slack-bot/src/utils/slack-client.ts | file | Part of packages component |
| packages/slack-bot/tsconfig.json | file | Part of packages component |
| packages/slack-bot/vitest.config.ts | file | Part of packages component |
| packages/web/.env.example | file | Part of packages component |
| packages/web/.gitignore | file | Part of packages component |
| packages/web/README.md | Documentation | Explains how to install and use |
| packages/web/components.json | file | Part of packages component |
| packages/web/next.config.ts | file | Part of packages component |
| packages/web/open-next.config.ts | file | Part of packages component |
| packages/web/package.json | file | Part of packages component |
| packages/web/postcss.config.mjs | file | Part of packages component |
| packages/web/public/hljs-themes/atom-one-dark.css | file | Part of packages component |
| packages/web/public/hljs-themes/atom-one-light.css | file | Part of packages component |
| packages/web/public/hljs-themes/github-dark.css | file | Part of packages component |
| packages/web/public/hljs-themes/github.css | file | Part of packages component |
| packages/web/src/app/(app)/automations/[id]/edit/page.tsx | file | Part of packages component |
| packages/web/src/app/(app)/automations/[id]/page.tsx | file | Part of packages component |
| packages/web/src/app/(app)/automations/new/page.tsx | file | Part of packages component |
| packages/web/src/app/(app)/automations/page.tsx | file | Part of packages component |
| packages/web/src/app/(app)/layout.tsx | file | Part of packages component |
| packages/web/src/app/(app)/page.tsx | file | Part of packages component |
| packages/web/src/app/(app)/session/[id]/page.tsx | file | Part of packages component |
| packages/web/src/app/(app)/settings/integrations/[id]/page.tsx | file | Part of packages component |
| packages/web/src/app/(app)/settings/page.tsx | file | Part of packages component |
| packages/web/src/app/access-denied/page.tsx | file | Part of packages component |
| packages/web/src/app/api/auth/[...nextauth]/route.ts | file | Part of packages component |
| packages/web/src/app/api/automations/[id]/pause/route.ts | file | Part of packages component |
| packages/web/src/app/api/automations/[id]/regenerate-key/route.ts | file | Part of packages component |
| packages/web/src/app/api/automations/[id]/resume/route.ts | file | Part of packages component |
| packages/web/src/app/api/automations/[id]/route.ts | file | Part of packages component |
| packages/web/src/app/api/automations/[id]/runs/[runId]/route.ts | file | Part of packages component |
| packages/web/src/app/api/automations/[id]/runs/route.ts | file | Part of packages component |
| packages/web/src/app/api/automations/[id]/trigger/route.ts | file | Part of packages component |
| packages/web/src/app/api/automations/route.ts | file | Part of packages component |
| packages/web/src/app/api/integration-settings/[id]/repos/[owner]/[name]/route.ts | file | Part of packages component |
| packages/web/src/app/api/integration-settings/[id]/repos/route.ts | file | Part of packages component |
| packages/web/src/app/api/integration-settings/[id]/route.ts | file | Part of packages component |
| packages/web/src/app/api/model-preferences/route.ts | file | Part of packages component |
| packages/web/src/app/api/repo-images/[owner]/[name]/toggle/route.ts | file | Part of packages component |
| packages/web/src/app/api/repo-images/[owner]/[name]/trigger/route.ts | file | Part of packages component |
| packages/web/src/app/api/repo-images/route.ts | file | Part of packages component |
| packages/web/src/app/api/repos/[owner]/[name]/branches/route.ts | file | Part of packages component |
| packages/web/src/app/api/repos/[owner]/[name]/secrets/[key]/route.ts | file | Part of packages component |
| packages/web/src/app/api/repos/[owner]/[name]/secrets/route.ts | file | Part of packages component |
| packages/web/src/app/api/repos/route.ts | file | Part of packages component |
| packages/web/src/app/api/secrets/[key]/route.ts | file | Part of packages component |
| packages/web/src/app/api/secrets/route.ts | file | Part of packages component |
| packages/web/src/app/api/sessions/[id]/archive/route.ts | file | Part of packages component |
| packages/web/src/app/api/sessions/[id]/children/route.ts | file | Part of packages component |
| packages/web/src/app/api/sessions/[id]/prompt/route.ts | file | Part of packages component |
| packages/web/src/app/api/sessions/[id]/title/route.ts | file | Part of packages component |
| packages/web/src/app/api/sessions/[id]/unarchive/route.ts | file | Part of packages component |
| packages/web/src/app/api/sessions/[id]/ws-token/route.ts | file | Part of packages component |
| packages/web/src/app/api/sessions/route.ts | file | Part of packages component |
| packages/web/src/app/globals.css | file | Part of packages component |
| packages/web/src/app/layout.tsx | file | Part of packages component |
| packages/web/src/app/providers.tsx | file | Part of packages component |
| packages/web/src/components/action-bar.tsx | file | Part of packages component |
| packages/web/src/components/automations/automation-form.test.tsx | file | Part of packages component |
| packages/web/src/components/automations/automation-form.tsx | file | Part of packages component |
| packages/web/src/components/automations/automation-status-badge.tsx | file | Part of packages component |
| packages/web/src/components/automations/automations-list.tsx | file | Part of packages component |
| packages/web/src/components/automations/condition-builder.tsx | file | Part of packages component |
| packages/web/src/components/automations/cron-picker.tsx | file | Part of packages component |
| packages/web/src/components/automations/run-history.tsx | file | Part of packages component |
| packages/web/src/components/automations/trigger-type-selector.tsx | file | Part of packages component |
| packages/web/src/components/automations/webhook-config.tsx | file | Part of packages component |
| packages/web/src/components/global-command-menu.tsx | file | Part of packages component |
| packages/web/src/components/reasoning-effort-pills.tsx | file | Part of packages component |
| packages/web/src/components/safe-markdown.tsx | file | Part of packages component |
| packages/web/src/components/secrets-editor.tsx | file | Part of packages component |
| packages/web/src/components/session-right-sidebar.tsx | file | Part of packages component |
| packages/web/src/components/session-sidebar.test.tsx | file | Part of packages component |
| packages/web/src/components/session-sidebar.tsx | file | Part of packages component |
| packages/web/src/components/settings/appearance-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/data-controls-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/images-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/integrations-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/integrations/code-server-integration-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/integrations/github-integration-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/integrations/integration-settings-skeleton.tsx | file | Part of packages component |
| packages/web/src/components/settings/integrations/linear-integration-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/keyboard-shortcuts-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/models-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/sandbox-settings.test.tsx | file | Part of packages component |
| packages/web/src/components/settings/sandbox-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/secrets-settings.tsx | file | Part of packages component |
| packages/web/src/components/settings/settings-nav.tsx | file | Part of packages component |
| packages/web/src/components/sidebar-layout.tsx | file | Part of packages component |
| packages/web/src/components/sidebar/child-sessions-section.tsx | file | Part of packages component |
| packages/web/src/components/sidebar/code-server-section.tsx | file | Part of packages component |
| packages/web/src/components/sidebar/collapsible-section.tsx | file | Part of packages component |
| packages/web/src/components/sidebar/files-changed-section.tsx | file | Part of packages component |
| packages/web/src/components/sidebar/index.ts | file | Part of packages component |
| packages/web/src/components/sidebar/metadata-section.tsx | file | Part of packages component |
| packages/web/src/components/sidebar/participants-section.tsx | file | Part of packages component |
| packages/web/src/components/sidebar/sandbox-statuses.ts | file | Part of packages component |
| packages/web/src/components/sidebar/tasks-section.tsx | file | Part of packages component |
| packages/web/src/components/sidebar/tunnel-urls-section.tsx | file | Part of packages component |
| packages/web/src/components/syntax-highlight-theme.tsx | file | Part of packages component |
| packages/web/src/components/tool-call-group.tsx | file | Part of packages component |
| packages/web/src/components/tool-call-item.tsx | file | Part of packages component |
| packages/web/src/components/ui/alert-dialog.tsx | file | Part of packages component |
| packages/web/src/components/ui/badge.tsx | file | Part of packages component |
| packages/web/src/components/ui/button.tsx | file | Part of packages component |
| packages/web/src/components/ui/checkbox.tsx | file | Part of packages component |
| packages/web/src/components/ui/combobox.test.tsx | file | Part of packages component |
| packages/web/src/components/ui/combobox.tsx | file | Part of packages component |
| packages/web/src/components/ui/command.tsx | file | Part of packages component |
| packages/web/src/components/ui/dialog.tsx | file | Part of packages component |
| packages/web/src/components/ui/dropdown-menu.tsx | file | Part of packages component |
| packages/web/src/components/ui/form-controls.tsx | file | Part of packages component |
| packages/web/src/components/ui/icons.tsx | file | Part of packages component |
| packages/web/src/components/ui/input.tsx | file | Part of packages component |
| packages/web/src/components/ui/label.tsx | file | Part of packages component |
| packages/web/src/components/ui/popover.tsx | file | Part of packages component |
| packages/web/src/components/ui/scroll-area.tsx | file | Part of packages component |
| packages/web/src/components/ui/select.tsx | file | Part of packages component |
| packages/web/src/components/ui/separator.tsx | file | Part of packages component |
| packages/web/src/components/ui/sheet.tsx | file | Part of packages component |
| packages/web/src/components/ui/sonner.tsx | file | Part of packages component |
| packages/web/src/components/ui/switch.tsx | file | Part of packages component |
| packages/web/src/components/ui/tabs.tsx | file | Part of packages component |
| packages/web/src/components/ui/textarea.tsx | file | Part of packages component |
| packages/web/src/components/ui/toggle-group.tsx | file | Part of packages component |
| packages/web/src/components/ui/toggle.tsx | file | Part of packages component |
| packages/web/src/components/ui/tooltip.tsx | file | Part of packages component |
| packages/web/src/hooks/use-automations.ts | file | Part of packages component |
| packages/web/src/hooks/use-branches.ts | file | Part of packages component |
| packages/web/src/hooks/use-enabled-models.ts | file | Part of packages component |
| packages/web/src/hooks/use-global-shortcuts.ts | file | Part of packages component |
| packages/web/src/hooks/use-media-query.ts | file | Part of packages component |
| packages/web/src/hooks/use-repos.ts | file | Part of packages component |
| packages/web/src/hooks/use-session-socket.ts | file | Part of packages component |
| packages/web/src/hooks/use-sidebar.ts | file | Part of packages component |
| packages/web/src/hooks/use-syntax-highlight-preferences.ts | file | Part of packages component |
| packages/web/src/lib/access-control.test.ts | file | Part of packages component |
| packages/web/src/lib/access-control.ts | file | Part of packages component |
| packages/web/src/lib/auth.ts | file | Part of packages component |
| packages/web/src/lib/control-plane-query.test.ts | file | Part of packages component |
| packages/web/src/lib/control-plane-query.ts | file | Part of packages component |
| packages/web/src/lib/control-plane.ts | file | Part of packages component |
| packages/web/src/lib/cron-presets.test.ts | file | Part of packages component |
| packages/web/src/lib/cron-presets.ts | file | Part of packages component |
| packages/web/src/lib/env-paste.test.ts | file | Part of packages component |
| packages/web/src/lib/env-paste.ts | file | Part of packages component |
| packages/web/src/lib/files.test.ts | file | Part of packages component |
| packages/web/src/lib/files.ts | file | Part of packages component |
| packages/web/src/lib/format.ts | file | Part of packages component |
| packages/web/src/lib/keyboard-shortcuts.test.ts | file | Part of packages component |
| packages/web/src/lib/keyboard-shortcuts.ts | file | Part of packages component |
| packages/web/src/lib/scm.test.ts | file | Part of packages component |
| packages/web/src/lib/scm.ts | file | Part of packages component |
| packages/web/src/lib/session-list.ts | file | Part of packages component |
| packages/web/src/lib/tasks.ts | file | Part of packages component |
| packages/web/src/lib/time.ts | file | Part of packages component |
| packages/web/src/lib/tool-formatters.ts | file | Part of packages component |
| packages/web/src/lib/urls.test.ts | file | Part of packages component |
| packages/web/src/lib/urls.ts | file | Part of packages component |
| packages/web/src/lib/utils.ts | file | Part of packages component |
| packages/web/src/types/session.ts | file | Part of packages component |
| packages/web/tailwind.config.ts | file | Part of packages component |
| packages/web/tsconfig.json | file | Part of packages component |
| packages/web/vitest.config.ts | file | Part of packages component |
| packages/web/wrangler.toml | file | Part of packages component |
| scripts/cf-logs.ts | file | Part of scripts component |
| scripts/d1-migrate.sh | file | Part of scripts component |
| scripts/migrate-kv-to-d1.sh | file | Part of scripts component |
| scripts/wrangler-secrets.sh | file | Part of scripts component |
| terraform/README.md | Documentation | Explains how to install and use |
| terraform/d1/migrations/0001_create_repo_secrets.sql | file | Part of terraform component |
| terraform/d1/migrations/0002_create_session_index.sql | file | Part of terraform component |
| terraform/d1/migrations/0003_prefix_model_ids.sql | file | Part of terraform component |
| terraform/d1/migrations/0004_create_global_secrets.sql | file | Part of terraform component |
| terraform/d1/migrations/0005_add_reasoning_effort_to_sessions.sql | file | Part of terraform component |
| terraform/d1/migrations/0006_create_model_preferences.sql | file | Part of terraform component |
| terraform/d1/migrations/0007_create_integration_settings.sql | file | Part of terraform component |
| terraform/d1/migrations/0008_create_user_scm_tokens.sql | file | Part of terraform component |
| terraform/d1/migrations/0009_create_repo_images.sql | file | Part of terraform component |
| terraform/d1/migrations/0010_add_image_build_enabled.sql | file | Part of terraform component |
| terraform/d1/migrations/0011_add_branch_to_sessions.sql | file | Part of terraform component |
| terraform/d1/migrations/0012_add_parent_session.sql | file | Part of terraform component |
| terraform/d1/migrations/0013_create_automations.sql | file | Part of terraform component |
| terraform/d1/migrations/0014_add_reasoning_effort_to_automations.sql | file | Part of terraform component |
| terraform/d1/migrations/0015_trigger_automations.sql | file | Part of terraform component |
| terraform/d1/migrations/0016_rename_trigger_auth_data.sql | file | Part of terraform component |
| terraform/environments/production/.terraform.lock.hcl | file | Part of terraform component |
| terraform/environments/production/backend.tf | file | Part of terraform component |
| terraform/environments/production/backend.tfvars.example | file | Part of terraform component |
| terraform/environments/production/checks.tf | file | Part of terraform component |
| terraform/environments/production/d1.tf | file | Part of terraform component |
| terraform/environments/production/kv.tf | file | Part of terraform component |
| terraform/environments/production/locals.tf | file | Part of terraform component |
| terraform/environments/production/main.tf | file | Part of terraform component |
| terraform/environments/production/modal.tf | file | Part of terraform component |
| terraform/environments/production/moved.tf | file | Part of terraform component |
| terraform/environments/production/outputs.tf | file | Part of terraform component |
| terraform/environments/production/terraform.tfvars.example | file | Part of terraform component |
| terraform/environments/production/variables.tf | file | Part of terraform component |
| terraform/environments/production/versions.tf | file | Part of terraform component |
| terraform/environments/production/web-cloudflare.tf | file | Part of terraform component |
| terraform/environments/production/web-vercel.tf | file | Part of terraform component |
| terraform/environments/production/workers-control-plane.tf | file | Part of terraform component |
| terraform/environments/production/workers-github.tf | file | Part of terraform component |
| terraform/environments/production/workers-linear.tf | file | Part of terraform component |
| terraform/environments/production/workers-slack.tf | file | Part of terraform component |
| terraform/modules/cloudflare-kv/main.tf | file | Part of terraform component |
| terraform/modules/cloudflare-kv/outputs.tf | file | Part of terraform component |
| terraform/modules/cloudflare-kv/variables.tf | file | Part of terraform component |
| terraform/modules/cloudflare-kv/versions.tf | file | Part of terraform component |
| terraform/modules/cloudflare-worker/main.tf | file | Part of terraform component |
| terraform/modules/cloudflare-worker/outputs.tf | file | Part of terraform component |
| terraform/modules/cloudflare-worker/variables.tf | file | Part of terraform component |
| terraform/modules/cloudflare-worker/versions.tf | file | Part of terraform component |
| terraform/modules/modal-app/main.tf | file | Part of terraform component |
| terraform/modules/modal-app/outputs.tf | file | Part of terraform component |
| terraform/modules/modal-app/scripts/create-secrets.sh | file | Part of terraform component |
| terraform/modules/modal-app/scripts/deploy.sh | file | Part of terraform component |
| terraform/modules/modal-app/variables.tf | file | Part of terraform component |
| terraform/modules/vercel-project/main.tf | file | Part of terraform component |
| terraform/modules/vercel-project/outputs.tf | file | Part of terraform component |
| terraform/modules/vercel-project/variables.tf | file | Part of terraform component |
| terraform/modules/vercel-project/versions.tf | file | Part of terraform component |
| vitest.workspace.ts | file | Root configuration or documentation |

## Hidden config files (CRITICAL)

These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|---------------|--------------------|---------|
| .gitignore | VISIBLE_gitignore | Git ignore rules |
| .openinspect | VISIBLE_openinspect | Custom hidden file/folder |
| .github/ | VISIBLE_github/ | GitHub workflows |
| .claude/ | VISIBLE_claude/ | Claude Code configuration |
| .prettierignore | VISIBLE_prettierignore | Custom hidden file/folder |
| .husky | VISIBLE_husky | Custom hidden file/folder |
| .vercelignore | VISIBLE_vercelignore | Custom hidden file/folder |
| .prettierrc | VISIBLE_prettierrc | Custom hidden file/folder |

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|-----------------------|-----|
| CLAUDE.md | COMBINED/prompts/system/ | System instructions |
| .claude/skills/onboarding/SKILL.md | COMBINED/skills/background-agents/ | Agent skill definition |
| README.md | COMBINED/REPO_DOCS/01-background-agents/ | Documentation |
| AGENTS.md | COMBINED/agents/by-role/background-agents/ | Core agent files |

## Key insights for ULTRACAR integration

- This repo brings a complete background architecture utilizing Cloudflare Workers, Durable Objects, Modal, Next.js, and Terraform.
- Relies heavily on D1 database for sessions and WebSockets for real-time multiplayer streaming.
- No direct conflict with simple CLI-based agents, but offers a powerful structural framework for hosted 'always-on' AI coding servers.

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
mv VISIBLE_gitignore .gitignore
mv VISIBLE_openinspect .openinspect
mv VISIBLE_github/ .github/
mv VISIBLE_claude/ .claude/
mv VISIBLE_prettierignore .prettierignore
mv VISIBLE_husky .husky
mv VISIBLE_vercelignore .vercelignore
mv VISIBLE_prettierrc .prettierrc
```

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md
─────────────────────────────────────────────────────────
