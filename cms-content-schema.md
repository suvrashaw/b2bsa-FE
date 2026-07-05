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

One gap: **`hpmi` (Human-Powered Market Intelligence) has content prepared for a category-hub page (`content.ts`, `page.json`) but no `page.tsx` was ever built** — its one leaf (`human-powered-market-intelligence`) renders fine, but the hub tier for this category doesn't exist as a live page.

### The shared template — `ServicePage.tsx`

All 30 pages are thin wrappers: each `page.tsx` imports named content constants from that page's own `content.ts` (which itself imports and sometimes merges JSON files) and passes them as typed props into `<ServicePage />` (`src/components/templates/ServicePage.tsx`).

### Confirmed render order

```
Header
Hero                          — if `hero` given
ClientLogos                   — ALWAYS rendered (props optional)
Spotlight #1 "INTRODUCTION"   — if `spotlight` or `proofBar` given
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
| 2 | Client Logos | `ClientLogos.tsx` | `client-logos.json` | All 30 | ⚠️ (logos never actually author-controlled) |
| 3 | Introduction | `Spotlight.tsx` (`spotlight` prop) or `Spotlight.tsx` (`proofBar` prop) | `intro.json` | All 30 | ⚠️ 9+ filename variants, 2 field-set variants |
| 4 | Services Included / Nested Services | `ServicesStack.tsx`+`ServicesCard.tsx` (grid) or `Capabilities.tsx` (carousel) | `services.json` | All 30 — meaning differs by tier | ⚠️ filename variants + rendering choice is per-page |
| 5 | Capabilities | `Capabilities.tsx` (features shape only) | `capabilities.json` | Leaf only | 🔴 same filename, incompatible "phases" shape in ~7 pages |
| 6 | Industries We Support | 3 different strategies today (see below); target: `CardsGrid.tsx`+`IndustryShaderCard.tsx` | `industries.json` | Leaf only | 🕳️ the one content type with no consistent pairing |
| 7 | Why Choose Us — Cards | `Carousel.tsx`+`BoothWhyCard.tsx` | `why-choose-us.json` | Leaf-predominant | ⚠️ icon field inconsistently present; card reused for "Benefits" too |
| 8 | Why Choose Us — Spotlight | `Spotlight.tsx` (`why` prop) | `why-spotlight.json` (renamed from today's `why.json`) | All hubs + 3 leaves | 🔴 today (same filename as #7's concept, different shape) — resolved by the rename |
| 9 | Process / How It Works | `ProcessTimeline.tsx` | `process.json` | All hubs + several leaves | ✅ |
| 10 | Pricing / Package Options | `Carousel.tsx`+`PricingCard.tsx` | `pricing.json` | 1 leaf (clean) + 1 leaf (hand-rolled equivalent) | 🕳️ real content type, barely used, inconsistently implemented |
| 11 | Case Studies | `CaseStudies.tsx`+`CaseStudyItem.tsx` | `case-studies.json` (wrapper) + shared global pool | All but 1 | ⚠️ tag field unused, hardcoded 5-of-9 subset shown everywhere |
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

**Section identity:** `ClientLogos.tsx` · **Canonical filename:** `client-logos.json` · **Status:** ⚠️

Rendered unconditionally on every page (all props optional). Every page's content only ever supplies a heading/description.

**Confirmed issue:** the actual logo images are 100% hardcoded inside the component (`DEFAULT_CLIENT_LOGOS`, 9 fixed brands) — the component accepts a `logos` field, but no page's content ever populates it.

```ts
interface ClientLogosContent {
  heading?: string;
  description?: string;
  // logos?: { alt, id, src }[] — accepted by the component, never populated today
}
```

### 3. Introduction

**Section identity:** `Spotlight.tsx` via the `spotlight` prop (forced `label="INTRODUCTION"`), or via the narrower `proofBar` prop · **Canonical filename:** `intro.json` · **Status:** ⚠️

Universal — every page passes either `spotlight` or `proofBar` (confirmed directly, page by page). Two real field-set variants exist:

```ts
// "spotlight" variant — most pages
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

