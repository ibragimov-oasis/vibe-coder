# Superpowers — How It Works

**Original repo:** https://github.com/obra/superpowers
**Stars:** 129k ⭐
**Category:** Orchestration / Skills
**Local path in vibe-coder:** COMBINED/orchestration/superpowers/
**License:** MIT

---

## What it does (plain language for vibe-coders)
Superpowers is a complete software development workflow built on composable "skills" that trigger automatically. Your coding agent doesn't jump straight to writing code — it asks what you're building, teases out a spec, shows it in digestible chunks, creates an implementation plan for a junior engineer to follow, then launches subagent-driven development where agents work autonomously for hours following the plan. It enforces true RED-GREEN-REFACTOR TDD, YAGNI, DRY. Skills trigger automatically based on context, so your agent just has Superpowers.

---

## How the AI reads this repo (startup sequence)
Step 1: AI reads **README.md** → learns the basic workflow (brainstorming → git worktrees → writing plans → subagent-driven development → TDD → code review → finishing branch), skills library, philosophy
Step 2: AI reads **skills/** → loads all available skills (brainstorming, writing-plans, subagent-driven-development, test-driven-development, systematic-debugging, etc.)
Step 3: AI automatically triggers skills based on context (e.g., "help me plan this feature" triggers writing-plans skill)
Step 4: Skills guide the agent through entire development lifecycle
Step 5: AI reads **docs/** → platform-specific docs (Codex, OpenCode, Cursor, Claude)

---

## All files and what they do
| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Main docs: workflow, installation, skills library, philosophy |
| RELEASE-NOTES.md | Release notes | Version history and updates |
| GEMINI.md | Gemini integration | Gemini CLI specific integration |
| docs/ | Documentation | Platform-specific docs (Codex, OpenCode, Claude, Cursor) |
| codex/ | Codex config | Codex-specific configuration and installation |
| opencode/ | OpenCode config | OpenCode-specific configuration and installation |
| github/ | GitHub config | GitHub workflows and templates |
| package.json | npm config | Package metadata for Gemini extension |
| gemini-extension.json | Gemini extension | Gemini CLI extension configuration |
| gitignore, gitattributes | Git config | Git configuration files |

---

## Hidden config files (CRITICAL)
These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .DS_Store | .DS_Store | macOS metadata (kept as-is) |
| .gitignore | gitignore | Git ignore rules |
| .gitattributes | gitattributes | Git attributes configuration |

---

## Routing — where each file belongs in COMBINED/
| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md, RELEASE-NOTES.md, GEMINI.md | orchestration/superpowers/ | Core documentation |
| docs/ | orchestration/superpowers/docs/ | Platform-specific guides |
| Skills | skills/development/superpowers/ | Superpowers skills library |
| codex/, opencode/, github/ | orchestration/superpowers/ | Platform integrations |

---

## Key insights for ULTRACAR integration
- **Unique capability:** Automatic skill-based workflow that guides entire development lifecycle from ideation to PR
- **Highest stars:** 129k ⭐ — most popular orchestration system in ULTRACAR
- **Composable skills:** 14+ skills that trigger automatically based on context
- **Complete workflow:** brainstorming → git worktrees → writing plans → subagent-driven development → TDD → code review → finishing branch
- **Autonomous for hours:** Agents can work autonomously for 2+ hours following the plan
- **True TDD:** Enforces RED-GREEN-REFACTOR cycle, deletes code written before tests
- **Subagent-driven development:** Dispatches fresh subagent per task with two-stage review (spec compliance, then code quality)
- **Systematic debugging:** 4-phase root cause process with defense-in-depth
- **Multi-platform:** Claude Code (marketplace), Cursor (marketplace), Codex (manual), OpenCode (manual), Gemini CLI (extension)
- **Created by Jesse Vincent (obra):** Well-known in developer tools community
- **Sponsorship model:** Accepts GitHub sponsors
- **Philosophy:** Test-driven development, systematic over ad-hoc, complexity reduction, evidence over claims
- **YAGNI + DRY:** Strong principles enforcement
- **Conflicts:** None identified — complements other systems, provides workflow layer
- **Special setup:** Platform-specific (varies by Claude Code/Cursor/Codex/OpenCode/Gemini)

---

## How to restore hidden files (for end users)
```bash
# Run this in the local vibe-coder folder to restore original names:
cd COMBINED/orchestration/superpowers/
mv gitignore .gitignore
mv gitattributes .gitattributes
```

---

## Status
- [x] README read
- [x] File tree fetched (via local copy)
- [x] Hidden files identified (3 files)
- [x] Routing map complete
- [ ] Added to MASTER_INDEX.md
