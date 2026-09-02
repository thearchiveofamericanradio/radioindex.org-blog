import { BlogPost, SiteMeta } from "./types";
import { PAPER_CSS } from "./paper-css";

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
    `<meta name="citation_author" content="The Archive of American Radio">`,
    `<meta name="citation_publication_date" content="${year}/${month}/${day}">`,
    `<meta name="citation_technical_report_institution" content="The Archive of American Radio">`,
    `<meta name="citation_technical_report_number" content="${attr(reportNumber(post))}">`,
    `<meta name="citation_abstract_html_url" content="${canonical}">`,
    `<meta name="citation_language" content="en">`,
    `<meta name="citation_keywords" content="${attr(post.tags.join("; "))}">`,
  ].join("\n  ");
}

/** A stable technical-report number. Technical report is an accepted Scholar
 * document type, so the series needs no journal, ISSN, or editorial board. */
export function reportNumber(post: BlogPost): string {
  const year = post.date.slice(0, 4);
  const seq = /walk-(\d+)/.exec(post.slug)?.[1] ?? "000";
  return `AAR-TR-${year}-${seq.padStart(4, "0")}`;
}

export function renderPaper(post: BlogPost, meta: SiteMeta): string {
  const canonical = `${meta.url}/paper/${post.slug}`;
  const tr = reportNumber(post);
  const pretty = new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const citation =
    `"${post.title}." ${tr}. The Archive of American Radio, ${pretty}. ${canonical}.`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(post.title)} — ${tr}</title>
  <meta name="description" content="${attr(post.excerpt)}">
  <link rel="canonical" href="${canonical}">
  ${scholarTags(post, canonical)}
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
      <p class="paper-author">The Archive of American Radio</p>
      <p class="paper-date">${pretty}</p>
    </header>

    <section class="paper-abstract">
      <h2>Abstract</h2>
      <p>${esc(post.excerpt)}</p>
    </section>

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
