# Dating the Undated: Newspaper Radio Logs as Primary Evidence for a Quarter-Million Broadcast Recordings

**Date**: 2026-09-02  
**Author**: radio index  
**Tags**: Research Paper, Discography, Broadcast Dating, Newspaper Radio Logs, Provenance, Audio Archives, ARSC

---


## Abstract

The circulating corpus of American old-time radio recordings is large, actively traded, and
substantially undated. Recordings pass between collectors as audio files whose only
identifying metadata is a filename, and filenames decay: they are rewritten at each transfer,
truncated by filesystems, and guessed at when illegible. A large fraction of items therefore
carry no reliable broadcast date, and many of the dates that are carried are wrong.

This paper describes a method for dating such recordings from contemporaneous newspaper radio
logs, corroborated across independent metropolitan dailies and supplemented by trade-press
listings and by internal evidence in the audio. It reports the method's application within The
Archive of American Radio — 259,915 catalogued broadcast records across 6,114 programs, of
which 28 per cent remain undated — and proposes a confidence-graded notation distinguishing
dates established by multiple independent listings from those inferred, estimated, or
inherited unverified from a source collection.

The method is demonstrated on a case in which six independent listings overturn a circulating
date by nearly seven years, and in which day-of-week inference cannot discriminate between the
candidates because both fall on the program's Sunday slot.

The paper also reports a measured constraint: the number of listings available for a broadcast
rises sharply with its year across the 1930s (Pearson *r* = 0.899, *n* = 14). Evidence density
is not uniform across the period, and a dating apparatus must represent that unevenness rather
than conceal it behind a uniform assertion of fact.

**Keywords:** old-time radio, discography, broadcast dating, newspaper radio logs, provenance,
audio archives, metadata

---

## 1. The problem: a primary corpus that has lost its dates

Old-time radio survives principally as a collector's medium. Its recordings were made on
transcription discs and, later, on tape; they were copied, re-copied, digitized, and traded
through hobbyist networks over roughly seven decades before arriving in their present form as
audio files circulating on the open internet. At no point in that chain was there a custodial
institution enforcing a metadata standard. The consequence is a corpus of considerable
historical value whose bibliographic control is close to absent.

The specific failure is dating. A broadcast recording without a date is severely diminished as
evidence. It cannot be placed against the news of its week, matched to a sponsor's campaign,
positioned within a program's run, or used to establish what a network actually transmitted on
a given evening. For a medium whose defining characteristic is that it was live, scheduled, and
ephemeral, the date is not one attribute among many — it is the attribute that makes the
recording a historical document rather than an anonymous piece of audio.

Dates are lost in this corpus through several distinct mechanisms, and it is worth separating
them because they call for different remedies.

**Filename decay.** The dominant carrier of metadata in trading networks is the filename.
Filenames are rewritten at every transfer to suit the receiving collector's scheme, truncated
by filesystem limits, stripped of characters illegal on one platform or another, and
transliterated when they pass through cataloguing software. A date encoded as `xx-xx-xx`
survives one such pass and not three.

**Inherited error.** Where a date is present it is frequently inherited rather than
established. A collector assigns a plausible date; that assignment is copied forward by every
subsequent holder; and the date acquires the appearance of authority purely through
repetition. There is no mechanism in a trading network by which an erroneous date is retired.

**Series-level rather than item-level dating.** Many holdings are dated only to a program's
run — "Gunsmoke, 1952–1961" — which is a fact about the program and not about the recording.

**Deliberate estimation presented as fact.** Where a cataloguer has estimated, the estimate is
typically recorded in the same field, in the same format, as an established date. The
distinction between the two is not representable in the metadata and is therefore lost at the
first copy.

The last of these is the one this paper treats as central, because it is the one that a
discographical method can actually repair. The Association for Recorded Sound Collections
states the principle directly in its *Guidelines for Discographies*: "estimates are preferable
to omitting the information. Discographers should explain the rationale behind estimates, and
clearly distinguish them from 'solid' data."<sup id="r1"><a href="#n1">1</a></sup> The requirement is not that every date be
certain. It is that the reader be able to tell which dates are certain and why.

### 1.1 Existing reference practice and what it does not reach

The field is not without reference works. John Dunning's *On the Air: The Encyclopedia of
Old-Time Radio* documents roughly 1,500 programs with broadcast histories, time slots,
networks, sponsors, and principal personnel.<sup id="r2"><a href="#n2">2</a></sup> Jon Swartz and Robert Reinehr's *Handbook of
Old-Time Radio* serves a comparable function for collectors.<sup id="r3"><a href="#n3">3</a></sup> Between them they establish
the *program*-level record for the medium with considerable authority, and the method described
here depends on that work: Step 2 of the procedure in §4 consults exactly this kind of source
to establish a program's regular slot.

