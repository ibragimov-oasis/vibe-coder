---
name: optimize
description: 'Analyze and optimize code for performance using code-review-graph blast-radius analysis.'
agent: agent
---

Analyze the current code for performance issues and optimize:

1. **Profile**: Identify the hottest code paths
2. **Measure**: Get baseline metrics before changes
3. **Analyze**: Use code-review-graph for blast-radius: `uv run code-review-graph serve`
4. **Optimize** (in order of impact):
   - Algorithmic improvements (O(n²) → O(n log n))
   - Remove N+1 query patterns
   - Add caching for repeated computations
   - Lazy load non-critical resources
   - Code split by route/feature
5. **Verify**: Measure again, confirm improvement
6. **No regressions**: Run all tests after optimization

## Core Web Vitals Targets
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

Karpathy principle: Write the MINIMUM code, don't over-optimize prematurely.
