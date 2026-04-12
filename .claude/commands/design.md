---
description: Activate the design agent with full Galaxy + shadcn + UI/UX Pro Max hierarchy. Use for any UI, component, or design task.
---

# /design — Design Agent Launcher

This command activates **mega-designer** with the full design system stack.

## Mandatory Design Hierarchy

```
Level 1: Galaxy/Uiverse (3,000+ components)
         COMBINED/ui-design/galaxy/
         → Search here FIRST

Level 2: shadcn/ui
         COMBINED/ui-design/shadcn-ui/
         → If Galaxy doesn't have what you need

Level 3: UI/UX Pro Max (161 rules)
         COMBINED/ui-design/ui-ux-pro-max/
         → Apply these rules to EVERYTHING

Level 4: Custom build
         → Only if levels 1-3 have nothing suitable
         → Must document WHY custom was needed
```

## What this command does

1. Loads `CAPABILITIES.md` Rule #3 (design hierarchy)
2. Activates `mega-designer` agent (`.claude/agents/mega-designer.md`)
3. For visual tasks: uses Lightpanda to screenshot existing UI
4. For mockups/assets: uses `nano-banana` MCP for image generation
5. Applies all 161 UI/UX Pro Max rules to output

## Use cases

- **Component creation**: "Build a pricing card with toggle"
- **UI audit**: "Review the login page UX"
- **Design system**: "Create a consistent button system"
- **Responsive layout**: "Make this navbar mobile-friendly"
- **Accessibility**: "Fix WCAG violations on the form"

## Accessibility checklist (auto-applied)

- Keyboard navigation
- ARIA labels
- Colour contrast ≥ 4.5:1
- Focus ring visible
- `prefers-reduced-motion` respected

## Image generation

For mockups and visual assets:
```
Uses: mcp nano-banana generate "{description}"
Powered by Gemini
```

## References

- `.claude/agents/mega-designer.md` — full agent spec
- `COMBINED/ui-design/galaxy/` — component library
- `COMBINED/ui-design/shadcn-ui/` — accessible components
- `COMBINED/ui-design/ui-ux-pro-max/` — 161 design rules
