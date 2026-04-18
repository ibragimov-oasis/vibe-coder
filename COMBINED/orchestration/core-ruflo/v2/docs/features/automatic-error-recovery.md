---
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-ruflo
---

# Automatic Error Recovery

Claude-Flow v2.7.35+ includes intelligent automatic error recovery that handles common installation and initialization issues without manual intervention.

## Overview

The error recovery system automatically detects and fixes:

- ✅ **npm/npx cache errors** (ENOTEMPTY, better-sqlite3 issues)
- ✅ **WSL-specific problems** (Windows Subsystem for Linux)
- ✅ **Database initialization failures** (SQLite fallback to JSON)
- ✅ **Dependency installation issues**
- ✅ **Permission and file locking problems**

## How It Works

### 1. Error Detection

The system automatically detects common error patterns:

```typescript
// Detects npm cache errors
if (error.includes('ENOTEMPTY') && error.includes('npm')) {
  // Automatic recovery triggered
}

// Detects better-sqlite3 issues
if (error.includes('better-sqlite3')) {
  // Automatic recovery triggered
}
```

### 2. Automatic Recovery Actions

When an error is detected, the system:

1. **Cleans npm/npx cache** (`npm cache clean --force`)
2. **Removes corrupted cache directories** (`~/.npm/_npx`)
3. **Fixes file permissions** (WSL-specific)
4. **Applies WSL optimizations** (if running on WSL)
5. **Retries the operation** with exponential backoff

### 3. Retry Logic

```typescript
// Automatic retry with backoff
retryWithRecovery(operation, {
  maxRetries: 5,        // Try up to 5 times
  delay: 1000,          // Start with 1s delay
  exponentialBackoff: true  // 1s, 2s, 4s, 8s, 16s
});
```

### 4. Intelligent Fallback

If SQLite continues to fail:

```typescript
// Automatic fallback to JSON storage
if (sqliteInitFails && retries > maxRetries) {
  console.log('🔄 Switching to JSON storage...');
  switchToJSONProvider();
}
```

## Using Error Recovery

### Automatic (Default)

```bash
# Standard initialization with automatic recovery
npx claude-flow@alpha init

# Force mode with extended retries (5 attempts)
npx claude-flow@alpha init --force
```

### Manual Recovery Commands

For advanced users, manual recovery tools are also available:

```bash
# Clean npm cache manually
npm cache clean --force
rm -rf ~/.npm/_npx

# Check WSL environment
npx claude-flow@alpha diagnose --wsl

# Verify dependencies
npx claude-flow@alpha verify --deps
```

## Recovery Process Flow

```
┌─────────────────────────┐
│  Initialize Command     │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Detect WSL? Apply Fixes│
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Run Initialization     │
└───────────┬─────────────┘
            │
            ▼
      Error Detected?
            │
    ┌───────┴───────┐
    │               │
   Yes              No
    │               │
    ▼               ▼
┌─────────────┐  Success!
│ Is Npm Cache│
│   Error?    │
└─────┬───────┘
      │
     Yes
      │
      ▼
┌─────────────────────────┐
│ Clean npm/npx cache     │
│ Fix permissions         │
│ Apply WSL optimizations │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Retry with Backoff     │
│  (Attempt N/5)          │
└───────────┬─────────────┘
            │
            ▼
      Max Retries?
            │
    ┌───────┴───────┐
    │               │
   Yes              No
    │               │
    ▼               ▼
┌─────────────┐  Try Again
│ Fallback to │
│ JSON Storage│
└─────────────┘
```

## WSL-Specific Recovery

### Automatic WSL Detection

```typescript
// Automatic WSL detection
if (process.platform === 'linux') {
  const isWSL = fs.readFileSync('/proc/version', 'utf8')
    .toLowerCase()
    .includes('microsoft');

  if (isWSL) {
    applyWSLOptimizations();
  }
}
```

### WSL Optimizations Applied

