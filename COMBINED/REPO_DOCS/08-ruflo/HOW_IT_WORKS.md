# RuFlo (Claude Flow) v3.5 — How It Works

**Original repo:** https://github.com/ruvnet/claude-flow
**Stars:** 29k ⭐
**Category:** Orchestration / Enterprise AI
**Local path in vibe-coder:** COMBINED/orchestration/core-ruflo/
**License:** MIT

---

## What it does (plain language for vibe-coders)
RuFlo is enterprise AI orchestration that deploys 100+ specialized agents in coordinated swarms with self-learning capabilities. It's like having an entire AI engineering team that learns and optimizes itself. Features Q-Learning router, MoE (8 experts), 130+ skills, 27 hooks, multiple swarm topologies (mesh/hierarchical/ring/star), fault-tolerant consensus (Raft/BFT/Gossip/CRDT), and RuVector intelligence layer with Flash Attention (2.49-7.47x speedup), HNSW search (150x-12,500x faster), 9 RL algorithms, and ReasoningBank pattern storage. 6,000+ commits, production-ready.

---

## How the AI reads this repo (startup sequence)
Step 1: AI reads **README.md** → learns self-learning architecture (Router → Swarm → Agents → Memory with learning loop), RuVector components, 100+ agents
Step 2: AI reads **AGENTS.md** → learns agent catalog, swarm coordination, skills system, hooks system
Step 3: AI reads **CLAUDE.md** → learns Claude Code integration, how to use RuFlo with Claude
Step 4: AI reads **claude/settings.json** → learns configuration options
Step 5: AI uses `npx ruflo@latest` → CLI for orchestration

---

## All files and what they do
| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Main docs: architecture, RuVector, self-learning, performance benchmarks |
| AGENTS.md | Agent catalog | All 100+ agents, topologies, consensus mechanisms |
| CLAUDE.md | Claude integration | Claude Code specific integration and configuration |
| CLAUDE.local.md | Local config | Local Claude configuration overrides |
| CHANGELOG.md | Version history | Detailed version history |
| SECURITY.md | Security policy | Security guidelines and AIDefence integration |
| claude/ | Claude config | Claude Code configuration files |
| claude-plugin/ | Plugin | RuFlo as Claude Code plugin |
| github/ | GitHub config | GitHub Actions, issue templates |
| bin/ | Scripts | CLI scripts and utilities |
| gitignore | Git ignore | Files to ignore in git |

---

## Hidden config files (CRITICAL)
These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .DS_Store | .DS_Store | macOS metadata (kept as-is) |
| .gitignore | gitignore | Git ignore rules |

---

## Routing — where each file belongs in COMBINED/
| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md, AGENTS.md, CLAUDE.md | orchestration/core-ruflo/ | Core orchestration documentation |
| claude/, claude-plugin/ | orchestration/core-ruflo/ | Claude integration |
| github/, bin/ | orchestration/core-ruflo/ | Infrastructure |
| Skills | skills/skills-ruflo/ | RuFlo skills (130+) |
| Hooks | hooks/hooks-ruflo/ | RuFlo hooks (27) |
| Agents | agents/agents-ruflo/ | RuFlo agents (100+) |

---

## Key insights for ULTRACAR integration
- **Unique capability:** Enterprise-grade self-learning multi-agent orchestration with 6,000+ commits
- **Self-optimizing:** Q-Learning router learns optimal agent routing over time
- **RuVector intelligence:** SONA (Self-Optimizing Neural Architecture), EWC++ (no forgetting), Flash Attention (2-7x faster), HNSW (sub-millisecond search), ReasoningBank (pattern storage), Hyperbolic embeddings
- **100+ specialized agents:** coder, tester, reviewer, architect, security, and 95+ more
- **Multiple topologies:** mesh, hierarchical, ring, star swarm coordination
- **Fault-tolerant consensus:** Raft, BFT, Gossip, CRDT for reliability
- **130+ skills, 27 hooks:** Extensible skill and hook system
- **MoE routing:** Mixture of 8 experts for task routing
- **9 RL algorithms:** Q-Learning, SARSA, A2C, PPO, DQN, Decision Transformer, etc.
- **Performance benchmarks:** 2.49-7.47x speedup (Flash Attention), 150x-12,500x faster search (HNSW), 128x compression (LoRA), 3.92x memory reduction (Int8)
- **AIDefence security:** Enterprise-grade security layer
- **Named by Ruv:** Rust + Flow states, WASM kernels in Rust
- **Production-ready:** Used in enterprise environments
- **Conflicts:** May overlap with other orchestration systems (GSD, OMC) — can be used together or separately
- **Special setup:** npm/npx, Claude Code or compatible runtime

---

## How to restore hidden files (for end users)
```bash
# Run this in the local vibe-coder folder to restore original names:
cd COMBINED/orchestration/core-ruflo/
mv gitignore .gitignore
```

---

## Status
- [x] README read
- [x] File tree fetched (via local copy)
- [x] Hidden files identified (2 files)
- [x] Routing map complete
- [ ] Added to MASTER_INDEX.md
