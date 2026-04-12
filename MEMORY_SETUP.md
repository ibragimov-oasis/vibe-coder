# MEMORY_SETUP.md — Memory & Context Systems Guide

> **Combined Memory System Documentation**
> This guide explains all memory systems in the Vibe-Coder Arsenal and how to configure them.
> Last updated: 2026-04-12

---

## ⚡ Quick Start (5 minutes)

### Step 1 — Connect Supermemory (cross-tool, long-term)

```bash
# Option A: via npx install-mcp (recommended)
npx install-mcp supermemory

# Option B: add manually to your tool config
# Claude Code: already in .claude/settings.json
# Cursor:      already in .cursor/mcp.json
# The MCP URL: https://mcp.supermemory.ai/mcp
```

Get your API key at: https://supermemory.ai

### Step 2 — Install Claude-Mem (Claude Code only)

```bash
# In a Claude Code session:
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
# Restart Claude Code
```

### Step 3 — Start OpenViking (codebase context)

```bash
cd COMBINED/mcp-servers/mcp-openviking
npm install && npm start
# Runs on port 3000 by default
```

### Step 4 — Verify all 3 are connected

In Claude Code or Cursor, run:
```
mcp supermemory search "test"     → should return results or empty list
mcp openviking read               → should return codebase context
```

---

