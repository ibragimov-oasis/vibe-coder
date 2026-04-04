# Phase 5: Audit & Verification

## Summary
Phase 5 performs comprehensive audit and verification of the entire COMBINED/ structure, ensuring data integrity, fixing broken references, validating frontmatter, and creating a final quality report.

## Status
🔄 **Ready to Execute** (after Phase 4)

## Date Created
April 4, 2026

## Objectives

### Goal
Systematically verify the integrity, completeness, and quality of all 44,966 files in COMBINED/, fix any issues found, and generate comprehensive audit reports.

### Why This Matters
- **Data Integrity**: Ensure no files were corrupted or lost
- **Reference Validation**: Fix all broken links and imports
- **Quality Assurance**: Verify all files meet standards
- **Documentation Health**: Ensure all SKILL.md frontmatter is valid
- **Production Readiness**: Confirm the system is deployment-ready

## Audit Categories

### 5.1 File Integrity Audit
**Verify:**
- All expected files present
- No corrupted files
- Correct file permissions
- Proper directory structure

### 5.2 Reference & Link Audit
**Check:**
- Internal file references
- Cross-file imports
- Markdown links
- Path references in configs

### 5.3 Frontmatter Validation
**Validate:**
- All SKILL.md frontmatter
- Agent definition YAML
- Command metadata
- Hook configurations

### 5.4 Content Quality Audit
**Review:**
- Documentation completeness
- Code quality (for scripts)
- Naming conventions
- File organization

### 5.5 Metadata Audit
**Verify:**
- INDEX.md accuracy
- INDEX_MOVEMENTS.json completeness
- Category mappings
- Statistics accuracy

## Implementation Strategy

### Phase 5.1: File Integrity Check (2-3 hours)

**Automated Checks:**
```bash
# Verify file counts match expectations
find COMBINED -type f | wc -l  # Should be 44,966

# Check for corrupted files
find COMBINED -type f -size 0  # Should be minimal

# Verify directory structure
ls -la COMBINED/  # Should have all expected directories

# Check permissions
find COMBINED -type f ! -perm 644  # Identify permission issues
```

**Manual Checks:**
1. Verify all major directories exist
2. Spot-check random files from each category
3. Verify no critical files missing

**Deliverable:** `COMBINED/audit/FILE_INTEGRITY_REPORT.md`

### Phase 5.2: Reference & Link Validation (4-6 hours)

**Automated Link Checking:**
```python
# Script to check all markdown links
import os
import re
from pathlib import Path

def find_broken_links(directory):
    broken = []
    for md_file in Path(directory).rglob('*.md'):
        content = md_file.read_text(errors='ignore')
        # Find all markdown links
        links = re.findall(r'\[([^\]]+)\]\(([^\)]+)\)', content)
        for text, link in links:
            if link.startswith(('http', 'https', '#')):
                continue  # Skip external and anchor links
            target = (md_file.parent / link).resolve()
            if not target.exists():
                broken.append({
                    'file': str(md_file),
                    'link': link,
                    'text': text
                })
    return broken
```

**Manual Checks:**
1. Verify agent tool references
2. Check skill dependencies
3. Validate MCP server references

**Deliverable:**
- `COMBINED/audit/BROKEN_LINKS_REPORT.md`
- `COMBINED/audit/BROKEN_LINKS_FIXED.md` (after fixes)

### Phase 5.3: Frontmatter Validation (3-4 hours)

**SKILL.md Frontmatter Schema:**
```yaml
---
name: skill-name
description: "Brief description"
category: development|design|security|seo|business
tags: [tag1, tag2]
version: 1.0.0
author: author-name
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

**Validation Script:**
```python
import yaml
from pathlib import Path

def validate_skill_frontmatter(skill_file):
    content = skill_file.read_text()
    if not content.startswith('---'):
        return {'error': 'No frontmatter'}

    try:
        frontmatter = content.split('---')[1]
        data = yaml.safe_load(frontmatter)

        # Required fields
        required = ['name', 'description']
        missing = [f for f in required if f not in data]

        if missing:
            return {'error': f'Missing fields: {missing}'}

        return {'valid': True, 'data': data}
    except Exception as e:
        return {'error': str(e)}
