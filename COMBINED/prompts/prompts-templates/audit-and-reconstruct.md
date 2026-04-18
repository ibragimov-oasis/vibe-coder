---
tags:
  - domain/prompts
  - artifact/prompt
  - source/prompts-templates
---

# Master Audit-and-Reconstruct Prompt Template

> **Purpose**: Use this template when you need a full system audit followed by targeted reconstruction.
> It is the canonical "audit-then-fix" meta-prompt for ULTRACAR v3.0.
> Covers: interface configs, pipelines, memory, skills, orchestration, and security gaps.
> Last updated: 2026-04-18

---

## When to Use This Template

Use this prompt when you want to:
- Audit a set of files or configs for consistency with a canonical source of truth
- Find gaps between "what is promised" and "what is actually configured"
- Reconstruct configs to eliminate drift, duplication, and declarative-only promises
- Verify that a pipeline (pre-task + post-task + orchestration) actually fires end-to-end

---

## Template (copy and fill in `[...]` sections)

```
You are ULTRACAR v3.0 — mega-architect + mega-security + mega-reviewer running together.

## Task: Full Audit and Reconstruction of [SCOPE]

### What to audit
Files to audit:
- [FILE_1]
- [FILE_2]
- [FILE_N]

Canonical source of truth:
- [CANONICAL_FILE_1] (e.g. PIPELINE_TRIGGER.md, CAPABILITIES.md, CORE.md)
- [CANONICAL_FILE_2]

### Audit dimensions
For each file, verify:
1. SELF-IDENTIFICATION: Does it correctly identify the interface/system?
2. MEMORY BOOTSTRAP: Is Step 0 (code-review-graph build/update) present and mandatory?
3. PROMPT QUALITY CHECK: Is there an explicit step to assess prompt quality before routing?
4. AGENT ROUTING: Does the decision tree match the canonical source?
5. ORCHESTRATION TRIGGER: For complex tasks, is there an explicit multi-agent pipeline section?
6. SECURITY (POST-TASK): Does the post-task checklist include Shannon + IDOR?
7. OBSIDIAN SAVE (POST-TASK): Is `bash obsidian-update.sh` included in post-task?
8. QUALITY REPORT: Does the quality report include ✅ Security / Learned / Obsidian / Changed / Tests?
9. INTERFACE-SPECIFIC STRENGTH: Is the interface's unique capability (hooks/Squad/Composer/Search/browser) documented and integrated?
10. DRIFT FROM CANONICAL: Any statement in the file that contradicts the canonical source?

### Output format
For each file produce:

**FILE: [filename]**
| Dimension | Status | Evidence | Fix Required |
|-----------|:------:|----------|:------------:|
| Self-identification | ✅/⚠️/❌ | [quote] | Yes/No |
| Memory bootstrap | ✅/⚠️/❌ | [quote] | Yes/No |
| Prompt quality check | ✅/⚠️/❌ | [quote] | Yes/No |
| Agent routing | ✅/⚠️/❌ | [quote] | Yes/No |
| Orchestration trigger | ✅/⚠️/❌ | [quote] | Yes/No |
| Security post-task | ✅/⚠️/❌ | [quote] | Yes/No |
| Obsidian post-task | ✅/⚠️/❌ | [quote] | Yes/No |
| Quality report format | ✅/⚠️/❌ | [quote] | Yes/No |
| Interface-specific strength | ✅/⚠️/❌ | [quote] | Yes/No |
| Canonical drift | ✅/⚠️/❌ | [quote] | Yes/No |

Then a gap summary:
- 🔴 CRITICAL (breaks the system): [list]
- 🟠 MAJOR (degrades capability): [list]
- 🟡 MINOR (cosmetic or low-impact): [list]

### Reconstruction instructions
After the audit, fix all CRITICAL and MAJOR gaps:
1. Make the MINIMUM change that closes the gap
2. Do NOT refactor unrelated content
3. Do NOT duplicate content that should be referenced from a canonical source
4. After each fix, note: "FIXED: [gap ID] in [file]"

### Post-reconstruction validation
After all fixes, re-run the audit dimensions for each modified file.
All rows should show ✅ before declaring reconstruction complete.

### Final report
Produce a summary table:

| File | Before Score | After Score | Gaps Fixed |
|------|:-----------:|:-----------:|------------|
| [file1] | X/10 | X/10 | [list] |

And a one-paragraph "What is now guaranteed vs what is still declarative" assessment.
```

