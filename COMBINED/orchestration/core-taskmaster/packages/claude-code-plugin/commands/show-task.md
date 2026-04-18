---
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-taskmaster
---

Show detailed task information with rich context and insights.

Arguments: $ARGUMENTS

## Enhanced Task Display

Parse arguments to determine what to show and how.

### 1. **Smart Task Selection**

Based on $ARGUMENTS:
- Number → Show specific task with full context
- "current" → Show active in-progress task(s)
- "next" → Show recommended next task
- "blocked" → Show all blocked tasks with reasons
- "critical" → Show critical path tasks
- Multiple IDs → Comparative view

### 2. **Contextual Information**

For each task, intelligently include:

**Core Details**
- Full task information (id, title, description, details)
- Current status with history
- Test strategy and acceptance criteria
- Priority and complexity analysis

**Relationships**
- Dependencies (what it needs)
- Dependents (what needs it)
- Parent/subtask hierarchy
- Related tasks (similar work)

**Time Intelligence**
- Created/updated timestamps
- Time in current status
- Estimated vs actual time
- Historical completion patterns

### 3. **Visual Enhancements**

```
📋 Task #45: Implement User Authentication
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: 🟡 in-progress (2 hours)
Priority: 🔴 High | Complexity: 73/100

Dependencies: ✅ #41, ✅ #42, ⏳ #43 (blocked)
Blocks: #46, #47, #52

Progress: ████████░░ 80% complete

Recent Activity:
- 2h ago: Status changed to in-progress
- 4h ago: Dependency #42 completed
- Yesterday: Task expanded with 3 subtasks
```

### 4. **Intelligent Insights**

Based on task analysis:
- **Risk Assessment**: Complexity vs time remaining
- **Bottleneck Analysis**: Is this blocking critical work?
- **Recommendation**: Suggested approach or concerns
- **Similar Tasks**: How others completed similar work

### 5. **Action Suggestions**

Context-aware next steps:
- If blocked → Show how to unblock
- If complex → Suggest expansion
- If in-progress → Show completion checklist
- If done → Show dependent tasks ready to start

### 6. **Multi-Task View**

When showing multiple tasks:
- Common dependencies
- Optimal completion order
- Parallel work opportunities
- Combined complexity analysis

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration hub
- [[orchestration/task-master]] — Task-Master
- [[000 - Map of Maps]] — Map of Maps