What these works do not do — and do not set out to do — is date an individual surviving
recording. Their unit is the program and its run; the unit of the problem addressed here is the
item, the particular audio file in circulation whose relationship to that run is unknown. A
reference work can tell a cataloguer that *Greatest Story Ever Told* was a Sunday program
running in both 1948 and 1955. It cannot tell them which Sunday produced the recording in
hand, and in the case examined at §5.4 the program-level record is consistent with both the
correct date and the erroneous one.

The gap is therefore structural rather than a deficiency in the existing literature. Item-level
dating requires item-level evidence, and the only systematic item-level published record the
period produced is the daily radio log. This paper is an argument for treating that log as the
primary discographical source for the medium, and for recording, per item, which listings were
consulted and what they established.

## 2. The corpus

The Archive of American Radio is a public, non-commercial catalogue of American broadcast
recordings. As of September 2026 it publishes 259,915 individually addressed broadcast records
across 6,114 programs.<sup id="r4"><a href="#n4">4</a></sup> Each broadcast record has a stable permalink of the form
`/series/{program}/episodes/{item}`, and each carries, where the evidence supports it, a
structured citation, a set of newspaper listings, and a set of trade-periodical listings.

The corpus is not a single accession. It aggregates material from the major old-time radio
distribution channels, and it therefore inherits the dating pathologies described above at
full strength. The archive's cataloguing work consists in large part of replacing inherited,
unverified dates with dates established against contemporaneous published evidence.

Two properties of the catalogue as published can be measured directly, and both bear on the
method.

**Evidence coverage in the classic period is high.** In a random sample of sixty catalogued
broadcasts whose item slug carries an explicit date in the range 1930–1959, fifty-nine — 98
per cent — carry at least one newspaper or trade-periodical facsimile.<sup id="r5"><a href="#n5">5</a></sup> For the period in
which the American radio log was a standing daily feature, the evidentiary base for this
method is close to complete within the corpus.

**Inherited dates survive alongside corrected ones.** Of the corpus's 259,915 records, 44,566
carry an explicit `YYYY-MM-DD` date in the item slug, inherited from the source collection's
filename. In a random sample of forty such records drawn from the whole corpus, two — 5 per
cent — carry a slug date that contradicts the record's own established broadcast date;
restricting to the 1930–1959 window, one of sixty conflicted.<sup id="r6"><a href="#n6">6</a></sup> Both figures are small
samples and should be read as an order of magnitude, but taken together they indicate on the
order of one to two thousand records in which a stale inherited date persists in the
identifier after the catalogue has corrected the date itself. §5.4 examines one such record in
detail.

**Slightly over a quarter of the corpus remains undated.** In a random sample of 150 records
drawn from the whole catalogue, 108 (72.0 per cent) carry an established broadcast date and 42
(28.0 per cent) carry none.<sup id="r7"><a href="#n7">7</a></sup> Projected across 259,915 records, on the order of seventy-two
thousand items are currently held without a date.

The relationship between dating and evidence in that sample is the more informative result.
Of the 108 dated records, 101 — 93.5 per cent — carry at least one facsimile listing. Of the
42 undated records, **two** do. Undated records are not, in general, records for which the
evidence was sought and found wanting; they are records for which it has not yet been sought.
Dating and evidence-gathering are, in this corpus, substantially the same operation, and the
forty undated-and-unevidenced records in the sample stand for the work that remains rather
than for a limit on what the method can reach.

### 2.1 Duplicate holdings and the undated sibling

A related pathology is visible in the published catalogue. The archive holds three separate
records for Winston Churchill's address on Anglo-American unity, delivered at Harvard on 6
September 1943. Two are dated to Monday, 6 September 1943 and carry six facsimiles each; the
third carries no date and no evidence at all.<sup id="r8"><a href="#n8">8</a></sup>

This is the ordinary condition of a trading corpus: the same broadcast arrives by several
routes, in several states of documentation, and deduplication is itself a dating problem. The
undated sibling is a Tier E record whose answer is already held, fully corroborated, by
records the archive has catalogued separately. Resolving such clusters is among the
highest-yield operations available to a cataloguer, because the evidence has already been
gathered.

## 3. Evidence classes

Three classes of evidence bear on the date of a surviving broadcast recording. They differ in
availability, in precision, and in the kind of error to which they are subject, and a method
that treats them as interchangeable will produce confident wrong answers.

### 3.1 Newspaper radio logs

The primary class. From the early 1930s the American metropolitan daily press carried
day-by-day radio schedules — the "radio log" — listing station, time, and program title for
the coming day's broadcasting. These logs are the closest thing the period produced to a
systematic published record of what was transmitted.

