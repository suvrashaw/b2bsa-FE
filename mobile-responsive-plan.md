# Mobile Responsiveness Fix Plan

This document outlines the detailed plan and responsive ruleset to fix visual and layout issues on mobile devices for the B2BSA2 application. Based on an automated walkthrough of the `/demo` page and static code analysis, several sections currently use hard-coded paddings and text sizes that do not adapt to smaller viewports.

## Mobile Responsive Ruleset

### 1. Base Container Spacing
Currently, many sections hardcode `px-8` and `py-20`. On mobile, this creates too much whitespace and restricts content width.
- **Horizontal Padding (X-axis):** Update `px-8` to `px-4 md:px-6 lg:px-8`
- **Vertical Padding (Y-axis):** Update `py-20` to `py-12 md:py-16 lg:py-20`

### 2. Typography
Many headings are locked to large sizes like `text-5xl` or `text-6xl`, which can cause text overflow or awkward wrapping on 375px screens.
- **Hero/Main Headings (H1):** Update to `text-4xl md:text-5xl lg:text-6xl`
- **Section Headings (H2):** Update to `text-3xl md:text-4xl lg:text-5xl`
- **Body Text:** Use `text-base md:text-lg`
- **Line Heights:** Ensure `leading-tight` or `leading-snug` for large text, and `leading-relaxed` for body text.

### 3. Layout and Wrapping
Flex and Grid containers need to collapse properly.
- **Grids:** Ensure `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` or `lg:grid-cols-4` depending on the component.
- **Flexbox:** Where image and text sit side-by-side, use `flex-col md:flex-row`.
- **Reverse Wrapping:** In sections where the image should appear above the text on mobile (or vice-versa), use `flex-col-reverse md:flex-row`.

### 4. Components & Corner Radius
- **Buttons / Touch Targets:** Make full width on mobile (`w-full md:w-auto`). Ensure all interactive elements have a minimum height of `44px` for touch-friendliness (`min-h-[44px]`).
- **Cards & Images:** Soften corner radiuses on mobile to maximize space. Update `rounded-[2rem]` or `rounded-3xl` to `rounded-2xl md:rounded-[2rem]`.
- **Carousels/Sliders:** Ensure mobile view allows touch dragging without horizontal window scroll (`overflow-x-auto snap-x snap-mandatory` or Swiper config adjustments).

## Proposed Changes

We will systematically update the components in `src/components/sections/` to implement the above ruleset.

### Core Structure Components
Applying spacing and typography fixes to global sections:
- `TextHero.tsx`
- `VideoHero.tsx`
- `ImageHero.tsx`
- `WhoWeAre.tsx`
- `AboutCoreValues.tsx`

### Service & Content Components
Applying responsive grids, flex direction, and card corner rules:
- `CardsSection.tsx`
- `FeatureCarouselSection.tsx`
- `BoothWhyChooseUs.tsx`
- `CaseStudiesGrid.tsx`
- `CorporateVideoIndustriesSection.tsx`
- `CorporateVideoPortfolioSection.tsx`

### Utility & Layout Components
Applying padding and spacing fixes:
- `FAQ.tsx`
- `ProcessTimeline.tsx`
- `RentVsBuySection.tsx`
- `Testimonials.tsx`
- `ClientLogos.tsx`

## Verification Plan

### Manual Verification
1. Open the `/demo` route locally in the browser.
2. Use Chrome DevTools (or similar) to toggle the device toolbar.
3. Test at `375x812` (iPhone SE/12 mini size) and verify that:
   - No horizontal scrolling occurs (no overflowing elements).
   - Text is legible and scales appropriately.
   - Touch targets (buttons/links) are easily tappable.
   - Grid and Flex containers stack vertically on mobile.
4. Scale up viewport to verify desktop layouts (`1024px` and above) remain intact.
