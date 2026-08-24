# The Hat Skills

This directory contains AI agent skills to improve development and decision-making workflows within The Hat repository and across conforming projects.

## Core Framework Skill

- [**the-hat**](./the-hat/SKILL.md): Compare design alternatives with a hat → metrics → tier-list loop, splitting composing layers and keeping a living note in `docs/evals/`.

<details>
  <summary>Internal Engineering & Workflow Skills</summary>

  These skills assist contributors and maintainers of this repository. They are marked with `internal: true` in their metadata and are accessible to agent harnesses.

  ### Design & Architecture
  - [**improve-codebase-architecture**](./improve-codebase-architecture/SKILL.md): Guidance for modularity, deep module extraction, and interface design.
  - [**excalidraw**](./excalidraw/SKILL.md): Guidelines for generating structured Excalidraw diagrams for architecture notes and docs.
  - [**zoom-out**](./zoom-out/SKILL.md): Ask the agent to zoom out to a higher abstraction level and provide architectural module mapping.

  ### Grilling & Product Specs
  - [**grill-me**](./grill-me/SKILL.md): Interactive grilling interview to clarify intent, requirements, and edge cases.
  - [**grill-with-docs**](./grill-with-docs/SKILL.md): Grilling workflow informed by documentation and domain context.
  - [**to-prd**](./to-prd/SKILL.md): Synthesizes conversation context into structured PRD specifications.

  ### Language, Runtimes & Frameworks
  - [**typescript**](./typescript/SKILL.md): Performance optimization, tsconfig settings, and typing patterns.
  - [**pnpm**](./pnpm/SKILL.md): pnpm package manager and workspace monorepo best practices.
  - [**bulletproof-react**](./bulletproof-react/SKILL.md): React architecture and clean component organization for the documentation app.
  - [**jsdoc**](./jsdoc/SKILL.md): JSDoc standards for exported APIs and CLI utilities.

  ### GitHub Workflows & Release
  - [**gh-cli**](./gh-cli/SKILL.md): Efficient repository operations using the GitHub CLI (`gh`).
  - [**changeset**](./changeset/SKILL.md): Semantic versioning, changelog tracking, and release management.
  - [**code-review**](./code-review/SKILL.md): Guidelines for conducting rigorous pull request reviews.
  - [**triage**](./triage/SKILL.md): State machine and agent briefs for GitHub issue triage.
  - [**groom-issue**](./groom-issue/SKILL.md): Interactive issue refinement and clarification.
  - [**write-issue**](./write-issue/SKILL.md): Interactive authoring and filing of new GitHub issues.
  - [**tackle-issue**](./tackle-issue/SKILL.md): End-to-end workflow for executing an issue through to a pull request.
  - [**sync-main**](./sync-main/SKILL.md): Git workflow for cleanly updating development branches.

  ### Testing, Debugging & Refactoring
  - [**tdd**](./tdd/SKILL.md): Test-driven development workflow and test suite design.
  - [**diagnose**](./diagnose/SKILL.md): Systematic root-cause debugging and diagnosis workflow.
  - [**modularize**](./modularize/SKILL.md): Refactoring and decomposing large files while preserving API contracts.

  ### Skill Authoring
  - [**write-a-skill**](./write-a-skill/SKILL.md): Best practices for designing and structuring new agent skills.
  - [**create-skill**](./create-skill/SKILL.md): Reference guide for standard skill development.
  - [**internalize-skill**](./internalize-skill/SKILL.md): Promoting external skills into project-internal skills.
</details>

## Installation

To add the official `the-hat` skill to your AI assistant (Cursor, Claude Code, Antigravity, etc.):

```bash
npx the-hat init
```