Four papers carry the method: the *New York Times*, the *Washington Post*, the *Chicago Daily
Tribune*, and the *Los Angeles Times*. Their value lies less in any one of them than in their
independence. Each was compiled separately, from separately supplied network and station
copy, for a different market and a different time zone. A program title and hour appearing in
all four is corroborated in a way that a single listing is not.

Radio logs have three characteristic weaknesses, each of which must be handled explicitly.
They record the *schedule*, which is what the network intended to transmit, and not the
*transmission*, which is what actually went out; pre-emption, particularly for news bulletins,
breaks the correspondence. They are set in advance of the broadcast day and so reflect a
deadline earlier than the event. And they are printed in small type in dense columns, which
makes them a hostile target for optical character recognition and a source of transcription
error.

### 3.2 Trade periodicals

*Broadcasting*, the industry weekly, and its contemporaries record schedule changes, sponsor
assignments, network line-ups, and special events with an editorial specificity the dailies do
not attempt. Trade coverage is thinner in date coverage — weekly rather than daily — but far
richer in the kind of detail that distinguishes one broadcast from another within a run. It is
the natural corroborating source when a newspaper log establishes that a program aired but not
which episode.

### 3.3 Internal audio evidence

The recording itself carries datable content. News references establish a lower bound.
Sponsor copy and the specific product campaign named in it can be placed within a season.
Announcer identification, network cue phrasing, and the wording of station identifications
changed over time in ways that are themselves datable. Where a broadcast carries a topical
reference — an election result, a war communiqué, a sports outcome — the recording can
frequently be placed to the day from its own contents, independently of any external listing.

Internal evidence is the only class that speaks to the *transmission* rather than the
schedule, and it is therefore the decisive class when the two disagree. It is also the class
most vulnerable to the confusion between an original broadcast and a later rebroadcast,
transcription, or Armed Forces Radio Service re-issue of the same program material.

## 4. Inference procedure and confidence tiers

The procedure below is stated so that a reader can retrace it. It takes a recording and any
metadata inherited with it, and returns a date, a confidence tier, and the citations that
support them.

**Step 1 — Isolate the inherited claim and suspend it.** Record whatever date arrives with the
item, note its carrier (filename, source-collection index, prior catalogue), and mark it Tier
E. It is not used as evidence at any subsequent step. This is the step most often skipped, and
skipping it is what converts an inherited guess into an apparent fact: a cataloguer who begins
from the inherited date will find confirmation for it, because the search is then a search for
confirmation.

**Step 2 — Establish the program identity and its slot.** Determine the program and, from
published schedules across its run, its regular day and hour. The slot constrains the
candidate set but never establishes a date on its own; §5.4 is a case in which two candidate
dates seven years apart both satisfy the slot.

**Step 3 — Derive candidate dates from internal audio evidence.** Listen for datable content:
topical references, sponsor campaigns, announcer identification, network cue phrasing, station
identification wording, and any explicit date announcement. Topical references give the
strongest constraint, frequently to the week. Record each as a bound rather than a point.

**Step 4 — Test candidates against contemporaneous radio logs.** For each candidate date,
consult the radio log of each of the four papers for that date and market. Record a hit as
publication, date, page, and column. A candidate surviving in two or more independently
compiled logs is corroborated; one surviving in a single log is attested.

**Step 5 — Corroborate against the trade press.** Consult *Broadcasting* for the corresponding
week for schedule changes, sponsor assignment, and special-event coverage. Trade evidence is
what distinguishes one broadcast from another within a run when the daily logs give only the
program title.

**Step 6 — Test for re-issue.** Before assigning, ask whether the recording is an Armed Forces
Radio Service re-issue, a regional repeat, or a later transcription of the same program
material. Internal evidence — the presence or absence of sponsor copy is often decisive, since
AFRS re-issues had commercial content removed — is the discriminator. A recording that matches
a listing is not thereby shown to be the transmission that listing describes.

**Step 7 — Assign a tier and cite.** Assign the highest tier the evidence supports, cite every
listing relied upon, and where the assignment is an estimate, state the reasoning and express
it as a range.

**Step 8 — Resolve against sibling records.** Where the corpus holds other records of the same
broadcast, reconcile them. An undated sibling of a corroborated record inherits that record's
evidence, not its assertion; see §2.1.

The output of the procedure is a date together with a confidence tier. The tiers are:

**Tier A — Corroborated.** The broadcast date is attested by two or more independent
contemporaneous published listings, and no internal audio evidence contradicts them.
Independence is required: two papers carrying the same syndicated network schedule are one
source, not two.

