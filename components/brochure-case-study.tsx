import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { fileName, type Brochure } from '@/lib/brochures'

function BulletList({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed text-ink-soft">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" style={{ backgroundColor: accent }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const statusText = { live: 'Live in production', local: 'Runs locally' } as const

export function BrochureCaseStudy({ project, status = null }: { project: Brochure; status?: 'live' | 'local' | null }) {
  const { accent } = project
  const facts = [
    ['Client', project.client],
    ['Role', project.role],
    ['Timeline', project.duration ?? project.year],
  ].filter((f): f is [string, string] => Boolean(f[1]))
  const desktopShots = project.gallery.filter((g) => g.device !== 'phone')
  const phoneShots = project.gallery.filter((g) => g.device === 'phone')
  const meta = [project.client, project.year].filter(Boolean).join(' · ')

  return (
    <>
      {/* Hero */}
      <section className="bg-hero pb-32 text-hero-ink md:pb-40">
        <div className="container-page pt-12 md:pt-16">
          <Link href="/projects" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-hero-muted hover:text-hero-ink">
            <ArrowLeft size={14} aria-hidden /> Back to work
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {meta && <p className="eyebrow !text-hero-gold">{meta}</p>}
            {status && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-2.5 py-1 text-xs font-semibold text-hero-ink">
                <span aria-hidden className={status === 'live' ? 'size-1.5 rounded-full bg-hero-live' : 'size-1.5 rounded-full bg-hero-muted'} />
                {statusText[status]}
              </span>
            )}
          </div>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2rem,5vw,3.5rem)]">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-hero-muted">{project.subtitle}</p>
          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <li key={tech} className="chip !bg-white/10 !text-hero-ink">{tech}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-hero-primary">
                <ExternalLink size={16} aria-hidden /> Visit live site
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            <a href={project.caseStudyPdf} target="_blank" rel="noopener noreferrer" className="btn btn-on-hero"
              aria-label={`View ${project.title} case study (PDF, opens in a new tab)`}>
              <FileText size={16} aria-hidden /> View PDF
            </a>
            <a href={project.caseStudyPdf} download={fileName(project.caseStudyPdf)} className="btn btn-on-hero"
              aria-label={`Download ${project.title} case study (PDF)`}>
              <Download size={16} aria-hidden /> Download PDF
            </a>
          </div>
        </div>
      </section>

      <div className="container-page -mt-24 pb-20 md:-mt-32 md:pb-28">
        {/* Cover */}
        <div className="relative aspect-[1200/630] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_60px_-20px_rgb(0_0_0/0.35)]">
          <Image src={project.cover} alt={`${project.title} cover`} fill priority sizes="(max-width: 1212px) 100vw, 1180px" className="object-cover" />
        </div>

        {/* Outcomes */}
        {project.outcomes.length > 0 && (
          <ul className="my-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Outcomes">
            {project.outcomes.map((o, i) => (
              <li key={o.label}>
                <Reveal delay={i * 0.05} className="h-full">
                  <div className="card h-full border-t-[3px] p-6" style={{ borderTopColor: accent }}>
                    <p className="display text-3xl text-ink">{o.value}</p>
                    <p className="mt-1.5 text-sm leading-snug text-muted">{o.label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="flex flex-col gap-14">
            <Reveal>
              <section aria-labelledby="overview-heading">
                <p className="eyebrow">Overview</p>
                <h2 id="overview-heading" className="mt-3 font-serif text-3xl font-semibold tracking-tight">What this is</h2>
                <p className="mt-4 leading-relaxed text-ink-soft">{project.summary}</p>
              </section>
            </Reveal>
            <Reveal>
              <section aria-labelledby="problem-heading">
                <p className="eyebrow">The problem</p>
                <h2 id="problem-heading" className="mt-3 font-serif text-3xl font-semibold tracking-tight">What needed solving</h2>
                <div className="mt-5"><BulletList items={project.problem} accent={accent} /></div>
              </section>
            </Reveal>
            <Reveal>
              <section aria-labelledby="solution-heading">
                <p className="eyebrow">The solution</p>
                <h2 id="solution-heading" className="mt-3 font-serif text-3xl font-semibold tracking-tight">What I built</h2>
                <div className="mt-5"><BulletList items={project.solution} accent={accent} /></div>
              </section>
            </Reveal>
          </div>

          <aside aria-label="Project facts and security" className="flex flex-col gap-5">
            <Reveal>
              <section className="card p-6">
                <h2 className="border-b border-line pb-3 font-serif text-lg font-semibold">Project facts</h2>
                <dl className="mt-4 flex flex-col gap-4">
                  {facts.map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-mono text-[0.68rem] uppercase tracking-widest text-muted">{label}</dt>
                      <dd className="mt-1 text-sm leading-snug text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </Reveal>
            <Reveal delay={0.06}>
              <section className="card p-6">
                <h2 className="mb-4 border-b border-line pb-3 font-serif text-lg font-semibold">Security decisions</h2>
                <BulletList items={project.security} accent={accent} />
              </section>
            </Reveal>
          </aside>
        </div>

        {/* Features */}
        {project.features.length > 0 && (
          <section aria-labelledby="features-heading" className="mt-20">
            <p className="eyebrow">Features</p>
            <h2 id="features-heading" className="mt-3 font-serif text-3xl font-semibold tracking-tight">Key features</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 0.05} className="h-full">
                  <div className="card h-full p-6">
                    <h3 className="font-semibold text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section aria-labelledby="gallery-heading" className="mt-20">
            <p className="eyebrow">Screens</p>
            <h2 id="gallery-heading" className="mt-3 font-serif text-3xl font-semibold tracking-tight">Inside the product</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {desktopShots.map((g) => (
                <Reveal key={g.src}>
                  <figure className="card p-3">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-sunken">
                      <Image src={g.src} alt={g.caption} fill sizes="(max-width: 768px) 100vw, 580px" className="object-contain" />
                    </div>
                    <figcaption className="px-1 pb-0.5 pt-3 text-sm leading-snug text-muted">{g.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            {phoneShots.length > 0 && (
              <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">
                {phoneShots.map((g) => (
                  <Reveal key={g.src}>
                    <figure className="card p-3">
                      <div className="relative aspect-[390/844] overflow-hidden rounded-lg bg-sunken">
                        <Image src={g.src} alt={g.caption} fill sizes="(max-width: 768px) 50vw, 280px" className="object-contain" />
                      </div>
                      <figcaption className="px-1 pb-0.5 pt-3 text-sm leading-snug text-muted">{g.caption}</figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </>
  )
}
