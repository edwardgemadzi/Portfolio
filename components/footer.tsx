import Link from 'next/link'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { mailto, nav, site } from '@/lib/site'
import { allProjects } from '@/lib/projects'

export function Footer() {
  const year = new Date().getFullYear()
  const featured = allProjects.filter((p) => p.cover).slice(0, 5)

  return (
    <footer className="mt-24 bg-hero text-hero-ink">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-semibold">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-hero-muted">
            {site.role} in {site.location}. Secure web platforms for organisations, shaped by a career in banking controls and customer operations.
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { href: site.github, label: 'GitHub', icon: <GithubIcon className="size-4" /> },
              { href: site.linkedin, label: 'LinkedIn', icon: <LinkedinIcon className="size-4" /> },
              { href: mailto(), label: 'Email', icon: <Mail size={16} aria-hidden /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="grid size-10 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Selected work</p>
          <ul className="mt-4 space-y-2.5">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="text-sm text-hero-muted hover:text-hero-ink">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Site</p>
          <ul className="mt-4 space-y-2.5">
            {[{ name: 'Home', href: '/' }, ...nav].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-hero-muted hover:text-hero-ink">{l.name}</Link>
              </li>
            ))}
            <li>
              <a href={site.cv} download className="text-sm text-hero-muted hover:text-hero-ink">Download CV</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-6 text-xs text-hero-muted">© {year} {site.fullName}. Built with Next.js.</p>
      </div>
    </footer>
  )
}
