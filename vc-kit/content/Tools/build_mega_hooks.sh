#!/bin/bash
# STEP 6: Build MEGA_HOOKS.md — The Suspension
BASE="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$BASE/COMBINED/MEGA_HOOKS.md"
COUNT=0

cat > "$OUT" << 'HEADER'
# ⚡ MEGA HOOKS — Every Hook Combined
# Hooks run automatically during your AI coding session
#
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HEADER

# Find files inside hooks directories
while IFS= read -r file; do
  relpath="${file#$BASE/}"
  COUNT=$((COUNT + 1))
  echo "" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "## ═══ HOOK SOURCE $COUNT: $relpath ═══" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "" >> "$OUT"
  cat "$file" >> "$OUT"
  echo "" >> "$OUT"
done < <(find "$BASE" \( -path "*/hooks/*" -o -path "*/githooks/*" -o -name "*hook*" \) -type f \( -name "*.md" -o -name "*.yaml" -o -name "*.yml" -o -name "*.json" -o -name "*.toml" -o -name "*.sh" -o -name "*.ts" -o -name "*.js" -o -name "*.py" \) -not -path "*/.git/*" -not -path "*/node_modules/*" -not -path "*/COMBINED/*" -not -path "*/_combined/*" -not -name "*.test.*" | sort)

sed -i '' "s/# ⚡ MEGA HOOKS/# ⚡ MEGA HOOKS\n# Total hooks: $COUNT files combined/" "$OUT"
echo "MEGA_HOOKS.md built with $COUNT sources. Size: $(du -h "$OUT" | cut -f1)"
