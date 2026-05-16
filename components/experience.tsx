"use client";

const experiences = [
  {
    role: "Full Stack Developer (Intern)",
    company: "Edureka",
    period: "January 2025 – July 2025",
    type: "work",
    highlights: [
      "Built a Job Recruitment Platform using the MERN stack with secure authentication, user profiles, and job filtering.",
      "Developed a Weather App with real-time data using WeatherAPI, MapTiler, and Globe.gl for visualization.",
      "Created a Netflix Homepage Clone demonstrating advanced responsive design and CSS layout skills.",
      "Implemented secure backend authentication using bcrypt password hashing and HTTP-only cookies for session management.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "bcrypt"],
  },
  {
    role: "Support Specialist",
    company: "Yango Ghana LTD",
    period: "August 2022 – Present",
    type: "work",
    highlights: [
      "Handled 40,000+ customer support inquiries, maintaining a 93% customer satisfaction rate.",
      "Trained and onboarded staff members on support tools and best practices.",
      "Assisted with AI data entry and quality assurance tasks.",
      "Developed and maintained internal process documentation.",
    ],
    tech: ["Customer Service", "Data Entry", "Training", "Documentation"],
  },
  {
    role: "Internal Controller",
    company: "Ecobank Ghana LTD",
    period: "October 2020 – December 2021",
    type: "work",
    highlights: [
      "Monitored and controlled system access permissions across multiple regional branches.",
      "Led a 3-month document retrieval and archiving project, improving operational compliance.",
      "Conducted comprehensive branch audits and produced detailed compliance reports.",
      "Worked with FLEXCUBE core banking, Swift, Western Union, and IBPS systems.",
    ],
    tech: ["FLEXCUBE", "Swift", "Western Union", "IBPS", "Compliance", "Audit"],
  },
];

const education = {
  degree: "B.A. Economics and Philosophy",
  institution: "University of Ghana, Legon",
  period: "Graduated 2020",
  highlights: [
    "Strong analytical and critical thinking foundation",
    "Systems thinking and economic modeling",
    "Ethics and logical reasoning",
  ],
};

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2">// experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Work History
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-12 md:pl-20">
                {/* Dot */}
                <div className="absolute left-2 md:left-6 top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-background" />

                <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-base">{exp.role}</h3>
                      <p className="text-primary text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5 shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="relative pl-12 md:pl-20">
              <div className="absolute left-2 md:left-6 top-1.5 w-4 h-4 rounded-full bg-secondary border-2 border-primary" />
              <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-base">{education.degree}</h3>
                    <p className="text-primary text-sm">{education.institution}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {education.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {education.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-0.5 shrink-0">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
