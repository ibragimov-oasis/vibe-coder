# ⚡ QUICKSTART — Get Running in 5 Minutes

> Clone → Copy → Vibe. That's it.

---

## Step 1: Clone the Repo

```bash
git clone https://github.com/ibragimov-oasis/vibe-coder.git
```

---

## Step 2: Copy Configs to Your Project

### Option A: Copy Everything (All AI Tools)

```bash
# Set your project path
PROJECT=~/your-project

# Claude Code
mkdir -p $PROJECT/.claude/commands $PROJECT/.claude/skills
cp vibe-coder/COMBINED/claude/COMBINED_CLAUDE.md $PROJECT/.claude/CLAUDE.md
cp vibe-coder/COMBINED/claude/COMBINED_SETTINGS.json $PROJECT/.claude/settings.json
cp -r vibe-coder/COMBINED/claude/COMBINED_COMMANDS/* $PROJECT/COMBINED/workspace-config/claude/commands/
cp -r vibe-coder/COMBINED/claude/COMBINED_SKILLS/* $PROJECT/COMBINED/workspace-config/claude/skills/

# GitHub Copilot
mkdir -p $PROJECT/.github
cp vibe-coder/COMBINED/copilot/COMBINED_COPILOT_INSTRUCTIONS.md $PROJECT/.github/copilot-instructions.md

# Cursor
mkdir -p $PROJECT/.cursor/rules
cp vibe-coder/COMBINED/cursor/COMBINED_CURSORRULES $PROJECT/.cursorrules
cp -r vibe-coder/COMBINED/cursor/COMBINED_CURSOR_RULES/* $PROJECT/.cursor/rules/

# Antigravity
mkdir -p $PROJECT/.antigravity/skills $PROJECT/.antigravity/hooks $PROJECT/.antigravity/plugins
cp -r vibe-coder/COMBINED/antigravity/COMBINED_SKILLS/* $PROJECT/.antigravity/skills/
cp -r vibe-coder/COMBINED/antigravity/COMBINED_HOOKS/* $PROJECT/.antigravity/hooks/
cp -r vibe-coder/COMBINED/antigravity/COMBINED_PLUGINS/* $PROJECT/.antigravity/plugins/

# Reference docs (optional)
cp vibe-coder/COMBINED/orchestration/COMBINED_ORCHESTRATION.md $PROJECT/ORCHESTRATION.md
cp vibe-coder/COMBINED/memory/COMBINED_MEMORY_SETUP.md $PROJECT/MEMORY_SETUP.md
cp vibe-coder/COMBINED/prompts/COMBINED_ALL_PROMPTS.md $PROJECT/PROMPTS.md
cp vibe-coder/COMBINED/ui/COMBINED_DESIGN_SYSTEM.md $PROJECT/DESIGN_SYSTEM.md
```

### Option B: Copy Just What You Need

#### Claude Code Only
```bash
PROJECT=~/your-project
mkdir -p $PROJECT/.claude/commands $PROJECT/.claude/skills
cp vibe-coder/COMBINED/claude/COMBINED_CLAUDE.md $PROJECT/.claude/CLAUDE.md
cp -r vibe-coder/COMBINED/claude/COMBINED_COMMANDS/* $PROJECT/COMBINED/workspace-config/claude/commands/
cp -r vibe-coder/COMBINED/claude/COMBINED_SKILLS/* $PROJECT/COMBINED/workspace-config/claude/skills/
```

#### GitHub Copilot Only
```bash
PROJECT=~/your-project
mkdir -p $PROJECT/.github
cp vibe-coder/COMBINED/copilot/COMBINED_COPILOT_INSTRUCTIONS.md $PROJECT/.github/copilot-instructions.md
```

#### Cursor Only
```bash
PROJECT=~/your-project
mkdir -p $PROJECT/.cursor/rules
cp vibe-coder/COMBINED/cursor/COMBINED_CURSORRULES $PROJECT/.cursorrules
cp -r vibe-coder/COMBINED/cursor/COMBINED_CURSOR_RULES/* $PROJECT/.cursor/rules/
```

