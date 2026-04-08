#!/bin/bash
# Phase 1: Comprehensive COMBINED Directory Scan

OUTPUT="PHASE_1_INVENTORY.json"

echo "{" > "$OUTPUT"
echo '  "scan_timestamp": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'",' >> "$OUTPUT"
echo '  "total_directories": '$(find . -type d | wc -l)',' >> "$OUTPUT"
echo '  "total_files": '$(find . -type f | wc -l)',' >> "$OUTPUT"
echo '  "categories": {' >> "$OUTPUT"

# Scan each major category
for category in agents skills commands hooks prompts memory ui-design mcp-servers orchestration security workspace-config reference; do
    if [ -d "$category" ]; then
        echo "    \"$category\": {" >> "$OUTPUT"
        echo '      "exists": true,' >> "$OUTPUT"
        echo '      "subdirectories": '$(find "$category" -type d | wc -l)',' >> "$OUTPUT"
        echo '      "files": '$(find "$category" -type f | wc -l)',' >> "$OUTPUT"
        echo '      "size_kb": '$(du -sk "$category" | cut -f1) >> "$OUTPUT"
        echo "    }," >> "$OUTPUT"
    fi
done

# Remove trailing comma
sed -i '$ s/,$//' "$OUTPUT"

echo "  }" >> "$OUTPUT"
echo "}" >> "$OUTPUT"

echo "Phase 1 scan complete. Results in $OUTPUT"
