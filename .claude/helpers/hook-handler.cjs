#!/usr/bin/env node
// hook-handler.cjs — Claude Code hook handler for Vibe-Coder Arsenal
// Handles pre-tool, post-tool, session, compact, and pipeline hooks

const fs = require('fs');
const path = require('path');

const PROJECT_DIR = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const HOOK_ACTION = process.argv[2] || 'unknown';

// State file for session persistence
const STATE_FILE = path.join(PROJECT_DIR, '.claude', '.session-state.json');

function loadState() {
  try {
    if (fs.existsSync(STATE_FILE)) {
      return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
    }
  } catch {}
  return {
    sessionId: null,
    startTime: null,
    filesChanged: [],
    toolsUsed: [],
    agentsSpawned: [],
    tasksCompleted: 0,
  };
}

function saveState(state) {
  try {
    fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
  } catch {}
}

function getTimestamp() {
  return new Date().toISOString();
}

// --- Hook Handlers ---

function handlePreBash() {
  // Pre-Bash hook: log command execution
  const state = loadState();
  state.toolsUsed.push({ tool: 'Bash', time: getTimestamp() });
  saveState(state);
}

function handlePostEdit() {
  // Post-edit hook: track changed files
  const state = loadState();
  const toolInput = process.env.CLAUDE_TOOL_INPUT;
  if (toolInput) {
    try {
      const input = JSON.parse(toolInput);
      if (input.file_path || input.path) {
        const filePath = input.file_path || input.path;
        if (!state.filesChanged.includes(filePath)) {
          state.filesChanged.push(filePath);
        }
      }
    } catch {}
  }
  saveState(state);
}

function handleRoute() {
  // UserPromptSubmit hook: output CAPABILITIES.md reminder
  const capsPath = path.join(PROJECT_DIR, 'CAPABILITIES.md');
  if (fs.existsSync(capsPath)) {
    // Emit a brief instruction for the model
    console.log(JSON.stringify({
      message: 'Remember: Read CAPABILITIES.md first. Use Lightpanda for web tasks. Check supermemory before starting.',
    }));
  }
}

function handleSessionRestore() {
  // SessionStart hook: restore or create session
  const state = loadState();
  if (!state.sessionId) {
    state.sessionId = `session-${Date.now()}`;
    state.startTime = getTimestamp();
    state.filesChanged = [];
    state.toolsUsed = [];
    state.agentsSpawned = [];
    state.tasksCompleted = 0;
  }
  saveState(state);
  
  // Remind about CAPABILITIES.md
  console.log(JSON.stringify({
    message: `Session ${state.sessionId} active. CAPABILITIES.md defines all rules and agents.`,
  }));
}

function handleSessionEnd() {
  // SessionEnd hook: persist session summary
  const state = loadState();
  state.endTime = getTimestamp();
  
  // Write session summary
  const summaryDir = path.join(PROJECT_DIR, '.claude', '.sessions');
  try {
    fs.mkdirSync(summaryDir, { recursive: true });
    const summaryFile = path.join(summaryDir, `${state.sessionId || 'unknown'}.json`);
    fs.writeFileSync(summaryFile, JSON.stringify({
      ...state,
      summary: {
        filesChanged: state.filesChanged.length,
        toolsUsed: state.toolsUsed.length,
        tasksCompleted: state.tasksCompleted,
        duration: state.startTime && state.endTime
          ? `${Math.round((new Date(state.endTime) - new Date(state.startTime)) / 60000)}min`
          : 'unknown',
      },
    }, null, 2));
  } catch {}
  
  // Reset state for next session
  saveState({
    sessionId: null,
    startTime: null,
    filesChanged: [],
    toolsUsed: [],
    agentsSpawned: [],
    tasksCompleted: 0,
  });
}

function handleStatus() {
  // SubagentStart hook: log agent spawn
  const state = loadState();
  state.agentsSpawned.push({ time: getTimestamp() });
  saveState(state);
}

function handlePostTask() {
  // TaskCompleted / TeammateIdle hook: increment counter
  const state = loadState();
  state.tasksCompleted++;
  saveState(state);
}

function handleCompact(type) {
  // PreCompact hook
  const state = loadState();
  console.log(JSON.stringify({
    message: `Compact (${type}): ${state.filesChanged.length} files changed, ${state.tasksCompleted} tasks done this session.`,
  }));
}

// --- Dispatch ---

switch (HOOK_ACTION) {
  case 'pre-bash':
    handlePreBash();
    break;
  case 'post-edit':
    handlePostEdit();
    break;
  case 'route':
    handleRoute();
    break;
  case 'session-restore':
    handleSessionRestore();
    break;
  case 'session-end':
    handleSessionEnd();
    break;
  case 'status':
    handleStatus();
    break;
  case 'post-task':
    handlePostTask();
    break;
  case 'compact-manual':
    handleCompact('manual');
    break;
  case 'compact-auto':
    handleCompact('auto');
    break;
  default:
    // Unknown action — silently exit
    break;
}
