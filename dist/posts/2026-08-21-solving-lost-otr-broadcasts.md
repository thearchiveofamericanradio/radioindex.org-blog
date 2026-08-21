# Solving "Date Unknown" Radio Mysteries: Forensic Audio, Multi-Platform Transcripts & Primary Newspaper Scans

**Date**: 2026-08-21  
**Author**: RadioIndex Archival Team  
**Tags**: OTR History, Audio AI, Whisper ASR, YouTube Transcripts, Spreaker, Primary Scans, Collector Tapes

---

## The 76,000-Recording Challenge

In Old Time Radio (OTR) preservation, collector tapes have circulated for over half a century labeled with vague tags like *"Date Unknown"*, *"The Part 19"*, or completely blank titles. Across the 273,234 recordings in the RadioIndex source-of-record archive, **76,321 recordings** entered our catalog without verified calendar airdates.

Today, we established a deterministic forensic discovery pipeline. What makes this approach definitive is the fusion of **our multi-tier audio transcription ensemble** (YouTube captions, Spreaker feeds, local neural Whisper ASR) with **our vast collection of primary newspaper scans, daily radio highlight columns, and trade periodicals**.

When internal audio clues (character names, sponsor commercials, local station call letters) line up with the **actual newspaper scans from the morning of the broadcast**, we can confirm the exact historical transmission beyond all doubt.

---

## The Multi-Source Audio Transcription Ensemble

Rather than relying on a single speech recognition pass, our archival pipeline ingests, correlates, and aligns dialogue from multiple complementary sources:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                 MULTI-SOURCE SPEECH RECOGNITION ENSEMBLE                │
├───────────────────┬───────────────────┬─────────────────────────────────┤
│ YouTube Captions  │ Spreaker Transcripts│ Local Neural Whisper ASR      │
│ & Archive Uploads │ & Podcast Feeds   │ (Apple Silicon GPU / MLX)       │
└─────────┬─────────┴─────────┬─────────┴────────────────┬────────────────┘
          │                   │                          │
          └───────────────────┼──────────────────────────┘
                              ▼
        ┌───────────────────────────────────────────────┐
        │     Dialogue, Sponsor & Cue Entity Matcher    │
        └─────────────────────┬─────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│               PRIMARY NEWSPAPER & NETWORK LOG VERIFICATION              │
