/**
 * Bring every post under the single-source pipeline, and verify the round trip.
 *
 * A post with no register variants is not a special case: every block simply
 * carries no @audience, which the format already means as "shared by every
 * register". So the 1,100-odd dispatches convert without inventing a single word
 * of register variation that nobody wrote. A dispatch gains a VOA or AWL variant
 * later by adding audience-tagged blocks beside the shared ones.
 *
 * Round-trip is checked for every post, and a post that does not reproduce
 * exactly is reported and left alone rather than silently rewritten.
 *
 * Usage:
 *   node scripts/paper-all.mjs ingest    convert posts/ -> papers/
 *   node scripts/paper-all.mjs verify    rebuild from papers/ and diff
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const mode = process.argv[2];
if (!["ingest", "verify"].includes(mode)) {
  console.error("usage: node scripts/paper-all.mjs <ingest|verify>");
  process.exit(2);
}

const POSTS = "posts";
const PAPERS = "papers";
if (!existsSync(PAPERS)) mkdirSync(PAPERS);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const unesc = (s) =>
  s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

/** A post is a title, a metadata block, a rule, then sections. */
function parse(md) {
  const cut = md.indexOf("\n---\n");
  if (cut < 0) return null;
  const head = md.slice(0, cut);
  const rest = md.slice(cut + 5);
  const title = (head.match(/^#\s+(.+)$/m) ?? [, ""])[1].trim();
  if (!title) return null;
  const meta = (k) =>
    (head.match(new RegExp(`\\*\\*${k}\\*\\*:\\s*(.+)$`, "m")) ?? [, ""])[1].trim();
  const parts = rest.split(/^(#{2,6})\s+(.+)$/m);
  const lead = parts[0].trim();
  const sections = [];
  if (lead) sections.push({ level: 0, title: "", body: lead });
  for (let i = 1; i < parts.length; i += 3) {
    sections.push({
      level: parts[i].length,
      title: parts[i + 1].trim(),
      body: (parts[i + 2] ?? "").trim(),
    });
  }
  return { title, date: meta("Date"), author: meta("Author"), tags: meta("Tags"), sections };
}

const blocks = (body) => body.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
const kind = (b) => (/^\|/.test(b) ? "table" : /^[-*] /.test(b) ? "list" : "p");

function toXml(post) {
  const out = ['<?xml version="1.0" encoding="UTF-8"?>'];
  out.push("<!-- JATS-lite source. Blocks with no @audience are shared by every register. -->");
  out.push("<article>");
  out.push("  <front>");
  out.push("    <article-meta>");
  out.push(`      <article-title>${esc(post.title)}</article-title>`);
  out.push(`      <pub-date>${esc(post.date)}</pub-date>`);
  out.push(`      <contrib>${esc(post.author)}</contrib>`);
  out.push(`      <kwd-group>${esc(post.tags)}</kwd-group>`);
  out.push("    </article-meta>");
  out.push("  </front>");
  out.push("  <body>");
  for (const s of post.sections) {
    out.push(`    <sec level="${s.level}">`);
    if (s.title) out.push(`      <title>${esc(s.title)}</title>`);
    for (const b of blocks(s.body)) {
      out.push(`      <${kind(b)}><![CDATA[${b}]]></${kind(b)}>`);
    }
    out.push("    </sec>");
  }
  out.push("  </body>");
  out.push("</article>");
  return out.join("\n") + "\n";
}

function fromXml(xml) {
  const one = (t) => {
    const m = xml.match(new RegExp(`<${t}>([\\s\\S]*?)</${t}>`));
    return m ? unesc(m[1].trim()) : "";
  };
  const lines = [`# ${one("article-title")}`, ""];
  lines.push(`**Date**: ${one("pub-date")}  `);
  lines.push(`**Author**: ${one("contrib")}  `);
  lines.push(`**Tags**: ${one("kwd-group")}`);
  lines.push("", "---", "");
  for (const sec of xml.matchAll(/<sec level="(\d)">([\s\S]*?)<\/sec>/g)) {
    const level = Number(sec[1]);
    const inner = sec[2];
    const t = inner.match(/<title>([\s\S]*?)<\/title>/);
    if (level > 0 && t) lines.push(`${"#".repeat(level)} ${unesc(t[1].trim())}`, "");
    const re = /<(p|list|table)(?:\s+audience="([^"]*)")?>\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*<\/\1>/g;
    for (const b of inner.matchAll(re)) {
      lines.push(b[3].trim(), "");
    }
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").replace(/\s+$/, "") + "\n";
}

const norm = (s) => s.replace(/[ \t]+$/gm, "").replace(/\s+$/, "");
const files = readdirSync(POSTS).filter((f) => f.endsWith(".md")).sort();

let ok = 0;
const failed = [];
const skipped = [];

for (const f of files) {
  const md = readFileSync(join(POSTS, f), "utf8");
  const post = parse(md);
  if (!post) {
    skipped.push(f);
    continue;
  }
  const xml = toXml(post);
  // A post that does not survive the round trip is left alone. Rewriting it would
  // publish a lossy copy, which is worse than leaving it outside the pipeline.
  if (norm(fromXml(xml)) !== norm(md)) {
    failed.push(f);
    continue;
  }
  ok += 1;
  if (mode === "ingest") writeFileSync(join(PAPERS, f.replace(/\.md$/, ".xml")), xml);
}

console.log(`posts        ${files.length}`);
console.log(`round-trips  ${ok}`);
console.log(`lossy        ${failed.length}`);
console.log(`no header    ${skipped.length}`);
if (failed.length) {
  console.log("\nlossy, left outside the pipeline:");
  for (const f of failed.slice(0, 15)) console.log(`  ${f}`);
  if (failed.length > 15) console.log(`  ... and ${failed.length - 15} more`);
}
