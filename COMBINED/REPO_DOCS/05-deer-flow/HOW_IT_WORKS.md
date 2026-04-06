─────────────────────────────────────────────────────────

# deer-flow — How It Works

Original repo: https://github.com/bytedance/deer-flow
Stars: 55 ⭐
Category: Orchestration
Local path in vibe-coder: Orchestration/deer-flow/
License: MIT

## What it does (plain language for vibe-coders)

DeerFlow is ByteDance's industrial-grade super-agent orchestrator. It is designed to manage and coordinate complex graphs of sub-agents, memories, tools, and sandboxed python environments to handle multi-step reasoning.

## How the AI reads this repo (startup sequence)

Step 1: AI reads `backend/AGENTS.md` and `frontend/AGENTS.md` → understands the fundamental multi-agent architecture and Next.js frontend.\nStep 2: AI reads `backend/CLAUDE.md` and `frontend/CLAUDE.md` → learns codebase rules, how to build tools, and the LangGraph structure.\nStep 3: AI leverages files inside `backend/packages/harness/deerflow/` to configure the runtime middleware (like Sandbox Audit or Auth) and dispatch tasks to specialized agent swarms.

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|------------|--------------|
| .dockerignore | file | Root configuration or documentation |
| .env.example | file | Root configuration or documentation |
| .gitattributes | file | Root configuration or documentation |
| .github/ISSUE_TEMPLATE/runtime-information.yml | file | Part of .github component |
| .github/copilot-instructions.md | file | Part of .github component |
| .github/workflows/backend-unit-tests.yml | file | Part of .github component |
| .github/workflows/lint-check.yml | file | Part of .github component |
| .gitignore | file | Root configuration or documentation |
| CONTRIBUTING.md | file | Root configuration or documentation |
| Install.md | file | Root configuration or documentation |
| LICENSE | file | Root configuration or documentation |
| Makefile | file | Root configuration or documentation |
| README.md | Documentation | Explains how to install and use |
| README_fr.md | file | Root configuration or documentation |
| README_ja.md | file | Root configuration or documentation |
| README_ru.md | file | Root configuration or documentation |
| README_zh.md | file | Root configuration or documentation |
| SECURITY.md | file | Root configuration or documentation |
| backend/.gitignore | file | Part of backend component |
| backend/.python-version | file | Part of backend component |
| backend/.vscode/extensions.json | file | Part of backend component |
| backend/.vscode/settings.json | file | Part of backend component |
| backend/AGENTS.md | agent | Part of backend component |
| backend/CLAUDE.md | config/skill | Part of backend component |
| backend/CONTRIBUTING.md | file | Part of backend component |
| backend/Dockerfile | directory | Part of backend component |
| backend/Makefile | directory | Part of backend component |
| backend/README.md | Documentation | Explains how to install and use |
| backend/app/__init__.py | file | Part of backend component |
| backend/app/channels/__init__.py | file | Part of backend component |
| backend/app/channels/base.py | file | Part of backend component |
| backend/app/channels/commands.py | file | Part of backend component |
| backend/app/channels/feishu.py | file | Part of backend component |
| backend/app/channels/manager.py | file | Part of backend component |
| backend/app/channels/message_bus.py | file | Part of backend component |
| backend/app/channels/service.py | file | Part of backend component |
| backend/app/channels/slack.py | file | Part of backend component |
| backend/app/channels/store.py | file | Part of backend component |
| backend/app/channels/telegram.py | file | Part of backend component |
| backend/app/channels/wecom.py | file | Part of backend component |
| backend/app/gateway/__init__.py | file | Part of backend component |
| backend/app/gateway/app.py | file | Part of backend component |
| backend/app/gateway/config.py | file | Part of backend component |
| backend/app/gateway/deps.py | file | Part of backend component |
| backend/app/gateway/path_utils.py | file | Part of backend component |
| backend/app/gateway/routers/__init__.py | file | Part of backend component |
| backend/app/gateway/routers/agents.py | agent | Part of backend component |
| backend/app/gateway/routers/artifacts.py | file | Part of backend component |
| backend/app/gateway/routers/assistants_compat.py | file | Part of backend component |
| backend/app/gateway/routers/channels.py | file | Part of backend component |
| backend/app/gateway/routers/mcp.py | file | Part of backend component |
| backend/app/gateway/routers/memory.py | file | Part of backend component |
| backend/app/gateway/routers/models.py | file | Part of backend component |
| backend/app/gateway/routers/runs.py | file | Part of backend component |
| backend/app/gateway/routers/skills.py | file | Part of backend component |
| backend/app/gateway/routers/suggestions.py | file | Part of backend component |
| backend/app/gateway/routers/thread_runs.py | file | Part of backend component |
| backend/app/gateway/routers/threads.py | file | Part of backend component |
| backend/app/gateway/routers/uploads.py | file | Part of backend component |
| backend/app/gateway/services.py | file | Part of backend component |
| backend/debug.py | file | Part of backend component |
| backend/docs/API.md | file | Part of backend component |
| backend/docs/APPLE_CONTAINER.md | file | Part of backend component |
| backend/docs/ARCHITECTURE.md | file | Part of backend component |
| backend/docs/AUTO_TITLE_GENERATION.md | file | Part of backend component |
| backend/docs/CONFIGURATION.md | file | Part of backend component |
| backend/docs/FILE_UPLOAD.md | file | Part of backend component |
| backend/docs/GUARDRAILS.md | file | Part of backend component |
| backend/docs/HARNESS_APP_SPLIT.md | file | Part of backend component |
| backend/docs/MCP_SERVER.md | file | Part of backend component |
| backend/docs/MEMORY_IMPROVEMENTS.md | file | Part of backend component |
| backend/docs/MEMORY_IMPROVEMENTS_SUMMARY.md | file | Part of backend component |
| backend/docs/MEMORY_SETTINGS_REVIEW.md | file | Part of backend component |
| backend/docs/PATH_EXAMPLES.md | file | Part of backend component |
| backend/docs/README.md | Documentation | Explains how to install and use |
| backend/docs/SETUP.md | file | Part of backend component |
| backend/docs/TITLE_GENERATION_IMPLEMENTATION.md | file | Part of backend component |
| backend/docs/TODO.md | file | Part of backend component |
| backend/docs/memory-settings-sample.json | file | Part of backend component |
| backend/docs/middleware-execution-flow.md | file | Part of backend component |
| backend/docs/plan_mode_usage.md | file | Part of backend component |
| backend/docs/rfc-create-deerflow-agent.md | agent | Part of backend component |
| backend/docs/rfc-extract-shared-modules.md | file | Part of backend component |
| backend/docs/rfc-grep-glob-tools.md | file | Part of backend component |
| backend/docs/summarization.md | file | Part of backend component |
| backend/docs/task_tool_improvements.md | file | Part of backend component |
| backend/langgraph.json | file | Part of backend component |
| backend/packages/harness/deerflow/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/agents/__init__.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/checkpointer/__init__.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/checkpointer/async_provider.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/checkpointer/provider.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/factory.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/features.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/lead_agent/__init__.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/lead_agent/agent.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/lead_agent/prompt.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/memory/__init__.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/memory/prompt.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/memory/queue.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/memory/storage.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/memory/updater.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/__init__.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/clarification_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/dangling_tool_call_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/deferred_tool_filter_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/llm_error_handling_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/loop_detection_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/memory_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/sandbox_audit_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/subagent_limit_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/thread_data_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/title_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/todo_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/token_usage_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/tool_error_handling_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/uploads_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/middlewares/view_image_middleware.py | agent | Part of backend component |
| backend/packages/harness/deerflow/agents/thread_state.py | agent | Part of backend component |
| backend/packages/harness/deerflow/client.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/aio_sandbox/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/aio_sandbox/aio_sandbox.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/aio_sandbox/aio_sandbox_provider.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/aio_sandbox/backend.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/aio_sandbox/local_backend.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/aio_sandbox/remote_backend.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/aio_sandbox/sandbox_info.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/ddg_search/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/ddg_search/tools.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/firecrawl/tools.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/image_search/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/image_search/tools.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/infoquest/infoquest_client.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/infoquest/tools.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/jina_ai/jina_client.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/jina_ai/tools.py | file | Part of backend component |
| backend/packages/harness/deerflow/community/tavily/tools.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/acp_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/agents_config.py | agent | Part of backend component |
| backend/packages/harness/deerflow/config/app_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/checkpointer_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/extensions_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/guardrails_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/memory_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/model_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/paths.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/sandbox_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/skills_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/stream_bridge_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/subagents_config.py | agent | Part of backend component |
| backend/packages/harness/deerflow/config/summarization_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/title_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/token_usage_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/tool_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/tool_search_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/config/tracing_config.py | file | Part of backend component |
| backend/packages/harness/deerflow/guardrails/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/guardrails/builtin.py | file | Part of backend component |
| backend/packages/harness/deerflow/guardrails/middleware.py | file | Part of backend component |
| backend/packages/harness/deerflow/guardrails/provider.py | file | Part of backend component |
| backend/packages/harness/deerflow/mcp/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/mcp/cache.py | file | Part of backend component |
| backend/packages/harness/deerflow/mcp/client.py | file | Part of backend component |
| backend/packages/harness/deerflow/mcp/oauth.py | file | Part of backend component |
| backend/packages/harness/deerflow/mcp/tools.py | file | Part of backend component |
| backend/packages/harness/deerflow/models/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/models/claude_provider.py | file | Part of backend component |
| backend/packages/harness/deerflow/models/credential_loader.py | file | Part of backend component |
| backend/packages/harness/deerflow/models/factory.py | file | Part of backend component |
| backend/packages/harness/deerflow/models/openai_codex_provider.py | file | Part of backend component |
| backend/packages/harness/deerflow/models/patched_deepseek.py | file | Part of backend component |
| backend/packages/harness/deerflow/models/patched_minimax.py | file | Part of backend component |
| backend/packages/harness/deerflow/models/patched_openai.py | file | Part of backend component |
| backend/packages/harness/deerflow/reflection/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/reflection/resolvers.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/runs/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/runs/manager.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/runs/schemas.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/runs/worker.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/serialization.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/store/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/store/_sqlite_utils.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/store/async_provider.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/store/provider.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/stream_bridge/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/stream_bridge/async_provider.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/stream_bridge/base.py | file | Part of backend component |
| backend/packages/harness/deerflow/runtime/stream_bridge/memory.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/exceptions.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/file_operation_lock.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/local/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/local/list_dir.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/local/local_sandbox.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/local/local_sandbox_provider.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/middleware.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/sandbox.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/sandbox_provider.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/search.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/security.py | file | Part of backend component |
| backend/packages/harness/deerflow/sandbox/tools.py | file | Part of backend component |
| backend/packages/harness/deerflow/skills/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/skills/installer.py | file | Part of backend component |
| backend/packages/harness/deerflow/skills/loader.py | file | Part of backend component |
| backend/packages/harness/deerflow/skills/parser.py | file | Part of backend component |
| backend/packages/harness/deerflow/skills/types.py | file | Part of backend component |
| backend/packages/harness/deerflow/skills/validation.py | file | Part of backend component |
| backend/packages/harness/deerflow/subagents/__init__.py | agent | Part of backend component |
| backend/packages/harness/deerflow/subagents/builtins/__init__.py | agent | Part of backend component |
| backend/packages/harness/deerflow/subagents/builtins/bash_agent.py | agent | Part of backend component |
| backend/packages/harness/deerflow/subagents/builtins/general_purpose.py | agent | Part of backend component |
| backend/packages/harness/deerflow/subagents/config.py | agent | Part of backend component |
| backend/packages/harness/deerflow/subagents/executor.py | agent | Part of backend component |
| backend/packages/harness/deerflow/subagents/registry.py | agent | Part of backend component |
| backend/packages/harness/deerflow/tools/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/tools/builtins/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/tools/builtins/clarification_tool.py | file | Part of backend component |
| backend/packages/harness/deerflow/tools/builtins/invoke_acp_agent_tool.py | agent | Part of backend component |
| backend/packages/harness/deerflow/tools/builtins/present_file_tool.py | file | Part of backend component |
| backend/packages/harness/deerflow/tools/builtins/setup_agent_tool.py | agent | Part of backend component |
| backend/packages/harness/deerflow/tools/builtins/task_tool.py | file | Part of backend component |
| backend/packages/harness/deerflow/tools/builtins/tool_search.py | file | Part of backend component |
| backend/packages/harness/deerflow/tools/builtins/view_image_tool.py | file | Part of backend component |
| backend/packages/harness/deerflow/tools/tools.py | file | Part of backend component |
| backend/packages/harness/deerflow/tracing/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/tracing/factory.py | file | Part of backend component |
| backend/packages/harness/deerflow/uploads/__init__.py | file | Part of backend component |
| backend/packages/harness/deerflow/uploads/manager.py | file | Part of backend component |
| backend/packages/harness/deerflow/utils/file_conversion.py | file | Part of backend component |
| backend/packages/harness/deerflow/utils/network.py | file | Part of backend component |
| backend/packages/harness/deerflow/utils/readability.py | file | Part of backend component |
| backend/packages/harness/pyproject.toml | file | Part of backend component |
| backend/pyproject.toml | file | Part of backend component |
| backend/ruff.toml | file | Part of backend component |
| backend/tests/conftest.py | file | Part of backend component |
| backend/tests/test_acp_config.py | file | Part of backend component |
| backend/tests/test_aio_sandbox.py | file | Part of backend component |
| backend/tests/test_aio_sandbox_local_backend.py | file | Part of backend component |
| backend/tests/test_aio_sandbox_provider.py | file | Part of backend component |
| backend/tests/test_app_config_reload.py | file | Part of backend component |
| backend/tests/test_artifacts_router.py | file | Part of backend component |
| backend/tests/test_channel_file_attachments.py | file | Part of backend component |
| backend/tests/test_channels.py | file | Part of backend component |
| backend/tests/test_checkpointer.py | file | Part of backend component |
| backend/tests/test_checkpointer_none_fix.py | file | Part of backend component |
| backend/tests/test_claude_provider_oauth_billing.py | file | Part of backend component |
| backend/tests/test_cli_auth_providers.py | file | Part of backend component |
| backend/tests/test_client.py | file | Part of backend component |
| backend/tests/test_client_e2e.py | file | Part of backend component |
| backend/tests/test_client_live.py | file | Part of backend component |
| backend/tests/test_config_version.py | file | Part of backend component |
| backend/tests/test_create_deerflow_agent.py | agent | Part of backend component |
| backend/tests/test_create_deerflow_agent_live.py | agent | Part of backend component |
| backend/tests/test_credential_loader.py | file | Part of backend component |
| backend/tests/test_custom_agent.py | agent | Part of backend component |
| backend/tests/test_dangling_tool_call_middleware.py | file | Part of backend component |
| backend/tests/test_docker_sandbox_mode_detection.py | file | Part of backend component |
| backend/tests/test_feishu_parser.py | file | Part of backend component |
| backend/tests/test_file_conversion.py | file | Part of backend component |
| backend/tests/test_gateway_services.py | file | Part of backend component |
| backend/tests/test_guardrail_middleware.py | file | Part of backend component |
| backend/tests/test_harness_boundary.py | file | Part of backend component |
| backend/tests/test_infoquest_client.py | file | Part of backend component |
| backend/tests/test_invoke_acp_agent_tool.py | agent | Part of backend component |
| backend/tests/test_jina_client.py | file | Part of backend component |
| backend/tests/test_lead_agent_model_resolution.py | agent | Part of backend component |
| backend/tests/test_lead_agent_prompt.py | agent | Part of backend component |
| backend/tests/test_lead_agent_skills.py | agent | Part of backend component |
| backend/tests/test_llm_error_handling_middleware.py | file | Part of backend component |
| backend/tests/test_local_bash_tool_loading.py | file | Part of backend component |
| backend/tests/test_local_sandbox_encoding.py | file | Part of backend component |
| backend/tests/test_local_sandbox_provider_mounts.py | file | Part of backend component |
| backend/tests/test_loop_detection_middleware.py | file | Part of backend component |
| backend/tests/test_mcp_client_config.py | file | Part of backend component |
| backend/tests/test_mcp_oauth.py | file | Part of backend component |
| backend/tests/test_mcp_sync_wrapper.py | file | Part of backend component |
| backend/tests/test_memory_prompt_injection.py | file | Part of backend component |
| backend/tests/test_memory_queue.py | file | Part of backend component |
| backend/tests/test_memory_router.py | file | Part of backend component |
| backend/tests/test_memory_storage.py | file | Part of backend component |
| backend/tests/test_memory_updater.py | file | Part of backend component |
| backend/tests/test_memory_upload_filtering.py | file | Part of backend component |
| backend/tests/test_model_config.py | file | Part of backend component |
| backend/tests/test_model_factory.py | file | Part of backend component |
| backend/tests/test_patched_minimax.py | file | Part of backend component |
| backend/tests/test_patched_openai.py | file | Part of backend component |
| backend/tests/test_present_file_tool_core_logic.py | file | Part of backend component |
| backend/tests/test_provisioner_kubeconfig.py | file | Part of backend component |
| backend/tests/test_readability.py | file | Part of backend component |
| backend/tests/test_reflection_resolvers.py | file | Part of backend component |
| backend/tests/test_run_manager.py | file | Part of backend component |
| backend/tests/test_sandbox_audit_middleware.py | file | Part of backend component |
| backend/tests/test_sandbox_search_tools.py | file | Part of backend component |
| backend/tests/test_sandbox_tools_security.py | file | Part of backend component |
| backend/tests/test_serialization.py | file | Part of backend component |
| backend/tests/test_serialize_message_content.py | file | Part of backend component |
| backend/tests/test_skills_archive_root.py | file | Part of backend component |
| backend/tests/test_skills_installer.py | file | Part of backend component |
| backend/tests/test_skills_loader.py | file | Part of backend component |
| backend/tests/test_skills_parser.py | file | Part of backend component |
| backend/tests/test_skills_validation.py | file | Part of backend component |
| backend/tests/test_sse_format.py | file | Part of backend component |
| backend/tests/test_stream_bridge.py | file | Part of backend component |
| backend/tests/test_subagent_executor.py | agent | Part of backend component |
| backend/tests/test_subagent_limit_middleware.py | agent | Part of backend component |
| backend/tests/test_subagent_prompt_security.py | agent | Part of backend component |
| backend/tests/test_subagent_timeout_config.py | agent | Part of backend component |
| backend/tests/test_suggestions_router.py | file | Part of backend component |
| backend/tests/test_task_tool_core_logic.py | file | Part of backend component |
| backend/tests/test_thread_data_middleware.py | file | Part of backend component |
| backend/tests/test_threads_router.py | file | Part of backend component |
| backend/tests/test_title_generation.py | file | Part of backend component |
| backend/tests/test_title_middleware_core_logic.py | file | Part of backend component |
| backend/tests/test_todo_middleware.py | file | Part of backend component |
| backend/tests/test_token_usage.py | file | Part of backend component |
| backend/tests/test_tool_error_handling_middleware.py | file | Part of backend component |
| backend/tests/test_tool_output_truncation.py | file | Part of backend component |
| backend/tests/test_tool_search.py | file | Part of backend component |
| backend/tests/test_tracing_config.py | file | Part of backend component |
| backend/tests/test_tracing_factory.py | file | Part of backend component |
| backend/tests/test_uploads_manager.py | file | Part of backend component |
| backend/tests/test_uploads_middleware_core_logic.py | file | Part of backend component |
| backend/tests/test_uploads_router.py | file | Part of backend component |
| backend/uv.lock | file | Part of backend component |
| config.example.yaml | file | Root configuration or documentation |
| deer-flow.code-workspace | file | Root configuration or documentation |
| docker/docker-compose-dev.yaml | file | Part of docker component |
| docker/docker-compose.yaml | file | Part of docker component |
| docker/nginx/nginx.conf | file | Part of docker component |
| docker/nginx/nginx.local.conf | file | Part of docker component |
| docker/provisioner/Dockerfile | directory | Part of docker component |
| docker/provisioner/README.md | Documentation | Explains how to install and use |
| docker/provisioner/app.py | file | Part of docker component |
| docs/CODE_CHANGE_SUMMARY_BY_FILE.md | file | Part of docs component |
| docs/SKILL_NAME_CONFLICT_FIX.md | config/skill | Part of docs component |
| docs/plans/2026-04-01-langfuse-tracing.md | file | Part of docs component |
| extensions_config.example.json | file | Root configuration or documentation |
| frontend/.env.example | file | Part of frontend component |
| frontend/.gitignore | file | Part of frontend component |
| frontend/.npmrc | file | Part of frontend component |
| frontend/.prettierignore | file | Part of frontend component |
| frontend/.vscode/settings.json | file | Part of frontend component |
| frontend/AGENTS.md | agent | Part of frontend component |
| frontend/CLAUDE.md | config/skill | Part of frontend component |
| frontend/Dockerfile | directory | Part of frontend component |
| frontend/Makefile | directory | Part of frontend component |
| frontend/README.md | Documentation | Explains how to install and use |
| frontend/components.json | file | Part of frontend component |
| frontend/eslint.config.js | file | Part of frontend component |
| frontend/next.config.js | file | Part of frontend component |
| frontend/package.json | file | Part of frontend component |
| frontend/pnpm-lock.yaml | file | Part of frontend component |
| frontend/pnpm-workspace.yaml | file | Part of frontend component |
| frontend/postcss.config.js | file | Part of frontend component |
| frontend/prettier.config.js | file | Part of frontend component |
| frontend/public/demo/threads/21cfea46-34bd-4aa6-9e1f-3009452fbeb9/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/21cfea46-34bd-4aa6-9e1f-3009452fbeb9/user-data/outputs/doraemon-moe-comic.jpg | file | Part of frontend component |
| frontend/public/demo/threads/3823e443-4e2b-4679-b496-a9506eae462b/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/3823e443-4e2b-4679-b496-a9506eae462b/user-data/outputs/fei-fei-li-podcast-timeline.md | file | Part of frontend component |
| frontend/public/demo/threads/4f3e55ee-f853-43db-bfb3-7d1a411f03cb/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/4f3e55ee-f853-43db-bfb3-7d1a411f03cb/user-data/outputs/darcy-proposal-reference.jpg | file | Part of frontend component |
| frontend/public/demo/threads/4f3e55ee-f853-43db-bfb3-7d1a411f03cb/user-data/outputs/darcy-proposal-video.mp4 | file | Part of frontend component |
| frontend/public/demo/threads/5aa47db1-d0cb-4eb9-aea5-3dac1b371c5a/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/5aa47db1-d0cb-4eb9-aea5-3dac1b371c5a/user-data/outputs/jiangsu-football/css/style.css | file | Part of frontend component |
| frontend/public/demo/threads/5aa47db1-d0cb-4eb9-aea5-3dac1b371c5a/user-data/outputs/jiangsu-football/favicon.html | file | Part of frontend component |
| frontend/public/demo/threads/5aa47db1-d0cb-4eb9-aea5-3dac1b371c5a/user-data/outputs/jiangsu-football/index.html | file | Part of frontend component |
| frontend/public/demo/threads/5aa47db1-d0cb-4eb9-aea5-3dac1b371c5a/user-data/outputs/jiangsu-football/js/data.js | file | Part of frontend component |
| frontend/public/demo/threads/5aa47db1-d0cb-4eb9-aea5-3dac1b371c5a/user-data/outputs/jiangsu-football/js/main.js | file | Part of frontend component |
| frontend/public/demo/threads/7cfa5f8f-a2f8-47ad-acbd-da7137baf990/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/7cfa5f8f-a2f8-47ad-acbd-da7137baf990/user-data/outputs/index.html | file | Part of frontend component |
| frontend/public/demo/threads/7cfa5f8f-a2f8-47ad-acbd-da7137baf990/user-data/outputs/script.js | file | Part of frontend component |
| frontend/public/demo/threads/7cfa5f8f-a2f8-47ad-acbd-da7137baf990/user-data/outputs/style.css | file | Part of frontend component |
| frontend/public/demo/threads/7f9dc56c-e49c-4671-a3d2-c492ff4dce0c/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/7f9dc56c-e49c-4671-a3d2-c492ff4dce0c/user-data/outputs/leica-master-photography-article.md | file | Part of frontend component |
| frontend/public/demo/threads/7f9dc56c-e49c-4671-a3d2-c492ff4dce0c/user-data/outputs/leica-nyc-candid.jpg | file | Part of frontend component |
| frontend/public/demo/threads/7f9dc56c-e49c-4671-a3d2-c492ff4dce0c/user-data/outputs/leica-paris-decisive-moment.jpg | file | Part of frontend component |
| frontend/public/demo/threads/7f9dc56c-e49c-4671-a3d2-c492ff4dce0c/user-data/outputs/leica-tokyo-night.jpg | file | Part of frontend component |
| frontend/public/demo/threads/90040b36-7eba-4b97-ba89-02c3ad47a8b9/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/90040b36-7eba-4b97-ba89-02c3ad47a8b9/user-data/outputs/american-woman-newyork.jpg | file | Part of frontend component |
| frontend/public/demo/threads/90040b36-7eba-4b97-ba89-02c3ad47a8b9/user-data/outputs/american-woman-shanghai.jpg | file | Part of frontend component |
| frontend/public/demo/threads/ad76c455-5bf9-4335-8517-fc03834ab828/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/ad76c455-5bf9-4335-8517-fc03834ab828/user-data/outputs/titanic_summary.txt | file | Part of frontend component |
| frontend/public/demo/threads/ad76c455-5bf9-4335-8517-fc03834ab828/user-data/outputs/visualizations/class_gender_survival.png | file | Part of frontend component |
| frontend/public/demo/threads/ad76c455-5bf9-4335-8517-fc03834ab828/user-data/outputs/visualizations/correlation_heatmap.png | file | Part of frontend component |
| frontend/public/demo/threads/ad76c455-5bf9-4335-8517-fc03834ab828/user-data/outputs/visualizations/family_size_analysis.png | file | Part of frontend component |
| frontend/public/demo/threads/ad76c455-5bf9-4335-8517-fc03834ab828/user-data/outputs/visualizations/fare_analysis.png | file | Part of frontend component |
| frontend/public/demo/threads/ad76c455-5bf9-4335-8517-fc03834ab828/user-data/outputs/visualizations/survival_by_age.png | file | Part of frontend component |
| frontend/public/demo/threads/ad76c455-5bf9-4335-8517-fc03834ab828/user-data/outputs/visualizations/survival_by_class.png | file | Part of frontend component |
| frontend/public/demo/threads/ad76c455-5bf9-4335-8517-fc03834ab828/user-data/outputs/visualizations/survival_overview.png | file | Part of frontend component |
| frontend/public/demo/threads/ad76c455-5bf9-4335-8517-fc03834ab828/user-data/uploads/titanic.csv | file | Part of frontend component |
| frontend/public/demo/threads/b83fbb2a-4e36-4d82-9de0-7b2a02c2092a/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/b83fbb2a-4e36-4d82-9de0-7b2a02c2092a/user-data/outputs/caren-hero.jpg | file | Part of frontend component |
| frontend/public/demo/threads/b83fbb2a-4e36-4d82-9de0-7b2a02c2092a/user-data/outputs/caren-ingredients.jpg | file | Part of frontend component |
| frontend/public/demo/threads/b83fbb2a-4e36-4d82-9de0-7b2a02c2092a/user-data/outputs/caren-lifestyle.jpg | file | Part of frontend component |
| frontend/public/demo/threads/b83fbb2a-4e36-4d82-9de0-7b2a02c2092a/user-data/outputs/caren-products.jpg | file | Part of frontend component |
| frontend/public/demo/threads/b83fbb2a-4e36-4d82-9de0-7b2a02c2092a/user-data/outputs/index.html | file | Part of frontend component |
| frontend/public/demo/threads/c02bb4d5-4202-490e-ae8f-ff4864fc0d2e/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/c02bb4d5-4202-490e-ae8f-ff4864fc0d2e/user-data/outputs/index.html | file | Part of frontend component |
| frontend/public/demo/threads/c02bb4d5-4202-490e-ae8f-ff4864fc0d2e/user-data/outputs/script.js | file | Part of frontend component |
| frontend/public/demo/threads/c02bb4d5-4202-490e-ae8f-ff4864fc0d2e/user-data/outputs/styles.css | file | Part of frontend component |
| frontend/public/demo/threads/d3e5adaf-084c-4dd5-9d29-94f1d6bccd98/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/d3e5adaf-084c-4dd5-9d29-94f1d6bccd98/user-data/outputs/diana_hu_research.md | file | Part of frontend component |
| frontend/public/demo/threads/f4125791-0128-402a-8ca9-50e0947557e4/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/f4125791-0128-402a-8ca9-50e0947557e4/user-data/outputs/index.html | file | Part of frontend component |
| frontend/public/demo/threads/fe3f7974-1bcb-4a01-a950-79673baafefd/thread.json | file | Part of frontend component |
| frontend/public/demo/threads/fe3f7974-1bcb-4a01-a950-79673baafefd/user-data/outputs/index.html | file | Part of frontend component |
| frontend/public/demo/threads/fe3f7974-1bcb-4a01-a950-79673baafefd/user-data/outputs/research_deerflow_20260201.md | file | Part of frontend component |
| frontend/public/favicon.ico | file | Part of frontend component |
| frontend/public/images/21cfea46-34bd-4aa6-9e1f-3009452fbeb9.jpg | file | Part of frontend component |
| frontend/public/images/3823e443-4e2b-4679-b496-a9506eae462b.jpg | file | Part of frontend component |
| frontend/public/images/4f3e55ee-f853-43db-bfb3-7d1a411f03cb.jpg | file | Part of frontend component |
| frontend/public/images/7cfa5f8f-a2f8-47ad-acbd-da7137baf990.jpg | file | Part of frontend component |
| frontend/public/images/ad76c455-5bf9-4335-8517-fc03834ab828.jpg | file | Part of frontend component |
| frontend/public/images/d3e5adaf-084c-4dd5-9d29-94f1d6bccd98.jpg | file | Part of frontend component |
| frontend/public/images/deer.svg | file | Part of frontend component |
| frontend/scripts/save-demo.js | file | Part of frontend component |
| frontend/src/app/[lang]/docs/[[...mdxPath]]/page.tsx | file | Part of frontend component |
| frontend/src/app/[lang]/docs/layout.tsx | file | Part of frontend component |
| frontend/src/app/api/auth/[...all]/route.ts | file | Part of frontend component |
| frontend/src/app/api/memory/[...path]/route.ts | file | Part of frontend component |
| frontend/src/app/api/memory/route.ts | file | Part of frontend component |
| frontend/src/app/layout.tsx | file | Part of frontend component |
| frontend/src/app/mock/api/mcp/config/route.ts | file | Part of frontend component |
| frontend/src/app/mock/api/models/route.ts | file | Part of frontend component |
| frontend/src/app/mock/api/skills/route.ts | file | Part of frontend component |
| frontend/src/app/mock/api/threads/[thread_id]/artifacts/[[...artifact_path]]/route.ts | file | Part of frontend component |
| frontend/src/app/mock/api/threads/[thread_id]/history/route.ts | file | Part of frontend component |
| frontend/src/app/mock/api/threads/search/route.ts | file | Part of frontend component |
| frontend/src/app/page.tsx | file | Part of frontend component |
| frontend/src/app/workspace/agents/[agent_name]/chats/[thread_id]/layout.tsx | agent | Part of frontend component |
| frontend/src/app/workspace/agents/[agent_name]/chats/[thread_id]/page.tsx | agent | Part of frontend component |
| frontend/src/app/workspace/agents/new/page.tsx | agent | Part of frontend component |
| frontend/src/app/workspace/agents/page.tsx | agent | Part of frontend component |
| frontend/src/app/workspace/chats/[thread_id]/layout.tsx | file | Part of frontend component |
| frontend/src/app/workspace/chats/[thread_id]/page.tsx | file | Part of frontend component |
| frontend/src/app/workspace/chats/page.tsx | file | Part of frontend component |
| frontend/src/app/workspace/layout.tsx | file | Part of frontend component |
| frontend/src/app/workspace/page.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/artifact.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/canvas.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/chain-of-thought.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/checkpoint.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/code-block.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/connection.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/context.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/controls.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/conversation.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/edge.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/image.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/loader.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/message.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/model-selector.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/node.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/open-in-chat.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/panel.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/plan.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/prompt-input.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/queue.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/reasoning.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/shimmer.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/sources.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/suggestion.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/task.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/toolbar.tsx | file | Part of frontend component |
| frontend/src/components/ai-elements/web-preview.tsx | file | Part of frontend component |
| frontend/src/components/landing/footer.tsx | file | Part of frontend component |
| frontend/src/components/landing/header.tsx | file | Part of frontend component |
| frontend/src/components/landing/hero.tsx | file | Part of frontend component |
| frontend/src/components/landing/progressive-skills-animation.tsx | file | Part of frontend component |
| frontend/src/components/landing/section.tsx | file | Part of frontend component |
| frontend/src/components/landing/sections/case-study-section.tsx | file | Part of frontend component |
| frontend/src/components/landing/sections/community-section.tsx | file | Part of frontend component |
| frontend/src/components/landing/sections/sandbox-section.tsx | file | Part of frontend component |
| frontend/src/components/landing/sections/skills-section.tsx | file | Part of frontend component |
| frontend/src/components/landing/sections/whats-new-section.tsx | file | Part of frontend component |
| frontend/src/components/theme-provider.tsx | file | Part of frontend component |
| frontend/src/components/ui/alert.tsx | file | Part of frontend component |
| frontend/src/components/ui/aurora-text.tsx | file | Part of frontend component |
| frontend/src/components/ui/avatar.tsx | file | Part of frontend component |
| frontend/src/components/ui/badge.tsx | file | Part of frontend component |
| frontend/src/components/ui/breadcrumb.tsx | file | Part of frontend component |
| frontend/src/components/ui/button-group.tsx | file | Part of frontend component |
| frontend/src/components/ui/button.tsx | file | Part of frontend component |
| frontend/src/components/ui/card.tsx | file | Part of frontend component |
| frontend/src/components/ui/carousel.tsx | file | Part of frontend component |
| frontend/src/components/ui/collapsible.tsx | file | Part of frontend component |
| frontend/src/components/ui/command.tsx | file | Part of frontend component |
| frontend/src/components/ui/confetti-button.tsx | file | Part of frontend component |
| frontend/src/components/ui/dialog.tsx | file | Part of frontend component |
| frontend/src/components/ui/dropdown-menu.tsx | file | Part of frontend component |
| frontend/src/components/ui/empty.tsx | file | Part of frontend component |
| frontend/src/components/ui/flickering-grid.tsx | file | Part of frontend component |
| frontend/src/components/ui/galaxy.css | file | Part of frontend component |
| frontend/src/components/ui/galaxy.jsx | file | Part of frontend component |
| frontend/src/components/ui/hover-card.tsx | file | Part of frontend component |
| frontend/src/components/ui/input-group.tsx | file | Part of frontend component |
| frontend/src/components/ui/input.tsx | file | Part of frontend component |
| frontend/src/components/ui/item.tsx | file | Part of frontend component |
| frontend/src/components/ui/magic-bento.css | file | Part of frontend component |
| frontend/src/components/ui/magic-bento.tsx | file | Part of frontend component |
| frontend/src/components/ui/number-ticker.tsx | file | Part of frontend component |
| frontend/src/components/ui/progress.tsx | file | Part of frontend component |
| frontend/src/components/ui/resizable.tsx | file | Part of frontend component |
| frontend/src/components/ui/scroll-area.tsx | file | Part of frontend component |
| frontend/src/components/ui/select.tsx | file | Part of frontend component |
| frontend/src/components/ui/separator.tsx | file | Part of frontend component |
| frontend/src/components/ui/sheet.tsx | file | Part of frontend component |
| frontend/src/components/ui/shine-border.tsx | file | Part of frontend component |
| frontend/src/components/ui/sidebar.tsx | file | Part of frontend component |
| frontend/src/components/ui/skeleton.tsx | file | Part of frontend component |
| frontend/src/components/ui/sonner.tsx | file | Part of frontend component |
| frontend/src/components/ui/spotlight-card.css | file | Part of frontend component |
| frontend/src/components/ui/spotlight-card.tsx | file | Part of frontend component |
| frontend/src/components/ui/switch.tsx | file | Part of frontend component |
| frontend/src/components/ui/tabs.tsx | file | Part of frontend component |
| frontend/src/components/ui/terminal.tsx | file | Part of frontend component |
| frontend/src/components/ui/textarea.tsx | file | Part of frontend component |
| frontend/src/components/ui/toggle-group.tsx | file | Part of frontend component |
| frontend/src/components/ui/toggle.tsx | file | Part of frontend component |
| frontend/src/components/ui/tooltip.tsx | file | Part of frontend component |
| frontend/src/components/ui/word-rotate.tsx | file | Part of frontend component |
| frontend/src/components/workspace/agent-welcome.tsx | agent | Part of frontend component |
| frontend/src/components/workspace/agents/agent-card.tsx | agent | Part of frontend component |
| frontend/src/components/workspace/agents/agent-gallery.tsx | agent | Part of frontend component |
| frontend/src/components/workspace/artifacts/artifact-file-detail.tsx | file | Part of frontend component |
| frontend/src/components/workspace/artifacts/artifact-file-list.tsx | file | Part of frontend component |
| frontend/src/components/workspace/artifacts/artifact-trigger.tsx | file | Part of frontend component |
| frontend/src/components/workspace/artifacts/context.tsx | file | Part of frontend component |
| frontend/src/components/workspace/artifacts/index.ts | file | Part of frontend component |
| frontend/src/components/workspace/chats/chat-box.tsx | file | Part of frontend component |
| frontend/src/components/workspace/chats/index.ts | file | Part of frontend component |
| frontend/src/components/workspace/chats/use-chat-mode.ts | file | Part of frontend component |
| frontend/src/components/workspace/chats/use-thread-chat.ts | file | Part of frontend component |
| frontend/src/components/workspace/citations/artifact-link.tsx | file | Part of frontend component |
| frontend/src/components/workspace/citations/citation-link.tsx | file | Part of frontend component |
| frontend/src/components/workspace/code-editor.tsx | file | Part of frontend component |
| frontend/src/components/workspace/command-palette.tsx | file | Part of frontend component |
| frontend/src/components/workspace/copy-button.tsx | file | Part of frontend component |
| frontend/src/components/workspace/export-trigger.tsx | file | Part of frontend component |
| frontend/src/components/workspace/flip-display.tsx | file | Part of frontend component |
| frontend/src/components/workspace/github-icon.tsx | file | Part of frontend component |
| frontend/src/components/workspace/input-box.tsx | file | Part of frontend component |
| frontend/src/components/workspace/messages/context.ts | file | Part of frontend component |
| frontend/src/components/workspace/messages/index.ts | file | Part of frontend component |
| frontend/src/components/workspace/messages/markdown-content.tsx | file | Part of frontend component |
| frontend/src/components/workspace/messages/message-group.tsx | file | Part of frontend component |
| frontend/src/components/workspace/messages/message-list-item.tsx | file | Part of frontend component |
| frontend/src/components/workspace/messages/message-list.tsx | file | Part of frontend component |
| frontend/src/components/workspace/messages/skeleton.tsx | file | Part of frontend component |
| frontend/src/components/workspace/messages/subtask-card.tsx | file | Part of frontend component |
| frontend/src/components/workspace/mode-hover-guide.tsx | file | Part of frontend component |
| frontend/src/components/workspace/overscroll.tsx | file | Part of frontend component |
| frontend/src/components/workspace/recent-chat-list.tsx | file | Part of frontend component |
| frontend/src/components/workspace/settings/about-content.ts | file | Part of frontend component |
| frontend/src/components/workspace/settings/about-settings-page.tsx | file | Part of frontend component |
| frontend/src/components/workspace/settings/about.md | file | Part of frontend component |
| frontend/src/components/workspace/settings/appearance-settings-page.tsx | file | Part of frontend component |
| frontend/src/components/workspace/settings/index.ts | file | Part of frontend component |
| frontend/src/components/workspace/settings/memory-settings-page.tsx | file | Part of frontend component |
| frontend/src/components/workspace/settings/notification-settings-page.tsx | file | Part of frontend component |
| frontend/src/components/workspace/settings/settings-dialog.tsx | file | Part of frontend component |
| frontend/src/components/workspace/settings/settings-section.tsx | file | Part of frontend component |
| frontend/src/components/workspace/settings/skill-settings-page.tsx | file | Part of frontend component |
| frontend/src/components/workspace/settings/tool-settings-page.tsx | file | Part of frontend component |
| frontend/src/components/workspace/streaming-indicator.tsx | file | Part of frontend component |
| frontend/src/components/workspace/thread-title.tsx | file | Part of frontend component |
| frontend/src/components/workspace/todo-list.tsx | file | Part of frontend component |
| frontend/src/components/workspace/token-usage-indicator.tsx | file | Part of frontend component |
| frontend/src/components/workspace/tooltip.tsx | file | Part of frontend component |
| frontend/src/components/workspace/welcome.tsx | file | Part of frontend component |
| frontend/src/components/workspace/workspace-container.tsx | file | Part of frontend component |
| frontend/src/components/workspace/workspace-header.tsx | file | Part of frontend component |
| frontend/src/components/workspace/workspace-nav-chat-list.tsx | file | Part of frontend component |
| frontend/src/components/workspace/workspace-nav-menu.tsx | file | Part of frontend component |
| frontend/src/components/workspace/workspace-sidebar.tsx | file | Part of frontend component |
| frontend/src/content/en/_meta.ts | file | Part of frontend component |
| frontend/src/content/en/application/_meta.ts | file | Part of frontend component |
| frontend/src/content/en/application/agents-and-threads.mdx | agent | Part of frontend component |
| frontend/src/content/en/application/configuration.mdx | file | Part of frontend component |
| frontend/src/content/en/application/deployment-guide.mdx | file | Part of frontend component |
| frontend/src/content/en/application/index.mdx | file | Part of frontend component |
| frontend/src/content/en/application/operations-and-troubleshooting.mdx | file | Part of frontend component |
| frontend/src/content/en/application/quick-start.mdx | file | Part of frontend component |
| frontend/src/content/en/application/workspace-usage.mdx | file | Part of frontend component |
| frontend/src/content/en/harness/_meta.ts | file | Part of frontend component |
| frontend/src/content/en/harness/configuration.mdx | file | Part of frontend component |
| frontend/src/content/en/harness/customization.mdx | file | Part of frontend component |
| frontend/src/content/en/harness/design-principles.mdx | file | Part of frontend component |
| frontend/src/content/en/harness/index.mdx | file | Part of frontend component |
| frontend/src/content/en/harness/integration-guide.mdx | file | Part of frontend component |
| frontend/src/content/en/harness/memory.mdx | file | Part of frontend component |
| frontend/src/content/en/harness/quick-start.mdx | file | Part of frontend component |
| frontend/src/content/en/harness/sandbox.mdx | file | Part of frontend component |
| frontend/src/content/en/harness/skills.mdx | file | Part of frontend component |
| frontend/src/content/en/harness/tools.mdx | file | Part of frontend component |
| frontend/src/content/en/index.mdx | file | Part of frontend component |
| frontend/src/content/en/introduction/_meta.ts | file | Part of frontend component |
| frontend/src/content/en/introduction/core-concepts.mdx | file | Part of frontend component |
| frontend/src/content/en/introduction/harness-vs-app.mdx | file | Part of frontend component |
| frontend/src/content/en/introduction/why-deerflow.mdx | file | Part of frontend component |
| frontend/src/content/en/reference/_meta.ts | file | Part of frontend component |
| frontend/src/content/en/reference/api-gateway-reference.mdx | file | Part of frontend component |
| frontend/src/content/en/reference/concepts-glossary.mdx | file | Part of frontend component |
| frontend/src/content/en/reference/configuration-reference.mdx | file | Part of frontend component |
| frontend/src/content/en/reference/runtime-flags-and-modes.mdx | file | Part of frontend component |
| frontend/src/content/en/reference/source-map.mdx | file | Part of frontend component |
| frontend/src/content/en/tutorials/_meta.ts | file | Part of frontend component |
| frontend/src/content/en/tutorials/create-your-first-harness.mdx | file | Part of frontend component |
| frontend/src/content/en/tutorials/deploy-your-own-deerflow.mdx | file | Part of frontend component |
| frontend/src/content/en/tutorials/first-conversation.mdx | file | Part of frontend component |
| frontend/src/content/en/tutorials/use-tools-and-skills.mdx | file | Part of frontend component |
| frontend/src/content/en/tutorials/work-with-memory.mdx | file | Part of frontend component |
| frontend/src/content/zh/_meta.ts | file | Part of frontend component |
| frontend/src/content/zh/index.mdx | file | Part of frontend component |
| frontend/src/core/agents/api.ts | agent | Part of frontend component |
| frontend/src/core/agents/hooks.ts | agent | Part of frontend component |
| frontend/src/core/agents/index.ts | agent | Part of frontend component |
| frontend/src/core/agents/types.ts | agent | Part of frontend component |
| frontend/src/core/api/api-client.ts | file | Part of frontend component |
| frontend/src/core/api/index.ts | file | Part of frontend component |
| frontend/src/core/api/stream-mode.test.ts | file | Part of frontend component |
| frontend/src/core/api/stream-mode.ts | file | Part of frontend component |
| frontend/src/core/artifacts/hooks.ts | file | Part of frontend component |
| frontend/src/core/artifacts/index.ts | file | Part of frontend component |
| frontend/src/core/artifacts/loader.ts | file | Part of frontend component |
| frontend/src/core/artifacts/utils.ts | file | Part of frontend component |
| frontend/src/core/config/index.ts | file | Part of frontend component |
| frontend/src/core/i18n/context.tsx | file | Part of frontend component |
| frontend/src/core/i18n/cookies.ts | file | Part of frontend component |
| frontend/src/core/i18n/hooks.ts | file | Part of frontend component |
| frontend/src/core/i18n/index.ts | file | Part of frontend component |
| frontend/src/core/i18n/locale.ts | file | Part of frontend component |
| frontend/src/core/i18n/locales/en-US.ts | file | Part of frontend component |
| frontend/src/core/i18n/locales/index.ts | file | Part of frontend component |
| frontend/src/core/i18n/locales/types.ts | file | Part of frontend component |
| frontend/src/core/i18n/locales/zh-CN.ts | file | Part of frontend component |
| frontend/src/core/i18n/server.ts | file | Part of frontend component |
| frontend/src/core/i18n/translations.ts | file | Part of frontend component |
| frontend/src/core/mcp/api.ts | file | Part of frontend component |
| frontend/src/core/mcp/hooks.ts | file | Part of frontend component |
| frontend/src/core/mcp/index.ts | file | Part of frontend component |
| frontend/src/core/mcp/types.ts | file | Part of frontend component |
| frontend/src/core/memory/api.ts | file | Part of frontend component |
| frontend/src/core/memory/hooks.ts | file | Part of frontend component |
| frontend/src/core/memory/index.ts | file | Part of frontend component |
| frontend/src/core/memory/types.ts | file | Part of frontend component |
| frontend/src/core/messages/usage.ts | file | Part of frontend component |
| frontend/src/core/messages/utils.ts | file | Part of frontend component |
| frontend/src/core/models/api.ts | file | Part of frontend component |
| frontend/src/core/models/hooks.ts | file | Part of frontend component |
| frontend/src/core/models/index.ts | file | Part of frontend component |
| frontend/src/core/models/types.ts | file | Part of frontend component |
| frontend/src/core/notification/hooks.ts | file | Part of frontend component |
| frontend/src/core/rehype/index.ts | file | Part of frontend component |
| frontend/src/core/settings/hooks.ts | file | Part of frontend component |
| frontend/src/core/settings/index.ts | file | Part of frontend component |
| frontend/src/core/settings/local.ts | file | Part of frontend component |
| frontend/src/core/skills/api.ts | file | Part of frontend component |
| frontend/src/core/skills/hooks.ts | file | Part of frontend component |
| frontend/src/core/skills/index.ts | file | Part of frontend component |
| frontend/src/core/skills/type.ts | file | Part of frontend component |
| frontend/src/core/streamdown/index.ts | file | Part of frontend component |
| frontend/src/core/streamdown/plugins.ts | file | Part of frontend component |
| frontend/src/core/tasks/context.tsx | file | Part of frontend component |
| frontend/src/core/tasks/index.ts | file | Part of frontend component |
| frontend/src/core/tasks/types.ts | file | Part of frontend component |
| frontend/src/core/threads/export.ts | file | Part of frontend component |
| frontend/src/core/threads/hooks.ts | file | Part of frontend component |
| frontend/src/core/threads/index.ts | file | Part of frontend component |
| frontend/src/core/threads/types.ts | file | Part of frontend component |
| frontend/src/core/threads/utils.ts | file | Part of frontend component |
| frontend/src/core/todos/index.ts | file | Part of frontend component |
| frontend/src/core/todos/types.ts | file | Part of frontend component |
| frontend/src/core/tools/utils.ts | file | Part of frontend component |
| frontend/src/core/uploads/api.ts | file | Part of frontend component |
| frontend/src/core/uploads/file-validation.test.mjs | file | Part of frontend component |
| frontend/src/core/uploads/file-validation.ts | file | Part of frontend component |
| frontend/src/core/uploads/hooks.ts | file | Part of frontend component |
| frontend/src/core/uploads/index.ts | file | Part of frontend component |
| frontend/src/core/uploads/prompt-input-files.test.mjs | file | Part of frontend component |
| frontend/src/core/uploads/prompt-input-files.ts | file | Part of frontend component |
| frontend/src/core/utils/datetime.ts | file | Part of frontend component |
| frontend/src/core/utils/files.tsx | file | Part of frontend component |
| frontend/src/core/utils/json.ts | file | Part of frontend component |
| frontend/src/core/utils/markdown.ts | file | Part of frontend component |
| frontend/src/core/utils/uuid.ts | file | Part of frontend component |
| frontend/src/env.js | file | Part of frontend component |
| frontend/src/hooks/use-global-shortcuts.ts | file | Part of frontend component |
| frontend/src/hooks/use-mobile.ts | file | Part of frontend component |
| frontend/src/lib/ime.ts | file | Part of frontend component |
| frontend/src/lib/utils.ts | file | Part of frontend component |
| frontend/src/mdx-components.ts | file | Part of frontend component |
| frontend/src/server/better-auth/client.ts | file | Part of frontend component |
| frontend/src/server/better-auth/config.ts | file | Part of frontend component |
| frontend/src/server/better-auth/index.ts | file | Part of frontend component |
| frontend/src/server/better-auth/server.ts | file | Part of frontend component |
| frontend/src/styles/globals.css | file | Part of frontend component |
| frontend/src/typings/md.d.ts | file | Part of frontend component |
| frontend/tsconfig.json | file | Part of frontend component |
| scripts/check.py | file | Part of scripts component |
| scripts/check.sh | file | Part of scripts component |
| scripts/cleanup-containers.sh | file | Part of scripts component |
| scripts/config-upgrade.sh | file | Part of scripts component |
| scripts/configure.py | file | Part of scripts component |
| scripts/deploy.sh | file | Part of scripts component |
| scripts/docker.sh | file | Part of scripts component |
| scripts/export_claude_code_oauth.py | file | Part of scripts component |
| scripts/load_memory_sample.py | file | Part of scripts component |
| scripts/run-with-git-bash.cmd | file | Part of scripts component |
| scripts/serve.sh | file | Part of scripts component |
| scripts/start-daemon.sh | file | Part of scripts component |
| scripts/tool-error-degradation-detection.sh | file | Part of scripts component |
| scripts/wait-for-port.sh | file | Part of scripts component |
| skills/public/academic-paper-review/SKILL.md | config/skill | Part of skills component |
| skills/public/bootstrap/SKILL.md | config/skill | Part of skills component |
| skills/public/bootstrap/references/conversation-guide.md | file | Part of skills component |
| skills/public/bootstrap/templates/SOUL.template.md | file | Part of skills component |
| skills/public/chart-visualization/SKILL.md | config/skill | Part of skills component |
| skills/public/chart-visualization/references/generate_area_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_bar_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_boxplot_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_column_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_district_map.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_dual_axes_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_fishbone_diagram.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_flow_diagram.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_funnel_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_histogram_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_line_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_liquid_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_mind_map.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_network_graph.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_organization_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_path_map.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_pie_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_pin_map.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_radar_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_sankey_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_scatter_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_spreadsheet.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_treemap_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_venn_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_violin_chart.md | file | Part of skills component |
| skills/public/chart-visualization/references/generate_word_cloud_chart.md | file | Part of skills component |
| skills/public/chart-visualization/scripts/generate.js | file | Part of skills component |
| skills/public/claude-to-deerflow/SKILL.md | config/skill | Part of skills component |
| skills/public/claude-to-deerflow/scripts/chat.sh | file | Part of skills component |
| skills/public/claude-to-deerflow/scripts/status.sh | file | Part of skills component |
| skills/public/code-documentation/SKILL.md | config/skill | Part of skills component |
| skills/public/consulting-analysis/SKILL.md | config/skill | Part of skills component |
| skills/public/data-analysis/SKILL.md | config/skill | Part of skills component |
| skills/public/data-analysis/scripts/analyze.py | file | Part of skills component |
| skills/public/deep-research/SKILL.md | config/skill | Part of skills component |
| skills/public/find-skills/SKILL.md | config/skill | Part of skills component |
| skills/public/find-skills/scripts/install-skill.sh | file | Part of skills component |
| skills/public/frontend-design/LICENSE.txt | file | Part of skills component |
| skills/public/frontend-design/SKILL.md | config/skill | Part of skills component |
| skills/public/github-deep-research/SKILL.md | config/skill | Part of skills component |
| skills/public/github-deep-research/assets/report_template.md | file | Part of skills component |
| skills/public/github-deep-research/scripts/github_api.py | file | Part of skills component |
| skills/public/image-generation/SKILL.md | config/skill | Part of skills component |
| skills/public/image-generation/scripts/generate.py | file | Part of skills component |
| skills/public/image-generation/templates/doraemon.md | file | Part of skills component |
| skills/public/newsletter-generation/SKILL.md | config/skill | Part of skills component |
| skills/public/podcast-generation/SKILL.md | config/skill | Part of skills component |
| skills/public/podcast-generation/scripts/generate.py | file | Part of skills component |
| skills/public/podcast-generation/templates/tech-explainer.md | file | Part of skills component |
| skills/public/ppt-generation/SKILL.md | config/skill | Part of skills component |
| skills/public/ppt-generation/scripts/generate.py | file | Part of skills component |
| skills/public/skill-creator/LICENSE.txt | file | Part of skills component |
| skills/public/skill-creator/SKILL.md | config/skill | Part of skills component |
| skills/public/skill-creator/agents/analyzer.md | agent | Part of skills component |
| skills/public/skill-creator/agents/comparator.md | agent | Part of skills component |
| skills/public/skill-creator/agents/grader.md | agent | Part of skills component |
| skills/public/skill-creator/assets/eval_review.html | file | Part of skills component |
| skills/public/skill-creator/eval-viewer/generate_review.py | file | Part of skills component |
| skills/public/skill-creator/eval-viewer/viewer.html | file | Part of skills component |
| skills/public/skill-creator/references/output-patterns.md | file | Part of skills component |
| skills/public/skill-creator/references/schemas.md | file | Part of skills component |
| skills/public/skill-creator/references/workflows.md | file | Part of skills component |
| skills/public/skill-creator/scripts/aggregate_benchmark.py | file | Part of skills component |
| skills/public/skill-creator/scripts/generate_report.py | file | Part of skills component |
| skills/public/skill-creator/scripts/improve_description.py | file | Part of skills component |
| skills/public/skill-creator/scripts/init_skill.py | file | Part of skills component |
| skills/public/skill-creator/scripts/package_skill.py | file | Part of skills component |
| skills/public/skill-creator/scripts/quick_validate.py | file | Part of skills component |
| skills/public/skill-creator/scripts/run_eval.py | file | Part of skills component |
| skills/public/skill-creator/scripts/run_loop.py | file | Part of skills component |
| skills/public/skill-creator/scripts/utils.py | file | Part of skills component |
| skills/public/surprise-me/SKILL.md | config/skill | Part of skills component |
| skills/public/vercel-deploy-claimable/SKILL.md | config/skill | Part of skills component |
| skills/public/vercel-deploy-claimable/scripts/deploy.sh | file | Part of skills component |
| skills/public/video-generation/SKILL.md | config/skill | Part of skills component |
| skills/public/video-generation/scripts/generate.py | file | Part of skills component |
| skills/public/web-design-guidelines/SKILL.md | config/skill | Part of skills component |

