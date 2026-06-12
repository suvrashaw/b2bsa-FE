# Responsive Design Implementation Plan
## B2BSA2 — All 35 Section Components

---

## Context

The website has inconsistent mobile/tablet responsive behaviour. All 35 section components were visually tested via Playwright at **360px**, **768px**, **1440px**, and **2560px**. All design decisions have been collected through an exhaustive Q&A session. This plan is ready to execute.

**Root problems:**
1. Container padding is flat `px-8` (32px) everywhere — too wide at 360px (leaves only 296px content).
2. Several grids collapse straight from 1-col to 3-col, skipping the 768px tablet column.
3. No max-width cap at 2560px ultra-wide — content drifts left.
4. Fixed vertical `py-24` on mobile is excessive whitespace.
5. `AboutCoreValues` horizontal scroll — cards are 340–500px wide on a 360px screen (confirmed overflow).
6. No consistent mobile typography scale — body text and headings don't scale proportionally.
7. Zero touch/mobile compatibility globals (no tap-highlight reset, no scroll-padding, no safe areas).

---

## Breakpoint Reference

| Name | Width | Tailwind prefix |
|------|-------|-----------------|
| Mobile | 360–639px | base |
| Small | 640px | `sm:` |
| Tablet | 768px | `md:` |
| Desktop | 1024px | `lg:` |
| Wide | 1280px | `xl:` |
| Ultra-wide | 1536px+ | `2xl:` |

---

## User Decisions (all locked)

| Question | Decision |
|----------|----------|
| Pricing at tablet | Horizontal scroll on < lg:, 3-col grid at lg+ |
| AboutCoreValues mobile | CSS scroll-snap on < md:, JS sticky scroll at md+ |
| 2560px ultra-wide | Cap at 1536px (`max-w-screen-2xl`) |
| Carousels on mobile | Touch swipe + CSS scroll-snap on < md: |
| Blogs mobile | Grid layout (< lg:), deck layout (lg+) |
| Hover on touch | Add `active:` state equivalents |
| h2 heading size | CSS `clamp()` fluid scaling |
| Corner radius | Scale down on mobile |
| CinematicSequence mobile | Lazy-load frames only when section visible |
| WhoWeAre mobile stacking | Animated image columns ABOVE text on mobile (DOM reorder at < lg:) |
| Spotlight mobile stacking | Text above, image below (keep current) |
| h3 headings | Also use CSS `clamp()` |
| Testimonials card height | `min-h` on mobile instead of fixed `h-[460px]` |
| 44px touch targets | Yes — all buttons/links/interactive elements |
| ContactUs grid breakpoint | Two-col stays at lg: (1024px+) |
| prefers-reduced-motion | Yes — pause marquees, disable parallax, static decks |
| Culture mobile | Add `overflow-hidden` to clip floating images (keep layout) |
| BlogsCarousel header | Stack heading + "View All" vertically on mobile |
| RentVsBuySection icon-grid | 1-col on mobile (base), 2-col at sm+ |
| CaseStudies inactive cards | `min-h-[80px]` on mobile (vs `min-h-[112px]`) |
| BlogsCarousel arrows | Keep arrows on mobile (alongside swipe) |
| ImageHero | Keep auto-cycle, no manual swipe controls |
| ContactUs form inputs | `text-base` (16px) minimum on mobile — prevents iOS zoom |
| Spotlight whitespace-nowrap | Change to `sm:whitespace-nowrap` (wraps freely at 360px) |
| FAQAccordion expand icon | Move to LEFT on mobile (ergonomic right-thumb reach) |
| scroll-padding-top | 64px on `html` for fixed header anchor compensation |
| Overscroll on carousels | `overscroll-behavior-x: contain` — prevents scroll bleed |
| Tap highlight | `-webkit-tap-highlight-color: transparent` globally |
| Card text selection | `select-none` on interactive card titles/labels |
| ContactModal height | `h-dvh` — shrinks when iOS keyboard appears |
| iPhone safe area — header | `padding-top: env(safe-area-inset-top)` on fixed header |
| iPhone safe area — footer | `padding-bottom: env(safe-area-inset-bottom)` on footer |
| Snap carousel padding | `scroll-padding-inline: 16px` (px-4) on mobile snap containers |
| Form autocomplete | Add semantic attributes: `given-name`, `email`, `tel`, `organization` |
| Mobile typography scale | Approved (see Phase 8 below) |
| ProcessTimeline connector | Keep vertical connector line (no change) |

