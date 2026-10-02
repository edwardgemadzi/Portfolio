import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { education, experience, skillGroups, strengths } from '@/lib/career'
import { mailto, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Career in banking internal control at Ecobank, customer operations at Yango and an economics degree, now building secure web platforms as a freelance developer.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-hero text-hero-ink">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow !text-hero-gold">{site.role} · {site.location}</p>
          <h1 className="display mt-5 text-[clamp(2.4rem,6vw,4.4rem)]">{site.fullName}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted">
            I started in banking internal control at Ecobank Ghana, moved into customer operations at Yango, and hold a degree in economics.
            Today I build secure web platforms as a freelance developer, and I am Vice Convenor of APSU &apos;16.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={mailto()} className="btn btn-hero-primary">Start a project <ArrowRight size={16} aria-hidden /></a>
            <a href={site.cv} download className="btn btn-on-hero">Download CV</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="btn btn-on-hero">
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="btn btn-on-hero">
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── STRENGTHS ── */}
      <section id="strengths" aria-labelledby="strengths-heading" className="border-b border-line bg-surface py-20 md:py-28">
        <div className="container-page">
          <p className="eyebrow">What I bring</p>
          <h2 id="strengths-heading" className="display mt-3 max-w-3xl text-4xl md:text-5xl">A whole career behind the code</h2>
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

      {/* ── EXPERIENCE ── */}
      <section id="experience" aria-labelledby="experience-heading" className="container-page py-20 md:py-28">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-heading" className="display mt-3 text-4xl md:text-5xl">From the bank floor to production systems</h2>
        <ol className="mt-12 divide-y divide-line border-y border-line">
          {experience.map((r) => (
            <li key={r.title + r.org} className="grid gap-2 py-8 md:grid-cols-[200px_1fr] md:gap-10">
              <p className="font-mono text-xs leading-6 text-muted">{r.period}</p>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="font-serif text-2xl font-semibold tracking-tight">{r.title}</h3>
                  <span className="chip">{r.kind}</span>
                </div>
                <p className="mt-1 text-ink-soft">{r.org} · {r.place}</p>
                <p className="mt-4 leading-relaxed text-ink-soft">{r.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.9375rem] leading-relaxed text-muted marker:text-gold">
                  {r.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" aria-labelledby="education-heading" className="container-page pb-20 md:pb-28">
        <div className="card grid gap-6 p-8 md:p-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Education</p>
            <h2 id="education-heading" className="display mt-3 text-3xl md:text-4xl">Education</h2>
          </div>
          <div>
            <p className="font-serif text-2xl font-semibold tracking-tight">{education.degree}</p>
            <p className="mt-1 text-ink-soft">{education.institution}</p>
            <p className="mt-1 font-mono text-xs text-muted">{education.year}</p>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" aria-labelledby="skills-heading" className="border-y border-line bg-surface py-20 md:py-28">
        <div className="container-page">
          <p className="eyebrow">Skills</p>
          <h2 id="skills-heading" className="display mt-3 text-4xl md:text-5xl">Tools and systems I work with</h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <h3 className="font-semibold text-ink">{g.label}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => <li key={item} className="chip">{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-labelledby="cta-heading" className="container-page py-20 md:py-28">
        <div className="text-center">
          <h2 id="cta-heading" className="display mx-auto max-w-3xl text-4xl md:text-5xl">Working on something that needs to be trusted?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Clients: email me what you&apos;re building. Recruiters: my CV has the full record.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={mailto()} className="btn btn-primary">Email me <ArrowRight size={16} aria-hidden /></a>
            <a href={site.cv} download className="btn btn-outline">Download CV</a>
          </div>
        </div>
      </section>
    </>
  )
}
