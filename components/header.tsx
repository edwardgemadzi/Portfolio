'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { mailto, nav, site } from '@/lib/site'
import { cn } from '@/lib/utils'

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes hydration guard
  useEffect(() => setMounted(true), [])
  const dark = mounted && resolvedTheme === 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid size-10 place-items-center rounded-full text-ink-soft transition-colors hover:bg-sunken hover:text-ink"
    >
      {mounted ? (dark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />) : <span className="size-[18px]" />}
    </button>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" onClick={() => setOpen(false)} className="font-serif text-xl font-semibold tracking-tight text-ink">
          {site.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors hover:text-ink',
                isActive(item.href) ? 'text-ink' : 'text-muted'
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <a href={mailto()} className="btn btn-primary ml-2 !min-h-10 !py-2.5">Start a project</a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-full text-ink hover:bg-sunken"
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn('rounded-xl px-4 py-3 font-medium', isActive(item.href) ? 'bg-sunken text-ink' : 'text-ink-soft')}
              >
                {item.name}
              </Link>
            ))}
            <a href={mailto()} className="btn btn-primary mt-2">Start a project</a>
          </div>
        </div>
      )}
    </header>
  )
}
