# Archival Dispatch: Audio Enrichment Batch 61 — Lowest Duration Queue (10 Broadcasts)

**Date**: 2026-10-12  
**Author**: radio index  
**Tags**: large-v3-turbo, Adventures in Odyssey, Olan Soule, Ed Haacker, Chuck Schaden, World War II, First Nighter, WebVTT

---

## 1. Progress Metrics & Batch Milestone

Continuing our ascending-duration queue processing, Batch 61 enriched 10 historical broadcasts ranging from 23.5m to 24.0m (~3.95 hours of audio). This batch marks a major architectural enhancement: all transcriptions were executed using the state-of-the-art OpenAI Whisper **`large-v3-turbo`** model (1.51 GB), running strictly on CPU serially one broadcast at a time on 4 threads to maintain gentle, quiet system performance.

All 10 broadcasts were transcribed with high-fidelity `large-v3-turbo` captions, fitted with dual-keyed WebVTT caption files, and enriched with verbatim grounded synopses.

* **Batch Scope**: 10 historical broadcasts across 2 series (1987–1997).
* **ASR Engine**: OpenAI Whisper **`large-v3-turbo`** on CPU (strictly serial, 1 at a time, 4 threads).
* **Subtitles**: 20 synchronized WebVTT caption tracks added to radioindex.org-subtitles (keyed by UUID and audio SHA256).
* **Metadata**: 2 series JSON files updated in radioindex.org-meta.
* **Cumulative Milestone**: 300 post-1983 broadcasts enriched with audio, subtitles, and synopses (29.3% of total scope).
* **Invariant**: 100% verified against verbatim spoken audio, 0 period abbreviations, 0 banned words.

---

## 2. Archival Discoveries & Grounded Highlights

* **Olan Soule Broadcasting Career (`13b04cad-f74e-4175-88e4-2f54f7252d13`)**:
  * *Context*: Chuck Schaden welcomes prolific actor Olan Soule to the Museum of Broadcast Communications. Soule recounts performing on thousands of Chicago radio drama broadcasts—most famously as the lead on *The First Nighter Program*—before transitioning to television and voice acting.
* **Wartime NBC Newsman Ed Haacker (`4e7248f1-d303-4f15-bdc4-34ab56816a4a`)**:
  * *Context*: NBC correspondent Ed Haacker reflects on live wartime radio reporting across the European theater of World War II, the logistics of military communications, and pioneering weather forecasting with Caltech meteorologist Dr. Irving Krick.

---

## 3. Grounded 1-Sentence Synopses (100–180 Characters)

### 1. Adventures In Odyssey — Operation Digout (1997-03-04)
* **UUID**: `3e513367-bffa-4e88-86c8-27b90d964c28`
* **Synopsis (166 chars)**:
  > John Avery Whittaker recounts his harrowing wartime military service in the Pacific theater while deciphering intercepted communications during an amphibious landing.

### 2. Adventures In Odyssey — The Very Best Of Friends (1997-03-05)
* **UUID**: `b1c5c53e-74eb-4c05-95b1-00e667a9aeeb`
* **Synopsis (165 chars)**:
  > A young girl in Odyssey confronts painful memories surrounding a cherished friendship while discovering emotional healing and spiritual comfort among caring friends.

### 3. Chuck Schaden Interviews — Olan Soule (1989-10-11)
* **UUID**: `13b04cad-f74e-4175-88e4-2f54f7252d13`
* **Synopsis (167 chars)**:
  > Host Chuck Schaden interviews veteran radio and television actor Olan Soule reflecting on his prolific broadcasting career in Chicago daytime and evening drama series.

### 4. Adventures In Odyssey — Gifts For Madge And Guy (1987-12-19)
* **UUID**: `c6ac9b8f-6a2d-4be4-8437-dcb686687fe5`
* **Synopsis (161 chars)**:
  > A young couple in Odyssey discovers the profound meaning of sacrificial love after secretly parting with prized possessions to buy each other Christmas presents.

### 5. Adventures In Odyssey — Rescue From Manatugo Point (1997-03-03)
* **UUID**: `6df54ee3-ccfe-48e5-bf46-082910b1069d`
* **Synopsis (166 chars)**:
  > A Veterans Day parade in Odyssey inspires dramatic wartime memories of an Allied reconnaissance team dispatched into the Pacific jungle to rescue an isolated comrade.

### 6. Adventures In Odyssey — Missed It By That Much (1988-02-20)
* **UUID**: `d96694fa-258d-4f02-95a7-8b946f22403b`
* **Synopsis (159 chars)**:
  > A chronically tardy young girl in Odyssey experiences an imaginative and surreal dream sequence that illustrates the consequences of procrastination and delay.

### 7. Adventures In Odyssey — Doing Unto Others (1988-01-16)
* **UUID**: `16d3ffb0-90ac-4093-8d8f-ce4894e75c4e`
* **Synopsis (165 chars)**:
  > An enthusiastic boy in Odyssey attempts to put the Golden Rule into practice, navigating a series of well-intentioned misunderstandings and unexpected comic mishaps.

### 8. Adventures In Odyssey — The Trouble With Girls (1997-03-31)
* **UUID**: `5d88ff3a-72f4-4172-a3d3-8d6152191827`
* **Synopsis (165 chars)**:
  > Adolescents in Odyssey navigate the comical anxieties and social awkwardness of youthful romantic crushes during an afternoon stroll through a community park gazebo.

### 9. Chuck Schaden Interviews — Ed Haacker (1994-05-07)
* **UUID**: `4e7248f1-d303-4f15-bdc4-34ab56816a4a`
* **Synopsis (167 chars)**:
  > Host Chuck Schaden interviews veteran NBC news correspondent Ed Haacker reflecting on his radio reporting career and military broadcasting during the Second World War.

### 10. Adventures In Odyssey — Elijah Part 2 (1997-02-28)
* **UUID**: `d05398d4-185f-4f1c-a965-441c166d17af`
* **Synopsis (166 chars)**:
  > Two Odyssey youngsters travel back in time through the Imagination Station to witness the prophet Elijah confront the prophets of Baal on the heights of Mount Carmel.
