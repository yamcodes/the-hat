# 1. The Hat 9-Step Evaluation Protocol

Date: 2026-08-24

## Status

Accepted

## Context

Technical architecture decisions frequently suffer from vibe-ranking, false choices (flattening orthogonal concerns into a single competing list), and premature static ADRs that do not record why alternative choices were rejected.

We need a systematic, repeatable evaluation protocol that AI agents and human engineers can use to deconstruct problems into orthogonal layers, score options in technical prose, synthesize a composite solution stack, and maintain living evaluation records.

## Decision

We adopt the 9-Step Hat Framework Protocol:
1. **Name the problem**: Define invariant outcomes and non-goals.
2. **Split composing layers**: Deconstruct orthogonal concerns into distinct layers.
3. **Put every option in the hat**: Numbered options (`A1`, `A2`, `B1`, `B2`), preserving rejected and legacy options.
4. **Pick fit metrics**: Problem-tailored rubrics framed as explicit questions.
- **Phase 1 Alignment Gate**: Mandatory pause for alignment on problem, layers, candidates, and metrics before scoring.
5. **Evaluate in prose**: Rigorous technical scoring against metrics.
6. **Tier list & Stack synthesis**: Form an S-Tier solution stack (`Stack = Layer A [Pick] + Layer B [Pick]`) and defer viable extras to the A-Tier Icebox.
7. **Concrete S & A usage**: Show valid, executable usage code.
8. **Save living note**: Persist in `docs/evals/<topic>.md`.
9. **Enforce A-Tier Icebox**: Restrict immediate implementation to the S-Tier deliverable.

## Consequences

- All evaluations must pause at the Phase 1 Alignment Gate before scoring.
- Architectural alternatives and evaluations are persisted as living notes in `docs/evals/`.
- Full Architectural Decision Records (ADRs) in `docs/adr/` are reserved for major structural consensus and hard-to-reverse decisions.
