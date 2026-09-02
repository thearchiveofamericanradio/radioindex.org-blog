# radioindex.org-blog

The Archive of American Radio's blog and technical report series.

- Live: https://blog.radioindex.org
- Papers index: https://blog.radioindex.org/papers

## Publication venues

Narrowed to the two American venues. Both are the right audience for work on
American radio, American newspapers and an American archive.

| journal | founded | society finances | DOAJ | APC |
|---|---|---|---|---|
| **The American Archivist** | 1938, Society of American Archivists | SAA Foundation EIN 452661390; national EIN unresolved | not listed | none |
| **ARSC Journal** | 1967, Association for Recorded Sound Collections | FY2023 revenue $112,313 · assets $293,731 · net assets $293,731 (EIN 237001161) | not listed | none |

**ARSC is the target**, despite ranking second on prestige. Dating recorded sound
from documentary evidence is precisely their subject, and they confer the Awards
for Excellence in historical recorded sound research. Editor: Christopher C.
King. The American Archivist is older and larger, and the paper sits further from
its centre.

### Both forbid prior publication

- **ARSC**: "Articles must be original (i.e., previously unpublished and not
  being considered for publication elsewhere)."
- **The American Archivist**: "nor will it normally consider an article that has
  been published previously in a similar form."

TMG Journal for Media History was the only venue of the five researched that
explicitly permitted posting first — "will not be deemed prior publication" — and
it is out of scope now.

**So publishing AAR-TR-2026-0001 on this site is a live risk to both venues, not
a neutral act.** Ask each editor before relying on the report being publishable
later. Neither charges a fee, and both accept unaffiliated authors.

Ruled out earlier for reasons that still hold: IASA Journal bars text recycling;
Journal of Open Humanities Data charges £1,070; Research Data Journal moved to
Openjournals in 2025, caps papers at 2,500 words, and requires the dataset in one
of its own trusted repositories.

## Paper pipeline

One XML source per paper; the register variants are transformations of it.
Structure, section order, tables, citations and every number are shared and
cannot drift. Only the sentences are per-register.

- `papers/*.xml` — JATS-lite sources. Element names follow JATS (ANSI/NISO
  Z39.96), which journal platforms exchange articles in; ISO chose JATS over DITA
  and DocBook for standards work because DITA models no bibliography.
- `@audience` on a block selects the register, which is DITA-style conditional
  profiling. A block with no `@audience` is shared by every register.
- `<fact id="..." value="..."/>` declares a number once; `{{fact:id}}` references
  it. An unknown id fails the build.
- `papers/NAMING.md` — identifier rules. `AAR-TR-YYYY-NNNN`, assigned once,
  version as a `vN` suffix, and the identifier never encodes the subject.

Register is not derivable by transformation. Vocabulary and sentence length are
authored per register; the source guarantees the two papers cannot contradict
each other on a number or a citation.

```
npm run papers          rebuild both registers from the XML source
npm run papers:all      re-ingest every post into papers/
npm run papers:verify   check the round trip without writing
npm run voa -- <file>   lint a file against the word lists
```

## Register linting

`scripts/voa-lint.mjs` reports five measurements and exits 1 past a threshold.

- **VOA Special English Word Book** — 1,522 headwords, parsed from the published
  source. The book is a *content* vocabulary: it lists no function words, no
  numbers and no irregular forms, so `voa-grammar.json` carries those. Without
  them the linter reports its own gaps as prose faults.
- **Academic Word List (Coxhead)** — 570 headwords, the academic words *not* in
  the General Service List, counted as a second tier rather than a fault.
- **Pointing words** — `this, that, it, they, such, some` and the rest. Name the
  thing instead; repeating a proper noun is correct here.
- **Fronted openers** — VOA is subject-verb-object. A sentence opening with a
  preposition or adverbial makes a reader hold a phrase before learning the
  subject.
- **Control bytes** — the build refuses to write a file containing one. A rewrite
  pass once left 56 NUL bytes in a published notes section and nothing noticed,
  because the prose still measured well.

## Which posts are papers

`src/paper-registry.ts` names them, by slug. A tag would be too easy to acquire
by accident, and the cost of a wrong answer is a false claim to Google Scholar:
every page carrying `citation_*` tags asserts that the page is a technical
report. 1,100-odd machine-generated archival dispatches asserting that is what
fails Scholar's "primarily scholarly articles" test.

Only the canonical register carries the Highwire tags. Every variant carries
`rel=canonical` back to the paper of record, because Scholar wants one paper per
URL and two URLs with full metadata for one work is a duplicate.

`citation_author` is a person — Mike Vincent. The archive is
`citation_author_institution`. Scholar parses that field as a personal name and
an organisation there produces a broken record.

## Google Scholar

Mike is an **individual author**, not a publisher, so the inclusion request form
is the wrong route. Scholar's guidance for that case: upload the paper as a real
`.pdf`, link it from a publications page, put the title in large type at the top
of the first page, the authors on their own line directly beneath, and a
bibliography at the end.

`tools/browser/paper-pdf.mjs` in the radioindex.org repo renders a paper URL to
PDF through the shared browser driver. The PDF is **not yet wired to
`citation_pdf_url`**, which is what that route actually needs.

## A standing hazard

The archival-dispatch publisher commits its entire working tree from a checkout
made earlier, so anything added or edited since disappears on its next commit. It
destroyed this work five times on 2 September 2026:

- `3c38cb8` deleted `posts/2026-09-02-register-awl.md`
- `748f42f` deleted `papers/` and the paper scripts, 1,126 files
- `69c1c81` deleted all of it again and reverted four source files, 1,127 files

Recovery points that survive a tree-clobbering commit:

```
git archive papers-v1 papers/ src/paper-registry.ts 'scripts/paper-*.mjs' \
  'scripts/voa-*.json' posts/2026-09-02-register-awl.md | tar -x -C .
```

Tag `papers-v1` and branch `backup/papers-v1` both resolve to `8d808b8`. Quote
the globs — a shell expands them against the working directory first, and errors
when the files are the very ones that went missing.

The real fix belongs in the publisher: add its own files rather than commit a
whole tree.
