---
tags:
  - domain/skills
  - artifact/doc
  - source/combined-root
---

# Marshutization Map (Leftover Skills)

Mappings from leftover sources to their new COMBINED locations, plus notes on replacements so cross-file references can be updated if encountered.

| Source Path | Destination Path | Notes |
| --- | --- | --- |
| `.claude/skills/skills-research/research/deep-research/SKILL.md` | `.claude/skills/skills-research/research/deep-research/SKILL.md` | New research skill added; no prior version existed. |
| `.claude/skills/skills-seo/seo/seo-audit/SKILL.md` | `.claude/skills/skills-seo/seo/seo-audit/SKILL.md` | New SEO audit skill; no prior version existed. |
| `.claude/skills/skills-platform/meta/skill-creator/SKILL.md` | `.claude/skills/skills-platform/meta/skill-creator/SKILL.md` | Meta skill creator added under platform/meta. |
| `.claude/skills/skills-superpowers/superpowers/tdd-workflow/SKILL.md` | `.claude/skills/skills-superpowers/superpowers/tdd-workflow/SKILL.md` | New superpowers workflow; no prior version. |
| `.claude/skills/skills-superpowers/superpowers/requesting-code-review/SKILL.md` | `.claude/skills/skills-superpowers/superpowers/requesting-code-review/SKILL.md` | Replaces earlier superpowers copy with full metadata/sources. |
| `.claude/skills/skills-superpowers/superpowers/subagent-driven-development/SKILL.md` | `.claude/skills/skills-superpowers/superpowers/subagent-driven-development/SKILL.md` | Replaces earlier superpowers copy with full metadata/sources. |
| `.claude/skills/skills-superpowers/superpowers/systematic-debugging/SKILL.md` | `.claude/skills/skills-superpowers/superpowers/systematic-debugging/SKILL.md` | Replaces earlier superpowers copy with full metadata/sources. |
| `.claude/skills/skills-superpowers/superpowers/writing-plans/SKILL.md` | `.claude/skills/skills-superpowers/superpowers/writing-plans/SKILL.md` | Replaces earlier superpowers copy with full metadata/sources. |
| `.claude/agents/by-interface/agents-copilot/awesome-copilot/prompt-builder.agent.md` | `.claude/agents/by-interface/agents-copilot/awesome-copilot/prompt-builder.agent.md` | Copilot prompt builder agent moved into the COMBINED Copilot catalog; update any links to old agents path. |
| `.claude/agents/by-interface/agents-copilot/awesome-copilot/polyglot-test-builder.agent.md` | `.claude/agents/by-interface/agents-copilot/awesome-copilot/polyglot-test-builder.agent.md` | Polyglot test builder agent now co-located with other Copilot agents. |
| `.claude/agents/by-interface/agents-copilot/awesome-copilot/python-notebook-sample-builder.agent.md` | `.claude/agents/by-interface/agents-copilot/awesome-copilot/python-notebook-sample-builder.agent.md` | Sample notebook builder agent relocated to Copilot interface set. |
| `.claude/agents/by-interface/agents-copilot/website/src/content/docs/learning-hub/building-custom-agents.md` | `.claude/agents/by-interface/agents-copilot/website/src/content/docs/learning-hub/building-custom-agents.md` | Learning Hub doc now lives with the published Copilot website sources. |
| `.claude/agents/by-interface/agents-copilot/_github/workflows/build-website.yml` | `.claude/agents/by-interface/agents-copilot/_github/workflows/build-website.yml` | Website build workflow stored with other Copilot GitHub actions. |
| `.claude/mcp-servers/mcp-openviking/bot/deploy/docker/build-image.sh` & `build-multiarch.sh` | `.claude/mcp-servers/mcp-openviking/bot/deploy/docker/` | Docker build entrypoints for OpenViking bot; adjust any scripts pointing to the old Tools path. |
| `.claude/mcp-servers/mcp-openviking/build_support/{__init__.py,versioning.py,x86_profiles.py}` | `.claude/mcp-servers/mcp-openviking/build_support/` | Build support helpers for OpenViking now reside beside core sources. |
| `.claude/mcp-servers/mcp-openviking/openviking/core/building_tree.py` / `parse/tree_builder.py` | `.claude/mcp-servers/mcp-openviking/openviking/{core,parse}/` | Tree builder modules moved into the OpenViking core/parse packages. |
| `.claude/mcp-servers/mcp-openviking/src/index/detail/vector/sparse_retrieval/sparse_distance_measure.h` | `.claude/mcp-servers/mcp-openviking/src/index/detail/vector/sparse_retrieval/sparse_distance_measure.h` | Sparse retrieval header placed with other index headers. |
| `.claude/mcp-servers/mcp-openviking/tests/misc/test_tree_builder_dedup.py` | `.claude/mcp-servers/mcp-openviking/tests/misc/test_tree_builder_dedup.py` | Deduplication test moved alongside other OpenViking tests. |
| `.claude/mcp-servers/mcp-openviking/third_party/leveldb-1.23/*builder*` | `.claude/mcp-servers/mcp-openviking/third_party/leveldb-1.23/{db,include/leveldb,table}/` | LevelDB builder sources/headers relocated; update any relative includes. |
| `.claude/mcp-servers/mcp-openviking/third_party/spdlog-1.14.1/include/spdlog/sinks/dist_sink.h` | `.claude/mcp-servers/mcp-openviking/third_party/spdlog-1.14.1/include/spdlog/sinks/dist_sink.h` | Dist sink header kept with bundled spdlog. |
| `.claude/mcp-servers/mcp-openviking/third_party/krl/src/{IPdistance_simd.cpp,L2distance_simd.cpp}` | `.claude/mcp-servers/mcp-openviking/third_party/krl/src/` | SIMD distance implementations added to bundled KRL sources. |
| `.claude/mcp-servers/mcp-openviking/third_party/agfs/*` (.gitignore, workflows, build.py, webapp/.gitignore) | `.claude/mcp-servers/mcp-openviking/third_party/agfs/...` | AGFS submodules mirrored under third_party; update references to Tools path. |
| `.claude/mcp-servers/mcp-lightpanda/build.zig` & `build.zig.zon` | `.claude/mcp-servers/mcp-lightpanda/` | Lightpanda browser build files co-located with MCP server sources. |
| `.claude/memory/memory-claude-mem/docs/reports/2026-01-05--PR-556-brainstorming-claude-md-distribution.md` | `.claude/memory/memory-claude-mem/docs/reports/2026-01-05--PR-556-brainstorming-claude-md-distribution.md` | New incident report kept with other Claude-Mem reports. |
| `.claude/memory/memory-claude-mem/plan/npx-distribution.md` | `.claude/memory/memory-claude-mem/plan/npx-distribution.md` | Distribution plan now under memory-claude-mem/plan. |
| `.claude/memory/memory-claude-mem/installer/build.mjs` & `installer/dist/index.js` | `.claude/memory/memory-claude-mem/installer/{build.mjs,dist/index.js}` | Installer build artifacts grouped with installer config. |
| `.claude/memory/memory-claude-mem/scripts/build-{hooks,viewer,worker-binary}.js` | `.claude/memory/memory-claude-mem/scripts/` | Build scripts placed with existing automation scripts. |
| `.claude/mcp-servers/mcp-pretext/tsconfig.build.json` | `.claude/mcp-servers/mcp-pretext/tsconfig.build.json` | Build config restored alongside Pretext sources. |
| `.claude/ui-design/ui-components-shadcn/apps/v4/scripts/{build-registry.mts,build-test-app.mts}` | `.claude/ui-design/ui-components-shadcn/apps/v4/scripts/{build-registry.mts,build-test-app.mts}` | Shadcn app build scripts moved to the COMBINED ui-components-shadcn toolkit. |

