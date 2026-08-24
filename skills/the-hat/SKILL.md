---
name: the-hat
description: Structured solution evaluation framework. Compares design alternatives with a hat → metrics → tier-list loop, splitting composing layers and keeping a living note. Use when there are multiple ways to solve a design/architecture problem, the user says "throw it in the hat" or "/the-hat", asks for a tier list, design eval, or composing layers/dimensions, or when options look like they compose rather than compete — even if they have not named this skill.
metadata:
  framework: the-hat
---

# The Hat Framework

When several ways exist to solve an architectural or design problem, do not vibe-rank in chat. Run The Hat loop and maintain artifacts in a **living note** (in `docs/evals/<topic>.md`, not a premature static ADR).

---

## 🛑 AGENT EXECUTION GATE (MANDATORY CHECKPOINT)

LLMs tend to rush ahead to the tier list. You **MUST** execute this framework in two explicit phases:

### Phase 1: Problem Definition & Alignment (Steps 1–4)
In your initial response, output **ONLY Steps 1 through 4**:
1. **Problem statement** (invariant pain and hard constraints)
2. **Layer map** (orthogonal dimensions; items in different layers compose)
3. **The Hat inventory** (numbered list `A1`, `A2`, `B1`, `B2` including rejected/out-of-scope ideas)
4. **Metrics** (problem-tailored rubrics)

**STOP and ask the user for alignment:**
> *"I have structured the problem into [N] layers with [X] options in the hat and defined [Y] metrics. Before I evaluate and produce the tier list, does this layer breakdown and option inventory cover everything?"*

### Phase 2: Evaluation, Tier List & Living Note (Steps 5–9)
**Only AFTER the user confirms or adjusts Phase 1**, proceed to:
5. **Evaluate each hat item** in prose against the chosen metrics.
6. **Tier list (S / A / B / C / D / E)** with stack synthesis across layers.
7. **Concrete S & A usage** with code examples for real use cases.
8. **Write / update the living note** at `docs/evals/<topic>.md`.
9. **Icebox A-tier extras** (do NOT propose shipping A-tier extras for the immediate task).

---

## The 9-Step Loop

1. **Name the problem:** What must be true when we are done? Not the first idea that popped up.
2. **Split composing layers:** If "solutions" are not substitutes for the same thing, they are **orthogonal dimensions that compose**, not rivals in one list (e.g. typing vs placement). Do not flatten them into a false choice.
3. **Put every option in the hat:** Number them by layer (`A1`, `A2`, `B1`, `B2`...). Include already-rejected and out-of-scope options so they get scored instead of silently returning next week.
4. **Pick fit metrics:** Tailor metrics to the specific pain (honesty, footguns, simplicity, composability, DX, performance, maintenance burden, migration cost).
5. **Evaluate each hat item in prose:** Score rigorously against each metric. Comparison tables are welcome for close calls; ungrounded vibe rankings are forbidden.
6. **Tier list (S / A / B / C / D / E) & Stack Synthesis:**
   - **S-Tier:** The default public story / chosen stack (`A1 + B2`).
   - **A-Tier (The A-Tier Icebox):** Highly viable, great ideas, but *not required* to close the current change. Kept in the icebox.
   - **B-Tier:** Fallback / secondary options.
   - **C / D / E-Tier:** Defeated / rejected with recorded reasons.
7. **Show concrete usage for S and A:** Show actual code / API usage across all primary use cases.
8. **Keep a living note:** Write to `docs/evals/<topic>.md`. Slot new ideas into the existing note instead of restarting the debate.
9. **Do not ship A-tier extras:** Scope the immediate PR/implementation strictly to the S-tier story.

---

## Core Rules

- **Layers vs Rivals:** If two options can co-exist or answer different questions (e.g. "where it runs" vs "how it is typed"), they are **layers**, not competitors.
- **No Silent Drops:** Rejected options stay in the hat and receive scores. Silent drops cause bad ideas to resurface repeatedly.
- **The A-Tier Icebox:** Never pollute the immediate milestone with A-tier extensions. Keep them documented in the note until needed.
- **Living Notes over Premature ADRs:** An ADR is only needed when a decision becomes hard to reverse, carries permanent organizational baggage, or requires architectural consensus. Everything else is a living evaluation note.
