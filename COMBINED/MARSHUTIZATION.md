# Marshutization Map (Leftover Skills)

Mappings from leftover sources to their new COMBINED locations, plus notes on replacements so cross-file references can be updated if encountered.

| Source Path | Destination Path | Notes |
| --- | --- | --- |
| `COMBINED/skills/skills-research/research/deep-research/SKILL.md` | `COMBINED/skills/skills-research/research/deep-research/SKILL.md` | New research skill added; no prior version existed. |
| `COMBINED/skills/skills-seo/seo/seo-audit/SKILL.md` | `COMBINED/skills/skills-seo/seo/seo-audit/SKILL.md` | New SEO audit skill; no prior version existed. |
| `COMBINED/skills/skills-platform/meta/skill-creator/SKILL.md` | `COMBINED/skills/skills-platform/meta/skill-creator/SKILL.md` | Meta skill creator added under platform/meta. |
| `COMBINED/skills/skills-superpowers/superpowers/tdd-workflow/SKILL.md` | `COMBINED/skills/skills-superpowers/superpowers/tdd-workflow/SKILL.md` | New superpowers workflow; no prior version. |
| `COMBINED/skills/skills-superpowers/superpowers/requesting-code-review/SKILL.md` | `COMBINED/skills/skills-superpowers/superpowers/requesting-code-review/SKILL.md` | Replaces earlier superpowers copy with full metadata/sources. |
| `COMBINED/skills/skills-superpowers/superpowers/subagent-driven-development/SKILL.md` | `COMBINED/skills/skills-superpowers/superpowers/subagent-driven-development/SKILL.md` | Replaces earlier superpowers copy with full metadata/sources. |
| `COMBINED/skills/skills-superpowers/superpowers/systematic-debugging/SKILL.md` | `COMBINED/skills/skills-superpowers/superpowers/systematic-debugging/SKILL.md` | Replaces earlier superpowers copy with full metadata/sources. |
| `COMBINED/skills/skills-superpowers/superpowers/writing-plans/SKILL.md` | `COMBINED/skills/skills-superpowers/superpowers/writing-plans/SKILL.md` | Replaces earlier superpowers copy with full metadata/sources. |
| `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/prompt-builder.agent.md` | `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/prompt-builder.agent.md` | Copilot prompt builder agent moved into the COMBINED Copilot catalog; update any links to old agents path. |
| `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/polyglot-test-builder.agent.md` | `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/polyglot-test-builder.agent.md` | Polyglot test builder agent now co-located with other Copilot agents. |
| `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/python-notebook-sample-builder.agent.md` | `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/python-notebook-sample-builder.agent.md` | Sample notebook builder agent relocated to Copilot interface set. |
| `COMBINED/agents/by-interface/agents-copilot/website/src/content/docs/learning-hub/building-custom-agents.md` | `COMBINED/agents/by-interface/agents-copilot/website/src/content/docs/learning-hub/building-custom-agents.md` | Learning Hub doc now lives with the published Copilot website sources. |
| `COMBINED/agents/by-interface/agents-copilot/_github/workflows/build-website.yml` | `COMBINED/agents/by-interface/agents-copilot/_github/workflows/build-website.yml` | Website build workflow stored with other Copilot GitHub actions. |
| `COMBINED/mcp-servers/mcp-openviking/bot/deploy/docker/build-image.sh` & `build-multiarch.sh` | `COMBINED/mcp-servers/mcp-openviking/bot/deploy/docker/` | Docker build entrypoints for OpenViking bot; adjust any scripts pointing to the old Tools path. |
| `COMBINED/mcp-servers/mcp-openviking/build_support/{__init__.py,versioning.py,x86_profiles.py}` | `COMBINED/mcp-servers/mcp-openviking/build_support/` | Build support helpers for OpenViking now reside beside core sources. |
| `COMBINED/mcp-servers/mcp-openviking/openviking/core/building_tree.py` / `parse/tree_builder.py` | `COMBINED/mcp-servers/mcp-openviking/openviking/{core,parse}/` | Tree builder modules moved into the OpenViking core/parse packages. |
| `COMBINED/mcp-servers/mcp-openviking/src/index/detail/vector/sparse_retrieval/sparse_distance_measure.h` | `COMBINED/mcp-servers/mcp-openviking/src/index/detail/vector/sparse_retrieval/sparse_distance_measure.h` | Sparse retrieval header placed with other index headers. |
| `COMBINED/mcp-servers/mcp-openviking/tests/misc/test_tree_builder_dedup.py` | `COMBINED/mcp-servers/mcp-openviking/tests/misc/test_tree_builder_dedup.py` | Deduplication test moved alongside other OpenViking tests. |
| `COMBINED/mcp-servers/mcp-openviking/third_party/leveldb-1.23/*builder*` | `COMBINED/mcp-servers/mcp-openviking/third_party/leveldb-1.23/{db,include/leveldb,table}/` | LevelDB builder sources/headers relocated; update any relative includes. |
| `COMBINED/mcp-servers/mcp-openviking/third_party/spdlog-1.14.1/include/spdlog/sinks/dist_sink.h` | `COMBINED/mcp-servers/mcp-openviking/third_party/spdlog-1.14.1/include/spdlog/sinks/dist_sink.h` | Dist sink header kept with bundled spdlog. |
| `COMBINED/mcp-servers/mcp-openviking/third_party/krl/src/{IPdistance_simd.cpp,L2distance_simd.cpp}` | `COMBINED/mcp-servers/mcp-openviking/third_party/krl/src/` | SIMD distance implementations added to bundled KRL sources. |
| `COMBINED/mcp-servers/mcp-openviking/third_party/agfs/*` (.gitignore, workflows, build.py, webapp/.gitignore) | `COMBINED/mcp-servers/mcp-openviking/third_party/agfs/...` | AGFS submodules mirrored under third_party; update references to Tools path. |
| `COMBINED/mcp-servers/mcp-lightpanda/build.zig` & `build.zig.zon` | `COMBINED/mcp-servers/mcp-lightpanda/` | Lightpanda browser build files co-located with MCP server sources. |
| `COMBINED/memory/memory-claude-mem/docs/reports/2026-01-05--PR-556-brainstorming-claude-md-distribution.md` | `COMBINED/memory/memory-claude-mem/docs/reports/2026-01-05--PR-556-brainstorming-claude-md-distribution.md` | New incident report kept with other Claude-Mem reports. |
| `COMBINED/memory/memory-claude-mem/plan/npx-distribution.md` | `COMBINED/memory/memory-claude-mem/plan/npx-distribution.md` | Distribution plan now under memory-claude-mem/plan. |
| `COMBINED/memory/memory-claude-mem/installer/build.mjs` & `installer/dist/index.js` | `COMBINED/memory/memory-claude-mem/installer/{build.mjs,dist/index.js}` | Installer build artifacts grouped with installer config. |
| `COMBINED/memory/memory-claude-mem/scripts/build-{hooks,viewer,worker-binary}.js` | `COMBINED/memory/memory-claude-mem/scripts/` | Build scripts placed with existing automation scripts. |
| `COMBINED/mcp-servers/mcp-pretext/tsconfig.build.json` | `COMBINED/mcp-servers/mcp-pretext/tsconfig.build.json` | Build config restored alongside Pretext sources. |
| `COMBINED/ui-design/ui-components-shadcn/apps/v4/scripts/{build-registry.mts,build-test-app.mts}` | `COMBINED/ui-design/ui-components-shadcn/apps/v4/scripts/{build-registry.mts,build-test-app.mts}` | Shadcn app build scripts moved to the COMBINED ui-components-shadcn toolkit. |

