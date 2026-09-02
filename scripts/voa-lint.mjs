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
// Academic register has its own controlled lexicon. Coxhead's Academic Word List
// is 570 word families defined as the academic words NOT in the General Service
// List, so it layers on top of a general vocabulary rather than competing with it.
// GSL plus AWL covers about 90 percent of academic text. Counted as a second tier,
// not as a fault: simple English can carry academic register, but only with this
// list named and bounded.
const AWL = new Set(JSON.parse(readFileSync(join(HERE, "awl-words.json"), "utf8")));

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
  // A post opens with a title and a metadata block (Date, Author, Tags) closed by a
  // rule. That is a record, not a sentence, and measuring it as one reports a
  // 43-word sentence that nobody wrote.
  t = t.replace(/^#\s+[^\n]*\n[\s\S]*?\n---\n/, "");
  t = t.replace(/```[\s\S]*?```/g, " ");
  t = t.replace(/`[^`]*`/g, " ");
  t = t.replace(/^\|.*$/gm, " ");
  t = t.replace(/^\d+\.\s+<span id="n\d+">[\s\S]*?$/gm, " ");
  // Reference sections are citation data, not the author's prose. Their contents
  // are titles and publisher names, which no reading vocabulary governs.
  t = t.replace(/^##\s+(Discography|Bibliography|Notes)\s*$[\s\S]*?(?=^##\s|\Z)/gm, " ");
  // A verbatim quotation is someone else's words. Rewriting it to fit a word list
  // would falsify the source, so it is measured out rather than reported.
  // Bounded on purpose: an unbalanced quote mark elsewhere in the file would let a
  // greedy span swallow whole sections, which silently hides real faults.
  // A quotation may wrap across lines, so newlines are allowed inside it, but a
  // blank line ends it: without that bound an unbalanced quote mark elsewhere lets
  // the span swallow whole sections and silently hide real faults.
  t = t.replace(/"(?:(?!\n\n)[^"]){20,400}"/g, " ");
  t = t.replace(/“(?:(?!\n\n)[^”]){20,400}”/g, " ");
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
// A lookbehind for "not after a full stop" misses a name that opens a sentence.
// Counting instead: a word written with a capital more often than without is a
// name, whatever position it happens to sit in.
const upper = new Map();
const lower = new Map();
for (const m of text.matchAll(/\b([A-Za-z][A-Za-z']+)\b/g)) {
  const w = m[1];
  const key = w.toLowerCase();
  const bin = /^[A-Z]/.test(w) ? upper : lower;
  bin.set(key, (bin.get(key) ?? 0) + 1);
}
const proper = new Set();
for (const [w, n] of upper) if (n > (lower.get(w) ?? 0)) proper.add(w);

/** Second tier: the academic list, tested through the same morphology. */
function academic(word) {
  if (AWL.has(word)) return true;
  for (const form of lemmas(word)) if (AWL.has(form)) return true;
  return false;
}

const tokens = [...text.matchAll(/\b[A-Za-z][A-Za-z'-]*\b/g)].map((m) => m[0]);
const counts = new Map();
const awlCounts = new Map();
let checked = 0;
for (const tok of tokens) {
  const w = tok.toLowerCase().replace(/^'+|'+$/g, "");
  if (w.length < 2) continue;
  if (proper.has(w)) continue;
  checked += 1;
  if (known(w)) continue;
  if (academic(w)) awlCounts.set(w, (awlCounts.get(w) ?? 0) + 1);
  else counts.set(w, (counts.get(w) ?? 0) + 1);
}

const oovTotal = [...counts.values()].reduce((a, b) => a + b, 0);
const awlTotal = [...awlCounts.values()].reduce((a, b) => a + b, 0);
const oovRate = checked ? (oovTotal / checked) * 100 : 0;
const awlRate = checked ? (awlTotal / checked) * 100 : 0;

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
console.log(`academic (AWL)  ${awlTotal} (${awlRate.toFixed(2)}%)  unique ${awlCounts.size}`);
console.log(`outside both    ${oovTotal} (${oovRate.toFixed(2)}%)  unique ${counts.size}`);
console.log(`sentences       n=${sentences.length} mean=${mean.toFixed(1)} median=${median} p90=${p90} longest=${longest}`);

// VOA writing puts the subject first. A sentence that opens with a preposition or
// an adverbial makes the reader hold a phrase in mind before learning what the
// sentence is about, which is the cost simple English exists to avoid.
const FRONTED = new Set(
  ("about above across after against along among around at before behind below beneath " +
    "beside besides between beyond by despite down during except for from in inside into " +
    "near of off on onto out outside over past since through throughout to toward towards " +
    "under underneath until up upon with within without " +
    "often sometimes usually always never rarely typically generally normally occasionally " +
    "frequently recently currently now then later finally first second third however " +
    "therefore thus meanwhile instead moreover furthermore nevertheless nonetheless " +
    "together where when while although though because if unless once").split(" "),
);
const fronted = [];
for (const s of text.replace(/\n+/g, " ").split(/(?<=[.!?])\s+/)) {
  const words = s.replace(/^[^A-Za-z]+/, "").split(/\s+/).filter(Boolean);
  if (words.length < 4) continue;
  const first = words[0].toLowerCase().replace(/[*_,]/g, "");
  if (FRONTED.has(first)) fronted.push(first);
}
const frontedPct = sentences.length ? (fronted.length / sentences.length) * 100 : 0;
console.log(`fronted openers ${fronted.length} (${frontedPct.toFixed(2)}%)`);

const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]);
if (ranked.length) {
  console.log("\ntop words outside both lists:");
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