**Tier B — Attested.** The date is attested by a single contemporaneous published listing,
uncontradicted by internal evidence.

**Tier C — Inferred.** No listing directly attests the date, but it follows from internal
audio evidence together with the program's established schedule — for example, a topical
reference fixing the week combined with a known Tuesday-evening slot.

**Tier D — Estimated.** A bounded estimate, expressed as a range rather than a point, with the
rationale stated. Per ARSC, an explained estimate is preferable to an omission.

**Tier E — Inherited, unverified.** A date carried forward from a source collection that the
archive has not yet tested against published evidence. This tier exists so that inherited
dates are visible as such rather than silently promoted to fact, and it is the tier from which
cataloguing work moves records upward.

The essential property of the scheme is that Tier E is representable at all. A metadata model
in which every date is simply a date cannot distinguish an assertion the archive has verified
from one it has merely received, and it will therefore misrepresent its own evidentiary basis
however careful the underlying work has been.

## 5. Worked cases

### 5.1 A densely attested broadcast: 1 September 1939

The BBC announcer Alvar Lidell's report of the German invasion of Poland is held as a
forty-five-second recording.<sup id="r9"><a href="#n9">9</a></sup> The archive's catalogue record for it carries ten separate
facsimile listings: radio logs from the *Chicago Daily Tribune*, the *New York Times*, the
*Los Angeles Times*, and two distinct listings from the *Washington Post*, all for Friday 1
September 1939, together with the corresponding issue of *Broadcasting*.<sup id="r10"><a href="#n10">10</a></sup>

This is a Tier A date by a wide margin, and it illustrates the upper bound of what the method
can deliver. A broadcast of international consequence, on a date of international consequence,
is listed everywhere and is trivially corroborated.

### 5.2 The same date, a different item

Ignacy Jan Paderewski's address on the impending German invasion is catalogued separately, on
the same date, and draws on the same evidentiary cluster — a *Chicago Daily Tribune* radio log
for Friday 1 September 1939 and the corresponding *Broadcasting* issue.<sup id="r11"><a href="#n11">11</a></sup> The pairing is
methodologically useful: it shows that a shared date-cluster of listings can support multiple
distinct broadcast records, and that the unit of evidence is the published page, not the
recording.

### 5.3 A sparsely attested broadcast: 1932

Against these, a 1932 item. The archive's record for Franz von Papen's chancellorship address
of 13 August 1932 carries three facsimiles, from the *New York Times* and the *Washington
Post* only.<sup id="r12"><a href="#n12">12</a></sup> The *Chicago Daily Tribune* and *Los Angeles Times* listings that support the
1939 records are absent. The date is attested, but the corroboration available for it is
materially thinner, and a confidence notation that reported both records identically would be
misrepresenting the second.

### 5.4 A case overturning an inherited date: a seven-year error

The method's value lies in correction, not restatement. A representative case is the
*Greatest Story Ever Told* episode "They Did Not Receive Him."

The recording circulates under a filename encoding the date 13 February 1955, and that date
survives in the archive's own item slug, inherited from the source collection. The archive's
catalogue record, however, gives the broadcast date as **Sunday, 29 February 1948** — an error
of very nearly seven years in the circulating date.<sup id="r13"><a href="#n13">13</a></sup>

Six independent contemporaneous listings establish the 1948 date: radio logs in the *New York
Times*, the *Washington Post*, the *Los Angeles Times*, and the *Chicago Daily Tribune*, a
separate *Chicago Daily Tribune* "Radio Highlights" item, and the corresponding issue of
*Broadcasting* — all for Sunday, 29 February 1948.<sup id="r14"><a href="#n14">14</a></sup> This is a Tier A date.

Two features make the case methodologically instructive.

First, **day-of-week inference cannot resolve it.** *Greatest Story Ever Told* was a Sunday
program, and both candidate dates fall on a Sunday: 13 February 1955 and 29 February 1948 were
both Sundays. A dating method resting on the program's known slot would have accepted the
inherited date without difficulty. Only the corroborating listings discriminate between them,
which is precisely the argument for requiring published attestation rather than schedule
inference.

Second, **the correct date is a leap day.** 29 February 1948 exists only because 1948 was a
leap year, and leap-day broadcasts are a recognisable class of inherited-error source: a
cataloguer reconstructing a date from a partial or damaged filename will tend to normalise an
implausible-looking 02-29 toward a date that looks ordinary. The error direction here is
consistent with that mechanism.

The archive's canonical citation for the record already resolves to a permalink without the
erroneous date suffix, so the corrected date is what the catalogue asserts and cites. The
stale 1955 string survives only in the item slug — which is itself an instance of the filename
decay described in §1, now reproduced inside a catalogue that has otherwise corrected it.

