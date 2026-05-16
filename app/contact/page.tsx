'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Home } from 'lucide-react'
import Link from 'next/link'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'edwardgemadzi@rocketmail.com', href: 'mailto:edwardgemadzi@rocketmail.com' },
  { icon: Phone, label: 'Phone', value: '+233 54 826 2096', href: 'tel:+233548262096' },
  { icon: MapPin, label: 'Location', value: 'Accra, Ghana', href: '#' },
]

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px',
  background: '#F8FAFC', color: '#0F172A', fontSize: '0.9375rem',
  fontFamily: 'var(--font-plus-jakarta), sans-serif', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 600, fontSize: '0.8125rem', color: '#374151', marginBottom: 8,
}

export default function Contact() {
  const [formData, setFormData] = useState({ intent: 'recruiter', name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      if (!res.ok) throw new Error()
      setIsSubmitted(true)
      setFormData({ intent: 'recruiter', name: '', email: '', subject: '', message: '' })
    } catch {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div style={{ minHeight: '100vh', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: 40 }}>
          <CheckCircle size={56} color="#10B981" style={{ marginBottom: 20 }} />
          <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.75rem', color: '#0F172A', margin: '0 0 12px' }}>Message Sent</h2>
          <p style={{ color: '#64748B', fontSize: '0.9375rem', margin: '0 0 28px', lineHeight: 1.65 }}>Thank you for reaching out. I will reply within 24 hours.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setIsSubmitted(false)} style={{ padding: '12px 28px', borderRadius: '10px', background: '#10B981', color: '#fff', fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '0.9375rem', border: 'none', cursor: 'pointer' }}>
              Send Another Message
            </button>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: '10px', background: '#0A1128', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 600, fontSize: '0.9375rem' }}>
              <Home size={16} /> Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', paddingBottom: 80 }}>
      <div style={{ background: '#0A1128', padding: '56px 24px 64px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.1em', marginBottom: 16 }}>// get in touch</p>
          <h1 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', margin: '0 0 16px' }}>Let&apos;s Work Together</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Recruiter, client, or collaborator — share your goal and I will reply with next steps and a timeline.
          </p>
        </motion.div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '56px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40 }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.08em', marginBottom: 10 }}>// direct contact</p>
            <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.375rem', color: '#0F172A', margin: '0 0 32px' }}>Reach Me Directly</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.div key={label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color="#10B981" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.65rem', color: '#94A3B8', margin: '0 0 3px', letterSpacing: '0.06em' }}>{label.toUpperCase()}</p>
                    <a href={href} style={{ color: '#0F172A', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>{value}</a>
                  </div>
                </motion.div>
              ))}
            </div>
            <div style={{ background: '#0A1128', borderRadius: '14px', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px rgba(16,185,129,0.6)', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.68rem', color: '#10B981', fontWeight: 600, letterSpacing: '0.06em' }}>AVAILABLE WORLDWIDE</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', margin: 0, lineHeight: 1.65 }}>Open to full-time remote roles and outcome-driven client engagements. Based in Accra, Ghana.</p>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} onSubmit={handleSubmit}
            style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '36px', boxShadow: '0 4px 20px rgba(10,17,40,0.06)', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {error && <div style={{ padding: '12px 16px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '10px', color: '#DC2626', fontSize: '0.875rem' }}>{error}</div>}
            <div>
              <label htmlFor="intent" style={labelStyle}>I am a *</label>
              <select id="intent" name="intent" value={formData.intent} onChange={handleChange} style={inputStyle}>
                <option value="recruiter">Recruiter / Hiring Manager</option>
                <option value="client">Client / Founder</option>
                <option value="collaborator">Collaborator</option>
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label htmlFor="name" style={labelStyle}>Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#10B981')} onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')} />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#10B981')} onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')} />
              </div>
            </div>
            <div>
              <label htmlFor="subject" style={labelStyle}>Subject *</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#10B981')} onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')} />
            </div>
            <div>
              <label htmlFor="message" style={labelStyle}>Message *</label>
              <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required style={{ ...inputStyle, resize: 'none' }}
                onFocus={(e) => (e.target.style.borderColor = '#10B981')} onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')} />
            </div>
            <button type="submit" disabled={isSubmitting}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 24px', borderRadius: '10px', background: isSubmitting ? '#6EE7B7' : '#10B981', color: '#fff', fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '0.9375rem', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
              {isSubmitting ? <>
                <div style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', animation: 'spin 0.7s linear infinite' }} />Sending…
              </> : <><Send size={16} />Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
