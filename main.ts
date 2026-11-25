// The Router Confesses: writes the router's confession line to entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The router confessed it drops the Wi-Fi on purpose, just to watch the whole family gather around it like a campfire.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
const expected = line + "\n";
writeFileSync(outPath, expected, "utf8");

// Verify after write: read the file back and confirm it matches exactly.
const written = readFileSync(outPath, "utf8");
if (written !== expected) {
  console.error(`error: entry.txt content does not match the expected line`);
  process.exit(1);
}
