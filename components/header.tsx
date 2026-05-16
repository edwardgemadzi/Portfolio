'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { hireMeMailto } from '@/lib/contact'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: '#0A1128',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      transition: 'border-color 0.3s',
    }}>
      <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px rgba(16,185,129,0.5)' }} />
          <span style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
            Edward Gemadzi
          </span>
        </Link>

        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-desktop">
          {NAV.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                color: pathname === item.href ? '#fff' : 'rgba(255,255,255,0.7)',
                fontWeight: 500, fontSize: '0.9375rem', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = pathname === item.href ? '#fff' : 'rgba(255,255,255,0.7)')}
            >
              {item.name}
            </Link>
          ))}
          <a
            href={hireMeMailto()}
            style={{
              padding: '9px 22px', borderRadius: '999px',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#fff'; (e.currentTarget as HTMLAnchorElement).style.color = '#0A1128' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 4 }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', background: '#0A1128', borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    padding: '12px 16px', borderRadius: '10px',
                    color: pathname === item.href ? '#fff' : 'rgba(255,255,255,0.7)',
                    background: pathname === item.href ? 'rgba(255,255,255,0.08)' : 'transparent',
                    fontWeight: 500, fontSize: '0.9375rem', textDecoration: 'none',
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={hireMeMailto()}
                style={{ marginTop: 8, padding: '12px 16px', borderRadius: '10px', background: '#10B981', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none', textAlign: 'center' }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
