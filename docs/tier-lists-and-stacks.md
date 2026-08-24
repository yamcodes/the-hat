# Tier Lists, Stacks & The A-Tier Icebox

Once each option in the hat is scored against your metrics, The Hat produces a synthesized **Tier List** and **Stack**.

---

## The Tier Hierarchy

```
┌────────────────────────────────────────────────────────┐
│  🏆 S-Tier: Chosen Stack (The Default Public Story)     │  ---> Ships NOW in current PR
├────────────────────────────────────────────────────────┤
│  ❄️ A-Tier: The A-Tier Icebox (Optional / High-Quality) │  ---> Preserved, NOT blocking
├────────────────────────────────────────────────────────┤
│  🟡 B-Tier: Viable Fallback / Edge Alternatives         │  ---> Kept as contingency
├────────────────────────────────────────────────────────┤
│  🔴 C-Tier: Flawed / Suboptimal                         │  ---> Rejected with reason
├────────────────────────────────────────────────────────┤
│  ⚫ D/E-Tier: Fatal Flaw / Anti-Pattern                 │  ---> Hard rejected
└────────────────────────────────────────────────────────┘
```

---

## 1. S-Tier: The Public Story as a Stack

S-Tier represents the **chosen answer to the whole problem**.

Because problems are split into orthogonal layers (e.g. Layer A = Typing, Layer B = Placement), S-Tier is usually a **Stack**:

$$\text{S-Tier} = \mathbf{A1} \text{ (Generic Inference)} + \mathbf{B2} \text{ (Module Plugin)}$$

### Characteristics of S-Tier:
- It is the **default public story** documented in official guides.
- It satisfies all critical metrics.
- It represents the single, clean path recommended to 90% of users.

---

## 2. Step 9 & The A-Tier Icebox: Scope Creep Killer

The biggest danger in engineering design is **Scope Creep by Good Ideas**.

During brainstorming, high-quality ideas often emerge:
- *"What if we also support dynamic async schema fetchers?"*
- *"What if we also provide a CLI interactive wizard mode?"*
- *"What if we add an automatic migration codemod tool?"*

These ideas are not bad—in fact, they score very high! But if you try to ship them all together, the PR balloons, review stalls, and shipping is delayed by weeks.

### The A-Tier Icebox Rule:
> **A-Tier is for great ideas that are NOT strictly required to close the immediate change.**

1. **Score it:** Put it in the hat and give it an A-tier rating.
2. **Document usage:** Show how it would look in Section 7 of the note.
3. **Icebox it:** Explicitly state in the note that A-tier stays in the icebox and is **NOT being shipped today**.
4. **Ship S-tier only:** Close the PR with just the focused S-tier deliverable.

This preserves great engineering ideas in durable repo history without polluting current execution.

---

## 3. B-Tier: Viable Fallbacks

B-Tier contains approaches that work and don't have fatal flaws, but scored slightly lower than the S-tier stack (e.g., higher maintenance overhead or slightly more verbose call site).

They serve as documented fallbacks in case real-world implementation of the S-tier stack hits an unforeseen edge case.

---

## 4. C, D & E-Tier: Documenting Fatal Flaws

Options in C, D, and E tiers are rejected.

**Why keep them in the note?**
Without a living record of why an approach failed, another engineer (or an AI assistant in a future session) will inevitably suggest the same idea 3 months later.

By recording the exact metric failure (e.g. *"D-Tier: Option A3 breaks Node 18 CJS compatibility with no workaround"*), you permanently inoculate your codebase against repeating old debates.
