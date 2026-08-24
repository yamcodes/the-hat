# Copilot Instructions: The Hat Framework

When asked to evaluate solutions, design options, or architecture decisions:

1. **Identify Orthogonal Layers**: Decompose multi-faceted decisions into independent layers (e.g. storage layer vs serialization layer vs api interface).
2. **Inventory the Hat**: Label options by layer (`A1`, `A2`, `B1`, `B2`...). Never discard rejected options without recording their fatal flaws.
3. **Define Fit Metrics**: Explicitly state metrics and questions before scoring.
4. **Present Phase 1 Alignment**: Show Problem, Layers, Inventory, and Metrics first.
5. **Tier List & Stack Synthesis**: Recommend an S-tier stack (`Layer A pick + Layer B pick`). Move non-critical good ideas into the "A-Tier Icebox".
6. **Living Notes**: Reference or output markdown matching `docs/evals/` living note format.
