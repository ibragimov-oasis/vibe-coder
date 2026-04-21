---
name: vibe-install-copilot
description: "Install and validate vibe-coder in the current project for GitHub Copilot."
---

Install `vibe-coder` using `vc-kit` with strict verification.

Steps:
1. Run `bash vc-kit/install.sh --dry-run`
2. Run `bash vc-kit/install.sh`
3. Verify files:
   - `.github/copilot-instructions.md`
   - `.claude/CLAUDE.md`
   - `.antigravity/AGENTS.md`
4. Confirm supporting files:
   - `.cursor/`, `.codex/`, `.gemini/`, `.cursorrules`, `.env.example`
5. Output PASS/FAIL checklist and unresolved conflicts from install log.

Policy:
- Conflict default = merge
- Use backup when local config must be preserved
- Skip only non-required targets

Canonical count:
- 54 repositories (31 original + 23 new)

