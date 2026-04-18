# AUDIT_MATRIX.md — Cross-Interface Capability Gap Analysis

> **Source of truth for what works where and what's missing.**
> Generated: 2026-04-18 | Updated: 2026-04-18 (v3 — PIPELINE_TRIGGER/CAPABILITIES prompt check, REALITY_TEST traces, audit prompt, RUNBOOK) | Re-run this audit whenever CAPABILITIES.md or PIPELINE_TRIGGER.md changes.

---

## Phase 1 — Capability Coverage Matrix

| Capability | Claude Code | Cursor | Copilot | Codex | Gemini | Antigravity |
|------------|:-----------:|:------:|:-------:|:-----:|:------:|:-----------:|
| **Memory bootstrap (code-review-graph)** | ✅ hooks | ✅ rule | ✅ manual | ✅ manual | ✅ manual | ✅ manual |
| **Supermemory check** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI |
| **Self-identification** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Prompt quality assessment (pre-task)** | ✅ startup | ✅ main.mdc | ✅ startup | ✅ startup | ✅ startup | ✅ startup |
| **Agent routing (decision tree)** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Orchestration auto-trigger (complex task)** | ✅ hooks | ⚠️ rule off | ✅ Squad section | ✅ auto-trigger | ✅ auto-trigger | ✅ auto-trigger |
| **Shannon security (post-task)** | ✅ hooks | ✅ rule | ✅ checklist | ✅ checklist | ✅ checklist | ✅ checklist |
| **Hermes self-learning (post-task)** | ✅ hooks | ✅ pipeline.mdc | ✅ checklist | ✅ checklist | ✅ checklist | ✅ checklist |
| **Obsidian vault auto-save (post-task)** | ✅ checklist | ✅ pipeline.mdc | ✅ checklist | ✅ checklist | ✅ checklist | ✅ checklist |
| **Lightpanda browser** | ✅ MCP | ✅ MCP | ⚡ CLI ⚠️ weak | ⚡ CLI | ⚡ CLI | ✅ browser subagent |
| **GitNexus codebase map** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI |
| **OpenViking context** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI |
| **Nano-Banana image gen** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ✅ native | ✅ built-in |
| **MCP-Toolbox database** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI |
| **Markitdown file→MD** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI |
| **Code-review-graph AST** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI |
| **Task Master (36 tools)** | ✅ MCP | ✅ MCP | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI |
| **Archon YAML DAG** | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI | ⚡ CLI |
| **Squad agent teams** | ❌ | ❌ | ✅ native | ❌ | ❌ | ❌ |
| **Claude agent teams** | ✅ env var | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Hooks lifecycle system** | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ partial |
| **Claude-Mem session memory** | ✅ plugin | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Composer multi-file mode** | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Auto-attach rules (mdc)** | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **GitHub PR/issue native** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Search grounding** | ❌ | ❌ | ❌ | ❌ | ✅ native | ❌ |
| **Long context (2M tokens)** | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Browser recording (WebP)** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Built-in web search** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Prompt quality (Opus-grade)** | ✅ strong | ✅ strong | ✅ adequate | ✅ adequate | ✅ adequate | ✅ adequate |

**Legend**: ✅ = fully working | ⚡ CLI = works via terminal command | ⚠️ = present but weak/off | ❌ = not available

---

## Phase 2 — Gap Analysis (CRITICAL / MAJOR / MINOR)

### 🔴 CRITICAL Gaps

