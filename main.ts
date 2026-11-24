// SPDX-License-Identifier: MIT
// One-Liner Laugh Lab — deterministic emitter.
// Writes exactly one funny line to /output/entry.txt. No randomness, no deps.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was told to pick up everything on the floor. Nobody specified a return policy.";

// Fail loudly rather than ever emitting an entry that breaks the gate:
// UTF-8, 1-200 chars, single line, not only whitespace.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.trim() === ""
) {
  throw new Error("entry line violates the 1-200 char single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
