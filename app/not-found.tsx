'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', padding: 24 }}>
        <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '6rem', fontWeight: 800, color: '#E2E8F0', lineHeight: 1, marginBottom: 16 }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.75rem', color: '#0F172A', margin: '0 0 12px' }}>Page Not Found</h1>
        <p style={{ color: '#64748B', fontSize: '0.9375rem', margin: '0 0 32px', maxWidth: 380 }}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: '10px', background: '#10B981', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '0.9375rem' }}>
            <Home size={16} /> Go Home
          </Link>
          <button onClick={() => window.history.back()} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: '10px', border: '1px solid #E2E8F0', background: '#fff', color: '#374151', fontWeight: 600, fontSize: '0.9375rem', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  )
}
