# Project Items Architecture

The B2BSA2 component architecture follows this flow:

`src/content/` -> `src/components/items/` -> `src/components/sections/` -> `src/app/`

## Layers

- `src/content/`: data objects, page copy, shared content collections, and typed content models.
- `src/components/items/`: single-item card and list-item components. Each component renders one repeated unit, such as a pricing tier, blog card, service card, event card, FAQ card, case-study card, related-service link, or testimonial card.
- `src/components/sections/`: layout containers that import content and item components, handle section-level state, filtering, sorting, animation orchestration, and render full page sections.
- `src/app/`: route-level pages that compose sections and templates into complete user-facing pages.

## Rule

Repeated card-like units should live in `src/components/items/`. Sections should not own large inline card components when that UI can be extracted as a reusable single-item component.