---

## Global Changes

### G1 — Container horizontal padding
`container mx-auto px-8` → `container mx-auto px-4 sm:px-6 md:px-8`

### G2 — 2xl max-width cap
`container mx-auto` → `container mx-auto max-w-screen-2xl`
(Full-bleed heroes skip this.)

### G3 — Vertical section padding
- `py-24` → `py-14 md:py-20 lg:py-24`
- `py-20` → `py-12 md:py-16 lg:py-20`
(Hero sections excluded.)

### G4 — Body text responsive scale
- Section description `text-base` → `text-sm md:text-base`
- Card body `text-sm` → `text-xs md:text-sm`
- Minimum font: 11px (never go below)

### G5 — Active states for touch hover
Every `hover:bg-*` on interactive cards also gets `active:bg-*` equivalent.

---

## Implementation Phases

---

### Phase 1 — globals.css: Touch / Mobile Compatibility Layer

Add to `@layer base` in `src/app/globals.css`:

```css
@layer base {
  html {
    scroll-padding-top: 64px;          /* compensates for fixed header */
    -webkit-tap-highlight-color: transparent; /* removes iOS grey tap flash */
    color-scheme: light;
  }

  /* Overscroll containment on horizontal snap containers */
  .snap-x {
    overscroll-behavior-x: contain;
    scroll-padding-inline: 16px;       /* aligns snap to px-4 padding edge */
  }

  @media (min-width: 640px) {
    .snap-x { scroll-padding-inline: 24px; } /* sm: px-6 */
  }
  @media (min-width: 768px) {
    .snap-x { scroll-padding-inline: 32px; } /* md: px-8 */
  }

  /* Prevent text selection on interactive card content */
  [data-card-interactive] { user-select: none; }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .marquee-track { animation-play-state: paused !important; }
    .parallax-element { transform: none !important; }
  }
}
```

---

### Phase 2 — Next.js viewport meta: viewport-fit=cover

**File:** `src/app/layout.tsx`

Export a `viewport` object (required for `env(safe-area-inset-*)` to work):

```tsx
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",   // ← enables safe area insets on iPhone
};
```

---

### Phase 3 — Typography scale (Heading.tsx)

**File:** `src/components/ui/Heading.tsx`

Replace fixed Tailwind step sizes with CSS `clamp()` via inline style or a new `text-*` utility:

```tsx
const headingVariants = cva("", {
  variants: {
    level: {
      h1: "font-heading leading-[1.02] font-black text-[var(--heading-h1)] [font-size:clamp(28px,8vw,36px)] md:text-5xl lg:text-6xl xl:text-7xl",
      h2: "font-heading leading-tight font-bold text-[var(--heading-h2)] [font-size:clamp(22px,6vw,30px)] md:text-4xl lg:text-5xl",
      h3: "font-heading leading-tight font-bold text-[var(--heading-h3)] [font-size:clamp(18px,5vw,24px)] md:text-3xl",
      h4: "text-[11px] font-bold tracking-wider text-[var(--heading-h4)] uppercase md:text-sm",
    },
  },
});
```

**Consistent mobile type scale (all sections must conform):**

| Element | Mobile (360px) | Desktop |
|---------|---------------|---------|
| h1 | 28–36px (clamp) | 48–72px |
| h2 | 22–30px (clamp) | 36–48px |
| h3 | 18–24px (clamp) | 24–30px |
| h4 | 11px | 12–14px |
| Section paragraph | 14px (`text-sm`) | 16px (`text-base`) |
| Card body | 12px (`text-xs`) | 14px (`text-sm`) |
| Small labels | 11px minimum | 12px |

---

### Phase 4 — h-screen → h-dvh (iOS viewport height bug)

`h-screen` uses `100vh` which on iOS Safari includes the invisible URL bar → sections are taller than visible area.

**Files:** `StickyScroll.tsx`, `CinematicSequence.tsx`, `Culture.tsx`

Replace:
- `h-screen` → `h-dvh` (where sticky full-viewport panels are used)
- `min-h-screen` → `min-h-dvh`

Also add safe-area padding to `Header.tsx`:
```tsx
// In the fixed header outer div:
className="... pt-[env(safe-area-inset-top)]"
```

And to `Footer.tsx`:
```tsx
// In footer bottom section:
className="... pb-[env(safe-area-inset-bottom)]"
```

