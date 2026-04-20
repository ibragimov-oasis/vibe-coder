#!/bin/bash
# STEP 5: Build MEGA_COMMANDS.md — The Controls
BASE="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$BASE/COMBINED/MEGA_COMMANDS.md"
COUNT=0

cat > "$OUT" << 'HEADER'
# ⚡ MEGA COMMANDS — Every Slash Command Combined
# Usage: Copy into .claude/commands/ in your project
# Then use /[command-name] in Claude Code
#
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HEADER

# Find all files inside any 'commands' directory
while IFS= read -r file; do
  relpath="${file#$BASE/}"
  COUNT=$((COUNT + 1))
  echo "" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "## ═══ COMMAND SOURCE $COUNT: $relpath ═══" >> "$OUT"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUT"
  echo "" >> "$OUT"
  cat "$file" >> "$OUT"
  echo "" >> "$OUT"
done < <(find "$BASE" -path "*/commands/*" -type f \( -name "*.md" -o -name "*.yaml" -o -name "*.yml" -o -name "*.json" -o -name "*.toml" -o -name "*.sh" -o -name "*.ts" -o -name "*.js" -o -name "*.py" \) -not -path "*/.git/*" -not -path "*/node_modules/*" -not -path "*/COMBINED/*" -not -path "*/_combined/*" | sort)

sed -i '' "s/# ⚡ MEGA COMMANDS/# ⚡ MEGA COMMANDS\n# Total commands: $COUNT files combined/" "$OUT"
echo "MEGA_COMMANDS.md built with $COUNT sources. Size: $(du -h "$OUT" | cut -f1)"
