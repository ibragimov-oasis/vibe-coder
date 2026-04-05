---
name: deep-research
description: "Multi-source deep research using web search, firecrawl, exa, and Gemini APIs. Searches the web from multiple angles, synthesizes findings, and delivers cited reports with source attribution. Use when user wants thorough research on any topic, says 'research', 'deep dive', 'investigate', 'what is X', 'compare X and Y', or before content generation tasks. Use INSTEAD of single web searches for any question requiring comprehensive information."
version: 1.0.0
category: research
tags: [research, web-search, synthesis, reports, citations, analysis]
sources:
  - name: everything-claude-code (ECC)
    repo: https://github.com/anthropics/everything-claude-code
    path: skills/deep-research/SKILL.md
  - name: deer-flow
    repo: https://github.com/anthropics/deer-flow
    path: skills/public/deep-research/SKILL.md
  - name: antigravity-awesome-skills
    repo: https://github.com/anthropics/antigravity-awesome-skills
    path: skills/deep-research/SKILL.md
related_skills: []
---

# Deep Research

Produce thorough, cited research reports from multiple web sources using available search and crawling tools.

**Core Principle:** Never generate content based solely on general knowledge. The quality of output directly depends on the quality and quantity of research. A single search query is NEVER enough.

## When to Activate

- User asks to research any topic in depth
- Competitive analysis, technology evaluation, or market sizing
- Due diligence on companies, investors, or technologies
- Creating presentations, articles, reports, or documentation
- Any question requiring synthesis from multiple sources
- User says "research", "deep dive", "investigate", "what's the current state of"
- Questions like "what is X", "explain X", "compare X and Y"
- **Always load BEFORE starting any content generation task**

## Tool Requirements

At least one of:

**Firecrawl MCP:** `firecrawl_search`, `firecrawl_scrape`, `firecrawl_crawl`
**Exa MCP:** `web_search_exa`, `web_search_advanced_exa`, `crawling_exa`
**Web tools:** `web_search`, `web_fetch`
**Gemini API:** `scripts/research.py` (autonomous research with streaming)

Both firecrawl and exa together give the best coverage. Configure in `~/.claude.json` or `~/.codex/config.toml`.

## Workflow

### Step 1: Understand the Goal

Ask 1-2 quick clarifying questions:
- "What's your goal — learning, making a decision, or writing something?"
- "Any specific angle or depth you want?"

If the user says "just research it" — skip ahead with reasonable defaults.

### Step 2: Plan the Research (Broad Exploration)

Break the topic into 3-5 research sub-questions:

```
Topic: "Impact of AI on healthcare"
Sub-questions:
1. What are the main AI applications in healthcare today?
2. What clinical outcomes have been measured?
3. What are the regulatory challenges?
4. What companies are leading this space?
5. What's the market size and growth trajectory?
```

From initial results, identify key dimensions:
- Different perspectives, stakeholders, or viewpoints
- Adjacent domains, subtopics, themes

### Step 3: Execute Multi-Source Search (Deep Dive)

For EACH sub-question, search using available tools:

**With firecrawl:**
```
firecrawl_search(query: "<sub-question keywords>", limit: 8)
```

**With exa:**
```
web_search_exa(query: "<sub-question keywords>", numResults: 8)
web_search_advanced_exa(query: "<keywords>", numResults: 5, startPublishedDate: "2025-01-01")
```

**With scripts:**
```bash
python3 scripts/research.py --query "Research topic" --stream
```

**Search strategy:**
- Use 2-3 different keyword variations per sub-question
- Mix general and news-focused queries
- Aim for 15-30 unique sources total
- Prioritize: academic, official, reputable news > blogs > forums

### Effective Query Patterns

```
# Be specific with context
❌ "AI trends"
✅ "enterprise AI adoption trends 2024"

# Include authoritative source hints
"[topic] research paper"
"[topic] McKinsey report"
"[topic] industry analysis"

# Search for specific content types
"[topic] case study"
"[topic] statistics"
"[topic] expert interview"

# Use temporal qualifiers — always use the ACTUAL current year
"[topic] 2026"
"[topic] latest"
"[topic] recent developments"
```

### Temporal Awareness

**Always check the current date before forming search queries.**

| User intent | Precision needed | Example |
|---|---|---|
| "today / just released" | Month + Day | `"tech news February 28 2026"` |
| "this week" | Week range | `"releases week of Feb 24 2026"` |
| "recently / latest" | Month | `"AI breakthroughs February 2026"` |
| "this year / trends" | Year | `"software trends 2026"` |

❌ User asks "what's new in tech today" → searching `"new technology 2026"` → misses today's news
✅ User asks "what's new in tech today" → searching `"new technology February 28 2026"` + `"tech news today Feb 28"` → gets today's results

