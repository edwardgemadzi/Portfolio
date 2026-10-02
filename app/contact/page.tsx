import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CopyEmail } from '@/components/copy-email'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { mailto, site } from '@/lib/site'
import { engagementSteps } from '@/lib/career'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Email ${site.name} about a project or a role. Based in ${site.location}, open to remote work.`,
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-hero text-hero-ink">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow !text-hero-gold">Contact</p>
          <h1 className="display mt-5 text-[clamp(2.4rem,6vw,4.4rem)]">Let&apos;s talk</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted">
            Email is the best way to reach me. I reply by email.
          </p>
        </div>
      </section>

      <section aria-labelledby="email-heading" className="container-page py-16 md:py-24">
        <Reveal>
          <div className="card p-8 md:p-12">
            <p className="eyebrow">Email</p>
            <h2 id="email-heading" className="display mt-3 break-all text-2xl sm:text-3xl md:text-4xl">{site.email}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={mailto()} className="btn btn-primary"><Mail size={16} aria-hidden /> Email me</a>
              <CopyEmail email={site.email} />
            </div>
          </div>
        </Reveal>

        <ul className="mt-8 flex flex-wrap gap-3">
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <GithubIcon className="size-4" /> GitHub
            </a>
          </li>
          <li>
            <a href={site.cv} download className="btn btn-outline">Download CV</a>
          </li>
        </ul>
        <p className="mt-6 text-muted">Based in {site.location} · open to remote work</p>
      </section>

      <section id="next" aria-labelledby="next-heading" className="container-page pb-16 md:pb-24">
        <p className="eyebrow">Working together</p>
        <h2 id="next-heading" className="display mt-3 text-3xl md:text-4xl">What happens next</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {engagementSteps.map((step, i) => (
            <li key={step.title} className="border-t-2 border-ink pt-5">
              <p className="font-mono text-xs text-muted">Step {i + 1}</p>
              <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="audience-heading" className="border-t border-line bg-surface py-16 md:py-24">
        <div className="container-page">
          <h2 id="audience-heading" className="sr-only">Who I can help</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <div className="border-t-2 border-ink pt-6">
                <h3 className="font-serif text-2xl font-semibold tracking-tight">For organisations</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Tell me what you&apos;re building and I&apos;ll reply with a scoped plan and timeline. See what I&apos;ve already shipped first.
                </p>
                <Link href="/projects" className="link mt-4 inline-flex items-center gap-1.5">
                  Browse projects <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="border-t-2 border-ink pt-6">
                <h3 className="font-serif text-2xl font-semibold tracking-tight">For recruiters</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  My CV has the full record, and the career page walks through each role.
                </p>
                <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  <a href={site.cv} download className="link">Download CV</a>
                  <Link href="/about#experience" className="link">See my experience</Link>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
