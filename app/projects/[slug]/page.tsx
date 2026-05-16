'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { getCaseStudyBySlug } from '@/data/caseStudies'

const statusLabel: Record<string, string> = { launched: 'LAUNCHED', contributing: 'CONTRIBUTING', 'in-progress': 'IN PROGRESS' }
const statusColor: Record<string, string> = { launched: '#10B981', contributing: '#6366F1', 'in-progress': '#F59E0B' }

function SideCard({ title, items, delay }: { title: string; items: string[]; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay }}
      style={{ background: '#fff', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 2px 12px rgba(10,17,40,0.04)' }}>
      <h3 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '0.9375rem', color: '#0F172A', margin: '0 0 16px', paddingBottom: 12, borderBottom: '1px solid #F1F5F9' }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item) => (
          <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', flexShrink: 0, marginTop: 6 }} />
            <span style={{ fontSize: '0.8125rem', color: '#475569', lineHeight: 1.55 }}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getCaseStudyBySlug(slug)

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '4rem', color: '#E2E8F0', fontWeight: 800 }}>404</p>
          <p style={{ color: '#64748B', marginBottom: 24 }}>Project not found.</p>
          <Link href="/projects" style={{ color: '#10B981', fontWeight: 600, textDecoration: 'none' }}>← Back to Projects</Link>
        </div>
      </div>
    )
  }

  const color = statusColor[project.status] || '#10B981'

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', paddingBottom: 80 }}>
      <div style={{ background: '#0A1128', padding: '48px 24px 64px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600, marginBottom: 28 }}>
              <ArrowLeft size={14} /> Back to Projects
            </Link>
            <div style={{ marginBottom: 14 }}>
              <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', color, background: `${color}18`, border: `1px solid ${color}33`, padding: '4px 12px', borderRadius: '999px' }}>
                {statusLabel[project.status] || project.status.toUpperCase()}
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{project.title}</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: 640, margin: '0 0 24px', lineHeight: 1.7 }}>{project.tagline}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {project.stack.map((tech) => (
                <span key={tech} style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.68rem', padding: '5px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{tech}</span>
              ))}
            </div>
            {project.links.live && project.links.live !== '#' && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: '8px', background: '#10B981', color: '#fff', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700 }}>
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px 0' }}>
        <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
              style={{ background: '#fff', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '28px', boxShadow: '0 2px 12px rgba(10,17,40,0.04)' }}>
              <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.68rem', color: '#10B981', letterSpacing: '0.08em', margin: '0 0 8px' }}>// problem</p>
              <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#0F172A', margin: '0 0 14px' }}>Business Problem</h2>
              <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>{project.problem}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}
              style={{ background: '#fff', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '28px', boxShadow: '0 2px 12px rgba(10,17,40,0.04)' }}>
              <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.68rem', color: '#10B981', letterSpacing: '0.08em', margin: '0 0 8px' }}>// constraints</p>
              <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#0F172A', margin: '0 0 18px' }}>Constraints</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {project.constraints.map((c) => (
                  <li key={c} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.65 }}>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
              style={{ background: '#fff', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '28px', boxShadow: '0 2px 12px rgba(10,17,40,0.04)' }}>
              <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.68rem', color: '#10B981', letterSpacing: '0.08em', margin: '0 0 8px' }}>// architecture</p>
              <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#0F172A', margin: '0 0 20px' }}>Architecture</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
                {Object.entries(project.architecture).map(([layer, desc]) => (
                  <div key={layer} style={{ background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', padding: '16px 18px' }}>
                    <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.65rem', color: '#94A3B8', margin: '0 0 6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{layer}</p>
                    <p style={{ fontSize: '0.8125rem', color: '#374151', margin: 0, lineHeight: 1.55 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <SideCard title="Scalability Strategy" items={project.scalability} delay={0} />
            <SideCard title="Security Decisions" items={project.security} delay={0.06} />
            <SideCard title="Target Outcomes" items={project.outcomes} delay={0.12} />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .detail-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
