# The Hat Skills

This directory contains AI agent skills to improve development, architecture, and decision-making workflows within The Hat repository and across conforming projects.

## Core Framework Skill

- [**the-hat**](./the-hat/SKILL.md): Structured solution evaluation framework. Compares design alternatives with a hat → metrics → tier-list loop, splitting composing layers and keeping a living note in `docs/evals/`.

<details>
  <summary>Engineering & Workflow Skills</summary>

  These skills assist contributors and maintainers of this repository and conforming projects.

  ### Setup & Scaffolding
  - [**setup-matt-pocock-skills**](./setup-matt-pocock-skills/SKILL.md): Scaffolds issue tracker, triage labels, and domain doc layout for the repo.

  ### Design & Architecture
  - [**codebase-design**](./codebase-design/SKILL.md): Shared vocabulary and discipline for designing deep modules.
  - [**domain-modeling**](./domain-modeling/SKILL.md): Actively build and sharpen domain models, `CONTEXT.md`, and ADRs.
  - [**improve-codebase-architecture**](./improve-codebase-architecture/SKILL.md): Guidance for modularity, deep module extraction, and interface design.
  - [**prototype**](./prototype/SKILL.md): Build throwaway prototypes for state/logic questions or UI exploration.
  - [**excalidraw**](./excalidraw/SKILL.md): Guidelines for generating structured Excalidraw diagrams for architecture notes and docs.
  - [**zoom-out**](./zoom-out/SKILL.md): Ask the agent to zoom out to a higher abstraction level and provide architectural module mapping.

  ### Grilling & Product Specs
  - [**grill-me**](./grill-me/SKILL.md): Interactive grilling interview to clarify intent, requirements, and edge cases.
  - [**grilling**](./grilling/SKILL.md): Reusable primitive for relentless design interviewing.
  - [**grill-with-docs**](./grill-with-docs/SKILL.md): Grilling workflow that builds `CONTEXT.md` glossary and ADRs inline.
  - [**to-spec**](./to-spec/SKILL.md): Synthesizes conversation context into structured specs on the issue tracker.
  - [**to-tickets**](./to-tickets/SKILL.md): Breaks down specs/plans into tracer-bullet tickets with blocking edges.
  - [**wayfinder**](./wayfinder/SKILL.md): Map multi-session initiatives as decision tickets on the issue tracker.

  ### Implementation & Review
  - [**implement**](./implement/SKILL.md): Build work described by spec/tickets, driving TDD at pre-agreed seams.
  - [**tdd**](./tdd/SKILL.md): Test-driven development workflow and test suite design.
  - [**diagnosing-bugs**](./diagnosing-bugs/SKILL.md): Disciplined diagnosis loop for hard bugs and performance regressions.
  - [**code-review**](./code-review/SKILL.md): Guidelines for conducting rigorous pull request reviews.
  - [**modularize**](./modularize/SKILL.md): Refactoring and decomposing large files while preserving API contracts.

  ### Productivity & Context
  - [**stop-slop**](./stop-slop/SKILL.md): Remove AI writing patterns from prose.
  - [**wait-what**](./wait-what/SKILL.md): Rapid corrective for model verbosity using `CONTEXT.md` vocabulary.
  - [**handoff**](./handoff/SKILL.md): Compact session context for passing to another agent.
  - [**writing-for-agents**](./writing-for-agents/SKILL.md): Writing documents for agents (skills, AGENTS.md, docs).

  ### Language, Runtimes & Frameworks
  - [**typescript**](./typescript/SKILL.md): Performance optimization, tsconfig settings, and typing patterns.
  - [**pnpm**](./pnpm/SKILL.md): pnpm package manager and workspace monorepo best practices.
  - [**bulletproof-react**](./bulletproof-react/SKILL.md): React architecture and clean component organization.
  - [**jsdoc**](./jsdoc/SKILL.md): JSDoc standards for exported APIs and CLI utilities.

  ### GitHub Workflows & Release
  - [**gh-cli**](./gh-cli/SKILL.md): Efficient repository operations using the GitHub CLI (`gh`).
  - [**changeset**](./changeset/SKILL.md): Semantic versioning, changelog tracking, and release management.
  - [**triage**](./triage/SKILL.md): State machine and agent briefs for GitHub issue triage.
  - [**groom-issue**](./groom-issue/SKILL.md): Interactive issue refinement and clarification.
  - [**write-issue**](./write-issue/SKILL.md): Interactive authoring and filing of new GitHub issues.
  - [**tackle-issue**](./tackle-issue/SKILL.md): End-to-end workflow for executing an issue through to a pull request.
  - [**sync-main**](./sync-main/SKILL.md): Git workflow for cleanly updating development branches.
</details>

## Installation

To add the official `the-hat` skill to your AI assistant (Cursor, Claude Code, Antigravity, etc.):

```bash
npx the-hat init
```
