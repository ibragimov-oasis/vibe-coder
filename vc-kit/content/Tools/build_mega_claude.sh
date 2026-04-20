#!/bin/bash
# STEP 1: Build MEGA_CLAUDE.md — The Engine
BASE="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$BASE/COMBINED/MEGA_CLAUDE.md"
COUNT=0

# Also include root instruction files
EXTRA_FILES=(
  "$BASE/ORCHESTRATION.md"
  "$BASE/MEMORY_SETUP.md"
  "$BASE/QUICKSTART.md"
  "$BASE/HOW_TO_COMBINE.md"
  "$BASE/MERGE_PLAN.md"
  "$BASE/llms.txt"
)

# Start the file
cat > "$OUT" << 'HEADER'
# ⚡ MEGA CLAUDE.md — The Ultra Engine
# Assembled from ALL 31 repositories
# Usage: Drop into your project root as CLAUDE.md
# This gives your AI agent the combined intelligence of 31 elite repos
#
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HEADER

# Find all CLAUDE.md and AGENTS.md files
while IFS= read -r file; do
  relpath="${file#$BASE/}"
  COUNT=$((COUNT + 1))
  echo "" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "## ═══ SOURCE $COUNT: $relpath ═══" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "" >> "$OUT"
  cat "$file" >> "$OUT"
  echo "" >> "$OUT"
done < <(find "$BASE" -type f \( -name "CLAUDE.md" -o -name "AGENTS.md" -o -name "CLAUDE.local.md" -o -name "AGENTS 2.md" \) -not -path "*/.git/*" -not -path "*/COMBINED/*" -not -path "*/_combined/*" | sort)

# Add root instruction files
for file in "${EXTRA_FILES[@]}"; do
  if [ -f "$file" ]; then
    relpath="${file#$BASE/}"
    COUNT=$((COUNT + 1))
    echo "" >> "$OUT"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
    echo "## ═══ SOURCE $COUNT: $relpath ═══" >> "$OUT"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
    echo "" >> "$OUT"
    cat "$file" >> "$OUT"
    echo "" >> "$OUT"
  fi
done

# Update header with count
sed -i '' "s/# ⚡ MEGA CLAUDE.md — The Ultra Engine/# ⚡ MEGA CLAUDE.md — The Ultra Engine\n# Total sources: $COUNT files combined/" "$OUT"

echo "MEGA_CLAUDE.md built with $COUNT sources. Size: $(du -h "$OUT" | cut -f1)"