## 6. Evidence density is not uniform across the period

The three worked cases above suggest a pattern, and the pattern is measurable. Across a sample
of fourteen catalogued broadcasts drawn from a single news program and spanning 1932 to 1939,
the number of independent facsimile listings attached to a record correlates strongly and
positively with the broadcast year (Pearson *r* = 0.899, *n* = 14).<sup id="r15"><a href="#n15">15</a></sup> Mean facsimile counts
by year:

| Broadcast year | Mean facsimiles | *n* |
|---:|---:|---:|
| 1932 | 3.0 | 3 |
| 1933 | 4.0 | 3 |
| 1935 | 4.0 | 1 |
| 1936 | 6.0 | 1 |
| 1937 | 5.0 | 1 |
| 1939 | 7.8 | 5 |

Two explanations are available and the data presented here do not separate them. The first is
that newspaper radio-log coverage genuinely expanded across the 1930s as broadcasting became a
mass medium and the logs grew from a novelty column to a standing daily feature. The second is
that the archive's own acquisition of newspaper facsimiles is more complete for the later
1930s, in which case the trend is an artefact of the archive's holdings rather than a fact
about the period.

The distinction matters for how the confidence tiers should be read: under the first
explanation a 1932 Tier B date is as good as the evidence of 1932 permits, whereas under the
second it is merely a record the archive has not yet finished working. Separating them
requires sampling against a newspaper index independent of the archive's own holdings, which
has not been done.

The finding should be treated as provisional in a further respect: *n* = 14, all drawn from a
single program of international news, which is precisely the genre most likely to be listed
everywhere. A general claim about evidence density across the corpus requires a sample
stratified across genres and networks.

## 7. Limitations

**The schedule is not the transmission.** Every newspaper-derived date in this method
establishes what was scheduled. Pre-emption, especially in news periods, is exactly the
circumstance in which the corpus is richest and the inference weakest.

**Rebroadcast and re-issue.** A recording that matches a listing may be an Armed Forces Radio
Service re-issue, a regional repeat, or a later transcription of the same program material.
Internal audio evidence is the only discriminator, and it is not always present.

**Optical character recognition error.** Radio logs are dense small-type columns and resist
OCR. Transcription error in the evidence base propagates silently into the catalogue.

**Sample limitations.** The evidence-density finding in §6 rests on fourteen records from one
program. The corpus-scale claims in §2 rest on the published catalogue and require the
archive's internal cataloguing history to be completed.

**Reproduction of the evidence.** The newspaper pages that constitute the primary evidence for
this method are, for the period concerned, in copyright. This paper cites listings by
publication, date, and page; it does not reproduce the pages.<sup id="r16"><a href="#n16">16</a></sup>

## 8. Publishing the apparatus, not just the result

A confidence tier that exists only in a cataloguer's working notes does not solve the problem
described in §1, because the failure mode is precisely that qualified judgements are flattened
into bare assertions as they pass from hand to hand. If the tier is to survive contact with the
trading networks that will redistribute this material, it has to be published with the record
and attached to it durably.

Three properties follow, and the archive described here implements them.

**The citation is part of the record, not part of a report.** Each broadcast record carries a
formatted citation and the list of attesting listings alongside the date itself, at the same
address. A user who arrives at the record arrives at its evidence. This is what makes the
undated sibling in §2.1 legible as a problem rather than invisible: two records assert a date
with six listings each, and a third asserts nothing, and the difference is apparent on
inspection.

**The identifier must not carry a competing claim.** §5.4 is a cautionary case. The catalogue
holds the corrected date, cites six listings for it, and resolves its canonical citation to a
permalink without the erroneous suffix — and yet the item slug still reads `1955-02-13`, and
that string is what a downstream consumer scraping URLs will capture. An identifier that
encodes a date is an assertion whether or not it was intended as one. The corpus-wide estimate
in §2 suggests on the order of one to two thousand records in this condition. Dates belong in
fields, not in names.

**Absence must be representable.** Twenty-eight per cent of the corpus is undated, and the
catalogue says so rather than supplying a plausible year. This is the same discipline ARSC
asks of discographers in the passage quoted at §1: the alternative to an unsupported date is
not a blank to be filled with a guess but an explicit statement that the question is open.
Tier E exists to hold that statement, and the two-of-forty-two figure at §2 — undated records
almost never carrying facsimiles — is what makes it actionable, because it identifies the
undated set as a work queue rather than a residue.

## 9. Conclusion

The dating problem in the old-time radio corpus is not primarily a problem of missing evidence.
The evidence largely exists, in the radio logs of four metropolitan dailies and in the trade
press, and it is now largely digitized. The problem is that the corpus's metadata has no way to
represent the difference between a date established against that evidence and a date inherited
without it, and so the two have become indistinguishable.

