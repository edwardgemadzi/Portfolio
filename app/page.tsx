import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CopyEmail } from '@/components/copy-email'
import { ProjectCard } from '@/components/project-card'
import { allProjects, projectStats } from '@/lib/projects'
import { experience, principles, strengths } from '@/lib/career'
import { portfolioPdf } from '@/lib/brochures'
import { mailto, site } from '@/lib/site'

const stats = [
  { value: `${projectStats.live}`, label: 'platforms live in production' },
  { value: '263', label: "verified members on the APSU '16 portal" },
  { value: '40,000+', label: 'customer inquiries resolved at Yango, 93% satisfaction' },
  { value: '364', label: 'automated tests across GroupFund and Pretty in Pink' },
]

export default function Home() {
  const featured = allProjects.filter((p) => p.cover).slice(0, 5)
  const [lead, ...rest] = featured

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-hero text-hero-ink">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow !text-hero-gold">{site.role} · {site.location}</p>
            <h1 className="display mt-5 text-[clamp(2.4rem,6vw,4.4rem)]">
              I build secure web platforms that organisations run on.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted">
              Banking controls, economics and years of frontline customer work taught me what software has to get right:
              money that reconciles, personal data that stays private, and screens people can use without training.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={mailto()} className="btn btn-hero-primary">Start a project <ArrowRight size={16} aria-hidden /></a>
              <Link href="/projects" className="btn btn-on-hero">See the work</Link>
              <a href={site.cv} download className="btn btn-on-hero">Download CV</a>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="display block text-4xl text-hero-ink">{s.value}</span>
                  <span className="mt-1.5 block text-sm leading-snug text-hero-muted">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section aria-labelledby="work-heading" className="container-page py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading" className="display mt-3 text-4xl md:text-5xl">Platforms in use today</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-outline">All {projectStats.total} projects</Link>
            <a href={portfolioPdf} download className="btn btn-outline"><Download size={16} aria-hidden /> Portfolio PDF</a>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lead && (
            <Reveal className="md:col-span-2 lg:row-span-2 [&>*]:h-full">
              <ProjectCard project={lead} large />
            </Reveal>
          )}
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── STRENGTHS ── */}
      <section aria-labelledby="strengths-heading" className="border-y border-line bg-surface py-20 md:py-28">
        <div className="container-page">
          <p className="eyebrow">Why work with me</p>
          <h2 id="strengths-heading" className="display mt-3 max-w-3xl text-4xl md:text-5xl">A whole career behind the code</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            I came to software from banking, finance and customer operations. Each of those shaped how I build.
          </p>
          <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.06}>
                <article className="border-t-2 border-ink pt-6">
                  <p className="font-mono text-xs text-muted">0{i + 1}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-soft">{s.background}</p>
                  <p className="mt-3 leading-relaxed text-ink-soft">{s.inPractice}</p>
                  <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    <span className="text-muted">See:</span>
                    {s.links.map((l) => <Link key={l.href} href={l.href} className="link">{l.label}</Link>)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER ── */}
      <section aria-labelledby="career-heading" className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Career</p>
            <h2 id="career-heading" className="display mt-3 text-4xl md:text-5xl">From the bank floor to production systems</h2>
            <Link href="/about" className="btn btn-outline mt-8">Full story <ArrowRight size={16} aria-hidden /></Link>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {experience.map((r) => (
              <li key={r.title + r.org} className="grid gap-1 py-5 sm:grid-cols-[150px_1fr] sm:gap-6">
                <p className="font-mono text-xs leading-6 text-muted">{r.period}</p>
                <div>
                  <p className="font-semibold text-ink">{r.title} <span className="font-normal text-muted">· {r.org}</span></p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{r.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section id="how-i-work" aria-labelledby="how-heading" className="container-page">
        <div className="card grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 id="how-heading" className="display mt-3 text-3xl md:text-4xl">Clear plans, secure releases, steady updates</h2>
            <Link href="/contact#next" className="link mt-6 inline-flex items-center gap-1.5">What happens after you get in touch <ArrowRight size={14} aria-hidden /></Link>
          </div>
          <ul className="grid gap-8 sm:grid-cols-2">
            {principles.map((p) => (
              <li key={p.title}>
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section aria-labelledby="cta-heading" className="container-page pt-20 md:pt-28">
        <div className="text-center">
          <h2 id="cta-heading" className="display mx-auto max-w-3xl text-4xl md:text-6xl">Have a platform your organisation needs to trust?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Tell me what you&apos;re building. I&apos;ll reply with a scoped plan and timeline. Hiring for a role instead? My CV is one click away.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={mailto()} className="btn btn-primary">Email me <ArrowRight size={16} aria-hidden /></a>
            <CopyEmail email={site.email} />
            <a href={site.cv} download className="btn btn-outline">Download CV</a>
          </div>
        </div>
      </section>
    </>
  )
}
