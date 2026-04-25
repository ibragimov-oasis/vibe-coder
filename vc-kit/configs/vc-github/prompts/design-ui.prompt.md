---
name: design-ui
description: 'Design a UI component following the Vibe-Coder design hierarchy: Galaxy → shadcn → Impeccable → Taste-skill → Stitch → UI/UX Pro Max.'
agent: agent
---

Design and implement the described UI component using the Vibe-Coder design hierarchy:

1. **Check Galaxy** (`.claude/ui-design/ui-components-galaxy/`) — 3,000+ ready-made components
   → Does a similar component already exist? Use it as starting point.

2. **Check shadcn/ui** (`.claude/ui-design/ui-components-shadcn/`) — accessible React components
   → Any matching accessible component?

3. **Apply Impeccable** (`.claude/ui-design/ui-impeccable/`) — anti-slop detection
   - NO gray text on white
   - NO Inter font as default
   - NO purple gradients
   - NO nested cards
   - NO bounce easing

4. **Apply design rules** from UI/UX Pro Max:
   - Contrast ≥ 4.5:1 for text
   - Touch targets ≥ 44×44pt
   - Mobile-first breakpoints: 375/768/1024/1440
   - Animations 150-300ms with ease-out
   - `prefers-reduced-motion` respected

5. **Verify accessibility**: ARIA labels, focus rings, keyboard navigation

Full methodology: `.claude/agents/mega/mega-designer.md`
