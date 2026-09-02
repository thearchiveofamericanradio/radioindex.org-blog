/**
 * Transform a JATS-lite paper source into one register's markdown post.
 *
 * This is the half of the pipeline that genuinely is a transformation. Section
 * order, headings, tables, facts and citations come from the single source, so
 * the registers cannot drift apart on any of them. Only the sentences are
 * per-register, and those are selected by @audience, not generated.
 *
 * Usage: node scripts/paper-build.mjs <source.xml> <voa|awl> <out.md>
 */
import { readFileSync, writeFileSync } from "node:fs";

const [srcFile, register, outFile] = process.argv.slice(2);
if (!srcFile || !register || !outFile) {
  console.error("usage: node scripts/paper-build.mjs <source.xml> <voa|awl> <out.md>");
  process.exit(2);
}
if (!["voa", "awl"].includes(register)) {
  console.error(`unknown register '${register}'. Known: voa, awl`);
  process.exit(2);
}

const xml = readFileSync(srcFile, "utf8");

const unesc = (s) =>
  s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

const one = (tag) => {
  const m = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return m ? unesc(m[1].trim()) : "";
};

/** Per-register front matter, falling back to a shared element when a paper
 * declares no variant. */
const pick = (tag) => {
  const m =
    xml.match(new RegExp(`<${tag} audience="${register}">([\\s\\S]*?)</${tag}>`)) ??
    xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return m ? unesc(m[1].trim()) : "";
};

// Facts are declared once. A register that spelled a number differently would be
// a silent contradiction between two published papers, so the value is
// substituted rather than retyped.
const facts = new Map();
for (const m of xml.matchAll(/<fact id="([^"]+)" value="([^"]*)"\/>/g)) {
  facts.set(m[1], unesc(m[2]));
}
const applyFacts = (text) =>
  text.replace(/\{\{fact:([a-z0-9-]+)\}\}/g, (whole, id) => {
    if (!facts.has(id)) {
      console.error(`unknown fact '${id}' referenced in ${register} text`);
      process.exit(1);
    }
    return facts.get(id);
  });

const lines = [];
lines.push(`# ${pick("article-title")}`);
lines.push("");
lines.push(`**Date**: ${one("pub-date")}  `);
lines.push(`**Author**: ${one("contrib")}  `);
lines.push(`**Tags**: ${pick("kwd-group")}`);
lines.push("");
// Any register banner is authored in the source, not injected here, so the
// builder never invents text that no one wrote.
const banner = pick("register-note");
if (banner) {
  lines.push(banner);
  lines.push("");
}
lines.push("---");
lines.push("");

let sections = 0;
let blocks = 0;
for (const sec of xml.matchAll(/<sec level="(\d)">([\s\S]*?)<\/sec>/g)) {
  const level = Number(sec[1]);
  const inner = sec[2];

  const titleMatch =
    inner.match(new RegExp(`<title audience="${register}">([\\s\\S]*?)</title>`)) ??
    inner.match(/<title>([\s\S]*?)<\/title>/);
  if (!titleMatch) continue;
  sections += 1;
  lines.push(`${"#".repeat(level)} ${unesc(titleMatch[1].trim())}`);
  lines.push("");

  // A block with no @audience belongs to every register: shared by design.
  const blockRe =
    /<(p|list|table)(?:\s+audience="([^"]*)")?>\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*<\/\1>/g;
  for (const b of inner.matchAll(blockRe)) {
    const audience = b[2];
    if (audience && audience !== register) continue;
    blocks += 1;
    lines.push(applyFacts(b[3].trim()));
    lines.push("");
  }
}

const out = lines.join("\n").replace(/\n{3,}/g, "\n\n");

// A rewrite pass once left NUL placeholders in a published paper and nothing
// noticed, because the prose still read well. Never emit one.
const control = [...out].filter((ch) => {
  const c = ch.charCodeAt(0);
  return c < 9 || (c > 13 && c < 32);
}).length;
if (control) {
  console.error(`refusing to write ${outFile}: ${control} control bytes in output`);
  process.exit(1);
}

writeFileSync(outFile, out.endsWith("\n") ? out : out + "\n");
console.log(
  `${outFile}: register=${register} sections=${sections} blocks=${blocks} facts=${facts.size}`,
);
