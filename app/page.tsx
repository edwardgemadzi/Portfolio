'use client'

import { useState } from 'react'
import Link from 'next/link'
import { hireMeMailto } from '@/lib/contact'
import { motion } from 'framer-motion'
import { CheckCircle2, Package, Users, ShieldCheck, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const } }),
}

const metrics = [
  { icon: CheckCircle2, value: '7+', label: 'Projects Built' },
  { icon: Package, value: '3', label: 'Live Applications' },
  { icon: Users, value: '260+', label: 'Active App Users' },
  { icon: ShieldCheck, value: '0', label: 'Security Incidents' },
]

const featuredProjects = [
  {
    id: 'leave-manager', name: 'Leave Manager', stack: 'Next.js · MongoDB · JWT',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: '/projects/leave-manager',
    desc: 'Team leave planning platform with role-based dashboards, shift scheduling constraints, and real-time SSE updates. Live in production.',
    tags: ['Next.js 15', 'MongoDB', 'JWT', 'TypeScript'],
    featured: true,
  },
  {
    id: 'apsu16', name: 'APSU 16', stack: 'Next.js 15 · Supabase · PWA',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/projects/apsu16',
    desc: "Alumni member portal for St. Augustine's College Past Students — OTP login, Paystack dues, live project tracking, and PWA support. 201+ members onboarded.",
    tags: ['Next.js 15', 'Supabase', 'Paystack', 'PWA'],
    featured: false,
  },
  {
    id: 'groupfund', name: 'GroupFund', stack: 'tRPC · Prisma · Neon',
    image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/projects/groupfund',
    desc: 'Double-entry accounting and contribution management platform for a committee — full GL, segregation of duties, Paystack integration, and automated finance reports.',
    tags: ['tRPC', 'Prisma', 'Neon', 'Paystack'],
    featured: false,
  },
]

