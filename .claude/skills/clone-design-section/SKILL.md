---
name: clone-design-section
description: Capture a section's visual design pattern (layout, spacing, typography, motion) from a reference website and reimplement it in this project's own components, design tokens, and content. Use when the user points to a reference URL and asks to match, copy, or update a section (hero, CTA, process/approach, work grid, etc.) to look like it.
---

# Clone Design Section

Reproduce the *design pattern* of a section from a reference site — never its literal
text, images, or code. This project's own copy (from `src/data/*.ts`), fonts
(Urbanist), color tokens (`src/app/globals.css`), and `rounded-none` convention
always take precedence over whatever the reference uses.

## Steps

1. **Capture the reference section.**
   - Navigate to the reference URL with the Browser tools.
   - Screenshot the target section at desktop width, then at `resize_window`
     mobile width. Scroll-triggered content may need `scrollIntoView` on a
     ref or a real `computer` scroll — a JS `window.scrollTo` jump can skip
     the animation trigger and leave elements blank.
   - Pull `read_page` (accessibility tree) for the section to see real DOM
     structure, spacing hierarchy, and element order — more reliable than
     eyeballing a screenshot alone.

2. **Extract the pattern, not the content.** Note down, structurally:
   - Layout: flex/grid axis, column count, alignment, how it reflows on mobile.
   - Spacing rhythm: gap sizes relative to each other (tight vs. generous).
   - Typography scale: relative sizes/weights of heading vs. body vs. label text.
   - Color/contrast usage: what's emphasized (fill, border, muted text).
   - Any motion: entrance animation, hover state, looping/scroll effects.
   - Do **not** note or reuse their literal copywriting, photography, icons,
     or brand assets — only the structural/visual pattern.

3. **Map onto this project's system before writing code:**
   - Colors → existing tokens only (`bg-foreground`, `bg-surface`, `border-border`, `text-muted`, etc.) — no new hex values.
   - Radius → `rounded-none` (this site's fixed 0px convention).
   - Font → inherited Urbanist, no new font-family.
   - Copy → pull from `src/data/resume.ts` / `projects.ts` / `blog.ts`, or write new copy in the same voice as existing sections — never the reference's sentences.
   - Motion → reuse `src/components/motion/Reveal.tsx` and `Stagger.tsx` rather than inventing a new animation primitive, unless the pattern genuinely needs something new (e.g. a looping marquee, which already exists in `WorkCarouselCard.tsx`).

4. **Implement** by editing the existing component file(s) for that section
   (e.g. `src/components/home/ClosingCta.tsx`, `src/components/home/Process.tsx`)
   rather than creating parallel one-off components, unless the section doesn't
   exist yet.

5. **Verify**: `npm run lint` and `npm run build` must pass clean. Then check
   the live page in the Browser at desktop and mobile width. If a computer-tool
   scroll/click seems to silently do nothing or land somewhere unexpected,
   re-confirm state with `window.location.href` / `getComputedStyle` via
   `javascript_tool` rather than trusting a single screenshot — long sessions
   on one tab can drift; open a fresh tab if a check looks inconsistent twice.

## Guardrail

If the reference section's actual sentences, taglines, or specific numbers
are tempting to reuse verbatim, stop — rewrite in the site's own voice instead.
The goal is a matching *feel*, built from this project's real content and
tokens.
