---
description: Activate the research agent with supermemory integration. Use for web research, technical analysis, competitive analysis, or codebase investigation.
---

# /research — Research Agent Launcher

This command activates **mega-researcher** with full memory and web capabilities.

## What this command does

1. Loads `CAPABILITIES.md` Rule #2 (memory check first)
2. Runs `mcp supermemory search "<topic>"` — checks prior research
3. Activates `mega-researcher` agent (`.claude/agents/mega-researcher.md`)
4. Uses **Lightpanda** for all web browsing (never Chrome)
5. After research: saves findings to `supermemory`

## Research types supported

| Type | Tools used |
|------|-----------|
| **Web research** | Lightpanda browser, supermemory |
| **Codebase analysis** | gitnexus map, openviking context |
| **Competitive analysis** | Lightpanda (screenshots + content) |
| **Technical deep-dive** | gitnexus + openviking + supermemory |
| **Post-task learning** | Hermes pattern extraction |

## Research process

```
1. Check supermemory for prior research on this topic
2. Plan research: what is known / unknown / needed
3. Execute (web or codebase depending on query)
4. Cross-reference across 3+ sources (for web)
5. Synthesize findings
6. Save to supermemory with tags
7. Deliver structured report
```

## Output format

Every research result includes:
- **Executive Summary** (3–5 sentences)
- **Key Findings** (with evidence + confidence level)
- **Actionable Recommendations**
- **Open Questions** (what remains unknown)
- **Sources** (with credibility rating)

## Hermes integration

After research completes, `/research` automatically triggers the Hermes loop to:
- Extract reusable patterns
- Create skill files for repeated research patterns
- Update supermemory with meta-insights

## References

- `.claude/agents/mega-researcher.md` — full agent spec
- `.claude/agents/mega-orchestrator.md` — pipeline context
- `COMBINED/agents/agents-hermes/` — Hermes self-learning system
- `COMBINED/orchestration/core-deer-flow/` — deep research orchestration