| `.antigravity/` | `COMBINED/workspace-config/antigravity/` | All Antigravity IDE configuration moved to workspace-config. |
| `.claude/` | `COMBINED/workspace-config/claude/` | All Claude Code IDE configuration moved to workspace-config. |
| `.cursor/` | `COMBINED/workspace-config/cursor/` | All Cursor AI IDE configuration moved to workspace-config. |

Cross-references: Copilot docs/workflows may still point to `Skills/awesome-copilot-main/...`; OpenViking build docs or scripts may reference `COMBINED/mcp-servers/mcp-openviking/...`; Claude-Mem release/installer docs may reference `COMBINED/memory/memory-claude-mem/...`; IDE config paths may reference `COMBINED/workspace-config/claude/skills/` or `COMBINED/workspace-config/claude/commands/`. Update those to the COMBINED destinations when touched.

## Role Routing Updates (2026-04-08)

| Source Path | Destination Path | Notes |
| --- | --- | --- |
| `COMBINED/agents/agents-gsd/gsd-research-synthesizer.md` | `COMBINED/agents/by-role/synthesizer/gsd-research-synthesizer.md` | Moved to dedicated synthesizer role folder. |
| `COMBINED/agents/agents-gsd/gsd-plan-checker.md` | `COMBINED/agents/by-role/plan-checker/gsd-plan-checker.md` | Moved from general planner/research routing to plan-checker role. |
| `COMBINED/agents/agents-gsd/gsd-executor.md` | `COMBINED/agents/by-role/executor/gsd-executor.md` | Routed to executor role folder. |
| `COMBINED/agents/agents-gsd/gsd-verifier.md` | `COMBINED/agents/by-role/verifier/gsd-verifier.md` | Routed to verifier role folder. |
| `COMBINED/agents/agents-omc/analyst.md` | `COMBINED/agents/by-role/analyst/analyst.md` | Routed to new analyst role folder. |
| `COMBINED/agents/agents-omc/executor.md` | `COMBINED/agents/by-role/executor/executor.md` | Routed to executor role folder. |
| `COMBINED/agents/agents-omc/verifier.md` | `COMBINED/agents/by-role/verifier/verifier.md` | Routed to verifier role folder. |
| `COMBINED/agents/agents-ruflo/{architect,coder,reviewer,security-architect,tester}.yaml` | `COMBINED/agents/by-role/{architect,coder,reviewer,security,tester}/` | Ruflo role YAMLs confirmed in role-based destinations. |
| `COMBINED/agents/agents-ruflo/skills/` | `COMBINED/skills/skills-ruflo/` | Ruflo skills consolidated under COMBINED skills catalog. |
