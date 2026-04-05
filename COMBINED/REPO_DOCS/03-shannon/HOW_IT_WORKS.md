# Shannon (AI Pentester) — How It Works

**Original repo:** https://github.com/KeygraphHQ/shannon
**Stars:** 35k ⭐
**Category:** Security / Agents
**Local path in vibe-coder:** COMBINED/security/security-shannon/
**License:** AGPL-3.0 (Lite) / Commercial (Pro)

---

## What it does (plain language for vibe-coders)
Shannon is an autonomous AI pentester that analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities. Unlike traditional security scanners that report theoretical risks, Shannon actually exploits your running application (injection attacks, authentication bypass, SSRF, XSS) and only reports findings with working proof-of-concept exploits. It handles 2FA/TOTP logins, browser navigation, and exploitation fully autonomously — you run one command and get back a validated security report.

---

## How the AI reads this repo (startup sequence)
Step 1: AI reads **README.md** → learns Shannon is white-box AI pentester, two editions (Lite/Pro), fully autonomous operation, reproducible PoC exploits, OWASP coverage, code-aware dynamic testing
Step 2: AI reads **CLAUDE.md** → learns integration with Claude Code, how to use Shannon skill, security testing workflows
Step 3: AI reads **SHANNON-PRO.md** → learns two-stage pipeline (agentic static analysis + autonomous dynamic pentesting), CPG-based data flow analysis, business logic security testing, static-dynamic correlation
Step 4: AI reads **COVERAGE.md** → learns supported vulnerability types, attack categories, roadmap
Step 5: AI reads **configs/** → learns configuration options, environment variables
Step 6: AI uses the Shannon CLI or skill to launch pentests

---

## All files and what they do
| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Main docs: setup, usage, features, quick start with npx |
| CLAUDE.md | Claude Code integration | How to use Shannon as a Claude Code skill |
| SHANNON-PRO.md | Pro edition docs | Architecture of commercial all-in-one AppSec platform |
| COVERAGE.md | Vulnerability coverage | Supported attack types, roadmap |
| shannon | CLI script | Main executable script for running Shannon |
| package.json | npm config | Monorepo workspace configuration |
| apps/ | Application code | Core Shannon application packages |
| configs/ | Configuration | Config files and templates |
| repos/ | Sample repositories | Test repos for benchmarking |
| tsconfig.base.json | TypeScript config | Base TypeScript configuration |
| biome.json | Biome config | Code formatter/linter configuration |
| .releaserc.json | Semantic release | Automated release configuration |
| env.example | Environment template | Example environment variables |
| gitignore | Git ignore | Files to ignore in git |
| dockerignore | Docker ignore | Files to ignore in Docker builds |
| npmrc | npm config | npm configuration |

---

## Hidden config files (CRITICAL)
These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .env.example | env.example | Example environment variables template |
| .gitignore | gitignore | Git ignore rules |
| .dockerignore | dockerignore | Docker build ignore rules |
| .npmrc | npmrc | npm configuration |
| .releaserc.json | releaserc.json | Semantic release config |
| .DS_Store | .DS_Store | macOS metadata (kept as-is) |

---

## Routing — where each file belongs in COMBINED/
| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md, CLAUDE.md | security/security-shannon/ | Core security tool documentation |
| SHANNON-PRO.md | security/security-shannon/ | Pro edition architecture |
| COVERAGE.md | security/security-shannon/ | Vulnerability coverage map |
| shannon (CLI) | security/security-shannon/ | Main executable |
| apps/, configs/, repos/ | security/security-shannon/ | Core application code |
| Sample reports | security/security-reports/shannon-samples/ | Example pentest reports |
| Shannon as Claude skill | agents/by-interface/agents-claude/shannon/ | Claude Code skill integration |
| Commands | commands/commands-shannon/ | CLI commands |

---

## Key insights for ULTRACAR integration
- **Unique capability:** Only AI pentester that analyzes source code + executes real exploits with full autonomy (handles 2FA, browser automation, exploitation)
- **White-box only:** Designed for source-available application security testing
- **Two editions:** Shannon Lite (AGPL-3.0, autonomous pentesting) vs Shannon Pro (commercial all-in-one AppSec with SAST/SCA/secrets/business logic)
- **Shannon Pro architecture:** Two-stage pipeline (CPG-based static analysis → autonomous dynamic pentesting → static-dynamic correlation)
- **PoC-only reporting:** Only reports vulnerabilities with working exploits — no false positives, no theoretical risks
- **OWASP coverage:** Injection, XSS, SSRF, Broken Auth/Authz (more in roadmap)
- **Integrated tooling:** Leverages Nmap, Subfinder, WhatWeb, Schemathesis during recon
- **Parallel processing:** Vulnerability analysis and exploitation run concurrently
- **Multi-provider:** Anthropic Claude (recommended), Claude Code OAuth, AWS Bedrock, Google Vertex AI, OpenRouter (experimental)
- **npx deployment:** `npx @keygraph/shannon` pulls prebuilt 1GB Docker image
- **Workspace resumption:** Can pause/resume pentests
- **Business logic testing (Pro only):** Automated invariant discovery, fuzzer generation, exploit synthesis
- **CI/CD integration (Pro only):** Native GitHub PR scanning
- **Self-hosted runner (Pro only):** Data plane runs in customer infrastructure, code never leaves network
- **Conflicts:** None identified — complements other security tools
- **Special setup:** Requires Docker, Node.js 18+, pnpm (for clone-and-build), AI provider credentials

---

## How to restore hidden files (for end users)
```bash
# Run this in the local vibe-coder folder to restore original names:
cd COMBINED/security/security-shannon/
mv env.example .env.example
mv gitignore .gitignore
mv dockerignore .dockerignore
mv npmrc .npmrc
mv releaserc.json .releaserc.json
```

---

## Status
- [x] README read
- [x] File tree fetched (via local copy)
- [x] Hidden files identified (6 files)
- [x] Routing map complete
- [ ] Added to MASTER_INDEX.md
