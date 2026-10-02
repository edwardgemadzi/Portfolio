// One list of every project on the site: brochure projects (data/brochures.json)
// first, then the older hand-written case studies (data/caseStudies.ts).
import { brochures } from '@/lib/brochures'
import { caseStudies } from '@/data/caseStudies'

export type ProjectSummary = {
  slug: string
  title: string
  summary: string
  client: string | null
  year: string | null
  stack: string[]
  accent: string | null
  cover: string | null
  live: string | null
  caseStudyPdf: string | null
  role: 'built' | 'contributed'
  // 'live' = in production (with or without a public URL); 'local' = runs on the owner's machine
  status: 'live' | 'local' | null
}

// Covers made for projects that don't have a brochure yet (public/projects/).
const extraCovers: Record<string, { cover: string; accent: string }> = {
  'leave-manager': { cover: '/projects/leave-manager-cover.png', accent: '#4f46e5' },
}

const realUrl = (url: string | null | undefined) => (url && url !== '#' ? url : null)

// Status confirmed by Edward (2026-10-02) for projects whose data has no public URL.
// GroupFund is live but private (anonymous client), so it has no link.
const statusOverrides: Record<string, 'live' | 'local'> = {
  groupfund: 'live',
  'trading-desk': 'local',
}

const statusFor = (slug: string, live: string | null) => statusOverrides[slug] ?? (live ? 'live' : null)

const fromBrochures: ProjectSummary[] = brochures.map((b) => ({
  slug: b.slug,
  title: b.title,
  summary: b.subtitle,
  client: b.client,
  year: b.year,
  stack: b.stack,
  accent: b.accent,
  cover: b.cover,
  live: realUrl(b.live),
  caseStudyPdf: b.caseStudyPdf,
  role: 'built',
  status: statusFor(b.slug, realUrl(b.live)),
}))

const fromCaseStudies: ProjectSummary[] = caseStudies
  .filter((c) => !brochures.some((b) => b.slug === c.slug))
  .map((c) => ({
    slug: c.slug,
    title: c.title,
    summary: c.tagline,
    client: null,
    year: null,
    stack: c.stack,
    accent: extraCovers[c.slug]?.accent ?? null,
    cover: extraCovers[c.slug]?.cover ?? null,
    live: realUrl(c.links.live),
    caseStudyPdf: null,
    role: c.status === 'contributing' ? 'contributed' : 'built',
    status: statusFor(c.slug, realUrl(c.links.live)),
  }))

export const allProjects: ProjectSummary[] = [...fromBrochures, ...fromCaseStudies]

export const projectStats = {
  total: allProjects.length,
  live: allProjects.filter((p) => p.status === 'live').length,
}
