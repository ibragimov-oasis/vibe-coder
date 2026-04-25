---
description: Activate the design agent with full Galaxy + shadcn + UI/UX Pro Max hierarchy. Use for any UI, component, or design task.
tags:
  - domain/skills
  - artifact/command
  - source/claude-commands
---

# /design — Design Agent Launcher

This command activates **mega-designer** with the full design system stack.

## Mandatory Design Hierarchy

```
Level 1: Galaxy/Uiverse (3,000+ components)
         .claude/ui-design/ui-components-galaxy/
         → Search here FIRST

Level 2: shadcn/ui (accessible React components)
         .claude/ui-design/ui-components-shadcn/
         → If Galaxy doesn't have what you need

Level 3: UI/UX Pro Max (161 rules)
         .claude/ui-design/ui-rules/ui-ux-pro-max/
         → Apply these rules to EVERYTHING you create

Level 4: Custom build
         → Only if levels 1-3 have nothing suitable
         → Must document WHY custom was needed
```

## What this command does

1. Loads `CAPABILITIES.md` Rule #3 (design hierarchy)
2. Activates `mega-designer` agent (`.claude/agents/mega-designer.md`)
3. For visual tasks: uses Lightpanda to screenshot existing UI (NEVER Chrome)
4. For mockups/assets: uses `nano-banana` MCP for image generation
5. Applies all 161 UI/UX Pro Max rules to output

## Design system generator

```bash
python3 .claude/ui-design/ui-rules/ui-ux-pro-max/claude/skills/ui-ux-pro-max/scripts/search.py "<keywords>" --design-system -p "<ProjectName>"
```

## Use cases

- **Component creation**: "Build a pricing card with toggle"
- **UI audit**: "Review the login page UX"
- **Design system**: "Create a consistent button system"
- **Responsive layout**: "Make this navbar mobile-friendly"
- **Accessibility**: "Fix WCAG violations on the form"

## Critical rules (auto-applied)

- Contrast ratio ≥ 4.5:1 for normal text
- Touch targets ≥ 44×44pt
- Focus rings (2-4px) on ALL interactive elements
- NO emoji as icons — SVG only (Heroicons, Lucide)
- Mobile-first, breakpoints: 375/768/1024/1440
- Animations 150-300ms, respect prefers-reduced-motion
- Keyboard navigation for all interactive elements

## Image generation

```
mcp nano-banana generate "{description}"
```

## References

- `.claude/agents/mega-designer.md` — full agent spec (314 lines)
- `.claude/ui-design/ui-components-galaxy/` — 3,000+ components
- `.claude/ui-design/ui-components-shadcn/` — accessible React components
- `.claude/ui-design/ui-rules/ui-ux-pro-max/` — 161 rules + search CLI

## 🔗 Связи

- [[MOC - System]] — System commands
- [[MOC - Skills]] — Skills library