## Memory Layer Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    MEMORY LAYER DIAGRAM                         │
├─────────────────────────────────────────────────────────────────┤
│  Fastest (in-context)                                           │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ In-context window — current session only                  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ↕ sync                               │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Claude-Mem (SQLite + Chroma)                              │  │
│  │ Scope: Claude Code sessions                               │  │
│  │ Stores: observations, tool outputs, summaries             │  │
│  │ Retrieval: /mem-search, MCP tools                         │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ↕ sync                               │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ OpenViking (Vector DB)                                    │  │
│  │ Scope: codebase context (any tool)                        │  │
│  │ Stores: what was changed, why, architecture decisions     │  │
│  │ Retrieval: mcp openviking read/search                     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ↕ sync                               │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Supermemory (State-of-the-art, #1 benchmarks)             │  │
│  │ Scope: cross-tool, cross-session, cross-project           │  │
│  │ Stores: research findings, patterns, lessons, insights    │  │
│  │ Retrieval: mcp supermemory search/add                     │  │
│  └──────────────────────────────────────────────────────────┘  │
│  Slowest but most persistent                                    │
└─────────────────────────────────────────────────────────────────┘
```

## What Each Layer Stores

| Layer | Stores | Persists | Tool access |
|-------|--------|---------|------------|
| **Claude-Mem** | Session observations, tool outputs, semantic summaries | Across Claude Code sessions | `/mem-search`, MCP |
| **OpenViking** | Changed files, architecture decisions, code context | Until manually cleared | `mcp openviking` |
| **Supermemory** | Research findings, patterns, lessons, cross-project insights | Permanently | `mcp supermemory` |

## Pipeline Memory Flow

```
Task starts  → mcp supermemory search (check prior work)
               mcp openviking read (load code context)

Task runs    → Claude-Mem auto-captures observations

Task ends    → mcp openviking write (save what changed)
               mcp supermemory add (save learnings — via Hermes)
```

---

## Overview

The Vibe-Coder Arsenal includes 3 powerful memory systems:

| System | Best For | Key Feature |
|--------|----------|-------------|
| **Claude-Mem** | Claude Code users | Persistent compression, hooks |
| **Supermemory** | Any AI tool | State-of-the-art, #1 benchmarks |
| **OpenViking** | AI Agents | Context database, filesystem paradigm |

---

## 🧠 Claude-Mem — Persistent Memory for Claude Code

**Location:** `COMBINED/memory/memory-claude-mem/`

### What It Is

Claude-Mem is a persistent memory compression system built specifically for Claude Code. It seamlessly preserves context across sessions by automatically capturing tool usage observations, generating semantic summaries, and making them available to future sessions.

### Key Features

- **🧠 Persistent Memory** — Context survives across sessions
- **📊 Progressive Disclosure** — Layered memory retrieval with token cost visibility
- **🔍 Skill-Based Search** — Query your project history with mem-search skill
- **🖥️ Web Viewer UI** — Real-time memory stream at http://localhost:37777
- **🔒 Privacy Control** — Use `<private>` tags to exclude sensitive content
- **🤖 Automatic Operation** — No manual intervention required

### Installation

```bash
# Start a new Claude Code session
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
# Restart Claude Code
```

### How It Works

**Core Components:**

1. **5 Lifecycle Hooks** — SessionStart, UserPromptSubmit, PostToolUse, Stop, SessionEnd
2. **Worker Service** — HTTP API on port 37777 with web viewer UI
3. **SQLite Database** — Stores sessions, observations, summaries
4. **mem-search Skill** — Natural language queries with progressive disclosure
5. **Chroma Vector Database** — Hybrid semantic + keyword search

### MCP Search Tools

Claude-Mem provides 4 MCP tools following a token-efficient 3-layer workflow:

1. **`search`** — Get compact index with IDs (~50-100 tokens/result)
2. **`timeline`** — Get chronological context around interesting results
3. **`get_observations`** — Fetch full details for filtered IDs (~500-1,000 tokens/result)

**Example Usage:**

```typescript
// Step 1: Search for index
search(query="authentication bug", type="bugfix", limit=10)

// Step 2: Review index, identify relevant IDs (e.g., #123, #456)

// Step 3: Fetch full details
get_observations(ids=[123, 456])
```

### Configuration

Settings are in `~/.claude-mem/settings.json`:

```json
{
  "worker_port": 37777,
  "data_directory": "~/.claude-mem/data",
  "log_level": "info",
  "context_injection": {
    "enabled": true,
    "max_tokens": 2000
  }
}
```

### Web Viewer

Access the real-time memory stream at: http://localhost:37777

---

## 💾 Supermemory — State-of-the-Art Memory Engine

**Location:** `Tools/supermemory/`

### What It Is

Supermemory is the memory and context layer for AI. **#1 on LongMemEval, LoCoMo, and ConvoMem** — the three major benchmarks for AI memory. Your AI forgets everything between conversations. Supermemory fixes that.

### Key Features

| Feature | Description |
|---------|-------------|
| 🧠 **Memory** | Extracts facts from conversations, handles temporal changes, contradictions, automatic forgetting |
| 👤 **User Profiles** | Auto-maintained user context — stable facts + recent activity (~50ms) |
| 🔍 **Hybrid Search** | RAG + Memory in a single query |
| 🔌 **Connectors** | Google Drive, Gmail, Notion, OneDrive, GitHub — auto-sync |
| 📄 **Multi-modal** | PDFs, images (OCR), videos (transcription), code (AST-aware) |

### Installation

**MCP Quick Install:**

```bash
npx -y install-mcp@latest https://mcp.supermemory.ai/mcp --client claude --oauth=yes
```

Replace `claude` with your client: `cursor`, `windsurf`, `vscode`, etc.

**SDK Install:**

```bash
npm install supermemory    # Node.js
pip install supermemory    # Python
```

### Quickstart

```typescript
import Supermemory from "supermemory";

const client = new Supermemory();

// Store a conversation
await client.add({
  content: "User loves TypeScript and prefers functional patterns",
  containerTag: "user_123",
});

// Get user profile + relevant memories in one call
const { profile, searchResults } = await client.profile({
  containerTag: "user_123",
  q: "What programming style does the user prefer?",
});

// profile.static  → ["Loves TypeScript", "Prefers functional patterns"]
// profile.dynamic → ["Working on API integration"]
```

### Available MCP Tools

| Tool | Description |
|------|-------------|
| `memory` | Save or forget information |
| `recall` | Search memories by query |
| `context` | Inject full profile into conversation |

### Plugins

Supermemory has plugins for multiple platforms:
- [Claude Code plugin](https://github.com/supermemoryai/claude-supermemory)
- [OpenCode plugin](https://github.com/supermemoryai/opencode-supermemory)
- [OpenClaw plugin](https://github.com/supermemoryai/openclaw-supermemory)

### Configuration

Manual MCP configuration:

```json
{
  "mcpServers": {
    "supermemory": {
      "url": "https://mcp.supermemory.ai/mcp"
    }
  }
}
```

Or with API key:

```json
{
  "mcpServers": {
    "supermemory": {
      "url": "https://mcp.supermemory.ai/mcp",
      "headers": {
        "Authorization": "Bearer sm_your_api_key_here"
      }
    }
  }
}
```

---

## 📁 OpenViking — Context Database for AI Agents

**Location:** `COMBINED/mcp-servers/mcp-openviking/`

### What It Is

OpenViking is an open-source Context Database designed specifically for AI Agents. It abandons the fragmented vector storage model of traditional RAG and adopts a "filesystem paradigm" to unify the structured organization of memories, resources, and skills.

### Challenges It Solves

- **Fragmented Context** — Unified management of memories, resources, skills
- **Surging Context Demand** — Tiered loading reduces token consumption
- **Poor Retrieval** — Directory recursive retrieval improves accuracy
- **Unobservable Context** — Visualized retrieval trajectories
- **Limited Memory** — Agent-related task memory, not just user interactions

### Key Features

| Feature | Description |
|---------|-------------|
| **Filesystem Paradigm** | Unified context management like local files |
| **L0/L1/L2 Tiers** | Tiered context loading, loaded on demand |
| **Directory Retrieval** | Recursive positioning + semantic search |
| **Visualization** | Observe retrieval trajectories |
| **Session Management** | Auto-compress, extract long-term memory |

### Installation

**Python Package:**

```bash
pip install openviking --upgrade --force-reinstall
```

**Rust CLI (Optional):**

```bash
curl -fsSL https://raw.githubusercontent.com/volcengine/OpenViking/main/crates/ov_cli/install.sh | bash
```

### Model Configuration

OpenViking requires VLM and Embedding models:

```json
{
  "vlm": {
    "provider": "openai",
    "model": "gpt-4o",
    "api_key": "your-api-key"
  },
  "embedding": {
    "provider": "openai",
    "model": "text-embedding-3-large",
    "api_key": "your-api-key"
  }
}
```

**Supported VLM Providers:**
- `volcengine` — Volcengine Doubao Models
- `openai` — OpenAI Official API
- `litellm` — Unified access (Anthropic, DeepSeek, Gemini, vLLM, Ollama)

### Architecture

```
Agent Request
     ↓
OpenViking Context Database
     ├── L0: Immediate context (always loaded)
     ├── L1: Session context (loaded on demand)
     └── L2: Long-term memory (retrieved when needed)
     ↓
Organized by Filesystem Paradigm
     ├── /memories/
     ├── /resources/
     └── /skills/
```

---

## Decision Matrix: Which System to Use?

### By Use Case

| Use Case | Recommended System |
|----------|-------------------|
| Claude Code only | **Claude-Mem** |
| Any AI tool/platform | **Supermemory** |
| Building AI agents | **OpenViking** |
| Need benchmarked accuracy | **Supermemory** |
| Want filesystem organization | **OpenViking** |

### By Integration Style

| Style | Recommended System |
|-------|-------------------|
| Plugin install | Claude-Mem, Supermemory |
| SDK/API | Supermemory |
| Self-hosted | OpenViking |
| Minimal setup | Claude-Mem |

### By Features Needed

| Feature | Claude-Mem | Supermemory | OpenViking |
|---------|------------|-------------|------------|
| Claude Code hooks | ✅ | ❌ | ❌ |
| User profiles | ❌ | ✅ | ❌ |
| File connectors | ❌ | ✅ | ❌ |
| Filesystem paradigm | ❌ | ❌ | ✅ |
| Tiered loading | ❌ | ❌ | ✅ |
| Web viewer | ✅ | ❌ | ❌ |

---

## Combining Memory Systems

### Claude-Mem + Supermemory

Use Claude-Mem for session continuity and Supermemory for long-term knowledge:

1. Claude-Mem captures session observations
2. Export key insights to Supermemory
3. Supermemory builds user profile across projects
4. Profile injected into new Claude sessions

### OpenViking + Any System

OpenViking's context database can complement any memory:

1. Store structured context in OpenViking
2. Use Claude-Mem or Supermemory for conversation memory
3. OpenViking handles resource/skill organization
4. Combined context for optimal agent performance

---

## Quick Setup Guide

### 1. Claude-Mem (Recommended for Claude Code users)

```bash
# In Claude Code
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
# Restart Claude Code
```

### 2. Supermemory (Recommended for cross-platform)

```bash
# MCP install
npx -y install-mcp@latest https://mcp.supermemory.ai/mcp --client claude --oauth=yes

# Or SDK
npm install supermemory
```

### 3. OpenViking (Recommended for AI agents)

```bash
pip install openviking --upgrade --force-reinstall
```

---

## Troubleshooting

### Claude-Mem

- **Worker not starting:** Check port 37777 is available
- **Memory not persisting:** Verify `~/.claude-mem/data` exists
- **Search not working:** Restart worker service

### Supermemory

- **OAuth failing:** Try API key authentication instead
- **Profile empty:** Add some content first with `client.add()`
- **Search too slow:** Reduce result limit

### OpenViking

- **Model errors:** Verify API keys and model names
- **Import errors:** Ensure Python 3.10+ is installed
- **Retrieval issues:** Check directory structure follows paradigm

---

## Additional Resources

| System | Documentation |
|--------|---------------|
| Claude-Mem | `COMBINED/memory/memory-claude-mem/README.md` |
| | [docs.claude-mem.ai](https://docs.claude-mem.ai/) |
| Supermemory | `Tools/supermemory/README.md` |
| | [supermemory.ai/docs](https://supermemory.ai/docs) |
| OpenViking | `COMBINED/mcp-servers/mcp-openviking/README.md` |
| | [openviking.ai/docs](https://www.openviking.ai/docs) |

---

*Combined from: claude-mem, supermemory, OpenViking*

**Last Updated:** 2026-04-01
