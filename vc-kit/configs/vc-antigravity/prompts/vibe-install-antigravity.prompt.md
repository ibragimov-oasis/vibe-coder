Install `vibe-coder` from `vc-kit` and confirm interface readiness for Antigravity.

Execution order:
1. Run `bash vc-kit/install.sh --dry-run`
2. Run `bash vc-kit/install.sh`
3. Validate mandatory files:
   - `.antigravity/AGENTS.md`
   - `.claude/CLAUDE.md`
   - `.github/copilot-instructions.md`
4. Validate additional files:
   - `.cursor/`, `.codex/`, `.gemini/`, `.cursorrules`, `.env.example`
5. Report:
   - install decisions (merge/skip/backup)
   - missing paths
   - final readiness status

Conflict policy:
- default: merge
- backup if local configs are valuable
- skip only optional targets

Canonical source count:
- 54 repositories (31 original + 23 new)