The remedy proposed here is unglamorous: a confidence tier attached to every date, a visible
category for inherited-and-unverified, and a citation to the specific published listing that
establishes each corroborated date. Applied across 259,915 records it converts a trading
corpus into a citable one.

---

## Notes

1. <span id="n1"></span>Association for Recorded Sound Collections, *Guidelines for Discographies*. <a href="#r1">&#8617;</a>
2. <span id="n2"></span>John Dunning, *On the Air: The Encyclopedia of Old-Time Radio* (Oxford University Press, 1998). <a href="#r2">&#8617;</a>
3. <span id="n3"></span>Jon D. Swartz and Robert C. Reinehr, *Handbook of Old-Time Radio: A Comprehensive Guide to Golden Age Radio Listening and Collecting* (Scarecrow Press, 1993). <a href="#r3">&#8617;</a>
4. <span id="n4"></span>Counted from the published sitemap of radioindex.org, 1 September 2026: 259,915 episode URLs across 123 sitemap shards, and 6,114 series URLs. One shard (episodes-96.xml) returns a well-formed but empty urlset and is included in the shard count and excluded from the record count. <a href="#r4">&#8617;</a>
5. <span id="n5"></span>Random sample of sixty catalogued broadcasts drawn from the 40,727 item slugs carrying an explicit date in 1930–1959; retrieved 1 September 2026. Fifty-nine carried one or more facsimile listings. <a href="#r5">&#8617;</a>
6. <span id="n6"></span>Random samples of forty records drawn from all 44,566 date-carrying slugs, and sixty drawn from the 1930–1959 subset; retrieved 1 September 2026. A conflict is a slug date differing from the broadcast date the catalogue record itself asserts. <a href="#r6">&#8617;</a>
7. <span id="n7"></span> <a href="#r7">&#8617;</a>
8. <span id="n8"></span>"Winston Churchill on Anglo-American Unity," *Radio News*; and "Anglo-American Unity" (two records), *Winston Churchill Speeches and Radio Broadcasts*. Radio Index, retrieved 1 September 2026. The first two are dated Monday, September 6, 1943 with six facsimiles each; the third carries neither date nor facsimile. <a href="#r8">&#8617;</a>
9. <span id="n9"></span>"Alvar Liddell Reports the German Invasion of Poland." *WWII News*. Radio broadcast, September 1, 1939. Radio Index. https://www.radioindex.org/series/wwii-news/episodes/alvar-liddell-reports-the-german-invasion-of-poland. <a href="#r9">&#8617;</a>
10. <span id="n10"></span>Radio logs, *Chicago Daily Tribune*, *New York Times*, *Los Angeles Times*, and *Washington Post*, all Friday, September 1, 1939; and *Broadcasting*, September 1, 1939.[^17] <a href="#r10">&#8617;</a>
11. <span id="n11"></span>"Ignacy Jan Paderewski on the Nazi Invasion Looming over Poland." *WWII News*. Radio broadcast, September 1, 1939. Radio Index. https://www.radioindex.org/series/wwii-news/episodes/ignacy-jan-paderewski-on-the-nazi-invasion-looming-over-poland. <a href="#r11">&#8617;</a>
12. <span id="n12"></span>"Chancellor Franz von Papen." *WWII News*. Radio broadcast, August 13, 1932. Radio Index. Attesting listings: *New York Times* and *Washington Post* radio logs, Saturday, August 13, 1932. <a href="#r12">&#8617;</a>
13. <span id="n13"></span>"They Did Not Receive Him." *Greatest Story Ever Told*. Radio broadcast, February 29, 1948. Radio Index. https://www.radioindex.org/series/greatest-story-ever-told/episodes/they-did-not-receive-him. The item slug retains the erroneous inherited date 1955-02-13. <a href="#r13">&#8617;</a>
14. <span id="n14"></span>Radio logs, *New York Times*, *Washington Post*, *Los Angeles Times*, and *Chicago Daily Tribune*; "Radio Highlights," *Chicago Daily Tribune*; and *Broadcasting* — all Sunday, February 29, 1948. <a href="#r14">&#8617;</a>
15. <span id="n15"></span>Sample of fourteen consecutive catalogued broadcasts from *WWII News*, retrieved 1 September 2026; facsimile counts taken from each record's newspaper-listings and periodicals sections. <a href="#r15">&#8617;</a>
16. <span id="n16"></span>On the copyright status of the underlying recordings, note that 17 U.S.C. § 1401 federalised pre-1972 sound recordings with terms of 100 years for recordings first published 1926–1946 and 110 years for 1947–1956; unpublished pre-1972 recordings are protected until 15 February 2067. There is no general public-domain status for pre-1972 material. <a href="#r16">&#8617;</a>
---