// "proofBar" variant — confirmed used ALONE (no spotlight) on
// event-physical-video-shoot and trade-show-booth-builder
interface ProofBarContent {
  heading: string;                // no titleLine2 equivalent
  description?: string;
  imageUrl: string;
  stats: string[];
}
```

Both render through the same `Spotlight.tsx` component in the same page position — the `proofBar` shape is not a legacy alias to be ignored, it's a genuinely narrower field set some pages use.

**Filename drift:** at least 9 different filenames feed this content type across the codebase (`intro.json`, `hostess-intro.json`, `logistics-intro.json`, `networking-intro.json`, `streaming-spotlight.json`, `validation-spotlight.json`, `market-intelligence-spotlight.json`, `areas-served.json`, `research-proof-bar.json`). No page is missing Introduction content outright — the drift is entirely in what the file is named, not whether it exists.

### 4. Services Included / Nested Services

**Section identity:** `ServicesStack.tsx`+`ServicesCard.tsx` (grid mode) **or** `Capabilities.tsx` (carousel mode, via `servicesSectionType`/`secondaryServicesSectionType`) · **Canonical filename:** `services.json` · **Status:** ⚠️

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
  color?: string;      // dead field, see Appendix F — safe to omit in new content
}
```

**Filename drift:** `services.json` vs `whats-included.json` vs `*-deliverables.json`, inconsistent even between sibling leaves in the same hub (`social-media-marketing` uses `whats-included.json`; its siblings `performance-marketing`/`seo-services` use `services.json` for the identical shape).

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

**Confirmed collision:** on 7 pages — `corporate-event-solutions`, `corporate-networking-events`, `event-branding-solutions`, `event-experience-creation`, `virtual-video-production`, `booth-hostess-services`, `booth-logistics-services` — the file named `capabilities.json` actually only has `{ title, phases: [{ title, description? }] }`, structurally identical to Process content, not `CapabilitiesItem`. To satisfy `Capabilities.tsx`'s prop type, every one of these 7 `page.tsx` files hand-fabricates a placeholder `icon`+`image` array (the same generic background image every entry) and zips it positionally onto the real `phases` data before rendering. **Practical implication: on these 7 pages, `capabilities.json` content only ever controls `title`/`description` — icon and image are not author-controlled at all**, despite the component fully supporting them.

