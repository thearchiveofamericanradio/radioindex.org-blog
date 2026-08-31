# Archival Dispatch: Comprehensive Episode Title Hygiene & Field Normalization Standard

**Date**: 2026-09-06  
**Author**: radio index  
**Tags**: Archival Hygiene, Title Normalization, Meta Addon, Schema Standards, Clean Titles, Pure Synopses, Metadata Refactoring

---

## Comprehensive Title Hygiene & Metadata Normalization (3,679 Episodes Refactored)

This archival dispatch establishes the definitive canonical standard for episode title formatting across the entire radio catalog and documents the repository-wide refactoring of **3,679 episode titles across 926 series JSON files** in `radioindex.org-meta`.

---

## 1. *Canonical Title vs. Metadata Storage Standard*

To preserve pristine typography, clean search indices, and proper data separation:

1. **Episode Title (`v["title"]`)**:
   - Must contain **only the actual, canonical title of the story, episode, musical piece, or sketch**.
   - Must **never** append performer names (e.g. `"... with Benny"`, `"... with Basil Rathbone"`, `"... with Bob Hope"`).
   - Must **never** append sponsor brandings (e.g. `"... for Camel Cigarettes"`, `"... for Pepsodent"`).
   - Must **never** append physical media/tape source annotations (e.g. `"(Network Master)"`, `"(AFRS Master)"`, `"(Master 1)"`, `"(NBC Transcription)"`).
   - Must **never** append parenthetical part numbers (e.g. `"(Part 3)"`, `"(Episode 6)"`).

2. **Performer / Cast / Guest Information**:
   - Stored in the narrative **`description`** field (e.g. *"Host Jack Benny and Mary Livingstone banter with guest Frank Sinatra..."*).
   - Categorized in the **`genres`** keyword list (e.g. `["Jack Benny", "Frank Sinatra", "Comedy"]`).

3. **Multi-Part / Story Arc Information**:
   - Structured in the **`story`** JSON object: `{"title": "<Arc Title>", "part": <Part Number>}`.

4. **Guest Star Showcases**:
   - Formatted cleanly as `"Guest: [Name]"` or `"Guests: [Name] and [Name]"` when the broadcast was titled after its guest appearance.

---

## 2. *Summary of Applied Refactorings*

| Category | Previous Stuffed Pattern | Canonical Clean Title | Metadata Preservation Location |
|---|---|---|---|
| Performer Appending | `"The Five Orange Pips with Louis Hector"` | **"The Five Orange Pips"** | Preserved in `description` & `genres` |
| Co-Star Appending | `"The Limping Ghost with Basil Rathbone and Nigel Bruce"` | **"The Limping Ghost"** | Preserved in `description` & `genres` |
| Sponsor Appending | `"Tutti Frutti by Mel Tormé with Bob Hope and Pepsodent"` | **"Tutti Frutti by Mel Tormé"** | Preserved in `description` |
| Studio Master Tag | `"The Case of the Careless Corpse (Network Master)"` | **"The Case of the Careless Corpse"** | Cleaned |
| Transcription Note | `"Peaches and Cream Melodrama (Woodbury's Soap)"` | **"Peaches and Cream Melodrama"** | Preserved in `description` |
| Multi-Part Marker | `"The Decapitation of Jefferson Monk (Part 6)"` | **"The Decapitation of Jefferson Monk"** | Moved to `"story": {"title": "The Decapitation of Jefferson Monk", "part": 6}` |

---

## 3. *Repository & Deployment Synchronization*

- **Series Files Refactored**: 926 series JSON files
- **Episode Titles Cleaned**: 3,679 titles
- **Binary Bundles Rebuilt**: 3,176 bundles
- **Edge Deployment**: `meta-addon` published to Cloudflare edge; global edge cache purged
