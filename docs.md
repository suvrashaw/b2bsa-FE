# Content Misalignment Fixes — Spec: docs/content.md + docs/home.md

8 remaining misalignments across 5 files. Every visible word of marketing copy must come verbatim from the spec.

---

## FIX 1 — About page: Timeline item 1 comma → em-dash

**File:** `src/content/about.tsx` · `ABOUT_ORIGIN_TIMELINE.items[0].content`

**Spec (content.md PAGE 25):**
> "...significant investment in events, campaigns, and market presence **— but** fragmented execution..."

**Code:**
> "...significant investment in events, campaigns, and market presence**, but** fragmented execution..."

**Fix:** Change `, but` → ` — but` inside the JSX `<p>` tag.

---

## FIX 2 — Industry Events: CTA banner em-dash removed

**File:** `src/app/services/global-event-solutions/industry-events/page.tsx`

**Spec (content.md PAGE 4 CTA BANNER):**
> "The strongest strategy is not about showing up everywhere — it is about choosing the rooms where your buyers already gather."

**Code (wrong — split changes punctuation and capitalisation):**
```tsx
title: "The strongest strategy is not about showing up everywhere.",
description: "It is about choosing the rooms where your buyers already gather.",
```

**Fix:**
```tsx
title: "The strongest strategy is not about showing up everywhere — it is about choosing the rooms where your buyers already gather.",
description: "",
```

---

## FIX 3 — Corporate Video Production: CTA banner em-dash removed

**File:** `src/app/services/media-production/corporate-video-production/page.tsx`

**Spec (content.md PAGE 11 CTA BANNER):**
> "When your offering is complex, corporate video makes it clear — with the production quality enterprise buyers expect."

**Code (wrong — split changes punctuation and capitalisation):**
```tsx
title: "When your offering is complex, corporate video makes it clear.",
description: "With the production quality enterprise buyers expect.",
```

**Fix:**
```tsx
title: "When your offering is complex, corporate video makes it clear — with the production quality enterprise buyers expect.",
description: "",
```

---

## FIX 4 — Contact page: `<WhoWeAre>` section not in spec — remove

**File:** `src/app/contact/page.tsx` renders `<WhoWeAre {...CONTACT_WHO_WE_ARE} />`

**Problem:** content.md PAGE 26 has no "Why Brands Trust Us" section. The quote and stats are entirely invented:
> "Every engagement begins with a single conversation. That first call has generated over $1.2 billion in pipeline for our clients."

This quote does not appear anywhere in content.md or home.md.

**Fix:** Remove `<WhoWeAre {...CONTACT_WHO_WE_ARE} />` from contact/page.tsx. Remove `CONTACT_WHO_WE_ARE` export from contact.tsx.

---

## FIX 5 — Contact page: `<FAQ>` section not in spec — remove

**File:** `src/app/contact/page.tsx` renders `<FAQ {...CONTACT_FAQ} />`

**Problem:** content.md PAGE 26 has no FAQ. The 5 Q&As (pricing, locations, turnaround, minimum, onboarding) are invented — none appear in content.md or home.md.

**Fix:** Remove `<FAQ {...CONTACT_FAQ} />` from contact/page.tsx. Remove `CONTACT_FAQ` export from contact.tsx.

---

## FIX 6 — Contact page: "What Happens Next" in spec but missing

**Spec (content.md PAGE 26 — "WHAT HAPPENS NEXT"):**
1. We review your inquiry within one business day and confirm receipt.
2. A growth architect contacts you to schedule a discovery call at your preferred time.
3. We prepare a customised strategy proposal aligned to your objectives, timeline, and budget.
4. Programme kickoff once scope and approach are agreed.

**Fix:**
- Add `CONTACT_NEXT_STEPS` content object to `src/content/contact.tsx`
- Render using existing `<Timeline>` component in contact/page.tsx

```tsx
export const CONTACT_NEXT_STEPS = {
  heading: "What Happens Next",
  description: "",
  items: [
    {
      title: "Step 1",
      content: <p>We review your inquiry within one business day and confirm receipt.</p>,
    },
    {
      title: "Step 2",
      content: <p>A growth architect contacts you to schedule a discovery call at your preferred time.</p>,
    },
    {
      title: "Step 3",
      content: <p>We prepare a customised strategy proposal aligned to your objectives, timeline, and budget.</p>,
    },
    {
      title: "Step 4",
      content: <p>Programme kickoff once scope and approach are agreed.</p>,
    },
  ],
};
```

---

## FIX 7 — Contact page: CTA Banner in spec but missing

**Spec (content.md PAGE 26 — "CTA BANNER"):**
> "One conversation can clarify your entire growth strategy. Tell us what you are trying to achieve. We will define the right path."
> CTA: "Book a Strategy Consultation"

No `<CTABanner>` is rendered on the contact page.

**Fix:**
- Add `CONTACT_CTA` export to `src/content/contact.tsx`
- Render `<CTABanner {...CONTACT_CTA} />` at the bottom of contact/page.tsx

```tsx
export const CONTACT_CTA = {
  ctaHref: "/contact",
  ctaLabel: "Book a Strategy Consultation",
  description: "Tell us what you are trying to achieve. We will define the right path.",
  title: "One conversation can clarify your entire growth strategy.",
};
```

---

## FIX 8 — About page: Remove unused exports with invented content

**File:** `src/content/about.tsx`

`ABOUT_CASE_STUDIES`, `ABOUT_TESTIMONIALS`, and `ABOUT_CONTACT` are exported but **not rendered** anywhere in the about page. They contain invented content not from content.md PAGE 25. Dead code — remove them.

---

## Execution Order

1. `src/content/about.tsx` — em-dash fix (FIX 1) + remove 3 unused exports (FIX 8)
2. `src/app/services/global-event-solutions/industry-events/page.tsx` — CTA banner merge (FIX 2)
3. `src/app/services/media-production/corporate-video-production/page.tsx` — CTA banner merge (FIX 3)
4. `src/content/contact.tsx` — remove CONTACT_WHO_WE_ARE + CONTACT_FAQ; add CONTACT_NEXT_STEPS + CONTACT_CTA (FIX 4, 5, 6, 7)
5. `src/app/contact/page.tsx` — remove WhoWeAre + FAQ; add Timeline + CTABanner (FIX 4, 5, 6, 7)
6. `npm run lint`

## Verification

- `/about` → Timeline item 1 reads "market presence — but fragmented" (em-dash, not comma)
- `/services/industry-events` → CTA banner is one sentence with em-dash
- `/services/corporate-video-production` → CTA banner is one sentence with em-dash
- `/contact` → page renders: Hero → ClientLogos → ContactForm → Timeline ("What Happens Next") → CTABanner
- `/contact` → no "Why Brands Trust Us" section, no FAQ
- `/contact` → CTABanner reads "One conversation can clarify your entire growth strategy..."