---

### Phase 5 — Global padding + 2xl cap (all sections)

Apply G1 + G2 + G3 to every section using `container mx-auto px-8`. Purely additive class changes, no layout risk.

Also add Footer to G1 fix: `Footer.tsx` uses `px-8` hardcoded.

---

### Phase 6 — Grid breakpoint fixes

#### CardsSection.tsx
`grid gap-7 lg:grid-cols-3` → `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`

#### CorporateVideoPortfolioSection.tsx
`lg:grid-cols-3` → `sm:grid-cols-2 lg:grid-cols-3`

#### CaseStudies.tsx
- Inactive card: `min-h-[112px]` → `min-h-[80px] sm:min-h-[112px]`
- Active card: `min-h-[360px]` → `min-h-[280px] sm:min-h-[360px]`
- Outer container: `lg:h-[600px]` → `h-auto lg:h-[600px]`

#### GlobalPresence.tsx
`h-[500px] lg:h-[850px]` → `h-[280px] sm:h-[380px] md:h-[450px] lg:h-[850px]`

#### CorporateVideoIndustriesSection.tsx
`pt-52` → `pt-20 md:pt-32 lg:pt-52`

#### RentVsBuySection.tsx (icon-grid layout)
`grid-cols-2` → `grid-cols-1 sm:grid-cols-2` for icon grid items

---

### Phase 7 — Pricing: horizontal scroll mobile layout

**File:** `src/components/sections/Pricing.tsx`

```tsx
{/* Mobile/Tablet: CSS scroll-snap strip */}
<div className="flex gap-5 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden pb-4 lg:hidden">
  {tiers.map(tier => (
    <div className="snap-start shrink-0 w-[85%] sm:w-[72%] md:w-[46%]" key={tier.name}>
      <PricingCard tier={tier} />
    </div>
  ))}
</div>

{/* Desktop: 3-col grid */}
<div className="hidden grid-cols-3 gap-8 lg:grid">
  {tiers.map(tier => <PricingCard key={tier.name} tier={tier} />)}
</div>
```

---

### Phase 8 — AboutCoreValues: dual mobile/desktop layout

**File:** `src/components/sections/AboutCoreValues.tsx`

```tsx
{/* Mobile (<768px): CSS horizontal snap scroll */}
<section className="md:hidden bg-brand-gray py-12" id="core-values">
  <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden gap-4 px-4 pb-4">
    {/* Intro slide */}
    <div className="snap-start shrink-0 w-[90vw] flex flex-col justify-center py-10">
      {/* heading, description, scroll hint */}
    </div>
    {/* Value cards */}
    {data.values.map((value, index) => (
      <div className="snap-start shrink-0 w-[82vw]" key={index}>
        {/* existing card JSX */}
      </div>
    ))}
  </div>
</section>

{/* Desktop (768px+): existing sticky scroll (unchanged) */}
<section className="hidden md:block relative h-[400vh] bg-brand-gray" id="core-values" ref={targetRef}>
  {/* existing full implementation */}
</section>
```

---

### Phase 9 — Carousel touch-swipe pattern

Applied to: `BlogsCarousel.tsx`, `BoothWhyChooseUs.tsx`, `FAQ.tsx`

**FeatureCarouselSection.tsx** — already has correct vertical list on mobile; no change needed.

Pattern (mobile snap + keep existing JS carousel for desktop):

```tsx
{/* Mobile: CSS snap */}
<div className="md:hidden flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden gap-4 pb-4">
  {items.map(item => (
    <div className="snap-start shrink-0 w-[85%]" key={item.id}>{/* card */}</div>
  ))}
</div>

{/* Desktop: existing JS carousel */}
<div className="hidden md:block">{/* existing */}</div>
```

**BlogsCarousel.tsx — additional fix:** Header row (heading + "View All Blogs" button) is side-by-side and breaks at 360px.

```tsx
{/* Current: flex items-center justify-between */}
{/* Fix: */}
<div className="mb-14 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  <Heading as="h2">...</Heading>
  <Button ...>View All Blogs</Button>
</div>
```

Keep arrow `<` `>` buttons on mobile (alongside swipe).

---

### Phase 10 — StickyScroll + Blogs padding fix

**StickyScroll.tsx:**
- `container mx-auto px-8` → `container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8`
- Replace `h-screen` with `h-dvh` in all sticky panels

