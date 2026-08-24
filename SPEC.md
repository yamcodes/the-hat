# The Hat Framework Specification (v0.1.0)

## 1. Abstract & Motivation

Modern software engineering decisions frequently collapse into unproductive debate due to three systemic anti-patterns:
1. **Vibe-ranking:** Unstructured sentiment-driven consensus without measurable rubrics.
2. **False choices:** Treating complementary, orthogonal technical dimensions as mutually exclusive alternatives.
3. **Premature static ADRs:** Writing static decision records after the fact that fail to capture why rejected options failed, leading to repeated cycles of debating defeated ideas.

**The Hat Framework** is an agent-native, living evaluation framework designed to systematically deconstruct architectural problems into composing layers, score all candidate options against problem-tailored metrics, synthesize a coherent solution stack (S-Tier) while preserving non-critical extensions in an A-Tier Icebox, and maintain durable living notes inside repository codebases.

---

## 2. Core Terminology

- **The Hat:** The comprehensive, numbered inventory of all candidate solutions (`A1`, `A2`, `B1`, `B2`...), including rejected, legacy, and out-of-scope options.
- **Layer:** An orthogonal dimension of concern (e.g. *Parameter Typing* vs *Lifecycle Placement*). Options inside a single layer are mutually exclusive substitutes. Options across different layers compose.
- **False Choice:** The anti-pattern of placing options from different orthogonal layers into a single competitive list.
- **Solution Stack:** A composite architecture formed by selecting one winning option per orthogonal layer:
  $$\text{Stack} = \text{Layer A [Pick]} + \text{Layer B [Pick]} + \dots$$
- **Living Note:** A repository-tracked markdown file (`docs/evals/<topic>.md`) that records problem invariants, layer definitions, hat inventories, metric scores, tier rankings, and real-world usage code.
- **The A-Tier Icebox:** A dedicated tier for high-quality, viable ideas that are explicitly deferred to prevent scope creep during immediate execution.
- **Phase 1 Alignment Gate:** A mandatory stopping point in human and AI agent workflows requiring verification of problem statements, layer maps, hat inventories, and metrics before evaluation scoring begins.

---

## 3. The 9-Step Evaluation Protocol

An evaluation conforming to The Hat specification MUST execute the following 9 steps in sequence:

### Phase 1: Problem Definition & Layer Decomposition
1. **Step 1: Name the Problem**
   - Must define the invariant outcome (*what must be true when done*).
   - Must specify non-goals and out-of-scope boundaries.
2. **Step 2: Split Composing Layers**
   - Must verify whether proposed solutions are true substitutes or orthogonal dimensions.
   - Must define discrete, non-overlapping layers (Layer A, Layer B, etc.).
3. **Step 3: Put Every Option in the Hat**
   - Must assign unique identifiers per layer (`A1`, `A2`, `B1`, `B2`).
   - Must include rejected and out-of-scope options with explicit status markings.
4. **Step 4: Pick Fit Metrics**
   - Must define 3 to 6 explicit metrics framed as questions.
   - May draw from baseline taxonomy (Honesty, Maintenance Burden, DX, Composability, Performance, Tax Fairness) or define domain-specific metrics.

### 🛑 Mandatory Phase 1 Alignment Checkpoint
When automated by an AI agent or conducted in a team setting, execution MUST pause after Step 4 to obtain consensus on layers, candidates, and metrics before scoring.

### Phase 2: Rigorous Scoring & Synthesis
5. **Step 5: Prose Evaluation**
   - Must evaluate every hat item against every declared metric in technical prose.
   - Prohibits ungrounded vibe rankings.
6. **Step 6: Tier List & Stack Synthesis**
   - Must assign tiers:
     - **S-Tier:** Chosen public story / primary stack to ship.
     - **A-Tier:** The A-Tier Icebox (deferred extensions).
     - **B-Tier:** Viable contingency fallbacks.
     - **C / D / E-Tier:** Defeated candidates with explicit fatal flaws recorded.
7. **Step 7: Concrete S & A Usage**
   - Must provide executable or syntactically valid code examples for all primary use cases in S-tier (and optional A-tier).
8. **Step 8: Save Living Note**
   - Must persist the evaluation in the repository at `docs/evals/<topic>.md`.
9. **Step 9: Enforce the A-Tier Icebox**
   - The immediate implementation / pull request MUST be restricted to the S-Tier deliverable. A-Tier items MUST NOT block immediate completion.

---

## 4. Retrospective Updates Protocol

When technical constraints, dependency versions, or business requirements change:
1. The original evaluation sections MUST NOT be erased or rewritten.
2. A new section titled `## 🔄 Retrospective Update (YYYY-MM-DD)` MUST be appended to the living note.
3. New candidates MUST be assigned incremental IDs (e.g. `A4`, `B3`).
4. The note MUST explicitly declare whether the S-Tier stack was displaced or re-affirmed.

---

## 5. File System & Tooling Standards

Conforming repositories SHOULD adopt the following standard structure:

```
<project-root>/
├── docs/
│   └── evals/
│       ├── <topic-slug>.md            # Living evaluation notes
│       └── .templates/                # Local templates
├── .agents/skills/the-hat/            # Universal AI skill
│   ├── SKILL.md
│   └── NOTE-TEMPLATE.md
└── .cursor/rules/the-hat.mdc          # Cursor IDE integration rule
```

---

## 6. Conformance & Compliance

An evaluation artifact is considered **Hat-Compliant** if:
- [x] It defines an invariant problem statement with non-goals.
- [x] It separates orthogonal concerns into distinct layers.
- [x] All options are assigned unique alphanumeric identifiers (`A1`, `B2`).
- [x] Out-of-scope and rejected options remain in the hat with recorded rationale.
- [x] Metrics are stated as explicit questions before scoring.
- [x] The winning decision is synthesized as a composite Stack across layers.
- [x] S-Tier usage is demonstrated with concrete code.
- [x] A-Tier items are explicitly iceboxed and excluded from immediate shipping scope.
