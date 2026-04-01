# 🔧 HOW_TO_COMBINE.md — Guide for AI Agents Adding New Repos

> Instructions for any AI agent tasked with adding a new repository to the Vibe-Coder Arsenal.
> Read this completely before making any changes.

---

## 🎯 Mission

When a new repository is added to this arsenal, its useful content must be:
1. **Preserved** — in its original folder under the correct category
2. **Mapped** — documented in `AUDIT.md`
3. **Merged** — relevant configs combined into the unified root files
4. **Copied** — combined versions placed in `COMBINED/`

**Never delete original content. Only add and combine.**

---

## 📋 Step-by-Step Process

### Step 1: Place the New Repo

Determine which category the repo belongs to:

| Category | Folder | Contains |
|----------|--------|----------|
| Agents | `Agents/` | AI agents, bots, autonomous systems |
| Orchestration | `Orchestration/` | Multi-agent coordination, workflows |
| Skills | `Skills/` | Skill libraries, commands, capabilities |
| Tools | `Tools/` | Developer tools, browsers, memory systems |
| Prompts | `Prompts/` | Prompt libraries, templates, system prompts |
| UI-UX | `UI-UX/` | Design systems, component libraries, UI elements |
| Reference | `Reference/` | Curated lists, documentation, knowledge bases |

Place the entire repo as a subfolder:
```bash
# Example: adding a new tool called "awesome-tool"
cp -r ~/awesome-tool Tools/awesome-tool/
```

### Step 2: Rename Hidden Files

GitHub doesn't store dot-prefixed directories well in nested repos. Rename them:

```bash
# Use underscore prefix
mv Tools/awesome-tool/.claude Tools/awesome-tool/_claude
mv Tools/awesome-tool/.github Tools/awesome-tool/_github
mv Tools/awesome-tool/.cursorrules Tools/awesome-tool/_cursorrules
mv Tools/awesome-tool/.gitignore Tools/awesome-tool/_gitignore
```

**Naming conventions** (pick one pattern and stay consistent within a repo):
- `_prefix` → `.prefix` (e.g., `_claude` → `.claude`)
- `VISIBLE_prefix` → `.prefix` (e.g., `VISIBLE_github` → `.github`)
- `unhidden_prefix` → `.prefix` (e.g., `unhidden_claude` → `.claude`)

### Step 3: Update AUDIT.md

Add the new repo's config files to the appropriate section in `AUDIT.md`:

```markdown
### [Category]/

| Repo | Renamed File/Folder | Original Name | Content Summary |
|------|---------------------|---------------|-----------------|
| awesome-tool | `_claude/` | `.claude/` | [describe what's inside] |
| awesome-tool | `_github/` | `.github/` | [describe what's inside] |
```

Also update the Statistics Summary section at the bottom.

### Step 4: Merge Into Unified Root Configs

For each config file type found in the new repo, **append** its content to the corresponding unified file:

#### Claude Code (`.claude/`)

If the new repo has a `CLAUDE.md`:
```markdown
<!-- Add to .claude/CLAUDE.md -->

---

<!-- Source: awesome-tool/CLAUDE.md -->

## [New Repo Name]

[Paste content here]
```

If it has `commands/`:
```bash
# Copy new commands (don't overwrite existing)
cp -n new-repo/_claude/commands/*.md .claude/commands/
```

If it has `skills/`:
```bash
# Copy new skills (don't overwrite existing)
cp -rn new-repo/_claude/skills/* .claude/skills/
```

If it has `settings.json`:
- **Do NOT overwrite** — manually merge relevant settings
- Focus on: permissions, hooks, MCP servers, env variables

#### GitHub Copilot (`.github/`)

If the new repo has `copilot-instructions.md`:
```markdown
<!-- Add to .github/copilot-instructions.md -->

---

<!-- Source: awesome-tool -->

## [New Repo Name] Integration

[Paste relevant content here]
```

#### Cursor (`.cursorrules`)

If the new repo has `.cursorrules` or `.cursor/rules/`:
```markdown
<!-- Add to .cursorrules -->

---

<!-- Source: awesome-tool -->

## [New Repo Name] Rules

[Paste relevant rules here]
```

#### Orchestration (`ORCHESTRATION.md`)

If the new repo is an orchestration system:
- Add its entry to the overview table
- Create a full section with: What It Is, Key Features, When to Use, Getting Started
- Update the Decision Matrix

#### Memory (`MEMORY_SETUP.md`)

If the new repo is a memory system:
- Add its entry to the overview table
- Create a full section
- Update the Decision Matrix

#### Prompts (`Prompts/COMBINED_PROMPTS.md`)

If the new repo has prompts:
- Add a new section with source attribution
- Categorize by type (development, research, meta, specialized)

#### UI/UX (`UI-UX/COMBINED_DESIGN_SYSTEM.md`)

If the new repo has UI resources:
- Add its entry to the overview
- Document available components/styles
- Add to the integration guide

### Step 5: Update COMBINED/ Directory

After merging into unified configs, copy the updated files to `COMBINED/`:

```bash
# Update COMBINED/ with latest versions
cp .claude/CLAUDE.md COMBINED/claude/COMBINED_CLAUDE.md
cp .claude/settings.json COMBINED/claude/COMBINED_SETTINGS.json
cp -r .claude/commands/* COMBINED/claude/COMBINED_COMMANDS/
cp -r .claude/skills/* COMBINED/claude/COMBINED_SKILLS/
cp .github/copilot-instructions.md COMBINED/copilot/COMBINED_COPILOT_INSTRUCTIONS.md
cp .cursorrules COMBINED/cursor/COMBINED_CURSORRULES
cp -r .cursor/rules/* COMBINED/cursor/COMBINED_CURSOR_RULES/
cp Prompts/COMBINED_PROMPTS.md COMBINED/prompts/COMBINED_ALL_PROMPTS.md
cp UI-UX/COMBINED_DESIGN_SYSTEM.md COMBINED/ui/COMBINED_DESIGN_SYSTEM.md
cp ORCHESTRATION.md COMBINED/orchestration/COMBINED_ORCHESTRATION.md
cp MEMORY_SETUP.md COMBINED/memory/COMBINED_MEMORY_SETUP.md
```

### Step 6: Update Root Files

- **`README.md`** — Add the new repo to the appropriate category table
- **`llms.txt`** — Add the new repo entry with path and description
- **`MASTER_PLAN.md`** — Update repo count if applicable

### Step 7: Verify

Run these checks:
```bash
# Verify no original files were modified
git diff --name-only -- Agents/ Orchestration/ Skills/ Tools/ Prompts/ UI-UX/ Reference/

# Verify new files were added
git status --short

# Verify COMBINED/ is up to date
diff .claude/CLAUDE.md COMBINED/claude/COMBINED_CLAUDE.md
diff .github/copilot-instructions.md COMBINED/copilot/COMBINED_COPILOT_INSTRUCTIONS.md
diff ORCHESTRATION.md COMBINED/orchestration/COMBINED_ORCHESTRATION.md
diff MEMORY_SETUP.md COMBINED/memory/COMBINED_MEMORY_SETUP.md
```

---

## ⚠️ Rules to Follow

### ALWAYS:
1. ✅ **Preserve originals** — Never modify files inside category folders
2. ✅ **Append, never overwrite** — Add new content at the bottom with source headers
3. ✅ **Document sources** — Use `<!-- Source: repo-name -->` comments
4. ✅ **Update AUDIT.md** — Every config file must be mapped
5. ✅ **Update llms.txt** — Every repo must be indexed
6. ✅ **Use COMBINED_ prefix** — For all combined files
7. ✅ **Keep skills self-contained** — No dependencies between skills
8. ✅ **Test before committing** — Verify configs are valid JSON/YAML/Markdown

### NEVER:
1. ❌ **Delete any file** — Not even duplicates
2. ❌ **Summarize or shorten** — Only add and expand
3. ❌ **Overwrite existing merged content** — Only append
4. ❌ **Create cross-skill dependencies** — Each skill must work alone
5. ❌ **Add LLM calls to scripts** — Use deterministic logic only
6. ❌ **Ignore edge cases** — Check for naming conflicts before merging

---

## 🔀 Handling Conflicts

### Same Filename, Same Purpose
```markdown
<!-- Merge: add unique content from source B to the bottom of A -->

---

<!-- Source: original-repo -->
[Original content]

---

<!-- Source: new-repo -->
[New content appended here]
```

### Same Filename, Different Purpose
```bash
# Keep both, rename the new one with _v2 suffix
cp new-content.md existing-name_v2.md
```

### Overlapping Skills
1. Check if the skill already exists in `.claude/skills/` or `_combined/skills/`
2. If yes — merge the SKILL.md files (append unique sections)
3. If no — add as new skill directory

---

## 📝 Merge Template

Use this comment block when adding content from a new repo:

```markdown
---

<!-- ================================================ -->
<!-- Source: [REPO_NAME] -->
<!-- Location: [CATEGORY]/[REPO_NAME]/ -->
<!-- Added: [DATE] -->
<!-- Description: [BRIEF_DESCRIPTION] -->
<!-- ================================================ -->

## [Section Title]

[Content from new repo]
```

---

## 📊 Checklist for Adding a New Repo

- [ ] Repo placed in correct category folder
- [ ] Hidden files renamed (dot → underscore prefix)
- [ ] AUDIT.md updated with new config files
- [ ] Relevant content merged into `.claude/CLAUDE.md`
- [ ] Relevant content merged into `.github/copilot-instructions.md`
- [ ] Relevant content merged into `.cursorrules`
- [ ] Relevant content merged into `ORCHESTRATION.md` (if applicable)
- [ ] Relevant content merged into `MEMORY_SETUP.md` (if applicable)
- [ ] Relevant content merged into `Prompts/COMBINED_PROMPTS.md` (if applicable)
- [ ] Relevant content merged into `UI-UX/COMBINED_DESIGN_SYSTEM.md` (if applicable)
- [ ] COMBINED/ directory updated with latest versions
- [ ] README.md updated
- [ ] llms.txt updated
- [ ] Changes committed with conventional commit message

---

## 💡 Tips

1. **Start with AUDIT** — Always read `AUDIT.md` first to understand what exists
2. **Check for duplicates** — Search existing skills before adding new ones
3. **Read MASTER_PLAN.md** — Understand the overall strategy
4. **Use `git diff`** — Verify you haven't accidentally modified originals
5. **Commit atomically** — One commit per logical change (add repo, merge configs, update docs)

---

*Part of the [Vibe-Coder Arsenal](https://github.com/ibragimov-oasis/vibe-coder) — Instructions for AI agents.*