**Recommended target:** migrate the "phases" variant's data into the Process content type (#9) — its shape is already identical to `ProcessStepItem` — which would also eliminate the 7 duplicated hardcoded-icon shims. If that migration isn't done, the fallback is to rename this variant to a distinct filename (e.g. `capabilities-narrative.json`) so the collision is at least resolved by name, following the same precedent as the Why-Choose-Us / Why-Spotlight split (#7 vs #8).

**Confirmed orphaned files:** `performance-marketing` and `seo-services` both have a `capabilities.json` on disk that their `page.tsx` never imports or renders at all — their sibling `social-media-marketing` renders it correctly. File presence on disk does not mean the content is live; always check the page's actual imports.

### 6. Industries We Support

**Section identity:** today, no consistent pairing exists — three different strategies are in active use · **Canonical filename:** `industries.json` · **Status:** 🕳️

1. **Own rich content + hand-rolled raw `<section id="industries">` + `IndustryShaderCard`** — confirmed only on `social-media-marketing`. (`performance-marketing` and `seo-services` both have an `industries.json` on disk but never render it — orphaned, same pattern as Capabilities above.)
2. **Shared/global data + hand-rolled raw `<section id="industries">` + `IndustryShaderCard`**, where the page's own file supplies only the heading and items come from `GLOBAL_INDUSTRY_SERVICES` — confirmed on `booth-logistics-services`.
3. **Routed through the `secondaryServices` template slot** with `secondaryServicesSectionType="carousel"`, rendered via `Capabilities.tsx`'s plain icon/image cards — **not** `IndustryShaderCard` at all — confirmed on `corporate-event-solutions`, `corporate-networking-events`, and `event-branding-solutions` (every Global Event Solutions leaf with an industries treatment). `event-experience-creation` and `booth-hostess-services` have no Industries treatment in their `page.tsx` at all.

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

**Recommended target (not implemented — audit only):** `CardsGrid.tsx`+`IndustryShaderCard.tsx` consistently, matching every other card-based content type's wrapper+card convention.

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

**Confirmed:** the `icon` field is present on some pages' items and absent on others (present: `booth-hostess-services`, `booth-logistics-services`, `trade-show-booth-design`, `corporate-event-solutions`, `event-branding-solutions`, `event-experience-creation`; absent: `performance-marketing`, `seo-services`, `social-media-marketing`, `event-live-streaming-services`).

**`BoothWhyCard` is also reused beyond "Why Choose Us":** on `booth-logistics-services`, a *second* BoothWhyCard-based block — wrapped in `CardsGrid.tsx` rather than `Carousel.tsx` — renders a "Benefits" section, separate from and in addition to that page's genuine Why-Choose-Us Carousel. Treat `BoothWhyCard` as a generic titled feature/benefit card, not something exclusively tied to "why choose us" semantics.

**Missing entirely:** `event-lead-generation`, `data-validation-services`, `data-augmentation-services`, `hpmi`, `modular-booth-solutions`, `event-video-production` — the last two use the Spotlight-block variant (#8) instead, not the cards variant.

### 8. Why Choose Us — Spotlight Block

**Section identity:** `Spotlight.tsx` via the `why` prop (no forced label, unlike Introduction) · **Canonical filename:** `why-spotlight.json` (renamed from today's `why.json` to disambiguate from #7) · **Status:** 🔴 today, resolved by the rename

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

**Section identity:** `Carousel.tsx`+`PricingCard.tsx` (the template's `creativePricing` mechanism) · **Canonical filename:** `pricing.json` · **Status:** 🕳️

A real, recurring content block, but barely used and inconsistently implemented:

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

**Confirmed:** `event-video-production` uses the clean `creativePricing` template mechanism. `trade-show-booth-builder` instead hand-rolls the visual equivalent entirely in raw JSX (~35 lines, manual `<CheckCircle>` bullet rendering) rather than using the built-in mechanism — duplicated functionality, two different implementations of the same idea.

### 11. Case Studies

**Section identity:** `CaseStudies.tsx`+`CaseStudyItem.tsx`; the per-page file is a thin wrapper, the real items are a shared global pool · **Canonical filename:** `case-studies.json` (wrapper) · **Status:** ⚠️

```ts
// Per-page wrapper
interface CaseStudiesWrapperContent {
  heading: string;
  description?: string;
  ctaLabel?: string;
  viewAllLabel?: string;
  // `items` is not actually authored per-page — every page currently
  // overwrites it with a shared, hardcoded 5-of-9 subset (see below).
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

**Confirmed:** the shared pool itself (9 entries) is well-shaped and consistent — this content type's data is genuinely solid. But every page shows the identical hardcoded 5-of-9 subset regardless of actual relevance, and the `services[]` tag field that exists specifically to enable per-service filtering is never read for that purpose anywhere. Case-study "icons" shown in the card UI are synthesized by cycling through 3 hardcoded fallback names (`Target`, `Sparkles`, `Building2`), never authored in any content file. `corporate-video-production` uses a differently-named content constant (`CORPORATE_VIDEO_PORTFOLIO`) for the same shape — a naming outlier, not a shape problem.

**Missing:** `event-lead-generation` (aliases its parent hub's case studies wholesale).

### 12. Latest Insights / Blogs

**Section identity:** `Carousel.tsx`+`BlogsCarouselCard.tsx`; the per-page file is a thin wrapper, the real posts are a shared global pool · **Canonical filename:** `blog.json` (wrapper) · **Status:** ⚠️

```ts
interface BlogsSectionContent {
  heading: string;
  tags?: string[];   // NOT authored today — see confirmed issue below
  viewAllHref?: string;
  viewAllLabel?: string;
}
```

Underlying posts live site-wide in `src/content/blogs/blogs.json` (25 posts, `SharedBlogPost` shape).

**Confirmed — the most pervasive content-purity violation found in this entire audit:** each leaf's own `blog.json` is only ever `{ heading }` — no posts, no filter data. The actual filter tag(s) shown is a hardcoded string-array literal passed directly to `getBlogsByTags([...])` inside **15 of the 23 leaves'** `page.tsx` (e.g. `getBlogsByTags(["Performance Marketing"])`), rather than being read from any content field: `performance-marketing`, `seo-services`, `social-media-marketing`, `corporate-event-solutions`, `corporate-networking-events`, `event-branding-solutions`, `corporate-video-production`, `event-experience-video-production`, `event-live-streaming-services`, `event-physical-video-shoot`, `virtual-video-production`, `booth-hostess-services`, `booth-logistics-services`, `trade-show-booth-design`, `trade-show-booth-rental`. This is more widespread than any other item in Appendix C — it just isn't visible from file shape alone, only from reading the actual render call. `trade-show-booth-builder` is the 16th page with a Blogs section, but it sources the already-filtered post list from `content.ts` rather than calling `getBlogsByTags` with a literal array inside `page.tsx` itself — an architectural (not data) difference from the other 15.

**Missing entirely (7 of 23 leaves, not just one):** `event-experience-creation`, `hpmi`, `data-augmentation-services`, `data-validation-services`, `event-video-production`, `event-lead-generation`, `modular-booth-solutions` — mostly the "minimal" pages that also lack Why-Choose-Us and other optional sections, though `event-experience-creation` and `event-lead-generation` are notable exceptions since they otherwise have rich custom content but still skip Blogs specifically.

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

**Section identity:** `ContactUs.tsx` · **Canonical filename:** `contact.json` · **Status:** ⚠️

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

**Confirmed:** the entire `market-research` category (its hub page plus both leaves, `data-augmentation-services` and `data-validation-services`) is missing a Contact CTA section entirely, despite each having an unused `contact.json` sitting on disk.

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
- **`SectionContactCta`** (`src/components/sections/SectionContactCta.tsx`) — a minimal "Contact Our Team" button + modal, scoped to the 5 `media-production` leaves. Never content-sourced; one instance (`virtual-video-production`) even hardcodes its label as a literal prop.
- **Hand-rolled, component-less one-offs**, each unique to one page: a pricing grid on `trade-show-booth-builder`; a CTA band on `trade-show-booth-design`; a rent-vs-buy grid on `trade-show-booth-rental`. See Appendix C for what's hardcoded in each.

---

## Hub-Tier vs. Leaf-Tier Guidance

No separate schema is needed per tier — the master table's **Tier** column already shows which content types exist at which tier. The one content type where tier changes *meaning*, not just presence, is **Services Included (#4)**: at the hub-of-hubs and category-hub tiers it lists sibling child pages (`href` points to another page, effectively `cardCtaMode: "linked"`); at leaf tier it lists deliverables (`href` usually absent, CTA opens the contact modal, `showCommonCta: true`). The optional `mode?: "nested-services" | "deliverables"` field in the Services Included schema is purely self-documenting for this distinction — no code reads it today.

The practical takeaway for building a new page: **hub pages are composed only from the typed `ServicePageProps` fields** — confirmed directly, all 7 are clean. **Leaf pages routinely need the slot props** (`customSections` etc.) for anything beyond the 14 standard content types — that's normal and expected, not a sign something's wrong, as long as what goes into the slot is itself content-sourced (see the Content-Purity Rule).

---

## Appendix A — Same-Filename / Same-Concept Collisions

- **`capabilities.json`**: two incompatible shapes (features vs. phases) share this filename on ~7 pages. See Content Type #5.
- **`why.json`** (pre-rename): used today for the spotlight-block "why choose us" meaning, while `why-choose-us.json` is used for the cards meaning — two structurally unrelated shapes conceptually named the same thing. Resolved by the `why-spotlight.json` rename proposed in Content Type #8.

## Appendix B — Orphaned & Unwired Content

- `performance-marketing` and `seo-services`: both have `capabilities.json` **and** `industries.json` on disk, neither ever imported by their `page.tsx`. Sibling `social-media-marketing` renders both correctly.
- `booth-hostess-services`: has an industries-section file never wired up.
- `card.json`: 21 copies exist across `src/content/services/`, imported nowhere in the entire codebase (confirmed via `grep`).
- `market-research` hub + both its leaves (`data-augmentation-services`, `data-validation-services`): all 3 have an unused `contact.json` on disk; none render a Contact CTA section.
- Top-level `/services` hub: `HUB_FAQ` is hardcoded Lorem-ipsum placeholder text, never finished.

## Appendix C — page.tsx Content-Purity Violations

Every item below is a literal heading/CTA/icon-name/image-URL/text-array written directly in a `page.tsx` instead of sourced from that page's own JSON — confirmed by direct read of all 30 pages, not sampled.

- **Most pervasive — hardcoded blog-tag filter arrays**: `getBlogsByTags([...])` called with a literal tag-string array directly in 15 of 23 leaf `page.tsx` files (see Content Type #12 for the full list). Affects more pages than every other item below combined.
- **Hardcoded `capabilityAssets` icon+image array** (same generic placeholder image every entry): `corporate-event-solutions`, `corporate-networking-events`, `event-branding-solutions`, `event-experience-creation`, `virtual-video-production`, `booth-hostess-services`, `booth-logistics-services`.
- **`event-live-streaming-services`**: hardcoded `LIVE_STREAMING_LOCATION_BADGES` city-name array; hardcoded `relatedServicesHeading` string.
- **`corporate-video-production`**: hardcoded Blogs Carousel heading string.
- **`event-experience-video-production`** and **`virtual-video-production`**: both hardcode the identical `relatedServicesHeading` string.
- **`virtual-video-production`**: also hardcodes a `SectionContactCta` label.
- **`trade-show-booth-builder`**: hardcoded Carousel heading string; hardcoded `color`/`icon` stamped onto items borrowed from `trade-show-booth-design`'s content module; a fully hand-rolled pricing-grid `<section>`.
- **`trade-show-booth-design`**: hardcoded `color`/`icon` on its own showcase items; hardcoded `ServicesStack` heading string; a fully hardcoded CTA button (text + href) in `preContactSections`.
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
| `ServiceListItem.color` | shared `HomeServiceItem` type | Required by the type, authored almost everywhere, never read by `ServicesCard.tsx` or `Capabilities.tsx` |
| `FAQItem.image` / `icon` | `FAQAccordion.tsx` types | Declared, never rendered by `FAQAccordionItem.tsx` |
| `SpotlightProps.secondarySpotlight` | `Spotlight.tsx` | Defined (side-by-side two-text-block mode), used by zero real pages |
| `ClientLogosProps.logos` | `ClientLogos.tsx` | Accepted by the component, never populated by any page's content — logos are hardcoded in the component |

## Appendix G — New Item Components Found

Two item components turned up during this audit that weren't part of the original known set:

- **`BasicCards.tsx`** — found on `trade-show-booth-builder`, rendering `BOOTH_BUILDER_FUTURE_READY` items via `CardsGrid.tsx`.
- **`EventsCard.tsx`** — found on `trade-show-booth-design`, rendering the site's shared upcoming-events content (reused wholesale from the homepage's `HOME_EVENTS_CONTENT` + `getDefaultEvents()`) via `CardsGrid.tsx`.

## Appendix H — Out-of-Scope Follow-Ups

Noted for awareness; none of these are addressed by this audit:

- Related Services' `Math.random()` shuffle in `ServicePage.tsx` is un-memoized and reshuffles on every re-render — a real bug, but unrelated to content schema.
- Case Studies' and Industries' `services[]`/tag fields exist specifically to support per-page relevance filtering but are never read for that purpose anywhere — currently just descriptive metadata.
