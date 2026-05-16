"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const projectLinks = [
  { label: "Weather", href: "/projects/weather" },
  { label: "Netflix", href: "/projects/netflix" },
  { label: "Bakery", href: "/projects/bakery" },
  { label: "Jobs", href: "/projects/jobs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="gradient-text">EG</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {!isHome && (
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                Home
              </Link>
            )}
            {isHome &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                >
                  {link.label}
                </a>
              ))}

            {/* Projects Dropdown */}
            <div className="relative">
              <button
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent flex items-center gap-1"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                Mini Apps
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {projectsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-40 bg-popover border border-border rounded-lg shadow-lg py-1 z-50"
                  onMouseEnter={() => setProjectsOpen(true)}
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  {projectLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/resume"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              Resume
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <div className="px-4 py-3 space-y-1">
            {!isHome && (
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                onClick={() => setMobileOpen(false)}
              >
                ← Home
              </Link>
            )}
            {isHome &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            <div className="pt-1 border-t border-border">
              <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Mini Apps
              </p>
              {projectLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/resume"
              className="block px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-accent"
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