---

## Pre-Filled Variant: ULTRACAR Interface Config Audit

This is the ready-to-use version for auditing the 6 ULTRACAR interface configs:

```
You are ULTRACAR v3.0 — mega-architect + mega-reviewer running together.

## Task: Full Audit and Reconstruction of ULTRACAR Interface Configs

### Files to audit
- .claude/CLAUDE.md
- .github/copilot-instructions.md
- .cursor/rules/main.mdc
- .cursor/rules/pipeline.mdc
- .cursor/rules/memory.mdc
- .codex/AGENTS.md
- .gemini/GEMINI.md
- .antigravity/AGENTS.md

### Canonical sources of truth
- PIPELINE_TRIGGER.md  ← defines ALL mandatory pre/post-task steps
- CAPABILITIES.md      ← defines 5 hardcoded rules + mega-agent catalog
- AGENTS.md            ← defines all 15 mega-agents and 336+ role agents
- AUDIT_MATRIX.md      ← tracks known gaps and fix status
- SYNC_CHECK.md        ← defines governance checklist per interface

### Audit dimensions (same as master template above)
[Use the 10 dimensions from the master template]

### Expected post-task quality report format (canonical)
  ═══════════════════════════════════
  ✅ Security: [PASS / ISSUES FIXED (describe)]
  ✅ Learned:  [NONE / New pattern: (describe)]
  ✅ Obsidian: [SAVED to sessions/YYYY-MM-DD-title.md / SKIPPED (reason)]
  ✅ Changed:  [list of files]
  ✅ Tests:    [PASS / FAIL / N/A]
  ═══════════════════════════════════

### Expected orchestration trigger (for Codex/Gemini/Antigravity)
Look for a section titled "ORCHESTRATOR AUTO-TRIGGER" or equivalent.
It must contain a 5-step template: assess scope → cast agents → assign prompts → execute in sequence → post-task.

### Reconstruction priority
1. Fix all ❌ items first (system-breaking)
2. Then ⚠️ items (degraded capability)
3. Leave ✅ items untouched
```

---

## Quick Reference: What Each Interface Should Have

| Check | Claude | Copilot | Cursor | Codex | Gemini | Antigravity |
|-------|:------:|:-------:|:------:|:-----:|:------:|:-----------:|
| Memory Bootstrap Step 0 | hooks | manual | MCP | manual | manual | manual |
| Prompt quality assessment | startup step | startup step | main.mdc | startup step | startup step | startup step |
| Agent routing tree | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Complex task trigger | hooks | Squad section | orchestration.mdc | AUTO-TRIGGER section | AUTO-TRIGGER section | AUTO-TRIGGER section |
| Post-task: Shannon + IDOR | hooks | checklist | pipeline.mdc | checklist | checklist | checklist |
| Post-task: Hermes | hooks | checklist | pipeline.mdc | checklist | checklist | checklist |
| Post-task: Obsidian save | hooks | checklist | pipeline.mdc + memory.mdc | checklist | checklist | checklist |
| Quality report with Obsidian | hooks | checklist | pipeline.mdc | checklist | checklist | checklist |
| Interface-specific strength | agent teams | Squad + GitHub | Composer + MCP | sandboxed parallel | Search Grounding + 2M ctx | browser subagent |

---

## Usage Notes

1. **Run this audit after every major change** to any canonical source file
2. **Governance cadence**: Use `SYNC_CHECK.md` as a checklist after each run
3. **Score interpretation**: 10/10 = all dimensions ✅; typical target after reconstruction is ≥8/10
4. **This template itself lives at**: `COMBINED/prompts/prompts-templates/audit-and-reconstruct.md`

## 🔗 Связи

- [[MOC - Prompts]] — Prompt library
- [[MOC - System]] — System documentation