```

**Deliverables:**
- `COMBINED/audit/FRONTMATTER_VALIDATION_REPORT.md`
- `COMBINED/audit/INVALID_FRONTMATTER.json`
- Fixed frontmatter in all files

### Phase 5.4: Content Quality Audit (6-8 hours)

**Automated Quality Checks:**

1. **Documentation Completeness:**
   - All directories have README.md or INDEX.md
   - All skills have comprehensive documentation
   - All agents have usage examples

2. **Naming Conventions:**
   - Files use lowercase-with-hyphens
   - No spaces in filenames
   - Consistent extensions (.md, .yaml, .json)

3. **Code Quality** (for Python/JS scripts):
   - No syntax errors
   - Basic linting passes
   - Scripts have proper shebangs

4. **Organization:**
   - Files in correct categories
   - No misplaced files
   - Logical directory structure

**Quality Script:**
```python
def audit_naming_conventions(directory):
    issues = []
    for file in Path(directory).rglob('*'):
        if file.is_file():
            name = file.name
            # Check for spaces
            if ' ' in name:
                issues.append(f'Space in filename: {file}')
            # Check for uppercase in skill names
            if file.parent.name == 'skills' and name.isupper():
                issues.append(f'Uppercase in skill: {file}')
    return issues
```

**Deliverable:** `COMBINED/audit/QUALITY_AUDIT_REPORT.md`

### Phase 5.5: Metadata Verification (2-3 hours)

**Verify:**

1. **INDEX.md Accuracy:**
   - File counts match actual counts
   - All repositories listed
   - Statistics are current

2. **INDEX_MOVEMENTS.json:**
   - All movements recorded
   - No duplicates
   - Timestamps valid

3. **Category Mappings:**
   - All files categorized correctly
   - No orphaned files
   - Categories align with structure

**Verification Script:**
```python
def verify_index_accuracy():
    # Count actual files
    actual_counts = {}
    for category in ['agents', 'skills', 'commands', 'hooks',
                     'prompts', 'orchestration', 'memory',
                     'mcp-servers', 'ui-design', 'security']:
        path = Path(f'COMBINED/{category}')
        actual_counts[category] = len(list(path.rglob('*.*')))

    # Compare with INDEX.md claims
    # Return discrepancies
    return actual_counts
```

**Deliverable:** `COMBINED/audit/METADATA_VERIFICATION_REPORT.md`

### Phase 5.6: Integration Testing (3-4 hours)

**Test Scenarios:**

1. **Agent Loading:**
   - Can all agents be parsed?
   - Are tool dependencies resolvable?
   - Do configurations validate?

2. **Skill Discovery:**
   - Can all skills be found?
   - Are skill metadata valid?
   - Do skill dependencies exist?

3. **Command Execution:**
   - Are all commands accessible?
   - Do command files parse correctly?
   - Are command dependencies met?

4. **Hook Functionality:**
   - Can all hooks be loaded?
   - Are hook configurations valid?
   - Do hook dependencies exist?

**Deliverable:** `COMBINED/audit/INTEGRATION_TEST_REPORT.md`

### Phase 5.7: Generate Final Audit Report (2 hours)

**Consolidate all findings:**

1. Summary statistics
2. Issues found and fixed
3. Remaining issues (if any)
4. Recommendations for Phase 6
5. Quality score (0-100)

**Deliverable:** `COMBINED/audit/FINAL_AUDIT_REPORT.md`

## Directory Structure

```
COMBINED/audit/
├── README.md                           # Audit overview
├── FILE_INTEGRITY_REPORT.md            # Phase 5.1 results
├── BROKEN_LINKS_REPORT.md              # Phase 5.2 initial findings
├── BROKEN_LINKS_FIXED.md               # Phase 5.2 fixes applied
├── FRONTMATTER_VALIDATION_REPORT.md    # Phase 5.3 results
├── INVALID_FRONTMATTER.json            # Phase 5.3 detailed issues
├── QUALITY_AUDIT_REPORT.md             # Phase 5.4 results
├── METADATA_VERIFICATION_REPORT.md     # Phase 5.5 results
├── INTEGRATION_TEST_REPORT.md          # Phase 5.6 results
├── FINAL_AUDIT_REPORT.md               # Phase 5.7 summary
├── scripts/
│   ├── check_links.py                  # Link validation
│   ├── validate_frontmatter.py         # Frontmatter validation
│   ├── audit_naming.py                 # Naming conventions
│   └── verify_metadata.py              # Metadata verification
└── data/
    ├── broken_links.json
    ├── invalid_frontmatter.json
    └── quality_issues.json
```

## Automation Scripts

### Master Audit Script

```python
#!/usr/bin/env python3
"""
COMBINED Audit Master Script
Runs all audit checks and generates reports
"""

import sys
from pathlib import Path

# Add scripts to path
sys.path.append(str(Path(__file__).parent / 'scripts'))

