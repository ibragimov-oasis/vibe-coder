---
name: skill-creator
description: "Create new AI agent skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit or optimize an existing skill, run evals to test a skill, benchmark skill performance, optimize a skill's description for better triggering accuracy, or package skills for distribution."
version: 1.0.0
category: meta
tags: [automation, scaffolding, skill-creation, meta-skill, evaluation, benchmarking]
sources:
  - name: deer-flow (Anthropic skill-creator)
    repo: https://github.com/anthropics/deer-flow
    path: skills/public/skill-creator/SKILL.md
  - name: OpenViking
    repo: https://github.com/OpenViking/openviking
    path: bot/workspace/skills/skill-creator/SKILL.md
  - name: antigravity-awesome-skills
    repo: https://github.com/anthropics/antigravity-awesome-skills
    path: skills/skill-creator/SKILL.md
related_skills: [prompt-engineer]
---

# Skill Creator

A comprehensive skill for creating new skills, iteratively improving them, and packaging for distribution.

## Overview

At a high level, skill creation follows this process:

1. Decide what the skill should do and roughly how it should do it
2. Write a draft of the skill
3. Create test prompts and run the skill on them
4. Evaluate results qualitatively and quantitatively
5. Rewrite the skill based on feedback
6. Repeat until satisfied
7. Package and distribute

Your job is to figure out where the user is in this process and help them progress.

## About Skills

Skills are modular, self-contained packages that extend an agent's capabilities by providing specialized knowledge, workflows, and tools. Think of them as "onboarding guides" for specific domains — they transform a general-purpose agent into a specialist equipped with procedural knowledge.

### What Skills Provide

1. **Specialized workflows** — Multi-step procedures for specific domains
2. **Tool integrations** — Instructions for working with specific file formats or APIs
3. **Domain expertise** — Company-specific knowledge, schemas, business logic
4. **Bundled resources** — Scripts, references, and assets for complex and repetitive tasks

## Core Principles

### Concise is Key

The context window is a public good. Skills share it with everything else the agent needs. **Default assumption: the agent is already very smart.** Only add context the agent doesn't already have.

### Set Appropriate Degrees of Freedom

Match the level of specificity to the task's fragility:

- **High freedom (text-based instructions)**: Multiple approaches are valid, decisions depend on context
- **Medium freedom (pseudocode or scripts with parameters)**: A preferred pattern exists, some variation acceptable
- **Low freedom (specific scripts, few parameters)**: Operations are fragile and error-prone, consistency critical

### Explain the Why

Try hard to explain the **why** behind all instructions. Today's LLMs are smart — when given good reasoning, they can go beyond rote instructions. Avoid heavy-handed MUSTs where possible; explain the reasoning instead.

## Anatomy of a Skill

```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter (name, description required)
│   └── Markdown instructions
└── Bundled Resources (optional)
    ├── scripts/    — Executable code for deterministic/repetitive tasks
    ├── references/ — Docs loaded into context as needed
    └── assets/     — Files used in output (templates, icons, fonts)
```

### SKILL.md (required)

- **Frontmatter** (YAML): `name` and `description` fields. These are the ONLY fields the agent reads to determine when the skill gets used — be clear and comprehensive.
- **Body** (Markdown): Instructions and guidance. Only loaded AFTER the skill triggers.

**Description tips:** Include both what the skill does AND specific triggers/contexts. Make descriptions slightly "pushy" to combat undertriggering. For example:
> "How to build a simple fast dashboard. Make sure to use this skill whenever the user mentions dashboards, data visualization, or wants to display any kind of data."

### Bundled Resources (optional)

**Scripts (`scripts/`):** Executable code for tasks needing deterministic reliability.
- **When to include:** Same code rewritten repeatedly or deterministic reliability needed
- **Benefits:** Token efficient, deterministic, may execute without loading into context

**References (`references/`):** Documentation loaded as-needed into context.
- **When to include:** Documentation the agent should reference while working
- **Best practice:** If files are large (>10k words), include grep search patterns in SKILL.md
- **Avoid duplication:** Information should live in either SKILL.md or references, not both

**Assets (`assets/`):** Files not loaded into context, used in output.
- **When to include:** Templates, images, icons, boilerplate that gets copied or modified

### What NOT to Include

Do NOT create extraneous documentation:
- README.md, INSTALLATION_GUIDE.md, QUICK_REFERENCE.md, CHANGELOG.md
- The skill should only contain information needed for an AI agent to do the job

### Progressive Disclosure

Skills use a three-level loading system:
1. **Metadata (name + description)** — Always in context (~100 words)
2. **SKILL.md body** — When skill triggers (<500 lines ideal)
3. **Bundled resources** — As needed (unlimited)

Keep SKILL.md under 500 lines. Split content into separate files when approaching this limit with clear pointers about where to read next.

## Skill Creation Process

### Step 0: Discovery

```bash
# Detect available platforms
COPILOT_INSTALLED=false; CLAUDE_INSTALLED=false; CODEX_INSTALLED=false

if command -v gh &>/dev/null && gh copilot --version &>/dev/null 2>&1; then COPILOT_INSTALLED=true; fi
if [[ -d "$HOME/.claude" ]]; then CLAUDE_INSTALLED=true; fi
if [[ -d "$HOME/.codex" ]]; then CODEX_INSTALLED=true; fi

# Determine working directory
REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
AUTHOR=$(git config user.name || echo "Unknown")
```

