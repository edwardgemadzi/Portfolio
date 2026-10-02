import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ProjectSummary } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function ProjectCard({ project, large = false, headingLevel = 'h3' }: { project: ProjectSummary; large?: boolean; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel
  const meta = [project.client, project.year].filter(Boolean).join(' · ') || (project.role === 'contributed' ? 'Contributing developer' : null)

  return (
    <article className="group card relative flex h-full flex-col overflow-hidden transition-shadow hover:shadow-[0_18px_40px_-20px_rgb(0_0_0/0.35)]">
      <div className={cn('relative aspect-[1200/630] overflow-hidden border-b border-line bg-sunken', large && 'lg:aspect-auto lg:min-h-[320px] lg:flex-1')} style={project.accent ? { borderBottomColor: project.accent, borderBottomWidth: 3 } : undefined}>
        {project.cover ? (
          <Image
            src={project.cover}
            alt=""
            fill
            sizes={large ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
            className={cn('object-cover transition-transform duration-500 group-hover:scale-[1.02]', large && 'object-left')}
          />
        ) : (
          <div className="flex h-full items-end bg-hero p-6">
            <span className="display text-3xl text-hero-ink/90">{project.title.split(' — ')[0]}</span>
          </div>
        )}
        {project.status && (
          <span className={cn('absolute right-3 top-3 rounded-full px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-wider', project.status === 'live' ? 'bg-accent text-accent-ink' : 'bg-surface text-ink')}>
            {project.status === 'live' ? 'LIVE' : 'RUNS LOCALLY'}
          </span>
        )}
      </div>
      <div className={cn('flex flex-col p-6', !large && 'flex-1')}>
        {meta && <p className="eyebrow mb-2 !text-[0.66rem]">{meta}</p>}
        <Heading className={cn('font-serif font-semibold tracking-tight text-ink', large ? 'text-2xl' : 'text-xl')}>
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.title}
          </Link>
        </Heading>
        <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
          Read the case study <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </p>
      </div>
      {/* Keyboard focus ring for the whole-card link */}
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[18px] ring-accent ring-offset-2 group-has-[a:focus-visible]:ring-2" />
    </article>
  )
}
