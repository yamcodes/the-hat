#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const pkg = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf8'));

const args = process.argv.slice(2);
const command = args[0];

function printHelp() {
  console.log(`
🎩 The Hat — Solution Evaluation Framework (v${pkg.version})

USAGE:
  npx the-hat <command> [options]

COMMANDS:
  init                  Scaffold The Hat in your project (docs/evals, templates, skills)
  new <name>            Create a new living evaluation note (e.g., npx the-hat new api-wiring)
  check [file/slug]     Lint/validate evaluation notes for structural compliance (CI or local)
  index                 Generate docs/evals/README.md indexing all evaluations & S-tier stacks
  update <name>         Append a retrospective constraint update block to an existing note
  list, ls              List all evaluation notes in docs/evals/
  help, --help, -h      Show this help message
  version, --version    Show version

OPTIONS:
  --minimal             Use the lightweight 1-page template for 'new'
  --force               Overwrite existing configuration during 'init'
  --ci                  Strict CI mode for 'check' (fails on warnings)

EXAMPLES:
  npx the-hat init
  npx the-hat new auth-session-storage
  npx the-hat check
  npx the-hat check auth-session-storage
  npx the-hat index
  npx the-hat update auth-session-storage
`);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFile(src, dest, force = false) {
  if (fs.existsSync(dest) && !force) {
    console.log(`  ⏩ Skipped (already exists): ${path.relative(process.cwd(), dest)}`);
    return false;
  }
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  console.log(`  ✅ Created: ${path.relative(process.cwd(), dest)}`);
  return true;
}

function init(options = {}) {
  console.log(`🎩 Initializing The Hat in ${process.cwd()}...\n`);

  const targetDocs = path.join(process.cwd(), 'docs', 'evals');
  ensureDir(targetDocs);

  // 1. Templates
  const targetTemplates = path.join(process.cwd(), 'docs', 'evals', '.templates');
  ensureDir(targetTemplates);
  copyFile(path.join(ROOT_DIR, 'templates', 'evaluation-note.md'), path.join(targetTemplates, 'evaluation-note.md'), options.force);
  copyFile(path.join(ROOT_DIR, 'templates', 'minimal-eval.md'), path.join(targetTemplates, 'minimal-eval.md'), options.force);
  copyFile(path.join(ROOT_DIR, 'templates', 'retrospective-update.md'), path.join(targetTemplates, 'retrospective-update.md'), options.force);

  // 2. Agent Skill for Cursor / Gemini / Claude
  const targetSkillDir = path.join(process.cwd(), '.agents', 'skills', 'the-hat');
  copyFile(path.join(ROOT_DIR, 'skills', 'the-hat', 'SKILL.md'), path.join(targetSkillDir, 'SKILL.md'), options.force);
  copyFile(path.join(ROOT_DIR, 'skills', 'the-hat', 'NOTE-TEMPLATE.md'), path.join(targetSkillDir, 'NOTE-TEMPLATE.md'), options.force);

  // 3. Cursor MDC rule
  const targetCursorRule = path.join(process.cwd(), '.cursor', 'rules', 'the-hat.mdc');
  copyFile(path.join(ROOT_DIR, 'integrations', 'cursor', 'the-hat.mdc'), targetCursorRule, options.force);

  console.log(`
🎉 The Hat initialized!
- Living Notes Directory: docs/evals/
- Templates: docs/evals/.templates/
- Agent Skill: .agents/skills/the-hat/
- Cursor Rule: .cursor/rules/the-hat.mdc

To start an evaluation:
  npx the-hat new <topic-name>
Or tell your AI agent:
  "Throw this in the hat: /the-hat"
`);
}

function createNote(name, options = {}) {
  if (!name) {
    console.error('❌ Error: Please provide a name for the evaluation (e.g. npx the-hat new api-wiring)');
    process.exit(1);
  }

  const slug = name.toLowerCase().replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-');
  const targetDir = path.join(process.cwd(), 'docs', 'evals');
  ensureDir(targetDir);

  const targetFile = path.join(targetDir, `${slug}.md`);
  if (fs.existsSync(targetFile) && !options.force) {
    console.error(`❌ Error: Evaluation note already exists at ${path.relative(process.cwd(), targetFile)}`);
    console.log(`Tip: Use 'npx the-hat update ${slug}' to append a retrospective update, or view the note.`);
    process.exit(1);
  }

  const templateName = options.minimal ? 'minimal-eval.md' : 'evaluation-note.md';
  const templatePath = path.join(ROOT_DIR, 'templates', templateName);
  let content = fs.readFileSync(templatePath, 'utf8');

  const title = name.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const today = new Date().toISOString().split('T')[0];

  content = content
    .replace(/<Problem title>/g, title)
    .replace(/YYYY-MM-DD/g, today);

  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`\n🎩 Created new evaluation note: ${path.relative(process.cwd(), targetFile)}`);
  console.log(`\nNext steps:\n1. Open ${path.relative(process.cwd(), targetFile)}\n2. Define the invariant problem and split composing layers\n3. Put every option in the hat!\n`);
}

