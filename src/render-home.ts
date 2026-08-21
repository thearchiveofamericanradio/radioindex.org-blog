import { BlogPost, SiteMeta } from "./types";
import { renderLayout } from "./render-layout";

export function renderHome(posts: BlogPost[], meta: SiteMeta): string {
  const postItems = posts
    .map(
      (p) => `
    <a href="/posts/${p.slug}" class="entry-card">
      <div class="entry-meta">
        <time datetime="${p.date}">${p.date}</time>
        <span>·</span>
        <span>${p.readingTimeMinutes} min read</span>
      </div>
      <h2 class="entry-title">${p.title}</h2>
      <p class="entry-excerpt">${p.excerpt}</p>
      <div class="entry-tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </a>`
    )
    .join("\n");

  const body = `
    <div class="hero-banner">
      <h1 class="hero-title">Archival Notes & Research</h1>
      <p class="hero-desc">Historical broadcast research, date verification, and catalog updates.</p>
    </div>
    <div class="entry-list">
      ${postItems}
    </div>
  `;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: meta.title,
    description: meta.description,
    url: meta.url,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      url: `${meta.url}/posts/${p.slug}`,
    })),
  };

  return renderLayout({
    title: meta.title,
    description: meta.description,
    canonical: meta.url,
    content: body,
    meta,
    jsonLd,
  });
}
