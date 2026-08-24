# Evolving Living Notes: Retrospective Updates

One of the key advantages of The Hat over traditional static ADRs is that **Living Notes evolve without losing their original rationale**.

When constraints shift 6 months down the road, you should **not** rewrite the note from scratch or delete past decisions. Instead, you append a **Retrospective Update**.

---

## When to Append a Retrospective Update

Trigger a retrospective update when:
1. **New library release or platform API:** A runtime now natively supports something that previously required a custom wrapper (e.g. Node adding built-in SQLite or `.env` loading).
2. **Performance discovery:** Production telemetry reveals an unforeseen bottleneck with the S-tier pick.
3. **New candidate enters the hat:** A developer or community member proposes an innovative technique that wasn't considered originally.
4. **Scope evolution:** A previously iceboxed A-tier option is now ready to be promoted into the primary stack.

---

## Anatomy of a Retrospective Update

A retrospective update is added to the bottom of the existing note (`docs/evals/<topic>.md`) using the following structure:

```markdown
---

## 🔄 Retrospective Update (2026-09-15)

### Trigger / Context Change
Node 22 LTS added native environment parsing support without external dependencies, altering the trade-offs in Layer B (Lifecycle Ingestion).

### New Options Thrown in the Hat
| # | Option | Layer | Summary |
| - | ------ | ----- | ------- |
| `B4` | Native `process.loadEnvFile()` | Layer B | Built-in Node 22+ loader with zero runtime dependencies |

### Metric Re-evaluation
- **`B4` vs current S-Tier (`B2` - dotenv parser):**
  `B4` scores 10/10 on Zero-Peer Purity and Maintenance Burden. It matches `B2` in DX while eliminating 14kB of transitive parsing code.

### Tier List Impact
- **Was S-Tier displaced?** Yes.
- **New Public Story:** Stack `A2 + B4 + C1` (ArkType + Native Node Loader + Singleton).
- **Reasoning:** Since our minimum engine requirement moved to Node 22, the external loader is no longer necessary.

### Action Items
- [ ] Migrate `src/loader.ts` to `process.loadEnvFile()`.
- [ ] Deprecate `dotenv` peer dependency.
- [ ] Update changelog.
```

---

## Rules for Retrospectives

1. **Preserve the Original Context:** Do not modify the original evaluation section. Keep the historical record of what was decided and why it was right *at that time*.
2. **Assign Incremental IDs:** If Layer B had `B1`, `B2`, `B3`, name the new candidate `B4`.
3. **Explicitly State Displacement:** State clearly whether the existing S-tier story was replaced or if it withstood the new challenge.
4. **Use CLI Shortcut:** You can instantly append a blank update block using:
   ```bash
   npx the-hat update <topic-name>
   ```
