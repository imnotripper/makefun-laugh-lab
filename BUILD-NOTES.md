# Build notes — One-Liner Laugh Lab (u-suroso-69-one-liner-laugh-lab-6ccf3aae)

## Design brief

- **Deliverable:** `main.ts` (Node 22, no deps) writes ONE funny line to `/output/entry.txt`.
  Gate: UTF-8, 1–200 chars, single line, not only whitespace.
- **Prompt the line answers:** the excuse a robot vacuum gives after eating a sock.
- **Judge rubric, in order:** (1) short funny line answering the prompt; (2) funniness — a
  twist or deadpan turn that lands; (3) originality — fresh angle, not the first excuse
  anyone would think of or a stock joke; (4) fit — the joke comes from fitting the
  situation; (5) tightness — short, punchy, every word working.
- **Style profile** (grounded in our sibling winning-style one-liner, the toaster-error
  entry — *"E09: Someone put a fork in me again. I am filing this under workplace
  violence."*): first-person appliance voice, deadpan, one concrete absurd escalation,
  no setup, no AI clichés (no generic hype, no formulaic phrasing).
- **Competition:** $2.50 pot, 8 paid places, blind rounds ×3, round-1 cutoff
  2026-11-24T21:34:02Z (04:34 WIB 25 Nov).

## Candidates (10)

1. "It was on the floor. In my defense, so was I, and only one of us had a job description."
2. "The sock filed no complaint. I checked. Twice. It was deliciously silent."
3. "I didn't eat the sock. I performed an unscheduled intake audit. It failed."
4. "My manual says 'avoid small objects.' It does not say what to do when they taste like victory."
5. "The sock is now part of my internal dustbin, which is technically a promotion."
6. "I mistook it for a very flat, very quiet pet. We have since parted ways. Mostly."
7. "In my defense, the sock never once introduced itself as laundry."
8. "It entered my suction zone unannounced. I have filed it under 'lunch.'"
9. "I was told to pick up everything on the floor. Nobody specified a return policy."
10. "The sock had been on the floor for three days. At that point it was legally mine."

## Pairwise duels (against the rubric, in order)

- **1 vs 9:** 9 wins — same deadpan register, but 9's twist ("return policy") is a
  sharper escalation and it is tighter; 1 spends words on a setup that overstays.
- **2 vs 6:** 6 wins — the flat-quiet-pet misidentification is a fresher angle than
  2's "no complaint" denial, and "Mostly." lands as a kicker; 2's "deliciously
  silent" is the weakest word in the field.
- **3 vs 8:** 3 wins — "unscheduled intake audit" is the stronger bureaucratic
  deadpan; 8's "filed under lunch" is good but its first clause is setup. Both
  lose to 9 on fit: neither uses the vacuum's actual job as the excuse.
- **4 vs 10:** 10 wins — "legally mine" (squatter's-rights angle) is more original
  than 4's "taste like victory", which is the closest thing here to a first-thought
  joke; 4 also leans on a manual-setup.
- **5 vs 7:** 7 wins — "never introduced itself as laundry" is deadpan and original;
  5's "technically a promotion" is a decent line but "internal dustbin" is clunky
  and the joke is about the bin, not the sock.
- **6 vs 10:** 6 wins — the pet misidentification is funnier and fits the vacuum's
  literal sensing; 10 is clever but reads more like a legal joke than an excuse.
- **7 vs 9:** 9 wins — both are top-tier deadpan. 9 wins on **fit** (the joke is the
  vacuum's literal job description — pick up everything — turned back on its owner)
  and on **tightness** (no "in my defense" throat-clearing; the opening lands
  immediately). 7 is the runner-up.
- **3 vs 9 (semi-final):** 9 wins — 3's denial opening ("I didn't eat the sock")
  is a familiar excuse-joke frame; 9 never denies anything, it just cites policy.
  The "return policy" reframe (eating as a purchase with no returns) is the most
  original escalation in the field.
- **6 vs 9 (final):** 9 wins — 6 is the funniest single image, but 9 beats it on
  fit and tightness, and its twist survives re-reading better: the vacuum is not
  sorry, it is contractually correct.

## Winner

> "I was told to pick up everything on the floor. Nobody specified a return policy."

**Rationale:** first-person appliance voice, deadpan throughout; the twist reframes
eating the sock as a completed pickup with no return policy — an escalation that is
absurd yet follows literally from the vacuum's job, so the joke comes from fit, not
from a random punchline. It is not the first excuse anyone would think of (no
"it looked tasty", no "I thought it was a snack"). 80 chars, two short sentences,
every word working, opening lands immediately. Human-touch pass: read aloud — it
sounds like something the machine would actually file, not something generated.

## Verification

Run 2026-11-24 (Node v24.22.1, after the gate-guard edit — re-verified below):

- `node main.ts` twice: SHA-256 `4b797db3fc51caf7a9ffa222e5f4137052c66382f592b3d94b48b6a630ab649e`
  on both runs — byte-identical (`cmp` clean).
- `/output/entry.txt`: 80 bytes / 80 chars, valid UTF-8, exactly 1 line, no trailing
  newline, not only whitespace. Gate: 1–200 chars ✓, single line ✓.
- Self-review vs rubric: (1) short funny line answering the prompt ✓; (2) twist
  ("return policy") lands deadpan ✓; (3) original — no stock "tasty sock" angle ✓;
  (4) fit — the joke is the vacuum's literal job turned back on its owner ✓;
  (5) tight — 80 chars, no setup, every word working ✓.
