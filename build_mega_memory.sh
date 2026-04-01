#!/bin/bash
# STEP 7: Build MEGA_MEMORY.md — The GPS
BASE="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$BASE/COMBINED/MEGA_MEMORY.md"
COUNT=0

cat > "$OUT" << 'HEADER'
# ⚡ MEGA MEMORY — Complete Memory Architecture
# Your AI will remember across all sessions
#
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HEADER

# Memory sources
MEMORY_DIRS=(
  "$BASE/Tools/claude-mem"
  "$BASE/Tools/supermemory"
  "$BASE/Tools/OpenViking"
)

for dir in "${MEMORY_DIRS[@]}"; do
  if [ -d "$dir" ]; then
    while IFS= read -r file; do
      relpath="${file#$BASE/}"
      COUNT=$((COUNT + 1))
      echo "" >> "$OUT"
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
      echo "## ═══ MEMORY SOURCE $COUNT: $relpath ═══" >> "$OUT"
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
      echo "" >> "$OUT"
      cat "$file" >> "$OUT"
      echo "" >> "$OUT"
    done < <(find "$dir" -type f \( -name "*.md" -o -name "*.ts" -o -name "*.js" -o -name "*.py" -o -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.toml" -o -name "*.sh" -o -name "*.css" \) -not -path "*/.git/*" -not -path "*/node_modules/*" -not -name "package-lock.json" -not -name ".DS_Store" -not -name "*.test.*" -not -name "*.spec.*" | sort)
  fi
done

# Add root MEMORY_SETUP.md
if [ -f "$BASE/MEMORY_SETUP.md" ]; then
  COUNT=$((COUNT + 1))
  echo "" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "## ═══ MEMORY SOURCE $COUNT: MEMORY_SETUP.md ═══" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "" >> "$OUT"
  cat "$BASE/MEMORY_SETUP.md" >> "$OUT"
  echo "" >> "$OUT"
fi

# Also find any memory-related files elsewhere
while IFS= read -r file; do
  relpath="${file#$BASE/}"
  if echo "$relpath" | grep -qE "^(COMBINED/|_combined/|\.git/|Tools/)"; then continue; fi
  if grep -q "SOURCE.*$relpath" "$OUT" 2>/dev/null; then continue; fi
  COUNT=$((COUNT + 1))
  echo "" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "## ═══ MEMORY SOURCE $COUNT: $relpath ═══" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "" >> "$OUT"
  cat "$file" >> "$OUT"
  echo "" >> "$OUT"
done < <(find "$BASE" -type f -iname "*memory*" \( -name "*.md" -o -name "*.json" -o -name "*.yaml" -o -name "*.toml" \) -not -path "*/.git/*" -not -path "*/node_modules/*" -not -path "*/COMBINED/*" -not -path "*/_combined/*" | sort)

sed -i '' "s/# ⚡ MEGA MEMORY/# ⚡ MEGA MEMORY\n# Total memory sources: $COUNT files combined/" "$OUT"
echo "MEGA_MEMORY.md built with $COUNT sources. Size: $(du -h "$OUT" | cut -f1)"
