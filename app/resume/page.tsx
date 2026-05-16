import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PrintResumeButton } from "@/components/print-resume-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Edward Gemadzi",
  description: "Full Stack Developer resume for Edward Ephraim Gemadzi",
};

export default function ResumePage() {
  const skillSections = [
    { label: "Frontend", skills: ["React.js", "TypeScript", "Next.js", "HTML5", "CSS3", "JavaScript", "TailwindCSS", "Bootstrap", "Responsive UI/UX"] },
    { label: "Backend", skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Data Modelling", "tRPC", "Prisma"] },
    { label: "Auth & Security", skills: ["JWT", "bcrypt", "HTTP-only Cookies", "Role-Based Access Control"] },
    { label: "Tools", skills: ["VS Code", "Git", "GitHub", "Postman", "Vite", "MongoDB Compass", "Anaconda"] },
    { label: "Deployment", skills: ["Vercel", "Railway", "Neon Postgres", "Supabase", "GCP (learning)"] },
    { label: "Industry Tools", skills: ["Microsoft Power Automate", "FLEXCUBE", "Swift", "Western Union", "IBPS"] },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Print button — hidden on print */}
          <div className="flex justify-end mb-6 print:hidden">
            <PrintResumeButton />
          </div>

          {/* Resume card */}
          <div className="border border-border rounded-xl bg-card p-8 sm:p-12 print:border-0 print:p-0 print:shadow-none space-y-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Edward Ephraim Gemadzi
                </h1>
                <p className="text-lg text-primary font-medium mt-1">Full Stack Developer</p>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <a href="mailto:edwardgemadzi@rocketmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="w-3.5 h-3.5" /> edwardgemadzi@rocketmail.com
                </a>
                <a href="tel:+233548262096" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-3.5 h-3.5" /> (+233) 54 826 2096
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> Accra, Ghana
                </div>
                <a href="https://github.com/EdwardGemadzi/projects" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <GithubIcon className="w-3.5 h-3.5" /> github.com/EdwardGemadzi
                </a>
                <a href="https://www.linkedin.com/in/edwardgemadzi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <LinkedinIcon className="w-3.5 h-3.5" /> linkedin.com/in/edwardgemadzi
                </a>
              </div>
            </div>

            <Separator />

            {/* Summary */}
            <div>
              <h2 className="text-base font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Professional Summary
              </h2>
              <p className="text-sm leading-relaxed text-foreground">
                Full Stack Developer with hands-on experience in React, TypeScript, Node.js, and MongoDB, building secure and responsive web applications. Skilled in frontend integration, API development, and UI/UX implementation using TailwindCSS and Bootstrap. Brings a unique analytical background from economics, banking operations, and customer service, enabling strong systems thinking and a user-first approach to software development.
              </p>
            </div>

            <Separator />

            {/* Skills */}
            <div>
              <h2 className="text-base font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Technical Skills
              </h2>
              <div className="space-y-3">
                {skillSections.map((sec) => (
                  <div key={sec.label} className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                    <span className="text-xs font-semibold text-muted-foreground w-32 shrink-0 pt-0.5">{sec.label}:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {sec.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Experience */}
            <div>
              <h2 className="text-base font-semibold uppercase tracking-wider text-muted-foreground mb-5">
                Work Experience
              </h2>
              <div className="space-y-7">

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-semibold">Full Stack Developer (Intern)</h3>
                      <p className="text-primary text-sm">Edureka</p>
                    </div>
                    <span className="text-xs text-muted-foreground">January 2025 – July 2025</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    <li>Built a Job Recruitment Platform using the MERN stack with secure authentication, user profiles, and job filtering.</li>
                    <li>Developed a Weather App with real-time data, WeatherAPI integration, MapTiler maps, and Globe.gl 3D visualization.</li>
                    <li>Created a pixel-perfect Netflix Homepage Clone demonstrating advanced responsive CSS and layout skills.</li>
                    <li>Implemented secure backend authentication using bcrypt password hashing and HTTP-only cookie sessions.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-semibold">Support Specialist</h3>
                      <p className="text-primary text-sm">Yango Ghana LTD</p>
                    </div>
                    <span className="text-xs text-muted-foreground">August 2022 – Present</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    <li>Managed 40,000+ customer support inquiries with a 93% customer satisfaction rate.</li>
                    <li>Trained and onboarded new staff members on support tools and company procedures.</li>
                    <li>Assisted with AI data entry, quality assurance, and process documentation.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-semibold">Internal Controller</h3>
                      <p className="text-primary text-sm">Ecobank Ghana LTD</p>
                    </div>
                    <span className="text-xs text-muted-foreground">October 2020 – December 2021</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    <li>Monitored and controlled system access permissions across multiple regional branches.</li>
                    <li>Led a 3-month document retrieval and archiving project, improving operational compliance.</li>
                    <li>Conducted comprehensive branch audits and produced detailed compliance reports.</li>
                    <li>Operated core banking systems: FLEXCUBE, Swift, Western Union, and IBPS.</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Projects */}
            <div>
              <h2 className="text-base font-semibold uppercase tracking-wider text-muted-foreground mb-5">
                Key Projects
              </h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Leave Management App",
                    desc: "Next.js 15, TypeScript, MongoDB, JWT auth, team calendar, analytics.",
                    url: "https://leave-managerone.vercel.app/",
                  },
                  {
                    name: "Deedly — AI Legal Document Platform",
                    desc: "Next.js 14, Supabase, BullMQ, multi-AI provider (Gemini, GPT-4, Claude), 6-stage analysis pipeline, voice chat.",
                  },
                  {
                    name: "GroupFund — Committee Finance Tool",
                    desc: "Double-entry GL, Paystack payments, tRPC, Prisma, Neon Postgres, full RBAC for committee management.",
                  },
                  {
                    name: "Job Recruitment Platform",
                    desc: "MERN stack, secure auth with bcrypt + HTTP-only cookies, profiles, job posting/filtering, notifications.",
                  },
                  {
                    name: "Bakery Website",
                    desc: "MERN stack, admin dashboard, product management, customer authentication.",
                  },
                  {
                    name: "Weather App",
                    desc: "JavaScript, WeatherAPI, MapTiler, Globe.gl integrations with real-time forecast.",
                  },
                ].map((p) => (
                  <div key={p.name} className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                    <span className="text-sm font-medium shrink-0">
                      {p.name}
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-primary text-xs hover:underline"
                        >
                          Live ↗
                        </a>
                      )}
                    </span>
                    <span className="text-sm text-muted-foreground">— {p.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Education */}
            <div>
              <h2 className="text-base font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Education
              </h2>
              <div className="flex flex-wrap items-start justify-between gap-1">
                <div>
                  <h3 className="font-semibold">B.A. Economics and Philosophy</h3>
                  <p className="text-primary text-sm">University of Ghana, Legon</p>
                </div>
                <span className="text-xs text-muted-foreground">Graduated 2020</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
