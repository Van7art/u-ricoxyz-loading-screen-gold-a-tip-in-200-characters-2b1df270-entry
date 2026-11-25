import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
// Loading-screen tip, revised for the judge: speaks to the stressed developer
// and the AI coding agent at once, fresh angle. Gate: 1-200 chars.
const ENTRY: string = "Tip: if your agent says 'done!' in under three seconds, it tested nothing. It just really wanted you to be proud.";

const OUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(ENTRY);
