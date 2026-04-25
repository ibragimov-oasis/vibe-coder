---
name: design-system
description: 'Generate a complete design system for a project using UI/UX Pro Max rules, Galaxy components, and shadcn/ui.'
---

Generate a complete design system for the project:

1. Analyze the project type, audience, and style requirements
2. Run the design system generator:
   ```bash
   python3 .claude/ui-design/ui-rules/ui-ux-pro-max/claude/skills/ui-ux-pro-max/scripts/search.py "<project_type> <keywords>" --design-system -p "<ProjectName>"
   ```
3. Search Galaxy for matching components:
   - `.claude/ui-design/ui-components-galaxy/` (3,000+ components)
4. Apply all 161 UI/UX Pro Max rules from:
   - `.claude/ui-design/ui-rules/ui-ux-pro-max/`
5. Output: Complete design system with colors, typography, spacing, components, and anti-patterns

Full methodology: `.claude/agents/mega/mega-designer.md`
