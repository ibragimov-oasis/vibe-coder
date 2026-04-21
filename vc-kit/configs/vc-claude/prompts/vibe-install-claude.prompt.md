Install `vibe-coder` in this repository from `vc-kit` and validate activation for Claude Code.

Do exactly:
1) `bash vc-kit/install.sh --dry-run`
2) `bash vc-kit/install.sh`
3) verify required files:
   - `.claude/CLAUDE.md`
   - `.github/copilot-instructions.md`
   - `.antigravity/AGENTS.md`
4) verify optional supporting files:
   - `.cursor/`, `.codex/`, `.gemini/`, `.cursorrules`, `.env.example`
5) show a short readiness report with:
   - created/merged/skipped/backed up paths
   - unresolved risks
   - final status READY/NOT READY

Use conflict policy:
- merge by default
- backup when overwriting user config is risky
- skip only non-critical targets

Canonical source count:
- 54 repositories (31 original + 23 new)