1. **Cache cleanup** with force flags
2. **Permission fixes** (`chmod -R 755 ~/.npm`)
3. **Filesystem warnings** (running from `/mnt/c/`)
4. **Build tools check** (gcc, python3)

## Configuration

### Retry Settings

```typescript
// In your code or configuration
export interface RetryOptions {
  maxRetries?: number;      // Default: 3 (5 with --force)
  delay?: number;           // Default: 1000ms
  exponentialBackoff?: boolean;  // Default: true
  cleanupFn?: () => Promise<void>;  // Custom cleanup
}
```

### Error Recovery Settings

```json
// .claude-flow/config.json
{
  "errorRecovery": {
    "enabled": true,
    "maxRetries": 5,
    "cleanCacheOnError": true,
    "wslOptimizations": true,
    "fallbackToJSON": true
  }
}
```

## Logging and Debugging

### Recovery Log Output

```bash
npx claude-flow@alpha init --force

🔍 WSL environment detected
✅ WSL environment optimized

📁 Phase 1: Creating directory structure...
⚠️  Detected npm cache error (attempt 1/5)
🧹 Cleaning npm cache...
✅ npm cache cleaned
🗑️  Removing npx cache: /home/user/.npm/_npx
✅ npx cache removed
✅ npm directory permissions fixed
✅ Cache cleaned, retrying...

🔄 Retry attempt 1 after error recovery...
✅ Recovered from error, retrying initialization...

📁 Phase 1: Creating directory structure...
⚙️  Phase 2: Creating configuration...
🎉 Project initialized successfully!
```

### Debug Mode

```bash
# Enable verbose error recovery logging
DEBUG=claude-flow:error-recovery npx claude-flow@alpha init --force
```

## API Usage

### Programmatic Error Recovery

```typescript
import { errorRecovery } from 'claude-flow/utils/error-recovery';

// Check if error is recoverable
if (errorRecovery.isNpmCacheError(error)) {
  // Clean cache
  await errorRecovery.cleanNpmCache();

  // Retry operation
  await errorRecovery.retryWithRecovery(myOperation, {
    maxRetries: 5,
    delay: 1000
  });
}
```

### Custom Recovery Functions

```typescript
// Custom cleanup function
await errorRecovery.retryWithRecovery(
  async () => {
    return await myOperation();
  },
  {
    maxRetries: 3,
    cleanupFn: async () => {
      // Custom cleanup logic
      await fs.remove('./temp-files');
      await clearCustomCache();
    }
  }
);
```

## Performance Impact

Error recovery adds minimal overhead:

- **No overhead** when no errors occur
- **~500ms** for cache cleanup (when needed)
- **1-2s total** for retry with backoff
- **Faster overall** than manual troubleshooting

## Troubleshooting

### Recovery Still Failing?

1. **Check WSL version**: Use WSL2 (not WSL1)
   ```bash
   wsl --list --verbose
   wsl --set-version Ubuntu 2
   ```

2. **Install build tools**:
   ```bash
   sudo apt-get update
   sudo apt-get install -y build-essential python3
   ```

3. **Use WSL filesystem** (not `/mnt/c/`):
   ```bash
   cd ~/projects  # Good
   cd /mnt/c/Users/name/project  # Bad
   ```

4. **Manual cache cleanup**:
   ```bash
   sudo npm cache clean --force
   sudo rm -rf ~/.npm
   ```

## Related Documentation

- [WSL Troubleshooting Guide](../troubleshooting/wsl-better-sqlite3-error.md)
- [Installation Guide](../setup/installation.md)
- [Configuration Reference](../reference/configuration.md)

## Changelog

### v2.7.35
- ✅ Added automatic error recovery system
- ✅ WSL-specific error detection and fixes
- ✅ Intelligent retry with exponential backoff
- ✅ Automatic fallback to JSON storage
- ✅ npm/npx cache auto-cleanup

---

**Need Help?** Report issues at https://github.com/ruvnet/claude-flow/issues

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration hub
- [[orchestration/ruflo]] — RuFlo
- [[000 - Map of Maps]] — Map of Maps

