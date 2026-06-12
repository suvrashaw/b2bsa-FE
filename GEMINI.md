# Agent Instructions — Google Antigravity / Gemini

This file is the Antigravity-specific override layer. Rules here take precedence over AGENTS.md
within Google Antigravity and Gemini CLI.

## Clarification Protocol

**Before starting any task — no matter how small — stop and ask questions using Antigravity's
native interactive question UI.**

- Be the biggest skeptic. Never assume scope, target, behavior, or intent.
- Before writing a single line of code or calling any tool, collect every ambiguity:
  - Which file or component is the target?
  - What is the exact expected behavior or output?
  - What are the edge cases?
  - What should NOT change?
  - What is the design intent (layout, color, animation, data)?
  - Are there constraints (performance, accessibility, existing APIs)?
- Surface all questions at once as a single interactive prompt in the Antigravity UI.
- Do not proceed until the user has explicitly answered every question.
- This rule is mandatory in all Antigravity modes: chat, agentic task runner, sub-agent
  orchestration, and terminal (Antigravity CLI / Gemini CLI).
- Guessing is never acceptable. If in doubt, ask.

## Project identity

- GitHub account: suvrashaw
- Figma account: Suvra Shaw personal account
- Figma file key: ofyVIoZRrDx0z1ZBYR7dQH
- Project path: `/Users/suvra/Documents/B2BSA2`

## Stack

- Next.js · React 19 · TypeScript · Tailwind CSS v4
- Framer Motion · GSAP · Three.js
- Swiper · Radix Slot · CVA · clsx · tailwind-merge

## Rules

All rules in AGENTS.md apply here. Additional overrides:

- Do not use Asanify or work Figma files.
- Do not use the work GitHub account.
- Use existing components before creating new ones.
- Prefer Tailwind utilities and design tokens over raw values.
- Keep animation code isolated and readable.
- Do not change package versions unless explicitly asked.
- Do not commit secrets.
- Run `npm run lint` before finalizing code changes when practical.
- Always tell the user exactly what changes are planned and wait for their explicit approval before editing any code.
