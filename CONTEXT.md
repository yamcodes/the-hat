# The Hat

An agent-native, living evaluation framework designed to systematically deconstruct architectural problems into composing layers, score candidates against problem-tailored metrics, synthesize a coherent solution stack (S-Tier), and maintain durable living notes inside repository codebases.

## Language

**The Hat**:
The comprehensive, numbered inventory of all candidate solutions (`A1`, `A2`, `B1`, `B2`...), including rejected, legacy, and out-of-scope options.
_Avoid_: option bucket, choice pool

**Layer**:
An orthogonal dimension of concern (e.g. *Parameter Typing* vs *Lifecycle Placement*). Options inside a single layer are mutually exclusive substitutes. Options across different layers compose.
_Avoid_: category, bucket, dimension (when referring to the structural unit)

**False Choice**:
The anti-pattern of placing options from different orthogonal layers into a single competitive list.
_Avoid_: either-or fallacy

**Solution Stack**:
A composite architecture formed by selecting one winning option per orthogonal layer: `Stack = Layer A [Pick] + Layer B [Pick] + ...`.
_Avoid_: winning solution, chosen design (when describing multi-layer outputs)

**Living Note**:
A repository-tracked markdown file (`docs/evals/<topic>.md`) that records problem invariants, layer definitions, hat inventories, metric scores, tier rankings, and real-world usage code.
_Avoid_: static ADR, eval doc, RFC

**The A-Tier Icebox**:
A dedicated tier for high-quality, viable ideas that are explicitly deferred to prevent scope creep during immediate execution.
_Avoid_: backlog, nice-to-haves, v2 items

**Phase 1 Alignment Gate**:
A mandatory stopping point in human and AI agent workflows requiring verification of problem statements, layer maps, hat inventories, and metrics before evaluation scoring begins.
_Avoid_: checkpoint 1, initial check

**Fit Metric**:
A problem-tailored rubric framed as an explicit question to evaluate candidate options in prose.
_Avoid_: criteria, score card

## Relationships

- **The Hat** contains candidate options organized across one or more **Layers**
- Options in the same **Layer** compete; options in different **Layers** compose into a **Solution Stack**
- A **Living Note** documents **The Hat**, the **Layers**, the **Fit Metrics**, and the resulting **Solution Stack**
- **The A-Tier Icebox** holds viable candidates deferred from the immediate **Solution Stack**
- An evaluation must pass the **Phase 1 Alignment Gate** before proceeding to scoring

## Flagged ambiguities

- "ADR" was previously used for all design outcomes. Resolved: an ADR is reserved only for hard-to-reverse, permanent architectural consensus. Routine architectural choices and multi-option explorations live as **Living Notes** in `docs/evals/`.
- "Icebox" vs "Backlog". Resolved: **The A-Tier Icebox** is strictly for validated A-Tier candidates discovered during a Hat evaluation, distinct from general project issues.
