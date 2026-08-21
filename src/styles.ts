/** Inline critical CSS: 100% PageSpeed, 0 CLS, GitHub Flavored Markdown Styling. */
export const CRITICAL_CSS = `
:root {
  --color-canvas-default: #0d1117;
  --color-canvas-subtle: #161b22;
  --color-canvas-inset: #010409;
  --color-border-default: #30363d;
  --color-border-muted: #21262d;
  --color-fg-default: #e6edf3;
  --color-fg-muted: #848d97;
  --color-fg-subtle: #6e7681;
  --color-accent-fg: #58a6ff;
  --color-accent-emphasis: #1f6feb;
  --color-success-fg: #3fb950;
  --color-attention-fg: #d29922;
  --color-danger-fg: #f85149;
  --color-done-fg: #a371f7;
  
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  --max-w: 880px;
}

@media (prefers-color-scheme: light) {
  :root {
    --color-canvas-default: #ffffff;
    --color-canvas-subtle: #f6f8fa;
    --color-canvas-inset: #f6f8fa;
    --color-border-default: #d0d7de;
    --color-border-muted: #d8dee4;
    --color-fg-default: #1f2328;
    --color-fg-muted: #656d76;
    --color-fg-subtle: #8c959f;
    --color-accent-fg: #0969da;
    --color-accent-emphasis: #0969da;
    --color-success-fg: #1a7f37;
    --color-attention-fg: #9a6700;
    --color-danger-fg: #cf222e;
    --color-done-fg: #8250df;
  }
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { background: var(--color-canvas-default); color: var(--color-fg-default); font-family: var(--font-sans); font-size: 16px; line-height: 1.5; -webkit-font-smoothing: antialiased; }
body { min-height: 100vh; display: flex; flex-direction: column; }

.wrap { width: 100%; max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }

/* Header */
header.site-header { padding: 20px 0; border-bottom: 1px solid var(--color-border-muted); margin-bottom: 32px; background: var(--color-canvas-subtle); }
.site-nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.brand { font-family: var(--font-mono); font-size: 1.05rem; font-weight: 700; color: var(--color-fg-default); text-decoration: none; display: flex; align-items: center; gap: 8px; }
.brand-pulse { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--color-success-fg); }
.brand-tag { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; background: var(--color-canvas-default); color: var(--color-accent-fg); padding: 2px 8px; border-radius: 6px; border: 1px solid var(--color-border-default); }
.nav-links { display: flex; align-items: center; gap: 16px; font-family: var(--font-mono); font-size: 0.85rem; }
.nav-links a { color: var(--color-fg-muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--color-accent-fg); }

/* Main */
main { flex: 1; margin-bottom: 64px; }

.hero-banner { margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid var(--color-border-muted); }
.hero-title { font-size: 1.85rem; font-weight: 700; letter-spacing: -0.025em; line-height: 1.25; margin-bottom: 8px; }
.hero-desc { font-size: 1rem; color: var(--color-fg-muted); line-height: 1.5; }

/* Entry List */
.entry-list { display: flex; flex-direction: column; gap: 20px; }
.entry-card { display: block; text-decoration: none; padding: 20px 24px; background: var(--color-canvas-subtle); border: 1px solid var(--color-border-default); border-radius: 6px; transition: border-color 0.15s; }
.entry-card:hover { border-color: var(--color-accent-fg); }
.entry-meta { display: flex; align-items: center; gap: 10px; font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-fg-muted); margin-bottom: 6px; }
.entry-title { font-size: 1.25rem; font-weight: 600; color: var(--color-fg-default); line-height: 1.35; margin-bottom: 8px; }
.entry-excerpt { font-size: 0.92rem; color: var(--color-fg-muted); line-height: 1.55; margin-bottom: 12px; }
.entry-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tag { font-family: var(--font-mono); font-size: 0.72rem; font-weight: 500; background: var(--color-canvas-default); color: var(--color-fg-muted); padding: 1px 7px; border-radius: 4px; border: 1px solid var(--color-border-default); }

/* GitHub-Flavored Markdown Body (.markdown-body) */
.markdown-body { font-size: 16px; line-height: 1.6; color: var(--color-fg-default); }
.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4 { margin-top: 28px; margin-bottom: 16px; font-weight: 600; line-height: 1.25; color: var(--color-fg-default); }
.markdown-body h1 { font-size: 2rem; padding-bottom: 0.3em; border-bottom: 1px solid var(--color-border-muted); margin-top: 0; }
.markdown-body h2 { font-size: 1.5rem; padding-bottom: 0.3em; border-bottom: 1px solid var(--color-border-muted); }
.markdown-body h3 { font-size: 1.25rem; }
.markdown-body p { margin-top: 0; margin-bottom: 16px; }
.markdown-body ul, .markdown-body ol { margin-top: 0; margin-bottom: 16px; padding-left: 2em; }
.markdown-body li { margin-top: 0.25em; }
.markdown-body li > p { margin-top: 0; margin-bottom: 4px; }
.markdown-body li > ul, .markdown-body li > ol { margin-top: 4px; margin-bottom: 4px; padding-left: 1.5em; }
.markdown-body hr { height: 0.25em; padding: 0; margin: 24px 0; background-color: var(--color-border-default); border: 0; }
.markdown-body blockquote { margin: 0 0 16px; padding: 0 1em; color: var(--color-fg-muted); border-left: 0.25em solid var(--color-border-default); }
.markdown-body code { padding: 0.2em 0.4em; margin: 0; font-size: 85%; white-space: break-spaces; background-color: var(--color-canvas-subtle); border-radius: 6px; font-family: var(--font-mono); }
.markdown-body pre { padding: 16px; overflow: auto; font-size: 85%; line-height: 1.45; background-color: var(--color-canvas-subtle); border-radius: 6px; margin-bottom: 16px; border: 1px solid var(--color-border-default); }
.markdown-body pre code { padding: 0; margin: 0; font-size: 100%; word-break: normal; white-space: pre; background: transparent; border: 0; }
.markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
.markdown-body th, .markdown-body td { padding: 6px 13px; border: 1px solid var(--color-border-default); font-size: 0.92rem; }
.markdown-body th { font-weight: 600; background-color: var(--color-canvas-subtle); }
.markdown-body tr:nth-child(2n) { background-color: var(--color-canvas-subtle); }
.markdown-body a { color: var(--color-accent-fg); text-decoration: underline; text-underline-offset: 2px; }
.markdown-body a:hover { text-decoration: underline; }

/* GitHub Alerts / Callouts */
.markdown-alert { padding: 12px 16px; margin-bottom: 16px; border-left: 4px solid var(--color-accent-fg); background: var(--color-canvas-subtle); border-radius: 0 6px 6px 0; }
.markdown-alert-title { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.9rem; margin-bottom: 6px; }
.markdown-alert-note { border-left-color: var(--color-accent-fg); }
.markdown-alert-note .markdown-alert-title { color: var(--color-accent-fg); }
.markdown-alert-tip { border-left-color: var(--color-success-fg); }
.markdown-alert-tip .markdown-alert-title { color: var(--color-success-fg); }
.markdown-alert-important { border-left-color: var(--color-done-fg); }
.markdown-alert-important .markdown-alert-title { color: var(--color-done-fg); }
.markdown-alert-warning { border-left-color: var(--color-attention-fg); }
.markdown-alert-warning .markdown-alert-title { color: var(--color-attention-fg); }
.markdown-alert-caution { border-left-color: var(--color-danger-fg); }
.markdown-alert-caution .markdown-alert-title { color: var(--color-danger-fg); }

/* Post Article Header Box */
.entry-log-box { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; font-family: var(--font-mono); font-size: 0.82rem; color: var(--color-fg-muted); margin: 16px 0 24px; padding: 12px 16px; background: var(--color-canvas-subtle); border: 1px solid var(--color-border-default); border-radius: 6px; }
.entry-log-items { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; }
.entry-log-item strong { color: var(--color-fg-default); font-weight: 600; }
.entry-raw-link { color: var(--color-accent-fg); text-decoration: none; padding: 2px 8px; border: 1px solid var(--color-border-default); border-radius: 4px; background: var(--color-canvas-default); font-size: 0.78rem; }
.entry-raw-link:hover { border-color: var(--color-accent-fg); }

/* Footer */
footer.site-footer { border-top: 1px solid var(--color-border-muted); padding: 28px 0; font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-fg-subtle); text-align: center; background: var(--color-canvas-subtle); }
footer.site-footer a { color: var(--color-fg-muted); text-decoration: none; }
footer.site-footer a:hover { color: var(--color-accent-fg); }
`;
