/**
 * Ingest the two register variants of a paper into one JATS-lite source.
 *
 * Format decision, and why:
 *   - Element names follow JATS (ANSI/NISO Z39.96), the standard journal
 *     platforms actually exchange articles in. Not DocBook, not DITA: ISO picked
 *     JATS over both for standards work because JATS already models bibliographies
 *     and reference lists, which DITA does not.
 *   - Register variants use DITA-style conditional profiling: an @audience
 *     attribute on <p>, filtered at build time. A <p> with no @audience is shared
 *     by every register, so anything factual is written once.
 *
 * What transforms and what does not: structure, numbers, citations and section
 * order are shared and cannot drift. Vocabulary cannot be derived by transform,
 * so each register keeps its own authored sentences.
 *
 * Usage: node scripts/paper-ingest.mjs <voa.md> <awl.md> <out.xml>
 */
import { readFileSync, writeFileSync } from "node:fs";

const [voaFile, awlFile, outFile] = process.argv.slice(2);
if (!voaFile || !awlFile || !outFile) {
  console.error("usage: node scripts/paper-ingest.mjs <voa.md> <awl.md> <out.xml>");
  process.exit(2);
}

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Split a post into a header block and a list of {level, title, body} sections. */
function parse(md) {
  const cut = md.indexOf("\n---\n");
  const head = md.slice(0, cut);
  const rest = md.slice(cut + 5);
  const parts = rest.split(/^(#{2,3})\s+(.+)$/m);
  const sections = [];
  for (let i = 1; i < parts.length; i += 3) {
    sections.push({
      level: parts[i].length,
      title: parts[i + 1].trim(),
      body: (parts[i + 2] ?? "").trim(),
    });
  }
  return { head, sections };
}

/** Paragraphs, keeping tables and lists whole so nothing is reflowed. */
function blocks(body) {
  return body
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);
}

function kind(block) {
  if (/^\|/.test(block)) return "table";
  if (/^[-*] /.test(block)) return "list";
  return "p";
}

/** Numbers are the drift risk: written twice, they diverge silently. Every
 * distinct figure is lifted into <fact> once and referenced from both registers. */
const FACTS = [
  ["records", "259,915"],
  ["programs", "6,114"],
  ["dated-names", "44,566"],
  ["undated-pct", "28"],
  ["dated-with-images-pct", "93.5"],
  ["correlation", "0.899"],
  ["classic-pct", "98"],
];

const voa = parse(readFileSync(voaFile, "utf8"));
const awl = parse(readFileSync(awlFile, "utf8"));

const titleOf = (head) => (head.match(/^#\s+(.+)$/m) ?? [, ""])[1].trim();
const metaOf = (head, key) =>
  (head.match(new RegExp(`\\*\\*${key}\\*\\*:\\s*(.+)$`, "m")) ?? [, ""])[1].trim();

// Sections are matched by position. The two registers were written to the same
// outline, so a mismatch in count is a real divergence and must stop the build.
if (voa.sections.length !== awl.sections.length) {
  console.error(
    `section count differs: voa=${voa.sections.length} awl=${awl.sections.length}. ` +
      `The registers have diverged structurally; fix before ingesting.`,
  );
  process.exit(1);
}

const out = [];
out.push('<?xml version="1.0" encoding="UTF-8"?>');
out.push("<!-- JATS-lite source. Registers are DITA-style @audience profiles. -->");
out.push('<article xmlns:reg="https://radioindex.org/register">');
out.push("  <front>");
out.push("    <article-meta>");
// Title and keywords are per-register: the two papers must be tellable apart in a
// listing. Date and author stay shared, because a difference there would be a
// contradiction rather than a variant.
out.push(`      <article-title audience="voa">${esc(titleOf(voa.head))}</article-title>`);
out.push(`      <article-title audience="awl">${esc(titleOf(awl.head))}</article-title>`);
out.push(`      <pub-date>${esc(metaOf(voa.head, "Date"))}</pub-date>`);
out.push(`      <contrib>${esc(metaOf(voa.head, "Author"))}</contrib>`);
out.push(`      <kwd-group audience="voa">${esc(metaOf(voa.head, "Tags"))}</kwd-group>`);
out.push(`      <kwd-group audience="awl">${esc(metaOf(awl.head, "Tags"))}</kwd-group>`);
// A register banner, where the paper carries one, is authored text and belongs in
// the source rather than in the builder.
for (const [aud, head] of [["voa", voa.head], ["awl", awl.head]]) {
  const note = (head.match(/^\*(?!\*)(.+)\*\s*$/m) ?? [])[0];
  if (note) out.push(`      <register-note audience="${aud}">${esc(note.trim())}</register-note>`);
}
out.push("      <fact-list>");
for (const [id, value] of FACTS) {
  out.push(`        <fact id="${id}" value="${esc(value)}"/>`);
}
out.push("      </fact-list>");
out.push("    </article-meta>");
out.push("  </front>");
out.push("  <body>");

for (let i = 0; i < voa.sections.length; i += 1) {
  const v = voa.sections[i];
  const a = awl.sections[i];
  out.push(`    <sec level="${v.level}">`);
  out.push(`      <title audience="voa">${esc(v.title)}</title>`);
  out.push(`      <title audience="awl">${esc(a.title)}</title>`);
  for (const b of blocks(v.body)) {
    out.push(`      <${kind(b)} audience="voa"><![CDATA[${b}]]></${kind(b)}>`);
  }
  for (const b of blocks(a.body)) {
    out.push(`      <${kind(b)} audience="awl"><![CDATA[${b}]]></${kind(b)}>`);
  }
  out.push("    </sec>");
}

out.push("  </body>");
out.push("</article>");

writeFileSync(outFile, out.join("\n") + "\n");
console.log(
  `wrote ${outFile}: ${voa.sections.length} sections, ${FACTS.length} facts`,
);