function appendUpdate(name) {
  if (!name) {
    console.error('❌ Error: Please provide the evaluation note name (e.g. npx the-hat update api-wiring)');
    process.exit(1);
  }

  const slug = name.toLowerCase().replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-');
  const targetFile = path.join(process.cwd(), 'docs', 'evals', `${slug}.md`);

  if (!fs.existsSync(targetFile)) {
    console.error(`❌ Error: Could not find note at ${path.relative(process.cwd(), targetFile)}`);
    process.exit(1);
  }

  const updateTemplate = fs.readFileSync(path.join(ROOT_DIR, 'templates', 'retrospective-update.md'), 'utf8');
  const today = new Date().toISOString().split('T')[0];
  const renderedUpdate = `\n\n` + updateTemplate.replace(/YYYY-MM-DD/g, today);

  fs.appendFileSync(targetFile, renderedUpdate, 'utf8');
  console.log(`\n🎩 Appended retrospective update section to: ${path.relative(process.cwd(), targetFile)}`);
}

function parseNoteInfo(fullPath) {
  const content = fs.readFileSync(fullPath, 'utf8');
  const file = path.basename(fullPath);
  const firstLine = content.split('\n')[0].replace(/^#\s*/, '').trim() || file;
  
  const statusMatch = content.match(/\*\*Status:\*\*\s*([^\n|]+)/);
  const status = statusMatch ? statusMatch[1].trim() : 'In Progress';

  const storyMatch = content.match(/\*\*Chosen\s*(?:public\s*)?story:\*\*\s*([^\n.]+)/i);
  const chosenStory = storyMatch ? storyMatch[1].trim() : 'Undecided';

  return { file, fullPath, title: firstLine, status, chosenStory, content };
}

function listNotes() {
  const targetDir = path.join(process.cwd(), 'docs', 'evals');
  if (!fs.existsSync(targetDir)) {
    console.log('No docs/evals directory found. Run `npx the-hat init` to get started.');
    return;
  }

  const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.md') && !f.startsWith('.') && f !== 'README.md');
  if (files.length === 0) {
    console.log('No evaluation notes found in docs/evals/. Create one with `npx the-hat new <name>`.');
    return;
  }

  console.log(`\n🎩 Active Evaluation Notes in ${path.relative(process.cwd(), targetDir)}:\n`);
  for (const file of files) {
    const info = parseNoteInfo(path.join(targetDir, file));
    console.log(`  • ${info.file.padEnd(28)} — ${info.title} [Status: ${info.status}] [Story: ${info.chosenStory}]`);
  }
  console.log('');
}

function checkNote(fullPath, isCi = false) {
  const errors = [];
  const warnings = [];
  const info = parseNoteInfo(fullPath);
  const { content, file } = info;

  // 1. Check title
  if (!content.startsWith('# ') || content.includes('<Problem title>')) {
    errors.push('Missing or placeholder title on line 1.');
  }

  // 2. Check Problem section
  if (!/(?:##\s*(?:1\.\s*)?Problem)/i.test(content)) {
    errors.push('Missing Problem section (Step 1).');
  }

  // 3. Check Layer Map section
  if (!/(?:##\s*(?:2\.\s*)?Layer\s*Map)/i.test(content)) {
    errors.push('Missing Layer Map section (Step 2).');
  }

  // 4. Check Metrics section
  if (!/(?:##\s*(?:3\.\s*)?Metrics)/i.test(content)) {
    errors.push('Missing Metrics section (Step 4).');
  }

  // 5. Check The Hat option inventory
  if (!/(?:##\s*(?:4\.\s*)?The\s*Hat)/i.test(content) && !/###\s*Layer\s*A/i.test(content)) {
    errors.push('Missing The Hat option inventory (Step 3).');
  }

  // 6. Check Tier list / S-tier
  if (!/(?:##\s*(?:5\.|6\.)?Tier\s*List|S-Tier|🏆\s*S-Tier)/i.test(content)) {
    errors.push('Missing Tier List / S-Tier Stack declaration (Step 6).');
  }

  // 7. Check for unreplaced template placeholders
  const placeholderMatches = content.match(/<[A-Za-z][A-Za-z0-9 _-]{1,30}>/g) || [];
  const activePlaceholders = placeholderMatches.filter(p => !p.startsWith('<!--') && !p.startsWith('http'));
  if (activePlaceholders.length > 0) {
    warnings.push(`Found ${activePlaceholders.length} unreplaced placeholder tag(s): ${activePlaceholders.slice(0, 3).join(', ')}${activePlaceholders.length > 3 ? '...' : ''}`);
  }

  return { file, fullPath, errors, warnings };
}

function check(target, options = {}) {
  const targetDir = path.join(process.cwd(), 'docs', 'evals');
  let filesToCheck = [];

  if (target) {
    let filePath = target;
    if (!filePath.endsWith('.md')) {
      filePath = path.join(targetDir, `${target}.md`);
    }
    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${filePath}`);
      process.exit(1);
    }
    filesToCheck.push(filePath);
  } else {
    if (!fs.existsSync(targetDir)) {
      console.error('❌ docs/evals directory not found.');
      process.exit(1);
    }
    filesToCheck = fs.readdirSync(targetDir)
      .filter(f => f.endsWith('.md') && !f.startsWith('.') && f !== 'README.md')
      .map(f => path.join(targetDir, f));
  }

  if (filesToCheck.length === 0) {
    console.log('No evaluation notes to check.');
    return;
  }

  console.log(`\n🎩 Linting ${filesToCheck.length} evaluation note(s)...\n`);
  let hasErrors = false;

  for (const fullPath of filesToCheck) {
    const result = checkNote(fullPath, options.ci);
    const relPath = path.relative(process.cwd(), fullPath);

    if (result.errors.length === 0 && result.warnings.length === 0) {
      console.log(`  ✅ ${relPath} — Structurally compliant`);
    } else {
      if (result.errors.length > 0) {
        hasErrors = true;
        console.log(`  ❌ ${relPath} (${result.errors.length} error(s)):`);
        for (const err of result.errors) console.log(`     • [ERROR] ${err}`);
      } else {
        console.log(`  ⚠️  ${relPath} (${result.warnings.length} warning(s)):`);
      }
      for (const warn of result.warnings) console.log(`     • [WARN]  ${warn}`);
    }
  }

  console.log('');
  if (hasErrors || (options.ci && filesToCheck.some(f => checkNote(f, true).warnings.length > 0))) {
    console.error('❌ Structural validation failed.');
    process.exit(1);
  } else {
    console.log('✨ All evaluation notes passed structural validation!');
  }
}

function generateIndex() {
  const targetDir = path.join(process.cwd(), 'docs', 'evals');
  if (!fs.existsSync(targetDir)) {
    console.error('❌ docs/evals directory not found.');
    process.exit(1);
  }

  const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.md') && !f.startsWith('.') && f !== 'README.md');
  if (files.length === 0) {
    console.log('No evaluation notes found to index.');
    return;
  }

  const rows = [];
  for (const file of files) {
    const info = parseNoteInfo(path.join(targetDir, file));
    rows.push(`| [${info.title}](${file}) | \`${info.status}\` | \`${info.chosenStory}\` |`);
  }

  const indexContent = `# Living Evaluation Index

This directory contains living evaluations for architectural and technical design decisions evaluated using **The Hat** framework.

| Evaluation Topic | Status | Chosen Story / Stack |
| :--- | :--- | :--- |
${rows.join('\n')}

---
*Auto-generated by \`npx the-hat index\` on ${new Date().toISOString().split('T')[0]}*
`;

  const readmePath = path.join(targetDir, 'README.md');
  fs.writeFileSync(readmePath, indexContent, 'utf8');
  console.log(`\n🎩 Generated evaluation index at: ${path.relative(process.cwd(), readmePath)}\n`);
}

switch (command) {
  case 'init':
    init({ force: args.includes('--force') });
    break;
  case 'new':
    createNote(args[1], {
      minimal: args.includes('--minimal'),
      force: args.includes('--force')
    });
    break;
  case 'check':
  case 'lint':
    check(args[1] && !args[1].startsWith('--') ? args[1] : null, {
      ci: args.includes('--ci')
    });
    break;
  case 'index':
    generateIndex();
    break;
  case 'update':
    appendUpdate(args[1]);
    break;
  case 'list':
  case 'ls':
    listNotes();
    break;
  case 'version':
  case '-v':
  case '--version':
    console.log(`v${pkg.version}`);
    break;
  case 'help':
  case '-h':
  case '--help':
  default:
    printHelp();
    break;
}