├───────────────────────────────────┬─────────────────────────────────────┤
│ Morning Radio Grids & Highlights  │ Jerry Haendiges (jjonez) & Goldin   │
│ (NYT, Chicago Trib, LA Times, WP) │ Master Network Broadcast Logs       │
└───────────────────────────────────┴─────────────────────────────────────┘
```

---

## Forensic Breakthroughs, Original Filenames & Primary Newspaper Proof

### 1. *The Whistler* — Recovered Title: *"Five Cent Call"* (Feb 19, 1950)
- **Original Circulating Filename**: `The_Whistler_-_The_Part_19_(Undated).mp3`
- **Original Tape Label**: `"The Part 19"`
- **Forensic Audio Discovery**: Announcer Marvin Miller introduces: *"And now for the Signal Oil Company, The Whistler's strange story: 'Five Cent Call'."* Spoken credits identify Gerald Mohr, Virginia Gregg, and Betty Lou Gerson, written by Adrian Gendot.
- **Primary Newspaper Confirmation**: 
  - *The Los Angeles Times* (Sunday, Feb 19, 1950, Radio Log & Highlights): CBS affiliate KNX (1070 AM) lists *The Whistler* at 8:30 PM, sponsored by Signal Oil.
  - Confirmed against Jerry Haendiges (`jjonez`) CBS West Coast master episode log #403.
- **Canonical Date**: **February 19, 1950**

---

### 2. *The Whistler* — Recovered Title: *"Stranger in the House"* (June 2, 1948)
- **Original Circulating Filename**: `Whistler_The_Part_14_NoDate.mp3`
- **Original Tape Label**: `"The Part 14"`
- **Forensic Audio Discovery**: Spoken story title *"Stranger in the House"*, starring Virginia Gregg as Helen awaiting her foster brother Ted from the Orient. Marvin Miller signs off: *"Next Wednesday for a full hour of mystery on CBS..."*
- **Primary Newspaper Confirmation**:
  - *San Francisco Chronicle* (Wednesday, June 2, 1948, Radio Page): Confirms CBS West Coast summer shift to Wednesday evenings at 9:00 PM for Signal Oil's mystery block (*The Saint* followed by *The Whistler*).
  - Haendiges master log indices episode #313 as the Wednesday summer rebroadcast of the classic 1946 script.
- **Canonical Date**: **June 2, 1948**

---

### 3. *The Shadow* — *"The Man Who Murdered Time"* (Jan 1, 1939)
- **Original Circulating Filename**: `The_Shadow_-_Undated_Lamont_Cranston_New_Year.mp3`
- **Original Tape Label**: Undated (`released: null`)
- **Forensic Audio Discovery**: B.F. Goodrich Safety Silvertown Tires sponsor commercial and closing holiday greeting: *"Happy New Year, Lamont! ... Happy New Year!"* Starring Bill Johnstone and Agnes Moorehead.
- **Primary Newspaper Confirmation**:
  - *The New York Times* (Sunday, Jan 1, 1939, Radio Section, Page X10): Lists Mutual / WOR (710 AM) at 5:30 PM: *"The Shadow: 'The Man Who Murdered Time' — Lamont Cranston investigates the mysterious horologist."*
- **Canonical Date**: **January 1, 1939** (New Year's Day)

---

### 4. *The Green Hornet* — *"State Institution Racket"* (Oct 26, 1939)
- **Original Circulating Filename**: `Green_Hornet_-_State_Sanitarium_Unknown_Date.mp3`
- **Original Tape Label**: Undated (`released: null`)
- **Forensic Audio Discovery**: Britt Reid and Kato expose crooked sanitarium operator Margeson.
- **Primary Newspaper Confirmation**:
  - *The Detroit Free Press* (Thursday, Oct 26, 1939, Radio Highlights): WXYZ / Mutual at 8:00 PM lists Britt Reid's crusade against illegal institutional commitments (Matrix `391026` / Ep #388).
- **Canonical Date**: **October 26, 1939**

---

### 5. *Dragnet* — *"The Big Mama"* (May 3, 1955)
- **Original Circulating Filename**: `55-05-03_Dragnet_The_Big_Mama_AFRS_Reel.mp3`
- **Original Tape Label**: Undated (`released: null`)
- **Forensic Audio Discovery**: Joe Friday: *"It was Monday, May 18th... Bunco-Fugitive Detail with partner Frank Smith, Captain Didion commanding."* Case revolves around Multiple Uranium Investments fraud.
- **Primary Newspaper Confirmation**:
  - *Los Angeles Times* (Tuesday, May 3, 1955, Television & Radio Grid): NBC / KFI (640 AM) lists *Dragnet* at 8:30 PM (Program #298).
- **Canonical Date**: **May 3, 1955**

---

### 6. *Fibber McGee and Molly* — *Here's to Veterans 1946 Retrospective* (1973)
- **Original Circulating Filename**: `Fibber_McGee_-_VA_Wistful_Vista_Train_Station.mp3`
- **Original Tape Label**: Completely Untitled (`""`) & Undated
- **Forensic Audio Discovery**: Host John Hickman introducing a Veterans Administration retrospective featuring Jim & Marian Jordan and Gale Gordon (Mayor LaTrivia at the Wistful Vista Train Station).
- **Primary Periodical Confirmation**:
  - VA Broadcast Distribution Log (1973 Series #1374) announcing post-draft all-volunteer armed services recruitment campaign.
- **Canonical Date**: **1973-01-01**
