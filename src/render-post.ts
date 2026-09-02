import { BlogPost, SiteMeta } from "./types";
import { renderLayout } from "./render-layout";

export function renderPost(post: BlogPost, meta: SiteMeta): string {
  const canonical = `${meta.url}/posts/${post.slug}`;
  const body = `
    <article class="entry markdown-body">
      <header class="entry-header">
        <h1 class="entry-page-title">${post.title}</h1>
        <div class="entry-log-box">
          <div class="entry-log-items">
            <div class="entry-log-item"><strong>Date:</strong> <time datetime="${post.date}">${post.date}</time></div>
            <div class="entry-log-item"><strong>Author:</strong> ${post.author}</div>
            <div class="entry-log-item"><strong>Reading:</strong> ${post.readingTimeMinutes} min</div>
            <div class="entry-log-item"><strong>Tags:</strong> ${post.tags.join(", ")}</div>
          </div>
          <a href="/paper/${post.slug}" class="entry-paper-link">Read paper</a>
          <a href="/posts/${post.slug}.md" class="entry-raw-link" target="_blank" rel="noopener">Raw Markdown</a>
        </div>
      </header>
      <div class="content">
        ${post.html}
      </div>
    </article>
  `;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://radioindex.org",
    },
    publisher: {
      "@type": "Organization",
      name: "The Archive of American Radio",
      url: "https://radioindex.org",
      logo: {
        "@type": "ImageObject",
        url: "https://radioindex.org/assets/radio-index-512.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  return renderLayout({
    title: post.title,
    description: post.excerpt,
    canonical,
    content: body,
    meta,
    jsonLd,
  });
}
