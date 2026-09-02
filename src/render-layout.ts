import { CRITICAL_CSS } from "./styles";
import { SiteMeta } from "./types";

export function renderLayout({
  title,
  description,
  canonical,
  content,
  meta,
  jsonLd,
}: {
  title: string;
  description: string;
  canonical: string;
  content: string;
  meta: SiteMeta;
  jsonLd?: Record<string, unknown>;
}): string {
  const fullTitle = title.includes("radioindex") ? title : `${title} — radioindex.org`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" type="application/rss+xml" title="RadioIndex Blog RSS" href="https://blog.radioindex.org/rss.xml">
  <link rel="alternate" type="application/json" title="RadioIndex Blog JSON" href="https://blog.radioindex.org/feed.json">
  <link rel="icon" href="https://radioindex.org/assets/favicon-32x32.png" sizes="32x32">
  <link rel="apple-touch-icon" href="https://radioindex.org/apple-touch-icon.png">
  <meta property="og:site_name" content="radioindex.org blog">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://radioindex.org/og-card.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="https://radioindex.org/og-card.png">
  ${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ""}
  <style>${CRITICAL_CSS}</style>
</head>
<body>
  <header class="site-header">
    <div class="wrap site-nav">
      <a href="/" class="brand">radioindex.org <span class="brand-tag">Blog</span></a>
      <nav class="nav-links">
        <a href="/papers">Read paper</a>
        <a href="https://radioindex.org">Catalog</a>
        <a href="/rss.xml">RSS</a>
        <a href="/llms.txt">llms.txt</a>
      </nav>
    </div>
  </header>
  <main class="wrap">
    ${content}
  </main>
  <footer class="site-footer">
    <div class="wrap">
      <p>© 2026 <a href="https://radioindex.org">The Archive of American Radio, Inc.</a></p>
    </div>
  </footer>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
