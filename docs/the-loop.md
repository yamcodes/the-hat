# The 9-Step Evaluation Loop

The core mechanism of The Hat is a disciplined 9-step loop.

---

## Phase 1: Alignment & Structuring

### Step 1: Name the Problem
- Define **what must be true when we are done**.
- State the invariant user pain, performance threshold, or operational constraint.
- Explicitly list non-goals and out-of-scope areas.

### Step 2: Split Composing Layers
- Separate multi-faceted solutions into **orthogonal dimensions**.
- *Rule:* If Option X and Option Y can both be true at the same time, they are **layers**, not rivals.
- Items within the same layer are mutually exclusive substitutes (`A1` vs `A2`).
- Items across different layers compose into solution stacks (`A1 + B2`).

### Step 3: Put Every Option in the Hat
- Inventory all candidate solutions under their respective layer.
- Assign unique IDs: `A1`, `A2` for Layer A; `B1`, `B2` for Layer B.
- **Never omit rejected or out-of-scope ideas.** Putting them in the hat ensures their fatal flaws are documented so they don't resurface next quarter.

### Step 4: Pick Fit Metrics
- Select 3–6 metrics that directly test the pain identified in Step 1.
- Use baseline metrics (DX, Footguns, Maintenance Burden) or invent custom domain rubrics (e.g. "Tax Fairness", "Cold-Start Budget", "Zero-Peer Purity").
- Frame each metric as a concrete question.

---

### 🛑 Checkpoint: Phase 1 Alignment Gate
*When working with AI agents or human peers, stop here.* Review the layer breakdown, option inventory, and metrics before investing effort into detailed evaluations.

---

## Phase 2: Scoring, Synthesis & Durability

### Step 5: Evaluate Each Hat Item in Prose
- Score every numbered option (`A1`, `A2`, etc.) against the chosen metrics.
- Provide concrete technical reasoning rather than vague adjectives ("feels cleaner").
- For close calls, summarize trade-offs in a side-by-side comparison table.

### Step 6: Tier List & Stack Synthesis
- **🏆 S-Tier (Chosen Story / Stack):** The recommended composite solution (`Layer A pick + Layer B pick`). This is what gets built now.
- **❄️ A-Tier (The A-Tier Icebox):** High-quality, viable features or alternate ergonomics that are *not strictly required* to solve the current problem. Stored safely in the icebox.
- **🟡 B-Tier (Viable Fallbacks):** Backup approaches in case S-tier hits unforeseen implementation hurdles.
- **🔴 C / D / E-Tier (Rejected):** Ideas defeated by specific metric failures.

### Step 7: Concrete S & A Usage Examples
- Write out real code snippets demonstrating S-tier usage for every critical use case.
- Provide optional A-tier usage examples to illustrate how future extensions would feel.
- If an option cannot be cleanly illustrated with real code, it does not belong in S-tier.

### Step 8: Keep a Living Note
- Save the full output to `docs/evals/<topic-slug>.md`.
- Link the note from relevant PRs, issues, or agent sessions.

### Step 9: Icebox A-Tier Extras
- **Kill scope creep.** Only implement what is in the S-tier stack.
- Do not let exciting A-tier extensions delay the PR or release.
