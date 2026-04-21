#!/usr/bin/env node
// pipeline-trigger.cjs — Vibe-Coder Autonomous Pipeline Trigger
// Fires after TaskCompleted to instruct AI to run Hermes + Shannon
// This replaces the simple echo message with a structured pipeline instruction.

const fs = require('fs');
const path = require('path');

const PROJECT_DIR = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const STATE_FILE = path.join(PROJECT_DIR, '.claude', '.session-state.json');

function loadState() {
  try {
    if (fs.existsSync(STATE_FILE)) {
      return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
    }
  } catch {}
  return { filesChanged: [], tasksCompleted: 0 };
}

function classifyFiles(files) {
  const code = [];
  const docs = [];
  const config = [];

  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    if (['.md', '.txt', '.rst'].includes(ext)) {
      docs.push(f);
    } else if (['.json', '.yaml', '.yml', '.toml', '.env', '.mdc'].includes(ext)) {
      config.push(f);
    } else {
      code.push(f);
    }
  }

  return { code, docs, config };
}

function main() {
  const state = loadState();
  const files = state.filesChanged || [];
  const { code, docs, config } = classifyFiles(files);

  // Determine security scope
  const needsSecurity = code.length > 0;
  const securityScope = needsSecurity
    ? (code.length > 10 ? 'FULL' : 'TARGETED')
    : 'SKIP';

  const pipeline = {
    pipeline: 'Vibe-Coder_POST_TASK',
    mandatory: true,
    session: {
      tasksCompleted: state.tasksCompleted || 0,
      filesChanged: files.length,
      codeFiles: code.length,
      docFiles: docs.length,
      configFiles: config.length,
    },
    step_1_hermes: {
      action: 'SELF-LEARNING — Extract patterns from this task',
      instructions: [
        'Analyze what you just completed: what worked well? what was novel?',
        'If a reusable pattern was discovered, create a skill: COMBINED/skills/{domain}/{name}/SKILL.md',
        'Save key insights: mcp supermemory add "<topic>" <insights> tags:[<domain>]',
      ],
    },
    step_2_shannon: needsSecurity
      ? {
          action: `SECURITY AUDIT — ${securityScope} scan on ${code.length} code file(s)`,
          scope: securityScope,
          files_to_scan: code.slice(0, 20), // cap at 20 for sanity
          instructions: [
            'Read COMBINED/agents/mega/mega-security.md for methodology',
            'Static analysis: check for injection, XSS, auth bypass, hardcoded secrets',
            'If web-facing code changed: consider dynamic testing via Lightpanda',
            'Report any CRITICAL/HIGH vulnerabilities — fix before marking complete',
          ],
        }
      : {
          action: 'SKIP — No code files changed (docs/config only)',
          scope: 'SKIP',
          reason: 'Only documentation or configuration files were modified',
        },
  };

  // Output as structured JSON for Claude to parse
  console.log(JSON.stringify(pipeline));
}

main();
