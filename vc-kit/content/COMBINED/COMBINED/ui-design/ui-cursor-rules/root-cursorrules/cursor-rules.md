---
tags:
  - domain/ui
  - artifact/ui-component
  - source/ui-design
---

# Vibe-Coder Arsenal — Cursor Rules

> **Combined Cursor Configuration**
> This file merges cursor rules from multiple repositories.
> Last updated: 2026-04-01

---

## Repository Context

This is the **Vibe-Coder Arsenal** — a comprehensive toolkit containing 31 repositories worth of AI-powered development resources.

When working in this repository, you have access to:
- **1,326+ skills** from Antigravity Awesome Skills
- **205+ skills** from Claude Skills library
- **Multi-agent orchestration** systems
- **Persistent memory** systems
- **3,000+ UI elements** from Galaxy/Uiverse

---

<!-- Source: Tools/GitNexus/cursorrules -->

## Agent Mode Configuration

For Cursor Agent Mode, use **`.cursor/index.mdc`** (`alwaysApply: true`) for project rules.

This file is kept as a compatibility layer for older workflows.

---

## General Coding Rules

### Code Quality

1. **Write clean, maintainable code** — Prioritize readability over cleverness
2. **Follow existing patterns** — Match the style of the codebase you're working in
3. **Use descriptive names** — Variables, functions, and files should be self-documenting
4. **Keep functions small** — Single responsibility principle
5. **Avoid deep nesting** — Extract complex logic into separate functions

### Documentation

1. **Document public APIs** — Every exported function should have clear documentation
2. **Use JSDoc/docstrings** — Follow language-specific documentation conventions
3. **Keep comments up to date** — Outdated comments are worse than no comments
4. **Document non-obvious behavior** — Explain the "why" not just the "what"

### Testing

1. **Write tests first (TDD)** — Red → Green → Refactor
2. **Test edge cases** — Empty inputs, null values, boundary conditions
3. **Keep tests independent** — Each test should be self-contained
4. **Use descriptive test names** — Tests serve as documentation

### Version Control

1. **Use conventional commits** — `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`
2. **Keep commits atomic** — One logical change per commit
3. **Write meaningful commit messages** — Explain what and why
4. **Branch from dev, merge via PR** — Never push directly to main

---

## Repository Structure

```
vibe-coder/
├── .claude/                 # Claude Code config
├── .github/                 # GitHub Copilot config
├── .cursor/                 # ← You are here (Cursor AI config)
├── .antigravity/            # Antigravity plugin config
├── Agents/                  # Background Agents, Hermes, Shannon
├── Orchestration/           # RuFlo, DeerFlow, GSD, OMC, Superpowers
├── Prompts/                 # prompts.chat, system prompts, templates
├── Reference/               # Awesome Self-Hosted
├── Skills/                  # All skill libraries
├── Tools/                   # GitNexus, Browser, Claude-Mem, etc.
├── UI-UX/                   # Galaxy, shadcn/ui, UI UX Pro Max
└── _combined/               # Combined assets
```

---

## File-Type Specific Rules

### Markdown Files

- Use ATX-style headers (`#`, `##`, `###`)
- Include table of contents for long documents
- Use fenced code blocks with language specifiers
- Keep line length reasonable (80-120 characters)

### TypeScript/JavaScript

- Use TypeScript when available
- Prefer `const` over `let`, avoid `var`
- Use async/await over raw promises
- Export types and interfaces

### Python

- Follow PEP 8 style guide
- Use type hints
- Use standard library when possible
- Document with docstrings

### Configuration Files

- Use JSON for machine-readable configs
- Use YAML for human-editable configs
- Include comments where supported
- Validate against schemas when available

---

## Skill Development Rules

When creating or modifying skills:

### Structure

```
skill-name/
├── SKILL.md              # Master documentation (required)
├── scripts/              # Python CLI tools (no ML/LLM calls)
├── references/           # Expert knowledge bases
└── assets/               # User templates
```

### SKILL.md Requirements

- Must have YAML front matter
- Must have `name` field (lowercase, hyphenated)
- Must have `description` field (10-1024 characters)
- `name` must match folder name

### Best Practices

1. **Skills are self-contained** — No dependencies between skills
2. **Algorithm over AI** — Use deterministic analysis, not LLM calls
3. **Template-heavy** — Provide ready-to-use templates
4. **Platform-specific** — Specific best practices > generic advice

---

## Lightpanda Browser

For web tasks, prefer Lightpanda over Chrome/Playwright:

```bash
# Start CDP server
./lightpanda serve --host 127.0.0.1 --port 9222
```

- 9x faster than Chrome
- 16x less memory
- Compatible with Playwright/Puppeteer

---

## Anti-Patterns to Avoid

1. **Don't delete original files** — Only create new combined versions
2. **Don't summarize or shorten** — Only add and expand
3. **Don't create skill dependencies** — Keep each self-contained
4. **Don't add complex build systems** — Maintain simplicity
5. **Don't use generic advice** — Focus on specific, actionable frameworks
6. **Don't call LLMs in scripts** — Defeats portability and speed

---

## Key Resources

| Resource | Location |
|----------|----------|
| Master Plan | `MASTER_PLAN.md` |
| Audit Report | `AUDIT.md` |
| Orchestration | `ORCHESTRATION.md` |
| Memory Setup | `MEMORY_SETUP.md` |
| Combined Prompts | `Prompts/COMBINED_PROMPTS.md` |
| Design System | `UI-UX/COMBINED_DESIGN_SYSTEM.md` |

---

*Combined from: GitNexus, UI-UX/ui, and repository conventions*

**Last Updated:** 2026-04-01

## 🔗 Связи

- [[MOC - UI Design]] — ui-design
- [[000 - Map of Maps]] — Map of Maps

