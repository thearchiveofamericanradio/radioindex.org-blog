import { Hono } from "hono";
import { POSTS, SITE_META, RSS_XML, SITEMAP_XML, JSON_FEED, LLMS_TXT } from "./generated/posts";
import { renderHome } from "./render-home";
import { renderPost } from "./render-post";

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

// Raw Markdown endpoints
app.get("/posts/:slug.md", (c) => {
  const slug = c.req.param("slug");
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return c.text("404 Not Found", 404);
  return c.text(post.markdown, 200, { "Content-Type": "text/markdown; charset=utf-8", ...CACHE_HEADERS });
});

app.get("/:slug.md", (c) => {
  const slug = c.req.param("slug");
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return c.text("404 Not Found", 404);
  return c.text(post.markdown, 200, { "Content-Type": "text/markdown; charset=utf-8", ...CACHE_HEADERS });
});

// Post Detail Pages
app.get("/posts/:slug", (c) => {
  const slug = c.req.param("slug");
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return c.html(`<h1>404 Not Found</h1><p><a href="/">Return to journal</a></p>`, 404);
  }
  const html = renderPost(post, SITE_META);
  return c.html(html, 200, CACHE_HEADERS);
});

// Short URL redirect
app.get("/:slug", (c) => {
  const slug = c.req.param("slug");
  const post = POSTS.find((p) => p.slug === slug);
  if (post) {
    return c.redirect(`/posts/${slug}`, 301);
  }
  return c.html(`<h1>404 Not Found</h1><p><a href="/">Return to journal</a></p>`, 404);
});

export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    return app.fetch(request, env as Record<string, unknown>, ctx);
  },
};