from check_links import find_broken_links
from validate_frontmatter import validate_all_frontmatter
from audit_naming import check_naming_conventions
from verify_metadata import verify_index_accuracy

def run_full_audit(combined_dir='COMBINED'):
    """Run complete audit suite"""

    print("🔍 Starting ULTRACAR Audit...\n")

    # Phase 5.1: File Integrity
    print("📋 Phase 5.1: File Integrity Check")
    file_count = len(list(Path(combined_dir).rglob('*.*')))
    print(f"   Total files: {file_count}")

    # Phase 5.2: Link Validation
    print("\n🔗 Phase 5.2: Link Validation")
    broken_links = find_broken_links(combined_dir)
    print(f"   Broken links found: {len(broken_links)}")

    # Phase 5.3: Frontmatter Validation
    print("\n📝 Phase 5.3: Frontmatter Validation")
    invalid_frontmatter = validate_all_frontmatter(combined_dir)
    print(f"   Invalid frontmatter: {len(invalid_frontmatter)}")

    # Phase 5.4: Naming Conventions
    print("\n📏 Phase 5.4: Naming Conventions")
    naming_issues = check_naming_conventions(combined_dir)
    print(f"   Naming issues: {len(naming_issues)}")

    # Phase 5.5: Metadata Verification
    print("\n🗂️  Phase 5.5: Metadata Verification")
    metadata_issues = verify_index_accuracy(combined_dir)
    print(f"   Metadata discrepancies: {len(metadata_issues)}")

    # Summary
    total_issues = (len(broken_links) + len(invalid_frontmatter) +
                   len(naming_issues) + len(metadata_issues))

    print(f"\n✅ Audit Complete!")
    print(f"   Total issues found: {total_issues}")

    # Calculate quality score
    quality_score = max(0, 100 - (total_issues * 0.1))
    print(f"   Quality Score: {quality_score:.1f}/100")

    return {
        'file_count': file_count,
        'broken_links': broken_links,
        'invalid_frontmatter': invalid_frontmatter,
        'naming_issues': naming_issues,
        'metadata_issues': metadata_issues,
        'quality_score': quality_score
    }

if __name__ == '__main__':
    results = run_full_audit()
    # Generate reports...
```

## Timeline

**Total Estimated Time:** 22-30 hours

- **Day 1-2** (8-10 hours): File integrity + Link validation
- **Day 3** (3-4 hours): Frontmatter validation + fixes
- **Day 4-5** (6-8 hours): Content quality audit
- **Day 6** (2-3 hours): Metadata verification
- **Day 7** (3-4 hours): Integration testing
- **Day 8** (2 hours): Final report generation

**Calendar Time:** 1.5-2 weeks (part-time) or 4-5 days (full-time)

## Success Criteria

- [ ] All files accounted for (44,966 files)
- [ ] Zero broken internal links
- [ ] All SKILL.md frontmatter valid
- [ ] All agent configurations valid
- [ ] Naming conventions consistent
- [ ] INDEX.md accuracy verified
- [ ] Quality score ≥ 95/100
- [ ] All critical issues resolved
- [ ] Complete audit documentation
- [ ] Automated audit scripts working

## Deliverables

1. **Reports** (8 markdown files)
2. **Scripts** (4 Python scripts)
3. **Data** (3 JSON files with detailed findings)
4. **Fixes** (Applied to COMBINED/ files)
5. **Documentation** (Audit process documentation)

## Quality Metrics

### Target Quality Score: ≥ 95/100

**Scoring:**
- **File Integrity** (20 points): All files present and valid
- **Link Validity** (20 points): No broken internal links
- **Frontmatter** (20 points): All frontmatter valid
- **Naming** (15 points): Consistent conventions
- **Metadata** (15 points): Accurate statistics
- **Integration** (10 points): All components loadable

**Deductions:**
- Broken link: -0.1 point
- Invalid frontmatter: -0.2 points
- Naming issue: -0.05 points
- Metadata discrepancy: -0.5 points
- Integration failure: -1.0 point

## Risk Management

| Risk | Mitigation |
|------|------------|
| Too many issues found | Prioritize by severity; fix critical first |
| Automated fixes break things | Always backup before bulk operations |
| Script errors | Test on small sample first |
| Time overrun | Focus on critical issues; defer minor ones |

## After Phase 5

Once audit is complete and quality score ≥ 95:
→ **Phase 6: Orchestration & Linking**

---

**Phase 5 Status:** 🔄 **Ready to Execute** (after Phase 4)
**Estimated Completion:** 1.5-2 weeks
**Created:** 2026-04-04
**Branch:** `phase-5-audit` (to be created)
