---
name: requesting-code-review
description: "Use when completing tasks, implementing major features, or before merging. Validates work meets requirements through systematic review process with dispatch of reviewer subagents."
version: 1.0.0
category: software-development
tags: [code-review, quality, validation, workflow, review]
sources:
  - name: superpowers
    repo: https://github.com/obra/superpowers
    path: skills/requesting-code-review/SKILL.md
  - name: hermes-agent
    repo: https://github.com/anthropics/hermes-agent
    path: skills/software-development/requesting-code-review/SKILL.md
  - name: antigravity-awesome-skills
    repo: https://github.com/anthropics/antigravity-awesome-skills
    path: skills/requesting-code-review/SKILL.md
related_skills: [subagent-driven-development, writing-plans, test-driven-development]
---

# Requesting Code Review

Dispatch a reviewer subagent to catch issues before they cascade. The reviewer gets precisely crafted context for evaluation — never your session's history. This keeps the reviewer focused on the work product, not your thought process, and preserves your own context for continued work.

**Core principle:** Fresh perspective finds issues you'll miss. Review early, review often.

## When to Request Review

**Mandatory:**
- After each task in subagent-driven development
- After completing a major feature
- Before merge to main
- After bug fixes

**Optional but valuable:**
- When stuck (fresh perspective)
- Before refactoring (baseline check)
- After complex logic implementation
- When touching critical code (auth, payments, data)

**Never skip because:**
- "It's simple" — simple bugs compound
- "I'm in a hurry" — reviews save time
- "I tested it" — you have blind spots

## Review Process

### Step 1: Self-Review First

Before dispatching a reviewer, check yourself:

- [ ] Code follows project conventions
- [ ] All tests pass
- [ ] No debug print statements left
- [ ] No hardcoded secrets or credentials
- [ ] Error handling in place
- [ ] Commit messages are clear

```bash
# Run full test suite
pytest tests/ -q

# Check for debug code
search_files("print(", path="src/", file_glob="*.py")
search_files("console.log", path="src/", file_glob="*.js")

# Check for TODOs
search_files("TODO|FIXME|HACK", path="src/")
```

### Step 2: Gather Context

```bash
# Get git SHAs
BASE_SHA=$(git rev-parse HEAD~1)  # or origin/main
HEAD_SHA=$(git rev-parse HEAD)

# Changed files
git diff --name-only HEAD~1

# Diff summary
git diff --stat HEAD~1

# Recent commits
git log --oneline -5
```

### Step 3: Dispatch Reviewer Subagent

Use `delegate_task` to dispatch a focused reviewer:

```python
delegate_task(
    goal="Review implementation for correctness and quality",
    context="""
    WHAT WAS IMPLEMENTED:
    [Brief description of the feature/fix]

    ORIGINAL REQUIREMENTS:
    [From plan, issue, or user request]

    FILES CHANGED:
    - src/models/user.py (added User class)
    - src/auth/login.py (added login endpoint)
    - tests/test_auth.py (added 8 tests)

    REVIEW CHECKLIST:
    - [ ] Correctness: Does it do what it should?
    - [ ] Edge cases: Are they handled?
    - [ ] Error handling: Is it adequate?
    - [ ] Code quality: Clear names, good structure?
    - [ ] Test coverage: Are tests meaningful?
    - [ ] Security: Any vulnerabilities?
    - [ ] Performance: Any obvious issues?

    OUTPUT FORMAT:
    - Summary: [brief assessment]
    - Critical Issues: [must fix — blocks merge]
    - Important Issues: [should fix before merge]
    - Minor Issues: [nice to have]
    - Strengths: [what was done well]
    - Verdict: APPROVE / REQUEST_CHANGES
    """,
    toolsets=['file']
)
```

### Step 4: Act on Feedback

**Critical Issues (block merge):**
- Security vulnerabilities
- Broken functionality
- Data loss risk
- Test failures
- **Action:** Fix immediately before proceeding

**Important Issues (should fix):**
- Missing edge case handling
- Poor error messages
- Unclear code
- Missing tests
- **Action:** Fix before merge if possible

**Minor Issues (nice to have):**
- Style preferences
- Refactoring suggestions
- Documentation improvements
- **Action:** Note for later or quick fix

**If reviewer is wrong:**
- Push back with technical reasoning
- Show code/tests that prove it works
- Request clarification

## Review Dimensions

### Correctness
- Does it implement the requirements?
- Are there logic errors?
- Do edge cases work?
- Are there race conditions?

### Code Quality
- Is code readable?
- Are names clear and descriptive?
- Is it too complex? (Functions >20 lines = smell)
- Is there duplication?

### Testing
- Are there meaningful tests?
- Do they cover edge cases?
- Do they test behavior, not implementation?
- Do all tests pass?

### Security
- Any injection vulnerabilities?
- Proper input validation?
- Secrets handled correctly?
- Access control in place?

### Performance
- Any N+1 queries?
- Unnecessary computation in loops?
- Memory leaks?
- Missing caching opportunities?

## Review Output Format

Standard format for reviewer subagent output:

```markdown
## Review Summary

**Assessment:** [Brief overall assessment]
**Verdict:** APPROVE / REQUEST_CHANGES

---

## Critical Issues (Fix Required)

1. **[Issue title]**
   - Location: `file.py:45`
   - Problem: [Description]
   - Suggestion: [How to fix]

## Important Issues (Should Fix)

1. **[Issue title]**
   - Location: `file.py:67`
   - Problem: [Description]
   - Suggestion: [How to fix]

## Minor Issues (Optional)

1. **[Issue title]**
   - Suggestion: [Improvement idea]

## Strengths

- [What was done well]
```

## Integration with Workflows

### subagent-driven-development
Review after EACH task — this is the two-stage review:
1. Spec compliance review (does it match the plan?)
2. Code quality review (is it well-built?)
3. Fix issues from either review
4. Proceed to next task only when both approve

### test-driven-development
Review verifies:
- Tests were written first (RED-GREEN-REFACTOR)?
- Tests are meaningful (not just asserting True)?
- Edge cases covered?
- All tests pass?

### writing-plans
Review validates:
- Implementation matches the plan?
- All tasks completed?
- Quality standards met?

### Ad-Hoc Development
- Review before merge
- Review when stuck
- Review after each batch (3 tasks)

## Quality Gates

**Must pass before merge:**
- [ ] No critical issues
- [ ] All tests pass
- [ ] Review verdict: APPROVE
- [ ] Requirements met

**Should pass before merge:**
- [ ] No important issues
- [ ] Documentation updated
- [ ] Performance acceptable

## Red Flags

**Never:**
- Skip review because "it's simple"
- Ignore Critical issues
- Proceed with unfixed Important issues
- Argue with valid technical feedback without evidence

## Remember

```
Review early
Review often
Be specific
Fix critical issues first
Quality over speed
```

**A good review catches what you missed.**

See template at: `requesting-code-review/code-reviewer.md`
