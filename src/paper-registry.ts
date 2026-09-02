/** Which posts are papers.
 *
 * Membership is explicit and by slug. A tag would be too easy to acquire by
 * accident, and the cost of a wrong answer here is high: every post carrying
 * `citation_*` tags is a claim to Google Scholar that the post is a technical
 * report. 1,131 machine-generated archival dispatches making that claim is what
 * makes a site fail Scholar's "primarily scholarly articles" test, and it is not
 * true of them anyway.
 *
 * A dispatch is a dated record of cataloguing work. A paper is an argument with
 * evidence. Only the second gets scholarly metadata. */
export type PaperEntry = {
  /** Stable identifier, assigned once. See papers/NAMING.md. */
  id: string;
  /** The register this rendering is in. */
  register: "voa" | "awl";
  /** Slug of the paper of record. A register variant points at the canonical
   * rendering, because Scholar wants one paper per URL and two URLs carrying full
   * metadata for the same work is a duplicate, not two papers. */
  canonicalSlug: string;
};

export const PAPERS: Record<string, PaperEntry> = {
  "2026-09-02-dating-the-undated": {
    id: "AAR-TR-2026-0001",
    register: "voa",
    canonicalSlug: "2026-09-02-dating-the-undated",
  },
  "2026-09-02-register-awl": {
    id: "AAR-TR-2026-0001",
    register: "awl",
    canonicalSlug: "2026-09-02-dating-the-undated",
  },
};

export function paperFor(slug: string): PaperEntry | undefined {
  return PAPERS[slug];
}

/** True only for the rendering that carries the scholarly metadata. */
export function isCanonical(slug: string): boolean {
  const entry = PAPERS[slug];
  return Boolean(entry && entry.canonicalSlug === slug);
}
