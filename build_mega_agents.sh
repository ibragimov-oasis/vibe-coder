#!/bin/bash
# STEP 3: Build MEGA_AGENTS.md — The AI Crew
BASE="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$BASE/COMBINED/MEGA_AGENTS.md"
COUNT=0

cat > "$OUT" << 'HEADER'
# ⚡ MEGA AGENTS — Complete Agent Army
# Every agent from every repo, fully merged
# Usage: Use as sub-agent definitions in Claude Code / Copilot / Cursor
#
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HEADER

# Agent directories to scan (all files inside)
AGENT_DIRS=(
  "$BASE/Orchestration/get-shit-done/agents"
  "$BASE/Orchestration/superpowers/agents"
  "$BASE/Orchestration/ruflo/agents"
  "$BASE/Orchestration/ruflo/claude"
  "$BASE/Agents/hermes-agent/agent"
  "$BASE/Skills/claude-skills/agents"
  "$BASE/Skills/claude-skills/engineering-team"
  "$BASE/Skills/claude-skills/engineering"
  "$BASE/Skills/claude-skills/c-level-advisor"
  "$BASE/Skills/claude-skills/product-team"
  "$BASE/Skills/claude-skills/marketing-skill"
  "$BASE/Skills/claude-skills/finance"
  "$BASE/Skills/claude-skills/ra-qm-team"
  "$BASE/Skills/claude-skills/business-growth"
  "$BASE/Skills/claude-skills/project-management"
  "$BASE/Skills/claude-skills/standards"
  "$BASE/Orchestration/ruflo/v2/docs/reference"
  "$BASE/Orchestration/ruflo/v3/@claude-flow/cli"
  "$BASE/Orchestration/ruflo/v3/@claude-flow/codex"
  "$BASE/Orchestration/ruflo/v3/@claude-flow/mcp"
)

for dir in "${AGENT_DIRS[@]}"; do
  if [ -d "$dir" ]; then
    while IFS= read -r file; do
      relpath="${file#$BASE/}"
      COUNT=$((COUNT + 1))
      echo "" >> "$OUT"
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
      echo "## ═══ AGENT SOURCE $COUNT: $relpath ═══" >> "$OUT"
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
      echo "" >> "$OUT"
      cat "$file" >> "$OUT"
      echo "" >> "$OUT"
    done < <(find "$dir" -type f \( -name "*.md" -o -name "*.toml" -o -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.py" -o -name "*.ts" -o -name "*.js" \) -not -name "*.test.*" -not -path "*node_modules*" | sort)
  fi
done

# Also find any file with "agent" in its name that we might have missed
while IFS= read -r file; do
  relpath="${file#$BASE/}"
  # Skip if already in a processed directory or COMBINED
  if echo "$relpath" | grep -qE "^(COMBINED/|_combined/|\.git/)"; then continue; fi
  # Check if already added by checking if the source line exists
  if grep -q "SOURCE.*$relpath" "$OUT" 2>/dev/null; then continue; fi
  COUNT=$((COUNT + 1))
  echo "" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "## ═══ AGENT SOURCE $COUNT: $relpath ═══" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "" >> "$OUT"
  cat "$file" >> "$OUT"
  echo "" >> "$OUT"
done < <(find "$BASE" -type f -name "*agent*" \( -name "*.md" -o -name "*.toml" -o -name "*.json" -o -name "*.yaml" \) -not -path "*/.git/*" -not -path "*/node_modules/*" -not -path "*/COMBINED/*" -not -path "*/_combined/*" | sort)

sed -i '' "s/# ⚡ MEGA AGENTS/# ⚡ MEGA AGENTS\n# Total agent sources: $COUNT files combined/" "$OUT"
echo "MEGA_AGENTS.md built with $COUNT sources. Size: $(du -h "$OUT" | cut -f1)"
