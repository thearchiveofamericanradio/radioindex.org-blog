import * as fs from "node:fs";
import * as path from "node:path";
import { BlogPost, SiteMeta } from "../src/types";
import { renderHome } from "../src/render-home";
import { renderPost } from "../src/render-post";

const POSTS_DIR = path.resolve("./posts");
const GENERATED_DIR = path.resolve("./src/generated");
const DIST_DIR = path.resolve("./dist");

fs.mkdirSync(GENERATED_DIR, { recursive: true });
fs.mkdirSync(DIST_DIR, { recursive: true });

const SITE_META: SiteMeta = {
  title: "RadioIndex Archival Journal",
  description: "Forensic OTR audio archaeology, neural speech models, and primary newspaper scan verification.",
  url: "https://blog.radioindex.org",
  author: "radio index",
};

function parseMarkdown(content: string, filename: string): BlogPost {
  const lines = content.split("\n");
  let title = "";
  let date = "";
  let author = "radio index";
  let tags: string[] = [];
  
  const slug = filename.replace(/\.md$/, "");
  let bodyStartIndex = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("# ") && !title) {
      title = line.replace(/^#\s+/, "").trim();
    } else if (line.startsWith("**Date**:") || line.startsWith("Date:")) {
      date = line.replace(/\*\*Date\*\*:\s*/, "").replace(/^Date:\s*/, "").trim();
    } else if (line.startsWith("**Author**:") || line.startsWith("Author:")) {
      author = line.replace(/\*\*Author\*\*:\s*/, "").replace(/^Author:\s*/, "").trim();
    } else if (line.startsWith("**Tags**:") || line.startsWith("Tags:")) {
      const rawTags = line.replace(/\*\*Tags\*\*:\s*/, "").replace(/^Tags:\s*/, "").trim();
      tags = rawTags.split(",").map((t: string) => t.trim()).filter(Boolean);
    } else if (line === "---" && date) {
      bodyStartIndex = i + 1;
      break;
    }
  }

  const rawBody = lines.slice(bodyStartIndex).join("\n").trim();
  const html = renderGfmToHtml(rawBody);
  
  const plainText = rawBody.replace(/[#*`\[\]()]/g, "").replace(/\n+/g, " ").trim();
  const excerpt = plainText.slice(0, 190) + (plainText.length > 190 ? "..." : "");
  
  const wordCount = plainText.split(/\s+/).length;
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  return {
    slug,
    title: title || slug,
    date: date || "2026-08-21",
    author,
    tags,
    excerpt,
    readingTimeMinutes,
    html,
    markdown: content,
  };
}

function renderGfmToHtml(md: string): string {
  let text = md;

  // 1. Fenced code blocks
  const codeBlocks: string[] = [];
  text = text.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/gi, (_, lang, code) => {
    const idx = codeBlocks.length;
    codeBlocks.push(`<pre><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`);
    return `<!--CODE_BLOCK_${idx}-->`;
  });

  // 2. GitHub Alert / Callout Blocks (> [!NOTE], > [!TIP], > [!IMPORTANT], > [!WARNING], > [!CAUTION])
  text = text.replace(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*\n((?:>.*\n?)*)/gim, (_, kind, bodyLines) => {
    const lowerKind = kind.toLowerCase();
    const cleanBody = bodyLines.split('\n').map((l: string) => l.replace(/^>\s?/, '')).join('\n').trim();
    return `<div class="markdown-alert markdown-alert-${lowerKind}"><div class="markdown-alert-title">${kind}</div><p>${cleanBody}</p></div>\n\n`;
  });

  // 3. Tables
  text = text.replace(/((?:^\|[^\n]+\|\r?\n)+)/gm, (tableMatch) => {
    const lines = tableMatch.trim().split('\n').map((l: string) => l.trim());
    if (lines.length < 2) return tableMatch;
    
    const headers = lines[0].split('|').map((c: string) => c.trim()).filter(Boolean);
    const rows = lines.slice(2).map((rowLine: string) => {
      const cells = rowLine.split('|').map((c: string) => c.trim()).filter(Boolean);
      return `<tr>${cells.map((c: string) => `<td>${inlineFormat(c)}</td>`).join('')}</tr>`;
    });

    return `<table><thead><tr>${headers.map((h: string) => `<th>${inlineFormat(h)}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table>\n\n`;
  });

  // 4. Headings
  text = text.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  text = text.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  text = text.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // 5. Horizontal rules
  text = text.replace(/^---$/gim, "<hr>");

  // 6. Blockquotes
  text = text.replace(/^> (.*$)/gim, "<blockquote><p>$1</p></blockquote>");

  // 7. Lists & Paragraphs
  const blocks = text.split(/\n\n+/);
  const formatted = blocks.map((block: string) => {
    const trimmed = block.trim();
    if (!trimmed) return "";
    if (trimmed.startsWith("<!--CODE_BLOCK_") || trimmed.startsWith("<h1>") || trimmed.startsWith("<h2>") || 
        trimmed.startsWith("<h3>") || trimmed.startsWith("<table>") || trimmed.startsWith("<div class=\"markdown-alert") ||
        trimmed.startsWith("<blockquote>") || trimmed.startsWith("<hr>")) {
      return trimmed;
    }
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items = trimmed.split(/\n/).map((l: string) => {
        let itemText = l.replace(/^[-*]\s+/, "");
        if (itemText.startsWith("[x] ") || itemText.startsWith("[X] ")) {
          itemText = `<input type="checkbox" checked disabled> ${itemText.slice(4)}`;
        } else if (itemText.startsWith("[ ] ")) {
          itemText = `<input type="checkbox" disabled> ${itemText.slice(4)}`;
        }
        return `<li>${inlineFormat(itemText)}</li>`;
      }).join("");
      return `<ul>${items}</ul>`;
    }
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split(/\n/).map((l: string) => `<li>${inlineFormat(l.replace(/^\d+\.\s+/, ""))}</li>`).join("");
      return `<ol>${items}</ol>`;
    }
    return `<p>${inlineFormat(trimmed).replace(/\n/g, "<br>")}</p>`;
  });

  let output = formatted.join("\n\n");
  output = output.replace(/<!--CODE_BLOCK_(\d+)-->/g, (_, idx) => codeBlocks[Number(idx)] || "");
  return output;
}

function inlineFormat(str: string): string {
  let s = str;
  s = s.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
  s = s.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/\*(.*?)\*/g, "<em>$1</em>");
  s = s.replace(/~~(.*?)~~/g, "<del>$1</del>");
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return s;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function generateRss(posts: BlogPost[], meta: SiteMeta): string {
  const items = posts.map((p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${meta.url}/posts/${p.slug}</link>
      <guid isPermaLink="true">${meta.url}/posts/${p.slug}</guid>
      <description><![CDATA[${p.excerpt}]]></description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <author>radio index</author>
      ${p.tags.map((t) => `<category>${t}</category>`).join("")}
    </item>`).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${meta.title}</title>
    <link>${meta.url}</link>
    <description>${meta.description}</description>
    <language>en-us</language>
    <atom:link href="${meta.url}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;
}

function generateSitemap(posts: BlogPost[], meta: SiteMeta): string {
  const urls = [
    `  <url>
    <loc>${meta.url}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`,
    ...posts.map((p) => `  <url>
    <loc>${meta.url}/posts/${p.slug}</loc>
    <lastmod>${p.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`),
  ].join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function generateJsonFeed(posts: BlogPost[], meta: SiteMeta): string {
  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: meta.title,
    home_page_url: meta.url,
    feed_url: `${meta.url}/feed.json`,
    description: meta.description,
    items: posts.map((p) => ({
      id: `${meta.url}/posts/${p.slug}`,
      url: `${meta.url}/posts/${p.slug}`,
      title: p.title,
      content_html: p.html,
      summary: p.excerpt,
      date_published: new Date(p.date).toISOString(),
      tags: p.tags,
      authors: [{ name: p.author }],
    })),
  };
  return JSON.stringify(feed, null, 2);
}

function generateLlmsTxt(posts: BlogPost[], meta: SiteMeta): string {
  const list = posts.map((p) => `- [${p.title}](${meta.url}/posts/${p.slug}): ${p.excerpt} (Raw Markdown: ${meta.url}/posts/${p.slug}.md)`).join("\n");
  return `# ${meta.title}

> ${meta.description}

## Articles & Archival Reports

${list}

## About RadioIndex
RadioIndex is the authoritative source-of-record catalog and audio archive for Old Time Radio (OTR) preservation, containing 273,234 historical broadcasts.
`;
}

async function main() {
  const files = fs.readdirSync(POSTS_DIR).filter((f: string) => f.endsWith(".md")).sort().reverse();
  console.log(`Processing ${files.length} journal entries...`);
  
  const posts: BlogPost[] = files.map((f: string) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
    return parseMarkdown(raw, f);
  });

  const rss = generateRss(posts, SITE_META);
  const sitemap = generateSitemap(posts, SITE_META);
  const jsonFeed = generateJsonFeed(posts, SITE_META);
  const llms = generateLlmsTxt(posts, SITE_META);
  const robots = `User-agent: *\nAllow: /\n\nSitemap: https://blog.radioindex.org/sitemap.xml\n`;

  // 1. Write generated TS module for Worker
  const generatedCode = `// AUTO-GENERATED - DO NOT EDIT DIRECTLY
import { BlogPost, SiteMeta } from "../types";

export const SITE_META: SiteMeta = ${JSON.stringify(SITE_META, null, 2)};
export const POSTS: BlogPost[] = ${JSON.stringify(posts, null, 2)};
export const RSS_XML: string = ${JSON.stringify(rss)};
export const SITEMAP_XML: string = ${JSON.stringify(sitemap)};
export const JSON_FEED: string = ${JSON.stringify(jsonFeed)};
export const LLMS_TXT: string = ${JSON.stringify(llms)};
`;
  fs.writeFileSync(path.join(GENERATED_DIR, "posts.ts"), generatedCode);

  // 2. Write static dist/ directory for 100% PageSpeed edge serving
  fs.writeFileSync(path.join(DIST_DIR, "index.html"), renderHome(posts, SITE_META));
  fs.writeFileSync(path.join(DIST_DIR, "rss.xml"), rss);
  fs.writeFileSync(path.join(DIST_DIR, "feed.xml"), rss);
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemap);
  fs.writeFileSync(path.join(DIST_DIR, "feed.json"), jsonFeed);
  fs.writeFileSync(path.join(DIST_DIR, "posts.json"), jsonFeed);
  fs.writeFileSync(path.join(DIST_DIR, "llms.txt"), llms);
  fs.writeFileSync(path.join(DIST_DIR, "robots.txt"), robots);
  fs.writeFileSync(path.join(DIST_DIR, "health.json"), JSON.stringify({ status: "ok", posts_count: posts.length }));

  for (const post of posts) {
    const postDir = path.join(DIST_DIR, "posts", post.slug);
    fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, "index.html"), renderPost(post, SITE_META));
    fs.writeFileSync(path.join(DIST_DIR, "posts", `${post.slug}.md`), post.markdown);
    
    // Also write root short-slug directory
    const shortDir = path.join(DIST_DIR, post.slug);
    fs.mkdirSync(shortDir, { recursive: true });
    fs.writeFileSync(path.join(shortDir, "index.html"), renderPost(post, SITE_META));
    fs.writeFileSync(path.join(DIST_DIR, `${post.slug}.md`), post.markdown);
  }

  console.log(`Generated static dist/ directory and src/generated/posts.ts (${posts.length} entries)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
