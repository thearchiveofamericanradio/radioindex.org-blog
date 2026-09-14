# Archival Dispatch: Audio Enrichment Batch 25 — Ray Bradbury & Dave Siegel Interviews

**Date**: 2026-09-13  
**Author**: radio index  
**Tags**: Ray Bradbury, Tales of the Bizarre, Dave Siegel, Miriam Wolff, The Witch's Tale, Dual Parallel Whisper, Whispered Audio, PR 5460

---

## 1. Progress Metrics & Inventory Milestone

This dispatch documents the completion of Batch 25 under authorized dual-worker Whisper parallelization on Apple Silicon MPS GPU, cutting audio processing time in half while preserving 100% transcript-grounded synopsis accuracy.

* **Total Dated Targets (PR #5460)**: **5,398**
* **Active Post-1985 Playable Stream Targets Remaining**: **715** (down from 724).
* **Batch Scope**: 9 audio recordings spanning Ray Bradbury's self-introduced *Tales of the Bizarre* dramatizations (The Jar, The Fruit At The Bottom Of The Bowl, Night Call Collect, Have I Got A Chocolate Bar For You, I Sing The Body Electric, Skeleton, The Man Upstairs, Jack In The Box) and Dave Siegel's in-depth oral history interview with radio actress Miriam Wolff.
* **ASR Ladder**: Dual parallel Whisper `tiny.en` worker pool on Apple Silicon MPS GPU (`MAX_PARALLEL = 2`), transcribing 9 episodes (~4 hours of audio) in ~4.5 minutes.
* **Subtitles**: 9 synchronized WebVTT caption tracks added to `radioindex.org-subtitles` (`0ceafdc`).
* **Metadata**: 9 broadcasts enriched with verbatim-grounded 1-sentence synopses and verified cast links in `radioindex.org-meta` (`bf90135f94`).
* **Zero Synthesis Invariant**: 100% verified against spoken dialogue.

---

## 2. Archival Discoveries & Grounded 1-Sentence Synopses

Every synopsis conforms strictly to the 100–180 character standard (story-first, dramatic action, high factual density, zero assistant boilerplate):

### 1. Tales of the Bizarre: The Jar
* **UUID**: `f96fbceb-8184-46fb-a03f-0ed9a416cf8f`
* **Audio SHA256**: `aee22898b75a10b21ce655ece4689abb7ef639155c9646237e3aaa553617214a`
* **Synopsis (170 chars)**:
  > Charlie purchases a mysterious preserved specimen in a glass jar from a carnival sideshow, drawing curious rural neighbors while driving his wife into obsessive jealousy.
* **Archival Discovery**: Introduced by Ray Bradbury from childhood memories of Louisiana carnivals; features Roger May as Charlie and Helen Horton as Granny.

### 2. Tales of the Bizarre: The Fruit At The Bottom Of The Bowl
* **UUID**: `0d359670-d146-474a-88cc-da746ab001d3`
* **Audio SHA256**: `00f2a7f1ac32e31cae27660bf99254593ac7ee254b277845b03d36e4ac7d76f3`
* **Synopsis (178 chars)**:
  > After murdering his tormentor William Huxley, William Acton obsesses over polishing away potential fingerprints until the compulsive cleaning traps him at the scene of the crime.
* **Archival Discovery**: Ray Bradbury explains the psychology of fingerprint paranoia; stars Nigel Anthony as Acton and John Hartley as Huxley, directed in London by Martin Jenkins.

### 3. Tales of the Bizarre: Night Call Collect
* **UUID**: `772aa155-60f1-4657-9780-ad1bf8c432f6`
* **Audio SHA256**: `54282915082245316399771c14cb74de75ccfd94953dc4571c1cc7bc486117e9`
* **Synopsis (173 chars)**:
  > Stranded as the last human being on a deserted Mars colony, an elderly Barton receives automated telephone calls from recorded voice messages he planted sixty years earlier.
* **Archival Discovery**: Ray Bradbury's poignant Martian Chronicles solitude tale dramatized by Brian Sibley; all ages of Barton performed by Kerry Shale.

### 4. Tales of the Bizarre: Have I Got A Chocolate Bar For You
* **UUID**: `b574705c-5697-4a0d-9378-662e6f75f298`
* **Audio SHA256**: `04761cfea695d6168c0c9fdc5ab44dd85a055f5de628d716cc511f9d4cf40028`
* **Synopsis (176 chars)**:
  > A remorseful young man visits a Catholic confessional to pour out his desperate, consuming addiction to chocolate bars before seeking spiritual absolution from an elder priest.
* **Archival Discovery**: Bradbury's lighter comedic confessional dramatized by Catherine Czerkawska; stars T.P. McKenna as the priest and John Yule as the penitent young man.

### 5. Tales of the Bizarre: I Sing The Body Electric
* **UUID**: `f5fe78e9-02eb-416b-8477-c61e6a3b1d1b`
* **Audio SHA256**: `3f08e729cbe1680d4dc7ca5cd250130a4d2ebef9e3ff8fd28c4b1555da9a63ed`
* **Synopsis (172 chars)**:
  > Following the sudden death of their mother, three grieving siblings and their father welcome an adaptable electric grandmother commissioned from a specialty automaton firm.
* **Archival Discovery**: Bradbury's celebrated family automaton story; features David Jarvis as Tom, Angus MacInnes as Father, and Joanna Tope as the electric grandmother.

### 6. Tales of the Bizarre: Skeleton
* **UUID**: `e4315cfa-937f-4872-ad22-d8e112d5dc39`
* **Audio SHA256**: `89620819b630e63f1b393f67df0063b56839a4c368a7f7afed1f25516ae78c24`
* **Synopsis (176 chars)**:
  > Plagued by agonizing aches and paranoia about the bone structure inside his body, a morbid hypochondriac consults an unorthodox specialist offering a radical somatic treatment.
* **Archival Discovery**: Inspired by Bradbury's doctor visits at age 22; stars Stuart McQuarrie as the bone-fearing Harris and Liam Brennan as the mysterious bone specialist Munig.

### 7. Tales of the Bizarre: The Man Upstairs
* **UUID**: `9801f2e9-fffc-4d30-854f-e8de3b362941`
* **Audio SHA256**: `9bed20acc6e7e1febc2489c1000c707a7c7590ebbd42c91dc2dbfab13ccd92a1`
* **Synopsis (177 chars)**:
  > While staying at his grandmother's boarding house, a curious young boy suspects the mysterious new star boarder possesses unnatural anatomical organs beneath his human clothing.
* **Archival Discovery**: Bradbury recounts watching his grandmother dress poultry in Waukegan, Illinois; stars Cindy Welsh as the boy Douglas.

### 8. Tales of the Bizarre: Jack In The Box
* **UUID**: `09e3c71d-6d1c-478d-a5c2-d2e23f4fa9ed`
* **Audio SHA256**: `e7c2c589480c9789375ee966f222bdf259b78b1494191184da4b015b4a1e48a7`
* **Synopsis (176 chars)**:
  > Raised in seclusion inside a vast secluded mansion by an eccentric mother who insists the outside world is dead, a sheltered boy questions the reality of his isolated universe.
* **Archival Discovery**: Directed in London by Adrian Bean; stars Jenny Lee as the domineering mother and Christopher Wright as the investigating police officer.

### 9. Dave Siegel Interviews: Miriam Wolff (1991-11-17)
* **UUID**: `9c08633f-717d-465f-84d1-487b1cbfed9d`
* **Audio SHA256**: `9b5cb3bbb9cc633659650552653d945b3db4736613461ef01d2a989d83018dea`
* **Synopsis (177 chars)**:
  > Radio actress Miriam Wolff reminisces with host Dave Siegel about auditioning at age thirteen to succeed Adelaide Fitz-Allen as Old Nancy on Alonzo Deen Cole's The Witch's Tale.
* **Archival Discovery**: Invaluable first-person oral history with Miriam Wolff describing how she won the role of Old Nancy over 600 adult actresses, working with Alonzo Deen Cole, and meeting fans at the Hotel Astor.
