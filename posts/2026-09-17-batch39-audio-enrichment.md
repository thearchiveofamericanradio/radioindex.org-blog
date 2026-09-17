# Archival Dispatch: Audio Enrichment Batch 39 — Mystery Playhouse (AFRS Classics Part 4)

**Date**: 2026-09-17  
**Author**: radio index  
**Tags**: Mystery Playhouse, Peter Lorre, Raymond, Inner Sanctum, Molle Mystery Theater, The Whistler, Whispered Audio, PR 5460

---

## 1. Progress Metrics & Inventory Milestone

This dispatch documents the transcription, captioning, and verbatim metadata enrichment of Batch 39, extending our focused restoration of *Mystery Playhouse*—the Armed Forces Radio Service (AFRS) series providing Allied troops with premier radio crime, psychological, and supernatural theater throughout World War II.

* **Total Dated Targets (PR #5460)**: **5,398**
* **Active Post-1985 Playable Stream Targets Remaining**: **604** (down from 612).
* **Batch Scope**: 8 classic mystery dramatizations totaling ~3.7 hours of audio, featuring Peter Lorre hosting *Molle Mystery Theater* adaptations and original crime dramas, alongside Raymond hosting *Inner Sanctum* and Bill Forman voicing *The Whistler*.
* **ASR Ladder**: Dual parallel Whisper `tiny.en` worker pool on Apple Silicon MPS GPU (`MAX_PARALLEL = 2`), processing ~3.7 hours of audio in ~8.2 minutes wall-clock time (~167,000 characters transcribed).
* **Subtitles**: 8 synchronized WebVTT caption tracks added to `radioindex.org-subtitles` (`9b0fe31`).
* **Metadata**: 8 broadcasts enriched with verbatim-grounded 1-sentence synopses, verified broadcast airtimes, and playbill links in `radioindex.org-meta` (`50e06b3bfa`).
* **Zero Synthesis Invariant**: 100% verified against verbatim spoken audio.

---

## 2. Archival Discoveries & Grounded 1-Sentence Synopses

Every synopsis conforms strictly to the 100–180 character standard (story-first, dramatic action, high factual density, zero assistant boilerplate):

### 1. Molle Mystery Theater Nightmare
* **UUID**: `1bb0e875-8fd2-43bb-9897-1f17e6f9c526`
* **Audio SHA256**: `28bc7f65108ed979fb251d262b011dcf68b8770d90b1c0e707d07b53dfafb134`
* **Synopsis (155 chars)**:
  > Host Peter Lorre presents an AFRS Mystery Playhouse broadcast of Molle Mystery Theater as a distressed amnesiac uncovers an unsettling hypnosis conspiracy.
* **Archival Discovery**: Lorre opens with an intimate whisper on waking from bad dreams; the drama revolves around post-hypnotic suggestion and a candle flame.

### 2. Inner Sanctum Voice On The Wire
* **UUID**: `381727e0-9425-45e7-a823-c9e43a8f28f0`
* **Audio SHA256**: `2395f62f8bc33860d3d0050e373dd062632f26ec72e9f85204d27aa4cb6cf7a3`
* **Synopsis (148 chars)**:
  > Host Raymond opens the creaking door for an Inner Sanctum mystery concerning a frantic escape from a corrupt physician and a sinister phone warning.
* **Archival Discovery**: Features classic Himan Brown organ chords, creepy physician dialogue, and telephone sound effects building mounting dread.

### 3. A Crime To Fit The Punishment
* **UUID**: `a1b5edf2-ebfa-4df1-8515-e5f6f815a138`
* **Audio SHA256**: `eb2a9710ba648c85f122d3cff513f751a001df19cc84d6bfb76b565119afb987`
* **Synopsis (150 chars)**:
  > Host Peter Lorre welcomes servicemen to Mystery Playhouse for a detective thriller where a cunning investigator matches wits with an arrogant gambler.
* **Archival Discovery**: Tough-talking mid-1940s urban crime procedural where an aloof con-man is trapped by physical evidence.

### 4. Inner Sanctum The Color Blind Formula
* **UUID**: `b979fe7f-c790-4ee0-ac76-2b8080fd189f`
* **Audio SHA256**: `279110a2c573b98fd31c1b3c997d7eafbe466aeba7a0abc16f9319001fb1d1fd`
* **Synopsis (133 chars)**:
  > Host Raymond opens Inner Sanctum for a macabre thriller where conspirators plot murder to steal a secret industrial chemical formula.
* **Archival Discovery**: Raymond jests about door stops and colorful personalities before launching into a wartime industrial espionage plot.

### 5. Molle Mystery Theater The Bottle Imp
* **UUID**: `771249a2-963c-4ad3-999d-668f5c413220`
* **Audio SHA256**: `f17111d252a68e910433ecabfe0ae9fa10989c266b1fc12754f4c5b01e63768b`
* **Synopsis (153 chars)**:
  > Host Peter Lorre presents an AFRS adaptation of Robert Louis Stevenson The Bottle Imp as an owner bargains desperately to escape a cursed demonic vessel.
* **Archival Discovery**: Rare radio dramatization of Robert Louis Stevenson's Pacific folktale adapted for wartime military listeners.

### 6. Molle Mystery Theater The Man In The Velvet Hat
* **UUID**: `09cfe30f-6cbb-4ef8-be72-4e7e44d3a65f`
* **Audio SHA256**: `471ef0ebfd5f1ec3123f560b0dab9f9b7579f8fe86d149f7b6572c4038dc5ecf`
* **Synopsis (148 chars)**:
  > Host Peter Lorre presents an AFRS Mystery Playhouse thriller as a phantom killer in a velvet hat terrorizes Manhattan with public execution threats.
* **Archival Discovery**: Lorre recounts bizarre accidents across New York linked to an unidentifiable velvet-hatted spectator before a Times Square countdown.

### 7. Molle Mystery Theater The Letter
* **UUID**: `0649491e-1391-4dbc-a57e-94eb9ba0a05a`
* **Audio SHA256**: `d01f16f7844775c608a5a994ca01e475a69c89fb3c652028fe562c4e42212c73`
* **Synopsis (156 chars)**:
  > Host Peter Lorre presents an AFRS adaptation of Somerset Maugham The Letter as a plantation wife faces murder charges after shooting her lover in Singapore.
* **Archival Discovery**: Adaptation of W. Somerset Maugham's pre-war Singapore colonial melodrama, featuring a lethal blackmail scheme over a handwritten letter.

### 8. Whistler The Body Wouldn't Stay In The Bay
* **UUID**: `fb449273-f84a-45b4-863d-e43a8e997958`
* **Audio SHA256**: `640bd257bfb9cf35895b4e7120b9714721dccace8a5ee692d9a2a73a90e1156c`
* **Synopsis (147 chars)**:
  > On an AFRS transmission of The Whistler, a corrupt nightclub operator panics when a drowned woman body resurfaces in the bay and prompts blackmail.
* **Archival Discovery**: Coastal noir centered on the Skyland Club dock and a corrupt owner trapped by his own crime months after believing he got away.
