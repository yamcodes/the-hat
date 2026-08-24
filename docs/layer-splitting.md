# Layer Splitting: The Secret Sauce

Layer Splitting (Step 2) is the most critical conceptual discipline in The Hat framework. Without it, evaluations collapse into false choices between unrelated dimensions.

---

## What is a False Choice?

A **false choice** occurs when two options that address different technical concerns are evaluated as mutually exclusive competitors in a single flat list.

### ❌ The Tangled Anti-Pattern: A Flat Rivalry
Imagine a team debating how to validate and load configuration:

> *"Should we use a Zod schema, an environment variable CLI loader, a `.env` file watcher, or a typed global singleton?"*

In a flat debate, someone votes for "Zod" and someone else votes for "file watcher". The debate goes in circles because:
- **Zod** is a *type validation library*.
- **File watcher** is a *runtime lifecycle mechanism*.
- **CLI loader** is an *input ingestion strategy*.
- **Global singleton** is an *access & placement pattern*.

These are not rivals. They are **orthogonal dimensions** that can be stacked together!

---

## The Solution: Splitting Orthogonal Dimensions

When two options can both be true simultaneously or solve different parts of the problem, they belong to different **layers**.

### ✅ The Hat Deconstruction: Proper Layer Splitting

#### Layer A: Validation Engine (Dimension: Type & Schema Validation)
*Items here compete with each other (mutually exclusive substitutes):*
- `A1`: Zod schema
- `A2`: ArkType schema
- `A3`: Native TypeScript `as` assertions (no runtime check)

#### Layer B: Ingestion & Lifecycle (Dimension: Source & Trigger)
*Items here compete with each other:*
- `B1`: Build-time environment variable injection
- `B2`: Process boot-time `.env` loader
- `B3`: Dynamic hot-reloading file watcher

#### Layer C: Access Ergonomics (Dimension: Developer API)
*Items here compete with each other:*
- `C1`: Global `env` singleton export (`import { env } from './env'`)
- `C2`: Dependency-injected config factory (`createConfig()`)
- `C3`: Direct `process.env` proxy with types

---

## How to Test if You Have Real Layers

Ask this simple diagnostic question:

> **"Can I pick Option X from Group 1 AND Option Y from Group 2 to build a complete solution?"**

- **If YES:** Group 1 and Group 2 are **Layers**. They compose into a **Stack** (`A2 + B2 + C1`).
- **If NO (they are mutually exclusive substitutes for the exact same function):** They are **Options** inside the same layer.

---

## Common Software Engineering Layers

| Domain | Layer 1 (Orthogonal) | Layer 2 (Orthogonal) | Layer 3 (Orthogonal) |
| ------ | -------------------- | -------------------- | -------------------- |
| **API Design** | Parameter Typing (e.g. Generics vs Overloads) | Execution Placement (e.g. Middleware vs Decorator) | Error Representation (e.g. Result Monad vs Throws) |
| **State Management** | Reactivity Primitive (Signals vs Observables) | Storage Engine (LocalStorage vs IndexedDB vs Memory) | Sync Strategy (Optimistic vs Blocking vs Polling) |
| **CLI Tools** | Argument Parser (Yargs vs Commander vs Custom) | Execution Mode (Interactive TUI vs Pure Script) | Output Formatter (JSON stream vs Markdown vs Rich Table) |
| **Authentication** | Token Mechanism (JWT vs Opaque Session IDs) | Storage Location (HttpOnly Cookie vs Header Storage) | Refresh Strategy (Sliding window vs Background rotate) |

---

## Synthesizing the Stack

Once layers are split, the final winner in Step 6 is **not a single option**, but a **coherent Stack**:

$$\text{Solution Stack} = \text{Layer A [Pick]} + \text{Layer B [Pick]} + \text{Layer C [Pick]}$$

For example:
$$\text{S-Tier Stack} = \mathbf{A2} \text{ (ArkType validation)} + \mathbf{B2} \text{ (Boot-time loader)} + \mathbf{C1} \text{ (Global singleton)}$$

Layer splitting eliminates false dichotomies and produces crystal-clear architectural clarity.
