'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'

const statusLabel: Record<string, string> = { launched: 'LAUNCHED', contributing: 'CONTRIBUTING', 'in-progress': 'IN PROGRESS' }
const statusColor: Record<string, string> = { launched: '#10B981', contributing: '#6366F1', 'in-progress': '#F59E0B' }

export default function Projects() {
  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', paddingBottom: 80 }}>
      <div style={{ background: '#0A1128', padding: '56px 24px 64px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.1em', marginBottom: 16 }}>// case studies</p>
          <h1 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', margin: '0 0 16px' }}>Projects</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Production-minded work with real architecture decisions, security constraints, and live deployments.
          </p>
        </motion.div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {caseStudies.map((project, i) => {
            const color = statusColor[project.status] || '#10B981'
            return (
              <motion.article key={project.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '28px', boxShadow: '0 2px 12px rgba(10,17,40,0.04)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 14 }}>
                  <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', color, background: `${color}14`, border: `1px solid ${color}33`, padding: '3px 10px', borderRadius: '999px' }}>
                    {statusLabel[project.status] || project.status.toUpperCase()}
                  </span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#0F172A', margin: '0 0 10px', lineHeight: 1.35 }}>{project.title}</h2>
                <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.65, margin: '0 0 20px', flex: 1 }}>{project.tagline}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                  {project.stack.slice(0, 5).map((tech) => (
                    <span key={tech} style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.68rem', padding: '4px 10px', borderRadius: '6px', background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', fontWeight: 500 }}>{tech}</span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#10B981', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                  Open case study <ArrowRight size={14} />
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
