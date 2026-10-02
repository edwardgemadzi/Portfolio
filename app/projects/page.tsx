import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Download } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ProjectCard } from '@/components/project-card'
import { allProjects } from '@/lib/projects'
import { portfolioPdf } from '@/lib/brochures'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies of secure web platforms I have built: payments, member portals, leave management and more, with the problem, architecture and security decisions behind each.',
}

export default function Projects() {
  // Projects with a cover get a full card; the rest are listed compactly as earlier work.
  const featured = allProjects.filter((p) => p.cover)
  const earlier = allProjects.filter((p) => !p.cover)

  return (
    <>
      <section className="container-page pt-16 md:pt-24">
        <p className="eyebrow">Work</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">Projects and case studies</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Production platforms with real users, real money and real personal data. Each case study covers the problem, the architecture and the security decisions.
        </p>
        <a href={portfolioPdf} download className="btn btn-outline mt-8">
          <Download size={16} aria-hidden /> Download full portfolio (PDF)
        </a>
      </section>

      <section aria-label="Selected projects" className="container-page py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06} className="[&>*]:h-full">
              <ProjectCard project={p} headingLevel="h2" />
            </Reveal>
          ))}
        </div>
      </section>

      {earlier.length > 0 && (
        <section aria-labelledby="earlier-heading" className="container-page">
          <p className="eyebrow">Earlier work</p>
          <h2 id="earlier-heading" className="display mt-3 text-3xl">Earlier projects and contributions</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {earlier.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group grid gap-1 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8">
                  <span>
                    <span className="font-serif text-lg font-semibold tracking-tight text-ink group-hover:text-accent">{p.title}</span>
                    <span className="mt-1 block text-[0.9375rem] leading-relaxed text-muted">{p.summary}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                    {p.role === 'contributed' ? 'Contributor' : p.status === 'live' ? 'Live' : 'Case study'}
                    <ArrowUpRight size={16} aria-hidden className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
