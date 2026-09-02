# Paper naming and identifiers

These rules apply to **papers** — the archive's scholarly outputs. The dated
archival dispatches keep their existing `YYYY-MM-DD-subject` names and are not
covered here.

## The identifier

```
AAR-TR-YYYY-NNNN
```

- `AAR` — The Archive of American Radio
- `TR` — technical report, a document type Google Scholar accepts, so the series
  needs no journal, no ISSN and no editorial board
- `YYYY` — year of first publication, fixed forever after
- `NNNN` — sequence within that year, zero-padded, assigned once

Example: `AAR-TR-2026-0001`.

### The identifier never encodes the subject

This is arXiv's hard-won lesson. arXiv identifiers carried subject-classification
codes until 2007, and the scheme was abandoned because an identifier that carries
meaning constrains what can change later. Titles get rewritten. Subjects get
reclassified. The identifier has to survive both. So `AAR-TR-2026-0001` says
nothing about radio logs, and that is the point.

### Versions are a suffix

A revised paper keeps its identifier and gains a version, as arXiv does:

```
AAR-TR-2026-0001v2
```

The bare identifier resolves to the newest version. Every specific version stays
reachable. A correction is a new version, never a silent edit to a published
paper.

## Files

```
papers/aar-tr-2026-0001.xml
```

One source file per paper. Register variants live inside it as `@audience`
blocks. They are never separate source files, because separate files are exactly
how the numbers in two registers drift apart.

## URLs

```
/paper/aar-tr-2026-0001           canonical: the paper of record
/paper/aar-tr-2026-0001-awl       the Academic Word List rendering
```

### Only the canonical URL carries the Scholar tags

Google Scholar wants one paper per URL. Two URLs presenting the same work, both
with full `citation_*` metadata, is a duplicate rather than a pair of papers. So
the canonical URL carries the Highwire tags, and every register variant carries
`<link rel="canonical">` pointing back at it. A variant is a rendering of one
paper, and the markup has to say so.

## Author

The author is a person: **Mike Vincent**. The Archive of American Radio is the
institution, carried as `citation_author_institution`, never as the author.
Scholar parses `citation_author` as a personal name, and an organisation there
produces a broken record.

## Registering with Google Scholar

Scholar publishes an inclusion request form for publishers, and a new site should
use it rather than wait to be found. The site has to be finished first —
formatted, crawlable, actually published — because a request against an
unfinished site is how a site gets judged and skipped.

Confirm each of these before requesting inclusion:

- every paper reachable from `/papers` in plain `<a href>` links
- `citation_title`, `citation_author` and `citation_publication_date` present on
  every canonical paper URL; missing any one means the page is processed as if it
  carried no tags at all
- the sitemap lists every paper URL
- `robots.txt` allows Googlebot
- register variants carry a canonical link and do not compete with the paper of
  record
