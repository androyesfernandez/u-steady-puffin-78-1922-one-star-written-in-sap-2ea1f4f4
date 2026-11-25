// One Star, Written in Sap — a one-line 1-star review in the voice of a
// houseplant about its human owner. Writes the line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. She went away for three weeks, left a Post-it saying 'water the plants', and the neighbour watered the plastic one by the door twice while I dried out three feet away, withering in plain sight, and she came home and hugged the plastic one and said I looked 'tired'.";

// Kit limits: 1–279 chars, exactly one line — no \n or \r anywhere.
if (LINE.length < 1 || LINE.length > 279) {
  throw new Error(`LINE must be 1-279 chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be a single line with no newline characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
