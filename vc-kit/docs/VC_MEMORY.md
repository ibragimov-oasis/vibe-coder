# MEMORY.md — Vibe-Coder v3.0 Memory-First Protocol

> **Read by ALL AI interfaces**: The FIRST thing you do. Before identity, before agent selection, before anything.
> Last updated: 2026-04-17

---

## ⛔ PHASE 0: MEMORY BOOTSTRAP (MANDATORY FIRST ACTION)

> **THIS IS NON-NEGOTIABLE. No task execution until memory is loaded.**
> **Run this BEFORE identity, BEFORE agent selection, BEFORE anything else.**

### Preferred Method: Bootstrap Script
```bash
bash memory-bootstrap.sh
```
This script automatically:
1. Checks Python 3.10+ installation
2. Installs `code-review-graph` if needed
3. Builds or updates the SQLite graph
4. Writes `.memory-status.json` with stats
5. Reports status to user

### Manual Method (if script unavailable)

#### Step 1: Check for Code Graph
```bash
ls .code-review-graph/graph.db 2>/dev/null
```

#### Step 2: Build or Update

**If graph.db does NOT exist (first session):**
```bash
pip install code-review-graph 2>/dev/null || pip3 install code-review-graph 2>/dev/null
code-review-graph build

# If Python is unavailable, use GitNexus as fallback:
# npx -y gitnexus@latest map
```

**If graph.db EXISTS (subsequent sessions):**
```bash
code-review-graph update  # Incremental, <2 seconds
```

### Step 3: Report to User

After memory bootstrap, report:
```
🧠 Memory Status:
  Graph: ✅ [X files, Y nodes, Z edges] | Updated: [timestamp]
  Supermemory: ✅ Connected / ⚠️ Not available
  Session: New session started
  Token savings: ~87% (graph-based context instead of full file reads)
```

### Step 4: Memory Status File

After every build/update, `.memory-status.json` is generated (by `memory-bootstrap.sh`):
```json
{
  "graph_built": true,
  "graph_path": ".code-review-graph/graph.db",
  "last_updated": "2026-04-17T10:50:00Z",
  "files_indexed": 523,
  "nodes": 4891,
  "edges": 21553,
  "token_savings_estimate": "8.2x",
  "first_session": false
}
```

Other agents can read this file to quickly check memory status.

### Step 5: API Keys

For the full memory stack (layers 2-4), copy `.env.example` to `.env` and add your keys:
```bash
cp .env.example .env
# Edit .env with your API keys for Supermemory, OpenViking, etc.
```

**Then and ONLY then** → proceed to identity, agent selection, and task execution.

---

## 🏗️ Memory Layer Architecture

Vibe-Coder uses a 3-layer memory system. **Layer 1 is mandatory.** Layers 2-3 are recommended enhancements.

### Layer 1: Code Graph (⛔ MANDATORY)

**System**: `code-review-graph`  
**Storage**: SQLite database at `.code-review-graph/graph.db` (project-local)  
**Token Savings**: 8.2x average reduction (verified across 6 real repositories)  
**Source**: `COMBINED/mcp-servers/mcp-code-review-graph/`

#### What It Stores
| Node Type | Examples |
|-----------|---------|
| File | Source files with SHA-256 hash for change detection |
| Function | Functions/methods with params, return types, line ranges |
| Class | Classes/structs with inheritance, modifiers |
| Test | Test functions linked to tested code |
| Import | Module dependencies |

| Edge Type | Meaning |
|-----------|---------|
| CALLS | Function A calls Function B |
| IMPORTS_FROM | File A imports from Module B |
| INHERITS | Class A extends Class B |
| TESTED_BY | Function A is tested by Test B |
| CONTAINS | File contains Class, Class contains Method |

#### How to Query (Instead of Reading Files)
```bash
# MCP Tools (22 available — Claude Code, Cursor):
build_or_update_graph_tool()          # Build/update graph
get_impact_radius_tool(files=[...])   # Blast radius of changes
get_review_context_tool(files=[...])  # Token-optimized review context
query_graph_tool(node="auth.ts", query_type="callers")  # Find callers
semantic_search_nodes_tool(query="authentication")       # Search by meaning
list_communities_tool()               # Detect code clusters
get_architecture_overview_tool()      # Full architecture map

# CLI (all interfaces):
code-review-graph status              # Graph statistics
code-review-graph detect-changes      # Risk-scored change impact
code-review-graph visualize           # Interactive HTML graph
```

