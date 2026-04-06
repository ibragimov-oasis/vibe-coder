─────────────────────────────────────────────────────────

# Lightpanda Browser — How It Works

**Original repo:** https://github.com/lightpanda-io/browser
**Stars:** ~7k ⭐
**Category:** Tools
**Local path in vibe-coder:** Tools/lightpanda/
**License:** AGPL-3.0

---

## What it does (plain language for vibe-coders)

A headless browser built from scratch for AI agents and automation. Not a Chromium fork, not a WebKit patch — written entirely in Zig. 9x faster execution and 16x less memory than Chrome. Compatible with Playwright, Puppeteer, and chromedp through CDP (Chrome DevTools Protocol). Supports JavaScript execution and Web APIs (partial, WIP). Instant startup. Available as binary, Docker, or build from source.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers benchmarks (9x faster, 16x less memory), installation, CDP compatibility
Step 2: AI reads `build.zig` → understands the Zig build system
Step 3: AI reads `build.zig.zon` → discovers dependencies
Step 4: AI reads `src/` → explores the browser source (App.zig, Server.zig, browser/, etc.)
Step 5: AI reads `CONTRIBUTING.md` → understands contribution guidelines
Step 6: AI reads `SECURITY.md` → understands security policy

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full guide — benchmarks, installation, CDP usage |
| build.zig | config | Zig build system configuration |
| build.zig.zon | config | Zig package dependencies |
| src/ | directory | Full browser source code in Zig |
| src/browser/ | directory | Browser core (Browser.zig, Page.zig, EventManager.zig, etc.) |
| src/App.zig | source | Application entry point |
| src/Server.zig | source | CDP server implementation |
| src/Config.zig | source | Configuration management |
| Dockerfile | config | Docker build definition |
| Makefile | config | Build commands |
| CONTRIBUTING.md | Documentation | Contribution guidelines |
| SECURITY.md | Documentation | Security policy |
| LICENSING.md | Documentation | Licensing details |
| CLA.md | Documentation | Contributor License Agreement |
| flake.nix | config | Nix build configuration |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .github/ | VISIBLE_github/ | CI/CD (build, test, nightly, e2e, lint, wpt) |
| .gitignore | VISIBLE_gitignore | Git ignore rules |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/25-lightpanda/ | Documentation |

---

## Key insights for ULTRACAR integration

- **Written in Zig** — only Zig project in the collection, unique from-scratch browser
- **9x faster, 16x less memory** — benchmarked against Chrome on 933 real web pages
- **CDP compatible** — works with Playwright, Puppeteer, chromedp — drop-in replacement
- **For AI agents** — designed for web automation, scraping, LLM training data collection
- **Docker support** — `lightpanda/browser:nightly` on Docker Hub
- **Not a fork** — completely independent browser implementation
- **Complementary to GitNexus (Repo 23)** — GitNexus indexes code, Lightpanda browses the web
- **Nightly builds** — pre-built binaries for Linux x86_64 and macOS aarch64

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_github/ .github/
mv VISIBLE_gitignore .gitignore
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
