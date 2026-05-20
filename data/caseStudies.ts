export interface CaseStudy {
  slug: string
  title: string
  tagline: string
  problem: string
  constraints: string[]
  architecture: Record<string, string>
  scalability: string[]
  security: string[]
  outcomes: string[]
  stack: string[]
  links: { live: string; repo: string | null }
  status: 'launched' | 'contributing' | 'in-progress'
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'leave-manager',
    title: 'Leave Manager',
    tagline: 'Team leave planning platform with role-based dashboards and scheduling constraints.',
    problem: 'Team leave planning breaks operations when approvals, shift schedules, and member availability are not coordinated in one system. Leaders lacked visibility; members lacked transparency.',
    constraints: [
      'Separate leader/member flows with strict role-based access control',
      'Calendar and request views that reflect real shift scheduling constraints',
      'Accurate leave balance, carryover, and year-end projection visibility',
    ],
    architecture: {
      frontend: 'Next.js 15 App Router with role-aware dashboards, analytics, calendar, and profile pages',
      backend: 'Next.js API Routes for leave management logic — balances, requests, team constraints, SSE real-time updates',
      database: 'MongoDB Atlas with indexed leave records, user/team data, and audit logs',
      deployment: 'Live production deployment on Vercel with environment-managed secrets',
    },
    scalability: [
      'Structured dashboard and analytics summaries to handle growing request history',
      'Calendar filters for subgroup visibility and operational planning',
      'Modular route-based UI for progressive feature expansion',
      'Server-Sent Events (SSE) with polling fallback for real-time team updates',
    ],
    security: [
      'JWT authentication with HTTP-only cookies and bcrypt password hashing',
      'Role-scoped navigation and API access — leaders vs members',
      'Rate limiting, Helmet security headers, Joi schema validation on all endpoints',
      'Team isolation — users can only access their own team data',
    ],
    outcomes: [
      'Shipped a live leave operations product with real member analytics and year-end projections',
      'Delivered practical planning features beyond basic leave request forms',
      'Enabled transparent leave balance and carryover visibility per team member',
      'Comprehensive E2E test coverage with Playwright',
    ],
    stack: ['Next.js 15', 'TypeScript', 'MongoDB', 'JWT', 'Tailwind CSS', 'Playwright'],
    links: { live: 'https://leave-manager-one.vercel.app/', repo: null },
    status: 'launched',
  },
  {
    slug: 'deedly',
    title: 'Deedly — AI Legal Document Platform',
    tagline: 'Contributing developer on an AI-powered legal document management and contract analysis platform.',
    problem: 'Reading and understanding legal contracts is slow, expensive, and inaccessible. Individuals and businesses sign agreements without fully understanding the risks, obligations, or missing protections.',
    constraints: [
      'AI analysis pipeline must handle large documents without blocking the UI',
      'Multi-provider AI routing to avoid single-vendor lock-in and manage costs',
      'Real-time progress tracking for long-running analysis jobs',
    ],
    architecture: {
      frontend: 'Next.js 14 App Router with BlockNote rich-text editor, streaming AI chat, and real-time analysis progress',
      backend: 'Next.js API Routes with BullMQ background job queue for the 6-stage analysis pipeline',
      database: 'Supabase (PostgreSQL + Row Level Security) for documents, analysis results, and user data; Supabase Storage for file uploads',
      deployment: 'Vercel with Redis-backed BullMQ workers for async processing',
    },
    scalability: [
      '6-stage async analysis pipeline (metadata → clauses → analysis → overview → lifecycle → recommendations)',
      'Multi-provider AI router with automatic fallback: Gemini → OpenRouter → GPT-4 → Claude',
      'Background job queue with priority scheduling, retries, and progress tracking',
      'Usage and cost tracking per user to support tiered pricing',
    ],
    security: [
      'Supabase Auth with Row Level Security — documents never shared between users',
      'Private Supabase Storage bucket with authenticated access only',
      'Server-side validation on all API endpoints',
      'API key isolation per AI provider with environment-managed secrets',
    ],
    outcomes: [
      'Contributing developer — assisting with feature development and integration work',
      'Full 6-stage AI contract analysis pipeline shipping real risk assessments and recommendations',
      'Voice chat with Gemini Live API for natural document Q&A',
      'Party-perspective analysis (buyer vs seller) for nuanced contract review',
    ],
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'BullMQ', 'Gemini AI', 'BlockNote', 'Tailwind CSS'],
    links: { live: 'https://www.deedlyai.co', repo: null },
    status: 'contributing',
  },
  {
    slug: 'apsu16',
    title: 'APSU 16 — Alumni Member Portal',
    tagline: "Member portal for St. Augustine's College Past Students Organisation (Year Group 16), live at apsu16.com.",
    problem: "Alumni associations lack a centralised digital home — members have no easy way to stay connected, pay dues, track community projects, or access a directory of peers after leaving school.",
    constraints: [
      'OTP-only auth (no passwords) — email OTP via Supabase with magic link fallback',
      "Must sync with GroupFund's financial data for live project progress",
      'Progressive Web App support so members can install it on mobile',
    ],
    architecture: {
      frontend: 'Next.js 15 App Router (migrated from Vite, May 2026) with CSS Modules; deployed to Vercel',
      backend: 'Supabase Edge Functions for member sync and invite flows; Next.js API routes for Paystack integration',
      database: 'Supabase PostgreSQL with RLS — verified_members, profiles, sessions; 201+ members onboarded',
      deployment: 'Live at apsu16.com on Vercel; Supabase for auth, DB, and storage',
    },
    scalability: [
      'Edge Functions for member sync keep verified_members enriched with occupation, house, class year, and location',
      'Projects page pulls live GroupFund financial data — progress bars, collected/target, expenses',
      'PWA manifest and iOS meta tags for home screen installation',
      'Supabase Realtime ready for messages and push notifications',
    ],
    security: [
      'OTP email login — no password storage; 2-step flow (email → OTP)',
      'Server-side RPC gate verifies membership before granting portal access',
      'Row Level Security on all Supabase tables',
      'HMAC-SHA512 Paystack webhook verification for payment events',
    ],
    outcomes: [
      'Live community portal at apsu16.com with 201+ verified members onboarded',
      'Projects page wired to live GroupFund financial data with real-time progress',
      'Streamlined invite flow with rich member data (house, class year, location, occupation)',
      'PWA-ready with manifest, iOS meta tags, and home screen install support',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'Supabase Edge Functions', 'Paystack', 'PWA'],
    links: { live: 'https://apsu16.com', repo: null },
    status: 'launched',
  },
  {
    slug: 'eotmg',
    title: 'Employee of the Month Generator',
    tagline: 'React app that turns employee details into polished celebration posts and certificates — optimised for LinkedIn, Instagram, Twitter, and PDF export.',
    problem: 'Recognising employees every month takes time — writing tailored copy, sizing graphics for each platform, and exporting certificates is repetitive manual work that HR teams and managers often skip. EOTMG automates the whole flow from name to publish-ready output.',
    constraints: [
      'Output must be correctly sized and formatted per platform (LinkedIn, Instagram, Twitter, photo caption)',
      'PNG, JPG, and PDF exports must preserve design quality from the browser preview',
      'Instant preview — users see the final result as they type, no submit step',
    ],
    architecture: {
      frontend: 'React 18 with Vite — form, live preview, and export panel as distinct component groups',
      contentEngine: 'Template-based content generator that maps role, accomplishments, and platform to celebration copy and design theme suggestions',
      export: 'html2canvas for raster image export (PNG/JPG), jsPDF for certificate-quality PDF generation, Clipboard API for one-click copy',
      deployment: 'Vercel static deployment — zero backend, fully client-side',
    },
    scalability: [
      'Template system decouples copy patterns from UI — adding new platforms or design themes requires no component changes',
      'Client-side only architecture means zero server costs at any usage volume',
      'Clipboard, PNG, JPG, and PDF export paths are independent and tree-shakeable',
    ],
    security: [
      'Fully client-side — no employee data ever leaves the browser',
      'No backend, no database, no auth surface to attack',
      'Vercel static hosting with automatic HTTPS',
    ],
    outcomes: [
      'Live tool at eotmg.vercel.app — ready to use with no account or setup required',
      'Multi-platform output from a single input form — LinkedIn, Instagram, Twitter, and caption',
      'One-click export to PNG, JPG, PDF, or clipboard for immediate use',
      'Real-time preview eliminates back-and-forth between editing and checking output',
    ],
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'html2canvas', 'jsPDF', 'Vercel'],
    links: { live: 'https://eotmg.vercel.app', repo: 'https://github.com/edwardgemadzi/EOTMG' },
    status: 'launched',
  },
  {
    slug: 'aaron-wedding',
    title: "Aaron & Princess — Wedding Site",
    tagline: 'Custom single-page wedding experience with RSVP management, guest photo uploads, magic-link auth, and an in-browser site editor for the couple.',
    problem: 'Off-the-shelf wedding platforms are generic, heavily branded, and offer no real customisation. The client needed a bespoke site the couple could edit themselves, with guest RSVP tracking, a private photo upload portal, and livestream support — all in one place.',
    constraints: [
      'Couple must be able to edit all site copy and content without touching code',
      'RSVP system needs rate limiting and duplicate prevention to handle bursts',
      'Guest photo uploads must be private and only accessible after magic-link auth',
    ],
    architecture: {
      frontend: 'Astro 6 (prerendered shell) with React 19 island — sections: hero, story, details, RSVP, gallery, registry, livestream, guest upload portal',
      backend: 'Astro Node SSR API routes for RSVP upserts, OTP magic-link auth, and media management; Supabase Storage for guest photos',
      database: 'Supabase PostgreSQL with RLS — rsvps table and guest_media; Supabase Auth for magic-link guest sessions',
      deployment: 'Vercel with Supabase backend; Astro Node standalone adapter',
    },
    scalability: [
      'In-browser site editor (ClientAdmin panel) lets the couple update all content live — no developer needed after handoff',
      'localStorage content persistence with deepMerge for zero-config content fallback',
      'Rate-limited RSVP endpoint to handle bulk traffic without Supabase overload',
      'Supabase Realtime and Storage ready for media expansions post-event',
    ],
    security: [
      'Supabase magic-link OTP auth — no passwords stored; guests verified against approved list',
      'Row Level Security on all Supabase tables — guest uploads scoped per authenticated user',
      'HTML sanitisation with DOMPurify on all admin-editable content fields',
      'RSVP endpoint rate limiting with structured error logging via JSON stdout',
    ],
    outcomes: [
      'Delivered a fully bespoke, brandable wedding site — zero generic platform constraints',
      'Couple can edit all copy, colours, and sections live via the admin panel without a developer',
      'RSVP management with duplicate prevention and confirmation flow built in',
      'Private guest photo portal with Supabase Storage and magic-link authentication',
    ],
    stack: ['Astro 6', 'React 19', 'TypeScript', 'Supabase', 'Supabase Auth', 'Supabase Storage', 'Vercel'],
    links: { live: '#', repo: null },
    status: 'launched',
  },
  {
    slug: 'groupfund',
    title: 'GroupFund — Committee Finance Tool',
    tagline: 'Double-entry accounting and contribution management platform for APSU 16 committee.',
    problem: 'Managing committee finances across dozens of members, multiple payment methods, and strict segregation of duties required a purpose-built system — spreadsheets and manual tracking were causing reconciliation errors and compliance gaps.',
    constraints: [
      'Full double-entry general ledger with every transaction matched by journal entries',
      'Segregation of duties: recorder, verifier, and acknowledger must be three different users',
      'Paystack payment integration with webhook-driven automatic verification',
    ],
    architecture: {
      frontend: 'Next.js App Router with tRPC for type-safe API calls, role-gated dashboards, and real-time GL views',
      backend: 'tRPC routers on Next.js with Prisma ORM, enforcing role-based access and SoD rules at the procedure level',
      database: 'Neon Postgres (serverless) with full Prisma schema — contributions, journal entries, drives, projects, audit log',
      deployment: 'Vercel with Neon Postgres, Paystack webhooks, and scheduled PDF report emails',
    },
    scalability: [
      'Generalised GL posting rules — new drive types and payment methods add without touching existing logic',
      'Audit log on every mutation for full traceability',
      'Monthly PDF finance reports auto-generated by cron and emailed to treasurer and president',
      'Paystack webhook integration for automatic contribution verification on successful payment',
    ],
    security: [
      'Role hierarchy with five distinct permission levels',
      'Segregation of duties enforced at API level — same user cannot record and verify',
      'HMAC-SHA512 Paystack webhook verification',
      'Row-level access — members only see their own contribution history',
    ],
    outcomes: [
      'Full double-entry GL with trial balance, income statement, and balance sheet',
      'Paystack payment links with automatic webhook-driven verification',
      'Supplier payment flows with automatic liability account settlement',
      'Monthly automated finance reports delivered to committee leadership',
    ],
    stack: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'Neon Postgres', 'Paystack', 'Clerk Auth'],
    links: { live: '#', repo: null },
    status: 'launched',
  },
]

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((p) => p.slug === slug)
