# 🎩 The Hat

> **An agent-native, living evaluation framework for technical design and architecture.**  
> Stop vibe-ranking in chat. Eliminate false choices with layer splitting. Ship the S-Tier stack and icebox the rest.

---

## ⚡ Quickstart

### 1. Initialize in Any Project
Instantly scaffold `docs/evals/`, evaluation templates, and AI agent skills in your repository:

```bash
npx the-hat init
```

### 2. Create a Living Evaluation Note
```bash
npx the-hat new api-wiring
```
Or for small, 1-page decisions:
```bash
npx the-hat new cache-strategy --minimal
```

### 3. Ask Your AI Assistant
In Cursor, Claude Code, Antigravity, or GitHub Copilot:
> *"Throw this in the hat: /the-hat"*

---

## 💡 Why The Hat?

Every engineering team and AI agent struggles with architectural decisions:

| The Trap | What Goes Wrong | How The Hat Fixes It |
| :--- | :--- | :--- |
| **Vibe-Ranking** | Pros/cons debated in chat without objective metrics; conclusions lost in chat history. | **Problem-Tailored Metrics & Living Notes:** All options evaluated against explicit rubrics and committed to `docs/evals/`. |
| **False Choices** | Orthogonal concerns (e.g. *Parameter Typing* vs *Wrapper Placement*) forced into a zero-sum deathmatch. | **Layer Splitting:** Deconstructs problems into independent dimensions that compose into complete **Stacks**. |
| **Premature ADRs** | Heavy, static post-mortems that bury rejected alternatives, causing bad ideas to resurface repeatedly. | **Living Hat Inventory:** Keeps rejected ideas scored in the note so they never silently resurface. |
| **Scope Creep** | Great secondary ideas bloat PRs and delay shipping. | **The A-Tier Icebox:** Preserves high-value extensions without letting them block the immediate S-Tier delivery. |

---

## 🔄 The 9-Step Evaluation Loop

```
1. Name Problem ──> 2. Split Layers ──> 3. Hat Inventory ──> 4. Fit Metrics
                                                                    │
                 [🛑 Phase 1 Agent Alignment Gate] <────────────────┘
                                │
5. Prose Eval   ──> 6. Tier List & Stack ──> 7. S/A Usage ──> 8. Living Note ──> 9. Icebox A-Tier
```

### Phase 1: Problem Definition & Alignment
1. **Name the Problem:** Define what must be true when done (the invariant user pain and constraints).
2. **Split Composing Layers:** Separate orthogonal dimensions (items in the same layer compete; items across layers compose).
3. **Put Every Option in the Hat:** Assign IDs (`A1`, `A2`, `B1`, `B2`), including rejected and out-of-scope ideas.
4. **Pick Fit Metrics:** Frame 3–6 questions testing the exact pain (Honesty, Maintenance Burden, DX, Zero-Weight Tax, etc.).

> **🛑 AI Agent Gate:** The agent halts after Step 4 to get user alignment on the problem decomposition before computing scores.

### Phase 2: Scoring, Synthesis & Execution
5. **Evaluate in Prose:** Score every option against every metric in technical prose.
6. **Tier List & Stack Synthesis:**
   - **🏆 S-Tier:** The chosen composite stack (`A2 + B2`) to ship now.
   - **❄️ A-Tier (The A-Tier Icebox):** Highly rated ideas preserved for later, not blocking today.
   - **🟡 B-Tier:** Viable contingency fallbacks.
   - **🔴 C/D/E-Tier:** Defeated options with fatal flaws recorded.
7. **Concrete S & A Usage:** Provide real, working code examples for all primary use cases.
8. **Keep a Living Note:** Save to `docs/evals/<topic>.md`.
9. **Do Not Ship A-Tier Extras:** Strictly restrict the immediate PR to the S-Tier deliverable.

---

## 🧩 The Secret Sauce: Layer Splitting

A **false choice** happens when you debate options that solve different parts of the problem:

❌ **False Choice:** *"Should we use a Zod schema, a CLI env loader, or a typed global singleton?"*

✅ **The Hat Layers:**
- **Layer A (Validation Engine):** `A1` Zod vs `A2` ArkType vs `A3` Native TypeScript
- **Layer B (Lifecycle Ingestion):** `B1` Build-time vs `B2` Process boot vs `B3` File watcher
- **Layer C (Access Ergonomics):** `C1` Global singleton vs `C2` Config factory vs `C3` Proxy

**Synthesized S-Tier Stack:** $\mathbf{A2} + \mathbf{B2} + \mathbf{C1}$

👉 Read the full guide: [Layer Splitting Deep Dive](docs/layer-splitting.md)

---

## 🤖 AI Agent & IDE Integrations

The Hat is agent-native and ships with drop-in integrations:

- **Cursor IDE:** Drop `.cursor/rules/the-hat.mdc` into your repo or use `.cursorrules`.
- **Universal Agent Skill:** Compatible with Antigravity, Claude Code, and Agent Skills standard via `.agents/skills/the-hat/SKILL.md`.
- **GitHub Copilot:** Add `integrations/copilot/copilot-instructions.md` to `.github/copilot-instructions.md`.
- **Claude Code:** Add `integrations/claude/the-hat-instructions.md` to `CLAUDE.md`.

---

## 📂 Repository Structure

```
.
├── SPEC.md                    # Formal specification of The Hat framework
├── README.md                  # Overview & quickstart
├── package.json               # CLI binary export
├── bin/
│   └── the-hat.mjs            # Zero-dependency CLI (init, new, update, list)
├── docs/                      # In-depth documentation
│   ├── overview.md            # Philosophy & comparison
│   ├── the-loop.md            # The 9-step loop & AI gate
│   ├── layer-splitting.md     # Orthogonal dimensions vs false choices
│   ├── metrics-catalog.md     # Baseline metrics taxonomy & custom rubrics
│   ├── tier-lists-and-stacks.md# S-Tier stacks & The A-Tier Icebox
│   └── retrospective-updates.md# Evolving living notes over time
├── templates/                 # Reusable templates
│   ├── evaluation-note.md     # Full canonical living note
│   ├── minimal-eval.md        # Compact 1-page evaluation
│   └── retrospective-update.md# Retrospective constraint addendum
├── examples/                  # Real-world worked examples
│   ├── 01-api-design-wiring.md
│   └── 02-state-management-stack.md
├── integrations/              # Assistant configs
│   ├── cursor/
│   ├── copilot/
│   └── claude/
└── skills/
    └── the-hat/               # Exportable agent skill
        ├── SKILL.md
        └── NOTE-TEMPLATE.md
```

---

## 🔄 Retrospective Updates

When requirements or dependencies change 6 months later, don't rewrite the note:
```bash
npx the-hat update api-wiring
```
This appends a structured `## 🔄 Retrospective Update` block to evaluate new options without erasing historical context.

---

## 📄 License

MIT © [Yam](https://github.com/yamcodes)
