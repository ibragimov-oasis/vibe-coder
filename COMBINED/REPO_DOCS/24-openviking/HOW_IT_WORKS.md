─────────────────────────────────────────────────────────

# OpenViking — How It Works

**Original repo:** https://github.com/volcengine/OpenViking
**Stars:** ~8k ⭐
**Category:** Tools
**Local path in vibe-coder:** Tools/openviking/
**License:** Apache 2.0

---

## What it does (plain language for vibe-coders)

The Context Database for AI Agents by ByteDance (Volcengine). Solves fragmented context, surging context demand, and poor retrieval. Uses a filesystem paradigm to unify memories, resources, and skills. Features L0/L1/L2 tiered context loading, directory recursive retrieval, visualized retrieval trajectory, and automatic session management. Python SDK + Rust CLI. Requires VLM model + embedding model.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers the 5 core problems it solves and the filesystem paradigm
Step 2: AI reads `docs/` → loads detailed documentation (English, Chinese, Japanese)
Step 3: AI reads `Dockerfile` → understands containerized deployment
Step 4: AI reads `Makefile` → understands build system
Step 5: AI reads `Cargo.toml` → discovers Rust CLI component
Step 6: AI reads `CONTRIBUTING.md` → understands contribution guidelines (EN/CN/JA)

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Overview, quick start, architecture (EN) |
| README_CN.md | Documentation | Chinese README |
| README_JA.md | Documentation | Japanese README |
| docs/ | directory | Full documentation in EN, CN, JA |
| Cargo.toml | config | Rust CLI package manifest |
| Cargo.lock | config | Rust dependency lock |
| Dockerfile | config | Container build definition |
| Makefile | config | Build commands |
| MANIFEST.in | config | Python package manifest |
| CONTRIBUTING.md | Documentation | Contribution guidelines (EN) |
| CONTRIBUTING_CN.md | Documentation | Contribution guidelines (CN) |
| CONTRIBUTING_JA.md | Documentation | Contribution guidelines (JA) |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .github/ | VISIBLE_github/ | CI/CD workflows (build, test, release, PR review) |
| .gitignore | VISIBLE_gitignore | Git ignore rules |
| .pre-commit-config.yaml | VISIBLE_pre-commit-config.yaml | Pre-commit hooks |
| .pr_agent.toml | VISIBLE_pr_agent.toml | PR agent config |
| .clang-format | VISIBLE_clang-format | C++ formatting rules |
| .ingest_record.json | VISIBLE_ingest_record.json | Data ingestion records |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/24-openviking/ | Documentation |
| docs/ | COMBINED/REPO_DOCS/24-openviking/docs/ | Full documentation |
| Rust CLI | COMBINED/REPO_DOCS/24-openviking/cli/ | CLI reference |

---

## Key insights for ULTRACAR integration

- **ByteDance (Volcengine)** — enterprise-grade from the same company behind DeerFlow (Repo 5)
- **Filesystem paradigm** — unique approach: manage context like local files
- **L0/L1/L2 tiered loading** — reduces token consumption by loading context on demand
- **Visualized retrieval** — debug retrieval chains instead of black-box RAG
- **Automatic session management** — compresses conversations, extracts long-term memory
- **Python + Rust** — SDK in Python, CLI in Rust for performance
- **Multi-language docs** — English, Chinese, Japanese
- **Complementary to Supermemory (Repo 29)** — both solve AI memory but different approaches

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_github/ .github/
mv VISIBLE_gitignore .gitignore
mv VISIBLE_pre-commit-config.yaml .pre-commit-config.yaml
mv VISIBLE_pr_agent.toml .pr_agent.toml
mv VISIBLE_clang-format .clang-format
mv VISIBLE_ingest_record.json .ingest_record.json
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
