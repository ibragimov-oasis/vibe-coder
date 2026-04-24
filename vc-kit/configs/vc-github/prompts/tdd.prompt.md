---
name: tdd
description: 'Write tests first using RED-GREEN-REFACTOR TDD cycle from Superpowers workflow.'
agent: agent
# model: removed-for-compatibility
---

Implement the described feature using strict TDD (Test-Driven Development):

## RED Phase
1. Write a failing test that describes the expected behavior
2. Run the test to confirm it fails for the RIGHT reason
3. The test name should read like a specification: `should [expected] when [condition]`

## GREEN Phase
4. Write the MINIMUM code to make the test pass
5. Don't optimize — just make it work
6. Run the test to confirm it passes

## REFACTOR Phase
7. Clean up the code while keeping tests green
8. Remove duplication, improve naming, simplify
9. Run ALL tests to confirm nothing broke

## Rules
- One assertion per test (when practical)
- Test behavior, not implementation
- Mock external dependencies, not internal modules
- Follow testing pyramid: 70% unit, 20% integration, 10% e2e

Full methodology: `COMBINED/agents/mega/mega-tester.md`
Source: `COMBINED/orchestration/superpowers/` (Step 5: test-driven-development)
