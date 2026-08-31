# Archival Dispatch: Complete Repository-Wide Canonical Title Hygiene & Artifact Elimination

**Date**: 2026-09-06  
**Author**: radio index  
**Tags**: Title Hygiene, Pure Canonical Titles, Schema Normalization, Artifact Elimination, Meta Addon, Story Object, Zero Performer Clutter

---

## Complete Catalog-Wide Title Hygiene & Field Normalization (10,000 Episodes Cleaned)

This archival dispatch establishes the permanent enforcement of canonical pure titles across the entire 6,127 series collection in `radioindex.org-meta` and documents the catalog-wide cleanup of **10,000 episode titles across 593 series files**.

---

## 1. *Strict Structural Partitioning Standard*

Episode titles in the `radioindex` architecture are restricted strictly to the **pure artistic name of the story, episode, or musical composition**. All secondary metadata has been segregated into its proper schema attributes:

```json
{
  "title": "Hound of the Baskervilles",
  "genres": ["Mystery", "Detective", "Sherlock Holmes", "Basil Rathbone", "Nigel Bruce"],
  "story": {
    "title": "Hound of the Baskervilles",
    "part": 1
  },
  "description": "Sherlock Holmes and Dr. Watson investigate the legendary spectral hound terrorizing the heirs of Baskerville Hall on Dartmoor."
}
```

### Prohibited in `v["title"]`:
- ❌ **Performer attachments**: `"with [Name] and [Name]"`, `"starring [Name]"`, `"[Initials/Name]"`, `"(Hurndall)"`, `"[Harold Ballew]"`
- ❌ **Distribution / syndication labels**: `"(Syndicated)"`, `"- Syndicated"`, `"Syndication"`
- ❌ **Audio / physical source notes**: `"(Poor Sound)"`, `"(Aircheck)"`, `"(Network Master)"`, `"(Pre Empted Never Broadcast)"`
- ❌ **Multi-part numbers in titles**: `"Part 1"`, `"- Pt 2"`, `"Part 4 of 17"` (stored exclusively in `v["story"]`)
- ❌ **Broadcast date stamps**: `"14 August 1945"`, `"6 June 1944"` (stored exclusively in `v["released"]`)
- ❌ **Opening track prefixes**: `"First Song - "` (stripped to leave pure song title)

---

## 2. *Representative Title Transformations*

| Previous Stuffed Title | Canonical Pure Title | Segregated Metadata Location |
|---|---|---|
| `"Hound of the Baskervilles Part 1"` | **"Hound of the Baskervilles"** | `story: {"title": "Hound of the Baskervilles", "part": 1}` |
| `"39 46 Rathbone and Bruce Hound Of The Baskervilles Part 5"` | **"Hound Of The Baskervilles"** | `genres: ["Basil Rathbone", "Nigel Bruce"]` + `story: {"part": 5}` |
| `"Appointmentwith Danger W Holden C Gray"` | **"Appointment with Danger"** | `genres: ["William Holden", "Coleen Gray"]` |
| `"A Day In The Life Of Your Radio 14 August 1945"` | **"A Day In The Life Of Your Radio"** | `released: "1945-08-14"` |
| `"Obstinacy Is a Virtue [Harold Ballew]"` | **"Obstinacy Is a Virtue"** | `description: "Reporter Harold Ballew of The St. Petersburg Times..."` |
| `"The Unfortunate Brides (Pre Empted Never Broadcast )"` | **"The Unfortunate Brides"** | Cleaned |
| `"First Song - Good, Good, Good"` | **"Good, Good, Good"** | Pure Song Title |

---

## 3. *Edge Deployment Status*

- **Episodes Refactored**: 10,000 titles
- **Series Affected**: 593 series JSON files
- **Binary Bundles Rebuilt**: 3,176 bundles
- **Edge Addon Deployed**: Cloudflare `meta-addon` updated and global edge cache purged
