/** Inline critical CSS: 100% PageSpeed, 0 CLS, Zero-JS Required.
 * Combines the authentic raw clarity of early developer journals with crisp modern typography. */
export const CRITICAL_CSS = `
:root {
  --bg: #090a0f;
  --bg-surface: #12141c;
  --bg-card: #181b26;
  --bg-code: #0f111a;
  --text: #e6edf3;
  --text-muted: #8b949e;
  --text-dim: #6e7681;
  --border: #30363d;
  --border-subtle: #21262d;
  --accent: #58a6ff;
  --accent-hover: #79c0ff;
  --green: #3fb950;
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  --radius: 8px;
  --max-w: 780px;
}

@media (prefers-color-scheme: light) {
  :root {
    --bg: #ffffff;
    --bg-surface: #f6f8fa;
    --bg-card: #ffffff;
    --bg-code: #f6f8fa;
    --text: #1f2328;
    --text-muted: #656d76;
    --text-dim: #8c959f;
    --border: #d0d7de;
    --border-subtle: #eaeef2;
    --accent: #0969da;
    --accent-hover: #0550ae;
    --green: #1a7f37;
  }
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { background: var(--bg); color: var(--text); font-family: var(--font-sans); font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased; }
body { min-height: 100vh; display: flex; flex-direction: column; }

.wrap { width: 100%; max-width: var(--max-w); margin: 0 auto; padding: 0 20px; }

/* Header */
header.site-header { padding: 24px 0 20px; border-bottom: 1px solid var(--border); margin-bottom: 32px; background: var(--bg-surface); }
.site-nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.brand { font-family: var(--font-mono); font-size: 1.05rem; font-weight: 700; color: var(--text); text-decoration: none; display: flex; align-items: center; gap: 8px; }
.brand-pulse { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--green); }
.brand-tag { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; background: var(--bg-card); color: var(--accent); padding: 1px 7px; border-radius: 4px; border: 1px solid var(--border); }
.nav-links { display: flex; align-items: center; gap: 16px; font-family: var(--font-mono); font-size: 0.85rem; }
.nav-links a { color: var(--text-muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--accent); }

/* Main */
main { flex: 1; margin-bottom: 64px; }

.hero-banner { margin-bottom: 36px; padding-bottom: 24px; border-bottom: 1px solid var(--border-subtle); }
.page-title { font-size: 1.85rem; font-weight: 800; letter-spacing: -0.025em; line-height: 1.25; margin-bottom: 8px; }
.page-desc { font-size: 1rem; color: var(--text-muted); line-height: 1.5; }

/* Entry List */
.entry-list { display: flex; flex-direction: column; gap: 28px; }
.entry-card { display: block; text-decoration: none; padding: 22px 24px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); transition: border-color 0.15s, background 0.15s; }
.entry-card:hover { border-color: var(--accent); background: var(--bg-surface); }
.entry-meta { display: flex; align-items: center; gap: 10px; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px; }
.entry-title { font-size: 1.28rem; font-weight: 700; color: var(--text); line-height: 1.35; margin-bottom: 8px; }
.entry-excerpt { font-size: 0.95rem; color: var(--text-muted); line-height: 1.55; margin-bottom: 14px; }
.entry-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tag { font-family: var(--font-mono); font-size: 0.72rem; font-weight: 500; background: var(--bg-surface); color: var(--text-muted); padding: 1px 7px; border-radius: 4px; border: 1px solid var(--border); }

/* Single Entry */
article.entry { }
.entry-header { margin-bottom: 28px; border-bottom: 1px solid var(--border); padding-bottom: 20px; }
.entry-header .page-title { font-size: 2.1rem; }
.entry-log-box { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted); margin-top: 14px; padding: 10px 14px; background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius); }
.entry-log-item { display: flex; align-items: center; gap: 6px; }
.entry-log-item strong { color: var(--text); font-weight: 600; }

/* Typography & Content */
.content { font-size: 1.05rem; line-height: 1.7; color: var(--text); }
.content p { margin-bottom: 18px; }
.content h2 { font-size: 1.45rem; font-weight: 700; margin: 32px 0 14px; padding-bottom: 6px; border-bottom: 1px solid var(--border-subtle); letter-spacing: -0.015em; }
.content h3 { font-size: 1.2rem; font-weight: 600; margin: 24px 0 10px; }
.content ul, .content ol { margin: 0 0 18px 24px; }
.content li { margin-bottom: 6px; }
.content a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
.content a:hover { color: var(--accent-hover); }
.content blockquote { border-left: 3px solid var(--accent); padding: 10px 16px; margin: 20px 0; color: var(--text-muted); background: var(--bg-surface); border-radius: 0 var(--radius) var(--radius) 0; }
.content hr { border: 0; border-top: 1px solid var(--border); margin: 32px 0; }
.content code { font-family: var(--font-mono); font-size: 0.88em; background: var(--bg-code); color: var(--accent); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-subtle); }
.content pre { background: var(--bg-code); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px; overflow-x: auto; margin: 22px 0; }
.content pre code { background: transparent; color: var(--text); padding: 0; border: 0; font-size: 0.88rem; line-height: 1.5; }
.content table { width: 100%; border-collapse: collapse; margin: 22px 0; font-size: 0.92rem; }
.content th, .content td { padding: 8px 12px; border: 1px solid var(--border); text-align: left; }
.content th { background: var(--bg-surface); font-weight: 600; }

/* Footer */
footer.site-footer { border-top: 1px solid var(--border); padding: 28px 0; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-dim); text-align: center; background: var(--bg-surface); }
footer.site-footer a { color: var(--text-muted); text-decoration: none; }
footer.site-footer a:hover { color: var(--accent); }
`;
