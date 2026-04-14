#!/usr/bin/env node
// statusline.cjs — Claude Code status line for Vibe-Coder Arsenal
// Shows current session state, pipeline stage, and key metrics

const fs = require('fs');
const path = require('path');

const PROJECT_DIR = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const STATE_FILE = path.join(PROJECT_DIR, '.claude', '.session-state.json');

function getStatus() {
  let state = {
    filesChanged: [],
    toolsUsed: [],
    tasksCompleted: 0,
    agentsSpawned: [],
  };

  try {
    if (fs.existsSync(STATE_FILE)) {
      state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
    }
  } catch {}

  const parts = [];

  // Files changed
  const files = (state.filesChanged || []).length;
  if (files > 0) {
    parts.push(`📝 ${files} files`);
  }

  // Tasks completed
  const tasks = state.tasksCompleted || 0;
  if (tasks > 0) {
    parts.push(`✅ ${tasks} tasks`);
  }

  // Agents spawned
  const agents = (state.agentsSpawned || []).length;
  if (agents > 0) {
    parts.push(`🤖 ${agents} agents`);
  }

  // Pipeline indicator
  parts.push('🔧 Vibe-Coder');

  return parts.join(' | ');
}

// Output the status line
console.log(getStatus());
