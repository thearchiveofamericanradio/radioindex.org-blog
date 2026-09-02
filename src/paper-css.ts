/** Single-column humanities article measure. The CS two-column canon runs 50-68
 * characters per line; humanities journals measured off their own PDFs run 85-96
 * (ARSC Journal: New Century Schoolbook 8.75/11, 29.1 picas, 85-86 cpl). 20px
 * Charter on 1.6 in a 38rem column lands at ~71 cpl on screen -- the print measure
 * adjusted for pixels and viewing distance, not a photocopy of a PDF page. */
export const PAPER_CSS = `
:root {
  --paper-ink: #1a1a1a;
  --paper-muted: #5a5a5a;
  --paper-rule: #d8d4cc;
  --paper-bg: #fbfaf7;
  --paper-accent: #7a2f2f;
}
* { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
body {
  margin: 0;
  background: var(--paper-bg);
  color: var(--paper-ink);
  font-family: Charter, "Bitstream Charter", "Iowan Old Style", "Palatino Linotype",
    Palatino, Georgia, "Times New Roman", serif;
  font-size: 20px;
  line-height: 1.6;
}
.paper-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  max-width: 38rem;
  margin: 0 auto;
  padding: 20px 24px 0;
  font-size: 15px;
}
.paper-bar a { color: var(--paper-muted); text-decoration: none; }
.paper-bar a:hover { color: var(--paper-accent); text-decoration: underline; }
.paper-print {
  font: inherit;
  font-size: 15px;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid var(--paper-rule);
  border-radius: 6px;
  background: #fff;
  color: var(--paper-ink);
  cursor: pointer;
}
.paper-print:hover { border-color: var(--paper-accent); color: var(--paper-accent); }
.paper {
  max-width: 38rem;
  margin: 0 auto;
  padding: 32px 24px 64px;
}
.paper-head { margin-bottom: 36px; }
.paper-series {
  margin: 0 0 12px;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--paper-accent);
}
.paper-title {
  margin: 0 0 16px;
  font-size: 34px;
  line-height: 1.22;
  font-weight: 600;
}
.paper-author { margin: 0; font-size: 18px; }
.paper-affil { margin: 2px 0 0; font-size: 16px; color: var(--paper-muted); }
.paper-date { margin: 4px 0 0; font-size: 16px; color: var(--paper-muted); }
.paper h2 {
  margin: 40px 0 12px;
  font-size: 21px;
  font-weight: 600;
}
.paper-status {
  margin: 28px 0 0;
  padding: 14px 18px;
  border: 1px solid var(--paper-accent);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--paper-ink);
}
.paper-abstract {
  margin: 32px 0;
  padding: 20px 24px;
  background: #fff;
  border-left: 3px solid var(--paper-rule);
}
.paper-abstract h2 { margin: 0 0 8px; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; }
.paper-abstract p { margin: 0; font-size: 18px; }
.paper-body p { margin: 0 0 1em; }
.paper-body table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  margin: 24px 0;
}
.paper-body th, .paper-body td {
  border: 1px solid var(--paper-rule);
  padding: 8px 10px;
  text-align: left;
  vertical-align: top;
}
.paper-body th { background: #f2efe9; font-weight: 600; }
.paper-body code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.86em;
}
.paper-body img { max-width: 100%; height: auto; }
.paper-cite-text {
  padding: 14px 18px;
  background: #fff;
  border: 1px solid var(--paper-rule);
  border-radius: 6px;
  font-size: 17px;
}
.paper-sources p { font-size: 17px; }
.paper-raw { color: var(--paper-muted); font-size: 15px; }
.paper a { color: var(--paper-accent); }
.paper-foot {
  border-top: 1px solid var(--paper-rule);
  padding: 20px 24px 40px;
  text-align: center;
  font-size: 14px;
  color: var(--paper-muted);
}
.paper-foot a { color: var(--paper-muted); }

/* The table scrolls inside its own box rather than widening the page. */
@media (max-width: 640px) {
  .paper-body { overflow-x: auto; }
  .paper-title { font-size: 28px; }
  body { font-size: 18px; }
}

/* Print-to-PDF: the browser is the PDF engine, so the page geometry is set here.
 * Workers cannot run WeasyPrint or Prince at a 128 MB cap, and no PDF is stored,
 * so this is the one canonical path from the paper view to a PDF. */
@page {
  size: Letter;
  margin: 1in;
}
@media print {
  body { background: #fff; font-size: 11pt; line-height: 1.5; }
  .paper-bar, .paper-foot { display: none; }
  .paper { max-width: none; padding: 0; }
  .paper-title { font-size: 20pt; }
  .paper h2 { font-size: 13pt; page-break-after: avoid; }
  .paper-abstract { background: none; border-left: 2px solid #999; }
  .paper-body table { font-size: 9pt; page-break-inside: auto; }
  .paper-body tr { page-break-inside: avoid; }
  .paper a { color: inherit; text-decoration: none; }
  .paper-cite-text { border: 1px solid #999; }
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --paper-ink: #e8e4dc;
    --paper-muted: #a09a90;
    --paper-rule: #3a3730;
    --paper-bg: #16150f;
    --paper-accent: #d99a9a;
  }
  :root:not([data-theme="light"]) .paper-abstract,
  :root:not([data-theme="light"]) .paper-cite-text,
  :root:not([data-theme="light"]) .paper-print { background: #1f1d16; }
  :root:not([data-theme="light"]) .paper-body th { background: #23201a; }
}
`;
