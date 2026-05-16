import Link from 'next/link'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0A1128', color: '#fff', padding: '72px 0 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.375rem' }}>Edward Gemadzi</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', maxWidth: 300, lineHeight: 1.75, marginBottom: 24 }}>
              Freelance Full Stack Developer based in Accra, Ghana. Building secure, scalable web applications. Open to remote opportunities worldwide.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { href: 'https://github.com/EdwardGemadzi/projects', icon: <GithubIcon className="w-4 h-4" /> },
                { href: 'https://www.linkedin.com/in/edwardgemadzi/', icon: <LinkedinIcon className="w-4 h-4" /> },
                { href: 'mailto:edwardgemadzi@rocketmail.com', icon: <Mail size={16} /> },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', textDecoration: 'none', color: '#fff' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '0.9375rem', marginBottom: 20 }}>Projects</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Leave Manager', href: '/projects/leave-manager' },
                { name: 'Deedly', href: '/projects/deedly' },
                { name: 'GroupFund', href: '/projects/groupfund' },
                { name: 'APSU 16', href: '/projects/apsu16' },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none' }}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '0.9375rem', marginBottom: 20 }}>Navigation</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }, { name: 'Skills', href: '/skills' }, { name: 'Contact', href: '/contact' }].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none' }}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '0.9375rem', marginBottom: 20 }}>Contact</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li><a href="tel:+233548262096" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>+233 54 826 2096</a></li>
              <li><a href="mailto:edwardgemadzi@rocketmail.com" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>edwardgemadzi@rocketmail.com</a></li>
              <li style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>Accra, Ghana</li>
              <li>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', color: '#10B981', fontWeight: 600 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px rgba(16,185,129,0.6)', display: 'inline-block' }} />
                  Available Worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            Copyright © {year} Edward Ephraim Gemadzi. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>v2.0.0 [STABLE]</p>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </footer>
  )
}
