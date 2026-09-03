import { BlogPost, SiteMeta } from "./types";
import { PAPER_CSS } from "./paper-css";
import { isCanonical, paperFor } from "./paper-registry";

/** Google Scholar reads Highwire tags only. The required trio is title, at least
 * one author, and publication date -- miss one and the page is processed as if it
 * carried no tags at all. `citation_pdf_url` is deliberately absent: Scholar
 * requires it to name a real PDF in the same subdirectory as the HTML, and this
 * worker has no PDF to point at. A tag naming a non-PDF is worse than no tag. */
function scholarTags(post: BlogPost, canonical: string): string {
  const year = post.date.slice(0, 4);
  const month = String(Number(post.date.slice(5, 7)));
  const day = String(Number(post.date.slice(8, 10)));
  return [
    `<meta name="citation_title" content="${attr(post.title)}">`,
    `<meta name="citation_author" content="Vincent, Mike">`,
    `<meta name="citation_author_institution" content="The Archive of American Radio">`,
    `<meta name="citation_publication_date" content="${year}/${month}/${day}">`,
    `<meta name="citation_technical_report_institution" content="The Archive of American Radio">`,
    `<meta name="citation_technical_report_number" content="${attr(reportNumber(post))}">`,
    `<meta name="citation_pdf_url" content="${canonical}.pdf">`,
    `<meta name="citation_abstract_html_url" content="${canonical}">`,
    `<meta name="citation_language" content="en">`,
    `<meta name="citation_keywords" content="${attr(post.tags.join("; "))}">`,
  ].join("\n  ");
}

/** The report number of a paper, from the registry. Numbers are assigned once and
 * written down; they are never derived from a slug. A derived number silently
 * changes when a slug changes, and a citation that moves is not an identifier.
 * See papers/NAMING.md. */
export function reportNumber(post: BlogPost): string {
  return paperFor(post.slug)?.id ?? "";
}

/** A post written as a paper carries its own abstract heading. Rendering the
 * template one as well shows the reader two abstracts, the excerpt and the real
 * one, under identical headings. */
function hasOwnAbstract(post: BlogPost): boolean {
  return /<h[1-6][^>]*>\s*Abstract\s*<\/h[1-6]>/i.test(post.html);
}

export function renderPaper(post: BlogPost, meta: SiteMeta): string {
  const canonical = `${meta.url}/paper/${post.slug}`;
  const entry = paperFor(post.slug);
  // A register variant points at the paper of record. Scholar wants one paper per
  // URL, so a variant must not compete with the rendering that carries the tags.
  const canonicalHref = entry
    ? `${meta.url}/paper/${entry.canonicalSlug}`
    : canonical;
  const tr = reportNumber(post);
  const pretty = new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const citation =
    `Vincent, Mike. "${post.title}." ${tr}. The Archive of American Radio, ${pretty}. ${canonical}.`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(post.title)} — ${tr}</title>
  <meta name="description" content="${attr(post.excerpt)}">
  <link rel="canonical" href="${canonicalHref}">
  ${isCanonical(post.slug) ? scholarTags(post, canonical) : ""}
  <style>${PAPER_CSS}</style>
</head>
<body>
  <nav class="paper-bar" role="navigation">
    <a href="/posts/${post.slug}">&larr; Back to dispatch</a>
    <button type="button" class="paper-print" onclick="window.print()">PDF</button>
  </nav>

  <article class="paper">
    <header class="paper-head">
      <p class="paper-series">${tr} &middot; Technical Report</p>
      <h1 class="paper-title">${esc(post.title)}</h1>
      <p class="paper-author">Mike Vincent</p>
      <p class="paper-affil">The Archive of American Radio</p>
      <p class="paper-date">${pretty}</p>
    </header>

    <aside class="paper-status" role="note">
      Broadcast dates, networks, sponsors and credits stated in this report are catalogue
      assertions. The newspaper radio logs and trade-periodical listings that attest them are
      held against each broadcast record at
      <a href="https://radioindex.org">radioindex.org</a> and should be consulted before the
      assertions are relied upon. This report is issued by the archive that produced the
      catalogue and has not been peer reviewed.
    </aside>

    ${hasOwnAbstract(post) ? "" : `<section class="paper-abstract">
      <h2>Abstract</h2>
      <p>${esc(post.excerpt)}</p>
    </section>`}

    <section class="paper-body">
      ${post.html}
    </section>

    <section class="paper-cite">
      <h2>How to cite</h2>
      <p class="paper-cite-text">${esc(citation)}</p>
    </section>

    <section class="paper-sources">
      <h2>Sources</h2>
      <p>
        Evidence for the broadcasts described above is published per record in the archive
        catalogue, where each dated broadcast carries its attesting newspaper radio logs and
        trade-periodical listings as page facsimiles. Consult
        <a href="https://radioindex.org">radioindex.org</a> for the record corresponding to
        each broadcast named in this report.
      </p>
      <p class="paper-raw">
        Machine-readable source: <a href="/posts/${post.slug}.md">Markdown</a>.
      </p>
    </section>
  </article>

  <footer class="paper-foot">
    <p>&copy; 2026 <a href="https://radioindex.org">The Archive of American Radio, Inc.</a></p>
  </footer>
</body>
</html>`;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function attr(s: string): string {
  return esc(s).replace(/\n/g, " ");
}
