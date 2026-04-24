---
name: plan
description: 'Create a comprehensive implementation plan using GSD spec-driven methodology + Matt Pocock PRD skills.'
agent: agent
# model: removed-for-compatibility
---

Create a detailed implementation plan for the described feature/task:

1. **Understand**: What exactly does the user want? Clarify ambiguities.
2. **Research**: Check `COMBINED/skills/skills-planning/` for relevant templates:
   - `write-a-prd/` — PRD creation framework
   - `prd-to-plan/` — Convert PRD to executable plan
   - `grill-me/` — Challenge your own assumptions
3. **Decompose**: Break into bite-sized tasks (2-5 minutes each, per Superpowers)
4. **Dependencies**: Map task dependencies and execution order
5. **Success criteria**: Define what "done" looks like for each task
6. **Risks**: Identify potential blockers and mitigation strategies

Output format:
```markdown
## Overview
[1-2 sentence summary]

## Tasks
- [ ] Task 1: [description] (estimated: X min)
- [ ] Task 2: [description] (estimated: X min)
  - depends on: Task 1
...

## Success Criteria
- [ ] [measurable criterion]
...

## Risks
- [risk]: [mitigation]
```

Full methodology: `COMBINED/agents/mega/mega-planner.md`