const strategyCards = [
  { monoTag: '// frontend focus', title: 'Interface Plan', desc: 'Building responsive, performant UIs with modern React patterns.', core: 'React / Next.js', items: ['TypeScript & JSX', 'Tailwind + shadcn/ui', 'Framer Motion', 'Responsive Design'] },
  { monoTag: '// full stack focus', title: 'System Plan', desc: 'End-to-end product development from API design to deployment.', core: 'Node / Express', items: ['REST API Design', 'MongoDB + PostgreSQL', 'JWT Auth + RBAC', 'Real-time (SSE/WS)'] },
  { monoTag: '// devops focus', title: 'Deploy Plan', desc: 'Managing deployments, version control, and production workflows.', core: 'Vercel / Git', items: ['GitHub + Postman', 'Environment Config', 'Vercel Deployments', 'Playwright Testing'] },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('Full Stack')

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ background: '#0A1128', padding: '160px 0 200px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0A1128 100%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 896, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mono-tag" style={{ color: '#10B981', marginBottom: 20 }}>
            // freelance full-stack developer
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', lineHeight: 1.15, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Crafting Scalable Web Apps{' '}
            <span style={{ color: '#10B981' }}>From Accra to the World</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.68)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.7 }}>
            I build complete web products — from database to UI — using React, TypeScript, Node.js, and MongoDB. Secure auth, clean APIs, and real deployments. Not a specialist. A full-stack engineer.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: '12px', background: '#10B981', color: '#fff', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none' }}>
              View Projects <ArrowRight size={16} />
            </Link>
            <a href="/Edward Gemadzi CV.pdf" download="Edward Gemadzi CV.pdf"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: '12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none' }}>
              Download CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── COMMAND BAR ── */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: -60, position: 'relative', zIndex: 10, padding: '0 16px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 30px 60px -15px rgba(10,17,40,0.2)', maxWidth: 900, width: '100%', display: 'flex', alignItems: 'stretch', overflow: 'hidden', border: '1px solid #E2E8F0', flexWrap: 'wrap' }}>
          {[{ label: 'System Status', value: 'Available for Work', dot: true }, { label: 'Primary Node', value: '📍 Accra, Ghana' }, { label: 'Core Stack', value: 'Full Stack · React · Node.js' }].map((item, i, arr) => (
            <div key={item.label} style={{ flex: 1, minWidth: 180, padding: '24px 28px', borderRight: i < arr.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
              <p className="mono-tag" style={{ marginBottom: 8 }}>{item.label}</p>
              <p style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 600, fontSize: '0.9375rem', color: '#0F172A', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                {item.dot && <span className="status-dot" />}
                {item.value}
              </p>
            </div>
          ))}
          <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', borderLeft: '1px solid #E2E8F0' }}>
            <a href={hireMeMailto('Project inquiry')} style={{ display: 'inline-block', padding: '12px 22px', borderRadius: '12px', background: '#0A1128', color: '#fff', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── METRICS ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#0F172A', marginBottom: 12 }}>What I&apos;ve Delivered</h2>
            <p style={{ color: '#64748B', fontSize: '1rem' }}>Metrics from real projects and professional work.</p>
          </motion.div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {metrics.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div key={m.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{ background: '#F8FAFC', borderRadius: '16px', padding: '32px 40px', textAlign: 'center', border: '1px solid #E2E8F0', minWidth: 180 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icon size={22} color="#10B981" />
                  </div>
                  <p style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '2rem', color: '#0F172A', margin: '0 0 4px' }}>{m.value}</p>
                  <p style={{ color: '#64748B', fontSize: '0.875rem', margin: 0 }}>{m.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ background: '#F8FAFC', padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 48 }}>
            <p className="mono-tag" style={{ marginBottom: 10 }}>// selected work</p>
            <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#0F172A' }}>Featured Work</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {/* Large featured card */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ y: -4 }}
              style={{ gridRow: 'span 2', background: '#fff', borderRadius: '20px', boxShadow: '0 10px 25px -5px rgba(10,17,40,0.08)', overflow: 'hidden', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
              <Link href={featuredProjects[0].href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ position: 'relative', height: 320, flexShrink: 0 }}>
                  <img src={featuredProjects[0].image} alt={featuredProjects[0].name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,17,40,0.75) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '999px', padding: '4px 12px' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                    <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.65rem', color: '#10B981', fontWeight: 600 }}>LIVE</span>
                  </div>
                  <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                    <p style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.375rem', color: '#fff', margin: '0 0 6px' }}>{featuredProjects[0].name}</p>
                    <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{featuredProjects[0].stack}</p>
                  </div>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p style={{ color: '#64748B', fontSize: '0.9375rem', margin: '0 0 20px', lineHeight: 1.7 }}>{featuredProjects[0].desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {featuredProjects[0].tags.map((t) => (
                      <span key={t} style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.68rem', padding: '4px 10px', borderRadius: '6px', background: '#F1F5F9', color: '#475569', fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Side cards */}
            {featuredProjects.slice(1).map((project, i) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i + 1) * 0.1 }} whileHover={{ y: -4 }}
                style={{ background: '#fff', borderRadius: '20px', boxShadow: '0 10px 25px -5px rgba(10,17,40,0.08)', overflow: 'hidden', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                <Link href={project.href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ position: 'relative', height: 160, flexShrink: 0 }}>
                    <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,17,40,0.7) 0%, transparent 50%)' }} />
                    <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '999px', padding: '3px 10px' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                      <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.6rem', color: '#10B981', fontWeight: 600 }}>LIVE</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16 }}>
                      <p style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1rem', color: '#fff', margin: '0 0 3px' }}>{project.name}</p>
                      <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{project.stack}</p>
                    </div>
                  </div>
                  <div style={{ padding: '16px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <p style={{ color: '#64748B', fontSize: '0.8125rem', margin: '0 0 14px', lineHeight: 1.65 }}>{project.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                      {project.tags.map((t) => (
                        <span key={t} style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.65rem', padding: '3px 9px', borderRadius: '6px', background: '#F1F5F9', color: '#475569', fontWeight: 500 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#10B981', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none' }}>
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SKILLS STRATEGY ── */}
      <section style={{ background: '#F8FAFC', padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="mono-tag" style={{ marginBottom: 10 }}>// technical capabilities</p>
            <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#0F172A', marginBottom: 24 }}>My Technical Stack</h2>
            <div style={{ display: 'inline-flex', background: '#E2E8F0', borderRadius: '999px', padding: '4px', gap: 2 }}>
              {['Frontend', 'Full Stack', 'DevOps'].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  style={{ padding: '8px 20px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 600, fontSize: '0.875rem', transition: 'all 0.2s', background: activeTab === tab ? '#0A1128' : 'transparent', color: activeTab === tab ? '#fff' : '#64748B' }}>
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {strategyCards.map((card, i) => {
              const active = activeTab === ['Frontend', 'Full Stack', 'DevOps'][i]
              return (
                <motion.div key={card.title} layout animate={{ scale: active ? 1.03 : 1, boxShadow: active ? '0 25px 50px -12px rgba(10,17,40,0.25)' : '0 10px 25px -5px rgba(10,17,40,0.06)' }} transition={{ duration: 0.25 }}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  style={{ background: active ? '#0A1128' : '#fff', border: active ? 'none' : '1px solid #E2E8F0', borderRadius: '16px', padding: active ? '36px 28px' : '28px', position: 'relative', zIndex: active ? 1 : 0 }}>
                  <p className="mono-tag" style={{ marginBottom: 12, color: active ? '#10B981' : '#64748B' }}>{card.monoTag}</p>
                  <h3 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '1.125rem', color: active ? '#fff' : '#0F172A', margin: '0 0 10px' }}>{card.title}</h3>
                  <p style={{ color: active ? 'rgba(255,255,255,0.6)' : '#64748B', fontSize: '0.875rem', lineHeight: 1.6, margin: '0 0 20px' }}>{card.desc}</p>
                  <div style={{ background: active ? 'rgba(255,255,255,0.06)' : '#F8FAFC', borderRadius: '8px', padding: '10px 14px', marginBottom: 16 }}>
                    <p className="mono-tag" style={{ color: active ? 'rgba(255,255,255,0.4)' : '#64748B', marginBottom: 4 }}>core</p>
                    <p style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '0.875rem', color: active ? '#10B981' : '#0F172A', margin: 0 }}>{card.core}</p>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {card.items.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: active ? 'rgba(255,255,255,0.7)' : '#64748B' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/skills" style={{ display: 'inline-block', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', border: active ? 'none' : '1px solid #E2E8F0', background: active ? '#fff' : 'transparent', color: active ? '#0A1128' : '#64748B' }}>
                    View Details →
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
