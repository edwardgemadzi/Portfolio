'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  { title: 'Full Stack Development', skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful APIs', 'JWT Authentication'] },
  { title: 'Frontend Technologies', skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React Hooks', 'Bootstrap', 'Tailwind CSS', 'Responsive Design'] },
  { title: 'Backend & Database', skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'SQL', 'API Design', 'Data Modeling', 'Prisma', 'tRPC'] },
  { title: 'Auth & Security', skills: ['JWT', 'bcrypt', 'HTTP-only Cookies', 'Role-Based Access Control', 'Row Level Security', 'Helmet.js', 'Rate Limiting', 'Joi Validation'] },
  { title: 'Developer Tools', skills: ['Git & GitHub', 'VS Code', 'Postman', 'Vite', 'npm / yarn', 'MongoDB Compass', 'Playwright'] },
  { title: 'Platforms & Deployment', skills: ['Vercel', 'Supabase', 'Neon Postgres', 'Cloudinary', 'Paystack', 'BullMQ', 'Server-Sent Events'] },
  { title: 'Specialized Tools', skills: ['Globe.gl', 'MapTiler SDK', 'Microsoft Power Automate', 'FLEXCUBE', 'Swift (Money Transfer)', 'Western Union', 'IBPS'] },
  { title: 'Professional Skills', skills: ['Customer Support Excellence', 'Project Management', 'Team Leadership', 'Problem Solving', 'Documentation', 'Training & Mentoring'] },
]

export default function Skills() {
  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', paddingBottom: 80 }}>
      <div style={{ background: '#0A1128', padding: '56px 24px 64px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.1em', marginBottom: 16 }}>// technical capabilities</p>
          <h1 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', margin: '0 0 16px' }}>Technical Skills</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Full-stack toolkit — frontend, backend, databases, auth, deployment, and everything in between.
          </p>
        </motion.div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {skillCategories.map((category, ci) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: ci * 0.06 }}
              style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px 28px', boxShadow: '0 2px 12px rgba(10,17,40,0.04)' }}>
              <h3 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 16px', paddingBottom: 12, borderBottom: '1px solid #F1F5F9', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {category.skills.map((skill) => (
                  <span key={skill} style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.75rem', padding: '5px 12px', borderRadius: '6px', background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#374151', fontWeight: 500 }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
