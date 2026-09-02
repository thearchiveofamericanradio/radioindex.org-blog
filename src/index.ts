import { Hono } from "hono";
import { POSTS, SITE_META, RSS_XML, SITEMAP_XML, JSON_FEED, LLMS_TXT } from "./generated/posts";
import { renderHome } from "./render-home";
import { renderPost } from "./render-post";
import { renderPaper } from "./render-paper";
import { renderPapers } from "./render-papers";

const app = new Hono();

const CACHE_HEADERS = {
  "Cache-Control": "public, max-age=300, s-maxage=86400, stale-while-revalidate=86400",
};

// Health probe
app.get("/health", (c) => c.json({ status: "ok", posts_count: POSTS.length }));

// Robots.txt
app.get("/robots.txt", (c) => {
  const robots = `User-agent: *\nAllow: /\n\nSitemap: https://blog.radioindex.org/sitemap.xml\n`;
  return c.text(robots, 200, {
    "Content-Type": "text/plain; charset=utf-8",
    ...CACHE_HEADERS,
  });
});

// RSS Feeds
app.get("/rss.xml", (c) => c.text(RSS_XML, 200, { "Content-Type": "application/xml; charset=utf-8", ...CACHE_HEADERS }));
app.get("/feed.xml", (c) => c.text(RSS_XML, 200, { "Content-Type": "application/xml; charset=utf-8", ...CACHE_HEADERS }));

// Sitemap
app.get("/sitemap.xml", (c) => c.text(SITEMAP_XML, 200, { "Content-Type": "application/xml; charset=utf-8", ...CACHE_HEADERS }));

// JSON Feed & Posts API
app.get("/feed.json", (c) => c.text(JSON_FEED, 200, { "Content-Type": "application/feed+json; charset=utf-8", ...CACHE_HEADERS }));
app.get("/posts.json", (c) => c.text(JSON_FEED, 200, { "Content-Type": "application/json; charset=utf-8", ...CACHE_HEADERS }));

// llms.txt
app.get("/llms.txt", (c) => c.text(LLMS_TXT, 200, { "Content-Type": "text/plain; charset=utf-8", ...CACHE_HEADERS }));

// Home Page
app.get("/", (c) => {
  const html = renderHome(POSTS, SITE_META);
  return c.html(html, 200, CACHE_HEADERS);
});

// Post Detail Pages & Raw Markdown
app.get("/posts/:slug", (c) => {
  let slug = c.req.param("slug");
  const isRawMd = slug.endsWith(".md");
  if (isRawMd) {
    slug = slug.slice(0, -3);
  }
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return c.html(`<h1>404 Not Found</h1><p><a href="/">Return to blog home</a></p>`, 404);
  }
  if (isRawMd) {
    return c.text(post.markdown, 200, { "Content-Type": "text/markdown; charset=utf-8", ...CACHE_HEADERS });
  }
  const html = renderPost(post, SITE_META);
  return c.html(html, 200, CACHE_HEADERS);
});

// Browse index of every paper. Google Scholar requires one, reachable in plain
// links, and it is what makes the paper pages crawlable at all.
app.get("/papers", (c) => c.html(renderPapers(POSTS, SITE_META), 200, CACHE_HEADERS));

// Paper view. Registered before the catch-all `/:slug` so Hono matches it first.
// An unknown slug hands off to the post route, which already owns the 404 body.
app.get("/paper/:slug", (c) => {
  const slug = c.req.param("slug");
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return c.redirect(`/posts/${slug}`, 302);
  }
  return c.html(renderPaper(post, SITE_META), 200, CACHE_HEADERS);
});

// Short URL redirect or direct serve
app.get("/:slug", (c) => {
  let slug = c.req.param("slug");
  const isRawMd = slug.endsWith(".md");
  if (isRawMd) {
    slug = slug.slice(0, -3);
  }
  const post = POSTS.find((p) => p.slug === slug);
  if (post) {
    if (isRawMd) {
      return c.text(post.markdown, 200, { "Content-Type": "text/markdown; charset=utf-8", ...CACHE_HEADERS });
    }
    return c.redirect(`/posts/${slug}`, 301);
  }
  return c.html(`<h1>404 Not Found</h1><p><a href="/">Return to blog home</a></p>`, 404);
});

export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    return app.fetch(request, env as Record<string, unknown>, ctx);
  },
};