#### Antigravity Only
```bash
PROJECT=~/your-project
mkdir -p $PROJECT/.antigravity/skills $PROJECT/.antigravity/hooks $PROJECT/.antigravity/plugins
cp -r vibe-coder/COMBINED/antigravity/COMBINED_SKILLS/* $PROJECT/.antigravity/skills/
cp -r vibe-coder/COMBINED/antigravity/COMBINED_HOOKS/* $PROJECT/.antigravity/hooks/
cp -r vibe-coder/COMBINED/antigravity/COMBINED_PLUGINS/* $PROJECT/.antigravity/plugins/
```

---

## Step 3: Open Your Project

Open your project in your AI coding tool of choice:
- **Claude Code** → Skills, commands, and instructions are auto-loaded from `.claude/`
- **GitHub Copilot** → Instructions loaded from `.github/copilot-instructions.md`
- **Cursor** → Rules loaded from `.cursorrules` and `.cursor/rules/`
- **Antigravity** → Skills, hooks, plugins loaded from `.antigravity/`

---

## Step 4: Vibe 🎵

Your AI now has access to:

| Resource | Count |
|----------|-------|
| Antigravity Skills | 1,326+ |
| Claude Skills | 205+ |
| Claude Commands | 182 |
| Skill Packages | 39 |
| UI Elements | 3,000+ |
| Prompts | 330+ |
| Orchestration Systems | 5 |
| Memory Systems | 3 |

---

## 🔌 Optional: Install Orchestration Tools

These are more powerful but require additional setup:

### RuFlo (Enterprise Multi-Agent)
```bash
npx @claude-flow install
npx @claude-flow swarm start --topology hierarchical-mesh
```

### Get Shit Done (Spec-Driven Development)
```bash
npx get-shit-done-cc@latest
# Then use: /gsd:help, /gsd:spec, /gsd:plan, /gsd:exec
```

### oh-my-claudecode (Zero Learning Curve)
```bash
# In Claude Code:
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode
/plugin install oh-my-claudecode
/omc-setup
```

### Superpowers (TDD Workflow)
```bash
# In Claude Code:
/plugin install superpowers@claude-plugins-official
```

---

## 🧠 Optional: Install Memory Systems

### Claude-Mem (for Claude Code)
```bash
# In Claude Code:
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
# Restart Claude Code
```

### Supermemory (Cross-Platform)
```bash
npx -y install-mcp@latest https://mcp.supermemory.ai/mcp --client claude --oauth=yes
```

### OpenViking (for AI Agents)
```bash
pip install openviking --upgrade --force-reinstall
```

---

## 📚 Want to Learn More?

| Document | What It Covers |
|----------|----------------|
| [MASTER_PLAN.md](MASTER_PLAN.md) | Full roadmap and strategy |
| [ORCHESTRATION.md](ORCHESTRATION.md) | How to choose and use orchestration systems |
| [MEMORY_SETUP.md](MEMORY_SETUP.md) | Memory system setup and comparison |
| [AUDIT.md](AUDIT.md) | Complete map of all 172+ config files |
| [Prompts/COMBINED_PROMPTS.md](Prompts/COMBINED_PROMPTS.md) | 330+ ready-to-use prompts |
| [UI-UX/COMBINED_DESIGN_SYSTEM.md](UI-UX/COMBINED_DESIGN_SYSTEM.md) | Design system reference |

---

## 🤔 FAQ

### Q: Will this slow down my AI tool?
**A:** No. AI tools only read a small number of config files at startup. The vast majority of content is only accessed when needed.

### Q: Do I need all the files?
**A:** No. Copy only the configs for the AI tools you use. Each tool's config is completely independent.

### Q: What if I already have a `.claude/` or `.cursorrules`?
**A:** Back up your existing files first, then merge manually. Our files are clearly commented with sources, so you can pick what you want.

### Q: Can I use this with a private repo?
**A:** Absolutely. The configs are designed to work in any project. Just copy them in.

### Q: How do I update when new skills are added?
**A:** `git pull` in the vibe-coder repo, then re-copy the configs you need.

---

*Part of the [Vibe-Coder Arsenal](https://github.com/ibragimov-oasis/vibe-coder) — 31 repos, 1 toolkit.*
