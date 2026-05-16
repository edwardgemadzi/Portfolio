'use client'

import { motion } from 'framer-motion'
import { hireMeMailto } from '@/lib/contact'
import { Check } from 'lucide-react'

const servicePackages = [
  { name: 'Starter', timeline: '1–2 weeks', focus: 'Architecture and delivery roadmap for a high-impact workflow.', includes: ['Technical and business requirement alignment', 'System architecture map and API plan', 'Prioritised MVP execution backlog'], featured: false },
  { name: 'Growth', timeline: '4–8 weeks', focus: 'End-to-end build and launch of a production-ready core feature.', includes: ['Frontend, backend, database implementation', 'Security controls and validation hardening', 'Deployment pipeline and launch support'], featured: true },
  { name: 'Premium', timeline: 'Ongoing', focus: 'Reliability, scalability, and optimisation for business-critical systems.', includes: ['Performance and architecture optimisation', 'Monitoring, incident response, and SLA planning', 'Continuous iteration and engineering advisory'], featured: false },
]

const principles = [
  'Architecture-first planning before any implementation starts',
  'Security controls built into every release, not bolted on after',
  'Weekly milestone updates and transparent scope tracking',
  'Delivery measured by business impact, not feature count',
]

export default function Services() {
  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', paddingBottom: 80 }}>
      <div style={{ background: '#0A1128', padding: '56px 24px 64px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.1em', marginBottom: 16 }}>// services</p>
          <h1 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', margin: '0 0 16px' }}>Outcome-Focused Engineering</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            I work with product teams and founders to ship secure, scalable web systems with clear technical decisions and measurable business outcomes.
          </p>
        </motion.div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 48 }}>
          {servicePackages.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ background: pkg.featured ? '#0A1128' : '#fff', borderRadius: '16px', border: pkg.featured ? '1px solid rgba(16,185,129,0.3)' : '1px solid #E2E8F0', padding: '32px', boxShadow: pkg.featured ? '0 8px 32px rgba(10,17,40,0.18)' : '0 2px 12px rgba(10,17,40,0.04)', position: 'relative' }}>
              {pkg.featured && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#10B981', color: '#fff', fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', padding: '4px 14px', borderRadius: '999px' }}>MOST POPULAR</div>
              )}
              <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.68rem', color: '#10B981', letterSpacing: '0.08em', margin: '0 0 10px', fontWeight: 600 }}>{pkg.timeline}</p>
              <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.5rem', color: pkg.featured ? '#fff' : '#0F172A', margin: '0 0 12px' }}>{pkg.name}</h2>
              <p style={{ color: pkg.featured ? 'rgba(255,255,255,0.6)' : '#64748B', fontSize: '0.9rem', lineHeight: 1.65, margin: '0 0 24px' }}>{pkg.focus}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {pkg.includes.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check size={14} color="#10B981" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: '0.875rem', color: pkg.featured ? 'rgba(255,255,255,0.75)' : '#374151', lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '36px', boxShadow: '0 2px 12px rgba(10,17,40,0.04)', marginBottom: 48 }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.08em', marginBottom: 10 }}>// how i work</p>
          <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.375rem', color: '#0F172A', margin: '0 0 28px' }}>Engagement Principles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {principles.map((p) => (
              <div key={p} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0, marginTop: 7 }} />
                <span style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.6 }}>{p}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: '#0A1128', borderRadius: '20px', padding: '48px 40px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.08em', marginBottom: 12 }}>// ready to start</p>
          <h3 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#fff', margin: '0 0 12px' }}>Have a project in mind?</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', margin: '0 0 28px' }}>Share your goal and I will reply with a scoped plan and timeline.</p>
          <a href={hireMeMailto('Project inquiry')} style={{ display: 'inline-block', padding: '14px 32px', borderRadius: '10px', background: '#10B981', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '0.9375rem' }}>Get in Touch</a>
        </motion.div>
      </div>
    </div>
  )
}
