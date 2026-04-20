const fs = require('fs');
const path = require('path');

const ROOT = '/Users/ibragimov/Desktop/GitHub/vibe-coder';
const COMB = path.join(ROOT, 'COMBINED');
const REPO_DIR = path.join(ROOT, 'Agents/background-agents');
const INDEX_FILE = path.join(COMB, 'INDEX.md');

// Create base directory and initialize INDEX.md
if (!fs.existsSync(COMB)) {
    fs.mkdirSync(COMB, { recursive: true });
}

if (!fs.existsSync(INDEX_FILE)) {
    fs.writeFileSync(INDEX_FILE, '# ULTRACAR — Индекс файлов\n\n| Исходный путь | Тип | Куда скопировано | Действие | Статус |\n|--------------|-----|-------------------|----------|--------|\n');
}

function logIndex(src, itemType, dst, action, status = '✅') {
    const srcRel = path.relative(ROOT, src);
    const dstRel = path.relative(ROOT, dst);
    fs.appendFileSync(INDEX_FILE, `| ${srcRel} | ${itemType} | ${dstRel} | ${action} | ${status} |\n`);
}

function copyFile(srcRel, dstRel, itemType) {
    const src = path.join(REPO_DIR, srcRel);
    const dst = path.join(COMB, dstRel);
    
    if (fs.existsSync(src) && fs.statSync(src).isFile()) {
        fs.mkdirSync(path.dirname(dst), { recursive: true });
        fs.copyFileSync(src, dst);
        logIndex(src, itemType, dst, 'copied');
    } else {
        console.log(`[SKIP] ${srcRel} - not found or not a file`);
    }
}

function copyDir(srcRelDir, dstRelDir, itemType, extFilter) {
    const srcDir = path.join(REPO_DIR, srcRelDir);
    const dstDir = path.join(COMB, dstRelDir);
    
    if (fs.existsSync(srcDir) && fs.statSync(srcDir).isDirectory()) {
        fs.mkdirSync(dstDir, { recursive: true });
        const items = fs.readdirSync(srcDir, { withFileTypes: true });
        
        for (const item of items) {
            const srcItem = path.join(srcDir, item.name);
            const dstItem = path.join(dstDir, item.name);
            
            if (item.isFile()) {
                if (!extFilter || extFilter.includes(path.extname(item.name))) {
                    fs.mkdirSync(path.dirname(dstItem), { recursive: true });
                    fs.copyFileSync(srcItem, dstItem);
                    logIndex(srcItem, itemType, dstItem, 'copied');
                }
            } else if (item.isDirectory() && !extFilter) {
                // Copy subdirectories if no extension filter applies
                copyDir(path.join(srcRelDir, item.name), path.join(dstRelDir, item.name), itemType, extFilter);
            }
        }
    } else {
        console.log(`[SKIP] ${srcRelDir} - not found`);
    }
}

console.log('--- Начинаю копирование Repo #1 ---');

try {
    // 1. Agents
    copyFile('AGENTS.md', 'agents/by-role/background-agent/background-agents--AGENTS.md', 'agent');
    copyFile('README.md', 'agents/by-role/background-agent/background-agents--README.md', 'agent-docs');
    copyFile('CLAUDE.md', 'agents/by-interface/claude/background-agents/CLAUDE.md', 'agent-interface');

    // 2. Skills
    copyFile('VISIBLE_claude/skills/onboarding/SKILL.md', 'skills/development/onboarding/background-agents--SKILL.md', 'skill');

    // 3. Hooks
    copyFile('VISIBLE_husky/pre-commit', 'hooks/pre-commit/background-agents--pre-commit', 'hook');

    // 4. Docs
    copyDir('docs', 'agents/by-role/background-agent/docs', 'docs', ['.md', '.txt', '.json']);
    copyDir('docs/adr', 'agents/by-role/background-agent/docs/adr', 'docs');

    // 5. Orchestration / configs
    copyDir('scripts', 'orchestration/workflows/background-agents/scripts', 'script');
    copyFile('VISIBLE_openinspect/setup.sh', 'orchestration/workflows/background-agents/openinspect/setup.sh', 'script');
    copyDir('VISIBLE_github/workflows', 'orchestration/workflows/background-agents/github', 'workflow');

    // Configs
    const configs = ['VISIBLE_gitignore', 'VISIBLE_prettierrc', 'VISIBLE_prettierignore', 'VISIBLE_vercelignore', 'eslint.config.js', 'package.json'];
    for (const cfg of configs) {
        copyFile(cfg, `orchestration/workflows/background-agents/configs/${cfg.replace('VISIBLE_', '')}`, 'config');
    }

    console.log('✅ Repo 1 успешно обработан через Node.js!');
} catch (e) {
    console.error('Ошибка в процессе:', e);
}
