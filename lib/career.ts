// Career content for Home and About. Every figure here has a source:
// the CV / previous About page (Yango, Ecobank) or data/brochures.json (project figures).
// Confirmed with Edward on 2026-10-02: APSU '16 Vice Convenor from 2026; Yango role is current.

export type Strength = { title: string; background: string; inPractice: string; links: { label: string; href: string }[] }

export const strengths: Strength[] = [
  {
    title: 'Controls and security mindset',
    background: 'As an internal controller at Ecobank Ghana I monitored system access across regions, ran branch audits and trained staff on internal controls.',
    inPractice: 'My software works the same way: least-privilege roles, audit logs on sensitive actions, encrypted personal data, and no single person able to record and approve the same payment.',
    links: [{ label: 'GroupFund', href: '/projects/groupfund' }, { label: 'Pretty in Pink', href: '/projects/pretty-in-pink' }],
  },
  {
    title: 'Finance and business literacy',
    background: 'A degree in economics and hands-on banking operations on FLEXCUBE, SWIFT and Western Union.',
    inPractice: 'I build money features that reconcile: a 21-account double-entry ledger whose reports agree to the bank, server-calculated payment amounts and signed payment webhooks.',
    links: [{ label: 'GroupFund', href: '/projects/groupfund' }, { label: "APSU '16", href: '/projects/apsu16' }],
  },
  {
    title: 'Leadership and community',
    background: "Vice Convenor of APSU '16, my secondary-school year group's alumni association, and a trainer of new staff at Yango and Ecobank.",
    inPractice: "I also built and run the association's platform, which 263 verified members use to find each other, RSVP to events and pay dues.",
    links: [{ label: "APSU '16", href: '/projects/apsu16' }],
  },
  {
    title: 'Customer focus and communication',
    background: 'More than 40,000 customer inquiries resolved at Yango Ghana, with a 93% satisfaction rate, across day and night shifts.',
    inPractice: 'I design for the person at the door or the treasurer at month-end, and explain technical decisions in plain English, as in these case studies.',
    links: [{ label: 'Pretty in Pink', href: '/projects/pretty-in-pink' }],
  },
]

export type Role = {
  title: string
  org: string
  period: string
  place: string
  kind: 'Technology' | 'Leadership' | 'Operations' | 'Banking'
  summary: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: 'Freelance full-stack developer',
    org: 'Independent',
    period: 'Jan 2025 – present',
    place: 'Remote',
    kind: 'Technology',
    summary: 'I design, build and run production web platforms end to end: database, API, authentication, payments and interface.',
    points: [
      'Pretty in Pink Brunch: registration, Paystack payments and QR check-in for a charity event, with encrypted personal data and 291 automated tests.',
      "APSU '16: public site and private member portal for 263 verified members.",
      'GroupFund: a double-entry finance platform for an alumni association, with nine least-privilege committee roles.',
      'Leave Manager: team leave planning with role-based dashboards and real-time updates, live in production.',
    ],
  },
  {
    title: 'Vice Convenor',
    org: "APSU '16 (St. Augustine's College, Class of 2016)",
    period: '2026 – present',
    place: 'Ghana',
    kind: 'Leadership',
    summary: "Part of the executive leading the year group's alumni association.",
    points: ["I also built and maintain the association's website and member portal."],
  },
  {
    title: 'Full-stack developer (intern)',
    org: 'Edureka',
    period: 'Jan 2025 – Jul 2025',
    place: 'Remote',
    kind: 'Technology',
    summary: 'Full-stack internship, building and deploying complete applications.',
    points: [
      'Built and deployed a job recruitment platform with multi-role authentication, profiles and job postings.',
      'Implemented secure authentication with bcrypt and HTTP-only cookies.',
      'Built a weather app with WeatherAPI, MapTiler and Globe.gl, and a responsive Netflix homepage clone.',
    ],
  },
  {
    title: 'Support specialist',
    org: 'Yango Ghana',
    period: 'Aug 2022 – present',
    place: 'Accra',
    kind: 'Operations',
    summary: 'Frontline customer support, day and night shifts.',
    points: [
      'Resolved more than 40,000 customer inquiries with a 93% satisfaction rate.',
      'Trained new staff and supported the team across day and night shifts.',
      'Helped with data entry for AI-based customer response systems.',
    ],
  },
  {
    title: 'Internal controller',
    org: 'Ecobank Ghana',
    period: 'Oct 2020 – Dec 2021',
    place: 'Accra',
    kind: 'Banking',
    summary: 'Internal control across branches and regions.',
    points: [
      'Monitored system access across multiple regions and resolved daily operational issues.',
      'Led a three-month document retrieval project that improved compliance and records management.',
      'Ran branch audits against internal control standards and trained staff on control practices.',
    ],
  },
]

export const education = {
  degree: 'BA Economics and Philosophy',
  institution: 'University of Ghana, Legon',
  year: '2020',
}

// Grouped by what they're used for, strongest first. Banking systems are listed
// separately because they back up the finance strength.
export const skillGroups: { label: string; items: string[] }[] = [
  { label: 'Product engineering', items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'tRPC', 'REST APIs', 'Tailwind CSS'] },
  { label: 'Data', items: ['PostgreSQL', 'Supabase', 'Neon', 'Prisma', 'MongoDB', 'Data modelling'] },
  { label: 'Security', items: ['Role-based access', 'Row-level security', 'Encryption at rest', 'Audit logging', 'CSP and HSTS', 'Rate limiting'] },
  { label: 'Payments', items: ['Paystack', 'Hubtel', 'Signed webhooks', 'Double-entry accounting'] },
  { label: 'Delivery', items: ['Vercel', 'GitHub', 'Playwright', 'Vitest', 'Sentry'] },
  { label: 'Banking and operations', items: ['FLEXCUBE', 'SWIFT', 'Western Union', 'IBPS', 'Microsoft Power Automate'] },
]

export const principles = [
  { title: 'Plan before code', body: 'Architecture and scope are agreed before implementation starts.' },
  { title: 'Security built in', body: 'Security controls go into every release, not bolted on afterwards.' },
  { title: 'Weekly progress you can see', body: 'Milestone updates every week and transparent tracking of scope.' },
  { title: 'Measured by impact', body: 'Success is judged by what changes for your organisation, not by how many features ship.' },
]

// What a client can expect after getting in touch. Steps 3–4 restate promises
// already made elsewhere on the site (scoped plan + timeline, weekly updates).
export const engagementSteps = [
  { title: 'Tell me what you’re building', body: 'Email a few lines about your organisation, the people who will use the system and the problem it should solve.' },
  { title: 'A short scoping call', body: 'We agree the goals, the users and what “done” looks like, by call or by email, whichever suits you.' },
  { title: 'A written plan and timeline', body: 'You get a scoped plan and timeline in writing before any work starts.' },
  { title: 'Build with weekly updates', body: 'Milestone updates every week, with scope tracked openly, through to launch.' },
]
