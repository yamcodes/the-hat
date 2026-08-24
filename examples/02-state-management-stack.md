# Client-Side Application State Architecture

Living evaluation, not an ADR. Update this file as options enter or leave the hat. Promoted decisions belong in `docs/adr/`.

**Status:** Completed | **Chosen public story:** Stack `A1 + B2 + C1` (Fine-grained Signals + IndexedDB + Stale-While-Revalidate Sync)

---

## 1. Problem Statement

Build an offline-first state management architecture for a dashboard app handling 100k+ real-time events without UI lag.

- **Core Goal:** Fast UI rendering (<16ms frame budget), reliable offline durability, and automatic server synchronization.
- **Hard Constraints:** Must work in web workers; zero full-page re-renders during high-frequency telemetry spikes.
- **Non-Goals:** Real-time multi-cursor collaborative CRDTs.

---

## 2. Layer Map

- **Layer A (Reactivity Engine):** How changes propagate to the DOM / UI components.
- **Layer B (Persistence Storage):** Where local state is serialized and persisted across sessions.
- **Layer C (Sync Protocol):** How mutations synchronize with the backend REST/WebSocket API.

---

## 3. Metrics

| Metric | Question it asks | Weight |
| ------ | ---------------- | ------ |
| **Render Budget** | Does state mutation keep UI updates under 16ms under 1000 events/sec? | Critical |
| **Offline Durability** | Can the client store 50MB+ data across browser restarts? | Critical |
| **Developer Cognitive Load** | How much boilerplate is required to create a new state slice? | High |
| **Storage Quota Resilience** | Does the storage engine handle browser eviction warnings gracefully? | Medium |

---

## 4. The Hat

### Layer A: Reactivity Engine
| # | Option | Summary | Status |
| - | ------ | ------- | ------ |
| A1 | Fine-Grained Signals | Atomic signal primitives with fine-grained DOM subscribers | Active |
| A2 | Immutable Context State Store | Centralized single-state tree (Redux-style) with reducers | Active |
| A3 | Mutable Proxy Store | MobX-style observable proxy wrapping mutable objects | Active |

### Layer B: Persistence Storage
| # | Option | Summary | Status |
| - | ------ | ------- | ------ |
| B1 | LocalStorage JSON string | Sync key-value storage in browser | Active |
| B2 | IndexedDB Key-Range Store | Async transactional database with large quota | Active |
| B3 | SQLite in WASM (OPFS) | Embedded SQLite compiled to WebAssembly via Origin Private FS | Active |

### Layer C: Sync Protocol
| # | Option | Summary | Status |
| - | ------ | ------- | ------ |
| C1 | Optimistic SWR (Stale-While-Revalidate) | Immediate UI update + background queue sync | Active |
| C2 | Two-Way Persistent WebSocket Stream | Continuous duplex binary sync stream | Active |
| C3 | Blocking Request-Response | UI blocks until server responds | Rejected |

---

## 5. Detailed Evaluation Summary

- **`A1` (Signals):** Wins on Render Budget. Updates only the exact DOM nodes subscribed, avoiding component subtree re-renders.
- **`A2` (Immutable Store):** Fails Render Budget on 1000 events/sec due to garbage collection pressure and broad selector evaluations.
- **`B1` (LocalStorage):** Blocked by 5MB storage limit and synchronous I/O on the main thread.
- **`B2` (IndexedDB):** Balances large storage capacity (GBs), async I/O, and universal browser compatibility without WASM binary bloat.
- **`B3` (SQLite WASM):** Outstanding performance, but adds 800kB initial download and complex SharedArrayBuffer headers.
- **`C1` (Optimistic SWR):** High DX, works offline, simple retry backoff.
- **`C3` (Blocking):** Fatal flaw for offline-first dashboard.

---

## 6. Tier List & Stack Synthesis

### 🏆 S-Tier (The Core Stack)
- **Stack: `A1 + B2 + C1`** (Signals + IndexedDB + Optimistic SWR)
  - Delivers under-16ms render times, offline persistence, and seamless background sync.

### ❄️ A-Tier (The A-Tier Icebox)
- **`B3` (SQLite WASM via OPFS):** Kept in the icebox for a future "Power User / Pro" mode if local search on 1M+ records is required.

### 🔴 C / D-Tier (Rejected)
- **`B1` (LocalStorage):** Hard rejection due to quota and main-thread blocking.
- **`C3` (Blocking Sync):** Hard rejection due to offline requirements.

---

## 7. Concrete Usage

```ts
import { signal, persist, syncQueue } from '@/lib/state';

// 1. Fine-grained Signal (Layer A)
export const activeFilter = signal<'all' | 'flagged'>('all');

// 2. Persistent store slice (Layer B + C)
export const telemetryEvents = persist({
  key: 'telemetry_v1',
  storage: 'indexeddb',
  sync: syncQueue('/api/telemetry')
});
```

---

## 8. Current Lean

- **Shipping now:** Core S-Tier stack (`A1 + B2 + C1`).
- **Iceboxed:** SQLite WASM backend (`B3`).