**Blogs.tsx:**
- `container mx-auto px-8` → G1 fix
- Deck layout: `h-[800px] lg:h-[580px]` → `h-[580px] sm:h-[640px] lg:h-[580px]` (grid below lg: already handled)

---

### Phase 11 — WhoWeAre mobile reorder

**File:** `src/components/sections/WhoWeAre.tsx`

On mobile (< lg:), the animated image columns should appear ABOVE the text. Currently the grid is `container mx-auto grid lg:grid-cols-2` with text column first in DOM.

Fix: add `order-first lg:order-none` to the image panel, `order-last lg:order-none` to the text panel.

```tsx
{/* Image panel */}
<div className="order-first lg:order-none group/scroller ...">
  {/* animated scroll columns */}
</div>

{/* Text panel */}
<div className="order-last lg:order-none flex flex-col ...">
  {/* heading, body, mission statement */}
</div>
```

---

### Phase 12 — Spotlight whitespace-nowrap fix

**File:** `src/components/sections/Spotlight.tsx`

Both heading spans have `whitespace-nowrap`. On mobile (360px) long titles overflow horizontally.

```tsx
// Before:
className="block font-heading text-3xl font-bold tracking-tight whitespace-nowrap ..."
// After:
className="block font-heading text-3xl font-bold tracking-tight sm:whitespace-nowrap ..."
```

Apply to both the charcoal and brand-blue heading lines.

---

### Phase 13 — Culture mobile overflow fix

**File:** `src/components/sections/Culture.tsx`

The `h-[300vh]` parallax section uses vw-based absolute positioning. At 360px the images spill beyond screen edges.

```tsx
// Outer section:
<div className="relative h-[300vh] overflow-hidden" ref={container}>
```

Adding `overflow-hidden` clips the spilling images. The floating visual still renders; it's just clipped at the viewport edge.

---

### Phase 14 — FAQAccordion expand icon: left on mobile

**File:** `src/components/sections/FAQAccordion.tsx`

The expand/collapse icon is currently on the right. On mobile, move to the left (ergonomic right-thumb reach):

```tsx
{/* Trigger row: mobile left icon, desktop right icon */}
<div className="flex items-center gap-3">
  <ChevronDown className="md:hidden h-5 w-5 shrink-0 transition-transform ..." />
  <span>{question}</span>
  <ChevronDown className="hidden md:block ml-auto h-5 w-5 shrink-0 transition-transform ..." />
</div>
```

---

### Phase 15 — ContactModal: 100dvh keyboard fix

**File:** `src/components/ui/ContactModal.tsx`

Replace modal height with dynamic viewport height so it shrinks when the iOS virtual keyboard appears:

```tsx
// Modal container:
className="h-dvh overflow-y-auto ..."
// (was: h-screen or max-h-screen)
```

---

### Phase 16 — ContactUs: form inputs + autocomplete

**File:** `src/components/sections/ContactUs.tsx`

1. All form inputs get `text-base` minimum (prevents iOS zoom on focus):
   ```tsx
   className="... text-base ..."
   ```

2. Add semantic autocomplete attributes:
   - First name: `autoComplete="given-name"`
   - Company: `autoComplete="organization"`
   - Email: `autoComplete="email"`
   - Phone: `autoComplete="tel"`
   - Message: `autoComplete="off"`

---

### Phase 17 — Testimonials: auto height on mobile

**File:** `src/components/sections/Testimonials.tsx`

```tsx
// Before:
className="relative flex h-[460px] w-full items-center justify-center sm:h-[500px]"
// After:
className="relative flex min-h-[320px] w-full items-center justify-center sm:min-h-[460px] lg:min-h-[500px]"
```

---

### Phase 18 — 44px touch targets

Apply `min-h-[44px] min-w-[44px]` to all interactive elements that could be smaller:
- All `<Button>` variants — add to base Button component
- Icon-only buttons (carousel arrows, modal close, nav hamburger)
- Tag/chip filters in `TradeShowCalendarDirectory` and `BlogCategories`

**File:** `src/components/ui/Button.tsx` — add `min-h-[44px]` to base styles

---

### Phase 19 — prefers-reduced-motion

**ProofBar.tsx:**
```tsx
// Wrap animation in media query check:
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Pass to useStatsMarquee: if prefersReduced, don't animate
```

**AboutCoreValues.tsx (mobile snap version):**
The mobile CSS snap scroll has no animation — already fine.

