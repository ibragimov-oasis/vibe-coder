#!/usr/bin/env node
// auto-memory-hook.mjs — Vibe-Coder Memory Sync Hook
// Imports context at session start, syncs learnings at session end
// Integrates with local storage AND prompts AI to use Supermemory MCP

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const PROJECT_DIR = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const ACTION = process.argv[2] || 'import';
const MEMORY_DIR = join(PROJECT_DIR, '.claude', '.memory');

function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function loadLocalContext() {
  const contextFile = join(MEMORY_DIR, 'context.json');
  try {
    if (existsSync(contextFile)) {
      return JSON.parse(readFileSync(contextFile, 'utf-8'));
    }
  } catch {}
  return { learnings: [], patterns: [], lastSync: null };
}

function saveLocalContext(ctx) {
  ensureDir(MEMORY_DIR);
  writeFileSync(join(MEMORY_DIR, 'context.json'), JSON.stringify(ctx, null, 2));
}

function importContext() {
  // At session start: load local context AND remind AI to check Supermemory
  const ctx = loadLocalContext();
  
  const output = {
    memory_status: {
      local_learnings: ctx.learnings.length,
      local_patterns: ctx.patterns.length,
      last_sync: ctx.lastSync || 'never',
    },
    instructions: [
      'IMPORTANT: Also check long-term memory before starting work:',
      '  → mcp supermemory search "<current task keywords>"',
      '  → mcp openviking read (if available)',
    ],
  };

  if (ctx.learnings.length > 0) {
    const recent = ctx.learnings.slice(-5);
    output.recent_learnings = recent.map(l => l.summary);
  }

  console.log(JSON.stringify(output));
}

function syncLearnings() {
  // At session end/stop: save locally AND remind AI to save to Supermemory
  const stateFile = join(PROJECT_DIR, '.claude', '.session-state.json');
  
  try {
    if (!existsSync(stateFile)) return;
    
    const session = JSON.parse(readFileSync(stateFile, 'utf-8'));
    const ctx = loadLocalContext();
    
    // Auto-extract a learning from the session
    if (session.filesChanged && session.filesChanged.length > 0) {
      const learning = {
        summary: `Modified ${session.filesChanged.length} files: ${session.filesChanged.slice(0, 5).join(', ')}${session.filesChanged.length > 5 ? '...' : ''}`,
        timestamp: new Date().toISOString(),
        filesCount: session.filesChanged.length,
        tasksCompleted: session.tasksCompleted || 0,
      };
      
      ctx.learnings.push(learning);
      
      // Keep only last 100 learnings
      if (ctx.learnings.length > 100) {
        ctx.learnings = ctx.learnings.slice(-100);
      }
      
      ctx.lastSync = new Date().toISOString();
      saveLocalContext(ctx);
      
      // Output sync instruction for AI
      const output = {
        memory_sync: {
          action: 'Session ending — save key insights to long-term memory',
          local_saved: true,
          files_changed: session.filesChanged.length,
          tasks_completed: session.tasksCompleted || 0,
        },
        instructions: [
          'IMPORTANT: Save key insights to Supermemory before session ends:',
          '  → mcp supermemory add "<session summary>" tags:[<domain>]',
          '  → mcp openviking write "<what changed and why>" (if available)',
        ],
      };
      
      console.log(JSON.stringify(output));
    }
  } catch {}
}

// --- Dispatch ---
switch (ACTION) {
  case 'import':
    importContext();
    break;
  case 'sync':
    syncLearnings();
    break;
  default:
    break;
}
