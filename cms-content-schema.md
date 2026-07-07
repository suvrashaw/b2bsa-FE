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

This rule holds on the large majority of pages — **9 of 23 leaves and all 7 hubs have zero violations**. Every violation found is listed in full in [Appendix C](#appendix-c--pagetsx-content-purity-violations).

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
| 1 | Hero | `Hero.tsx` | `hero.json` | All 30 | ✅ (one dead field, see Appendix F) |
| 2 | Client Logos | `ClientLogos.tsx` | `client-logos.json` | All 30 | ✅ resolved 2026-07-06 — dead `logos` prop removed |
| 3 | Introduction | `Spotlight.tsx` (`spotlight` prop) | `intro.json` | All 30 | ✅ resolved 2026-07-06 — one filename, one shape |
| 4 | Services Included / Nested Services | `ServicesStack.tsx`+`ServicesCard.tsx` (grid) or `Capabilities.tsx` (carousel) | `services.json` | All 30 — meaning differs by tier | ✅ resolved 2026-07-06 — filename drift fixed; rendering choice remains per-page (by design, not drift) |
| 5 | Capabilities | `Capabilities.tsx` (features shape only) | `capabilities.json` | Leaf only | 🔴 same filename, incompatible "phases" shape in ~7 pages |
| 6 | Industries We Support | `CardsGrid.tsx`+`IndustryShaderCard.tsx` | `industries.json` | Leaf only | ✅ resolved 2026-07-06 — one component pairing, one shape |
| 7 | Why Choose Us — Cards | `Carousel.tsx`+`BoothWhyCard.tsx` | `why-choose-us.json` | Leaf-predominant | ✅ resolved 2026-07-07 — `icon` now present everywhere; `booth-logistics-services`'s "Benefits" block moved off this component entirely (now `StickyScroll`) |
| 8 | Why Choose Us — Spotlight | `Spotlight.tsx` (`why` prop) | `why-spotlight.json` (renamed from today's `why.json`) | All hubs + 3 leaves | 🔴 today (same filename as #7's concept, different shape) — resolved by the rename |
| 9 | Process / How It Works | `ProcessTimeline.tsx` | `process.json` | All hubs + several leaves | ✅ |
| 10 | Pricing / Package Options | `Carousel.tsx`+`PricingCard.tsx` | `pricing.json` | 1 leaf (clean) + 1 leaf (hand-rolled equivalent) | 🕳️ real content type, barely used, inconsistently implemented |
| 11 | Case Studies | `CaseStudies.tsx`+`CaseStudyItem.tsx` | `case-studies.json` (wrapper) + shared global pool | All but 1 | ✅ resolved 2026-07-07 — tag field unused / hardcoded 5-of-9 subset confirmed intentional |
| 12 | Latest Insights / Blogs | `Carousel.tsx`+`BlogsCarouselCard.tsx` | `blog.json` (wrapper) + shared global pool | 16 of 23 leaves | ⚠️ filter tags hardcoded in `page.tsx`, not content (15 of 23 leaves) |
| 13 | FAQ | `FAQAccordion.tsx`+`FAQAccordionItem.tsx` | `faq.json` | All but 1 | ✅ best-executed content type in the audit |
| 14 | Contact CTA | `ContactUs.tsx` | `contact.json` | 27 of 30 | ⚠️ missing on 3 pages despite unused files existing |
| — | Related Services (non-content) | `CardsGrid.tsx`+`RelatedServicesCard.tsx` | N/A — computed from `navigation.json` | All 30 | ∅ auto-derived, do not make authorable |

---

## Content Type Reference

### 1. Hero

**Section identity:** `Hero.tsx` · **Canonical filename:** `hero.json` · **Status:** ✅

Universal — every page has one. Two shape variants exist: a standard photo hero, and a video hero (adds `videoUrl`/`videoWebm`/`mobileVideoUrl`/`mobileVideoWebm`), confirmed on `event-live-streaming-services` and `corporate-networking-events`.

**Confirmed issue:** `ServicePage.tsx` renders `<Hero {...hero} secondaryCta={undefined} />` — the `secondaryCta` field is force-discarded on every single page, even though nearly every `hero.json` authors a real one. New content should omit `secondaryCta` until this override is removed at the code level (see Appendix F) — authoring it currently has no visible effect.

```ts
interface HeroContent {
  eyebrow?: string;
  title: string;                 // "\n" splits into separately-animated lines
  description?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string }; // currently dead — see Appendix F
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
  color?: string;      // dead field, see Appendix F — now stripped from every services.json/secondary-services.json under src/content/services/** except the excluded pages below
}
```

**Update (2026-07-06) — filename drift resolved.** Every instance of this content type across `src/content/services/**` — previously scattered across `services.json`, `whats-included.json`, `*-deliverables.json`, and one stray `capabilities.json` (`corporate-video-production`, an undocumented instance of the same drift) — is now named `services.json`. The two folders that legitimately hold two instances of this shape in one page (`human-powered-market-intelligence`: primary deliverables + secondary research cards; `modular-booth-solutions`: primary deliverables + secondary range section) use `services.json` for the primary `services` prop and `secondary-services.json` for `secondaryServices`, following the same disambiguation precedent as the Why-Choose-Us / Why-Spotlight split (#7 vs #8). The dead `ServiceListItem.color` field (see Appendix F) was removed from every content file touched by this fix — see that appendix for the two pages still carrying it. `trade-show-booth-design` and `trade-show-booth-builder` were intentionally left out of this fix: `trade-show-booth-design` at the requester's explicit instruction, and `trade-show-booth-builder` because its `builder-pricing.json` is a structurally different content type (see #10) rendered by hand, not through `ServicesStack`/`Capabilities` at all.

### 5. Capabilities

**Section identity:** `Capabilities.tsx` (features shape **only**) · **Canonical filename:** `capabilities.json` · **Status:** 🔴

`Capabilities.tsx`'s real prop type requires `{ id, label, icon, image, description? }` per item. Two shapes currently share the filename `capabilities.json`:

```ts
// The correct shape — what Capabilities.tsx actually expects
interface CapabilitiesContent {
  heading: string;
  description?: string;
  features: CapabilityItem[];
}
interface CapabilityItem {
  id: string;
  label: string;
  icon: string;
  image: string;
  description?: string;
}
```

**Confirmed collision — 6 of 7 pages still unresolved:** `corporate-networking-events`, `event-branding-solutions`, `event-experience-creation`, `virtual-video-production`, `booth-hostess-services`, `booth-logistics-services` — the file named `capabilities.json` actually only has `{ title, phases: [{ title, description? }] }`, structurally identical to Process content, not `CapabilitiesItem`. To satisfy `Capabilities.tsx`'s prop type, every one of these 6 `page.tsx` files hand-fabricates a placeholder `icon`+`image` array (the same generic background image every entry) and zips it positionally onto the real `phases` data before rendering. **Practical implication: on these 6 pages, `capabilities.json` content only ever controls `title`/`description` — icon and image are not author-controlled at all**, despite the component fully supporting them.

**In progress, uncommitted — `corporate-event-solutions` (found during this scan, not yet finished):** its `capabilities.json` was renamed to `process.json` on disk (`content.ts` now does `export { default as CORP_EVENT_CAPABILITIES } from "./process.json"`), matching the recommended target below by filename — but this is a **rename only, not the actual migration**. `corporate-event-solutions/page.tsx` still imports it as `CORP_EVENT_CAPABILITIES`, still reads `.phases`/`.title`/`.description` off it, still hand-fabricates the same placeholder `capabilityAssets` icon+image array and zips it on positionally, and still feeds the result into the `Capabilities.tsx` carousel — not `ProcessTimeline.tsx`. So this page is not actually using the Process content type yet; it's the same phases-shaped collision under a renamed file. Treat this as a half-finished migration, not a resolved instance.

**Recommended target:** migrate the "phases" variant's data into the Process content type (#9) and render it through `ProcessTimeline.tsx` — its shape is already identical to `ProcessStepItem` — which would also eliminate the hardcoded-icon shims on all 7 pages (6 untouched + `corporate-event-solutions`'s half-done one). If that migration isn't done, the fallback is to rename this variant to a distinct filename (e.g. `capabilities-narrative.json`) so the collision is at least resolved by name, following the same precedent as the Why-Choose-Us / Why-Spotlight split (#7 vs #8) — `corporate-event-solutions`'s `process.json` rename is a step toward this fallback but needs the page.tsx wiring finished (or reverted) to actually count.

**Confirmed orphaned files:** `performance-marketing` and `seo-services` both have a `capabilities.json` on disk that their `page.tsx` never imports or renders at all — their sibling `social-media-marketing` renders it correctly. File presence on disk does not mean the content is live; always check the page's actual imports.

### 6. Industries We Support

**Section identity:** `CardsGrid.tsx`+`IndustryShaderCard.tsx`, via a new typed `industries` prop on `ServicePageProps` · **Canonical filename:** `industries.json` · **Status:** ✅ resolved 2026-07-06

**Update (2026-07-06) — resolved, not just documented.** This had been the one content type with no consistent component pairing — three different render strategies were in active use, and the real situation was messier than originally documented here: `corporate-event-solutions`, `corporate-networking-events`, and `event-branding-solutions` weren't even using a file called `industries.json` (they used `event-industries-section.json`/`networking-industries-section.json`/`branding-industries-section.json`, routed through the `secondaryServices` slot and rendered via `ServicesScroll`, not `IndustryShaderCard`); `performance-marketing` and `seo-services` had an orphaned `industries.json` shaped like a Capabilities feature list (`{heading, items: string[], features: [...]}`), not the documented shape; and `social-media-marketing`'s live `industries.json` had that same mis-shape.

All of this was consolidated onto one component pairing (`CardsGrid.tsx`+`IndustryShaderCard.tsx`), one shape (below), and one wiring mechanism (a new typed `industries` prop on `ServicePageProps`, rendered in `ServicePage.tsx` at the same position `secondaryServices` occupies):

- `corporate-event-solutions`, `corporate-networking-events`, `event-branding-solutions`, `booth-logistics-services`: their per-page industries files were renamed to `industries.json` and now supply only heading/description; the industry items themselves still come from the shared `GLOBAL_INDUSTRY_SERVICES` pool (`src/content/services/industry-services.json`) — same shared-pool precedent as Case Studies (#11) and Blogs (#12). `secondaryServices` was *not* removed from `ServicePageProps` — it's still genuinely used for non-industries content on `human-powered-market-intelligence` and `modular-booth-solutions` — only these 3 GES pages moved off of it.
- `performance-marketing`, `seo-services`: their orphaned, mis-shaped `industries.json` files were rewritten into the canonical shape and wired up for the first time — previously authored but never rendered.
- `social-media-marketing`: its unique per-page industry list was preserved but rewritten into the canonical shape; the hand-rolled `<section id="industries">` block was replaced with the `industries` prop.
- `event-experience-creation`, `booth-hostess-services`: previously had no Industries treatment at all; each got a new `industries.json` (heading only) with items sourced from `GLOBAL_INDUSTRY_SERVICES`, matching their GES/tradeshow-booth sibling pages.
- `corporate-video-production` has a fourth, previously-undocumented orphaned `industries.json` on disk (`{description, heading, industries: [{title, description}]}`, no icon/image, never imported) — **left unresolved**, out of scope for this pass.

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

**Rule (2026-07-07) — Cards vs. Spotlight is content-shape-driven, not arbitrary:** if the "why choose us" content is naturally a **list of discrete, parallel items** (3+ independent benefit/feature points, each with its own short title), render it as **Cards** (this content type, `Carousel.tsx`+`BoothWhyCard.tsx`, `why-choose-us.json`). If it's a **single continuous narrative** (one flowing argument/case, even if it spans two paragraphs or references multiple examples in-line), render it as **Spotlight** (#8, `Spotlight.tsx` via the `why` prop, `why-spotlight.json`). Do not force a narrative into card-shaped items, and do not flatten a genuine item list into prose just to use Spotlight.

**Confirmed compliant (2026-07-07 audit)** against this rule: `event-lead-generation`, `modular-booth-solutions`, and `event-video-production` all use Spotlight, and in every case their `why.json`/`why-spotlight.json` content is a single narrative block with no `items` array — correct per the rule. (`event-lead-generation`'s content is re-exported wholesale from its parent hub's `why.json`, per [Appendix D](#appendix-d--cross-page-content-borrowing) — a separate, pre-existing borrowing pattern, not a rule violation.) `data-validation-services`, `data-augmentation-services`, and `hpmi` have no Why-Choose-Us section at all — whether they get one, and in which shape, is a separate content-authoring decision, out of scope for this rule check.

### 8. Why Choose Us — Spotlight Block

**Section identity:** `Spotlight.tsx` via the `why` prop (no forced label, unlike Introduction) · **Canonical filename:** `why-spotlight.json` (renamed from today's `why.json` to disambiguate from #7) · **Status:** 🔴 today, resolved by the rename

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

Used on all 6 category hubs, the top-level hub, and on `modular-booth-solutions` and `event-video-production` **instead of** the cards variant (neither of those two has a cards section at all). `event-lead-generation` also uses this variant instead of cards. `corporate-video-production` is the one page confirmed to have **both** — a cards Carousel in `customSections` *and* a `why` prop. (`trade-show-booth-rental`, despite having a `why.json`-shaped file on disk per the wider content audit, does not actually pass a `why` prop in its `page.tsx` — it only renders the cards variant, using content borrowed from `trade-show-booth-design`. That file may be present but unwired, similar to the orphaned-content pattern in Appendix B.) This is a genuinely different content type that happens to share a name with #7 — the filename split above is what disambiguates the two going forward.

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

Used on all 6 category hubs plus several leaves (`data-augmentation-services`, `data-validation-services`, `event-physical-video-shoot`, `trade-show-booth-builder`, `trade-show-booth-design`).

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

**Confirmed:** Both `event-video-production` and `trade-show-booth-builder` now use the clean `creativePricing` template mechanism.

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
- **`event-lead-generation` no longer aliases its parent hub's case-studies wrapper.** It now has its own `case-studies.json` (own heading/description) instead of re-exporting `SQL_CASE_STUDIES`. It still renders the same shared `GLOBAL_CASE_STUDIES` 5-of-9 subset as every other page — only the wrapper heading/description is now independent, consistent with how this page's Appendix D borrowing was scoped for its other sections.

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

Zero shape drift found across the codebase. Only gaps: `event-lead-generation` has no independent FAQ (aliases its parent hub's wholesale), and the top-level `/services` hub's `HUB_FAQ` contains literal placeholder Lorem-ipsum text for all 6 Q&A pairs, never replaced with real content.

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

Confirmed: `ServicePage.tsx` computes this at render time — it looks up the current page in `navigation.json`'s `serviceNavigationGroups[].links`, takes the other leaves in the same nav group, and shuffles them with an **un-memoized `Math.random()`** (`otherServices.toSorted(() => 0.5 - Math.random())` — there's an `eslint-disable react-hooks/purity, sonarjs/pseudo-random` comment acknowledging this), taking the first 3 as `{ href, title }` cards.

**This is intentionally documented as non-content — do not add a `related-services.json` field to any page.** The list is computed from category membership, not authored. Separately worth noting (out of scope for this doc, not to be fixed here): the shuffle re-runs on every re-render since it isn't memoized, which could cause layout shift on unrelated state updates — see Appendix H.

The `relatedServicesHeading` override is content-purity-violating on 3 pages today: `event-experience-video-production`, `event-live-streaming-services`, and `virtual-video-production` all hardcode the identical literal string `"Related Event & Media Production Services"` directly in `page.tsx` instead of sourcing it from content or a shared constant.

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
- **`StickyScroll`** (`src/components/sections/StickyScroll.tsx`) — confirmed a one-off "secondary narrative" primitive on all 4 of its real usages, **never** a Why-Choose-Us alternate: `social-media-marketing` ("Social Media Campaigns We Manage"), `corporate-networking-events` ("Networking Event Types"), `event-physical-video-shoot` ("Production Plan"), `event-experience-creation` ("Why It Matters"). Each of these pages has its own bespoke topic here, separate from (and in most cases alongside) a genuine Why-Choose-Us Carousel elsewhere on the same page.
- **`SectionContactCta`** (`src/components/sections/SectionContactCta.tsx`) — a minimal "Contact Our Team" button + modal. **Update (2026-07-07):** removed entirely from 4 of its original 5 `media-production` leaves (`virtual-video-production`, `event-video-production`, `event-live-streaming-services`, `event-experience-video-production`) — each rendered it in `preProcessSections` immediately after a `ServicesStack` with `showServicesCommonCta`, producing two back-to-back "Contact" CTAs; the `ServicesStack` common CTA was kept as the single CTA on all 4. `virtual-video-production`'s hardcoded `label="Contact Our Team"` literal (redundant with the component's own default) was removed along with it. Only `corporate-video-production` still uses `SectionContactCta` (no `showServicesCommonCta` there, so no duplication).
- **Hand-rolled, component-less one-offs**, each unique to one page: a rent-vs-buy grid on `trade-show-booth-rental`. See Appendix C for what's hardcoded in each. **Update (2026-07-07):** the CTA band on `trade-show-booth-design` (a fully hardcoded button+href in `preContactSections`) was removed — the prop is no longer passed on that page.

---

## Hub-Tier vs. Leaf-Tier Guidance

No separate schema is needed per tier — the master table's **Tier** column already shows which content types exist at which tier. The one content type where tier changes *meaning*, not just presence, is **Services Included (#4)**: at the hub-of-hubs and category-hub tiers it lists sibling child pages (`href` points to another page, effectively `cardCtaMode: "linked"`); at leaf tier it lists deliverables (`href` usually absent, CTA opens the contact modal, `showCommonCta: true`). The optional `mode?: "nested-services" | "deliverables"` field in the Services Included schema is purely self-documenting for this distinction — no code reads it today.

The practical takeaway for building a new page: **hub pages are composed only from the typed `ServicePageProps` fields** — confirmed directly, all 7 are clean. **Leaf pages routinely need the slot props** (`customSections` etc.) for anything beyond the 14 standard content types — that's normal and expected, not a sign something's wrong, as long as what goes into the slot is itself content-sourced (see the Content-Purity Rule).

---

## Appendix A — Same-Filename / Same-Concept Collisions

- **`capabilities.json`**: two incompatible shapes (features vs. phases) share this filename on ~7 pages. See Content Type #5.
- **`why.json`** (pre-rename): used today for the spotlight-block "why choose us" meaning, while `why-choose-us.json` is used for the cards meaning — two structurally unrelated shapes conceptually named the same thing. Resolved by the `why-spotlight.json` rename proposed in Content Type #8.

## Appendix B — Orphaned & Unwired Content

- `performance-marketing` and `seo-services`: both have `capabilities.json` on disk, never imported by their `page.tsx` — sibling `social-media-marketing` renders it correctly. (Their `industries.json` orphan was resolved 2026-07-06 — see [Content Type #6](#6-industries-we-support).)
- `corporate-video-production` has an orphaned `industries.json` on disk in a fourth, unrelated shape (`{description, heading, industries: [{title, description}]}`) never imported by its `page.tsx` — discovered 2026-07-06 while resolving Content Type #6, left unresolved as out of scope for that pass.
- `card.json`: 21 copies exist across `src/content/services/`, imported nowhere in the entire codebase (confirmed via `grep`).
- Top-level `/services` hub: `HUB_FAQ` is hardcoded Lorem-ipsum placeholder text, never finished.

## Appendix C — page.tsx Content-Purity Violations

Every item below is a literal heading/CTA/icon-name/image-URL/text-array written directly in a `page.tsx` instead of sourced from that page's own JSON — confirmed by direct read of all 30 pages, not sampled.

- **Hardcoded `capabilityAssets` icon+image array** (same generic placeholder image every entry): `corporate-event-solutions`, `corporate-networking-events`, `event-branding-solutions`, `event-experience-creation`, `virtual-video-production`, `booth-hostess-services`, `booth-logistics-services`.
- **`event-live-streaming-services`**: hardcoded `LIVE_STREAMING_LOCATION_BADGES` city-name array; hardcoded `relatedServicesHeading` string.
- **`event-experience-video-production`** and **`virtual-video-production`**: both hardcode the identical `relatedServicesHeading` string.
- **`trade-show-booth-builder`**: hardcoded Carousel heading string; hardcoded `color`/`icon` stamped onto items borrowed from `trade-show-booth-design`'s content module.
- **`trade-show-booth-design`**: hardcoded `color`/`icon` on its own showcase items; hardcoded `ServicesStack` heading string. **Update (2026-07-07):** the hardcoded CTA button (text + href) in `preContactSections` was removed.
- **`booth-logistics-services`**: hardcoded `label` strings ("Plan Your Event Logistics", "Get a Logistics Quote") on two `ContactModalTrigger` instances in `page.tsx`.
- **`trade-show-booth-rental`**: `BOOTH_RENTAL_RANGE_REASONS` — 5 complete content objects (title/description/image) written entirely in `page.tsx`, in no JSON file at all; plus hardcoded `color`/`icon`, hardcoded heading/CTA-label text, and hardcoded icon-string-matching (`Coins`/`Move`/`Truck`).

**Confirmed clean:** `event-lead-generation`, `hpmi`, `data-augmentation-services`, `data-validation-services`, `modular-booth-solutions`, `event-video-production`, `performance-marketing`, `seo-services`, `social-media-marketing`, and all 7 hub-tier pages.

## Appendix D — Cross-Page Content Borrowing

- `event-lead-generation` re-exports its parent hub's (`sales-qualified-lead-generation`) case-studies, contact, FAQ, process, services, and why content wholesale — only its hero (partial override), client logos, intro, page metadata, and unique `pipeline.json` are genuinely its own.
- `trade-show-booth-builder` and `trade-show-booth-rental` both import directly from `trade-show-booth-design`'s content module (showcase items, why-choose-us items) rather than having independent content.
- The top-level `/services` hub borrows `HUB_WHY` from `tradeshow-booth-solutions/why.json` and `HUB_CONTACT_CTA` from `global-event-solutions/contact.json`.

## Appendix E — Category / Parent Mismatches

`booth-hostess-services` and `booth-logistics-services` are physically routed under `/tradeshow-booth-solutions/` but their content's `parentPage` prop is set to `GES_PAGE` (Global Event Solutions) on both — URL nesting disagrees with the logical content-parent category used for breadcrumbs/SEO.

## Appendix F — Dead Props & Unused Fields

| Field | Where declared | Status |
|---|---|---|
| `Hero.secondaryCta` | `Hero.tsx` | Authored in ~29/30 `hero.json` files, force-discarded by `ServicePage.tsx` on every render |
| `Carousel.layout` | `Carousel.tsx` | Declared, passed at nearly every call site, never read in the component body |
| `ServiceListItem.color` | shared `HomeServiceItem` type | Never read by `ServicesCard.tsx` or `Capabilities.tsx`. Made optional on the type and removed 2026-07-06 from every `services.json`/`secondary-services.json` under `src/content/services/**` (including the top-level hub's `src/content/services/hub/services.json`) as part of [Content Type #4](#4-services-included--nested-services)'s drift fix — still present on `trade-show-booth-design/design-deliverables.json` and `trade-show-booth-builder` (both out of scope for that fix), plus one unrelated location outside the services pages entirely that still authors it (`src/content/home/services.json`) — `src/content/about-us/services.json` reuses the same item shape but was already omitting `color`/`icon`/`description` before this fix |
| `FAQItem.image` / `icon` | `FAQAccordion.tsx` types | Declared, never rendered by `FAQAccordionItem.tsx` |
| `SpotlightProps.secondarySpotlight` | `Spotlight.tsx` | Defined (side-by-side two-text-block mode), used by zero real pages |
| ~~`ClientLogosProps.logos`~~ | `ClientLogos.tsx` | Removed 2026-07-06 — see [Content Type #2](#2-client-logos) |

## Appendix G — New Item Components Found

Two item components turned up during this audit that weren't part of the original known set (plus one UI primitive used as a one-off):

- **`BasicCards.tsx`** — found on `trade-show-booth-builder`, rendering `BOOTH_BUILDER_FUTURE_READY` items via `CardsGrid.tsx`.
- **`EventsCard.tsx`** — found on `trade-show-booth-design`, rendering the site's shared upcoming-events content (reused wholesale from the homepage's `HOME_EVENTS_CONTENT` + `getDefaultEvents()`) via `CardsGrid.tsx`.
- **`ContactModalTrigger`** (`src/components/ui/ContactModal`) — found on `booth-logistics-services`, used twice in raw JSX blocks with hardcoded labels rather than being content-sourced.

## Appendix H — Out-of-Scope Follow-Ups

Noted for awareness; none of these are addressed by this audit:

- Related Services' `Math.random()` shuffle in `ServicePage.tsx` is un-memoized and reshuffles on every re-render — a real bug, but unrelated to content schema.
- Case Studies' and Industries' `services[]`/tag fields exist specifically to support per-page relevance filtering but are never read for that purpose anywhere — currently just descriptive metadata.
