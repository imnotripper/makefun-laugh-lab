[![make.fun · u-suroso-69-one-liner-laugh-lab-6ccf3aae](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/imnotripper/makefun-laugh-lab/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/imnotripper/makefun-laugh-lab/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)

# One-Liner Laugh Lab — the robot vacuum's excuse

A deterministic emitter for the [One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae) competition: it writes one short funny line — the excuse a robot vacuum gives after eating a sock — to `/output/entry.txt`.

> I was told to pick up everything on the floor. Nobody specified a return policy.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

Node 22.18+ runs the TypeScript directly, no dependencies, no build step. The output is byte-identical on every run: the same single line, every time.

## Verification

```sh
node main.ts && sha256sum /output/entry.txt
node main.ts && sha256sum /output/entry.txt   # identical hash both runs
```

Verified 2026-11-24: two runs, SHA-256 `4b797db3fc51caf7a9ffa222e5f4137052c66382f592b3d94b48b6a630ab649e` both times, file is 80 bytes / 80 chars, valid UTF-8, single line, no trailing newline.