## Discography

Per CMOS 18, sound recordings are listed here rather than in a bibliography. Recordings are
held by The Archive of American Radio and are cited by canonical permalink; dates given are the
broadcast dates established by the method described in §4, with the confidence tier in
parentheses.

"Alvar Liddell Reports the German Invasion of Poland." *WWII News*. Radio broadcast, 1 Sept
1939 (Tier A). Radio Index.
https://www.radioindex.org/series/wwii-news/episodes/alvar-liddell-reports-the-german-invasion-of-poland.

"Anglo-American Unity." *Winston Churchill Speeches and Radio Broadcasts*. Radio broadcast, 6
Sept 1943 (Tier A); and a second record of the same broadcast carrying neither date nor
attesting listing (Tier E). Radio Index.

"Chancellor Franz von Papen." *WWII News*. Radio broadcast, 13 Aug 1932 (Tier A). Radio Index.

"Ignacy Jan Paderewski on the Nazi Invasion Looming over Poland." *WWII News*. Radio broadcast,
1 Sept 1939 (Tier A). Radio Index.
https://www.radioindex.org/series/wwii-news/episodes/ignacy-jan-paderewski-on-the-nazi-invasion-looming-over-poland.

"They Did Not Receive Him." *Greatest Story Ever Told*. Radio broadcast, 29 Feb 1948 (Tier A).
Radio Index.
https://www.radioindex.org/series/greatest-story-ever-told/episodes/they-did-not-receive-him.
Circulates under the erroneous inherited date 13 Feb 1955; see §5.4.

"Winston Churchill on Anglo-American Unity." *Radio News*. Radio broadcast, 6 Sept 1943
(Tier A). Radio Index.

The twenty *WWII News* records examined for §6 are listed with their attesting sources in the
Appendix and are not repeated here.

---

## Bibliography

Dunning, John. *On the Air: The Encyclopedia of Old-Time Radio*. Oxford University Press, 1998.

Swartz, Jon D., and Robert C. Reinehr. *Handbook of Old-Time Radio: A Comprehensive Guide to
Golden Age Radio Listening and Collecting*. Scarecrow Press, 1993.

Newspaper radio logs and trade-periodical listings are cited in the Notes and are not repeated
here, per CMOS 18, which omits newspaper items from the bibliography.

---

## Discographical Sources

This essay states the sources the method rests on, the coverage each provides, and the points
at which coverage fails, so that a reader can retrace the steps described in §4.

**Newspaper radio logs.** Four metropolitan dailies carry the method: the *New York Times*
(New York), the *Washington Post* (Washington), the *Chicago Daily Tribune* (Chicago), and the
*Los Angeles Times* (Los Angeles). Each was compiled separately from network and station copy
supplied for its own market and time zone, which is the basis on which agreement between them
is treated as corroboration rather than repetition. Two listing genres are distinguished where
the paper carried both: the daily *radio log*, a comprehensive schedule grid, and *radio
highlights*, a selective editorial column. The *Chicago Daily Tribune* record for 29 February
1948 discussed at §5.4 supplies one of each, and they are counted as two listings because they
were separately compiled.

Coverage is not uniform. Within the archive's holdings the number of listings available per
broadcast rises across the 1930s (§6), from a mean of 3.0 in 1932 to 7.8 in 1939 in the sample
examined. For the 1930–1959 window, 98 per cent of sampled catalogued broadcasts carry at
least one facsimile; across the corpus as a whole the figure is 68.7 per cent, the difference
being carried almost entirely by undated records, of which only two in forty-two carry any
facsimile at all.

**Provenance of the newspaper facsimiles.** The catalogue presents each newspaper listing as a
page facsimile identified by masthead, city, date, and listing genre, but records no
digitization source for it. The submitted version of this paper must name that source: whether
each run was consulted in an institutional newspaper database, a microfilm holding, or a
third-party scan collection, and what is known about its completeness. Where the source is a
third-party collection rather than an institutional repository, that should be stated plainly,
together with what is known of its provenance and any rights position it asserts. A reader
cannot retrace steps whose starting point is unnamed, and recording it is the one addition the
present apparatus most needs.

**Trade periodicals.** *Broadcasting*, the industry weekly, is consulted through
WorldRadioHistory, which the catalogue records explicitly as the digitization source and cites
as such. Trade coverage is weekly rather than daily and is used for schedule changes, sponsor
assignment, network line-ups, and special-event coverage — that is, for distinguishing
broadcasts within a run where the daily logs give only a program title. In the sample examined,
*Broadcasting* corroboration is present for the more heavily documented broadcasts and absent
for the sparser ones; it supplements the daily logs and does not substitute for them.

