#!/bin/bash
# STEP 9: Build MEGA_SECURITY.md — The Armor
BASE="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$BASE/COMBINED/MEGA_SECURITY.md"
COUNT=0

cat > "$OUT" << 'HEADER'
# ⚡ MEGA SECURITY — Complete Security Arsenal
# AI-powered pentesting + vulnerability scanning + security skills
#
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HEADER

# Shannon (AI Pentester)
if [ -d "$BASE/Agents/shannon" ]; then
  while IFS= read -r file; do
    relpath="${file#$BASE/}"
    COUNT=$((COUNT + 1))
    echo "" >> "$OUT"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
    echo "## ═══ SECURITY SOURCE $COUNT: $relpath ═══" >> "$OUT"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
    echo "" >> "$OUT"
    cat "$file" >> "$OUT"
    echo "" >> "$OUT"
  done < <(find "$BASE/Agents/shannon" -type f \( -name "*.md" -o -name "*.ts" -o -name "*.js" -o -name "*.py" -o -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.toml" -o -name "*.sh" \) -not -path "*/.git/*" -not -path "*/node_modules/*" -not -name "package-lock.json" -not -name ".DS_Store" | sort)
fi

# Security-related files anywhere
while IFS= read -r file; do
  relpath="${file#$BASE/}"
  if echo "$relpath" | grep -qE "^(COMBINED/|_combined/|\.git/|Agents/shannon/)"; then continue; fi
  if grep -q "SOURCE.*$relpath" "$OUT" 2>/dev/null; then continue; fi
  COUNT=$((COUNT + 1))
  echo "" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "## ═══ SECURITY SOURCE $COUNT: $relpath ═══" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "" >> "$OUT"
  cat "$file" >> "$OUT"
  echo "" >> "$OUT"
done < <(find "$BASE" -type f \( -iname "*security*" -o -iname "*pentest*" -o -iname "*vuln*" -o -iname "*SECURITY.md" \) \( -name "*.md" -o -name "*.json" -o -name "*.yaml" -o -name "*.toml" \) -not -path "*/.git/*" -not -path "*/node_modules/*" -not -path "*/COMBINED/*" -not -path "*/_combined/*" | sort)

sed -i '' "s/# ⚡ MEGA SECURITY/# ⚡ MEGA SECURITY\n# Total security sources: $COUNT files combined/" "$OUT"
echo "MEGA_SECURITY.md built with $COUNT sources. Size: $(du -h "$OUT" | cut -f1)"
