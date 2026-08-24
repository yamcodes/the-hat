# Metrics Catalog & Custom Rubric Design

A core tenet of The Hat is: **No Vibe Rankings.** Every score must be justified against explicit metrics.

The Hat provides a **Baseline Metric Taxonomy** (universal software engineering concerns) alongside guidance for crafting **Problem-Tailored Metrics**.

---

## 1. The Baseline Metric Taxonomy

You can draw from these standard metrics when evaluating typical technical designs:

### 🛡️ Honesty & Footguns
- **Question:** Does the API do what it says on the tin? How easily can a consumer shoot themselves in the foot?
- **High score:** Impossible to misuse, compile-time checks catch runtime errors, transparent failure modes.
- **Low score:** Hidden assumptions, silent failures, subtle race conditions, type-widening leaks.

### 🧹 Maintenance Burden & Cognitive Load
- **Question:** How much ongoing code and mental overhead does this approach add to the team?
- **High score:** Small surface area, zero external dependencies, standard language idioms, easy to onboard.
- **Low score:** Custom mini-frameworks, complex meta-programming, tangled lifecycle hooks, brittle mock setups.

### ✨ Developer Experience (DX) & Ergonomics
- **Question:** How clean, intuitive, and readable is the consumer's call site?
- **High score:** Auto-complete works seamlessly, zero boilerplate for 90% use cases, helpful error messages.
- **Low score:** Deeply nested callbacks, required boilerplate wrappers, poor IDE diagnostics.

### 🧩 Composability & Extensibility
- **Question:** Can this solution compose with existing libraries and future requirements without rewrites?
- **High score:** Functional composition, standard interfaces, easily wrapped or decorated.
- **Low score:** Monolithic lockdown, tight coupling to proprietary runtimes or single vendors.

### ⚡ Performance & Weight
- **Question:** What is the runtime CPU, memory, and bundle size footprint?
- **High score:** Zero runtime overhead, tree-shakeable, sub-millisecond execution.
- **Low score:** Heavy transitive dependencies, high memory allocations, blocking I/O on hot paths.

### ⚖️ Tax Fairness & Migration Cost
- **Question:** Does the solution impose a tax on users who don't need the advanced feature? How hard is it to adopt or leave?
- **High score:** Pay-only-for-what-you-use, gradual migration path, non-breaking opt-in.
- **Low score:** Universal breaking changes, heavy global wrapper required for simple tasks.

---

## 2. Crafting Custom Problem-Tailored Metrics

While baseline metrics are useful, **the best metrics match the exact pain of your problem**.

### Rules for Inventing Metrics:
1. **Name the Pain:** If you are rewriting a legacy CLI because flags are hard to discover, create a metric named `Flag Discoverability`.
2. **Frame as a Question:** Every custom metric must ask a crisp yes/no or comparative question.
3. **Avoid Synonym Metrics:** Do not create `Simplicity`, `Cleanliness`, and `Elegance` in the same note,they collapse into the same subjective vote.

### Examples of Custom Domain Metrics:

| Topic | Custom Metric | The Question It Asks |
| ----- | ------------- | -------------------- |
| **Edge Compute** | `Cold-Start Budget` | Does the option add >15ms to V8 isolate startup time? |
| **SDK Design** | `Zero-Peer Purity` | Can a user import this in Node/Bun/Browser without installing peer dependencies? |
| **Schema Validation** | `Serialization Parity` | Does the schema output valid JSON Schema without manual transformers? |
| **Doc Site Navigation** | `Search Latency` | Can a user find an API symbol in <2 keystrokes without network roundtrips? |

---

## 3. Formatting the Metrics Table in a Living Note

In your living note (`docs/evals/<topic>.md`), define your chosen metrics upfront:

```markdown
## Metrics

| Metric | Question it asks | Weight / Priority |
| ------ | ---------------- | ----------------- |
| **Honesty & Footguns** | Can an invalid configuration pass compilation? | Critical |
| **Zero-Peer Purity**   | Can this be imported without peer dependencies? | High |
| **Callsite Ergonomics**| Is boilerplate required for the 80% use case?   | High |
| **Bundle Footprint**   | Is the minified bundle size under 2kB?          | Medium |
```