**Internal audio evidence.** The recordings themselves are the archive's own holdings, each
addressed by a stable permalink of the form `/series/{program}/episodes/{item}` and each
carrying a structured citation. Where internal evidence is cited in this paper it refers to
content audible in the archive's copy.

**Where coverage fails.** Three failure points are known and should be assumed by any reader
retracing this work. Radio logs record the schedule and not the transmission, so pre-emption
breaks the correspondence exactly in the news periods where the corpus is richest. Logs are
set to a deadline earlier than the broadcast day. And they are printed in dense small type
that resists optical character recognition, so transcription error in the evidence base
propagates into the catalogue silently. None of these is corrected by adding more newspapers,
because all four papers share them.

---

## Appendix: Dated log

The log below covers the *WWII News* holdings examined for this paper, ordered by broadcast
date. It follows the layout convention of a discographical log: date, title, running time,
count of independent attesting listings, the listings themselves by masthead abbreviation, and
the confidence tier assigned per §4.

Abbreviations: **NYT** *New York Times*; **WP** *Washington Post*; **CDT** *Chicago Daily
Tribune*; **LAT** *Los Angeles Times*; **Bcstg** *Broadcasting*. Where a paper carried both a
radio log and a separate radio-highlights item for the same date, both are counted, as they
were separately compiled.

| Broadcast date | Title | Running time | Listings | Attesting sources | Tier |
|---|---|---:|---:|---|:--:|
| 20 July 1932 | Chancellor Franz Von Papen | 4:27 | 3 | NYT, WP, LAT | A |
| 28 July 1932 | Alfred Hugenberg | 4:26 | 3 | NYT, WP, LAT | A |
| 13 Aug 1932 | Chancellor Franz Von Papen | 4:30 | 2 | NYT, WP | A |
| 30 Jan 1933 | Ansprache An Sa And Ss | 1:11 | 4 | NYT, WP, CDT, LAT | A |
| 2 Feb 1933 | Aufruf An Das Deutsche Volk | 6:57 | 4 | NYT, WP, CDT, LAT | A |
| 10 Feb 1933 | Aufruf An Das Deutsche Volk Our Program | 0:23 | 4 | NYT, WP, CDT, LAT | A |
| 12 Mar 1933 | Election Speech To Prussian Landtag | 3:25 | 4 | NYT, WP, CDT, LAT | A |
| 10 May 1933 | Die Bucherverbrennung In Berlin | 0:21 | 4 | NYT, WP, CDT, LAT | A |
| 6 Feb 1934 | Discours | 0:19 | 4 | NYT, WP, CDT, LAT | A |
| 11 Nov 1935 | Denonce Les Scandales En Belgique | 0:18 | 4 | NYT, WP, CDT, LAT | A |
| 9 May 1936 | Benito Mussolini Vincere | 1:13 | 4 | NYT, WP, CDT, LAT | A |
| 11 Apr 1937 | Denounces Fdrs New Deal | 3:52 | 3 | NYT, WP, CDT | A |
| 19 Apr 1937 | Cree La Phalange Espagnole A Salamanque | 0:21 | 4 | NYT, WP, CDT, LAT | A |
| 22 Jan 1939 | Eiar Benito Mussolini Discorso | 2:11 | 4 | NYT, WP, CDT, LAT | A |
| 15 Mar 1939 | Chamberlain After Czech Invasion | 0:30 | 5 | NYT, WP, CDT, LAT, Bcstg | A |
| 23 Aug 1939 | Dorothy Thompson: On the Nazi-Soviet Non-Aggression Pact | 0:15 | 4 | NYT, WP, CDT, LAT | A |
| 25 Aug 1939 | Allocution sur le Pacte Germano-Soviétique | 0:36 | 4 | NYT, WP, CDT, LAT | A |
| 27 Aug 1939 | Czech Ambassador Jan Masaryk in London on Polish Crisis | 1:45 | 4 | NYT, WP, CDT, LAT | A |
| 31 Aug 1939 | Alvar Lidell Reports on German 16-Point Polish Ultimatum | 0:30 | 4 | NYT, WP, CDT, LAT | A |
| 1 Sept 1939 | Alvar Liddell Reports the German Invasion of Poland | 0:45 | 5 | NYT, WP, CDT, LAT, Bcstg | A |

Every record in this log is Tier A: each is attested by two or more independently compiled
contemporaneous listings. That uniformity is a property of the program sampled, not of the
corpus — *WWII News* is international news programming, the genre most reliably carried in
every market's radio log. A log drawn from regional daytime serial drama would show a very
different tier distribution, and §6 should be read with that selection effect in view.
