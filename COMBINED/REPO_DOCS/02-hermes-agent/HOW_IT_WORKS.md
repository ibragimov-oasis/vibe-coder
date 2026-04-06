─────────────────────────────────────────────────────────

# hermes-agent — How It Works

Original repo: https://github.com/NousResearch/hermes-agent
Stars: 21k ⭐
Category: Agents / Orchestration
Local path in vibe-coder: Agents/hermes-agent/
License: MIT

## What it does (plain language for vibe-coders)

Hermes Agent is a self-improving AI agent that learns from experience, remembers context across sessions, and executes on your behalf. It integrates with Telegram, Discord, Slack, and other platforms and can be run very cheaply on a standard VPS.

## How the AI reads this repo (startup sequence)

Step 1: AI reads `AGENTS.md` → learns high-level agent architecture, memory integration, and roles.\nStep 2: AI reads `cli-config.yaml.example` → learns configuration needed for external messaging (Discord, Telegram).\nStep 3: AI uses `.plans/` and various `plugins/memory/` and `optional-skills/` to define specific runtime execution and memory handling.

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|------------|--------------|
| .dockerignore | file | Root configuration or documentation |
| .env.example | file | Root configuration or documentation |
| .envrc | file | Root configuration or documentation |
| .github/ISSUE_TEMPLATE/bug_report.yml | file | Part of .github component |
| .github/ISSUE_TEMPLATE/config.yml | file | Part of .github component |
| .github/ISSUE_TEMPLATE/feature_request.yml | file | Part of .github component |
| .github/ISSUE_TEMPLATE/setup_help.yml | file | Part of .github component |
| .github/PULL_REQUEST_TEMPLATE.md | file | Part of .github component |
| .github/workflows/deploy-site.yml | file | Part of .github component |
| .github/workflows/docker-publish.yml | file | Part of .github component |
| .github/workflows/docs-site-checks.yml | file | Part of .github component |
| .github/workflows/nix.yml | file | Part of .github component |
| .github/workflows/supply-chain-audit.yml | file | Part of .github component |
| .github/workflows/tests.yml | file | Part of .github component |
| .gitignore | file | Root configuration or documentation |
| .gitmodules | file | Root configuration or documentation |
| .plans/openai-api-server.md | file | Part of .plans component |
| .plans/streaming-support.md | file | Part of .plans component |
| AGENTS.md | agent | Root configuration or documentation |
| CONTRIBUTING.md | file | Root configuration or documentation |
| Dockerfile | file | Root configuration or documentation |
| LICENSE | file | Root configuration or documentation |
| MANIFEST.in | file | Root configuration or documentation |
| README.md | Documentation | Explains how to install and use |
| RELEASE_v0.2.0.md | file | Root configuration or documentation |
| RELEASE_v0.3.0.md | file | Root configuration or documentation |
| RELEASE_v0.4.0.md | file | Root configuration or documentation |
| RELEASE_v0.5.0.md | file | Root configuration or documentation |
| RELEASE_v0.6.0.md | file | Root configuration or documentation |
| RELEASE_v0.7.0.md | file | Root configuration or documentation |
| acp_adapter/__init__.py | file | Part of acp_adapter component |
| acp_adapter/__main__.py | file | Part of acp_adapter component |
| acp_adapter/auth.py | file | Part of acp_adapter component |
| acp_adapter/entry.py | file | Part of acp_adapter component |
| acp_adapter/events.py | file | Part of acp_adapter component |
| acp_adapter/permissions.py | file | Part of acp_adapter component |
| acp_adapter/server.py | file | Part of acp_adapter component |
| acp_adapter/session.py | file | Part of acp_adapter component |
| acp_adapter/tools.py | file | Part of acp_adapter component |
| acp_registry/agent.json | agent | Part of acp_registry component |
| acp_registry/icon.svg | file | Part of acp_registry component |
| agent/__init__.py | agent | Part of agent component |
| agent/anthropic_adapter.py | agent | Part of agent component |
| agent/auxiliary_client.py | agent | Part of agent component |
| agent/builtin_memory_provider.py | agent | Part of agent component |
| agent/context_compressor.py | agent | Part of agent component |
| agent/context_references.py | agent | Part of agent component |
| agent/copilot_acp_client.py | agent | Part of agent component |
| agent/credential_pool.py | agent | Part of agent component |
| agent/display.py | agent | Part of agent component |
| agent/insights.py | agent | Part of agent component |
| agent/memory_manager.py | agent | Part of agent component |
| agent/memory_provider.py | agent | Part of agent component |
| agent/model_metadata.py | agent | Part of agent component |
| agent/models_dev.py | agent | Part of agent component |
| agent/prompt_builder.py | agent | Part of agent component |
| agent/prompt_caching.py | agent | Part of agent component |
| agent/redact.py | agent | Part of agent component |
| agent/skill_commands.py | agent | Part of agent component |
| agent/skill_utils.py | agent | Part of agent component |
| agent/smart_model_routing.py | agent | Part of agent component |
| agent/title_generator.py | agent | Part of agent component |
| agent/trajectory.py | agent | Part of agent component |
| agent/usage_pricing.py | agent | Part of agent component |
| assets/banner.png | file | Part of assets component |
| batch_runner.py | file | Root configuration or documentation |
| cli-config.yaml.example | file | Root configuration or documentation |
| cli.py | file | Root configuration or documentation |
| cron/__init__.py | file | Part of cron component |
| cron/jobs.py | file | Part of cron component |
| cron/scheduler.py | file | Part of cron component |
| datagen-config-examples/example_browser_tasks.jsonl | file | Part of datagen-config-examples component |
| datagen-config-examples/run_browser_tasks.sh | file | Part of datagen-config-examples component |
| datagen-config-examples/trajectory_compression.yaml | file | Part of datagen-config-examples component |
| datagen-config-examples/web_research.yaml | file | Part of datagen-config-examples component |
| docker/SOUL.md | file | Part of docker component |
| docker/entrypoint.sh | file | Part of docker component |
| docs/acp-setup.md | file | Part of docs component |
| docs/honcho-integration-spec.html | file | Part of docs component |
| docs/honcho-integration-spec.md | file | Part of docs component |
| docs/migration/openclaw.md | file | Part of docs component |
| docs/plans/2026-03-16-pricing-accuracy-architecture-design.md | file | Part of docs component |
| docs/skins/example-skin.yaml | file | Part of docs component |
| environments/README.md | Documentation | Explains how to install and use |
| environments/__init__.py | file | Part of environments component |
| environments/agent_loop.py | agent | Part of environments component |
| environments/agentic_opd_env.py | agent | Part of environments component |
| environments/benchmarks/__init__.py | file | Part of environments component |
| environments/benchmarks/tblite/README.md | Documentation | Explains how to install and use |
| environments/benchmarks/tblite/__init__.py | file | Part of environments component |
| environments/benchmarks/tblite/default.yaml | file | Part of environments component |
| environments/benchmarks/tblite/local.yaml | file | Part of environments component |
| environments/benchmarks/tblite/local_vllm.yaml | file | Part of environments component |
| environments/benchmarks/tblite/run_eval.sh | file | Part of environments component |
| environments/benchmarks/tblite/tblite_env.py | file | Part of environments component |
| environments/benchmarks/terminalbench_2/__init__.py | file | Part of environments component |
| environments/benchmarks/terminalbench_2/default.yaml | file | Part of environments component |
| environments/benchmarks/terminalbench_2/run_eval.sh | file | Part of environments component |
| environments/benchmarks/terminalbench_2/terminalbench2_env.py | file | Part of environments component |
| environments/benchmarks/yc_bench/README.md | Documentation | Explains how to install and use |
| environments/benchmarks/yc_bench/__init__.py | file | Part of environments component |
| environments/benchmarks/yc_bench/default.yaml | file | Part of environments component |
| environments/benchmarks/yc_bench/run_eval.sh | file | Part of environments component |
| environments/benchmarks/yc_bench/yc_bench_env.py | file | Part of environments component |
| environments/hermes_base_env.py | file | Part of environments component |
| environments/hermes_swe_env/__init__.py | file | Part of environments component |
| environments/hermes_swe_env/default.yaml | file | Part of environments component |
| environments/hermes_swe_env/hermes_swe_env.py | file | Part of environments component |
| environments/patches.py | file | Part of environments component |
| environments/terminal_test_env/__init__.py | file | Part of environments component |
| environments/terminal_test_env/default.yaml | file | Part of environments component |
| environments/terminal_test_env/terminal_test_env.py | file | Part of environments component |
| environments/tool_call_parsers/__init__.py | file | Part of environments component |
| environments/tool_call_parsers/deepseek_v3_1_parser.py | file | Part of environments component |
| environments/tool_call_parsers/deepseek_v3_parser.py | file | Part of environments component |
| environments/tool_call_parsers/glm45_parser.py | file | Part of environments component |
| environments/tool_call_parsers/glm47_parser.py | file | Part of environments component |
| environments/tool_call_parsers/hermes_parser.py | file | Part of environments component |
| environments/tool_call_parsers/kimi_k2_parser.py | file | Part of environments component |
| environments/tool_call_parsers/llama_parser.py | file | Part of environments component |
| environments/tool_call_parsers/longcat_parser.py | file | Part of environments component |
| environments/tool_call_parsers/mistral_parser.py | file | Part of environments component |
| environments/tool_call_parsers/qwen3_coder_parser.py | file | Part of environments component |
| environments/tool_call_parsers/qwen_parser.py | file | Part of environments component |
| environments/tool_context.py | file | Part of environments component |
| environments/web_research_env.py | file | Part of environments component |
| flake.lock | file | Root configuration or documentation |
| flake.nix | file | Root configuration or documentation |
| gateway/__init__.py | file | Part of gateway component |
| gateway/builtin_hooks/__init__.py | file | Part of gateway component |
| gateway/builtin_hooks/boot_md.py | file | Part of gateway component |
| gateway/channel_directory.py | file | Part of gateway component |
| gateway/config.py | file | Part of gateway component |
| gateway/delivery.py | file | Part of gateway component |
| gateway/hooks.py | file | Part of gateway component |
| gateway/mirror.py | file | Part of gateway component |
| gateway/pairing.py | file | Part of gateway component |
| gateway/platforms/ADDING_A_PLATFORM.md | file | Part of gateway component |
| gateway/platforms/__init__.py | file | Part of gateway component |
| gateway/platforms/api_server.py | file | Part of gateway component |
| gateway/platforms/base.py | file | Part of gateway component |
| gateway/platforms/dingtalk.py | file | Part of gateway component |
| gateway/platforms/discord.py | file | Part of gateway component |
| gateway/platforms/email.py | file | Part of gateway component |
| gateway/platforms/feishu.py | file | Part of gateway component |
| gateway/platforms/homeassistant.py | file | Part of gateway component |
| gateway/platforms/matrix.py | file | Part of gateway component |
| gateway/platforms/mattermost.py | file | Part of gateway component |
| gateway/platforms/signal.py | file | Part of gateway component |
| gateway/platforms/slack.py | file | Part of gateway component |
| gateway/platforms/sms.py | file | Part of gateway component |
| gateway/platforms/telegram.py | file | Part of gateway component |
| gateway/platforms/telegram_network.py | file | Part of gateway component |
| gateway/platforms/webhook.py | file | Part of gateway component |
| gateway/platforms/wecom.py | file | Part of gateway component |
| gateway/platforms/whatsapp.py | file | Part of gateway component |
| gateway/run.py | file | Part of gateway component |
| gateway/session.py | file | Part of gateway component |
| gateway/status.py | file | Part of gateway component |
| gateway/sticker_cache.py | file | Part of gateway component |
| gateway/stream_consumer.py | file | Part of gateway component |
| hermes | file | Root configuration or documentation |
| hermes_cli/__init__.py | file | Part of hermes_cli component |
| hermes_cli/auth.py | file | Part of hermes_cli component |
| hermes_cli/auth_commands.py | file | Part of hermes_cli component |
| hermes_cli/banner.py | file | Part of hermes_cli component |
| hermes_cli/callbacks.py | file | Part of hermes_cli component |
| hermes_cli/checklist.py | file | Part of hermes_cli component |
| hermes_cli/claw.py | file | Part of hermes_cli component |
| hermes_cli/clipboard.py | file | Part of hermes_cli component |
| hermes_cli/codex_models.py | file | Part of hermes_cli component |
| hermes_cli/colors.py | file | Part of hermes_cli component |
| hermes_cli/commands.py | file | Part of hermes_cli component |
| hermes_cli/config.py | file | Part of hermes_cli component |
| hermes_cli/copilot_auth.py | file | Part of hermes_cli component |
| hermes_cli/cron.py | file | Part of hermes_cli component |
| hermes_cli/curses_ui.py | file | Part of hermes_cli component |
| hermes_cli/default_soul.py | file | Part of hermes_cli component |
| hermes_cli/doctor.py | file | Part of hermes_cli component |
| hermes_cli/env_loader.py | file | Part of hermes_cli component |
| hermes_cli/gateway.py | file | Part of hermes_cli component |
| hermes_cli/main.py | file | Part of hermes_cli component |
| hermes_cli/mcp_config.py | file | Part of hermes_cli component |
| hermes_cli/memory_setup.py | file | Part of hermes_cli component |
| hermes_cli/model_normalize.py | file | Part of hermes_cli component |
| hermes_cli/model_switch.py | file | Part of hermes_cli component |
| hermes_cli/models.py | file | Part of hermes_cli component |
| hermes_cli/nous_subscription.py | file | Part of hermes_cli component |
| hermes_cli/pairing.py | file | Part of hermes_cli component |
| hermes_cli/plugins.py | file | Part of hermes_cli component |
| hermes_cli/plugins_cmd.py | file | Part of hermes_cli component |
| hermes_cli/profiles.py | file | Part of hermes_cli component |
| hermes_cli/providers.py | file | Part of hermes_cli component |
| hermes_cli/runtime_provider.py | file | Part of hermes_cli component |
| hermes_cli/setup.py | file | Part of hermes_cli component |
| hermes_cli/skills_config.py | file | Part of hermes_cli component |
| hermes_cli/skills_hub.py | file | Part of hermes_cli component |
| hermes_cli/skin_engine.py | file | Part of hermes_cli component |
| hermes_cli/status.py | file | Part of hermes_cli component |
| hermes_cli/tools_config.py | file | Part of hermes_cli component |
| hermes_cli/uninstall.py | file | Part of hermes_cli component |
| hermes_cli/webhook.py | file | Part of hermes_cli component |
| hermes_constants.py | file | Root configuration or documentation |
| hermes_state.py | file | Root configuration or documentation |
| hermes_time.py | file | Root configuration or documentation |
| landingpage/apple-touch-icon.png | file | Part of landingpage component |
| landingpage/favicon-16x16.png | file | Part of landingpage component |
| landingpage/favicon-32x32.png | file | Part of landingpage component |
| landingpage/favicon.ico | file | Part of landingpage component |
| landingpage/hermes-agent-banner.png | agent | Part of landingpage component |
| landingpage/icon-192.png | file | Part of landingpage component |
| landingpage/icon-512.png | file | Part of landingpage component |
| landingpage/index.html | file | Part of landingpage component |
| landingpage/nous-logo.png | file | Part of landingpage component |
| landingpage/script.js | file | Part of landingpage component |
| landingpage/style.css | file | Part of landingpage component |
| mcp_serve.py | file | Root configuration or documentation |
| mini_swe_runner.py | file | Root configuration or documentation |
| model_tools.py | file | Root configuration or documentation |
| nix/checks.nix | file | Part of nix component |
| nix/configMergeScript.nix | file | Part of nix component |
| nix/devShell.nix | file | Part of nix component |
| nix/nixosModules.nix | file | Part of nix component |
| nix/packages.nix | file | Part of nix component |
| nix/python.nix | file | Part of nix component |
| optional-skills/DESCRIPTION.md | file | Part of optional-skills component |
| optional-skills/autonomous-ai-agents/DESCRIPTION.md | agent | Part of optional-skills component |
| optional-skills/autonomous-ai-agents/blackbox/SKILL.md | agent | Part of optional-skills component |
| optional-skills/blockchain/base/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/blockchain/base/scripts/base_client.py | file | Part of optional-skills component |
| optional-skills/blockchain/solana/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/blockchain/solana/scripts/solana_client.py | file | Part of optional-skills component |
| optional-skills/communication/DESCRIPTION.md | file | Part of optional-skills component |
| optional-skills/communication/one-three-one-rule/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/creative/blender-mcp/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/creative/meme-generation/EXAMPLES.md | file | Part of optional-skills component |
| optional-skills/creative/meme-generation/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/creative/meme-generation/scripts/.gitignore | file | Part of optional-skills component |
| optional-skills/creative/meme-generation/scripts/generate_meme.py | file | Part of optional-skills component |
| optional-skills/creative/meme-generation/scripts/templates.json | file | Part of optional-skills component |
| optional-skills/devops/cli/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/devops/cli/references/app-discovery.md | file | Part of optional-skills component |
| optional-skills/devops/cli/references/authentication.md | file | Part of optional-skills component |
| optional-skills/devops/cli/references/cli-reference.md | file | Part of optional-skills component |
| optional-skills/devops/cli/references/running-apps.md | file | Part of optional-skills component |
| optional-skills/devops/docker-management/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/email/agentmail/SKILL.md | agent | Part of optional-skills component |
| optional-skills/health/DESCRIPTION.md | file | Part of optional-skills component |
| optional-skills/health/neuroskill-bci/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/health/neuroskill-bci/references/api.md | file | Part of optional-skills component |
| optional-skills/health/neuroskill-bci/references/metrics.md | file | Part of optional-skills component |
| optional-skills/health/neuroskill-bci/references/protocols.md | file | Part of optional-skills component |
| optional-skills/mcp/DESCRIPTION.md | file | Part of optional-skills component |
| optional-skills/mcp/fastmcp/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mcp/fastmcp/references/fastmcp-cli.md | file | Part of optional-skills component |
| optional-skills/mcp/fastmcp/scripts/scaffold_fastmcp.py | file | Part of optional-skills component |
| optional-skills/mcp/fastmcp/templates/api_wrapper.py | file | Part of optional-skills component |
| optional-skills/mcp/fastmcp/templates/database_server.py | file | Part of optional-skills component |
| optional-skills/mcp/fastmcp/templates/file_processor.py | file | Part of optional-skills component |
| optional-skills/migration/DESCRIPTION.md | file | Part of optional-skills component |
| optional-skills/migration/openclaw-migration/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/migration/openclaw-migration/scripts/openclaw_to_hermes.py | file | Part of optional-skills component |
| optional-skills/mlops/accelerate/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/accelerate/references/custom-plugins.md | file | Part of optional-skills component |
| optional-skills/mlops/accelerate/references/megatron-integration.md | file | Part of optional-skills component |
| optional-skills/mlops/accelerate/references/performance.md | file | Part of optional-skills component |
| optional-skills/mlops/chroma/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/chroma/references/integration.md | file | Part of optional-skills component |
| optional-skills/mlops/faiss/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/faiss/references/index_types.md | file | Part of optional-skills component |
| optional-skills/mlops/flash-attention/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/flash-attention/references/benchmarks.md | file | Part of optional-skills component |
| optional-skills/mlops/flash-attention/references/transformers-integration.md | file | Part of optional-skills component |
| optional-skills/mlops/hermes-atropos-environments/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/hermes-atropos-environments/references/agentresult-fields.md | agent | Part of optional-skills component |
| optional-skills/mlops/hermes-atropos-environments/references/atropos-base-env.md | file | Part of optional-skills component |
| optional-skills/mlops/hermes-atropos-environments/references/usage-patterns.md | file | Part of optional-skills component |
| optional-skills/mlops/huggingface-tokenizers/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/huggingface-tokenizers/references/algorithms.md | file | Part of optional-skills component |
| optional-skills/mlops/huggingface-tokenizers/references/integration.md | file | Part of optional-skills component |
| optional-skills/mlops/huggingface-tokenizers/references/pipeline.md | file | Part of optional-skills component |
| optional-skills/mlops/huggingface-tokenizers/references/training.md | file | Part of optional-skills component |
| optional-skills/mlops/instructor/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/instructor/references/examples.md | file | Part of optional-skills component |
| optional-skills/mlops/instructor/references/providers.md | file | Part of optional-skills component |
| optional-skills/mlops/instructor/references/validation.md | file | Part of optional-skills component |
| optional-skills/mlops/lambda-labs/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/lambda-labs/references/advanced-usage.md | file | Part of optional-skills component |
| optional-skills/mlops/lambda-labs/references/troubleshooting.md | file | Part of optional-skills component |
| optional-skills/mlops/llava/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/llava/references/training.md | file | Part of optional-skills component |
| optional-skills/mlops/nemo-curator/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/nemo-curator/references/deduplication.md | file | Part of optional-skills component |
| optional-skills/mlops/nemo-curator/references/filtering.md | file | Part of optional-skills component |
| optional-skills/mlops/pinecone/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/pinecone/references/deployment.md | file | Part of optional-skills component |
| optional-skills/mlops/pytorch-lightning/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/pytorch-lightning/references/callbacks.md | file | Part of optional-skills component |
| optional-skills/mlops/pytorch-lightning/references/distributed.md | file | Part of optional-skills component |
| optional-skills/mlops/pytorch-lightning/references/hyperparameter-tuning.md | file | Part of optional-skills component |
| optional-skills/mlops/qdrant/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/qdrant/references/advanced-usage.md | file | Part of optional-skills component |
| optional-skills/mlops/qdrant/references/troubleshooting.md | file | Part of optional-skills component |
| optional-skills/mlops/saelens/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/saelens/references/README.md | Documentation | Explains how to install and use |
| optional-skills/mlops/saelens/references/api.md | file | Part of optional-skills component |
| optional-skills/mlops/saelens/references/tutorials.md | file | Part of optional-skills component |
| optional-skills/mlops/simpo/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/simpo/references/datasets.md | file | Part of optional-skills component |
| optional-skills/mlops/simpo/references/hyperparameters.md | file | Part of optional-skills component |
| optional-skills/mlops/simpo/references/loss-functions.md | file | Part of optional-skills component |
| optional-skills/mlops/slime/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/slime/references/api-reference.md | file | Part of optional-skills component |
| optional-skills/mlops/slime/references/troubleshooting.md | file | Part of optional-skills component |
| optional-skills/mlops/tensorrt-llm/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/tensorrt-llm/references/multi-gpu.md | file | Part of optional-skills component |
| optional-skills/mlops/tensorrt-llm/references/optimization.md | file | Part of optional-skills component |
| optional-skills/mlops/tensorrt-llm/references/serving.md | file | Part of optional-skills component |
| optional-skills/mlops/torchtitan/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/mlops/torchtitan/references/checkpoint.md | file | Part of optional-skills component |
| optional-skills/mlops/torchtitan/references/custom-models.md | file | Part of optional-skills component |
| optional-skills/mlops/torchtitan/references/float8.md | file | Part of optional-skills component |
| optional-skills/mlops/torchtitan/references/fsdp.md | file | Part of optional-skills component |
| optional-skills/productivity/canvas/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/productivity/canvas/scripts/canvas_api.py | file | Part of optional-skills component |
| optional-skills/productivity/memento-flashcards/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/productivity/memento-flashcards/scripts/memento_cards.py | file | Part of optional-skills component |
| optional-skills/productivity/memento-flashcards/scripts/youtube_quiz.py | file | Part of optional-skills component |
| optional-skills/productivity/siyuan/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/productivity/telephony/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/productivity/telephony/scripts/telephony.py | file | Part of optional-skills component |
| optional-skills/research/bioinformatics/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/research/domain-intel/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/research/domain-intel/scripts/domain_intel.py | file | Part of optional-skills component |
| optional-skills/research/duckduckgo-search/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/research/duckduckgo-search/scripts/duckduckgo.sh | file | Part of optional-skills component |
| optional-skills/research/gitnexus-explorer/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/research/gitnexus-explorer/scripts/proxy.mjs | file | Part of optional-skills component |
| optional-skills/research/parallel-cli/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/research/qmd/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/research/scrapling/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/security/1password/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/security/1password/references/cli-examples.md | file | Part of optional-skills component |
| optional-skills/security/1password/references/get-started.md | file | Part of optional-skills component |
| optional-skills/security/DESCRIPTION.md | file | Part of optional-skills component |
| optional-skills/security/oss-forensics/SKILL.md | config/skill | Part of optional-skills component |
| optional-skills/security/oss-forensics/references/evidence-types.md | file | Part of optional-skills component |
| optional-skills/security/oss-forensics/references/github-archive-guide.md | file | Part of optional-skills component |
| optional-skills/security/oss-forensics/references/investigation-templates.md | file | Part of optional-skills component |
| optional-skills/security/oss-forensics/references/recovery-techniques.md | file | Part of optional-skills component |
| optional-skills/security/oss-forensics/scripts/evidence-store.py | file | Part of optional-skills component |
| optional-skills/security/oss-forensics/templates/forensic-report.md | file | Part of optional-skills component |
| optional-skills/security/oss-forensics/templates/malicious-package-report.md | file | Part of optional-skills component |
| optional-skills/security/sherlock/SKILL.md | config/skill | Part of optional-skills component |
| package-lock.json | file | Root configuration or documentation |
| package.json | file | Root configuration or documentation |
| packaging/homebrew/README.md | Documentation | Explains how to install and use |
| packaging/homebrew/hermes-agent.rb | agent | Part of packaging component |
| plans/gemini-oauth-provider.md | file | Part of plans component |
| plugins/__init__.py | file | Part of plugins component |
| plugins/memory/__init__.py | file | Part of plugins component |
| plugins/memory/byterover/README.md | Documentation | Explains how to install and use |
| plugins/memory/byterover/__init__.py | file | Part of plugins component |
| plugins/memory/byterover/plugin.yaml | file | Part of plugins component |
| plugins/memory/hindsight/README.md | Documentation | Explains how to install and use |
| plugins/memory/hindsight/__init__.py | file | Part of plugins component |
| plugins/memory/hindsight/plugin.yaml | file | Part of plugins component |
| plugins/memory/holographic/README.md | Documentation | Explains how to install and use |
| plugins/memory/holographic/__init__.py | file | Part of plugins component |
| plugins/memory/holographic/holographic.py | file | Part of plugins component |
| plugins/memory/holographic/plugin.yaml | file | Part of plugins component |
| plugins/memory/holographic/retrieval.py | file | Part of plugins component |
| plugins/memory/holographic/store.py | file | Part of plugins component |
| plugins/memory/honcho/README.md | Documentation | Explains how to install and use |
| plugins/memory/honcho/__init__.py | file | Part of plugins component |
| plugins/memory/honcho/cli.py | file | Part of plugins component |
| plugins/memory/honcho/client.py | file | Part of plugins component |
| plugins/memory/honcho/plugin.yaml | file | Part of plugins component |
| plugins/memory/honcho/session.py | file | Part of plugins component |
| plugins/memory/mem0/README.md | Documentation | Explains how to install and use |
| plugins/memory/mem0/__init__.py | file | Part of plugins component |
| plugins/memory/mem0/plugin.yaml | file | Part of plugins component |
| plugins/memory/openviking/README.md | Documentation | Explains how to install and use |
| plugins/memory/openviking/__init__.py | file | Part of plugins component |
| plugins/memory/openviking/plugin.yaml | file | Part of plugins component |
| plugins/memory/retaindb/README.md | Documentation | Explains how to install and use |
| plugins/memory/retaindb/__init__.py | file | Part of plugins component |
| plugins/memory/retaindb/plugin.yaml | file | Part of plugins component |
| pyproject.toml | file | Root configuration or documentation |
| requirements.txt | file | Root configuration or documentation |
| rl_cli.py | file | Root configuration or documentation |
| run_agent.py | agent | Root configuration or documentation |
| scripts/discord-voice-doctor.py | file | Part of scripts component |
| scripts/hermes-gateway | directory | Part of scripts component |
| scripts/install.cmd | file | Part of scripts component |
| scripts/install.ps1 | file | Part of scripts component |
| scripts/install.sh | file | Part of scripts component |
| scripts/kill_modal.sh | file | Part of scripts component |
| scripts/release.py | file | Part of scripts component |
| scripts/sample_and_compress.py | file | Part of scripts component |
| scripts/whatsapp-bridge/allowlist.js | file | Part of scripts component |
| scripts/whatsapp-bridge/allowlist.test.mjs | file | Part of scripts component |
| scripts/whatsapp-bridge/bridge.js | file | Part of scripts component |
| scripts/whatsapp-bridge/package-lock.json | file | Part of scripts component |
| scripts/whatsapp-bridge/package.json | file | Part of scripts component |
| setup-hermes.sh | file | Root configuration or documentation |
| skills/apple/DESCRIPTION.md | file | Part of skills component |
| skills/apple/apple-notes/SKILL.md | config/skill | Part of skills component |
| skills/apple/apple-reminders/SKILL.md | config/skill | Part of skills component |
| skills/apple/findmy/SKILL.md | config/skill | Part of skills component |
| skills/apple/imessage/SKILL.md | config/skill | Part of skills component |
| skills/autonomous-ai-agents/DESCRIPTION.md | agent | Part of skills component |
| skills/autonomous-ai-agents/claude-code/SKILL.md | agent | Part of skills component |
| skills/autonomous-ai-agents/codex/SKILL.md | agent | Part of skills component |
| skills/autonomous-ai-agents/hermes-agent/SKILL.md | agent | Part of skills component |
| skills/autonomous-ai-agents/opencode/SKILL.md | agent | Part of skills component |
| skills/creative/DESCRIPTION.md | file | Part of skills component |
| skills/creative/ascii-art/SKILL.md | config/skill | Part of skills component |
| skills/creative/ascii-video/README.md | Documentation | Explains how to install and use |
| skills/creative/ascii-video/SKILL.md | config/skill | Part of skills component |
| skills/creative/ascii-video/references/architecture.md | file | Part of skills component |
| skills/creative/ascii-video/references/composition.md | file | Part of skills component |
| skills/creative/ascii-video/references/effects.md | file | Part of skills component |
| skills/creative/ascii-video/references/inputs.md | file | Part of skills component |
| skills/creative/ascii-video/references/optimization.md | file | Part of skills component |
| skills/creative/ascii-video/references/scenes.md | file | Part of skills component |
| skills/creative/ascii-video/references/shaders.md | file | Part of skills component |
| skills/creative/ascii-video/references/troubleshooting.md | file | Part of skills component |
| skills/creative/excalidraw/SKILL.md | config/skill | Part of skills component |
| skills/creative/excalidraw/references/colors.md | file | Part of skills component |
| skills/creative/excalidraw/references/dark-mode.md | file | Part of skills component |
| skills/creative/excalidraw/references/examples.md | file | Part of skills component |
| skills/creative/excalidraw/scripts/upload.py | file | Part of skills component |
| skills/creative/popular-web-designs/SKILL.md | config/skill | Part of skills component |
| skills/creative/popular-web-designs/templates/airbnb.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/airtable.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/apple.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/bmw.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/cal.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/claude.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/clay.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/clickhouse.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/cohere.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/coinbase.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/composio.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/cursor.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/elevenlabs.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/expo.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/figma.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/framer.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/hashicorp.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/ibm.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/intercom.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/kraken.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/linear.app.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/lovable.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/minimax.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/mintlify.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/miro.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/mistral.ai.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/mongodb.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/notion.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/nvidia.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/ollama.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/opencode.ai.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/pinterest.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/posthog.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/raycast.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/replicate.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/resend.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/revolut.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/runwayml.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/sanity.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/sentry.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/spacex.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/spotify.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/stripe.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/supabase.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/superhuman.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/together.ai.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/uber.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/vercel.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/voltagent.md | agent | Part of skills component |
| skills/creative/popular-web-designs/templates/warp.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/webflow.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/wise.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/x.ai.md | file | Part of skills component |
| skills/creative/popular-web-designs/templates/zapier.md | file | Part of skills component |
| skills/creative/songwriting-and-ai-music/SKILL.md | config/skill | Part of skills component |
| skills/data-science/DESCRIPTION.md | file | Part of skills component |
| skills/data-science/jupyter-live-kernel/SKILL.md | config/skill | Part of skills component |
| skills/devops/webhook-subscriptions/SKILL.md | config/skill | Part of skills component |
| skills/diagramming/DESCRIPTION.md | file | Part of skills component |
| skills/dogfood/SKILL.md | config/skill | Part of skills component |
| skills/dogfood/references/issue-taxonomy.md | file | Part of skills component |
| skills/dogfood/templates/dogfood-report-template.md | file | Part of skills component |
| skills/domain/DESCRIPTION.md | file | Part of skills component |
| skills/email/DESCRIPTION.md | file | Part of skills component |
| skills/email/himalaya/SKILL.md | config/skill | Part of skills component |
| skills/email/himalaya/references/configuration.md | file | Part of skills component |
| skills/email/himalaya/references/message-composition.md | file | Part of skills component |
| skills/feeds/DESCRIPTION.md | file | Part of skills component |
| skills/gaming/DESCRIPTION.md | file | Part of skills component |
| skills/gaming/minecraft-modpack-server/SKILL.md | config/skill | Part of skills component |
| skills/gaming/pokemon-player/SKILL.md | config/skill | Part of skills component |
| skills/gifs/DESCRIPTION.md | file | Part of skills component |
| skills/github/DESCRIPTION.md | file | Part of skills component |
| skills/github/codebase-inspection/SKILL.md | config/skill | Part of skills component |
| skills/github/github-auth/SKILL.md | config/skill | Part of skills component |
| skills/github/github-auth/scripts/gh-env.sh | file | Part of skills component |
| skills/github/github-code-review/SKILL.md | config/skill | Part of skills component |
| skills/github/github-code-review/references/review-output-template.md | file | Part of skills component |
| skills/github/github-issues/SKILL.md | config/skill | Part of skills component |
| skills/github/github-issues/templates/bug-report.md | file | Part of skills component |
| skills/github/github-issues/templates/feature-request.md | file | Part of skills component |
| skills/github/github-pr-workflow/SKILL.md | config/skill | Part of skills component |
| skills/github/github-pr-workflow/references/ci-troubleshooting.md | file | Part of skills component |
| skills/github/github-pr-workflow/references/conventional-commits.md | file | Part of skills component |
| skills/github/github-pr-workflow/templates/pr-body-bugfix.md | file | Part of skills component |
| skills/github/github-pr-workflow/templates/pr-body-feature.md | file | Part of skills component |
| skills/github/github-repo-management/SKILL.md | config/skill | Part of skills component |
| skills/github/github-repo-management/references/github-api-cheatsheet.md | file | Part of skills component |
| skills/index-cache/anthropics_skills_skills_.json | file | Part of skills component |
| skills/index-cache/claude_marketplace_anthropics_skills.json | file | Part of skills component |
| skills/index-cache/lobehub_index.json | file | Part of skills component |
| skills/index-cache/openai_skills_skills_.json | file | Part of skills component |
| skills/inference-sh/DESCRIPTION.md | file | Part of skills component |
| skills/leisure/find-nearby/SKILL.md | config/skill | Part of skills component |
| skills/leisure/find-nearby/scripts/find_nearby.py | file | Part of skills component |
| skills/mcp/DESCRIPTION.md | file | Part of skills component |
| skills/mcp/mcporter/SKILL.md | config/skill | Part of skills component |
| skills/mcp/native-mcp/SKILL.md | config/skill | Part of skills component |
| skills/media/DESCRIPTION.md | file | Part of skills component |
| skills/media/gif-search/SKILL.md | config/skill | Part of skills component |
| skills/media/heartmula/SKILL.md | config/skill | Part of skills component |
| skills/media/songsee/SKILL.md | config/skill | Part of skills component |
| skills/media/youtube-content/SKILL.md | config/skill | Part of skills component |
| skills/media/youtube-content/references/output-formats.md | file | Part of skills component |
| skills/media/youtube-content/scripts/fetch_transcript.py | file | Part of skills component |
| skills/mlops/DESCRIPTION.md | file | Part of skills component |
| skills/mlops/cloud/DESCRIPTION.md | file | Part of skills component |
| skills/mlops/cloud/modal/SKILL.md | config/skill | Part of skills component |
| skills/mlops/cloud/modal/references/advanced-usage.md | file | Part of skills component |
| skills/mlops/cloud/modal/references/troubleshooting.md | file | Part of skills component |
| skills/mlops/evaluation/DESCRIPTION.md | file | Part of skills component |
| skills/mlops/evaluation/lm-evaluation-harness/SKILL.md | config/skill | Part of skills component |
| skills/mlops/evaluation/lm-evaluation-harness/references/api-evaluation.md | file | Part of skills component |
| skills/mlops/evaluation/lm-evaluation-harness/references/benchmark-guide.md | file | Part of skills component |
| skills/mlops/evaluation/lm-evaluation-harness/references/custom-tasks.md | file | Part of skills component |
| skills/mlops/evaluation/lm-evaluation-harness/references/distributed-eval.md | file | Part of skills component |
| skills/mlops/evaluation/weights-and-biases/SKILL.md | config/skill | Part of skills component |
| skills/mlops/evaluation/weights-and-biases/references/artifacts.md | file | Part of skills component |
| skills/mlops/evaluation/weights-and-biases/references/integrations.md | file | Part of skills component |
| skills/mlops/evaluation/weights-and-biases/references/sweeps.md | file | Part of skills component |
| skills/mlops/huggingface-hub/SKILL.md | config/skill | Part of skills component |
| skills/mlops/inference/DESCRIPTION.md | file | Part of skills component |
| skills/mlops/inference/gguf/SKILL.md | config/skill | Part of skills component |
| skills/mlops/inference/gguf/references/advanced-usage.md | file | Part of skills component |
| skills/mlops/inference/gguf/references/troubleshooting.md | file | Part of skills component |
| skills/mlops/inference/guidance/SKILL.md | config/skill | Part of skills component |
| skills/mlops/inference/guidance/references/backends.md | file | Part of skills component |
| skills/mlops/inference/guidance/references/constraints.md | file | Part of skills component |
| skills/mlops/inference/guidance/references/examples.md | file | Part of skills component |
| skills/mlops/inference/llama-cpp/SKILL.md | config/skill | Part of skills component |
| skills/mlops/inference/llama-cpp/references/optimization.md | file | Part of skills component |
| skills/mlops/inference/llama-cpp/references/quantization.md | file | Part of skills component |
| skills/mlops/inference/llama-cpp/references/server.md | file | Part of skills component |
| skills/mlops/inference/obliteratus/SKILL.md | config/skill | Part of skills component |
| skills/mlops/inference/obliteratus/references/analysis-modules.md | file | Part of skills component |
| skills/mlops/inference/obliteratus/references/methods-guide.md | file | Part of skills component |
| skills/mlops/inference/obliteratus/templates/abliteration-config.yaml | file | Part of skills component |
| skills/mlops/inference/obliteratus/templates/analysis-study.yaml | file | Part of skills component |
| skills/mlops/inference/obliteratus/templates/batch-abliteration.yaml | file | Part of skills component |
| skills/mlops/inference/outlines/SKILL.md | config/skill | Part of skills component |
| skills/mlops/inference/outlines/references/backends.md | file | Part of skills component |
| skills/mlops/inference/outlines/references/examples.md | file | Part of skills component |
| skills/mlops/inference/outlines/references/json_generation.md | file | Part of skills component |
| skills/mlops/inference/vllm/SKILL.md | config/skill | Part of skills component |
| skills/mlops/inference/vllm/references/optimization.md | file | Part of skills component |
| skills/mlops/inference/vllm/references/quantization.md | file | Part of skills component |
| skills/mlops/inference/vllm/references/server-deployment.md | file | Part of skills component |
| skills/mlops/inference/vllm/references/troubleshooting.md | file | Part of skills component |
| skills/mlops/models/DESCRIPTION.md | file | Part of skills component |
| skills/mlops/models/audiocraft/SKILL.md | config/skill | Part of skills component |
| skills/mlops/models/audiocraft/references/advanced-usage.md | file | Part of skills component |
| skills/mlops/models/audiocraft/references/troubleshooting.md | file | Part of skills component |
| skills/mlops/models/clip/SKILL.md | config/skill | Part of skills component |
| skills/mlops/models/clip/references/applications.md | file | Part of skills component |
| skills/mlops/models/segment-anything/SKILL.md | config/skill | Part of skills component |
| skills/mlops/models/segment-anything/references/advanced-usage.md | file | Part of skills component |
| skills/mlops/models/segment-anything/references/troubleshooting.md | file | Part of skills component |
| skills/mlops/models/stable-diffusion/SKILL.md | config/skill | Part of skills component |
| skills/mlops/models/stable-diffusion/references/advanced-usage.md | file | Part of skills component |
| skills/mlops/models/stable-diffusion/references/troubleshooting.md | file | Part of skills component |
| skills/mlops/models/whisper/SKILL.md | config/skill | Part of skills component |
| skills/mlops/models/whisper/references/languages.md | file | Part of skills component |
| skills/mlops/research/DESCRIPTION.md | file | Part of skills component |
| skills/mlops/research/dspy/SKILL.md | config/skill | Part of skills component |
| skills/mlops/research/dspy/references/examples.md | file | Part of skills component |
| skills/mlops/research/dspy/references/modules.md | file | Part of skills component |
| skills/mlops/research/dspy/references/optimizers.md | file | Part of skills component |
| skills/mlops/training/DESCRIPTION.md | file | Part of skills component |
| skills/mlops/training/axolotl/SKILL.md | config/skill | Part of skills component |
| skills/mlops/training/axolotl/references/api.md | file | Part of skills component |
| skills/mlops/training/axolotl/references/dataset-formats.md | file | Part of skills component |
| skills/mlops/training/axolotl/references/index.md | file | Part of skills component |
| skills/mlops/training/axolotl/references/other.md | file | Part of skills component |
| skills/mlops/training/grpo-rl-training/README.md | Documentation | Explains how to install and use |
| skills/mlops/training/grpo-rl-training/SKILL.md | config/skill | Part of skills component |
| skills/mlops/training/grpo-rl-training/templates/basic_grpo_training.py | file | Part of skills component |
| skills/mlops/training/peft/SKILL.md | config/skill | Part of skills component |
| skills/mlops/training/peft/references/advanced-usage.md | file | Part of skills component |
| skills/mlops/training/peft/references/troubleshooting.md | file | Part of skills component |
| skills/mlops/training/pytorch-fsdp/SKILL.md | config/skill | Part of skills component |
| skills/mlops/training/pytorch-fsdp/references/index.md | file | Part of skills component |
| skills/mlops/training/pytorch-fsdp/references/other.md | file | Part of skills component |
| skills/mlops/training/trl-fine-tuning/SKILL.md | config/skill | Part of skills component |
| skills/mlops/training/trl-fine-tuning/references/dpo-variants.md | file | Part of skills component |
| skills/mlops/training/trl-fine-tuning/references/online-rl.md | file | Part of skills component |
| skills/mlops/training/trl-fine-tuning/references/reward-modeling.md | file | Part of skills component |
| skills/mlops/training/trl-fine-tuning/references/sft-training.md | file | Part of skills component |
| skills/mlops/training/unsloth/SKILL.md | config/skill | Part of skills component |
| skills/mlops/training/unsloth/references/index.md | file | Part of skills component |
| skills/mlops/training/unsloth/references/llms-full.md | file | Part of skills component |
| skills/mlops/training/unsloth/references/llms-txt.md | file | Part of skills component |
| skills/mlops/training/unsloth/references/llms.md | file | Part of skills component |
| skills/mlops/vector-databases/DESCRIPTION.md | file | Part of skills component |
| skills/note-taking/DESCRIPTION.md | file | Part of skills component |
| skills/note-taking/obsidian/SKILL.md | config/skill | Part of skills component |
| skills/productivity/DESCRIPTION.md | file | Part of skills component |
| skills/productivity/google-workspace/SKILL.md | config/skill | Part of skills component |
| skills/productivity/google-workspace/references/gmail-search-syntax.md | file | Part of skills component |
| skills/productivity/google-workspace/scripts/google_api.py | file | Part of skills component |
| skills/productivity/google-workspace/scripts/setup.py | file | Part of skills component |
| skills/productivity/linear/SKILL.md | config/skill | Part of skills component |
| skills/productivity/nano-pdf/SKILL.md | config/skill | Part of skills component |
| skills/productivity/notion/SKILL.md | config/skill | Part of skills component |
| skills/productivity/notion/references/block-types.md | file | Part of skills component |
| skills/productivity/ocr-and-documents/DESCRIPTION.md | file | Part of skills component |
| skills/productivity/ocr-and-documents/SKILL.md | config/skill | Part of skills component |
| skills/productivity/ocr-and-documents/scripts/extract_marker.py | file | Part of skills component |
| skills/productivity/ocr-and-documents/scripts/extract_pymupdf.py | file | Part of skills component |
| skills/productivity/powerpoint/LICENSE.txt | file | Part of skills component |
| skills/productivity/powerpoint/SKILL.md | config/skill | Part of skills component |
| skills/productivity/powerpoint/editing.md | file | Part of skills component |
| skills/productivity/powerpoint/pptxgenjs.md | file | Part of skills component |
| skills/productivity/powerpoint/scripts/__init__.py | file | Part of skills component |
| skills/productivity/powerpoint/scripts/add_slide.py | file | Part of skills component |
| skills/productivity/powerpoint/scripts/clean.py | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/helpers/__init__.py | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/helpers/merge_runs.py | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/helpers/simplify_redlines.py | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/pack.py | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/dml-chart.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/dml-chartDrawing.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/dml-diagram.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/dml-lockedCanvas.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/dml-main.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/dml-picture.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/dml-spreadsheetDrawing.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/dml-wordprocessingDrawing.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/pml.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/shared-additionalCharacteristics.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/shared-bibliography.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/shared-commonSimpleTypes.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/shared-customXmlDataProperties.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/shared-customXmlSchemaProperties.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesCustom.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesExtended.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesVariantTypes.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/shared-math.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/shared-relationshipReference.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/sml.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/vml-main.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/vml-officeDrawing.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/vml-presentationDrawing.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/vml-spreadsheetDrawing.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/vml-wordprocessingDrawing.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/wml.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ISO-IEC29500-4_2016/xml.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ecma/fourth-edition/opc-contentTypes.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ecma/fourth-edition/opc-coreProperties.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ecma/fourth-edition/opc-digSig.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/ecma/fourth-edition/opc-relationships.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/mce/mc.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/microsoft/wml-2010.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/microsoft/wml-2012.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/microsoft/wml-2018.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/microsoft/wml-cex-2018.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/microsoft/wml-cid-2016.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/microsoft/wml-sdtdatahash-2020.xsd | file | Part of skills component |
| skills/productivity/powerpoint/scripts/office/schemas/microsoft/wml-symex-2015.xsd | file | Part of skills component |
| skills/red-teaming/godmode/SKILL.md | config/skill | Part of skills component |
| skills/red-teaming/godmode/references/jailbreak-templates.md | file | Part of skills component |
| skills/red-teaming/godmode/references/refusal-detection.md | file | Part of skills component |
| skills/red-teaming/godmode/scripts/auto_jailbreak.py | file | Part of skills component |
| skills/red-teaming/godmode/scripts/godmode_race.py | file | Part of skills component |
| skills/red-teaming/godmode/scripts/load_godmode.py | file | Part of skills component |
| skills/red-teaming/godmode/scripts/parseltongue.py | file | Part of skills component |
| skills/red-teaming/godmode/templates/prefill-subtle.json | file | Part of skills component |
| skills/red-teaming/godmode/templates/prefill.json | file | Part of skills component |
| skills/research/DESCRIPTION.md | file | Part of skills component |
| skills/research/arxiv/SKILL.md | config/skill | Part of skills component |
| skills/research/arxiv/scripts/search_arxiv.py | file | Part of skills component |
| skills/research/blogwatcher/SKILL.md | config/skill | Part of skills component |
| skills/research/polymarket/SKILL.md | config/skill | Part of skills component |
| skills/research/polymarket/references/api-endpoints.md | file | Part of skills component |
| skills/research/polymarket/scripts/polymarket.py | file | Part of skills component |
| skills/research/research-paper-writing/SKILL.md | config/skill | Part of skills component |
| skills/research/research-paper-writing/references/autoreason-methodology.md | file | Part of skills component |
| skills/research/research-paper-writing/references/checklists.md | file | Part of skills component |
| skills/research/research-paper-writing/references/citation-workflow.md | file | Part of skills component |
| skills/research/research-paper-writing/references/experiment-patterns.md | file | Part of skills component |
| skills/research/research-paper-writing/references/reviewer-guidelines.md | file | Part of skills component |
| skills/research/research-paper-writing/references/sources.md | file | Part of skills component |
| skills/research/research-paper-writing/references/writing-guide.md | file | Part of skills component |
| skills/research/research-paper-writing/templates/README.md | Documentation | Explains how to install and use |
| skills/research/research-paper-writing/templates/aaai2026/README.md | Documentation | Explains how to install and use |
| skills/research/research-paper-writing/templates/aaai2026/aaai2026-unified-supp.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/aaai2026/aaai2026-unified-template.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/aaai2026/aaai2026.bib | file | Part of skills component |
| skills/research/research-paper-writing/templates/aaai2026/aaai2026.bst | file | Part of skills component |
| skills/research/research-paper-writing/templates/aaai2026/aaai2026.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/acl/README.md | Documentation | Explains how to install and use |
| skills/research/research-paper-writing/templates/acl/acl.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/acl/acl_latex.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/acl/acl_lualatex.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/acl/acl_natbib.bst | file | Part of skills component |
| skills/research/research-paper-writing/templates/acl/anthology.bib.txt | file | Part of skills component |
| skills/research/research-paper-writing/templates/acl/custom.bib | file | Part of skills component |
| skills/research/research-paper-writing/templates/acl/formatting.md | file | Part of skills component |
| skills/research/research-paper-writing/templates/colm2025/README.md | Documentation | Explains how to install and use |
| skills/research/research-paper-writing/templates/colm2025/colm2025_conference.bib | file | Part of skills component |
| skills/research/research-paper-writing/templates/colm2025/colm2025_conference.bst | file | Part of skills component |
| skills/research/research-paper-writing/templates/colm2025/colm2025_conference.pdf | file | Part of skills component |
| skills/research/research-paper-writing/templates/colm2025/colm2025_conference.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/colm2025/colm2025_conference.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/colm2025/fancyhdr.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/colm2025/math_commands.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/colm2025/natbib.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/iclr2026/fancyhdr.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/iclr2026/iclr2026_conference.bib | file | Part of skills component |
| skills/research/research-paper-writing/templates/iclr2026/iclr2026_conference.bst | file | Part of skills component |
| skills/research/research-paper-writing/templates/iclr2026/iclr2026_conference.pdf | file | Part of skills component |
| skills/research/research-paper-writing/templates/iclr2026/iclr2026_conference.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/iclr2026/iclr2026_conference.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/iclr2026/math_commands.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/iclr2026/natbib.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/icml2026/algorithm.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/icml2026/algorithmic.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/icml2026/example_paper.bib | file | Part of skills component |
| skills/research/research-paper-writing/templates/icml2026/example_paper.pdf | file | Part of skills component |
| skills/research/research-paper-writing/templates/icml2026/example_paper.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/icml2026/fancyhdr.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/icml2026/icml2026.bst | file | Part of skills component |
| skills/research/research-paper-writing/templates/icml2026/icml2026.sty | file | Part of skills component |
| skills/research/research-paper-writing/templates/icml2026/icml_numpapers.pdf | file | Part of skills component |
| skills/research/research-paper-writing/templates/neurips2025/Makefile | directory | Part of skills component |
| skills/research/research-paper-writing/templates/neurips2025/extra_pkgs.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/neurips2025/main.tex | file | Part of skills component |
| skills/research/research-paper-writing/templates/neurips2025/neurips.sty | file | Part of skills component |
| skills/smart-home/DESCRIPTION.md | file | Part of skills component |
| skills/smart-home/openhue/SKILL.md | config/skill | Part of skills component |
| skills/social-media/DESCRIPTION.md | file | Part of skills component |
| skills/social-media/xitter/SKILL.md | config/skill | Part of skills component |
| skills/software-development/plan/SKILL.md | config/skill | Part of skills component |
| skills/software-development/requesting-code-review/SKILL.md | config/skill | Part of skills component |
| skills/software-development/subagent-driven-development/SKILL.md | agent | Part of skills component |
| skills/software-development/systematic-debugging/SKILL.md | config/skill | Part of skills component |
| skills/software-development/test-driven-development/SKILL.md | config/skill | Part of skills component |
| skills/software-development/writing-plans/SKILL.md | config/skill | Part of skills component |
| tests/__init__.py | file | Part of tests component |
| tests/acp/__init__.py | file | Part of tests component |
| tests/acp/test_auth.py | file | Part of tests component |
| tests/acp/test_entry.py | file | Part of tests component |
| tests/acp/test_events.py | file | Part of tests component |
| tests/acp/test_mcp_e2e.py | file | Part of tests component |
| tests/acp/test_permissions.py | file | Part of tests component |
| tests/acp/test_server.py | file | Part of tests component |
| tests/acp/test_session.py | file | Part of tests component |
| tests/acp/test_tools.py | file | Part of tests component |
| tests/agent/__init__.py | agent | Part of tests component |
| tests/agent/test_auxiliary_client.py | agent | Part of tests component |
| tests/agent/test_context_compressor.py | agent | Part of tests component |
| tests/agent/test_display_emoji.py | agent | Part of tests component |
| tests/agent/test_external_skills.py | agent | Part of tests component |
| tests/agent/test_memory_plugin_e2e.py | agent | Part of tests component |
| tests/agent/test_memory_provider.py | agent | Part of tests component |
| tests/agent/test_model_metadata.py | agent | Part of tests component |
| tests/agent/test_models_dev.py | agent | Part of tests component |
| tests/agent/test_prompt_builder.py | agent | Part of tests component |
| tests/agent/test_prompt_caching.py | agent | Part of tests component |
| tests/agent/test_redact.py | agent | Part of tests component |
| tests/agent/test_skill_commands.py | agent | Part of tests component |
| tests/agent/test_smart_model_routing.py | agent | Part of tests component |
| tests/agent/test_subagent_progress.py | agent | Part of tests component |
| tests/agent/test_title_generator.py | agent | Part of tests component |
| tests/agent/test_usage_pricing.py | agent | Part of tests component |
| tests/conftest.py | file | Part of tests component |
| tests/cron/__init__.py | file | Part of tests component |
| tests/cron/test_cron_script.py | file | Part of tests component |
| tests/cron/test_jobs.py | file | Part of tests component |
| tests/cron/test_scheduler.py | file | Part of tests component |
| tests/e2e/__init__.py | file | Part of tests component |
| tests/e2e/conftest.py | file | Part of tests component |
| tests/e2e/test_telegram_commands.py | file | Part of tests component |
| tests/fakes/__init__.py | file | Part of tests component |
| tests/fakes/fake_ha_server.py | file | Part of tests component |
| tests/gateway/__init__.py | file | Part of tests component |
| tests/gateway/test_agent_cache.py | agent | Part of tests component |
| tests/gateway/test_allowlist_startup_check.py | file | Part of tests component |
| tests/gateway/test_api_server.py | file | Part of tests component |
| tests/gateway/test_api_server_jobs.py | file | Part of tests component |
| tests/gateway/test_api_server_toolset.py | file | Part of tests component |
| tests/gateway/test_approve_deny_commands.py | file | Part of tests component |
| tests/gateway/test_async_memory_flush.py | file | Part of tests component |
| tests/gateway/test_background_command.py | file | Part of tests component |
| tests/gateway/test_background_process_notifications.py | file | Part of tests component |
| tests/gateway/test_base_topic_sessions.py | file | Part of tests component |
| tests/gateway/test_channel_directory.py | file | Part of tests component |
| tests/gateway/test_config.py | file | Part of tests component |
| tests/gateway/test_config_cwd_bridge.py | file | Part of tests component |
| tests/gateway/test_delivery.py | file | Part of tests component |
| tests/gateway/test_dingtalk.py | file | Part of tests component |
| tests/gateway/test_discord_bot_filter.py | file | Part of tests component |
| tests/gateway/test_discord_document_handling.py | file | Part of tests component |
| tests/gateway/test_discord_free_response.py | file | Part of tests component |
| tests/gateway/test_discord_imports.py | file | Part of tests component |
| tests/gateway/test_discord_media_metadata.py | file | Part of tests component |
| tests/gateway/test_discord_opus.py | file | Part of tests component |
| tests/gateway/test_discord_reactions.py | file | Part of tests component |
| tests/gateway/test_discord_send.py | file | Part of tests component |
| tests/gateway/test_discord_slash_commands.py | file | Part of tests component |
| tests/gateway/test_discord_system_messages.py | file | Part of tests component |
| tests/gateway/test_discord_thread_persistence.py | file | Part of tests component |
| tests/gateway/test_dm_topics.py | file | Part of tests component |
| tests/gateway/test_document_cache.py | file | Part of tests component |
| tests/gateway/test_email.py | file | Part of tests component |
| tests/gateway/test_extract_local_files.py | file | Part of tests component |
| tests/gateway/test_feishu.py | file | Part of tests component |
| tests/gateway/test_flush_memory_stale_guard.py | file | Part of tests component |
| tests/gateway/test_gateway_shutdown.py | file | Part of tests component |
| tests/gateway/test_homeassistant.py | file | Part of tests component |
| tests/gateway/test_hooks.py | file | Part of tests component |
| tests/gateway/test_interrupt_key_match.py | file | Part of tests component |
| tests/gateway/test_matrix.py | file | Part of tests component |
| tests/gateway/test_matrix_mention.py | file | Part of tests component |
| tests/gateway/test_matrix_voice.py | file | Part of tests component |
| tests/gateway/test_mattermost.py | file | Part of tests component |
| tests/gateway/test_media_download_retry.py | file | Part of tests component |
| tests/gateway/test_media_extraction.py | file | Part of tests component |
| tests/gateway/test_mirror.py | file | Part of tests component |
| tests/gateway/test_pairing.py | file | Part of tests component |
| tests/gateway/test_pii_redaction.py | file | Part of tests component |
| tests/gateway/test_plan_command.py | file | Part of tests component |
| tests/gateway/test_platform_base.py | file | Part of tests component |
| tests/gateway/test_platform_reconnect.py | file | Part of tests component |
| tests/gateway/test_queue_consumption.py | file | Part of tests component |
| tests/gateway/test_reasoning_command.py | file | Part of tests component |
| tests/gateway/test_resume_command.py | file | Part of tests component |
| tests/gateway/test_retry_replacement.py | file | Part of tests component |
| tests/gateway/test_retry_response.py | file | Part of tests component |
| tests/gateway/test_run_progress_topics.py | file | Part of tests component |
| tests/gateway/test_runner_fatal_adapter.py | file | Part of tests component |
| tests/gateway/test_runner_startup_failures.py | file | Part of tests component |
| tests/gateway/test_send_image_file.py | file | Part of tests component |
| tests/gateway/test_send_retry.py | file | Part of tests component |
| tests/gateway/test_session.py | file | Part of tests component |
| tests/gateway/test_session_dm_thread_seeding.py | file | Part of tests component |
| tests/gateway/test_session_env.py | file | Part of tests component |
| tests/gateway/test_session_hygiene.py | file | Part of tests component |
| tests/gateway/test_session_info.py | file | Part of tests component |
| tests/gateway/test_session_race_guard.py | file | Part of tests component |
| tests/gateway/test_session_reset_notify.py | file | Part of tests component |
| tests/gateway/test_signal.py | file | Part of tests component |
| tests/gateway/test_slack.py | file | Part of tests component |
| tests/gateway/test_sms.py | file | Part of tests component |
| tests/gateway/test_sse_agent_cancel.py | agent | Part of tests component |
| tests/gateway/test_ssl_certs.py | file | Part of tests component |
| tests/gateway/test_status.py | file | Part of tests component |
| tests/gateway/test_status_command.py | file | Part of tests component |
| tests/gateway/test_step_callback_compat.py | file | Part of tests component |
| tests/gateway/test_sticker_cache.py | file | Part of tests component |
| tests/gateway/test_stream_consumer.py | file | Part of tests component |
| tests/gateway/test_stt_config.py | file | Part of tests component |
| tests/gateway/test_telegram_conflict.py | file | Part of tests component |
| tests/gateway/test_telegram_documents.py | file | Part of tests component |
| tests/gateway/test_telegram_format.py | file | Part of tests component |
| tests/gateway/test_telegram_group_gating.py | file | Part of tests component |
| tests/gateway/test_telegram_network.py | file | Part of tests component |
| tests/gateway/test_telegram_network_reconnect.py | file | Part of tests component |
| tests/gateway/test_telegram_photo_interrupts.py | file | Part of tests component |
| tests/gateway/test_telegram_reply_mode.py | file | Part of tests component |
| tests/gateway/test_telegram_text_batching.py | file | Part of tests component |
| tests/gateway/test_telegram_thread_fallback.py | file | Part of tests component |
| tests/gateway/test_title_command.py | file | Part of tests component |
| tests/gateway/test_transcript_offset.py | file | Part of tests component |
| tests/gateway/test_unauthorized_dm_behavior.py | file | Part of tests component |
| tests/gateway/test_update_command.py | file | Part of tests component |
| tests/gateway/test_update_streaming.py | file | Part of tests component |
| tests/gateway/test_verbose_command.py | file | Part of tests component |
| tests/gateway/test_voice_command.py | file | Part of tests component |
| tests/gateway/test_webhook_adapter.py | file | Part of tests component |
| tests/gateway/test_webhook_dynamic_routes.py | file | Part of tests component |
| tests/gateway/test_webhook_integration.py | file | Part of tests component |
| tests/gateway/test_wecom.py | file | Part of tests component |
| tests/gateway/test_whatsapp_connect.py | file | Part of tests component |
| tests/gateway/test_whatsapp_group_gating.py | file | Part of tests component |
| tests/gateway/test_whatsapp_reply_prefix.py | file | Part of tests component |
| tests/hermes_cli/__init__.py | file | Part of tests component |
| tests/hermes_cli/test_argparse_flag_propagation.py | file | Part of tests component |
| tests/hermes_cli/test_banner.py | file | Part of tests component |
| tests/hermes_cli/test_banner_skills.py | file | Part of tests component |
| tests/hermes_cli/test_chat_skills_flag.py | file | Part of tests component |
| tests/hermes_cli/test_claw.py | file | Part of tests component |
| tests/hermes_cli/test_cmd_update.py | file | Part of tests component |
| tests/hermes_cli/test_coalesce_session_args.py | file | Part of tests component |
| tests/hermes_cli/test_commands.py | file | Part of tests component |
| tests/hermes_cli/test_config.py | file | Part of tests component |
| tests/hermes_cli/test_copilot_auth.py | file | Part of tests component |
| tests/hermes_cli/test_cron.py | file | Part of tests component |
| tests/hermes_cli/test_doctor.py | file | Part of tests component |
| tests/hermes_cli/test_env_loader.py | file | Part of tests component |
| tests/hermes_cli/test_gateway.py | file | Part of tests component |
| tests/hermes_cli/test_gateway_linger.py | file | Part of tests component |
| tests/hermes_cli/test_gateway_runtime_health.py | file | Part of tests component |
| tests/hermes_cli/test_gateway_service.py | file | Part of tests component |
| tests/hermes_cli/test_launcher.py | file | Part of tests component |
| tests/hermes_cli/test_managed_installs.py | file | Part of tests component |
| tests/hermes_cli/test_mcp_config.py | file | Part of tests component |
| tests/hermes_cli/test_mcp_tools_config.py | file | Part of tests component |
| tests/hermes_cli/test_model_validation.py | file | Part of tests component |
| tests/hermes_cli/test_models.py | file | Part of tests component |
| tests/hermes_cli/test_nous_subscription.py | file | Part of tests component |
| tests/hermes_cli/test_path_completion.py | file | Part of tests component |
| tests/hermes_cli/test_placeholder_usage.py | file | Part of tests component |
| tests/hermes_cli/test_profile_export_credentials.py | file | Part of tests component |
| tests/hermes_cli/test_profiles.py | file | Part of tests component |
| tests/hermes_cli/test_session_browse.py | file | Part of tests component |
| tests/hermes_cli/test_sessions_delete.py | file | Part of tests component |
| tests/hermes_cli/test_set_config_value.py | file | Part of tests component |
| tests/hermes_cli/test_setup.py | file | Part of tests component |
| tests/hermes_cli/test_setup_model_provider.py | file | Part of tests component |
| tests/hermes_cli/test_setup_noninteractive.py | file | Part of tests component |
| tests/hermes_cli/test_setup_openclaw_migration.py | file | Part of tests component |
| tests/hermes_cli/test_setup_prompt_menus.py | file | Part of tests component |
| tests/hermes_cli/test_skills_config.py | file | Part of tests component |
| tests/hermes_cli/test_skills_hub.py | file | Part of tests component |
| tests/hermes_cli/test_skills_install_flags.py | file | Part of tests component |
| tests/hermes_cli/test_skills_skip_confirm.py | file | Part of tests component |
| tests/hermes_cli/test_skills_subparser.py | file | Part of tests component |
| tests/hermes_cli/test_skin_engine.py | file | Part of tests component |
| tests/hermes_cli/test_status.py | file | Part of tests component |
| tests/hermes_cli/test_status_model_provider.py | file | Part of tests component |
| tests/hermes_cli/test_subprocess_timeouts.py | file | Part of tests component |
| tests/hermes_cli/test_tool_token_estimation.py | file | Part of tests component |
| tests/hermes_cli/test_tools_config.py | file | Part of tests component |
| tests/hermes_cli/test_tools_disable_enable.py | file | Part of tests component |
| tests/hermes_cli/test_update_autostash.py | file | Part of tests component |
| tests/hermes_cli/test_update_check.py | file | Part of tests component |
| tests/hermes_cli/test_update_gateway_restart.py | file | Part of tests component |
| tests/hermes_cli/test_webhook_cli.py | file | Part of tests component |
| tests/honcho_plugin/__init__.py | file | Part of tests component |
| tests/honcho_plugin/test_async_memory.py | file | Part of tests component |
| tests/honcho_plugin/test_client.py | file | Part of tests component |
| tests/honcho_plugin/test_session.py | file | Part of tests component |
| tests/integration/__init__.py | file | Part of tests component |
| tests/integration/test_batch_runner.py | file | Part of tests component |
| tests/integration/test_checkpoint_resumption.py | file | Part of tests component |
| tests/integration/test_daytona_terminal.py | file | Part of tests component |
| tests/integration/test_ha_integration.py | file | Part of tests component |
| tests/integration/test_modal_terminal.py | file | Part of tests component |
| tests/integration/test_voice_channel_flow.py | file | Part of tests component |
| tests/integration/test_web_tools.py | file | Part of tests component |
| tests/run_interrupt_test.py | file | Part of tests component |
| tests/skills/test_google_oauth_setup.py | file | Part of tests component |
| tests/skills/test_google_workspace_api.py | file | Part of tests component |
| tests/skills/test_memento_cards.py | file | Part of tests component |
| tests/skills/test_openclaw_migration.py | file | Part of tests component |
| tests/skills/test_telephony_skill.py | file | Part of tests component |
| tests/skills/test_youtube_quiz.py | file | Part of tests component |
| tests/test_1630_context_overflow_loop.py | file | Part of tests component |
| tests/test_413_compression.py | file | Part of tests component |
| tests/test_860_dedup.py | file | Part of tests component |
| tests/test_agent_guardrails.py | agent | Part of tests component |
| tests/test_agent_loop.py | agent | Part of tests component |
| tests/test_agent_loop_tool_calling.py | agent | Part of tests component |
| tests/test_agent_loop_vllm.py | agent | Part of tests component |
| tests/test_anthropic_adapter.py | file | Part of tests component |
| tests/test_anthropic_error_handling.py | file | Part of tests component |
| tests/test_anthropic_oauth_flow.py | file | Part of tests component |
| tests/test_anthropic_provider_persistence.py | file | Part of tests component |
| tests/test_api_key_providers.py | file | Part of tests component |
| tests/test_async_httpx_del_neuter.py | file | Part of tests component |
| tests/test_atomic_json_write.py | file | Part of tests component |
| tests/test_atomic_yaml_write.py | file | Part of tests component |
| tests/test_auth_codex_provider.py | file | Part of tests component |
| tests/test_auth_commands.py | file | Part of tests component |
| tests/test_auth_nous_provider.py | file | Part of tests component |
| tests/test_auxiliary_config_bridge.py | file | Part of tests component |
| tests/test_batch_runner_checkpoint.py | file | Part of tests component |
| tests/test_branch_command.py | file | Part of tests component |
| tests/test_cli_approval_ui.py | file | Part of tests component |
| tests/test_cli_background_tui_refresh.py | file | Part of tests component |
| tests/test_cli_context_warning.py | file | Part of tests component |
| tests/test_cli_extension_hooks.py | file | Part of tests component |
| tests/test_cli_file_drop.py | file | Part of tests component |
| tests/test_cli_init.py | file | Part of tests component |
| tests/test_cli_interrupt_subagent.py | agent | Part of tests component |
| tests/test_cli_loading_indicator.py | file | Part of tests component |
| tests/test_cli_mcp_config_watch.py | file | Part of tests component |
| tests/test_cli_new_session.py | file | Part of tests component |
| tests/test_cli_plan_command.py | file | Part of tests component |
| tests/test_cli_prefix_matching.py | file | Part of tests component |
| tests/test_cli_preloaded_skills.py | file | Part of tests component |
| tests/test_cli_provider_resolution.py | file | Part of tests component |
| tests/test_cli_retry.py | file | Part of tests component |
| tests/test_cli_save_config_value.py | file | Part of tests component |
| tests/test_cli_secret_capture.py | file | Part of tests component |
| tests/test_cli_skin_integration.py | file | Part of tests component |
| tests/test_cli_status_bar.py | file | Part of tests component |
| tests/test_cli_tools_command.py | file | Part of tests component |
| tests/test_codex_execution_paths.py | file | Part of tests component |
| tests/test_codex_models.py | file | Part of tests component |
| tests/test_compression_boundary.py | file | Part of tests component |
| tests/test_compression_persistence.py | file | Part of tests component |
| tests/test_compressor_fallback_update.py | file | Part of tests component |
| tests/test_config_env_expansion.py | file | Part of tests component |
| tests/test_context_pressure.py | file | Part of tests component |
| tests/test_context_references.py | file | Part of tests component |
| tests/test_context_token_tracking.py | file | Part of tests component |
| tests/test_credential_pool.py | file | Part of tests component |
| tests/test_credential_pool_routing.py | file | Part of tests component |
| tests/test_crossloop_client_cache.py | file | Part of tests component |
| tests/test_dict_tool_call_args.py | file | Part of tests component |
| tests/test_display.py | file | Part of tests component |
| tests/test_evidence_store.py | file | Part of tests component |
| tests/test_exit_cleanup_interrupt.py | file | Part of tests component |
| tests/test_external_credential_detection.py | file | Part of tests component |
| tests/test_fallback_model.py | file | Part of tests component |
| tests/test_file_permissions.py | file | Part of tests component |
| tests/test_flush_memories_codex.py | file | Part of tests component |
| tests/test_hermes_state.py | file | Part of tests component |
| tests/test_honcho_client_config.py | file | Part of tests component |
| tests/test_insights.py | file | Part of tests component |
| tests/test_interactive_interrupt.py | file | Part of tests component |
| tests/test_interrupt_propagation.py | file | Part of tests component |
| tests/test_long_context_tier_429.py | file | Part of tests component |
| tests/test_managed_server_tool_support.py | file | Part of tests component |
| tests/test_mcp_serve.py | file | Part of tests component |
| tests/test_minisweagent_path.py | agent | Part of tests component |
| tests/test_model_metadata_local_ctx.py | file | Part of tests component |
| tests/test_model_provider_persistence.py | file | Part of tests component |
| tests/test_model_tools.py | file | Part of tests component |
| tests/test_model_tools_async_bridge.py | file | Part of tests component |
| tests/test_openai_client_lifecycle.py | file | Part of tests component |
| tests/test_packaging_metadata.py | file | Part of tests component |
| tests/test_percentage_clamp.py | file | Part of tests component |
| tests/test_personality_none.py | file | Part of tests component |
| tests/test_plugins.py | file | Part of tests component |
| tests/test_plugins_cmd.py | file | Part of tests component |
| tests/test_primary_runtime_restore.py | file | Part of tests component |
| tests/test_project_metadata.py | file | Part of tests component |
| tests/test_provider_fallback.py | file | Part of tests component |
| tests/test_provider_parity.py | file | Part of tests component |
| tests/test_quick_commands.py | file | Part of tests component |
| tests/test_real_interrupt_subagent.py | agent | Part of tests component |
| tests/test_reasoning_command.py | file | Part of tests component |
| tests/test_redirect_stdout_issue.py | file | Part of tests component |
| tests/test_resume_display.py | file | Part of tests component |
| tests/test_run_agent.py | agent | Part of tests component |
| tests/test_run_agent_codex_responses.py | agent | Part of tests component |
| tests/test_runtime_provider_resolution.py | file | Part of tests component |
| tests/test_session_meta_filtering.py | file | Part of tests component |
| tests/test_session_reset_fix.py | file | Part of tests component |
| tests/test_setup_model_selection.py | file | Part of tests component |
| tests/test_sql_injection.py | file | Part of tests component |
| tests/test_streaming.py | file | Part of tests component |
| tests/test_strict_api_validation.py | file | Part of tests component |
| tests/test_surrogate_sanitization.py | file | Part of tests component |
| tests/test_timezone.py | file | Part of tests component |
| tests/test_token_persistence_non_cli.py | file | Part of tests component |
| tests/test_tool_call_parsers.py | file | Part of tests component |
| tests/test_toolset_distributions.py | file | Part of tests component |
| tests/test_toolsets.py | file | Part of tests component |
| tests/test_trajectory_compressor.py | file | Part of tests component |
| tests/test_trajectory_compressor_async.py | file | Part of tests component |
| tests/test_utils_truthy_values.py | file | Part of tests component |
| tests/test_worktree.py | file | Part of tests component |
| tests/test_worktree_security.py | file | Part of tests component |
| tests/tools/__init__.py | file | Part of tests component |
| tests/tools/test_ansi_strip.py | file | Part of tests component |
| tests/tools/test_approval.py | file | Part of tests component |
| tests/tools/test_browser_camofox.py | file | Part of tests component |
| tests/tools/test_browser_camofox_persistence.py | file | Part of tests component |
| tests/tools/test_browser_camofox_state.py | file | Part of tests component |
| tests/tools/test_browser_cdp_override.py | file | Part of tests component |
| tests/tools/test_browser_cleanup.py | file | Part of tests component |
| tests/tools/test_browser_console.py | file | Part of tests component |
| tests/tools/test_browser_content_none_guard.py | file | Part of tests component |
| tests/tools/test_browser_homebrew_paths.py | file | Part of tests component |
| tests/tools/test_browser_secret_exfil.py | file | Part of tests component |
| tests/tools/test_browser_ssrf_local.py | file | Part of tests component |
| tests/tools/test_checkpoint_manager.py | file | Part of tests component |
| tests/tools/test_clarify_tool.py | file | Part of tests component |
| tests/tools/test_clipboard.py | file | Part of tests component |
| tests/tools/test_code_execution.py | file | Part of tests component |
| tests/tools/test_command_guards.py | file | Part of tests component |
| tests/tools/test_config_null_guard.py | file | Part of tests component |
| tests/tools/test_credential_files.py | file | Part of tests component |
| tests/tools/test_cron_prompt_injection.py | file | Part of tests component |
| tests/tools/test_cronjob_tools.py | file | Part of tests component |
| tests/tools/test_daytona_environment.py | file | Part of tests component |
| tests/tools/test_debug_helpers.py | file | Part of tests component |
| tests/tools/test_delegate.py | file | Part of tests component |
| tests/tools/test_delegate_toolset_scope.py | file | Part of tests component |
| tests/tools/test_docker_environment.py | file | Part of tests component |
| tests/tools/test_docker_find.py | file | Part of tests component |
| tests/tools/test_env_passthrough.py | file | Part of tests component |
| tests/tools/test_file_operations.py | file | Part of tests component |
| tests/tools/test_file_read_guards.py | file | Part of tests component |
| tests/tools/test_file_staleness.py | file | Part of tests component |
| tests/tools/test_file_tools.py | file | Part of tests component |
| tests/tools/test_file_tools_live.py | file | Part of tests component |
| tests/tools/test_file_write_safety.py | file | Part of tests component |
| tests/tools/test_force_dangerous_override.py | file | Part of tests component |
| tests/tools/test_fuzzy_match.py | file | Part of tests component |
| tests/tools/test_hidden_dir_filter.py | file | Part of tests component |
| tests/tools/test_homeassistant_tool.py | file | Part of tests component |
| tests/tools/test_interrupt.py | file | Part of tests component |
| tests/tools/test_llm_content_none_guard.py | file | Part of tests component |
| tests/tools/test_local_env_blocklist.py | file | Part of tests component |
| tests/tools/test_local_persistent.py | file | Part of tests component |
| tests/tools/test_managed_browserbase_and_modal.py | file | Part of tests component |
| tests/tools/test_managed_media_gateways.py | file | Part of tests component |
| tests/tools/test_managed_modal_environment.py | file | Part of tests component |
| tests/tools/test_managed_tool_gateway.py | file | Part of tests component |
| tests/tools/test_mcp_dynamic_discovery.py | file | Part of tests component |
| tests/tools/test_mcp_oauth.py | file | Part of tests component |
| tests/tools/test_mcp_probe.py | file | Part of tests component |
| tests/tools/test_mcp_stability.py | file | Part of tests component |
| tests/tools/test_mcp_tool.py | file | Part of tests component |
| tests/tools/test_mcp_tool_issue_948.py | file | Part of tests component |
| tests/tools/test_memory_tool.py | file | Part of tests component |
| tests/tools/test_mixture_of_agents_tool.py | agent | Part of tests component |
| tests/tools/test_modal_sandbox_fixes.py | file | Part of tests component |
| tests/tools/test_modal_snapshot_isolation.py | file | Part of tests component |
| tests/tools/test_parse_env_var.py | file | Part of tests component |
| tests/tools/test_patch_parser.py | file | Part of tests component |
| tests/tools/test_process_registry.py | file | Part of tests component |
| tests/tools/test_read_loop_detection.py | file | Part of tests component |
| tests/tools/test_registry.py | file | Part of tests component |
| tests/tools/test_rl_training_tool.py | file | Part of tests component |
| tests/tools/test_search_hidden_dirs.py | file | Part of tests component |
| tests/tools/test_send_message_missing_platforms.py | file | Part of tests component |
| tests/tools/test_send_message_tool.py | file | Part of tests component |
| tests/tools/test_session_search.py | file | Part of tests component |
| tests/tools/test_singularity_preflight.py | file | Part of tests component |
| tests/tools/test_skill_env_passthrough.py | file | Part of tests component |
| tests/tools/test_skill_improvements.py | file | Part of tests component |
| tests/tools/test_skill_manager_tool.py | file | Part of tests component |
| tests/tools/test_skill_size_limits.py | file | Part of tests component |
| tests/tools/test_skill_view_path_check.py | file | Part of tests component |
| tests/tools/test_skill_view_traversal.py | file | Part of tests component |
| tests/tools/test_skills_guard.py | file | Part of tests component |
| tests/tools/test_skills_hub.py | file | Part of tests component |
| tests/tools/test_skills_hub_clawhub.py | file | Part of tests component |
| tests/tools/test_skills_sync.py | file | Part of tests component |
| tests/tools/test_skills_tool.py | file | Part of tests component |
| tests/tools/test_ssh_environment.py | file | Part of tests component |
| tests/tools/test_symlink_prefix_confusion.py | file | Part of tests component |
| tests/tools/test_terminal_disk_usage.py | file | Part of tests component |
| tests/tools/test_terminal_exit_semantics.py | file | Part of tests component |
| tests/tools/test_terminal_requirements.py | file | Part of tests component |
| tests/tools/test_terminal_timeout_output.py | file | Part of tests component |
| tests/tools/test_terminal_tool_requirements.py | file | Part of tests component |
| tests/tools/test_tirith_security.py | file | Part of tests component |
| tests/tools/test_todo_tool.py | file | Part of tests component |
| tests/tools/test_transcription.py | file | Part of tests component |
| tests/tools/test_transcription_tools.py | file | Part of tests component |
| tests/tools/test_url_safety.py | file | Part of tests component |
| tests/tools/test_vision_tools.py | file | Part of tests component |
| tests/tools/test_voice_cli_integration.py | file | Part of tests component |
| tests/tools/test_voice_mode.py | file | Part of tests component |
| tests/tools/test_web_tools_config.py | file | Part of tests component |
| tests/tools/test_web_tools_tavily.py | file | Part of tests component |
| tests/tools/test_website_policy.py | file | Part of tests component |
| tests/tools/test_windows_compat.py | file | Part of tests component |
| tests/tools/test_write_deny.py | file | Part of tests component |
| tests/tools/test_yolo_mode.py | file | Part of tests component |
| tools/__init__.py | file | Part of tools component |
| tools/ansi_strip.py | file | Part of tools component |
| tools/approval.py | file | Part of tools component |
| tools/browser_camofox.py | file | Part of tools component |
| tools/browser_camofox_state.py | file | Part of tools component |
| tools/browser_providers/__init__.py | file | Part of tools component |
| tools/browser_providers/base.py | file | Part of tools component |
| tools/browser_providers/browser_use.py | file | Part of tools component |
| tools/browser_providers/browserbase.py | file | Part of tools component |
| tools/browser_tool.py | file | Part of tools component |
| tools/checkpoint_manager.py | file | Part of tools component |
| tools/clarify_tool.py | file | Part of tools component |
| tools/code_execution_tool.py | file | Part of tools component |
| tools/credential_files.py | file | Part of tools component |
| tools/cronjob_tools.py | file | Part of tools component |
| tools/debug_helpers.py | file | Part of tools component |
| tools/delegate_tool.py | file | Part of tools component |
| tools/env_passthrough.py | file | Part of tools component |
| tools/environments/__init__.py | file | Part of tools component |
| tools/environments/base.py | file | Part of tools component |
| tools/environments/daytona.py | file | Part of tools component |
| tools/environments/docker.py | file | Part of tools component |
| tools/environments/local.py | file | Part of tools component |
| tools/environments/managed_modal.py | file | Part of tools component |
| tools/environments/modal.py | file | Part of tools component |
| tools/environments/modal_common.py | file | Part of tools component |
| tools/environments/persistent_shell.py | file | Part of tools component |
| tools/environments/singularity.py | file | Part of tools component |
| tools/environments/ssh.py | file | Part of tools component |
| tools/file_operations.py | file | Part of tools component |
| tools/file_tools.py | file | Part of tools component |
| tools/fuzzy_match.py | file | Part of tools component |
| tools/homeassistant_tool.py | file | Part of tools component |
| tools/image_generation_tool.py | file | Part of tools component |
| tools/interrupt.py | file | Part of tools component |
| tools/managed_tool_gateway.py | file | Part of tools component |
| tools/mcp_oauth.py | file | Part of tools component |
| tools/mcp_tool.py | file | Part of tools component |
| tools/memory_tool.py | file | Part of tools component |
| tools/mixture_of_agents_tool.py | agent | Part of tools component |
| tools/neutts_samples/jo.txt | file | Part of tools component |
| tools/neutts_samples/jo.wav | file | Part of tools component |
| tools/neutts_synth.py | file | Part of tools component |
| tools/openrouter_client.py | file | Part of tools component |
| tools/patch_parser.py | file | Part of tools component |
| tools/process_registry.py | file | Part of tools component |
| tools/registry.py | file | Part of tools component |
| tools/rl_training_tool.py | file | Part of tools component |
| tools/send_message_tool.py | file | Part of tools component |
| tools/session_search_tool.py | file | Part of tools component |
| tools/skill_manager_tool.py | file | Part of tools component |
| tools/skills_guard.py | file | Part of tools component |
| tools/skills_hub.py | file | Part of tools component |
| tools/skills_sync.py | file | Part of tools component |
| tools/skills_tool.py | file | Part of tools component |
| tools/terminal_tool.py | file | Part of tools component |
| tools/tirith_security.py | file | Part of tools component |
| tools/todo_tool.py | file | Part of tools component |
| tools/tool_backend_helpers.py | file | Part of tools component |
| tools/transcription_tools.py | file | Part of tools component |
| tools/tts_tool.py | file | Part of tools component |
| tools/url_safety.py | file | Part of tools component |
| tools/vision_tools.py | file | Part of tools component |
| tools/voice_mode.py | file | Part of tools component |
| tools/web_tools.py | file | Part of tools component |
| tools/website_policy.py | file | Part of tools component |
| toolset_distributions.py | file | Root configuration or documentation |
| toolsets.py | file | Root configuration or documentation |
| trajectory_compressor.py | file | Root configuration or documentation |
| utils.py | file | Root configuration or documentation |
| uv.lock | file | Root configuration or documentation |
| website/.gitignore | file | Part of website component |
| website/README.md | Documentation | Explains how to install and use |
| website/docs/developer-guide/_category_.json | file | Part of website component |
| website/docs/developer-guide/acp-internals.md | file | Part of website component |
| website/docs/developer-guide/adding-providers.md | file | Part of website component |
| website/docs/developer-guide/adding-tools.md | file | Part of website component |
| website/docs/developer-guide/agent-loop.md | agent | Part of website component |
| website/docs/developer-guide/architecture.md | file | Part of website component |
| website/docs/developer-guide/context-compression-and-caching.md | file | Part of website component |
| website/docs/developer-guide/contributing.md | file | Part of website component |
| website/docs/developer-guide/creating-skills.md | file | Part of website component |
| website/docs/developer-guide/cron-internals.md | file | Part of website component |
| website/docs/developer-guide/environments.md | file | Part of website component |
| website/docs/developer-guide/extending-the-cli.md | file | Part of website component |
| website/docs/developer-guide/gateway-internals.md | file | Part of website component |
| website/docs/developer-guide/memory-provider-plugin.md | file | Part of website component |
| website/docs/developer-guide/prompt-assembly.md | file | Part of website component |
| website/docs/developer-guide/provider-runtime.md | file | Part of website component |
| website/docs/developer-guide/session-storage.md | file | Part of website component |
| website/docs/developer-guide/tools-runtime.md | file | Part of website component |
| website/docs/developer-guide/trajectory-format.md | file | Part of website component |
| website/docs/getting-started/_category_.json | file | Part of website component |
| website/docs/getting-started/installation.md | file | Part of website component |
| website/docs/getting-started/learning-path.md | file | Part of website component |
| website/docs/getting-started/nix-setup.md | file | Part of website component |
| website/docs/getting-started/quickstart.md | file | Part of website component |
| website/docs/getting-started/updating.md | file | Part of website component |
| website/docs/guides/_category_.json | file | Part of website component |
| website/docs/guides/build-a-hermes-plugin.md | file | Part of website component |
| website/docs/guides/daily-briefing-bot.md | file | Part of website component |
| website/docs/guides/migrate-from-openclaw.md | file | Part of website component |
| website/docs/guides/python-library.md | file | Part of website component |
| website/docs/guides/team-telegram-assistant.md | file | Part of website component |
| website/docs/guides/tips.md | file | Part of website component |
| website/docs/guides/use-mcp-with-hermes.md | file | Part of website component |
| website/docs/guides/use-soul-with-hermes.md | file | Part of website component |
| website/docs/guides/use-voice-mode-with-hermes.md | file | Part of website component |
| website/docs/index.md | file | Part of website component |
| website/docs/integrations/index.md | file | Part of website component |
| website/docs/integrations/providers.md | file | Part of website component |
| website/docs/reference/_category_.json | file | Part of website component |
| website/docs/reference/cli-commands.md | file | Part of website component |
| website/docs/reference/environment-variables.md | file | Part of website component |
| website/docs/reference/faq.md | file | Part of website component |
| website/docs/reference/mcp-config-reference.md | file | Part of website component |
| website/docs/reference/optional-skills-catalog.md | file | Part of website component |
| website/docs/reference/profile-commands.md | file | Part of website component |
| website/docs/reference/skills-catalog.md | file | Part of website component |
| website/docs/reference/slash-commands.md | file | Part of website component |
| website/docs/reference/tools-reference.md | file | Part of website component |
| website/docs/reference/toolsets-reference.md | file | Part of website component |
| website/docs/user-guide/_category_.json | file | Part of website component |
| website/docs/user-guide/checkpoints-and-rollback.md | file | Part of website component |
| website/docs/user-guide/cli.md | file | Part of website component |
| website/docs/user-guide/configuration.md | file | Part of website component |
| website/docs/user-guide/docker.md | file | Part of website component |
| website/docs/user-guide/features/_category_.json | file | Part of website component |
| website/docs/user-guide/features/acp.md | file | Part of website component |
| website/docs/user-guide/features/api-server.md | file | Part of website component |
| website/docs/user-guide/features/batch-processing.md | file | Part of website component |
| website/docs/user-guide/features/browser.md | file | Part of website component |
| website/docs/user-guide/features/code-execution.md | file | Part of website component |
| website/docs/user-guide/features/context-files.md | file | Part of website component |
| website/docs/user-guide/features/context-references.md | file | Part of website component |
| website/docs/user-guide/features/credential-pools.md | file | Part of website component |
| website/docs/user-guide/features/cron.md | file | Part of website component |
| website/docs/user-guide/features/delegation.md | file | Part of website component |
| website/docs/user-guide/features/fallback-providers.md | file | Part of website component |
| website/docs/user-guide/features/honcho.md | file | Part of website component |
| website/docs/user-guide/features/hooks.md | file | Part of website component |
| website/docs/user-guide/features/image-generation.md | file | Part of website component |
| website/docs/user-guide/features/mcp.md | file | Part of website component |
| website/docs/user-guide/features/memory-providers.md | file | Part of website component |
| website/docs/user-guide/features/memory.md | file | Part of website component |
| website/docs/user-guide/features/overview.md | file | Part of website component |
| website/docs/user-guide/features/personality.md | file | Part of website component |
| website/docs/user-guide/features/plugins.md | file | Part of website component |
| website/docs/user-guide/features/provider-routing.md | file | Part of website component |
| website/docs/user-guide/features/rl-training.md | file | Part of website component |
| website/docs/user-guide/features/skills.md | file | Part of website component |
| website/docs/user-guide/features/skins.md | file | Part of website component |
| website/docs/user-guide/features/tools.md | file | Part of website component |
| website/docs/user-guide/features/tts.md | file | Part of website component |
| website/docs/user-guide/features/vision.md | file | Part of website component |
| website/docs/user-guide/features/voice-mode.md | file | Part of website component |
| website/docs/user-guide/git-worktrees.md | file | Part of website component |
| website/docs/user-guide/messaging/_category_.json | file | Part of website component |
| website/docs/user-guide/messaging/dingtalk.md | file | Part of website component |
| website/docs/user-guide/messaging/discord.md | file | Part of website component |
| website/docs/user-guide/messaging/email.md | file | Part of website component |
| website/docs/user-guide/messaging/feishu.md | file | Part of website component |
| website/docs/user-guide/messaging/homeassistant.md | file | Part of website component |
| website/docs/user-guide/messaging/index.md | file | Part of website component |
| website/docs/user-guide/messaging/matrix.md | file | Part of website component |
| website/docs/user-guide/messaging/mattermost.md | file | Part of website component |
| website/docs/user-guide/messaging/open-webui.md | file | Part of website component |
| website/docs/user-guide/messaging/signal.md | file | Part of website component |
| website/docs/user-guide/messaging/slack.md | file | Part of website component |
| website/docs/user-guide/messaging/sms.md | file | Part of website component |
| website/docs/user-guide/messaging/telegram.md | file | Part of website component |
| website/docs/user-guide/messaging/webhooks.md | file | Part of website component |
| website/docs/user-guide/messaging/wecom.md | file | Part of website component |
| website/docs/user-guide/messaging/whatsapp.md | file | Part of website component |
| website/docs/user-guide/profiles.md | file | Part of website component |
| website/docs/user-guide/security.md | file | Part of website component |
| website/docs/user-guide/sessions.md | file | Part of website component |
| website/docs/user-guide/skills/godmode.md | file | Part of website component |
| website/docusaurus.config.ts | file | Part of website component |
| website/package-lock.json | file | Part of website component |
| website/package.json | file | Part of website component |
| website/scripts/extract-skills.py | file | Part of website component |
| website/sidebars.ts | file | Part of website component |
| website/src/css/custom.css | file | Part of website component |
| website/src/pages/skills/index.tsx | file | Part of website component |
| website/src/pages/skills/styles.module.css | file | Part of website component |
| website/static/.nojekyll | file | Part of website component |
| website/static/img/apple-touch-icon.png | file | Part of website component |
| website/static/img/docs/cli-layout.svg | file | Part of website component |
| website/static/img/docs/session-recap.svg | file | Part of website component |
| website/static/img/favicon-16x16.png | file | Part of website component |
| website/static/img/favicon-32x32.png | file | Part of website component |
| website/static/img/favicon.ico | file | Part of website component |
| website/static/img/favicon.svg | file | Part of website component |
| website/static/img/hermes-agent-banner.png | agent | Part of website component |
| website/static/img/logo.png | file | Part of website component |
| website/static/img/nous-logo.png | file | Part of website component |
| website/tsconfig.json | file | Part of website component |

