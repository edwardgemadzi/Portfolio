export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: "leave-manager",
    title: "Leave Management App",
    description:
      "A full-featured leave management system with JWT authentication, team calendar, analytics dashboard, and role-based access control for organizations.",
    tech: ["Next.js 15", "TypeScript", "MongoDB", "JWT", "TailwindCSS"],
    liveUrl: "https://leave-managerone.vercel.app/",
    githubUrl: "https://github.com/EdwardGemadzi/projects",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "deedly",
    title: "Deedly — AI Legal Document Platform",
    description:
      "AI-powered legal document management and contract analysis platform with a 6-stage analysis pipeline, multi-AI provider support (Gemini, GPT-4, Claude), and voice chat capabilities.",
    tech: ["Next.js 14", "Supabase", "BullMQ", "Gemini AI", "GPT-4", "Claude"],
    githubUrl: "https://github.com/EdwardGemadzi/projects",
    featured: true,
    category: "AI / Full Stack",
  },
  {
    id: "groupfund",
    title: "GroupFund — Committee Finance Tool",
    description:
      "Committee finance management tool with double-entry general ledger, Paystack payment integration, contribution tracking, and full role-based access for committee management.",
    tech: ["Next.js", "tRPC", "Prisma", "Neon Postgres", "Paystack", "TypeScript"],
    githubUrl: "https://github.com/EdwardGemadzi/projects",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "job-recruitment",
    title: "Job Recruitment Platform",
    description:
      "MERN stack recruitment platform with secure authentication, user profiles, job posting and filtering, and real-time notifications.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "bcrypt"],
    githubUrl: "https://github.com/EdwardGemadzi/projects",
    featured: false,
    category: "Full Stack",
  },
  {
    id: "bakery-website",
    title: "Bakery Website",
    description:
      "Full-stack bakery website with an admin dashboard, product management system, authentication, and customer-facing menu and ordering interface.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "TailwindCSS"],
    githubUrl: "https://github.com/EdwardGemadzi/projects",
    featured: false,
    category: "Full Stack",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Interactive weather application with real-time data, globe visualization, and map integration using WeatherAPI, MapTiler, and Globe.gl.",
    tech: ["JavaScript", "WeatherAPI", "MapTiler", "Globe.gl", "HTML/CSS"],
    githubUrl: "https://github.com/EdwardGemadzi/projects",
    featured: false,
    category: "Frontend",
  },
  {
    id: "netflix-clone",
    title: "Netflix Homepage Clone",
    description:
      "Pixel-perfect responsive recreation of the Netflix landing page, demonstrating advanced CSS/HTML skills and responsive design techniques.",
    tech: ["HTML", "CSS", "Responsive Design"],
    githubUrl: "https://github.com/EdwardGemadzi/projects",
    featured: false,
    category: "Frontend",
  },
];