| `.antigravity/` | `.claude/workspace-config/antigravity/` | All Antigravity IDE configuration moved to workspace-config. |
| `.claude/` | `.claude/workspace-config/claude/` | All Claude Code IDE configuration moved to workspace-config. |
| `.cursor/` | `.claude/workspace-config/cursor/` | All Cursor AI IDE configuration moved to workspace-config. |

Cross-references: Copilot docs/workflows may still point to `Skills/awesome-copilot-main/...`; OpenViking build docs or scripts may reference `.claude/mcp-servers/mcp-openviking/...`; Claude-Mem release/installer docs may reference `.claude/memory/memory-claude-mem/...`; IDE config paths may reference `.claude/workspace-config/claude/skills/` or `.claude/workspace-config/claude/commands/`. Update those to the COMBINED destinations when touched.

## Role Routing Updates (2026-04-08)

| Source Path | Destination Path | Notes |
| --- | --- | --- |
| `.claude/agents/agents-gsd/gsd-research-synthesizer.md` | `.claude/agents/by-role/synthesizer/gsd-research-synthesizer.md` | Moved to dedicated synthesizer role folder. |
| `.claude/agents/agents-gsd/gsd-plan-checker.md` | `.claude/agents/by-role/plan-checker/gsd-plan-checker.md` | Moved from general planner/research routing to plan-checker role. |
| `.claude/agents/agents-gsd/gsd-executor.md` | `.claude/agents/by-role/executor/gsd-executor.md` | Routed to executor role folder. |
| `.claude/agents/agents-gsd/gsd-verifier.md` | `.claude/agents/by-role/verifier/gsd-verifier.md` | Routed to verifier role folder. |
| `.claude/agents/agents-omc/analyst.md` | `.claude/agents/by-role/analyst/analyst.md` | Routed to new analyst role folder. |
| `.claude/agents/agents-omc/executor.md` | `.claude/agents/by-role/executor/executor.md` | Routed to executor role folder. |
| `.claude/agents/agents-omc/verifier.md` | `.claude/agents/by-role/verifier/verifier.md` | Routed to verifier role folder. |
| `.claude/agents/agents-ruflo/{architect,coder,reviewer,security-architect,tester}.yaml` | `.claude/agents/by-role/{architect,coder,reviewer,security,tester}/` | Ruflo role YAMLs confirmed in role-based destinations. |
| `.claude/agents/agents-ruflo/skills/` | `.claude/skills/skills-ruflo/` | Ruflo skills consolidated under COMBINED skills catalog. |

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

