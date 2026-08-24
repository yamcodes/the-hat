# CLI Reference

The Hat includes a zero-dependency command-line interface (`the-hat` and `hat`) distributed via npm.

```bash
npx the-hat <command> [options]
```

---

## Commands

### `init`
Scaffolds The Hat in your project, creating `docs/evals/`, local templates in `docs/evals/.templates/`, `.cursor/rules/the-hat.mdc`, and `.agents/skills/the-hat/`:

```bash
npx the-hat init
```

Options:
- `--force`: Overwrite existing configuration and skill files.

---

### `new <name>`
Creates a new living evaluation note from the canonical template:

```bash
npx the-hat new auth-session-storage
```

Options:
- `--minimal`: Use the compact, 1-page template for minor architectural forks.
- `--force`: Overwrite an existing evaluation note if it already exists.

---

### `check [file/slug]`
Lints evaluation notes for structural compliance. Ideal for local pre-commit checks and CI/CD pipelines:

```bash
# Check a single note
npx the-hat check auth-session-storage

# Check all notes in docs/evals/
npx the-hat check

# Strict CI mode (fails on placeholder text and warnings)
npx the-hat check --ci
```

---

### `index`
Scans `docs/evals/` and generates or updates a master table of all evaluations, layers, and their chosen S-tier stacks in `docs/evals/README.md`:

```bash
npx the-hat index
```

---

### `update <name>`
Appends a structured retrospective update block to an existing evaluation note when requirements shift or new constraints emerge:

```bash
npx the-hat update auth-session-storage
```

---

### `list`, `ls`
Prints a formatted terminal summary of all active evaluation notes in the workspace:

```bash
npx the-hat list
```
