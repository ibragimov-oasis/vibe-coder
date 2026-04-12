---
description: Start the full autonomous pipeline (Background Agent → Hermes → Shannon). Use when you want to fully automate a task end-to-end.
---

# /pipeline — Autonomous Pipeline Launcher

This command starts the full **Vibe-Coder Autonomous Pipeline** described in `PIPELINE.md`.

## What happens

```
Step 1: Background Agent    — executes your task
Step 2: Hermes Agent        — extracts lessons, updates supermemory
Step 3: Shannon Agent       — runs security audit via Lightpanda
Loop:   if vulnerabilities  — return to step 1 to fix
Done:   if clean            — deliver final report
```

## How to use

Describe your task and this command will:

1. Read `CAPABILITIES.md` first
2. Check `supermemory` for prior work on this topic
3. Map the codebase with `gitnexus`
4. Delegate to the right **mega-agent** for your task type
5. Run Hermes self-learning loop after completion
6. Run Shannon security audit on any code changes

## Task type → Agent routing

| Your task | Agent invoked |
|-----------|--------------|
| Bug / error | mega-debugger |
| Architecture / planning | mega-planner |
| Research / analysis | mega-researcher |
| UI / frontend | mega-designer |
| Security / pentest | mega-security |
| SEO | mega-seo |
| Code review | mega-reviewer |
| Unknown | mega-planner → routes |

## Invocation

When you run `/pipeline`, Claude will:

```
1. Load CAPABILITIES.md
2. mcp supermemory search "<your task>"
3. mcp gitnexus map
4. Identify task type
5. Invoke appropriate mega-agent (see .claude/agents/)
6. On completion: invoke Hermes learning loop
7. On code changes: invoke Shannon security audit
8. Report final status
```

## Options

- **`/pipeline no-security`** — skip Shannon audit (docs/config only tasks)
- **`/pipeline no-memory`** — skip supermemory check (first-time tasks)
- **`/pipeline plan-only`** — only run mega-planner, no execution

## References

- `PIPELINE.md` — full pipeline spec
- `CAPABILITIES.md` — rules and capability map
- `.claude/agents/mega-orchestrator.md` — orchestrator agent definition
