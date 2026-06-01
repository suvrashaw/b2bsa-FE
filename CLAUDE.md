# Agent Instructions

This is the B2BSA2 personal project.

## Clarification Protocol

**Before starting any task — no matter how small — stop and ask questions.**

- Be a skeptic. Treat every request as incomplete until proven otherwise.
- Identify every ambiguity, unstated assumption, and missing detail before touching any file or tool.
- Ask about: target file, intended behavior, scope boundaries, edge cases, design intent, which component/page, expected output format, and anything else that could produce a wrong result.
- Ask ALL questions at once using the `AskUserQuestion` tool so they render as interactive UI in the IDE.
- Do not proceed until every question has an explicit answer from the user.
- This rule is mandatory whether operating from the terminal CLI or inside the VSCode / Antigravity extension.
- Guessing is never acceptable. If in doubt, ask.

## Project identity

- GitHub account: suvrashaw
- Git email: suvrashaw@yahoo.com
- Figma account: Suvra Shaw personal account
- Figma file: https://www.figma.com/design/ofyVIoZRrDx0z1ZBYR7dQH/B2B-Sales-Arrow
- Figma file key: ofyVIoZRrDx0z1ZBYR7dQH
- Project path: `/Users/suvra/Documents/B2BSA2`

## MCP servers

Use only the project-local MCP servers configured in this repository:

- figma
- figma-console
- framelink
- github
- playwright
- 21st-dev
- shadcn
- magicui
- vercel-v0
- tailwindcss
- chrome-devtools
- chrome_devtools

These MCP servers must load credentials from this project’s `.env.mcp`.

The Figma MCP context must use the personal Suvra Shaw Figma account and the B2B Sales Arrow file listed above.

Figma-specific local MCP wrappers:

- figma: `/Users/suvra/Documents/B2BSA2/scripts/mcp-figma.sh`
- figma-console: `/Users/suvra/Documents/B2BSA2/scripts/mcp-figma-console.sh`
- framelink: `/Users/suvra/Documents/B2BSA2/scripts/mcp-framelink.sh`

## Stack

- Next.js
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP
- Three.js
- Swiper
- Radix Slot
- CVA
- clsx
- tailwind-merge

## Rules

- Do not use Asanify or work Figma files.
- Do not use the work GitHub account.
- Do not use Vue or Vuetify patterns.
- Use existing components before creating new ones.
- Prefer Tailwind utilities and design tokens over raw values.
- Keep animation code isolated and readable.
- Do not change package versions unless explicitly asked.
- Do not commit secrets.
- Run `npm run lint` before finalizing code changes when practical.
