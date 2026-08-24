# The Hat: Framework Overview

## Why "The Hat"?

Software engineering teams and AI coding assistants constantly face design forks:
- *"Should we use Redis, SQLite, or in-memory Maps?"*
- *"Should we write a CLI flag, a config file, or an environment variable parser?"*
- *"Should we use an inline callback helper or a dedicated wrapper class?"*

In practice, evaluation usually fails in one of three ways:

### 1. The Vibe-Ranking Trap
Discussions devolve into unstructured pros/cons in Slack, PR comments, or transient chat sessions. Opinions dominate over constraints, no explicit rubric is tested, and the conclusion is forgotten within a month.

### 2. The False-Choice Fallacy
Options that are actually **orthogonal layers** get forced into a zero-sum deathmatch (e.g. debating "inline helper vs CLI recipe", when one is *typing* and the other is *placement*).

### 3. The Premature ADR Problem
Traditional Architecture Decision Records (ADRs) are heavy, static post-mortems. They are written *after* the debate is over, rarely updated when assumptions shift, and bury rejected alternatives where future maintainers never look—causing defeated ideas to resurrect over and over.

---

## The Philosophy of Living Notes

The Hat introduces **Living Evaluation Notes** (`docs/evals/<topic>.md`):
- **Repo-native:** Stored directly in the codebase alongside the code it governs.
- **Exhaustive Hat:** Every alternative—including half-baked, rejected, and out-of-scope options—is placed in the hat and scored.
- **Living & Appendable:** When a library dependency changes, a performance bottleneck appears, or new requirements arrive, the note is updated via a structured retrospective addendum.
- **Promoted only when necessary:** A note only becomes an ADR if the decision is hard to reverse, carries permanent organizational overhead, and represents an irreversible trade-off.

---

## Summary of the Framework

```
                          ┌───────────────────────────┐
                          │   Step 1: Invariant Pain  │
                          └─────────────┬─────────────┘
                                        │
                          ┌─────────────▼─────────────┐
                          │  Step 2: Layer Splitting  │ (Orthogonal Dimensions)
                          └─────────────┬─────────────┘
                                        │
        ┌───────────────────────────────┴───────────────────────────────┐
        │                                                               │
┌───────▼──────────────────┐                                  ┌─────────▼──────────────┐
│ Step 3: Hat Inventory    │                                  │  Step 4: Fit Metrics   │
│ (A1, A2, B1, B2...)      │                                  │  (Problem-tailored)    │
└───────┬──────────────────┘                                  └─────────┬──────────────┘
        │                                                               │
        └───────────────────────────────┬───────────────────────────────┘
                                        │
                          [🛑 PHASE 1 ALIGNMENT GATE]
                                        │
                          ┌─────────────▼─────────────┐
                          │ Step 5: Prose Evaluation  │
                          └─────────────┬─────────────┘
                                        │
                          ┌─────────────▼─────────────┐
                          │ Step 6: Tier List & Stack │ (S-Tier Stack vs A-Tier Icebox)
                          └─────────────┬─────────────┘
                                        │
                          ┌─────────────▼─────────────┐
                          │  Step 7: S & A Usage Code │
                          └─────────────┬─────────────┘
                                        │
                          ┌─────────────▼─────────────┐
                          │ Step 8: Save Living Note  │
                          └─────────────┬─────────────┘
                                        │
                          ┌─────────────▼─────────────┐
                          │ Step 9: Icebox A-Tier     │ (Scope Creep Killer)
                          └───────────────────────────┘
```