### Step 4: Deep-Read Key Sources

For the most promising URLs, fetch full content:

**With firecrawl:**
```
firecrawl_scrape(url: "<url>")
```

**With exa:**
```
crawling_exa(url: "<url>", tokensNum: 5000)
```

Read 3-5 key sources in full for depth. Do not rely only on search snippets.

Use `web_fetch` when:
- A search result looks highly relevant and authoritative
- You need detailed information beyond the snippet
- The source contains data, case studies, or expert analysis

### Step 5: Diversity & Validation

Ensure comprehensive coverage by seeking diverse information types:

| Information Type | Purpose | Example Searches |
|-----------------|---------|------------------|
| **Facts & Data** | Concrete evidence | "statistics", "data", "numbers", "market size" |
| **Examples & Cases** | Real-world applications | "case study", "example", "implementation" |
| **Expert Opinions** | Authority perspectives | "expert analysis", "interview", "commentary" |
| **Trends & Predictions** | Future direction | "trends 2024", "forecast", "future of" |
| **Comparisons** | Context and alternatives | "vs", "comparison", "alternatives" |
| **Challenges & Criticisms** | Balanced view | "challenges", "limitations", "criticism" |

### Synthesis Check

Before proceeding to output, verify:
- [ ] Searched from at least 3-5 different angles?
- [ ] Fetched and read the most important sources in full?
- [ ] Have concrete data, examples, and expert perspectives?
- [ ] Explored both positive aspects and challenges/limitations?
- [ ] Information is current and from authoritative sources?

**If any answer is NO, continue researching.**

### Step 6: Synthesize and Write Report

```markdown
# [Topic]: Research Report
*Generated: [date] | Sources: [N] | Confidence: [High/Medium/Low]*

## Executive Summary
[3-5 sentence overview of key findings]

## 1. [First Major Theme]
[Findings with inline citations]
- Key point ([Source Name](url))
- Supporting data ([Source Name](url))

## 2. [Second Major Theme]
...

## 3. [Third Major Theme]
...

## Key Takeaways
- [Actionable insight 1]
- [Actionable insight 2]
- [Actionable insight 3]

## Sources
1. [Title](url) — [one-line summary]
2. ...

## Methodology
Searched [N] queries across web and news. Analyzed [M] sources.
Sub-questions investigated: [list]
```

### Step 7: Deliver

- **Short topics**: Post the full report in chat
- **Long reports**: Post executive summary + key takeaways, save full report to a file

## Parallel Research with Subagents

For broad topics, use the Task tool to parallelize:

```
Launch 3 research agents in parallel:
1. Agent 1: Research sub-questions 1-2
2. Agent 2: Research sub-questions 3-4
3. Agent 3: Research sub-question 5 + cross-cutting themes
```

Each agent searches, reads sources, and returns findings. The main session synthesizes the final report.

## Gemini Deep Research Script

For autonomous research using the Gemini API:

```bash
# Start a research task
python3 scripts/research.py --query "Research the history of Kubernetes"

# With structured output
python3 scripts/research.py --query "Compare Python web frameworks" \
  --format "1. Executive Summary\n2. Comparison Table\n3. Recommendations"

# Stream progress in real-time
python3 scripts/research.py --query "Analyze EV battery market" --stream

# Check status / continue from previous
python3 scripts/research.py --status <interaction_id>
python3 scripts/research.py --continue <interaction_id> --query "Elaborate on point 2"
```

**Requirements:** Python 3.8+, httpx, GEMINI_API_KEY environment variable.

| Metric | Value |
|--------|-------|
| Time | 2-10 minutes per task |
| Cost | $2-5 per task (varies by complexity) |
| Token usage | ~250k-900k input, ~60k-80k output |

## Quality Rules

1. **Every claim needs a source.** No unsourced assertions.
2. **Cross-reference.** If only one source says it, flag it as unverified.
3. **Recency matters.** Prefer sources from the last 12 months.
4. **Acknowledge gaps.** If you couldn't find good info on a sub-question, say so.
5. **No hallucination.** If you don't know, say "insufficient data found."
6. **Separate fact from inference.** Label estimates, projections, and opinions clearly.

## Common Mistakes to Avoid

- ❌ Stopping after 1-2 searches
- ❌ Relying on search snippets without reading full sources
- ❌ Searching only one aspect of a multi-faceted topic
- ❌ Ignoring contradicting viewpoints or challenges
- ❌ Using outdated information when current data exists
- ❌ Starting content generation before research is complete

## Examples

```
"Research the current state of nuclear fusion energy"
"Deep dive into Rust vs Go for backend services in 2026"
"Research the best strategies for bootstrapping a SaaS business"
"What's happening with the US housing market right now?"
"Investigate the competitive landscape for AI code editors"
```
