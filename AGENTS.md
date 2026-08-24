# Agent Instructions for The Hat

This repository hosts The Hat: an agent-ready framework for evaluating technical solutions without vibe-ranking or false choices.

## Agent skills

### Issue tracker

Issues and specs live as GitHub issues managed with the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Canonical triage roles mapped to standard labels (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context repository layout. Domain glossary and relationships live in `CONTEXT.md`. Architecture decision records live in `docs/adr/`. Living evaluation notes live in `docs/evals/`. See `docs/agents/domain.md`.

## Conventions

- No em-dashes anywhere in this repo's prose (`SKILL.md` files, docs, `README.md`, `CHANGELOG.md`, ADRs, changesets, code comments). Where a sentence reaches for one, rewrite it with a comma, colon, period, parentheses, or a conjunction.
- Use the domain glossary in `CONTEXT.md` consistently (e.g. *The Hat*, *Layer*, *False Choice*, *Solution Stack*, *Living Note*, *The A-Tier Icebox*, *Phase 1 Alignment Gate*).
- Skills are placed in `skills/` with `.agents/skills` symlinked to `../skills`.
