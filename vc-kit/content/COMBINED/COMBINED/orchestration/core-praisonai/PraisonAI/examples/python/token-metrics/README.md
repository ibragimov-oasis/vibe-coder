---
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-praisonai
---

# Token Metrics Tracking Examples - SIMPLIFIED

This directory contains examples demonstrating the **simplified** token metrics tracking using just `Agent(metrics=True)`. 

## 🎯 Super Simple Usage

```python
from praisonaiagents import PraisonAIAgents, Agent, Task

# Just add metrics=True to any agent!
agent = Agent(
    name="My Agent",
    role="Assistant", 
    goal="Help users",
    backstory="You are helpful.",
    llm="gpt-4o-mini",
    metrics=True  # 🎯 That's it!
)

task = Task(
    description="Write a hello world message",
    expected_output="A friendly greeting",
    agent=agent
)

agents = PraisonAIAgents(agents=[agent], tasks=[task])
result = agents.run()  # Metrics auto-display at the end!
```

**Output includes automatic token usage summary!**

## 📁 Examples

### 01_basic_token_tracking.py
Shows the absolute simplest way to enable token tracking with a single agent.

### 02_session_metrics.py  
Demonstrates tracking across multiple agents in a workflow.

### 03_cost_estimation.py
Shows automatic cost estimation capabilities.

## 🔧 Advanced Usage (Optional)

If you need detailed programmatic access to metrics:

```python
# After agents.run(), you can still access:
summary = agents.get_token_usage_summary()
detailed = agents.get_detailed_token_report()
agents.display_token_usage()  # Manual display
```

## 💡 Benefits of the Simplified Approach

✅ **Zero Complexity**: Just add `metrics=True`  
✅ **Zero Performance Impact**: Same O(1) operations  
✅ **Auto-Display**: No manual method calls needed  
✅ **Backward Compatible**: Advanced methods still available  
✅ **Thread Safe**: Same robust implementation underneath  

## 🚀 Previous Complex Examples

The previous examples (04_telemetry_integration.py, 05_advanced_agent_integration.py) showed complex usage patterns. The new simplified approach achieves the same results with just one parameter!

**Old way** (complex):
```python
agents.run()
token_summary = agents.get_token_usage_summary()
if "error" not in token_summary:
    total_metrics = token_summary.get("total_metrics", {})
    print(f"Total Tokens: {total_metrics.get('total_tokens', 0):,}")
    # ... more complex code
```

**New way** (simple):
```python
agent = Agent(..., metrics=True)  # Just this!
agents.run()  # Auto-displays everything!
```

## 🎯 Perfect for Production

The simplified approach is ideal for:
- Quick token monitoring
- Cost optimization 
- Development and debugging
- Production monitoring
- CI/CD pipelines

No configuration needed - just add `metrics=True` and you're done!

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration systems
- [[orchestration/core-praisonai]] — core-praisonai

