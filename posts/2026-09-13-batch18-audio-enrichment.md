# Archival Dispatch: Audio Enrichment Batch 18 — Post-1985 American Broadcasts & BBC Scope Gate

**Date**: 2026-09-13  
**Author**: radio index  
**Tags**: Doc Savage, Roger Rittner, Lester Dent, WKTU Dan Ingram, Ann Tripp, Ronald Reagan, State of the Union, WETL South Bend, Jerry Limber, Whispered Audio, PR 5460

---

## 1. Progress Metrics & Provenance Milestone

This dispatch records the completion of Batch 18, applying single-process Whisper ASR on Apple Silicon MPS GPU to post-1985 American radio broadcasts and enforcing the United States Provenance Gate across the catalog.

* **Total Dated Targets (PR #5460)**: **5,407**
* **Foreign BBC Series Withdrawn**: **77 series (6,505 total episodes)** cleanly marked `withdrawn: true` per American radio scope.
* **Remaining Active Post-1985 Playable Stream Audio Targets**: **845** (850 prior to this batch).
* **ASR Ladder**: Whisper `tiny.en` sequential single-process GPU acceleration on Apple Silicon MPS (~17x real-time speed).
* **Subtitles**: 8 synchronized WebVTT caption tracks added to `radioindex.org-subtitles`.
* **Zero Synthesis Invariant**: 100% grounded in verbatim spoken dialogue.

---

## 2. Archival Discoveries & Grounded 1-Sentence Synopses

Every synopsis follows the strict 100–180 character standard (story-first, dramatic action, high factual density, zero assistant boilerplate):

### 1. The Adventures Of Doc Savage: Thousand Headed Man Chapter 5 (1985-01-01)
* **UUID**: `a43faf42-196b-469a-84d8-cea5ddf9cc8d`
* **Audio SHA256**: `c4760aa8264c379c2181846117ba0b6fffc58abf451e938bf60531af0bca4425`
* **Synopsis (153 chars)**:
  > Doc Savage and his companions melt Copeland's secret antidote from his shirt to survive the venomous cobras, defeat the cultists, and escape Indochina.
* **Archival Discovery**: Produced and directed by Roger Rittner for the Variety Arts Radio Theatre; adapted by Will Murray from Lester Dent. Cast features Daniel Chodos, Bill Ratner, Art Deutsch, Scott McKenna, Bob Farley, Robert Towers, William Irwin, Glenn Shadix, Douglas Kohler, and Bob Lines.

### 2. Radio Airchecks: WKTU Dan Ingram (1985-01-14)
* **UUID**: `1124c037-be53-46f5-8ae4-5c45d372cd3e`
* **Audio SHA256**: `c85f4ec2e5fdc988cdb01b9214378703f0c40883e12f346697fe57da281cb467`
* **Synopsis (161 chars)**:
  > Dan Ingram helms afternoon drive on New York's 92 KTU with witty on-air patter, local commercials, traffic updates, and Ann Tripp's ninety-second news bulletin.
* **Archival Discovery**: Authentic high-energy afternoon drive aircheck on New York's 92 KTU featuring legendary broadcaster Dan Ingram and news anchor Ann Tripp reporting on Bernhard Goetz, Ariel Sharon, and local subway delays.

### 3. Ronald Reagan: Second State Of The Union Address (1985-02-06)
* **UUID**: `feddf73a-fca8-41f6-b1cf-2d5f7efdfe5c`
* **Audio SHA256**: `de3b406b2aec9d7ad5cf116dab1dc40fd956ed71acd4f9b947c9c763e6304711`
* **Synopsis (163 chars)**:
  > President Ronald Reagan delivers his 1985 State of the Union address, advocating the Strategic Defense Initiative and honoring heroes Jean Nguyen and Clara Hale.
* **Archival Discovery**: Landmark joint session address outlining economic recovery, deterrence diplomacy, and introducing West Point cadet Jean Nguyen and Harlem caregiver Clara Hale as American heroes.

### 4. WETL - South Bend IN: The Golden Touch (1985-02-07)
* **UUID**: `9e279409-55ed-4a6e-9608-c6bd56d1c40d`
* **Audio SHA256**: `7384fb700909fa529da1597bdac842a15d1c5938c64e37ca6fe6e0903fc53b5e`
* **Synopsis (153 chars)**:
  > King Midas regrets his wish for the golden touch after turning his daughter Marigold to gold, seeking Bacchus's counsel to reverse the curse with river water.
* **Archival Discovery**: Community educational radio dramatization from WETL South Bend Community School Corporation, written and produced by Jerry Limber, featuring John H. B. Coff as King Midas, Mary Anne Moran as Marigold, Gary Kreska, Mark Lauteman, and announcer Carol McDaniel.

### 5. Ronald Reagan: Second Inaugural Luncheon For... (1985-02-21)
* **UUID**: `21342d8c-4324-4752-9994-66f18188d279`
* **Audio SHA256**: `d0830a35867d696bceef82bb4c58cc919359136c9b86065880168656daa3d692`
* **Synopsis (154 chars)**:
  > Senator Mathias presents commemorative crystal to President Reagan and Vice President Bush before Reagan toasts congressional cooperation and Calvin Coolidge.
* **Archival Discovery**: Post-inaugural congressional luncheon toast at Statuary Hall in the U.S. Capitol with Senator Charles Mathias, Vice President George H. W. Bush, and President Reagan citing Calvin Coolidge on legislative partnership.

---

## 3. Grounded Verification & Multi-Repo Status

* **Subtitles Repository (`radioindex.org-subtitles`)**: 8 WebVTT caption tracks installed (commit `c9e6f8b`).
* **Metadata Repository (`radioindex.org-meta`)**: 5 American episodes enriched with verbatim Whisper synopses, cast and crew credits (commit `eec4abbfea`).
* **Foreign Scope Takedown**: 77 BBC-only series marked withdrawn (commits `d726df4987`, `7e6dcb6a21`).
