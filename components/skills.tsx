"use client";

const skillGroups = [
  {
    category: "Frontend",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    skills: ["React.js", "TypeScript", "Next.js", "HTML5", "CSS3", "JavaScript", "TailwindCSS", "Bootstrap", "Responsive UI/UX"],
  },
  {
    category: "Backend",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Data Modelling", "tRPC", "Prisma"],
  },
  {
    category: "Auth & Security",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    skills: ["JWT", "bcrypt", "HTTP-only Cookies", "Role-Based Access Control", "Secure Sessions"],
  },
  {
    category: "Tools & Dev",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    skills: ["VS Code", "Git", "GitHub", "Postman", "Vite", "MongoDB Compass", "Anaconda"],
  },
  {
    category: "Deployment",
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    skills: ["Vercel", "Railway", "GCP (learning)", "Neon Postgres", "Supabase"],
  },
  {
    category: "Domain / Industry",
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    skills: ["Microsoft Power Automate", "FLEXCUBE", "Swift", "Western Union", "IBPS"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2">// skills & technologies</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            What I work with
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A curated set of technologies I&apos;ve used to build production applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