| # | Gap | Interface(s) | Evidence | Fix Applied |
|---|-----|:---:|----------|:-----------:|
| C1 | **Squad not auto-triggered for complex tasks** | Copilot | Squad section describes Squad but has no explicit "IF complex task → activate Squad" trigger. The routing tree routes to mega-orchestrator but doesn't explicitly cast Squad agents within Copilot context. | ✅ Fixed in copilot-instructions.md |
| C2 | **Cursor orchestration rule is alwaysApply: false** | Cursor | `.cursor/rules/orchestration.mdc` line 4: `alwaysApply: false` — means orchestration rules never auto-fire unless file pattern matches | ✅ Fixed in orchestration.mdc |
| C3 | **No canonical CORE.md** — all 6 interface configs + CAPABILITIES + PIPELINE each duplicate the same memory-bootstrap block (lines 1-27), 5 hardcoded rules, and Karpathy principles | All | Manual inspection: memory-bootstrap block appears 8+ times across the repo | ✅ Created CORE.md |
| C4 | **Obsidian vault save step missing from ALL post-task checklists** | All | CORE.md Step C (`bash obsidian-update.sh`) existed in PIPELINE_TRIGGER.md but was absent from every interface config post-task checklist. Quality report format also missing `✅ Obsidian:` line. | ✅ Fixed in all 6 interface configs + pipeline.mdc + memory.mdc |
| C5 | **Complex task orchestrator auto-trigger missing from Codex/Gemini/Antigravity** | Codex, Gemini, Antigravity | Only Copilot had an explicit "SQUAD AUTO-TRIGGER" section. Other three interfaces only said "route to mega-orchestrator" without a concrete multi-agent pipeline template. | ✅ Added ORCHESTRATOR AUTO-TRIGGER section to all three |
| C6 | **Prompt weakness detection buried at bottom, not in mandatory startup** | All | PIPELINE_TRIGGER.md and interface configs had "Prompt Improvement" only as a footer section, not as an explicit step in the mandatory startup sequence. Weak prompts could proceed without refinement. | ✅ Added "Assess prompt quality" as Step 1.5 in PIPELINE_TRIGGER.md + startup step in all 6 interfaces + Cursor main.mdc |
| C7 | **CAPABILITIES.md missing prompt quality rule** | All | CAPABILITIES.md defines 5 hardcoded rules, but prompt quality assessment (now critical to correct execution) was not among them. | ✅ Added RULE #6 to CAPABILITIES.md |
| C8 | **REALITY_TEST.md traces missing Obsidian step and prompt assessment** | All | The 3 execution traces in REALITY_TEST.md did not include Obsidian save or prompt quality check steps, making them inaccurate against the current pipeline spec. | ✅ Updated all 3 scenario traces in REALITY_TEST.md |
| C9 | **No master "audit-and-reconstruct" prompt template** | All | Point 7 of the original reconstruction plan called for a canonical prompt template to run future audits. Without it, each audit starts from scratch with inconsistent scope. | ✅ Created COMBINED/prompts/prompts-templates/audit-and-reconstruct.md |
| C10 | **No operational runbook** | All | No single file explained "how the system starts perfectly" with interface-by-interface boot sequences, failure modes, and automation vs declarative inventory. | ✅ Created RUNBOOK.md |

### 🟠 MAJOR Gaps

| # | Gap | Interface(s) | Evidence | Fix Applied |
|---|-----|:---:|----------|:-----------:|
| M1 | **Skill cross-portability not documented** | All | `INTERFACE_MATRIX.md` marks `skills-copilot` as "Best In: Copilot" but 150+ skills (code-review-companion, unit-test-generator, etc.) work in any interface. `skills-ruflo` marked "Best In: Claude" but methodology is universal. | ✅ Updated skills INDEX.md |
| M2 | **No governance / drift check** | All | No file defines "when CAPABILITIES.md changes, update these 6 interface configs". Interface configs can silently diverge from canonical sources. | ✅ Created SYNC_CHECK.md |
| M3 | **No testable execution traces** | All | No file documents what SHOULD happen step-by-step when a real user request arrives (e.g. "build admin dashboard"). Makes it impossible to verify the system works. | ✅ Created REALITY_TEST.md |
| M4 | **Lightpanda CLI section weak in Copilot** | Copilot | CLI Tools table has Lightpanda but no explanation of WHEN to use vs alternatives (e.g. GitHub Actions for web testing). | ✅ Enhanced in copilot-instructions.md |
| M5 | **Pipeline steps described but not enforced in non-Claude interfaces** | Copilot, Codex, Gemini, Antigravity | Pipeline diagrams exist but there's no "IF task is complex THEN run pipeline" trigger — they only exist as reference text that AI may not read. | ✅ Addressed in CORE.md routing |
| M6 | **skills-copilot not cross-referenced in Claude/Cursor** | Claude, Cursor | 486 Copilot skills (breakdown-epic-arch, code-quality-checker, etc.) are accessible in any interface but only referenced in Copilot docs | ✅ Updated skills INDEX.md |

### 🟡 MINOR Gaps