#### Token Savings Example
| Repo | Without Graph | With Graph | Reduction |
|------|:------------:|:----------:|:---------:|
| fastapi (1,122 files) | 4,944 tokens | 614 tokens | **8.1x** |
| flask (83 files) | 44,751 tokens | 4,252 tokens | **9.1x** |
| gin (99 files) | 21,972 tokens | 1,153 tokens | **16.4x** |
| nextjs (monorepo) | 9,882 tokens | 1,249 tokens | **8.0x** |

---

### Layer 2: Session Memory (RECOMMENDED)

**System**: `Claude-Mem`  
**Storage**: SQLite at `~/.claude-mem/claude-mem.db` + Chroma Vector DB  
**Token Savings**: ~10x via 3-layer search (search → timeline → get_observations)  
**Source**: `COMBINED/memory/memory-claude-mem/`

#### What It Stores
- Session observations (tool usage, decisions, patterns)
- Semantic summaries of completed work
- Cross-session context (what was done before, what failed)

#### Setup (Claude Code only)
```bash
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
# Restart Claude Code — memory auto-captures from now on
```

#### For Other Interfaces
Use Supermemory as the cross-platform alternative:
```bash
npx -y supermemory search "<query>"     # Search prior work
npx -y supermemory add "<insight>"      # Save new learning
```

---

### Layer 3: Context Database (OPTIONAL — Advanced)

**System**: `OpenViking`  
**Storage**: Virtual filesystem with L0/L1/L2 tiered loading  
**Token Savings**: 91% reduction vs baseline (verified benchmarks)  
**Source**: `COMBINED/mcp-servers/mcp-openviking/`

#### What It Stores
```
viking://
├── resources/     # Project docs, repos, web pages
├── user/          # Personal preferences, habits
└── agent/         # Skills, instructions, task memories
```

#### Tiered Loading (The Key Innovation)
| Layer | Size | Purpose |
|-------|:----:|---------|
| L0 (Abstract) | ~100 tokens | Quick relevance check — "is this what I need?" |
| L1 (Overview) | ~2K tokens | Decision-making — "what's the structure?" |
| L2 (Details) | Full content | Deep reading — "show me the code" |

#### Setup
```bash
pip install openviking
openviking-server  # Start context server
# Configure ~/.openviking/ov.conf with API keys
```

---

## 📋 Memory-First Workflow

### For EVERY Task (After Bootstrap)

1. **Query graph first** — never read files blindly
   ```
   User: "Fix the login bug"
   
   ❌ WRONG: Read auth.ts, middleware.ts, session.ts, config.ts, 15 other files
   ✅ RIGHT: query_graph("auth", "callers") → read only 3 relevant files
   ```

2. **Use blast-radius analysis** for code changes
   ```
   Before: "I changed auth.ts, let me check what might break"
   → get_impact_radius_tool(files=["auth.ts"])
   → Returns: callers, dependents, affected tests
   ```

3. **Save insights after task** to supermemory
   ```bash
   npx -y supermemory add "Fixed auth bug: Redis connection pool was stale" --tags "auth,redis,bugfix"
   ```

---

## 🔄 Context Compression (For Long Sessions)

When sessions exceed 70-80% of context window, use **Anchored Iterative Summarization**:

```markdown
## Session Intent
[What the user is trying to accomplish]

## Files Modified
- file1.ts: What changed
- file2.ts: What changed

## Decisions Made
- Decision 1 and why
- Decision 2 and why

## Current State
- What's working, what's not

## Next Steps
1. Immediate next action
2. Follow-up actions
```

Optimize for **tokens-per-task** (total tokens to complete task), NOT tokens-per-request.

Full methodology: `COMBINED/skills/skills-antigravity/antigravity-context-compression/SKILL.md`

---

## 🔗 Quick Reference

| Need | Tool | Command |
|------|------|---------|
| Build graph (first time) | code-review-graph | `code-review-graph build` |
| Update graph (incremental) | code-review-graph | `code-review-graph update` |
| Find affected files | code-review-graph | `get_impact_radius_tool()` or `code-review-graph detect-changes` |
| Search code entities | code-review-graph | `semantic_search_nodes_tool()` |
| Architecture overview | code-review-graph | `get_architecture_overview_tool()` |
| Search past work | Supermemory | `npx -y supermemory search "<query>"` |
| Save learning | Supermemory | `npx -y supermemory add "<text>"` |
| Session memory | Claude-Mem | Auto (Claude Code plugin) |
| Context database | OpenViking | `ov find "<query>"` |


## 🔗 Связи

- [[MOC - Memory]] — Memory systems overview
- [[000 - Map of Maps]] — Root index
