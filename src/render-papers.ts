import { BlogPost, SiteMeta } from "./types";
import { renderLayout } from "./render-layout";
import { reportNumber } from "./render-paper";

/** Google Scholar requires a browse index of the papers, reachable in plain
 * `<a href>` links and no more than ten hops from the site root. Every paper is
 * listed here in one page so the crawler reaches all of them in two hops, and
 * every entry is a static link -- no JavaScript, no form navigation. */
export function renderPapers(posts: BlogPost[], meta: SiteMeta): string {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  const groups = new Map<string, BlogPost[]>();
  for (const post of sorted) {
    const bucket = groups.get(post.date) ?? [];
    bucket.push(post);
    groups.set(post.date, bucket);
  }

  const sections = [...groups.entries()]
    .map(([date, items]) => {
      const rows = items
        .map(
          (p) =>
            `<li class="papers-row"><a href="/paper/${p.slug}"><span class="papers-tr">${reportNumber(
              p,
            )}</span> <span class="papers-title">${esc(p.title)}</span></a></li>`,
        )
        .join("\n");
      return `<section class="papers-group">
        <h2 class="papers-date"><time datetime="${date}">${date}</time></h2>
        <ol class="papers-list">${rows}</ol>
      </section>`;
    })
    .join("\n");

  const body = `
    <div class="papers">
      <h1 class="papers-heading">Technical Report</h1>
      <p class="papers-count">${posts.length}</p>
      ${sections}
    </div>
  `;

  return renderLayout({
    title: "Technical Report",
    description: meta.description,
    canonical: `${meta.url}/papers`,
    content: body,
    meta,
  });
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
