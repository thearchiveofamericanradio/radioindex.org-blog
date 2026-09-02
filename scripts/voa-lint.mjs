/**
 * VOA Learning English linter.
 *
 * Checks prose against the VOA Special English Word Book (1,522 headwords, parsed
 * from the published book) plus a small allowlist of terms this subject cannot
 * avoid. VOA's own rule permits terms a story needs, so the allowlist is where
 * they belong -- but every entry must be explained on first use.
 *
 * Usage: node scripts/voa-lint.mjs <file.md> [--max-oov 2.0] [--max-sentence 30]
 * Exits 1 when a threshold is exceeded, so it can gate a build.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const BOOK = new Set(JSON.parse(readFileSync(join(HERE, "voa-words.json"), "utf8")));
const ALLOW = new Set(
  JSON.parse(readFileSync(join(HERE, "voa-allow.json"), "utf8")).map((w) => w.toLowerCase()),
);
// The published book is a CONTENT vocabulary: it lists neither the closed
// grammatical classes nor number words nor irregular forms, all of which VOA
// writing uses freely. Without these a linter reports its own gaps as prose faults.
const GRAMMAR = JSON.parse(readFileSync(join(HERE, "voa-grammar.json"), "utf8"));
const CLOSED = new Set([...GRAMMAR.function, ...GRAMMAR.numbers]);
const IRREGULAR = GRAMMAR.irregular;

const file = process.argv[2];
if (!file) {
  console.error("usage: node scripts/voa-lint.mjs <file.md> [--max-oov N] [--max-sentence N]");
  process.exit(2);
}
const opt = (name, fallback) => {
  const i = process.argv.indexOf(name);
  return i > 0 ? Number(process.argv[i + 1]) : fallback;
};
const maxOov = opt("--max-oov", 2.0);
const maxSentence = opt("--max-sentence", 30);

/** Strip everything that is not the author's running prose. Citations, tables,
 * code and web addresses are data; holding them to a reading vocabulary would
 * report noise and hide the real misses. */