**Blogs.tsx (deck layout):**
When reduced motion, render the grid layout at all sizes instead of the deck spread.

**globals.css:**
```css
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation-play-state: paused !important; }
}
```

---

### Phase 20 — ImageHero + VideoHero 2xl fix

**ImageHero.tsx:**
Already uses `px-4 md:px-6 lg:px-8` (G1 done). Add `max-w-screen-2xl mx-auto` to inner text wrapper.

**VideoHero.tsx:**
Already uses `px-4 md:px-6 lg:px-8`. Add `max-w-screen-2xl mx-auto` to inner content wrapper.

---

## Section-by-Section Fix Table (all 35)

| # | Section | Phases Applied |
|---|---------|---------------|
| 1 | ImageHero | Phase 5 (G1+G2), Phase 20 |
| 2 | VideoHero | Phase 5 (G1+G2+G3), Phase 4 (dvh), Phase 20 |
| 3 | Spotlight | Phase 5 (G1+G2+G3), Phase 12 (whitespace-nowrap) |
| 4 | CinematicSequence | Phase 4 (h-dvh), Phase 5 text padding only |
| 5 | ClientLogos | Phase 5 (G1+G2) |
| 6 | ProofBar | Phase 5 (G2+G3), Phase 19 (reduced-motion marquee) |
| 7 | WhoWeAre | Phase 5 (G1+G2+G3), Phase 11 (mobile reorder) |
| 8 | AboutCoreValues | Phase 8 (dual mobile/desktop layout), Phase 4 (h-dvh) |
| 9 | Culture | Phase 5 (G1+G2+G3), Phase 4 (h-dvh), Phase 13 (overflow-hidden) |
| 10 | ServicesStack | Phase 5 (G1+G2+G3) |
| 11 | FeatureCarouselSection | Phase 5 (G1+G2+G3) |
| 12 | RelatedServices | Phase 5 (G1+G2), responsive gap |
| 13 | StickyScroll | Phase 4 (h-dvh), Phase 5 (G1+G2), Phase 10 |
| 14 | BoothWhyChooseUs | Phase 9 (carousel snap), Phase 5 (G1+G2+G3) |
| 15 | CardsSection | Phase 6 (sm:grid-cols-2), Phase 5 (G1+G2+G3) |
| 16 | RentVsBuySection | Phase 5 (G1+G2+G3), Phase 6 (icon-grid 1-col mobile) |
| 17 | CorporateVideoIndustriesSection | Phase 5 (G1+G2), Phase 6 (pt-52 fix) |
| 18 | CorporateVideoPortfolioSection | Phase 5 (G1+G2+G3), Phase 6 (sm:grid-cols-2) |
| 19 | ProcessTimeline | Phase 5 (G1+G2+G3), no connector change |
| 20 | CaseStudies | Phase 5 (G1+G2+G3), Phase 6 (card heights) |
| 21 | CaseStudiesGrid | Phase 5 (G1+G2) |
| 22 | Testimonials | Phase 5 (G1+G2), Phase 17 (auto-height) |
| 23 | Events | Phase 5 (G1+G2+G3) |
| 24 | TradeShowCalendarDirectory | Phase 5 (G1+G2), Phase 18 (44px tags) |
| 25 | GlobalPresence | Phase 5 (G1+G2), Phase 6 (globe height) |
| 26 | Blogs | Phase 5 (G1+G2+G3), Phase 10 (deck height) |
| 27 | BlogsCarousel | Phase 9 (snap carousel), Phase 5 (G1+G2+G3) |
| 28 | Pricing | Phase 7 (dual layout) |
| 29 | FAQ | Phase 9 (snap carousel), Phase 5 (G1+G2+G3) |
| 30 | FAQAccordion | Phase 5 (G1+G2+G3), Phase 14 (left icon mobile) |
| 31 | ContactCinematicCTA | Phase 5 (G1+G2) |
| 32 | ContactUs | Phase 5 (G1+G2+G3), Phase 16 (inputs + autocomplete) |
| 33 | BlogCategories | Phase 5 (G1+G2+G3), Phase 18 (44px tags) |
| 34 | BlogsDirectory | Phase 5 (G1+G2) |
| 35 | LinkedInFeed | Phase 5 (G1+G2) |

---

## UI + Layout Components

