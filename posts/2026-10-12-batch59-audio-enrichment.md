# Archival Dispatch: Audio Enrichment Batch 59 — Lowest Duration Queue (10 Broadcasts)

**Date**: 2026-10-12  
**Author**: radio index  
**Tags**: Sherlock Holmes, John Gielgud, Ralph Richardson, Virginia Gregg, Chuck Schaden, Cliff Proton, Adventures in Odyssey, WETL, WebVTT

---

## 1. Progress Metrics & Batch Milestone

Continuing our ascending-duration queue processing, Batch 59 enriched 10 historical broadcasts ranging from 22.1m to 23.0m (~3.76 hours of audio). The batch spans BBC classic literature dramatisations, golden age radio acting retrospectives, modern science fiction serials, and regional radio theatre.

Following system optimization guidelines, all 10 broadcasts were transcribed strictly on CPU, processed serially one broadcast at a time using Whisper on 4 threads, fitted with dual-keyed WebVTT captions, and enriched with verbatim grounded synopses.

* **Batch Scope**: 10 historical broadcasts across 7 series (1984–2008).
* **ASR Engine**: Whisper tiny.en on CPU (strictly serial, 1 at a time, 4 threads).
* **Subtitles**: 20 synchronized WebVTT caption tracks added to radioindex.org-subtitles (keyed by UUID and audio SHA256).
* **Metadata**: 7 series JSON files updated in radioindex.org-meta.
* **Cumulative Milestone**: 280 post-1983 broadcasts enriched with audio, subtitles, and synopses (27.4% of total scope).
* **Invariant**: 100% verified against verbatim spoken audio, 0 period abbreviations, 0 banned words.

---

## 2. Archival Discoveries & Ground Truth Corrections

* **Misfiled Audio Mystery: The Red-Headed League (`7249f551-a583-4be4-aa2e-5e730feb5561`)**:
  * *Previous Catalog Entry*: Listed under *The Mystery Chef* series with the title *The Mystery Project Sherlock Holmes The Mystery of the Gold Doubloon*.
  * *Audio Ground Truth*: Verbatim audio dialogue reveals this recording is Sir John Gielgud (Sherlock Holmes) and Sir Ralph Richardson (Dr. Watson) performing in Sir Arthur Conan Doyle's *The Red-Headed League*, produced by Harry Alan Towers with original music by Sidney Torch. The synopsis has been grounded strictly in this spoken dialogue.
* **Virginia Gregg Career Retrospective (`e13d0a67-d225-4f0c-b7df-7ef181286f6d`)**:
  * *Context*: Chuck Schaden visits the prolific radio actress in Southern California, discussing her legendary work alongside Jack Webb on *Dragnet* and her versatile performances across hundreds of golden age radio broadcasts.

---

## 3. Grounded 1-Sentence Synopses (100–180 Characters)

### 1. Sherlock Holmes — Shoscombe Old Place (1995-03-22)
* **UUID**: `f79e283a-36ef-4139-8e29-460619699dd1`
* **Synopsis (165 chars)**:
  > Sherlock Holmes and Doctor Watson investigate bizarre equine activities and family secrets surrounding a desperate nobleman at the Shoscombe Old Place racing estate.

### 2. The Mystery Chef — The Red-Headed League [Gielgud & Richardson] (1996-11-23)
* **UUID**: `7249f551-a583-4be4-aa2e-5e730feb5561`
* **Synopsis (166 chars)**:
  > Detective Sherlock Holmes and Doctor Watson investigate an unusual employment agency offering lavish wages to redheaded men as part of an elaborate bank heist scheme.

### 3. Texas Radio Theatre — Cliff Proton Quantum Suit (1 Of 3) (2008-04-05)
* **UUID**: `df8cdf20-f57b-4a27-8d29-007de8c7247b`
* **Synopsis (166 chars)**:
  > Texas Radio Theatre presents a comedic science fiction audio drama chronicling the interplanetary exploits of galactic hero Cliff Proton testing a quantum space suit.

### 4. Texas Radio Theatre — Cliff Proton Space Vikings (3 Of 3) (2008-02-23)
* **UUID**: `ea10f8c8-d744-401f-9968-2921663bd670`
* **Synopsis (168 chars)**:
  > Galactic adventurer Cliff Proton negotiates between feuding extraterrestrial factions before powerful cosmic beings intervene to enforce permanent planetary separation.

### 5. Rory Rammer — Space Marshal (ARTC) Enemies Within (2007-08-16)
* **UUID**: `f592040f-0590-4ff1-96bc-88f60b9fe21e`
* **Synopsis (165 chars)**:
  > Space Marshal Rory Rammer and Skip face awkward bureaucratic scrutiny during a high-stakes meeting with government officials investigating internal security threats.

### 6. Chuck Schaden Interviews — Virginia Gregg (1984-03-14)
* **UUID**: `e13d0a67-d225-4f0c-b7df-7ef181286f6d`
* **Synopsis (169 chars)**:
  > Host Chuck Schaden interviews prolific dramatic actress Virginia Gregg reflecting on her extensive radio career performing on classic crime and western broadcast series.

### 7. Adventures In Odyssey — Bad Luck (1997-03-11)
* **UUID**: `adb15f50-a2bc-4cf9-8d48-20654be765bc`
* **Synopsis (165 chars)**:
  > A young girl in Odyssey reconsiders her superstitious beliefs about bad luck after enduring a comical series of unfortunate mishaps while recovering from an illness.

### 8. Adventures In Odyssey — My Brothers Keeper (1988-02-27)
* **UUID**: `b9f7f5ee-c605-4a7d-8894-cfe949a79600`
* **Synopsis (166 chars)**:
  > A frustrated older brother in Odyssey learns enduring lessons concerning family loyalty and personal responsibility while struggling to supervise his younger sibling.

### 9. Adventures In Odyssey — Suspicious Minds (1997-03-25)
* **UUID**: `ecadf2c1-581d-4526-be63-f1d8918cc99f`
* **Synopsis (167 chars)**:
  > The staff members at Whits End confront mistrust and misplaced accusations among friends after missing cash creates widespread suspicion throughout the ice cream shop.

### 10. WETL Radio Players — The Fisherman And His Wife (1984-12-20)
* **UUID**: `d040678f-594b-45fb-b809-59c69b02ef9f`
* **Synopsis (168 chars)**:
  > The WETL Radio Players present a fairy tale adaptation by Jerry Limbert recounting a poor fisherman who catches an enchanted wish-granting flounder for his greedy wife.
