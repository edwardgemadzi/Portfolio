import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import type { CaseStudy } from '@/data/caseStudies'

function SideList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="card p-6">
      <h3 className="border-b border-line pb-3 font-serif text-lg font-semibold">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function LegacyCaseStudy({ project, cover }: { project: CaseStudy; cover?: string | null }) {
  const live = project.links.live && project.links.live !== '#' ? project.links.live : null
  const eyebrow = live ? 'Live in production' : project.status === 'contributing' ? 'Contributing developer' : 'Case study'

  return (
    <>
      <section className="bg-hero text-hero-ink">
        <div className="container-page py-14 md:py-20">
          <Link href="/projects" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-hero-muted hover:text-hero-ink">
            <ArrowLeft size={14} aria-hidden /> Back to work
          </Link>
          <p className="eyebrow mt-6 !text-hero-gold">{eyebrow}</p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2rem,5vw,3.5rem)]">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-hero-muted">{project.tagline}</p>
          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.stack.map((t) => (
              <li key={t} className="chip !bg-white/10 !text-hero-ink">{t}</li>
            ))}
          </ul>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-hero-primary mt-8">
              <ExternalLink size={16} aria-hidden /> Visit live site
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </section>

      <div className="container-page py-14 md:py-20">
        {cover && (
          <div className="relative mb-14 aspect-[1200/630] overflow-hidden rounded-2xl border border-line bg-sunken">
            <Image src={cover} alt={`${project.title} cover`} fill priority sizes="(max-width: 1212px) 100vw, 1180px" className="object-cover" />
          </div>
        )}

        <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="flex flex-col gap-14">
            <Reveal>
              <section aria-labelledby="problem-heading">
                <p className="eyebrow">The problem</p>
                <h2 id="problem-heading" className="mt-3 font-serif text-3xl font-semibold tracking-tight">What needed solving</h2>
                <p className="mt-4 leading-relaxed text-ink-soft">{project.problem}</p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="constraints-heading">
                <p className="eyebrow">Constraints</p>
                <h2 id="constraints-heading" className="mt-3 font-serif text-3xl font-semibold tracking-tight">What the build had to respect</h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {project.constraints.map((c) => (
                    <li key={c} className="flex items-start gap-3 leading-relaxed text-ink-soft">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="architecture-heading">
                <p className="eyebrow">Architecture</p>
                <h2 id="architecture-heading" className="mt-3 font-serif text-3xl font-semibold tracking-tight">How it fits together</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {Object.entries(project.architecture).map(([layer, desc]) => (
                    <div key={layer} className="card p-5">
                      <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">{layer}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          <aside aria-label="Scalability, security and outcomes" className="flex flex-col gap-5">
            <Reveal><SideList title="Scalability" items={project.scalability} /></Reveal>
            <Reveal delay={0.06}><SideList title="Security" items={project.security} /></Reveal>
            <Reveal delay={0.12}><SideList title="Outcomes" items={project.outcomes} /></Reveal>
          </aside>
        </div>
      </div>
    </>
  )
}