## Hidden config files (CRITICAL)

These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|---------------|--------------------|---------|
| .gitignore | VISIBLE_gitignore | Git ignore rules |
| .plans | VISIBLE_plans | Custom hidden file/folder |
| .env.example | VISIBLE_env.example | Custom hidden file/folder |
| .gitmodules | VISIBLE_gitmodules | Custom hidden file/folder |
| .envrc | VISIBLE_envrc | Custom hidden file/folder |
| .github/ | VISIBLE_github/ | GitHub workflows |
| .dockerignore | VISIBLE_dockerignore | Custom hidden file/folder |

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|-----------------------|-----|
| skills/media/youtube-content/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/simpo/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/creative/popular-web-designs/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/research/arxiv/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/research/scrapling/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/flash-attention/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/llava/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mcp/native-mcp/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/autonomous-ai-agents/codex/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/training/trl-fine-tuning/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/security/oss-forensics/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/research/research-paper-writing/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/nemo-curator/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/note-taking/obsidian/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/github/github-code-review/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/productivity/memento-flashcards/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/autonomous-ai-agents/hermes-agent/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/apple/apple-reminders/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/creative/blender-mcp/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/models/segment-anything/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/tensorrt-llm/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/slime/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/creative/ascii-video/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/apple/imessage/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/pytorch-lightning/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/torchtitan/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/migration/openclaw-migration/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/cloud/modal/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/chroma/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mcp/mcporter/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/health/neuroskill-bci/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/media/heartmula/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/software-development/plan/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/research/dspy/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/blockchain/base/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/lambda-labs/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/evaluation/lm-evaluation-harness/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/github/github-issues/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/huggingface-hub/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/productivity/canvas/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/research/polymarket/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/apple/apple-notes/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/leisure/find-nearby/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/pinecone/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/software-development/writing-plans/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/evaluation/weights-and-biases/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/inference/vllm/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/research/gitnexus-explorer/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/software-development/test-driven-development/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/research/bioinformatics/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/productivity/telephony/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/training/unsloth/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/research/blogwatcher/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/productivity/ocr-and-documents/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/inference/gguf/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/creative/meme-generation/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/models/whisper/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/email/himalaya/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/software-development/systematic-debugging/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/github/github-pr-workflow/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/qdrant/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/research/parallel-cli/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/productivity/notion/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/autonomous-ai-agents/opencode/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/autonomous-ai-agents/blackbox/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/inference/outlines/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/devops/webhook-subscriptions/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/communication/one-three-one-rule/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/red-teaming/godmode/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/productivity/siyuan/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/research/duckduckgo-search/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/instructor/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/gaming/minecraft-modpack-server/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/blockchain/solana/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/dogfood/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/security/sherlock/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/creative/ascii-art/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/inference/obliteratus/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/productivity/linear/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/media/gif-search/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/media/songsee/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/github/github-auth/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| AGENTS.md | COMBINED/agents/by-role/hermes-agent/ | Core agent files |
| skills/productivity/nano-pdf/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/software-development/subagent-driven-development/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/data-science/jupyter-live-kernel/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mcp/fastmcp/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/models/audiocraft/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/devops/docker-management/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/training/axolotl/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| README.md | COMBINED/REPO_DOCS/02-hermes-agent/ | Documentation |
| skills/github/codebase-inspection/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/apple/findmy/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/training/peft/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/saelens/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/software-development/requesting-code-review/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/training/grpo-rl-training/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/productivity/powerpoint/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/smart-home/openhue/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/models/clip/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/training/pytorch-fsdp/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/devops/cli/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/research/qmd/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/github/github-repo-management/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/creative/songwriting-and-ai-music/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/gaming/pokemon-player/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/inference/guidance/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/huggingface-tokenizers/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/social-media/xitter/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/productivity/google-workspace/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/accelerate/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/creative/excalidraw/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/hermes-atropos-environments/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/models/stable-diffusion/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/mlops/faiss/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/email/agentmail/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/mlops/inference/llama-cpp/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| skills/autonomous-ai-agents/claude-code/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/security/1password/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |
| optional-skills/research/domain-intel/SKILL.md | COMBINED/skills/hermes-agent/ | Agent skill definition |

## Key insights for ULTRACAR integration

- Uniquely features a rich suite of `optional-skills` organized by domain (mlops, creative, productivity, security), effectively solving the fragmented context problem.\n- Includes native memory integrations out-of-the-box (e.g., Mem0, Honcho).\n- Can easily be orchestrated by other larger meta-agents using its gateway routing to different instances.

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
mv VISIBLE_gitignore .gitignore
mv VISIBLE_plans .plans
mv VISIBLE_env.example .env.example
mv VISIBLE_gitmodules .gitmodules
mv VISIBLE_envrc .envrc
mv VISIBLE_github/ .github/
mv VISIBLE_dockerignore .dockerignore
```

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md
─────────────────────────────────────────────────────────
