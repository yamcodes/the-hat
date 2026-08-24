# JSON Schema Serializer Wiring & Typing

Living evaluation, not an ADR. Update this file as options enter or leave the hat. Promoted decisions belong in `docs/adr/`.

**Status:** Completed | **Chosen public story:** Stack `A2 + B2` (Standard Schema Callback + Direct Root Export)

---

## 1. Problem Statement

We need to provide JSON Schema export capability for all schema definitions across the framework without bloating bundle sizes for users who only need runtime parsing.

- **Core Goal:** Allow consumers to export OpenAPI / JSON Schema compliant definitions easily.
- **Hard Constraints:** Zero additional bundle weight when JSON schema generation is unused; full TypeScript type-safety on schema inputs.
- **Non-Goals:** Building a custom JSON Schema validator from scratch.

---

## 2. Layer Map

- **Layer A (Typing & Contract):** How does the serializer function receive and infer the input schema?
- **Layer B (Placement & Export):** Where does the serializer function live in the package export map?

---

## 3. Metrics

| Metric | Question it asks | Weight |
| ------ | ---------------- | ------ |
| **Zero-Weight Tax** | Does a user importing parser pay bundle weight for JSON schema code? | Critical |
| **Type Safety & Autocomplete** | Does TypeScript infer return schema types without manual generics? | High |
| **Ecosystem Neutrality** | Does it work with standard schema libraries (Zod, ArkType, Valibot)? | High |
| **Callsite Ergonomics** | Can a user generate a schema in 1 readable line of code? | Medium |

---

## 4. The Hat

### Layer A: Typing & Contract

| # | Option | Summary | Status |
| - | ------ | ------- | ------ |
| A1 | Custom Generic Wrapper Interface | Hand-rolled TypeScript interface wrapping each parser | Active |
| A2 | Standard Schema Specification Contract | Conform to `@standard-schema/spec` interface | Active |
| A3 | Any-Casting Escape Hatch | Accept `any` and inspect runtime shape with duck typing | Rejected |

### Layer B: Placement & Export

| # | Option | Summary | Status |
| - | ------ | ------- | ------ |
| B1 | Method on Root Instance (`env.toJsonSchema()`) | Direct method attached to main env object | Active |
| B2 | Separate Subpath Export (`import { toJsonSchema } from 'pkg/json-schema'`) | Tree-shakeable subpath export | Active |
| B3 | Standalone CLI Tool | Only generate schema via CLI command | Out of Scope |

---

## 5. Detailed Evaluation

### `A1` : Custom Generic Wrapper
- **Pros:** Full control over custom properties and metadata.
- **Cons:** High maintenance burden; breaks when underlying schema libraries release major updates.

### `A2` : Standard Schema Specification Contract
- **Pros:** Zero maintenance burden for library-specific wrappers; natively interoperates with ArkType, Zod, and Valibot.
- **Cons:** Requires consumer schema libraries to support Standard Schema (all major ones do).

### `A3` : Any-Casting
- **Pros:** Easy to write initially.
- **Cons:** Fatal footgun. Silent runtime crashes if unsupported schema types are passed.

### `B1` : Method on Root Instance
- **Pros:** Highly discoverable in autocomplete (`env.toJsonSchema()`).
- **Cons:** Fails the Zero-Weight Tax metric! Forces every production deployment to bundle serializer code.

### `B2` : Separate Subpath Export
- **Pros:** Perfect tree-shaking; 0 bytes added to core runtime bundle; modern Node/Vite export standard.
- **Cons:** Slightly less discoverable than dot-autocomplete.

---

## 6. Tier List & Stack Synthesis

### 🏆 S-Tier (Default Public Story)
- **Stack: `A2 + B2`** (Standard Schema Contract + Subpath Export)
  - Perfect score on Zero-Weight Tax and Ecosystem Neutrality.

### ❄️ A-Tier (The A-Tier Icebox)
- **`B1` (Fluent Plugin Wrapper):** An optional fluent wrapper package (`pkg/plugin-schema`) could be added in the future if users demand method chaining. Iceboxed for now.

### 🔴 C / D-Tier (Rejected)
- **`A3`:** Rejected due to footguns and lack of compile-time safety.
- **`B3`:** Rejected because runtime applications need schema generation in memory for Swagger/OpenAPI endpoints.

---

## 7. Concrete S-Tier Usage

```ts
import { createEnv } from 'my-pkg';
import { toJsonSchema } from 'my-pkg/json-schema';
import { type } from 'arktype';

const env = createEnv({
  PORT: type('number >= 1000')
});

// Clean, tree-shakeable, 1-line usage
const schema = toJsonSchema(env);
console.log(schema);
```

---

## 8. Current Lean

- **Shipping in this PR:** `toJsonSchema` subpath export with `@standard-schema` typing (`A2 + B2`).
- **Iceboxed (A-Tier):** No fluent chain plugin or CLI generators will be added today.
