# Agent & IDE Integrations

The Hat is agent-native and ships with drop-in configurations for all major AI coding assistants and IDEs.

---

## 1. Universal Agent Skill (`SKILL.md`)

The universal agent skill is compatible with Antigravity, Claude Code, Cursor, and any assistant supporting the Agent Skills standard.

- **Location:** `.agents/skills/the-hat/SKILL.md`
- **Installation:** Run `npx the-hat init` or copy from `skills/the-hat/`.
- **Trigger phrases:**
  - *"Throw this in the hat: /the-hat"*
  - *"Compare these architectural options with The Hat"*
  - *"Perform an evaluation note for this feature"*

---

## 2. Cursor IDE

The Hat scaffolds a dedicated `.cursor/rules/the-hat.mdc` rule file automatically scoped to evaluation notes:

```md
---
description: The Hat Solution Evaluation Framework
globs: docs/evals/**/*.md, docs/evals/*.md
alwaysApply: false
---

# The Hat Framework for Cursor
1. Do not vibe-rank in chat.
2. Execute Phase 1 first (Steps 1 to 4).
3. Pause for human alignment at the Phase 1 Gate before scoring.
4. Execute Phase 2 (Steps 5 to 9) after user confirmation.
5. Apply the no em-dash rule in all prose.
```

---

## 3. Claude Code & GitHub Copilot

- **Claude Code:** Reference `integrations/claude/the-hat-instructions.md` in your project's `CLAUDE.md`.
- **GitHub Copilot:** Copy `integrations/copilot/copilot-instructions.md` into `.github/copilot-instructions.md`.

---

## 4. Agent Execution Protocol

When an AI agent executes The Hat evaluation loop, it follows two strict phases:

1. **Phase 1 (Problem Definition & Alignment):** Identifies the invariant pain, splits composing layers, populates the hat inventory, and selects 3 to 6 fit metrics. **The agent stops here to seek user confirmation.**
2. **Phase 2 (Scoring & Execution):** After alignment, the agent evaluates each option in technical prose, builds the Tier List, produces concrete S-Tier usage code, and saves the living note to `docs/evals/<topic>.md`.
