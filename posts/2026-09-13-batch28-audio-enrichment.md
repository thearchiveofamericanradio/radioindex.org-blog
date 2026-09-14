# Archival Dispatch: Audio Enrichment Batch 28 — Charlie Tuna AFRTS Broadcasts

**Date**: 2026-09-13  
**Author**: radio index  
**Tags**: Charlie Tuna, AFRTS, Armed Forces Radio, Stevie Wonder, ELO, Billy Joel, David Gates, Whispered Audio, PR 5460

---

## 1. Progress Metrics & Inventory Milestone

This dispatch records the transcription and grounded metadata enrichment of Batch 28, continuing through the prioritized *Charlie Tuna* Armed Forces Radio and Television Service (AFRTS) music shows under dual-worker GPU parallelization on Apple Silicon MPS.

* **Total Dated Targets (PR #5460)**: **5,398**
* **Active Post-1985 Playable Stream Targets Remaining**: **694** (down from 702).
* **Batch Scope**: 8 classic Armed Forces Radio Service broadcasts hosted by legendary Los Angeles disc jockey Charlie Tuna, featuring contemporary pop and rock music, comedy sketches, listener call-ins, and military service announcements.
* **ASR Ladder**: Dual parallel Whisper `tiny.en` worker pool on Apple Silicon MPS GPU (`MAX_PARALLEL = 2`), processing ~6.5 hours of broadcast audio in ~23 minutes.
* **Subtitles**: 8 synchronized WebVTT caption tracks added to `radioindex.org-subtitles` (`e006c27`).
* **Metadata**: 8 broadcasts enriched with verbatim-grounded 1-sentence synopses, verified broadcast contexts, and playbill links in `radioindex.org-meta` (`a64f1dfb42`).
* **Zero Synthesis Invariant**: 100% verified against spoken dialogue.

---

## 2. Archival Discoveries & Grounded 1-Sentence Synopses

Every synopsis conforms strictly to the 100–180 character standard (story-first, dramatic action, high factual density, zero assistant boilerplate):

### 1. Charlie Tuna: A F R T S (Holiday ELO Special)
* **UUID**: `a5a0e0ff-fc32-4a97-8b41-b50d09011853`
* **Audio SHA256**: `af7b8a51a0d5ab26a8671d24ed2e12f1b413033c5e68be8db16057c6ee767d16`
* **Synopsis (165 chars)**:
  > Charlie Tuna jokes about holiday cameras, spins pop hits by Electric Light Orchestra, and broadcasts lighthearted humor to American armed forces personnel in Europe.
* **Archival Discovery**: Special holiday broadcast sponsored by Eastman Kodak, sending greetings to US military personnel across Europe.

### 2. Charlie Tuna: A F R T S (Soft Rock & Bread)
* **UUID**: `112f7b9a-433e-4c95-a132-c72bc94a2a09`
* **Audio SHA256**: `f6d1345b1a45b3d4428a7094c749e31db6a8271851acf510ee14c49fbaf8d98c`
* **Synopsis (175 chars)**:
  > Disc jockey Charlie Tuna jokes about afternoon naps, plays classic soft rock hits by David Gates and Bread, and broadcasts upbeat banter for overseas American service members.
* **Archival Discovery**: Features extended musical sets with Bread and David Gates alongside Tuna's signature morning drive humor.

### 3. Charlie Tuna: A F R T S (Stevie Wonder & Johnny Rivers)
* **UUID**: `0846aab3-32e0-490e-935c-1edaabb4fecb`
* **Audio SHA256**: `3be089398c0eb2c123525e5a13eb165d72e67abcab7f61a0ae98aa30921a6943`
* **Synopsis (175 chars)**:
  > Charlie Tuna spins lively dance tracks from Johnny Rivers and Stevie Wonder while delivering humorous commentary for service members tuned into the Armed Forces Radio network.
* **Archival Discovery**: High-energy dance-track broadcast transmitted across the European and Mediterranean AFN network hubs.

### 4. Charlie Tuna: A F R T S (Speed Limit Debate)
* **UUID**: `6da427f3-301e-46e7-b730-b9a76117456d`
* **Audio SHA256**: `b55cb20309e66bc26b77bbb86cb8777fce6f97c78b3b6204412ee629233a722f`
* **Synopsis (169 chars)**:
  > Charlie Tuna quips about nuclear appliances, takes listener calls debating the national speed limit, and airs military legal assistance advisories on home rental leases.
* **Archival Discovery**: Live listener call-in segment polling military listeners on the 55 MPH national speed limit and military family tenant protections.

### 5. Charlie Tuna: A F R T S (Texas Jackrabbits & Japan)
* **UUID**: `b876c21a-2c4e-455e-9dff-d0562812ac12`
* **Audio SHA256**: `3edafed92a4db0c40bff35b7e6233eaa5047db3210efc4324c9879156348611a`
* **Synopsis (172 chars)**:
  > Charlie Tuna jokes about having a dream disc jockey job, chats about Texas jackrabbits, and spins upbeat pop tunes for American service personnel stationed abroad in Japan.
* **Archival Discovery**: Broadcast beamed to Pacific commands, discussing eccentric Texas wildlife and nutrition center trends.

### 6. Charlie Tuna: A F R T S (Tax Season Advice & Billy Joel)
* **UUID**: `7b53cf24-ee6a-4357-b682-599f3b6cc0c7`
* **Audio SHA256**: `d76e4557011a4ebf80ea16eb390470405f3ed40c55c043b92305b6fab4329d96`
* **Synopsis (178 chars)**:
  > Charlie Tuna riffs on frog fairy tales, spins pop favorites by Billy Joel and Andy Gibb, and shares military legal advice regarding income tax withholding exemptions and refunds.
* **Archival Discovery**: Aired during spring tax season, advising troops on military legal office filings alongside pop tracks by Billy Joel and Andy Gibb.

### 7. Charlie Tuna: A F R T S (1982 Army Fitness Year & Sicily)
* **UUID**: `059b2ebe-1cd8-483d-a067-193e2e24c8a4`
* **Audio SHA256**: `1595e2de717b8e518ddfa61404296c33cbd37814b9bb41978d8a00ad6639a141`
* **Synopsis (167 chars)**:
  > Charlie Tuna jokes about soybean steaks, discusses home video game design, spins pop tunes, and delivers military fitness announcements for troops stationed in Sicily.
* **Archival Discovery**: Highlights the Army's 1982 Physical Fitness campaign, early console video game design challenges, and military units stationed in Sicily.

### 8. Charlie Tuna: AFRTS B (San Vito Greetings & Workout Regimens)
* **UUID**: `6fa2200a-4e30-471b-9f8b-26f9fb82707b`
* **Audio SHA256**: `a0813c24cae88d244d8b051f86a59948c1600885073d1ebc599dd26d9aa82055`
* **Synopsis (167 chars)**:
  > Charlie Tuna discusses morning workout routines with Canadian Air Force exercises, spins pop hits, and sends greetings to service members stationed in San Vito, Italy.
* **Archival Discovery**: Broadcast marking Music in Our Schools Week and sending personalized shoutouts to personnel at San Vito Air Station in Italy.