function prose(raw) {
  let t = raw;
  t = t.replace(/^---\n[\s\S]*?\n---\n/, "");
  t = t.replace(/```[\s\S]*?```/g, " ");
  t = t.replace(/`[^`]*`/g, " ");
  t = t.replace(/^\|.*$/gm, " ");
  t = t.replace(/^\d+\.\s+<span id="n\d+">[\s\S]*?$/gm, " ");
  t = t.replace(/<[^>]+>/g, " ");
  t = t.replace(/https?:\/\/\S+/g, " ");
  t = t.replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1");
  return t;
}

/** Crude but adequate: undo the regular endings so one headword covers its forms. */
function lemmas(word) {
  const out = [word];
  const drop = [
    [/ies$/, "y"], [/ied$/, "y"], [/ier$/, "y"], [/iest$/, "y"], [/ily$/, "y"],
    [/ses$/, "se"], [/ches$/, "ch"], [/shes$/, "sh"], [/xes$/, "x"],
    [/s$/, ""], [/es$/, ""], [/ed$/, ""], [/ed$/, "e"], [/ing$/, ""], [/ing$/, "e"],
    [/ly$/, ""], [/er$/, ""], [/er$/, "e"], [/est$/, ""], [/est$/, "e"],
    [/ning$/, "n"], [/ned$/, "n"], [/ping$/, "p"], [/ped$/, "p"],
    [/ting$/, "t"], [/ted$/, "t"], [/ging$/, "g"], [/ged$/, "g"],
    [/ling$/, "l"], [/led$/, "l"], [/ment$/, ""], [/ness$/, ""],
    // Derivation, not inflection: the book lists "explain", "fail" and "strong",
    // so "explanation", "failure" and "strength" are the same vocabulary item.
    [/ation$/, "e"], [/ation$/, ""], [/tion$/, "t"], [/tion$/, "te"], [/sion$/, "d"],
    [/sion$/, "de"], [/ure$/, ""], [/ure$/, "e"], [/al$/, ""], [/ial$/, "y"],
    [/ive$/, ""], [/ive$/, "e"], [/ance$/, ""], [/ence$/, ""], [/ity$/, ""],
    [/ity$/, "e"], [/ous$/, ""], [/ful$/, ""], [/less$/, ""], [/able$/, ""],
    [/able$/, "e"], [/ible$/, ""], [/ist$/, ""], [/ism$/, ""], [/ize$/, ""],
    [/ish$/, ""], [/th$/, ""], [/or$/, ""], [/or$/, "e"], [/ee$/, ""],
    [/ings$/, ""], [/ings$/, "e"],
    [/ence$/, "ent"], [/ance$/, "ant"], [/ly$/, "le"], [/bly$/, "ble"],
  ];
  for (const [re, rep] of drop) if (re.test(word)) out.push(word.replace(re, rep));
  // Two rounds catch a stacked ending such as "assignments" -> "assignment" -> "assign".
  for (const form of [...out]) {
    for (const [re, rep] of drop) if (re.test(form)) out.push(form.replace(re, rep));
  }
  return out;
}

/** A closed hyphenated or joined compound counts as known when both halves are. */
function known(word) {
  if (BOOK.has(word) || ALLOW.has(word) || CLOSED.has(word)) return true;
  if (IRREGULAR[word] && (BOOK.has(IRREGULAR[word]) || ALLOW.has(IRREGULAR[word]))) return true;
  const base = word.replace(/'s$/, "");
  if (base !== word && known(base)) return true;
  for (const form of lemmas(word)) {
    if (BOOK.has(form) || ALLOW.has(form) || CLOSED.has(form)) return true;
  }
  if (word.includes("-")) return word.split("-").every((part) => part.length < 2 || known(part));
  // A joined compound counts when both halves are known ("news" + "paper"). Test the
  // lemmas too, or a plural compound such as "newspapers" never splits.
  for (const form of [word, ...lemmas(word)]) {
    for (let i = 2; i < form.length - 1; i += 1) {
      const a = form.slice(0, i);
      const b = form.slice(i);
      if ((BOOK.has(a) || CLOSED.has(a)) && (BOOK.has(b) || CLOSED.has(b))) return true;
    }
  }
  return false;
}

const text = prose(readFileSync(file, "utf8"));

// Proper nouns are names, not vocabulary. Only a capital inside a sentence counts,
// so a word that merely starts a sentence is still checked.
const proper = new Set();
for (const m of text.matchAll(/(?<![.!?]\s|^)\b([A-Z][a-zA-Z']+)/gm)) proper.add(m[1].toLowerCase());

const tokens = [...text.matchAll(/\b[A-Za-z][A-Za-z'-]*\b/g)].map((m) => m[0]);
const counts = new Map();
let checked = 0;
for (const tok of tokens) {
  const w = tok.toLowerCase().replace(/^'+|'+$/g, "");
  if (w.length < 2) continue;
  if (proper.has(w)) continue;
  checked += 1;
  if (!known(w)) counts.set(w, (counts.get(w) ?? 0) + 1);
}

const oovTotal = [...counts.values()].reduce((a, b) => a + b, 0);
const oovRate = checked ? (oovTotal / checked) * 100 : 0;

const sentences = text
  .replace(/\n+/g, " ")
  .split(/(?<=[.!?])\s+/)
  .map((s) => s.trim().split(/\s+/).filter(Boolean).length)
  .filter((n) => n > 2);
sentences.sort((a, b) => a - b);
const mean = sentences.reduce((a, b) => a + b, 0) / (sentences.length || 1);
const median = sentences[Math.floor(sentences.length / 2)] ?? 0;
const p90 = sentences[Math.floor(sentences.length * 0.9)] ?? 0;
const longest = sentences[sentences.length - 1] ?? 0;

console.log(`file            ${file}`);
console.log(`words checked   ${checked}`);
console.log(`outside book    ${oovTotal} (${oovRate.toFixed(2)}%)  unique ${counts.size}`);
console.log(`sentences       n=${sentences.length} mean=${mean.toFixed(1)} median=${median} p90=${p90} longest=${longest}`);

const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]);
if (ranked.length) {
  console.log("\ntop words outside the book:");
  for (const [w, n] of ranked.slice(0, 40)) console.log(`  ${String(n).padStart(3)}  ${w}`);
}

let fail = 0;
if (oovRate > maxOov) {
  console.error(`\nFAIL vocabulary: ${oovRate.toFixed(2)}% outside the book, limit ${maxOov}%`);
  fail = 1;
}
if (longest > maxSentence) {
  console.error(`FAIL sentence length: longest ${longest} words, limit ${maxSentence}`);
  fail = 1;
}
process.exit(fail);
