#!/bin/bash
# STEP 4: Build MEGA_PROMPTS.md — The Fuel
BASE="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$BASE/COMBINED/MEGA_PROMPTS.md"
COUNT=0

cat > "$OUT" << 'HEADER'
# ⚡ MEGA PROMPTS — Complete Prompt Bible
# Every prompt, every leaked system prompt, every template
# From 31 repositories — nothing omitted
#
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HEADER

# Process ALL files in Prompts/ directory  
while IFS= read -r file; do
  relpath="${file#$BASE/}"
  COUNT=$((COUNT + 1))
  echo "" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "## ═══ PROMPT SOURCE $COUNT: $relpath ═══" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "" >> "$OUT"
  cat "$file" >> "$OUT"
  echo "" >> "$OUT"
done < <(find "$BASE/Prompts" -type f \( -name "*.md" -o -name "*.csv" -o -name "*.txt" -o -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.py" -o -name "*.ts" -o -name "*.js" -o -name "*.toml" \) -not -path "*/.git/*" -not -path "*/node_modules/*" -not -name ".DS_Store" -not -name "package-lock.json" | sort)

sed -i '' "s/# ⚡ MEGA PROMPTS/# ⚡ MEGA PROMPTS\n# Total prompt sources: $COUNT files combined/" "$OUT"
echo "MEGA_PROMPTS.md built with $COUNT sources. Size: $(du -h "$OUT" | cut -f1)"
