// Run by the Dockerfile after scripts/build-posts.ts: writes the pages the Worker
// rendered on request and build-posts.ts does not (/papers, /paper/<slug>, /paper/<slug>.pdf) into dist/.
import * as fs from "node:fs";
import * as path from "node:path";
import { POSTS, SITE_META } from "../src/generated/posts";
import { PAPER_PDFS } from "../src/generated/paper-pdfs";
import { PAPERS } from "../src/paper-registry";
import { renderPapers } from "../src/render-papers";
import { renderPaper } from "../src/render-paper";

const dist = path.resolve("dist");
fs.mkdirSync(path.join(dist, "papers"), { recursive: true });
fs.writeFileSync(path.join(dist, "papers", "index.html"), renderPapers(POSTS, SITE_META));
let pages = 0, pdfs = 0;
for (const post of POSTS) {
  if (!PAPERS[post.slug]) continue;
  const dir = path.join(dist, "paper", post.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPaper(post, SITE_META));
  pages += 1;
  const b64 = PAPER_PDFS[post.slug];
  if (b64) { fs.writeFileSync(path.join(dist, "paper", `${post.slug}.pdf`), Buffer.from(b64, "base64")); pdfs += 1; }
}
console.log(`prerender: papers index, ${pages} paper pages, ${pdfs} pdfs`);
