# CMS Content-Schema Mapping — Services Pages

This document maps every reusable content type that appears on a services page to (a) the component(s) that render it, (b) the JSON shape it expects, and (c) which of the 30 services pages use it today, including every naming/shape inconsistency found. It is an **audit of the current implementation**, not a description of a redesign — nothing described as "current state" has been changed as part of writing this doc.

**How to use this when building a new service page or adding a section to an existing one:** find the content type in the [Master Summary Table](#master-content-type-summary-table), open its entry in [Content Type Reference](#content-type-reference), copy the canonical shape, and check whether the page's tier (hub or leaf) needs anything section-specific per [Hub-Tier vs. Leaf-Tier Guidance](#hub-tier-vs-leaf-tier-guidance). If a page needs a section not in this document, check [Custom & One-Off Sections](#custom--one-off-sections) before inventing something new.

This audit is based on a direct, non-sampled read of all 30 `page.tsx` files (7 hub-tier, 23 leaf-tier) and their render logic, cross-referenced against the content JSON shapes each imports.

---

## Architecture Overview

### Page inventory & tiers

There is no dynamic `[slug]` route for services and no fully copy-pasted per-page templates. Instead there are **30 real pages** across **3 tiers**, every one of them rendered through a single shared template:

| Tier | Count | Example |
|---|---|---|
| Top-level hub-of-hubs | 1 | `/services` |
| Category hub | 6 | `/digital-marketing`, `/global-event-solutions`, `/market-research`, `/media-production`, `/sales-qualified-lead-generation`, `/tradeshow-booth-solutions` |
| Individual leaf service | 23 | `/tradeshow-booth-solutions/trade-show-booth-design`, `/sales-qualified-lead-generation/event-lead-generation`, etc. |

**Update (2026-07-06) — the `hpmi` gap above has been resolved, not filled in.** The never-built category-hub content (`src/content/services/hpmi/content.ts` + `page.json`, plus its `HPMI_PAGE` entry in `marketing-pages.ts`) was deleted outright rather than turned into a live hub page — `hpmi` is confirmed to never be a category hub. Its one leaf moved out from under the retired `hpmi` segment to a top-level route: `src/app/hpmi/human-powered-market-intelligence/page.tsx` → `src/app/human-powered-market-intelligence/page.tsx`, with its content directory moved the same way (`src/content/services/hpmi/human-powered-market-intelligence/` → `src/content/services/human-powered-market-intelligence/`) and `canonicalPath` updated to `/human-powered-market-intelligence`. `/hpmi` now permanently redirects to `/human-powered-market-intelligence` (added in `next.config.ts`, alongside removal of a stale pre-existing `/services/hpmi` redirect rule that pointed at a path that was never real). All internal references — `navigation.json`'s mega-menu group, `hub-content.ts`'s `/services` card, and the homepage services-grid card that linked here — were repointed to the new URL. The rest of this document's remaining mentions of `hpmi` (content-type presence/absence in sections 4, 7, 12, and Appendix C) still refer to this same page by its content id and are unaffected by the route move.

### The shared template — `ServicePage.tsx`

All 30 pages are thin wrappers: each `page.tsx` imports named content constants from that page's own `content.ts` (which itself imports and sometimes merges JSON files) and passes them as typed props into `<ServicePage />` (`src/components/templates/ServicePage.tsx`).

### Confirmed render order

```
Header
Hero                          — if `hero` given
ClientLogos                   — ALWAYS rendered (props optional)
Spotlight #1 "INTRODUCTION"   — if `spotlight` given
Services section              — ServicesStack OR Capabilities-carousel, chosen by `servicesSectionType`  — if `services` given
Spotlight #2 ("why")          — if `why` given
  ── preProcessSections slot (raw JSX) ──
ProcessTimeline                — if `process` given
Secondary services             — ServicesStack OR Capabilities-carousel — if `secondaryServices` given
  ── preStudiesSections slot (raw JSX) ──
Pricing (Carousel + PricingCard) — if `creativePricing` given
CaseStudies                    — if `caseStudies` given
  ── customSections slot (raw JSX) — Why-Choose-Us-cards + Blogs almost always live here ──
FAQAccordion                   — ALWAYS rendered (required prop)
Related Services (CardsGrid + RelatedServicesCard) — ALWAYS rendered when computed list is non-empty
  ── preContactSections slot (raw JSX) ──
ContactUs                      — if `contactUs` given
Footer
```

This is confirmed directly from `ServicePage.tsx` and matches, section-for-section, the pattern manually mapped by hand on a sample of pages: Hero → Client Logos → Intro → Services Stack → Capabilities → *(slot)* → Case Studies → Why Choose Us → *(slot)* → Blogs → FAQ → Related Services.

### Typed props vs. slots vs. direct imports

- **Typed props** (`hero`, `spotlight`, `services`, `why`, `process`, `caseStudies`, `faq`, `contactUs`, etc.) are the intended, structured way to feed `ServicePage`. **All 7 hub-tier pages use only these** — no slots, no direct component imports, no hardcoded content. Hub pages are the cleanest reference for "how this is supposed to work."
- **Slot props** (`customSections`, `preProcessSections`, `preStudiesSections`, `preContactSections`) are raw `ReactNode` escape hatches. Leaf pages use these to inject one-off sections (Why-Choose-Us cards, Blogs, StickyScroll narratives, extra Capabilities instances, hand-rolled `<section>` blocks).
- **Direct component imports**, bypassing the template entirely for a second/third instance of a section (e.g. a second `<Capabilities>`, a second `<Spotlight>`), are common on leaf pages and are how most of the "custom" content in this doc gets rendered.

---

## The Content-Purity Rule

**`page.tsx` files must contain zero literal content** — no hardcoded headings, CTA labels, icon names, image URLs, or video URLs. Every piece of author-facing text or media belongs in a JSON file, imported via that page's `content.ts`.

The only legitimate exceptions:
1. **Logic-defined sections** — content computed at render time rather than authored, e.g. `RelatedServicesCard.tsx` (see [Related Services](#related-services-auto-derived--not-a-content-type)).
2. **Shared/common-pool sections** — content correctly pulled from one site-wide JSON pool instead of being duplicated per page, e.g. `BlogsCarouselCard.tsx` (`src/content/blogs/blogs.json`) and `CaseStudies.tsx` (`src/content/case-studies/case-studies.json`).

**Update (2026-07-08) — this rule now holds on every page.** What was originally "9 of 23 leaves and all 7 hubs have zero violations" is, as of 2026-07-08, **all 23 leaves and all 7 hubs** — every violation found in the original audit has been resolved. Full history in [Appendix C](#appendix-c--pagetsx-content-purity-violations).

---

## Status Legend

| Badge | Meaning |
|---|---|
| ✅ Consistent | one filename, one shape, rendered the same way everywhere |
| ⚠️ Drifting | same content type, multiple filenames/field sets in the wild — needs consolidation, not dangerous |
| 🔴 Colliding | same filename used today for two incompatible shapes/purposes — actively risky |
| 🕳️ Structural gap | no consistent component/wrapper pairing exists for this content type at all |
| ∅ N/A | computed/derived, not authored content |

---

## Master Content-Type Summary Table

| # | Content Type | Section Identity | Canonical Filename | Tier(s) | Status |
|---|---|---|---|---|---|
| 1 | Hero | `Hero.tsx` | `hero.json` | All 30 | ✅ resolved 2026-07-08 — dead `secondaryCta` field removed, see Appendix F |
| 2 | Client Logos | `ClientLogos.tsx` | `client-logos.json` | All 30 | ✅ resolved 2026-07-06 — dead `logos` prop removed |
| 3 | Introduction | `Spotlight.tsx` (`spotlight` prop) | `intro.json` | All 30 | ✅ resolved 2026-07-06 — one filename, one shape |
| 4 | Services Included / Nested Services | `ServicesStack.tsx`+`ServicesCard.tsx` (grid) or `Capabilities.tsx` (carousel) | `services.json` | All 30 — meaning differs by tier | ✅ resolved 2026-07-06 — filename drift fixed; rendering choice remains per-page (by design, not drift) |
| 5 | Capabilities | `ServicesScroll.tsx` (interim renderer) | `capabilities.json` | Leaf only | ✅ resolved 2026-07-08 — identity is content-driven (title must say "Capabilities"), not shape-driven; 1 misfiled page moved to Process |
| 6 | Industries We Support | `CardsGrid.tsx`+`IndustryShaderCard.tsx` | `industries.json` | Leaf only | ✅ resolved 2026-07-06 — one component pairing, one shape |
| 7 | Why Choose Us — Cards | `Carousel.tsx`+`BoothWhyCard.tsx` | `why-choose-us.json` | Leaf-predominant | ✅ resolved 2026-07-07 — `icon` now present everywhere; `booth-logistics-services`'s "Benefits" block moved off this component entirely (now `StickyScroll`) |
| 8 | Why Choose Us — Spotlight | `Spotlight.tsx` (`why` prop) | `why-spotlight.json` | All hubs + 3 leaves | ✅ resolved 2026-07-08 — rename actually executed this time (see note below) |
| 9 | Process / How It Works | `ProcessTimeline.tsx` | `process.json` | All hubs + several leaves | ✅ |
| 10 | Pricing / Package Options | `Carousel.tsx`+`PricingCard.tsx` | `pricing.json` | 2 leaves, both clean | ✅ resolved — this row was stale; both current usages already use the clean `creativePricing` mechanism, see below |
| 11 | Case Studies | `CaseStudies.tsx`+`CaseStudyItem.tsx` | `case-studies.json` (wrapper) + shared global pool | All but 1 | ✅ resolved 2026-07-07 — tag field unused / hardcoded 5-of-9 subset confirmed intentional |
| 12 | Latest Insights / Blogs | `Carousel.tsx`+`BlogsCarouselCard.tsx` | `blog.json` (wrapper) + shared global pool | 16 of 23 leaves | ⚠️ filter tags hardcoded in `page.tsx`, not content (15 of 23 leaves) |
| 13 | FAQ | `FAQAccordion.tsx`+`FAQAccordionItem.tsx` | `faq.json` | All but 1 | ✅ best-executed content type in the audit |
| 14 | Contact CTA | `ContactUs.tsx` | `contact.json` | All 30 | ✅ resolved — stale "27 of 30" count corrected to match confirmed all-30 status below |
| — | Related Services (non-content) | `CardsGrid.tsx`+`RelatedServicesCard.tsx` | N/A — computed from `navigation.json` | All 30 | ∅ auto-derived, do not make authorable |

---

## Content Type Reference

### 1. Hero

**Section identity:** `Hero.tsx` · **Canonical filename:** `hero.json` · **Status:** ✅ resolved 2026-07-08

Universal — every page has one. Two shape variants exist: a standard photo hero, and a video hero (adds `videoUrl`/`videoWebm`/`mobileVideoUrl`/`mobileVideoWebm`), confirmed on `event-live-streaming-services` and `corporate-networking-events`.

**Update (2026-07-08) — resolved, not just documented.** This section used to describe `secondaryCta` as force-discarded by `ServicePage.tsx` (`<Hero {...hero} secondaryCta={undefined} />`) despite being authored in 30/30 `hero.json` files. The field has been removed entirely: from `HeroProps`, from `Hero.tsx`'s render logic, from the `ServicePage.tsx` override line (now just `<Hero {...hero} />`), and stripped from all 30 `hero.json` files. See Appendix F.

```ts
interface HeroContent {
  eyebrow?: string;
  title: string;                 // "\n" splits into separately-animated lines
  description?: string;
  primaryCta?: { href: string; label: string };
  images?: string[];             // photo-rotation mode; omit for video mode
  videoUrl?: string;
  videoWebm?: string;
  mobileVideoUrl?: string;
  mobileVideoWebm?: string;
  poster?: string;
  variant?: "default" | "compact";
  centered?: boolean;
}
```

### 2. Client Logos

**Section identity:** `ClientLogos.tsx` · **Canonical filename:** `client-logos.json` · **Status:** ✅ resolved 2026-07-06

Rendered unconditionally on every page (all props optional). Every page's content only ever supplies a heading/description.

**Update (2026-07-06) — resolved, not just documented.** The dead `logos` field was removed from `ClientLogosProps` entirely (`src/components/sections/ClientLogos.tsx`) — the component now references `DEFAULT_CLIENT_LOGOS` (9 fixed brands) directly wherever the `logos` variable used to be, instead of accepting a prop that no content file ever populated. No content JSON authored this field, so the change has zero effect on rendered output; it only removes a prop that gave the false impression of author control.

```ts
interface ClientLogosContent {
  heading?: string;
  description?: string;
}
```

### 3. Introduction

**Section identity:** `Spotlight.tsx` via the `spotlight` prop (forced `label="INTRODUCTION"`) · **Canonical filename:** `intro.json` · **Status:** ✅ resolved 2026-07-06

Universal — every page passes `spotlight` (confirmed directly, page by page). One field-set shape:

```ts
interface IntroductionContent {
  titleLine1: string;
  titleLine2?: string;
  description?: string;
  descriptionItems?: string[];   // bullet-list alternative to `description`
  imageUrl?: string;
  imageAlt?: string;
  videoUrl?: string;
  stats?: string[];               // "VALUE LABEL" strings, e.g. "70+ SQLs Generated"; "|" packs multiple per entry
  imagePosition?: "left" | "right";
  align?: "left" | "center" | "right";
}
```

**Update (2026-07-06) — both the filename drift and the field-set split were resolved, not just documented:**

- The narrower `proofBar` prop/shape (`{ heading, description?, imageUrl, stats }`) was removed entirely from `ServicePageProps` and its rendering logic in `src/components/templates/ServicePage.tsx`. Its 2 real users were migrated onto the full `spotlight` shape: `event-physical-video-shoot` (its `physical-video-proof-bar.json` was renamed to `intro.json`, with its `heading` field renamed to `titleLine1`) and `trade-show-booth-builder` (its `intro.json` already held the full shape on disk — only the prop name and an internal variable name changed). `event-experience-creation` had been passing the identical object to both `proofBar` and `spotlight` redundantly; the dead `proofBar` pass was deleted.
- **A real bug turned up and was fixed as a side effect of this migration:** `trade-show-booth-builder`'s content was already `titleLine1`-shaped, but was being routed through `proofBar`, whose merge logic only ever read `.heading` — meaning this page's Introduction title was silently rendering as an empty string before this fix.
- Every filename variant was renamed to the canonical `intro.json`: `hostess-intro.json`, `logistics-intro.json`, `networking-intro.json`, `streaming-spotlight.json`, `validation-spotlight.json`, `market-intelligence-spotlight.json`, and `research-proof-bar.json` (the last of which already held full-`spotlight`-shape data despite its "proof-bar" name — filename drift only, not a real second shape).
- 4 pages — `corporate-networking-events`, `booth-hostess-services`, `booth-logistics-services`, `event-live-streaming-services` — each had an **orphaned `intro.json` sitting on disk, never imported by anything**, alongside the real, differently-named live file. This wasn't previously called out in this audit; it surfaced only while tracing each filename's actual import graph. The orphans were deleted, then the live files were renamed into their place.
- `areas-served.json` on `event-live-streaming-services` is unaffected by any of this — it feeds a genuinely separate one-off section (see [Areas-Served Spotlight variant](#custom--one-off-sections)), not this content type, despite appearing in this doc's original filename-drift list.

### 4. Services Included / Nested Services

**Section identity:** `ServicesStack.tsx`+`ServicesCard.tsx` (grid mode) **or** `Capabilities.tsx` (carousel mode, via `servicesSectionType`/`secondaryServicesSectionType`) · **Canonical filename:** `services.json` · **Status:** ✅

Two semantic uses depending on tier (see [Hub-Tier vs. Leaf-Tier Guidance](#hub-tier-vs-leaf-tier-guidance)), and the rendering component is **not fixed by content identity** — it's a per-page choice:

- `trade-show-booth-design`, `corporate-video-production`, `data-augmentation-services`, `data-validation-services` render their primary `services` via the Capabilities-carousel.
- **`hpmi` inverts the usual pairing**: its *primary* `services` (deliverables) renders via Capabilities-carousel, while its *secondary* `secondaryServices` (research cards) renders via ServicesStack-grid — the opposite of the typical assignment used elsewhere. This is concrete proof that which component renders a "services" list is a page-level decision, not something inherent to the content.

```ts
interface ServicesIncludedContent {
  heading: string;
  eyebrow?: string;
  ctaLabel: string;
  serviceLabel?: string;
  services: ServiceListItem[];
  mode?: "nested-services" | "deliverables"; // self-documenting only, not read by any component
}
interface ServiceListItem {
  id: string;
  title: string;
  description?: string;
  icon: string;
  image: string;
  href?: string;       // present → links to a page; absent → opens the contact modal
}
```

**Update (2026-07-08) — `color` fully removed, no exceptions remaining.** The two holdouts noted here previously (`trade-show-booth-design/design-deliverables.json`, `src/content/home/services.json`) are now stripped, and `color?: string` was deleted from the shared `HomeServiceItem` interface itself. See Appendix F.

**Update (2026-07-06) — filename drift resolved.** Every instance of this content type across `src/content/services/**` — previously scattered across `services.json`, `whats-included.json`, `*-deliverables.json`, and one stray `capabilities.json` (`corporate-video-production`, an undocumented instance of the same drift) — is now named `services.json`. The two folders that legitimately hold two instances of this shape in one page (`human-powered-market-intelligence`: primary deliverables + secondary research cards; `modular-booth-solutions`: primary deliverables + secondary range section) use `services.json` for the primary `services` prop and `secondary-services.json` for `secondaryServices`, following the same disambiguation precedent as the Why-Choose-Us / Why-Spotlight split (#7 vs #8). The dead `ServiceListItem.color` field (see Appendix F) was removed from every content file touched by this fix — see that appendix for the two pages still carrying it. `trade-show-booth-design` and `trade-show-booth-builder` were intentionally left out of this fix: `trade-show-booth-design` at the requester's explicit instruction, and `trade-show-booth-builder` because its `builder-pricing.json` is a structurally different content type (see #10) rendered by hand, not through `ServicesStack`/`Capabilities` at all.

### 5. Capabilities

**Section identity:** determined by content, not by rendering component — a `capabilities.json`/`CORP_EVENT_CAPABILITIES`-style export is genuinely "Capabilities" content **only if its authored `title` (or heading) literally contains the word "Capabilities."** Two unrelated content types were previously conflated here because they happen to share a `{ title, phases: [{ title, description? }] }` shape: real Capabilities narratives, and real Process narratives that were filed under the wrong name. Shape does not determine identity — wording does. `ProcessTimeline.tsx` is a distinct component for Process content (#9) and is **not** a valid rendering target for genuine Capabilities content, regardless of shape similarity.

**Canonical filename:** `capabilities.json` · **Canonical renderer:** `ServicesScroll.tsx` (interim/placeholder — see below) · **Status:** ✅ resolved 2026-07-08 — see correction below

**Update (2026-07-08) — this entry was substantially wrong and has been corrected after a direct re-read of all 7 pages' actual `page.tsx` files, not just their content JSON:**

- **All 7 pages already render this content through `ServicesScroll.tsx`, not `Capabilities.tsx`.** The doc's previous claim that 6 pages "hand-fabricate icon+image and feed the result into the `Capabilities.tsx` carousel" was stale — the codebase had already moved off `Capabilities.tsx` for every one of these pages before this correction. `ServicesScroll.tsx` takes `{ heading?, description?, services: ServiceData[] }` where each `ServiceData` needs `{ id, image, title? or label?, description?, features?, ctaText?, icon?, number? }` — note `icon` is declared on the type but **never rendered anywhere in `ServicesScroll.tsx`**, so any `icon` value fed into it is dead weight.
- **Content-vs-rendering identity check performed on all 7 candidates, by reading each file's actual authored `title`:**
  - Genuinely Capabilities (title contains "Capabilities"): `corporate-networking-events` ("...Guest Engagement **Capabilities**"), `event-branding-solutions` ("Event Branding **Capabilities** & Creative Execution"), `virtual-video-production` ("Virtual Event Production **Capabilities** & Technical Expertise"), `booth-hostess-services` ("Event Staffing **Capabilities** & Guest Engagement Support"), `booth-logistics-services` ("Event Logistics **Capabilities** & Operational Expertise"), and `corporate-event-solutions` ("Corporate Event Planning & Operational **Capabilities**") — 6 pages total, all correctly `capabilities.json`-shaped content, now all cleanly rendered via `ServicesScroll.tsx`.
  - **Genuinely Process, was misfiled as Capabilities:** `event-experience-creation`'s `capabilities.json` title was "Our Approach to Event Experience Creation" — no mention of "capabilities" anywhere, and its 6 phases are a strict sequential narrative (strategy → journey design → creative concept → production planning → engagement → post-event handoff), structurally and thematically Process content (#9). Its `phases`/`title`/`description` were extracted into a new `process.json` and wired onto the typed `process` prop on `ServicePageProps`, rendering via `ProcessTimeline.tsx` — the correct component for this content. The file's separate `servicesInclude` block (a real, already-correctly-shaped deliverables list with `icon`/`image`/`label` per item, unrelated to the phases/title/description part) was left behind in `capabilities.json`, re-exported as `EVENT_EXPERIENCE_SERVICES_INCLUDE` instead of the old `EVENT_EXPERIENCE_CAPABILITIES` name.
  - **`corporate-event-solutions`'s prior half-finished migration was backwards, not incomplete — reverted.** The doc previously described this page's `capabilities.json` → `process.json` rename as "a step toward migrating to Process, not yet finished." That was the wrong direction entirely: the content's own title says "**Capabilities**," so this was genuinely Capabilities content sitting in a process-named file, not the reverse. The file was renamed back to `capabilities.json` and the `content.ts` export restored to `export { default as CORP_EVENT_CAPABILITIES } from "./capabilities.json"` — no `ProcessTimeline`/Process migration applies to this page at all.
- **Dead `icon` field removed from all 6 genuine-Capabilities pages' mapping code** (`corporate-networking-events`, `event-branding-solutions`, `virtual-video-production`, `booth-hostess-services`, `booth-logistics-services`, `corporate-event-solutions`) — since `ServicesScroll.tsx` never reads `icon`, the per-page `capabilityAssets` arrays now hold only `{ image }`, and the `.map()` no longer computes or passes an `icon` value.
- **`ServicesScroll.tsx` is explicitly an interim/placeholder renderer for this content type**, not a final architectural decision — a dedicated Capabilities-shaped component (closer to the original `{ id, label, icon, image, description? }` intent) is expected to replace it later. Until then, the required `image` field is still satisfied by the same generic placeholder background image on every item, since no per-item images exist in any of these 6 pages' content today.

```ts
// ServicesScroll.tsx's actual prop shape — the current interim renderer
interface CapabilitiesContent {
  title: string;      // must contain "Capabilities" to count as this content type
  description?: string;
  phases: { title: string; description?: string }[];
}
```

~~**Confirmed orphaned files:** `performance-marketing` and `seo-services` both have a `capabilities.json` on disk that their `page.tsx` never imports or renders at all~~ — **deleted 2026-07-08**, see Appendix B. File presence on disk does not mean the content is live; always check the page's actual imports.

### 6. Industries We Support

**Section identity:** `CardsGrid.tsx`+`IndustryShaderCard.tsx`, via a new typed `industries` prop on `ServicePageProps` · **Canonical filename:** `industries.json` · **Status:** ✅ resolved 2026-07-06

**Update (2026-07-06) — resolved, not just documented.** This had been the one content type with no consistent component pairing — three different render strategies were in active use, and the real situation was messier than originally documented here: `corporate-event-solutions`, `corporate-networking-events`, and `event-branding-solutions` weren't even using a file called `industries.json` (they used `event-industries-section.json`/`networking-industries-section.json`/`branding-industries-section.json`, routed through the `secondaryServices` slot and rendered via `ServicesScroll`, not `IndustryShaderCard`); `performance-marketing` and `seo-services` had an orphaned `industries.json` shaped like a Capabilities feature list (`{heading, items: string[], features: [...]}`), not the documented shape; and `social-media-marketing`'s live `industries.json` had that same mis-shape.

All of this was consolidated onto one component pairing (`CardsGrid.tsx`+`IndustryShaderCard.tsx`), one shape (below), and one wiring mechanism (a new typed `industries` prop on `ServicePageProps`, rendered in `ServicePage.tsx` at the same position `secondaryServices` occupies):

- `corporate-event-solutions`, `corporate-networking-events`, `event-branding-solutions`, `booth-logistics-services`: their per-page industries files were renamed to `industries.json` and now supply only heading/description; the industry items themselves still come from the shared `GLOBAL_INDUSTRY_SERVICES` pool (`src/content/services/industry-services.json`) — same shared-pool precedent as Case Studies (#11) and Blogs (#12). `secondaryServices` was *not* removed from `ServicePageProps` — it's still genuinely used for non-industries content on `human-powered-market-intelligence` and `modular-booth-solutions` — only these 3 GES pages moved off of it.
- `performance-marketing`, `seo-services`: their orphaned, mis-shaped `industries.json` files were rewritten into the canonical shape and wired up for the first time — previously authored but never rendered.
- `social-media-marketing`: its unique per-page industry list was preserved but rewritten into the canonical shape; the hand-rolled `<section id="industries">` block was replaced with the `industries` prop.
- `event-experience-creation`, `booth-hostess-services`: previously had no Industries treatment at all; each got a new `industries.json` (heading only) with items sourced from `GLOBAL_INDUSTRY_SERVICES`, matching their GES/tradeshow-booth sibling pages.
- ~~`corporate-video-production` has a fourth, previously-undocumented orphaned `industries.json` on disk (`{description, heading, industries: [{title, description}]}`, no icon/image, never imported)~~ — **deleted 2026-07-08**, see Appendix B.

```ts
interface IndustriesContent {
  heading: string;
  description?: string;
  items: IndustryItem[];
}
interface IndustryItem {
  id: string;
  title: string;
  description?: string;   // shown on hover — several current instances omit it
  icon: string;
  image?: string;          // falls back to a plain dark panel if omitted
}
```

### 7. Why Choose Us — Cards

**Section identity:** `Carousel.tsx`+`BoothWhyCard.tsx` · **Canonical filename:** `why-choose-us.json` · **Status:** ⚠️

```ts
interface WhyChooseUsCardsContent {
  heading: string;
  items: WhyChooseUsCardItem[];
}
interface WhyChooseUsCardItem {
  title: string;
  description?: string;
  href?: string;
  image?: string;
  icon?: "Award" | "CheckCircle" | "Clock" | "Globe2" | "Network" | "Package"
       | "Shield" | "Target" | "TrendingDown" | "TrendingUp" | "Users2";
  // ^ hardcoded allow-list in BoothWhyCard.tsx — anything else silently renders no icon
}
```

**Update (2026-07-07) — icon-field gap resolved.** `icon` was added to every item in `why-choose-us.json` on the 4 pages that were missing it (`performance-marketing`, `seo-services`, `social-media-marketing`, `event-live-streaming-services`), each mapped to the closest semantic fit from `BoothWhyCard.tsx`'s fixed 11-value allow-list — some reuse across items was unavoidable since there are only 11 icons for 24 items. `icon` is now present on every page that uses this content type.

**Confirmed data-quality issue found during that pass, left unresolved (out of scope):** `social-media-marketing`'s `why-choose-us.json` content is not actually about social media marketing — its 6 items ("Professional & Trained Staff," "Guest Engagement Focus," "Multilingual Support," etc.) are event-hostess copy, apparently copy-pasted from a booth-hostess-style page. Icons were still added to these items as requested, but the underlying copy needs a real rewrite.

**Update (2026-07-07) — `booth-logistics-services`'s "Benefits" block no longer uses `BoothWhyCard`/`CardsGrid`.** It was migrated to `StickyScroll.tsx` (see [Custom & One-Off Sections](#custom--one-off-sections)) at the requester's direction, specifically to fix a background-color mismatch: the old `CardsGrid` instance hardcoded `className="bg-brand-charcoal/5"`, visually inconsistent with the `bg-brand-gray` default used by the Industries `CardsGrid` immediately before it and the genuine Why-Choose-Us `Carousel` elsewhere on the same page. `StickyScroll.tsx` has no `className` prop — its background is hardcoded to `bg-brand-gray` in the component itself — so the swap fixes the mismatch by construction, with no override needed. Content was reshaped from `{ heading, items: [{ title, description, icon, image }] }` to `{ heading, reasons: [{ id, title, description, image }] }` (`logistics-benefits.json`); the 5 `icon` values were dropped since `StickyScrollReason` has no icon field, and the custom "Get a Logistics Quote" CTA button was dropped since `StickyScroll` only supports a fixed default CTA via `showCta` (set to `false` here), not a custom label. `BoothWhyCard` itself is still reused beyond "Why Choose Us" elsewhere — this pattern (BoothWhyCard as a generic titled feature/benefit card, not exclusively "why choose us") still holds wherever else it's used.

**Important distinction — "Benefits" is not "Why Choose Us":** the migration above swapped `booth-logistics-services`'s *separate* `id="benefits"` block ("Benefits of Expert Event Logistics Solutions," rendered in `preStudiesSections`) from Cards to `StickyScroll`. That page's genuine Why-Choose-Us section — `id="why-choose-us"`, heading "Why Choose B2B Sales Arrow for Booth Logistics Services," rendered via `customSections` — was untouched and still renders as Cards (`Carousel.tsx`+`BoothWhyCard.tsx`). No page's actual Why-Choose-Us content type (#7 Cards vs. #8 Spotlight) was converted anywhere in this pass — see the rule-compliance audit below. Don't read the Benefits swap as evidence of a Cards↔Spotlight conversion; "Benefits" is a different, unrelated ad hoc `BoothWhyCard`-reuse case (not #7/#8 at all) that happened to move to a third component, `StickyScroll`, which is neither Cards nor Spotlight.

**Missing entirely:** `data-validation-services`, `data-augmentation-services`, `hpmi` — none of the three has any Why-Choose-Us content (no `why.json`/`why-choose-us.json` on disk, no `why` prop and no Cards/Carousel block passed in `page.tsx`). `event-lead-generation`, `modular-booth-solutions`, `event-video-production` are **not** missing — they deliberately use the Spotlight-block variant (#8) instead; see the rule below.

**New finding (2026-07-07) — content-correctness bug, not a schema issue:** `social-media-marketing/why-choose-us.json` is not about social media marketing at all — all 6 items ("Professional & Trained Staff," "Corporate Event Expertise," "Multilingual Support," etc.) describe **event-hostess staffing**, near-verbatim overlapping with `booth-hostess-services/why-choose-us.json`'s subject matter. This isn't a shape or wiring problem — the file is correctly named, correctly shaped, and correctly rendered by `social-media-marketing/page.tsx` — the authored copy itself is simply wrong for this page, most likely copy-pasted from `booth-hostess-services` and never rewritten. Flagging for a content fix, out of scope for this schema audit to correct directly.

**Rule (2026-07-07) — Cards vs. Spotlight is content-shape-driven, not arbitrary:** if the "why choose us" content is naturally a **list of discrete, parallel items** (3+ independent benefit/feature points, each with its own short title), render it as **Cards** (this content type, `Carousel.tsx`+`BoothWhyCard.tsx`, `why-choose-us.json`). If it's a **single continuous narrative** (one flowing argument/case, even if it spans two paragraphs or references multiple examples in-line), render it as **Spotlight** (#8, `Spotlight.tsx` via the `why` prop, `why-spotlight.json`). Do not force a narrative into card-shaped items, and do not flatten a genuine item list into prose just to use Spotlight.

**Confirmed compliant (2026-07-07 audit)** against this rule: `event-lead-generation`, `modular-booth-solutions`, and `event-video-production` all use Spotlight, and in every case their `why-spotlight.json` content is a single narrative block with no `items` array — correct per the rule. (**Update (2026-07-08):** `event-lead-generation`'s `why-spotlight.json` used to be re-exported wholesale from its parent hub's file, per [Appendix D](#appendix-d--cross-page-content-borrowing) — it now has its own independent copy; the Cards-vs-Spotlight shape compliance itself was never in question either way.) `data-validation-services`, `data-augmentation-services`, and `hpmi` have no Why-Choose-Us section at all — whether they get one, and in which shape, is a separate content-authoring decision, out of scope for this rule check.

### 8. Why Choose Us — Spotlight Block

**Section identity:** `Spotlight.tsx` via the `why` prop (no forced label, unlike Introduction) · **Canonical filename:** `why-spotlight.json` · **Status:** ✅ resolved 2026-07-08

**Correction (2026-07-08):** a prior version of this doc claimed this rename was "resolved by the rename," but that was aspirational, not actual — a direct grep confirmed all 10 instances were still named `why.json` right up until this pass. All 9 real (non-orphaned) instances have now actually been renamed to `why-spotlight.json`, and every importer (`content.ts` re-exports plus the hub's direct cross-file import) updated to match. The 10th instance, `trade-show-booth-rental/why.json`, was **not** renamed — it was an unwired orphan (never imported by that page's `content.ts` or `page.tsx`) and was deleted instead; see Appendix B.

**See the Cards-vs-Spotlight content-shape rule under [Content Type #7](#7-why-choose-us--cards) — this variant is for single-narrative content only, never a list of discrete items.**

```ts
interface WhyChooseUsSpotlightContent {
  titleLine1: string;
  titleLine2?: string;
  description: string;
  imageUrl: string;
  ctaLabel?: string;
  ctaHref?: string;
  label?: string;
}
```

Used on all 6 category hubs, the top-level hub, and on `modular-booth-solutions` and `event-video-production` **instead of** the cards variant (neither of those two has a cards section at all). `event-lead-generation` also uses this variant instead of cards. `corporate-video-production` is the one page confirmed to have **both** — a cards Carousel in `customSections` *and* a `why` prop (left as-is, not flagged as a violation — see Appendix D). This is a genuinely different content type that happens to share a name with #7 — the filename split above is what disambiguates the two going forward.

**Update (2026-07-08) — `trade-show-booth-rental` note corrected.** This entry used to describe `trade-show-booth-rental` as having an unwired `why.json`-shaped orphan on disk while only rendering the cards variant (borrowed from `trade-show-booth-design`). That orphan has since been deleted (see Appendix B) — it was genuinely dead, not a missed wiring opportunity. The page still only uses the cards variant, correctly, but now via its own independent `why-choose-us.json` rather than a live import from `trade-show-booth-design` (see Appendix D).

### 9. Process / How It Works

**Section identity:** `ProcessTimeline.tsx` · **Canonical filename:** `process.json` · **Status:** ✅

```ts
interface ProcessContent {
  title: string;
  description?: string;
  phases: ProcessStepItem[];   // "steps" is a deprecated alias the component also still accepts
  cta?: { label: string; href?: string; opensModal?: boolean };
}
interface ProcessStepItem {
  title: string;
  description: string;
}
```

Used on all 6 category hubs plus several leaves (`data-augmentation-services`, `data-validation-services`, `event-physical-video-shoot`, `trade-show-booth-builder`, `trade-show-booth-design`, and — as of 2026-07-08 — `event-experience-creation`, whose phases were previously misfiled as Capabilities content; see [Content Type #5](#5-capabilities)).

### 10. Pricing / Package Options

**Section identity:** `Carousel.tsx`+`PricingCard.tsx` (the template's `creativePricing` mechanism) · **Canonical filename:** `pricing.json` · **Status:** ✅

A real, recurring content block, now consistently implemented across its usages:

```ts
interface PricingContent {
  title?: string;
  description?: string;
  tiers: PricingTier[];
}
interface PricingTier {
  name: string;
  price: string;
  description?: string;
  features: string[];
  color?: string;
  popular?: boolean;
}
```

**Confirmed:** Both `event-video-production` and `trade-show-booth-builder` now use the clean `creativePricing` template mechanism. **Correction (2026-07-08):** the summary table above previously still said "1 clean + 1 hand-rolled equivalent" — that was stale relative to this section's own text. Verified directly (full `trade-show-booth-builder/page.tsx` read, `grep` for `creativePricing`): there is no hand-rolled pricing markup anywhere in the services tree anymore. The table now matches this section.

### 11. Case Studies

**Section identity:** `CaseStudies.tsx`+`CaseStudyItem.tsx`; the per-page file is a thin wrapper, the real items are a shared global pool · **Canonical filename:** `case-studies.json` (wrapper) · **Status:** ✅ resolved 2026-07-07 — behavior confirmed intentional, not a defect

```ts
// Per-page wrapper
interface CaseStudiesWrapperContent {
  heading: string;
  description?: string;
  ctaLabel?: string;
  viewAllLabel?: string;
}
// Shared, site-wide pool — src/content/case-studies/case-studies.json
interface CaseStudyEntry {
  id: string; title: string; event: string; location: string; client: string;
  clientLogo?: string;
  services: string[];      // intended per-service relevance tag — confirmed unused for filtering
  requirements?: string; challenge: string; solution: string; outcome?: string;
  metric: string; metricLabel: string; image: string; href: string;
}
```

**Confirmed:** the shared pool itself (9 entries) is well-shaped and consistent — this content type's data is genuinely solid. Every page shows the identical hardcoded 5-of-9 subset regardless of actual relevance, and the `services[]` tag field that exists specifically to enable per-service filtering is never read for that purpose anywhere.

**Update (2026-07-07) — confirmed intentional, closed as resolved; no filtering implemented.** Per-page relevance filtering by `services[]` was considered and explicitly declined — the identical 5-of-9 subset on every page is the accepted behavior, not a defect. The `services[]` tag field remains authored-but-unused, same treatment as the other [Appendix H](#appendix-h--out-of-scope-follow-ups) items. Separately, the wrapper shape above was doc-only pseudocode — no real `CaseStudiesWrapperContent` TypeScript interface exists in the codebase; the per-page `case-studies.json` files (confirmed via `market-research/content.ts`) never author an `items` field in the first place, so the stale comment noting `items` as dead has been removed above rather than requiring any code change.

**Update (2026-07-06) — partially resolved:**

- **Icon synthesis fixed.** Every entry in the shared pool (`src/content/case-studies/case-studies.json`) now authors its own `icon` field (e.g. `Hammer`, `Landmark`, `Cpu`, `Plane` — all from `Icon.tsx`'s existing allow-list), added to the `CaseStudyEntry` interface in `src/content/case-studies/index.ts`. `CaseStudies.tsx` already read `study.icon` when present, falling back to the `Target`/`Sparkles`/`Building2` cycle only when omitted — that fallback still exists in the component for defensive/future use but is no longer exercised by any of the 9 real entries.
- **Naming outlier fixed.** `corporate-video-production`'s `CORPORATE_VIDEO_PORTFOLIO` was renamed to `CORPORATE_VIDEO_CASE_STUDIES`, matching the `<PREFIX>_CASE_STUDIES` convention used by every other page.
- **`event-lead-generation` no longer aliases its parent hub's case-studies wrapper.** It now has its own `case-studies.json` (own heading/description) instead of re-exporting `SQL_CASE_STUDIES`. It still renders the same shared `GLOBAL_CASE_STUDIES` 5-of-9 subset as every other page — only the wrapper heading/description is independent (case-studies was never part of this page's Appendix D wholesale-borrowing list in the first place — see that appendix's 2026-07-08 correction). **As of 2026-07-08, this page's other genuinely-borrowed sections (contact/FAQ/process/services/why) are independent too** — see Appendix D.

### 12. Latest Insights / Blogs

**Section identity:** `Carousel.tsx`+`BlogsCarouselCard.tsx`; the per-page file is a thin wrapper, the real posts are a shared global pool · **Canonical filename:** `blog.json` (wrapper) · **Status:** ✅ resolved 2026-07-06

```ts
interface BlogsSectionContent {
  heading: string;
  tags: string[];   // authored in each page's blog.json
  viewAllHref?: string;
  viewAllLabel?: string;
}
```

Underlying posts live site-wide in `src/content/blogs/blogs.json` (25 posts, `SharedBlogPost` shape).

**Update (2026-07-06) — resolved:**
- **Content-purity violation fixed.** The hardcoded `getBlogsByTags([...])` array literals in `page.tsx` across the 15+ pages were removed. `tags` is now a strictly required field in `BlogsSectionContent` (`src/content/blogs/index.ts`) and each page's `blog.json` now authors its own `tags: [...]` array. `page.tsx` now calls `getBlogsByTags(SECTION_BLOGS.tags)` dynamically.
- **Architectural outlier standardized.** `trade-show-booth-builder`'s `BOOTH_BUILDER_BLOG_POSTS` workaround in `content.ts` was deleted, and its `page.tsx` was rewritten to match the standard `getBlogsByTags(BOOTH_BUILDER_BLOGS_SECTION.tags)` pattern used by its siblings.
- **Missing sections added.** The 7 pages that previously skipped the Blogs treatment entirely (`event-experience-creation`, `human-powered-market-intelligence`, `data-augmentation-services`, `data-validation-services`, `event-video-production`, `event-lead-generation`, `modular-booth-solutions`) were given standard `blog.json` wrappers with custom headings/tags and wired up with the `Carousel` component in their `page.tsx`.
- **`corporate-video-production` completed.** Created its `blog.json` and migrated its `page.tsx` off a hardcoded Carousel heading, bringing it into full schema alignment.

### 13. FAQ

**Section identity:** `FAQAccordion.tsx`+`FAQAccordionItem.tsx` · **Canonical filename:** `faq.json` · **Status:** ✅ — the best-executed content type in the whole audit

```ts
interface FAQContent {
  heading: string;
  description?: string;
  faqs: FAQItemContent[];
}
interface FAQItemContent {
  id: string | number;
  question: string;
  answer: string;
  image?: string;   // declared, never rendered — see Appendix F, omit in new content
}
```

Zero shape drift found across the codebase. ~~Only gaps: `event-lead-generation` has no independent FAQ (aliases its parent hub's wholesale)~~ — **resolved 2026-07-08**, it now has its own `faq.json` (see Appendix D). Remaining gap: the top-level `/services` hub's `HUB_FAQ` contains literal placeholder Lorem-ipsum text for all 6 Q&A pairs, never replaced with real content — left alone deliberately, this is a copywriting task, not a schema fix.

### 14. Contact CTA

**Section identity:** `ContactUs.tsx` · **Canonical filename:** `contact.json` · **Status:** ✅

```ts
interface ContactCtaContent {
  badge?: string;
  headingLines?: string[];    // up to 2 lines
  description?: string;
  primaryCta: { label: string; href: string; opensModal?: boolean };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: { src: string; alt: string };
}
```

**Confirmed:** all pages now correctly implement the Contact CTA.

---

## Related Services (Auto-Derived — Not a Content Type)

**Section identity:** `CardsGrid.tsx`+`RelatedServicesCard.tsx` · **Status:** ∅ — not authored content

Confirmed: `ServicePage.tsx` computes this at render time — it looks up the current page in `navigation.json`'s `serviceNavigationGroups[].links`, takes the other leaves in the same nav group, shuffles them, and takes the first 3 as `{ href, title }` cards. **Update (2026-07-08):** the shuffle used to be `otherServices.toSorted(() => 0.5 - Math.random())` (non-deterministic, with an `eslint-disable react-hooks/purity, sonarjs/pseudo-random` comment acknowledging the issue) — it's now a small seeded PRNG (`hashString` + `seededShuffle`) keyed on `page.seo.canonicalPath`, so the same page always produces the same order. See Appendix H.

**The auto-derived link list itself is intentionally non-content — do not add a field for the links to any page.** The list is computed from category membership, not authored. **Correction (2026-07-08):** an earlier version of this section extended that same "don't make it content" guidance to the `relatedServicesHeading` override too, lumping it in with the auto-derived list — that was wrong. The heading is a real, independently-authored string (it varies from the default "Explore Related Solutions" specifically because these 3 pages wanted different wording), so it's exactly the kind of thing the content-purity rule covers, unlike the computed link list itself. It's now content-sourced — see Appendix C.

~~The `relatedServicesHeading` override is content-purity-violating on 3 pages today...~~ — **resolved 2026-07-08**, see Appendix C.

The shuffle used to pick the 3 links is fixed — see Appendix H.

---

## Custom & One-Off Sections

- **`LeadPipelineSection`** (`src/components/sections/LeadPipelineSection.tsx`) — "Your Sales-Ready Prospect Profile Includes." Used on exactly **one** real page: `sales-qualified-lead-generation/event-lead-generation`, via `pipeline.json` + that page's own process content. Fully content-sourced. Confirmed nowhere else in real pages (only a `/demo` showcase page also references it).
  ```ts
  interface LeadPipelineSectionContent {
    heading: string;
    description?: string;
    stages: { count: string; label: string; sublabel: string }[];
    steps: { title: string; description: string }[];
  }
  ```
- **Areas-Served Spotlight variant** — "Global Event Live Streaming Services Across Major Event Destinations." A *second*, standalone `Spotlight.tsx` instance on `event-live-streaming-services`, fed by `areas-served.json`, using the `locationBadges` prop (a hardcoded `["New York","Dubai","Singapore","London"]` array — content-purity violation, see Appendix C) — a prop confirmed used nowhere else in the codebase. Unlike the standard Introduction instance, this one has no forced `label`.
- **`StickyScroll`** (`src/components/sections/StickyScroll.tsx`) — a one-off "secondary narrative" primitive on 4 of its 5 usages, **never** a Why-Choose-Us alternate there: `social-media-marketing` ("Social Media Campaigns We Manage"), `corporate-networking-events` ("Networking Event Types"), `event-physical-video-shoot` ("Production Plan"), `event-experience-creation` ("Why It Matters"). Each of these pages has its own bespoke topic here, separate from (and in most cases alongside) a genuine Why-Choose-Us Carousel elsewhere on the same page. **Update (2026-07-07) — a 5th usage was added, and it *is* Why-Choose-Us-adjacent:** `booth-logistics-services`'s "Benefits of Expert Event Logistics Solutions" block (`id="benefits"`) migrated here from `CardsGrid`+`BoothWhyCard` — see [Content Type #7](#7-why-choose-us--cards) for why. That page's actual Why-Choose-Us section is untouched and still renders separately via `Carousel`+`BoothWhyCard`.
- **`SectionContactCta`** (`src/components/sections/SectionContactCta.tsx`) — a minimal "Contact Our Team" button + modal. **Update (2026-07-07):** removed entirely from 4 of its original 5 `media-production` leaves (`virtual-video-production`, `event-video-production`, `event-live-streaming-services`, `event-experience-video-production`) — each rendered it in `preProcessSections` immediately after a `ServicesStack` with `showServicesCommonCta`, producing two back-to-back "Contact" CTAs; the `ServicesStack` common CTA was kept as the single CTA on all 4. `virtual-video-production`'s hardcoded `label="Contact Our Team"` literal (redundant with the component's own default) was removed along with it. Only `corporate-video-production` still uses `SectionContactCta` (no `showServicesCommonCta` there, so no duplication).
- **Hand-rolled, component-less one-offs**, each unique to one page: a rent-vs-buy grid on `trade-show-booth-rental`. See Appendix C for what's hardcoded in each. **Update (2026-07-07):** the CTA band on `trade-show-booth-design` (a fully hardcoded button+href in `preContactSections`) was removed — the prop is no longer passed on that page.

---

## Hub-Tier vs. Leaf-Tier Guidance

No separate schema is needed per tier — the master table's **Tier** column already shows which content types exist at which tier. The one content type where tier changes *meaning*, not just presence, is **Services Included (#4)**: at the hub-of-hubs and category-hub tiers it lists sibling child pages (`href` points to another page, effectively `cardCtaMode: "linked"`); at leaf tier it lists deliverables (`href` usually absent, CTA opens the contact modal, `showCommonCta: true`). The optional `mode?: "nested-services" | "deliverables"` field in the Services Included schema is purely self-documenting for this distinction — no code reads it today.

The practical takeaway for building a new page: **hub pages are composed only from the typed `ServicePageProps` fields** — confirmed directly, all 7 are clean. **Leaf pages routinely need the slot props** (`customSections` etc.) for anything beyond the 14 standard content types — that's normal and expected, not a sign something's wrong, as long as what goes into the slot is itself content-sourced (see the Content-Purity Rule).

---

## Appendix A — Same-Filename / Same-Concept Collisions

- **`capabilities.json`**: resolved 2026-07-08 — this was never a shape collision, it was a naming/identity collision. Genuine Capabilities and genuine Process content shared the same `{ title, phases }` shape; identity is now determined by whether the authored title says "Capabilities." See Content Type #5.
- **`why.json`** (pre-rename): used today for the spotlight-block "why choose us" meaning, while `why-choose-us.json` is used for the cards meaning — two structurally unrelated shapes conceptually named the same thing. Resolved by the `why-spotlight.json` rename proposed in Content Type #8.

## Appendix B — Orphaned & Unwired Content

- ~~`performance-marketing` and `seo-services`: both have `capabilities.json` on disk, never imported by their `page.tsx`~~ — **deleted 2026-07-08.** Per explicit decision, unwired orphans in this pass were deleted rather than wired up.
- ~~`corporate-video-production` has an orphaned `industries.json`~~ — **deleted 2026-07-08**, same policy.
- ~~`card.json`: 21 copies~~ — **deleted 2026-07-08.** Re-confirmed zero imports anywhere immediately before deletion.
- ~~`trade-show-booth-rental` has an orphaned, unwired `why.json`~~ (spotlight-shaped, distinct from the cards-shaped `why-choose-us.json` it separately borrows from `trade-show-booth-design`) — **deleted 2026-07-08**, same policy. This one wasn't in the original version of this appendix; it surfaced while executing the Content Type #8 rename (see that section).
- Top-level `/services` hub: `HUB_FAQ` is hardcoded Lorem-ipsum placeholder text, never finished. **Still open** — explicitly left alone in the 2026-07-08 pass; this is a copywriting task, not a schema fix.

## Appendix C — page.tsx Content-Purity Violations

Every item below is a literal heading/CTA/icon-name/image-URL/text-array written directly in a `page.tsx` instead of sourced from that page's own JSON — confirmed by direct read of all 30 pages, not sampled.

- ~~**Hardcoded `capabilityAssets` image array** (same generic placeholder image every entry): `corporate-event-solutions`, `corporate-networking-events`, `event-branding-solutions`, `virtual-video-production`, `booth-hostess-services`, `booth-logistics-services`~~ — **all 6 resolved 2026-07-08.** The `image` value now lives directly on each phase object in each page's own `capabilities.json`; `page.tsx` reads `phase.image` instead of a parallel hardcoded array. (The `icon` half of this violation, as originally described, had already been stripped by the commit immediately preceding this pass — see Content Type #5's 2026-07-08 update — so by the time this fix started, only the `image` half remained on any of these 6 pages.) ~~`event-experience-creation`~~ was never part of this fix — confirmed clean before this pass even started (its `capabilities.json` was reclassified as Process content, see Content Type #5).
- ~~**`event-live-streaming-services`**: hardcoded `LIVE_STREAMING_LOCATION_BADGES` city-name array; hardcoded `relatedServicesHeading` string.~~ **Resolved 2026-07-08.** `locationBadges` moved into the page's existing `areas-served.json` (which already backed that Spotlight instance); `relatedServicesHeading` moved into a new `related-services.json`.
- ~~**`event-experience-video-production`** and **`virtual-video-production`**: both hardcode the identical `relatedServicesHeading` string.~~ **Resolved 2026-07-08.** Neither page had any content file backing `relatedServicesHeading` before this (it's a raw `ReactNode` prop on `ServicePageProps`, never content-sourced anywhere) — both got a new `related-services.json` with the identical string, per the same duplication-over-borrowing precedent used elsewhere in this pass, since the text is genuinely shared across the `media-production` category today.
- ~~**`trade-show-booth-builder`**: hardcoded Carousel heading string; hardcoded `color`/`icon` stamped onto items borrowed from `trade-show-booth-design`'s content module.~~ **Resolved 2026-07-08.** Per the content-borrowing decision (see updated [Appendix D](#appendix-d--cross-page-content-borrowing)), this page now has its own `showcase-items.json` and `why-choose-us.json` (seeded from `trade-show-booth-design`'s content, since duplicated independently rather than imported live). Both headings and the per-item `icon` now come from those files; `color` was dropped (dead field, see Appendix F).
- ~~**`trade-show-booth-design`**: hardcoded `color`/`icon` on its own showcase items; hardcoded `ServicesStack` heading string.~~ **Resolved 2026-07-08.** `design-showcase-items.json` was converted from a bare array to `{ heading, items: [...] }`, with a real `icon` authored per item and `color` dropped; the `ServicesStack` heading in `page.tsx` now reads `BOOTH_DESIGN_SHOWCASE_ITEMS.heading`. (2026-07-07 update on the CTA button in `preContactSections` still stands, unaffected by this.)
- ~~**`booth-logistics-services`**: hardcoded `label` string ("Plan Your Event Logistics") on a `ContactModalTrigger` instance~~ — **resolved 2026-07-08.** New `logistics-cta.json` (`{ label }`) added; the trigger now reads `EVENT_LOGISTICS_CTA.label`.
- ~~**`trade-show-booth-rental`**: `BOOTH_RENTAL_RANGE_REASONS` — 5 complete content objects... in no JSON file at all~~ — **resolved 2026-07-08.** Moved verbatim into new `rental-range.json` (`{ ctaLabel, heading, items: [...] }`), `color` dropped, `icon` authored per item (previously always the single literal `"Star"`). The page's Why-Choose-Us Carousel heading and items, previously borrowed live from `trade-show-booth-design`, now come from this page's own new `why-choose-us.json` (same duplication precedent as booth-builder). **Note:** the `Coins`/`Move`/`Truck` icon-matching JSX in the separate `BOOTH_RENTAL_RENT_VS_BUY` block (`rental-rent-vs-buy.json`) was intentionally left as-is — on inspection its icon *values* were already content-sourced from that JSON; only the render dispatch (`reason.icon === "Coins" ? <Coins/> : ...`) is inline JS, which is a code-pattern nitpick (could use the shared `Icon.tsx` lookup instead), not a content-purity violation under this doc's rule.

**Confirmed clean:** `event-lead-generation`, `hpmi`, `data-augmentation-services`, `data-validation-services`, `modular-booth-solutions`, `event-video-production`, `performance-marketing`, `seo-services`, `social-media-marketing`, `trade-show-booth-builder`, `trade-show-booth-design`, `trade-show-booth-rental`, `booth-hostess-services`, `booth-logistics-services`, `virtual-video-production`, `event-live-streaming-services`, `event-experience-video-production`, `corporate-event-solutions`, `corporate-networking-events`, `event-branding-solutions`, `event-experience-creation`, and all 7 hub-tier pages. **As of 2026-07-08, every leaf and hub page in the entire services tree is clean of Appendix C content-purity violations, and the Appendix D cross-page content-borrowing is fully resolved too.** The only genuinely open item left anywhere in this doc is the top-level hub's Lorem-ipsum `HUB_FAQ` (Appendix B), deliberately left alone — a copywriting task, not a schema fix.

## Appendix D — Cross-Page Content Borrowing

**Decision (2026-07-08):** where this pattern is addressed, the fix is to duplicate the borrowed content into the borrowing page's own JSON file (same copy, independent file) — not to write genuinely distinct marketing copy per page. That's a separate copywriting project, out of scope here; this only fixes the architectural "every page owns its content" property.

~~`event-lead-generation` re-exports its parent hub's (`sales-qualified-lead-generation`) contact, FAQ, process, services, and why content wholesale~~ — **resolved 2026-07-08.** Each got its own file (`contact.json`, `faq.json`, `process.json`, `services.json`, `why-spotlight.json`), seeded with the parent hub's content at the time of the fix — same copy, independent file, per the duplication decision at the top of this appendix. `content.ts` now builds `EVENT_LEAD_CONTACT_CTA` the same way the parent hub does (`{...own contact.json, ...cinematic-cta.json}`) rather than re-exporting the parent's already-merged constant. Hero (partial override), client logos, intro, page metadata, and `pipeline.json` were already genuinely this page's own and are unaffected.
- ~~`trade-show-booth-builder` and `trade-show-booth-rental` both import directly from `trade-show-booth-design`'s content module (showcase items, why-choose-us items)~~ — **resolved 2026-07-08.** Both pages now have their own `why-choose-us.json`, duplicated from `trade-show-booth-design`'s. `trade-show-booth-builder` also has its own `showcase-items.json` (duplicated from `trade-show-booth-design`'s `design-showcase-items.json`); `trade-show-booth-rental` didn't need an equivalent duplicate here since its analogous content (`BOOTH_RENTAL_RANGE_REASONS`) was a separate, page-specific list already (now `rental-range.json`), not borrowed from booth-design.
~~The top-level `/services` hub borrows `HUB_WHY` from `tradeshow-booth-solutions/why-spotlight.json` and `HUB_CONTACT_CTA` from `global-event-solutions/contact.json`~~ — **resolved 2026-07-08.** Hub now has its own `why-spotlight.json` and `contact.json` (same copy, seeded from the source files at fix time); `HUB_CONTACT_CTA` is built the same merge-with-shared-cinematic-CTA way every other contact CTA in the codebase is. Confirmed both original source hubs (`global-event-solutions`, `tradeshow-booth-solutions`) render unaffected.

**As of 2026-07-08, every cross-page content-borrowing instance flagged in this appendix has been resolved** — each borrowing page now has its own independent copy of the content it used to import live from a sibling/parent.

## Appendix E — Category / Parent Mismatches

~~`booth-hostess-services` and `booth-logistics-services` are physically routed under `/tradeshow-booth-solutions/` but their content's `parentPage` prop is set to `GES_PAGE`~~ — **resolved 2026-07-08, and the scope was undercounted.** A direct grep before fixing anything found `parentPage={GES_PAGE}` on **all 6** tradeshow-booth-solutions pages (`booth-hostess-services`, `booth-logistics-services`, `trade-show-booth-builder`, `trade-show-booth-design`, `trade-show-booth-rental`, `modular-booth-solutions`), not just the 2 this entry named — including `trade-show-booth-design`, the most complete/canonical page in the category. `navigation.json` treats "Tradeshow Booth Solutions" as its own top-level sibling group to "Global Event Solutions," and `BS_PAGE` (the correct hub-identity constant, already exported from `tradeshow-booth-solutions/content.ts`) was never used as anyone's `parentPage` before this fix — strong evidence this was a copy-paste artifact propagated from the first page built in this category, not an intentional 2-page exception. All 6 pages now correctly import and pass `parentPage={BS_PAGE}`; breadcrumbs verified in rendered HTML on all 6.

## Appendix F — Dead Props & Unused Fields

| Field | Where declared | Status |
|---|---|---|
| ~~`Hero.secondaryCta`~~ | `Hero.tsx` | **Removed 2026-07-08.** Was authored in 30/30 `hero.json` files (confirmed exact count, not "~29/30") and force-discarded by `ServicePage.tsx` on every render. Field removed from `HeroProps`, from the `Hero` component's render logic, and stripped from all 30 `hero.json` files. The 4 non-services callers that also passed a literal `secondaryCta` (`src/app/page.tsx`, `src/app/demo/page.tsx`, `src/components/templates/EventPage.tsx`, plus `src/content/home/hero.json`) were updated too, since the prop no longer exists at all — this was a mechanical compile-correctness fix, not a scope expansion. |
| ~~`Carousel.layout`~~ | `Carousel.tsx` | **Removed 2026-07-08.** Declared, passed at ~25 call sites, never read in the component body. Field removed from `CarouselProps`; every call site (`src/app/**/page.tsx`, plus `BlogPage.tsx` and `EventPage.tsx` templates, which the original audit missed) had the literal prop stripped. |
| ~~`ServiceListItem.color`~~ | shared `HomeServiceItem` type | **Fully removed 2026-07-08.** The two remaining holdouts noted here previously — `trade-show-booth-design/design-deliverables.json` (6 occurrences) and `src/content/home/services.json` (8 occurrences) — are now stripped, and `color?: string` was deleted from the `HomeServiceItem` interface itself (`src/content/home/content.ts`). No file under `src/content/**` authors this field anymore. |
| ~~`FAQItem.image` / `icon`~~ | `FAQAccordion.tsx` types (built on `FAQContent`/`FAQItem` in `src/content/home/content.ts`) | **Removed 2026-07-08 — and this entry undersold the actual scope.** `icon` was genuinely unauthored everywhere (0 files). `image`, however, was authored in **all 31 `faq.json` files sitewide** — every services page plus `src/content/home/faq.json` and `src/content/terms-and-conditions/faq.json` — all with the same dead placeholder URL, confirmed never rendered by `FAQAccordionItem.tsx`. Both fields removed from the `FAQItem` interface; `image` stripped from all 31 files (157 occurrences total). |
| `SpotlightProps.secondarySpotlight` | `Spotlight.tsx` | **Partially addressed 2026-07-08.** Confirmed still genuinely used by `CaseStudyPage.tsx` (case-study detail pages compute a real value for it) — left untouched there. On services pages specifically, `ServicePage.tsx` was forwarding `spotlight.secondarySpotlight` through to `Spotlight` even though no services `intro.json` ever authors that key; that dead passthrough line was removed from `ServicePage.tsx`. The prop itself remains on `Spotlight.tsx` since it's live for case studies. |
| ~~`ClientLogosProps.logos`~~ | `ClientLogos.tsx` | Removed 2026-07-06 — see [Content Type #2](#2-client-logos) |

## Appendix G — New Item Components Found

Two item components turned up during this audit that weren't part of the original known set (plus one UI primitive used as a one-off):

- **`BasicCards.tsx`** — found on `trade-show-booth-builder`, rendering `BOOTH_BUILDER_FUTURE_READY` items via `CardsGrid.tsx`.
- **`EventsCard.tsx`** — found on `trade-show-booth-design`, rendering the site's shared upcoming-events content (reused wholesale from the homepage's `HOME_EVENTS_CONTENT` + `getDefaultEvents()`) via `CardsGrid.tsx`.
- **`ContactModalTrigger`** (`src/components/ui/ContactModal`) — found on `booth-logistics-services`. **Update (2026-07-07):** a second instance existed here previously; it was removed when the Benefits `CardsGrid` migrated to `StickyScroll` (see [Content Type #7](#7-why-choose-us--cards)) — one instance remained. **Update (2026-07-08):** that remaining instance's hardcoded `label` was moved into a new `logistics-cta.json`; the component is now content-sourced.

## Appendix H — Out-of-Scope Follow-Ups

Noted for awareness:

- ~~Related Services' `Math.random()` shuffle in `ServicePage.tsx` is un-memoized and reshuffles on every re-render~~ — **fixed 2026-07-08, and the framing was wrong.** `ServicePage.tsx` has no `"use client"` directive — it's a Server Component, so there was never a client re-render to cause layout shift the way this entry implied. The real (much smaller) problem was non-determinism: `Math.random()` produced a different order per request/build. Replaced with a small seeded PRNG keyed on `page.seo.canonicalPath`, verified deterministic across repeated requests to the same page.
- Case Studies' and Industries' `services[]`/tag fields exist specifically to support per-page relevance filtering but are never read for that purpose anywhere — currently just descriptive metadata. Still out of scope, unchanged.
