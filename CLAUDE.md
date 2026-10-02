@AGENTS.md

## Portfolio brochures (PDF case studies)
- Source of truth: `~/Portfolio/` (built by the global `portfolio-case-study` skill from each project's own session). This repo cannot read it directly at runtime.
- Run `npm run sync:brochures` to copy them in: PDFs and images go to `public/brochures/`, metadata to `data/brochures.json` (slug, title, subtitle, client, year, summary, role, duration, problem, solution, features, security, outcomes, stack, accent, live, caseStudyPdf, carouselPdf, cover, thumbnail, gallery; plus `portfolioPdf` for the combined brochure).
- Access it through `lib/brochures.ts`. A slug in brochures.json takes precedence over `data/caseStudies.ts`: `/projects/[slug]` renders `components/brochure-case-study.tsx` for it, and the home page's Featured Work and the Projects grid list brochure projects first.
- Build brochure UI from `data/brochures.json` (import it; don't hardcode). Link PDFs with `href` + `download`/`target="_blank"`; use `cover`/`thumbnail` as card images.
- Re-run the sync (and commit `public/brochures` + `data/brochures.json`) whenever ~/Portfolio changes.

## Design system and content (redesign, 2026-10)
- Tokens live in `app/globals.css` (`:root` + `.dark`, exposed via `@theme inline`): use `bg-paper/surface/sunken`, `text-ink/ink-soft/muted`, `border-line`, `bg-accent`, `text-gold`, `bg-hero`… plus component classes `container-page`, `eyebrow`, `display`, `btn btn-primary|btn-outline|btn-hero-primary|btn-on-hero`, `card`, `chip`, `link`. No inline style objects or hex colours (a project's own accent from data is the only exception).
- Pages are server components; motion only through `components/reveal.tsx` (MotionConfig honours reduced motion). Dark mode via next-themes class.
- Content sources: identity/links in `lib/site.ts` (no phone number on the site), career facts in `lib/career.ts`, all projects via `lib/projects.ts` (brochures first; `statusOverrides` for live-without-URL / runs-locally). Only verifiable figures.
- Routes: `/`, `/projects`, `/projects/[slug]` (SSG + per-page metadata/OG), `/about`, `/contact`; `/skills` and `/services` redirect in `next.config.ts`.
- CV: source `~/Portfolio/cv/cv.html` (original CV layout). The full PDF (with phone) lives in `~/Portfolio/cv/`; the site serves a phone-free copy at `public/cv/edward-gemadzi-cv.pdf` (`site.cv`). Re-render both after editing the source; never put the phone number on the site.