### Step 1: Understand the Skill with Concrete Examples

Start by understanding concrete usage examples:
- "What should this skill do?"
- "When should it trigger?"
- "Can you give examples of how it would be used?"
- "What would a user say that should trigger this skill?"

Conclude when there's a clear sense of the functionality.

### Step 2: Plan Reusable Skill Contents

Analyze each example by:
1. Considering how to execute it from scratch
2. Identifying what scripts, references, and assets would help with repeated execution

**Examples:**
- PDF rotation task → `scripts/rotate_pdf.py`
- Frontend webapp → `assets/hello-world/` template
- BigQuery queries → `references/schema.md` documenting tables

### Step 3: Initialize the Skill

```bash
scripts/init_skill.py <skill-name> --path <output-directory> [--resources scripts,references,assets] [--examples]
```

### Step 4: Edit the Skill

When editing, remember the skill is being created for another agent instance to use. Include information that would be non-obvious.

#### Naming Conventions
- Use lowercase letters, digits, and hyphens only
- Generate names under 64 characters
- Prefer short, verb-led phrases
- Namespace by tool when it improves clarity (e.g., `gh-address-comments`)

#### Writing Guidelines
- Always use imperative/infinitive form
- Keep SKILL.md under 500 lines
- All "when to use" information goes in the `description` field, not the body

### Step 5: Package the Skill

```bash
scripts/package_skill.py <path/to/skill-folder>
```

This validates (YAML frontmatter, naming, description, structure) and packages into a `.skill` file.

### Step 6: Iterate

1. Use the skill on real tasks
2. Notice struggles or inefficiencies
3. Improve SKILL.md or bundled resources
4. Test again

## Testing and Evaluation

### Create Test Cases

Come up with 2-3 realistic test prompts. Save to `evals/evals.json`:

```json
{
  "skill_name": "example-skill",
  "evals": [
    {"id": 1, "prompt": "User's task prompt", "expected_output": "Description", "files": []}
  ]
}
```

### Run Test Cases

For each test case, spawn two runs — one with the skill, one without (baseline). Launch everything at once for parallel execution.

### Evaluate Results

1. **Grade each run** — evaluate assertions against outputs
2. **Aggregate into benchmark** — pass_rate, time, tokens for each configuration
3. **Analyze patterns** — non-discriminating assertions, high-variance evals, time tradeoffs
4. **Launch viewer** — present both qualitative outputs and quantitative data

### Iterate Based on Feedback

- Generalize from feedback (don't overfit to test cases)
- Keep the prompt lean (remove what doesn't pull weight)
- Look for repeated work across test cases → bundle as scripts
- Read transcripts, not just final outputs

## Description Optimization

### Step 1: Generate Trigger Eval Queries

Create 20 eval queries — mix of should-trigger and should-not-trigger. Make them realistic:

**Bad:** `"Format this data"`, `"Extract text from PDF"`
**Good:** `"ok so my boss just sent me this xlsx file (its in my downloads, called something like 'Q4 sales final FINAL v2.xlsx') and she wants me to add a column that shows the profit margin as a percentage"`

### Step 2: Review with User

Present the eval set for review and modification.

### Step 3: Run Optimization Loop

```bash
python -m scripts.run_loop \
  --eval-set <path-to-trigger-eval.json> \
  --skill-path <path-to-skill> \
  --model <model-id> \
  --max-iterations 5 \
  --verbose
```

### Step 4: Apply the Result

Take `best_description` and update the skill's SKILL.md frontmatter.

## Installation

**Repository only:** Files in `.github/skills/`, `COMBINED/workspace-config/claude/skills/`, or `.codex/skills/`

**Global installation:** Create symlinks:
```bash
ln -sf "$SKILLS_REPO/.github/skills/$SKILL_NAME" "$HOME/.copilot/skills/$SKILL_NAME"
ln -sf "$SKILLS_REPO/COMBINED/workspace-config/claude/skills/$SKILL_NAME" "$HOME/COMBINED/workspace-config/claude/skills/$SKILL_NAME"
```

**Benefits:** Auto-updates with git pull.

## Validation

**SKILL.md Requirements:**
- 1,500-2,000 words (ideal), under 5,000 (maximum)
- Third-person description format
- Imperative/infinitive writing style
- Progressive disclosure pattern

**Validation Checks:**
- YAML frontmatter completeness
- Description format (third-person)
- Word count limits
- Required fields present

## Error Handling

| Scenario | Action |
|----------|--------|
| Platform not detected | Offer repository-only or manual platform specification |
| Template not found | Clone repository or create minimal structure manually |
| Validation failure | Display specific errors, offer auto-fix for common issues |
| Installation conflict | Offer overwrite, rename, or skip options |

## Quality Standards

- The skill should never surprise the user in its intent
- Must not contain malware, exploit code, or malicious content
- "Roleplay as X" skills are OK; data exfiltration or unauthorized access skills are not