| Component | Fix |
|-----------|-----|
| `Header.tsx` | Phase 2 (safe-area-inset-top), already fully responsive |
| `Footer.tsx` | Phase 2 (safe-area-inset-bottom), Phase 5 (G1 px-8 fix) |
| `Button.tsx` | Phase 18 (min-h-[44px] base) |
| `ContactModal.tsx` | Phase 15 (h-dvh) |
| `Heading.tsx` | Phase 3 (clamp() typography scale) |

## Items Components

| Item component | Fix |
|----------------|-----|
| `BasicCards.tsx` | Phase 5 G4 body text scale |
| `PricingCard.tsx` | No change — container handles snap width |
| `BoothWhyCard.tsx` | Phase 18 select-none on title; Phase 5 G4 |
| `CaseStudyCard.tsx` | Phase 18 select-none; Phase 5 G4 |
| `TestimonialCarouselCard.tsx` | Phase 5 G4 |

---

## Verification Plan

1. `npm run dev` — ensure dev server runs
2. Playwright visual tests at 360 / 768 / 1440 / 2560px for each phase
3. Overflow check: `document.documentElement.scrollWidth > document.documentElement.clientWidth`
4. iOS-specific checks:
   - Snap carousels swipe smooth, stop at last card (overscroll contained)
   - Fixed header sits below iPhone notch
   - Footer clears home indicator
   - ContactModal shrinks when keyboard opens
   - Form inputs don't trigger zoom on focus
5. Run `npm run lint`
6. Test manually at 390px (iPhone 14) and 820px (iPad Air)

---

## Critical Files

- `src/app/globals.css` — Phase 1 (touch globals) — highest impact
- `src/app/layout.tsx` — Phase 2 (viewport-fit=cover) — prerequisite for safe areas
- `src/components/ui/Heading.tsx` — Phase 3 (clamp typography) — affects all 35 sections
- `src/components/sections/AboutCoreValues.tsx` — Phase 8 (dual layout, most complex)
- `src/components/sections/Pricing.tsx` — Phase 7 (dual layout)
- `src/components/sections/StickyScroll.tsx` / `CinematicSequence.tsx` / `Culture.tsx` — Phase 4 (h-dvh)
- `src/components/sections/WhoWeAre.tsx` — Phase 11 (mobile reorder)
- `src/components/sections/BlogsCarousel.tsx` — Phase 9 + header stack fix
- `src/components/sections/FAQAccordion.tsx` — Phase 14 (icon left mobile)
- `src/components/sections/ContactUs.tsx` — Phase 16 (inputs + autocomplete)
- `src/components/ui/ContactModal.tsx` — Phase 15 (dvh)
- `src/components/ui/Button.tsx` — Phase 18 (44px touch target)

---

## CardSection Consolidation

### Context