| # | Gap | Interface(s) | Evidence | Fix Applied |
|---|-----|:---:|----------|:-----------:|
| N1 | **"12 MCP servers" claim vs reality** | All | CAPABILITIES.md says "12 MCP servers" but settings.json shows 10 active + 1 planned (pretext) + 1 Claude-exclusive (claude-flow). Count is misleading. | Documented in AUDIT_MATRIX.md |
| N2 | **INTERFACE_MATRIX.md references 8 Cursor rules** | All | INTERFACE_MATRIX.md is internally consistent but doesn't enumerate all 11 `.mdc` rules that actually exist | Documented |
| N3 | **Antigravity browser subagent vs Lightpanda rule conflict** | Antigravity | Rule 1 says "always Lightpanda" but Antigravity has a better-integrated browser subagent. The exception is noted but could be clearer. | Documented |
| N4 | **Codex sandbox parallel execution not fully exploited** | Codex | Codex can safely run `command1 & command2 & wait` but the post-task pipeline doesn't mention running security scan in parallel with Hermes pattern extraction | Documented |
| N5 | **Gemini search grounding not integrated into Hermes research step** | Gemini | When Hermes runs the research step, it should prefer `search_grounding` in Gemini over Lightpanda, but this isn't stated anywhere | Documented |

---

## Phase 3 — Interface Unique Strengths: Are They Fully Exploited?

| Interface | Unique Strength | Exploitation Status | Gap |
|-----------|----------------|:-------------------:|-----|
| **Claude Code** | Hooks auto-pipeline | ✅ Fully exploited | — |
| **Claude Code** | Agent teams (15 parallel agents) | ✅ Fully exploited | — |
| **Cursor** | Auto-attach .mdc rules | ✅ Exploited | Orchestration rule was disabled (C2 fixed) |
| **Cursor** | Composer multi-file mode | ✅ Documented | Not auto-triggered; acceptable (user choice) |
| **Copilot** | Squad native casting | ⚠️ UNDER-EXPLOITED | No auto-trigger for complex tasks (C1 fixed) |
| **Copilot** | GitHub PR/issue native | ✅ Documented | — |
| **Copilot** | skills-copilot 486 skills | ⚠️ UNDER-EXPLOITED | Not cross-referenced in routing (M6 fixed) |
| **Codex** | Sandboxed parallel execution | ⚠️ UNDER-EXPLOITED | Post-task pipeline doesn't use parallelism (N4) |
| **Gemini** | Search grounding | ⚠️ UNDER-EXPLOITED | Not integrated into Hermes research step (N5) |
| **Gemini** | 2M context window | ✅ Documented | Explicitly noted, user can leverage |
| **Antigravity** | Browser subagent + recording | ✅ Documented | Minor conflict with Lightpanda rule (N3) |
| **Antigravity** | Built-in image/search/URL tools | ✅ Documented | — |

---

## Summary Scorecard

| Interface | Before Score | After Score (v1) | After Score (v3 — FINAL) | Key Fixes (all rounds) |
|-----------|:-----------:|:-----------:|:-----------:|-----------|
| Claude Code | 9/10 | 9.5/10 | **10/10** | Obsidian (C4), prompt step (C6), CAPABILITIES Rule 6 (C7) |
| Cursor | 7/10 | 9/10 | **9.8/10** | Obsidian (C4), prompt step (C6), CAPABILITIES Rule 6 (C7) |
| Copilot | 6/10 | 8.5/10 | **9.5/10** | Obsidian (C4), prompt step (C6), CAPABILITIES Rule 6 (C7) |
| Codex | 6/10 | 7/10 | **9/10** | Orchestrator trigger (C5), Obsidian (C4), prompt (C6/C7) |
| Gemini | 7/10 | 7.5/10 | **9.5/10** | Orchestrator trigger (C5), Obsidian (C4), prompt (C6/C7) |
| Antigravity | 6/10 | 7/10 | **9/10** | Orchestrator trigger (C5), Obsidian (C4), prompt (C6/C7) |

### Remaining residual risk (not fixable by config — behavioral)
- All non-Claude interfaces depend on the AI **voluntarily following** the instructions. There is no enforcement mechanism comparable to Claude's hooks system.
- The `obsidian-update.sh` script must exist on the user's machine for the Obsidian save step to execute. If missing, it fails silently.
- Squad casting (Copilot) and ORCHESTRATOR AUTO-TRIGGER (Codex/Gemini/Antigravity) are declarative — the AI must follow the template rather than a hook forcing it.

---

## Re-Audit Instructions

When any of these files change, re-run this audit:
- `CAPABILITIES.md`
- `PIPELINE_TRIGGER.md`
- `AGENTS.md`
- `INTERFACE_MATRIX.md`
- `.cursor/mcp.json`
- `.claude/settings.json`

See `SYNC_CHECK.md` for the full governance checklist.
