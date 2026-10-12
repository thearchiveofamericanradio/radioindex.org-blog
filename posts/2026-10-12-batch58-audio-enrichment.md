# Archival Dispatch: Audio Enrichment Batch 58 — Lowest Duration Queue (10 Broadcasts)

**Date**: 2026-10-12  
**Author**: radio index  
**Tags**: Wolfman Jack, Planet Hollywood, Fibber McGee, Jim Jordan, Chuck Schaden, Larry Stevens, Rory Rammer, Adventures in Odyssey, WebVTT

---

## 1. Progress Metrics & Batch Milestone

Continuing our ascending-duration queue processing, Batch 58 enriched 10 historical broadcasts ranging from 20.9m to 22.1m (~3.59 hours of audio). This batch includes the poignant final live radio broadcast of Wolfman Jack, foundational *Adventures in Odyssey* episodes, classic radio comedy retrospectives, and contemporary audio theatre. 

Per system optimization guidelines, all 10 broadcasts were transcribed strictly on CPU, processed serially one broadcast at a time using Whisper on 4 threads, fitted with dual-keyed WebVTT captions, and enriched with verbatim grounded synopses.

* **Batch Scope**: 10 historical broadcasts across 4 series (1984–2009).
* **ASR Engine**: Whisper tiny.en on CPU (strictly serial, 1 at a time, 4 threads).
* **Subtitles**: 20 synchronized WebVTT caption tracks added to radioindex.org-subtitles (keyed by UUID and audio SHA256).
* **Metadata**: 4 series JSON files updated in radioindex.org-meta.
* **Cumulative Milestone**: 270 post-1983 broadcasts enriched with audio, subtitles, and synopses (26.4% of total scope).
* **Invariant**: 100% verified against verbatim spoken audio, 0 period abbreviations, 0 banned words.

---

## 2. Archival Discoveries & Ground Truth Corrections

* **Catalog Misidentification: Dick Beals (`abe6756c-6827-4982-a246-f835085af437`)**:
  * *Previous Catalog Entry*: Listed as an interview with legendary diminutive voice actor Dick Beals (Speedy Alka-Seltzer).
  * *Audio Ground Truth*: Verbatim audio dialogue reveals this recording is actually an interview with resident *Jack Benny Program* tenor singer Larry Stevens, identical to the October 11, 1998 FOTR convention interview. The synopsis has been grounded strictly in the spoken dialogue.
* **Wolfman Jack's Final Broadcast (`62b30169-0469-490f-8bc1-2f9e17c14a70`)**:
  * *Context*: Recorded live at Planet Hollywood in Washington, D.C. on June 30, 1995, just hours before Robert Weston Smith (Wolfman Jack) suffered a fatal heart attack on July 1, 1995.
* **Jim Jordan Retrospective (`2cdbdbb2-b170-4c11-a5be-1012dcd34981`)**:
  * *Context*: Chuck Schaden speaks with 87-year-old radio legend Jim Jordan shortly after Jordan received his star on the Hollywood Walk of Fame for *Fibber McGee and Molly*.

---

## 3. Grounded 1-Sentence Synopses (100–180 Characters)

### 1. American Forces Vietnam Network — Wolfman Jack Last Show Live At Planet Hollywood (1995-06-30)
* **UUID**: `62b30169-0469-490f-8bc1-2f9e17c14a70`
* **Synopsis (160 chars)**:
  > Disc jockey Wolfman Jack broadcasts a lively syndicated radio program featuring vintage rock and roll tunes and listener phone calls live from Planet Hollywood.

### 2. Rory Rammer — Space Marshal (ARTC) The Atomic Graveyard (2009-01-08)
* **UUID**: `9ffe3a80-30f6-41b4-a22d-ecc9eda087c0`
* **Synopsis (165 chars)**:
  > Space Marshal Rory Rammer and his sidekick Skip discover a hidden cache of stolen pirate booty nestled dangerously near the perimeter of a radioactive space anomaly.

### 3. Chuck Schaden Interviews — Jim Jordan (1984-10-17)
* **UUID**: `2cdbdbb2-b170-4c11-a5be-1012dcd34981`
* **Synopsis (161 chars)**:
  > Host Chuck Schaden interviews veteran radio comedian Jim Jordan reflecting on his Hollywood Walk of Fame star and his decades starring on Fibber McGee and Molly.

### 4. Rory Rammer — The Meteor Surfers of Callisto (2006-08-31)
* **UUID**: `580f91bd-0d6b-40de-a262-e200c72bb5f4`
* **Synopsis (160 chars)**:
  > Space Marshal Rory Rammer confronts reckless adrenaline seekers riding dangerous orbital debris streams during a live comedic science fiction audio performance.

### 5. Adventures In Odyssey — The Life Of The Party (1987-11-28)
* **UUID**: `f242a8d9-41ac-4522-a79d-36d437751fc7`
* **Synopsis (157 chars)**:
  > A young student in Odyssey learns meaningful lessons about true friendship and humility after recklessly attempting to become the center of social attention.

### 6. Adventures In Odyssey — Addictions Can Be Habit Forming (1988-01-30)
* **UUID**: `30149d61-9d26-4181-bbe1-556fc0aa75ed`
* **Synopsis (158 chars)**:
  > The young residents of Odyssey examine personal habits and temptations while discovering how accountability and honest support can help overcome bad impulses.

### 7. Adventures In Odyssey — Whits Flop (1987-11-21)
* **UUID**: `88e33b37-f312-4ae8-a6cf-f035eba2dc5f`
* **Synopsis (163 chars)**:
  > Inventor John Avery Whittaker demonstrates an intricate mechanical model train to local children while sharing valuable perspective on persevering through failure.

### 8. Adventures In Odyssey — The Tangled Web (1988-02-06)
* **UUID**: `1777db3d-e744-4d51-9213-7ead0d48db84`
* **Synopsis (157 chars)**:
  > A boy in Odyssey becomes trapped in a compounding web of deceit and schoolyard extortion after telling an initial untruth to conceal an embarrassing mistake.

### 9. Chuck Schaden Interviews — Larry Stevens at FOTR Convention (1998-10-11)
* **UUID**: `5f1386e3-9885-4643-a431-b31f0df2d26f`
* **Synopsis (157 chars)**:
  > Host Chuck Schaden interviews singer Larry Stevens at a radio convention reminiscing about his broadcasting experiences performing on The Jack Benny Program.

### 10. Chuck Schaden Interviews — Dick Beals [Larry Stevens Broadcast] (1998-10-22)
* **UUID**: `abe6756c-6827-4982-a246-f835085af437`
* **Synopsis (148 chars)**:
  > Host Chuck Schaden interviews singer Larry Stevens at a radio convention reflecting on rehearsals and vocal performances for The Jack Benny Program.
