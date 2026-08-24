# <Problem title>

Living evaluation, not an ADR. Update this file as options enter or leave the hat. Promoted decisions belong in `docs/adr/`.

**Status:** working note for `#<issue>` / PR `#<pr>`. **Chosen public story:** <S stack, or “undecided”>.

---

## 1. Problem Statement

<What must be true when we are done — not the first idea that showed up. Frame around user pain, hard invariants, and constraints.>

- **Core Goal:** <Primary requirement>
- **Hard Constraints:** <Must-have non-negotiables>
- **Non-Goals / Out of Scope:** <Explicitly excluded areas>

---

## 2. Layer Map

Decompose the problem into orthogonal dimensions. Items within the same layer compete (substitutes); items across different layers compose (stacks).

- **Layer A (<Dimension Name>):** <What this layer decides — e.g. Syntax & Typing>
- **Layer B (<Dimension Name>):** <What this layer decides — e.g. Runtime Placement & Lifecycle>
- **Layer C (<Dimension Name>):** <What this layer decides — e.g. Distribution & Export Strategy>

> *Rule: Do not flatten orthogonal dimensions into one false-choice list.*

---

## 3. Metrics

| Metric | Question it asks | Weight / Priority |
| ------ | ---------------- | ----------------- |
| **<Metric 1>** | <What does this metric test?> | Critical / High / Med |
| **<Metric 2>** | <What does this metric test?> | Critical / High / Med |
| **<Metric 3>** | <What does this metric test?> | High / Med / Low |

---

## 4. The Hat (Option Inventory)

Put **every** candidate in the hat, including rejected and out-of-scope options, so they are scored and never silently resurface.

### Layer A: <Dimension Name>

| # | Option | Summary | Status |
| - | ------ | ------- | ------ |
| A1 | `<Name>` | <Brief description> | Active / Rejected / Out of Scope |
| A2 | `<Name>` | <Brief description> | Active / Rejected / Out of Scope |

### Layer B: <Dimension Name>

| # | Option | Summary | Status |
| - | ------ | ------- | ------ |
| B1 | `<Name>` | <Brief description> | Active / Rejected / Out of Scope |
| B2 | `<Name>` | <Brief description> | Active / Rejected / Out of Scope |

---

## 5. Detailed Evaluation

Score each option against the metrics in prose. Avoid vibe rankings without evidence.

### `A1` — <Option Name>
- **Strengths:** <Details>
- **Weaknesses / Footguns:** <Details>
- **Score against Metrics:** <Prose evaluation per metric>

### `A2` — <Option Name>
- **Strengths:** <Details>
- **Weaknesses / Footguns:** <Details>
- **Score against Metrics:** <Prose evaluation per metric>

### `B1` — <Option Name>
- **Strengths:** <Details>
- **Weaknesses / Footguns:** <Details>
- **Score against Metrics:** <Prose evaluation per metric>

---

## 6. Tier List & Stack Synthesis

Rank complete answers to the whole problem. A complete answer is typically a **Stack** (`Layer A pick + Layer B pick + ...`).

### 🏆 S-Tier (Chosen / Default Public Story)
- **Stack: `<A1 + B2>`**
  - **Why it wins:** <Clear justification based on metrics>
  - **Scope boundary:** What we ship in the immediate change.

### ❄️ A-Tier (The A-Tier Icebox / Optional Extensions)
- **`<A2 or B1>`**
  - **Why it's A-tier:** Great idea, highly rated, but *not strictly required* to close the current change.
  - **Tuck-away plan:** Kept here in the icebox until explicit demand or next milestone.

### 🟡 B-Tier (Viable Alternatives / Fallbacks)
- **`<Option>`**: Acceptable fallback if S-tier encounters unforeseen blockers.

### 🔴 C / D / E-Tier (Rejected)
- **`<Option>`**: Defeated due to <specific fatal flaw / metric failure>. Kept in note to prevent repeat debates.

---

## 7. Concrete S & A Usage

Show real code/usage examples for the primary use cases to ensure the decision works in practice.

### Use Case 1: <Name>

**S (Default Stack):**
```ts
// Concrete code showing S-tier usage
```

**A (Icebox / Extension):**
```ts
// Concrete code showing A-tier extension if enabled
```

---

## 8. Current Lean & Execution Plan

- **Shipping now:** <Explicit list of S-tier deliverables>
- **Iceboxed (A-tier):** <Explicit list of items deliberately NOT implemented today>

---

## 9. Changelog

- `YYYY-MM-DD`: Initial evaluation note created with problem definition, layers, hat inventory, and tier list.
