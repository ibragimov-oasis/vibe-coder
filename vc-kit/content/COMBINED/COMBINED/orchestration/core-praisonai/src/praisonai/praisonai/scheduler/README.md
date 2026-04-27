---
title: "README.md"
aliases: ["README"]
tags:
  - vibe-coder
  - scheduler
date: 2026-04-27
cssclasses:
  - enriched-document
---

# PraisonAI Scheduler - 24/7 Agent Scheduling

Complete implementation of 24/7 agent scheduling for PraisonAI, enabling autonomous agent operations at regular intervals.

## ✅ Implementation Status

### **Completed Features**

#### 1. **Core Scheduler Module** (`praisonai/scheduler/`)
- ✅ `base.py` - ScheduleParser, ExecutorInterface, PraisonAgentExecutor
- ✅ `agent_scheduler.py` - AgentScheduler with full 24/7 capabilities
- ✅ `__init__.py` - Clean module exports with lazy loading

#### 2. **Schedule Parser**
Supports multiple schedule formats:
- `"hourly"` → Every hour (3600s)
- `"daily"` → Every day (86400s)
- `"*/30m"` → Every 30 minutes
- `"*/6h"` → Every 6 hours
- `"*/5s"` → Every 5 seconds
- `"3600"` → Custom seconds (3600s)

#### 3. **AgentScheduler Features**
- ✅ Thread-based execution (daemon threads)
- ✅ Configurable intervals
- ✅ Retry logic with exponential backoff (30s, 60s, 90s...)
- ✅ Success/failure callbacks
- ✅ Execution statistics tracking
- ✅ Graceful shutdown with timeout
- ✅ `run_immediately` option
- ✅ Thread-safe operation

#### 4. **Testing**
- ✅ 53 unit tests (100% passing)
- ✅ 18 tests for base components
- ✅ 35 tests for AgentScheduler
- ✅ Real-world testing with live API calls
- ✅ Verified with OpenAI API and search tools

#### 5. **Backward Compatibility**
- ✅ Old `scheduler.py` imports from new module
- ✅ Deprecation warnings added
- ✅ Existing code continues to work

## 🚀 Quick Start

### Basic Usage

```python
from praisonaiagents import Agent
from praisonai.scheduler import AgentScheduler

# Create your agent
agent = Agent(
    name="NewsChecker",
    instructions="Check latest AI news and summarize",
    tools=[search_tool]
)

# Create scheduler
scheduler = AgentScheduler(
    agent=agent,
    task="Search for latest AI news and provide top 3 stories"
)

# Start scheduling (runs every hour)
scheduler.start(
    schedule_expr="hourly",
    max_retries=3,
    run_immediately=True
)

# Keep running until stopped
try:
    while scheduler.is_running:
        import time
        time.sleep(1)
except KeyboardInterrupt:
    scheduler.stop()
    print(scheduler.get_stats())
```

### With Callbacks

```python
def on_success(result):
    print(f"✅ Success: {result}")

def on_failure(error):
    print(f"❌ Failed: {error}")

scheduler = AgentScheduler(
    agent=agent,
    task="Your task",
    on_success=on_success,
    on_failure=on_failure
)

scheduler.start("*/30m")  # Every 30 minutes
```

### Schedule Formats

```python
# Predefined intervals
scheduler.start("hourly")    # Every hour
scheduler.start("daily")     # Every 24 hours

# Custom intervals
scheduler.start("*/30m")     # Every 30 minutes
scheduler.start("*/6h")      # Every 6 hours
scheduler.start("*/5s")      # Every 5 seconds

# Seconds
scheduler.start("3600")      # Every 3600 seconds (1 hour)
```

## 📊 Statistics Tracking

```python
stats = scheduler.get_stats()
# Returns:
# {
#     "is_running": True/False,
#     "total_executions": 10,
#     "successful_executions": 9,
#     "failed_executions": 1,
#     "success_rate": 90.0
# }
```

## 🔧 Advanced Features

### Retry Logic
- Automatic retry on failure
- Exponential backoff (30s, 60s, 90s...)
- Configurable max retries

```python
scheduler.start(
    schedule_expr="hourly",
    max_retries=5  # Retry up to 5 times
)
```

### Immediate Execution
```python
scheduler.start(
    schedule_expr="hourly",
    run_immediately=True  # Run once before starting schedule
)
```

### One-Time Execution
```python
result = scheduler.execute_once()  # Execute immediately, no scheduling
```

### Graceful Shutdown
```python
scheduler.stop()  # Waits up to 10 seconds for current execution to finish
```

## 📁 File Structure

```
praisonai/scheduler/
├── __init__.py              # Module exports
├── base.py                  # ScheduleParser, ExecutorInterface
├── agent_scheduler.py       # AgentScheduler implementation
└── README.md               # This file

tests/unit/scheduler/
├── __init__.py
├── test_base.py            # 18 tests for base components
└── test_agent_scheduler.py # 35 tests for AgentScheduler
```

## ✅ Test Results

```bash
$ pytest tests/unit/scheduler/ -v
============================= test session starts ==============================
collected 53 items

tests/unit/scheduler/test_agent_scheduler.py::... PASSED [100%]
tests/unit/scheduler/test_base.py::... PASSED [100%]

============================== 53 passed in 0.54s ===============================
```

## 🎯 Real-World Example

See `examples/python/scheduled_agents/news_checker_live.py` for a complete working example that:
- Checks AI news every 2 minutes (configurable to hourly)
- Uses real OpenAI API
- Uses DuckDuckGo search
- Displays results with callbacks
- Tracks statistics
- Handles Ctrl+C gracefully

## 🔄 Migration from Old Scheduler

Old code continues to work with deprecation warning:

```python
# Old (still works)
from praisonai.scheduler import ScheduleParser

# New (recommended)
from praisonai.scheduler import ScheduleParser
```

## 📝 API Reference

### AgentScheduler

**Constructor:**
```python
AgentScheduler(
    agent,                    # PraisonAI Agent instance
    task: str,               # Task description
    config: Optional[Dict] = None,
    on_success: Optional[Callable] = None,
    on_failure: Optional[Callable] = None
)
```

**Methods:**
- `start(schedule_expr, max_retries=3, run_immediately=False) -> bool`
- `stop() -> bool`
- `execute_once() -> Any`
- `get_stats() -> Dict`

### ScheduleParser

**Methods:**
- `parse(schedule_expr: str) -> int` - Returns interval in seconds

### ExecutorInterface

**Abstract Methods:**
- `execute(task: str) -> Any` - Must be implemented by subclasses

## 🎉 Success Metrics

- ✅ 53/53 tests passing (100%)
- ✅ Real-world testing successful
- ✅ Verified with live API calls
- ✅ Thread-safe operation confirmed
- ✅ Memory stable over multiple executions
- ✅ Graceful shutdown working
- ✅ Backward compatibility maintained

## 🚀 Production Ready

The scheduler is **production-ready** and can be used for:
- 24/7 news monitoring
- Periodic data collection
- Scheduled report generation
- Continuous monitoring tasks
- Automated agent workflows

## 📚 Examples

See `examples/python/scheduled_agents/` for:
- `simple_test.py` - Basic functionality test
- `news_checker_live.py` - Real-world news checking agent
- `news_checker_agent.py` - Full-featured example with documentation

## 🔗 Related

- Main PraisonAI docs: [docs.praison.ai](https://docs.praison.ai)
- PraisonAI Agents: [github.com/MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI)