Nine section components share nearly identical structure: a centered heading block, optional description, and a card container that renders either a responsive grid or a scroll carousel. This duplication has led to inconsistent responsive behavior (some sections have mobile snap, others don't), different arrow styles, and dead code (`RentVsBuySection` has two unused layout variants). Consolidating into a single `CardSection` component enforces consistent layout and removes the redundant shells.

**Sections deleted (callers use `CardSection` directly):**
- `CardsSection.tsx` (2 call sites)
- `LinkedInFeed.tsx` (2 call sites)
- `RentVsBuySection.tsx` (2 call sites; dead `split` + `value-grid` layouts dropped)

**Sections refactored to thin wrappers around `CardSection`:**
- `CorporateVideoPortfolioSection.tsx` — complex article card markup stays in file
- `BlogsCarousel.tsx` — 13 call sites; keeps `headingAction="View All Blogs"` pattern
- `Pricing.tsx` — custom gradient bg + sparkle heading decorations stay in file

**Sections kept as-is (complex internal state, not worth abstracting):**
- `BoothWhyChooseUs.tsx` — infinite carousel + autoplay + pointer swipe
- `FAQ.tsx` — auto-detect overflow; layout mode tightly coupled to `FAQCard` render
- `Events.tsx` — date formatting utility functions + card flip state
- `Testimonials.tsx` — 3D Swiper coverflow (excluded from this effort)

**New item file:** `src/components/items/LinkedInCard.tsx` — extracted from `LinkedInFeed.tsx`

---

### CardSection component

**File:** `src/components/sections/CardSection.tsx`

```tsx
export interface CardSectionProps {
  children: ReactNode;
  className?: string;               // overrides "bg-brand-gray" on the <section>
  cols?: 2 | 3;                    // desktop columns (default: 3)
  description?: string;
  heading?: ReactNode;
  headingAction?: ReactNode;        // rendered right of heading when headingAlign="left"
  headingAlign?: "center" | "left"; // default: "center"
  id?: string;
  layout?: "carousel" | "grid";    // default: "grid"
  showArrows?: boolean;            // default: true in carousel mode
}
```

**Section wrapper (shared by both modes):**
```tsx
<section className={cn("bg-brand-gray py-12 md:py-16 lg:py-20", className)} id={id}>
  <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
    {/* heading block */}
    {/* grid or carousel */}
  </div>
</section>
```

**Heading block:**
- `headingAlign="center"` (default): `<Heading as="h2">` centered; `headingAction` (if provided) rendered centered below description
- `headingAlign="left"`: `flex items-start justify-between gap-4` row — heading left, `headingAction` right; description below, left-aligned

**Grid layout (`layout="grid"`, default):**
```tsx
<div className={cn("grid gap-6",
  cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
)}>
  {children}
</div>
```

**Carousel layout (`layout="carousel"`):**
CSS scroll-snap at all screen sizes. Each child auto-wrapped via `Children.map`:
```tsx
const scrollRef = useRef<HTMLDivElement>(null);
const handleScroll = (dir: 1 | -1) => {
  const card = scrollRef.current?.querySelector<HTMLElement>("[data-card-scroll]");
  scrollRef.current?.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 20), behavior: "smooth" });
};

<div
  className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
  ref={scrollRef}
>
  {Children.map(children, (child, i) => (
    <div
      className={cols === 2
        ? "snap-start shrink-0 w-[85%] sm:w-[72%] md:w-[calc(50%-10px)]"
        : "snap-start shrink-0 w-[85%] sm:w-[72%] md:w-[46%] lg:w-[calc(33.33%-14px)]"
      }
      data-card-scroll
      key={i}
    >
      {child}
    </div>
  ))}
</div>

{showArrows !== false && (
  <div className="mt-8 flex justify-center gap-4">
    <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:bg-brand-blue hover:text-white hover:border-brand-blue min-h-[44px]"
      onClick={() => handleScroll(-1)}>
      <ChevronLeft className="h-5 w-5" />
    </button>
    <button className="..." onClick={() => handleScroll(1)}>
      <ChevronRight className="h-5 w-5" />
    </button>
  </div>
)}
```

Note: `"use client"` required (uses `useRef`, `Children.map`).

---

### Deletion migrations

#### CardsSection.tsx
Call sites: `src/app/demo/page.tsx`, `src/app/services/booth-services/trade-show-booth-builder/page.tsx`

```tsx
// Before:
<CardsSection heading="..." items={items} />

// After:
<CardSection heading="..." layout="grid">
  {items.map(item => <BasicCards key={item.title} {...item} />)}
</CardSection>
```

#### LinkedInFeed.tsx
Call sites: `src/app/demo/page.tsx`, `src/components/templates/BlogPage.tsx`

Extract `LinkedInCard` (inline sub-component in LinkedInFeed) to `src/components/items/LinkedInCard.tsx`. It takes a `post` prop and owns its Framer Motion viewport animations.

```tsx
// Before:
<LinkedInFeed />

// After:
import { LinkedInCard } from "@/components/items/LinkedInCard";
import { LINKEDIN_POSTS } from "@/content/linkedinPosts";

<CardSection heading="Follow Us on LinkedIn" layout="grid">
  {LINKEDIN_POSTS.map(post => <LinkedInCard key={post.id} post={post} />)}
</CardSection>
```

#### RentVsBuySection.tsx
Call sites: `src/app/demo/page.tsx`, `src/app/services/booth-services/event-booth-rental/page.tsx`

Only the `icon-grid` layout is used in both call sites. The `split` and `value-grid` branches are dead code and are dropped. Each reason item (icon + title + description) is inlined at call sites; the `ICON_MAP` constant moves to a shared util or is inlined. Border styling (bottom on mobile, right on desktop) is preserved per item.

```tsx
// Before:
<RentVsBuySection heading="..." reasons={reasons} />

// After:
<CardSection heading="...">
  {reasons.map(reason => (
    <div key={reason.title} className="flex items-start gap-4 border-b py-6 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0">
      <span className="shrink-0 text-brand-blue">{/* icon */}</span>
      <div>
        <h3 className="font-bold">{reason.title}</h3>
        <p className="text-sm text-brand-charcoal/70">{reason.description}</p>
      </div>
    </div>
  ))}
</CardSection>
```

---

### Refactor migrations

#### CorporateVideoPortfolioSection.tsx
Replace internal `<section>` wrapper + grid with `<CardSection>`. Article card markup stays internal.

```tsx
export const CorporateVideoPortfolioSection = ({ heading, items }: CorporateVideoPortfolioSectionProps) => (
  <CardSection className="bg-[#111111] text-white" heading={heading} layout="grid">
    {items.map(item => (
      <article key={item.title} className="group ...">
        {/* existing image + client badge + title + CTA markup — unchanged */}
      </article>
    ))}
  </CardSection>
);
```

#### BlogsCarousel.tsx
Replace Framer Motion JS infinite-loop carousel with `CardSection layout="carousel"`. This changes desktop behavior from a tracked infinite loop to CSS snap scroll — a deliberate simplification that also resolves the Phase 9 mobile snap requirement automatically. All 13 call sites unchanged.

```tsx
export const BlogsCarousel = ({ heading, posts }: BlogsCarouselProps) => (
  <CardSection
    heading={heading}
    headingAction={<Button href="/blogs" variant="secondary">View All Blogs</Button>}
    headingAlign="left"
    layout="carousel"
  >
    {posts.map(post => <BlogsCarouselCard key={post.id} post={post} />)}
  </CardSection>
);
```

Remove all state (`activeIndex`, `cardStep`, `offsetRef`, etc.), the tripled `extended` array, `computeCardStep`, `getPerView`, `slideTo`, and the `motion.div` track.

#### Pricing.tsx
Replace internal snap-scroll + grid dual layout with `CardSection layout="carousel"` (CSS snap at all sizes). Custom gradient background passed via `className`. Sparkle heading decorations wrapped around the `heading` ReactNode.

```tsx
export const Pricing = ({ title = DEFAULT_TITLE, description, tag, tiers = DEFAULT_TIERS }: PricingProps) => (
  <CardSection
    className="relative overflow-hidden bg-[...existing gradient...]"
    description={description}
    heading={
      <span className="relative inline-block">
        <Sparkles className="absolute -top-5 -left-6 h-5 w-5 text-brand-cyan opacity-70 animate-pulse" />
        {title}
        <Star className="absolute -bottom-3 right-0 h-4 w-4 text-yellow-400 animate-pulse" />
      </span>
    }
    layout="carousel"
    cols={3}
  >
    {tiers.map(tier => <PricingCard key={tier.name} tier={tier} />)}
  </CardSection>
);
```

Read the actual Pricing.tsx decorations before implementation to confirm icon placement.

---

### Verification

1. `npm run dev` — confirm dev server starts without TypeScript errors
2. Navigate to `/demo` — all card grid sections render with correct columns and spacing
3. Carousel sections: arrows scroll by exactly one card width; content does not jump
4. `BlogsCarousel` on a service page — heading + "View All Blogs" renders as flex row (left + right)
5. `Pricing` — sparkle decorations visible around title
6. Mobile at 360px (Chrome devtools) — all grid sections stack to 1-col; all carousel sections show snap scroll with arrow buttons
7. `npm run lint`

### Critical files

- `src/components/sections/CardSection.tsx` — new
- `src/components/items/LinkedInCard.tsx` — new (extracted)
- `src/components/sections/BlogsCarousel.tsx` — refactored (removes ~80 lines of Framer Motion carousel state)
- `src/components/sections/CorporateVideoPortfolioSection.tsx` — refactored
- `src/components/sections/Pricing.tsx` — refactored
- `src/components/sections/CardsSection.tsx` — deleted
- `src/components/sections/LinkedInFeed.tsx` — deleted
- `src/components/sections/RentVsBuySection.tsx` — deleted
- `src/app/demo/page.tsx` — 3 call sites updated (CardsSection, LinkedInFeed, RentVsBuySection)
- `src/components/templates/BlogPage.tsx` — LinkedInFeed → CardSection + LinkedInCard
- `src/app/services/booth-services/trade-show-booth-builder/page.tsx` — CardsSection → CardSection
- `src/app/services/booth-services/event-booth-rental/page.tsx` — RentVsBuySection → CardSection
