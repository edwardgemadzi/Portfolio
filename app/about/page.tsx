'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import Link from 'next/link'
import { hireMeMailto } from '@/lib/contact'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
}

const experience = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Independent',
    period: 'Jan 2025 – Present',
    type: 'Remote',
    bullets: [
      'Designing and building production web applications end to end — database, API, auth, and UI.',
      'Leave Manager: team leave planning platform with role-based dashboards, SSE real-time updates, and 60+ active users.',
      'APSU 16 (apsu16.com): alumni member portal with OTP auth, Paystack integration, PWA support, and 200+ verified members.',
      'GroupFund: double-entry accounting platform with segregation of duties, Paystack webhooks, and automated monthly finance reports.',
    ],
  },
  {
    role: 'Full Stack Developer (Intern)',
    company: 'Edureka',
    period: 'Jan 2025 – Jul 2025',
    type: 'Remote',
    bullets: [
      'Built and deployed a Job Recruitment Platform with secure multi-role auth, profile management, and job posting features.',
      'Developed a Weather App using MERN stack with WeatherAPI and MapTiler integrations and Globe.gl visualisation.',
      'Created a Netflix homepage clone for responsive UI/UX practice.',
      'Implemented secure backend authentication with bcrypt and HTTP-only cookies.',
      'Managed deployment workflows, API integrations, and GitHub project repositories.',
    ],
  },
  {
    role: 'Support Specialist',
    company: 'Yango Ghana LTD',
    period: 'Aug 2022 – Present',
    type: 'Accra, Ghana',
    bullets: [
      'Resolved over 40,000 customer support inquiries with a 93% satisfaction rate.',
      'Trained new staff members and provided continuous support across day and night shifts.',
      'Assisted in data entry for AI-based customer response systems, improving accuracy and efficiency.',
      'Improved operational efficiency through effective communication and issue resolution.',
    ],
  },
  {
    role: 'Internal Controller',
    company: 'Ecobank Ghana LTD',
    period: 'Oct 2020 – Dec 2021',
    type: 'Accra, Ghana',
    bullets: [
      'Monitored system access across multiple regions and resolved daily operational issues.',
      'Led a 3-month document retrieval project improving compliance and data management.',
      'Conducted branch audits to ensure adherence to internal control standards.',
      'Trained employees on internal control practices and conducted system checks to maintain organisational security.',
    ],
  },
]

const education = { degree: 'Bachelor of Arts — Economics and Philosophy', institution: 'University of Ghana, Legon', graduated: '2020' }

const skills = [
  { label: 'Frontend', items: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML/CSS', 'Framer Motion'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth', 'bcrypt', 'RBAC', 'SSE'] },
  { label: 'Database', items: ['MongoDB', 'Supabase (PostgreSQL)', 'Neon Postgres', 'Prisma', 'Data Modelling'] },
  { label: 'Tools', items: ['Git & GitHub', 'Postman', 'VS Code', 'Vite', 'Vercel', 'Playwright', 'Anaconda'] },
  { label: 'Other', items: ['Microsoft Power Automate', 'FLEXCUBE', 'SWIFT', 'Western Union', 'IBPS'] },
]

export default function About() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <div style={{ background: '#0A1128', padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.08em', marginBottom: 16 }}>
            // freelance full-stack developer
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', margin: '0 0 20px', letterSpacing: '-0.02em' }}>
            Edward Ephraim Gemadzi
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', maxWidth: 640, margin: '0 auto 32px', lineHeight: 1.75 }}>
            Freelance Full Stack Developer since January 2025 — I own the entire product: database schema, API design, auth systems, and the UI. I&apos;ve shipped live applications in Next.js, Node.js, and React with real users, real security requirements, and real deadlines. Based in Accra, open to remote worldwide.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
            {[{ icon: MapPin, text: 'Accra, Ghana' }, { icon: Mail, text: 'edwardgemadzi@rocketmail.com', href: 'mailto:edwardgemadzi@rocketmail.com' }, { icon: Phone, text: '(+233) 54 826 2096', href: 'tel:+233548262096' }].map(({ icon: Icon, text, href }) => (
              <a key={text} href={href || '#'} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>
                <Icon size={15} color="#10B981" /> {text}
              </a>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}>
            <a href="https://github.com/EdwardGemadzi/projects" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/edwardgemadzi/" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a href={hireMeMailto()} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: '8px', background: '#10B981', color: '#fff', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700 }}>
              Hire Me <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '64px 24px' }}>
        {/* Experience */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.08em', marginBottom: 10 }}>// work history</p>
          <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.75rem', color: '#0F172A', margin: '0 0 36px' }}>Professional Experience</h2>
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: 32 }}>
          <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 2, background: '#E2E8F0' }} />
          {experience.map((job, i) => (
            <motion.div key={job.company + job.role} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{ position: 'relative', marginBottom: i < experience.length - 1 ? 40 : 0 }}>
              <div style={{ position: 'absolute', left: -39, top: 6, width: 14, height: 14, borderRadius: '50%', background: '#10B981', border: '2px solid #fff', boxShadow: '0 0 0 3px rgba(16,185,129,0.2)' }} />
              <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px 28px', boxShadow: '0 4px 16px rgba(10,17,40,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0F172A', margin: 0 }}>{job.role}</h3>
                  <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#64748B', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '3px 10px', borderRadius: '999px' }}>{job.period}</span>
                </div>
                <p style={{ color: '#10B981', fontSize: '0.875rem', fontWeight: 600, margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: 6 }}>
                  {job.company} <span style={{ color: '#94A3B8', fontWeight: 400 }}>· {job.type}</span>
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {job.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: 10, fontSize: '0.875rem', color: '#374151', lineHeight: 1.6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0, marginTop: 7 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginTop: 64 }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.08em', marginBottom: 10 }}>// education</p>
          <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.75rem', color: '#0F172A', margin: '0 0 28px' }}>Education</h2>
          <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '28px', boxShadow: '0 4px 16px rgba(10,17,40,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0F172A', margin: '0 0 6px' }}>{education.degree}</h3>
              <p style={{ color: '#64748B', fontSize: '0.875rem', margin: 0 }}>{education.institution}</p>
            </div>
            <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.75rem', color: '#10B981', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', padding: '6px 16px', borderRadius: '999px', fontWeight: 600 }}>
              Graduated {education.graduated}
            </span>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginTop: 64 }}>
          <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#10B981', letterSpacing: '0.08em', marginBottom: 10 }}>// key skills</p>
          <h2 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.75rem', color: '#0F172A', margin: '0 0 28px' }}>Technical Skills</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {skills.map((group) => (
              <div key={group.label} style={{ background: '#fff', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.7rem', color: '#64748B', letterSpacing: '0.06em', minWidth: 80, paddingTop: 4 }}>{group.label.toUpperCase()}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, flex: 1 }}>
                  {group.items.map((item) => (
                    <span key={item} style={{ padding: '5px 14px', borderRadius: '999px', background: '#F1F5F9', color: '#334155', fontSize: '0.8125rem', fontWeight: 500 }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginTop: 64, background: '#0A1128', borderRadius: '20px', padding: '48px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#fff', margin: '0 0 12px' }}>Open to Remote Opportunities</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', margin: '0 0 28px' }}>Available for full-time remote roles and freelance contracts worldwide.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={hireMeMailto()} style={{ padding: '12px 28px', borderRadius: '10px', background: '#10B981', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '0.9375rem' }}>Get in Touch</a>
            <Link href="/projects" style={{ padding: '12px 28px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem' }}>View Projects</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