## Hidden config files (CRITICAL)

These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|---------------|--------------------|---------|
| .dockerignore | VISIBLE_dockerignore | Custom hidden file/folder |
| .gitattributes | VISIBLE_gitattributes | Custom hidden file/folder |
| .gitignore | VISIBLE_gitignore | Git ignore rules |
| .github/ | VISIBLE_github/ | GitHub workflows |
| .env.example | VISIBLE_env.example | Custom hidden file/folder |

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|-----------------------|-----|
| skills/public/data-analysis/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| backend/AGENTS.md | COMBINED/agents/by-role/deer-flow/ | Core agent files |
| skills/public/surprise-me/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/academic-paper-review/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| frontend/CLAUDE.md | COMBINED/prompts/system/ | System instructions |
| skills/public/web-design-guidelines/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/newsletter-generation/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/frontend-design/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/github-deep-research/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| README.md | COMBINED/REPO_DOCS/05-deer-flow/ | Documentation |
| skills/public/consulting-analysis/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/ppt-generation/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/vercel-deploy-claimable/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/bootstrap/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/find-skills/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/podcast-generation/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/deep-research/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/video-generation/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/claude-to-deerflow/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/image-generation/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/skill-creator/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| frontend/AGENTS.md | COMBINED/agents/by-role/deer-flow/ | Core agent files |
| skills/public/chart-visualization/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| skills/public/code-documentation/SKILL.md | COMBINED/skills/deer-flow/ | Agent skill definition |
| backend/CLAUDE.md | COMBINED/prompts/system/ | System instructions |

## Key insights for ULTRACAR integration

- This is a highly scalable, enterprise-grade framework using LangGraph.\n- Utilizes a robust middleware-based execution loop (similar to standard backend frameworks) but adapted for Agent flows (e.g. checkpointer, memory, titles).\n- Built for massive sub-agent topologies rather than just a single assistant loop.

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
mv VISIBLE_dockerignore .dockerignore
mv VISIBLE_gitattributes .gitattributes
mv VISIBLE_gitignore .gitignore
mv VISIBLE_github/ .github/
mv VISIBLE_env.example .env.example
```

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md
─────────────────────────────────────────────────────────
