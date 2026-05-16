"use client";

export function About() {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "7+", label: "Projects Built" },
    { value: "40K+", label: "Support Inquiries Handled" },
    { value: "93%", label: "Customer Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-mono text-sm mb-2">// about me</p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Passionate about building
                <span className="gradient-text"> great software</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer based in Accra, Ghana, with hands-on
                experience building secure and responsive web applications. I
                specialize in React, TypeScript, Node.js, and MongoDB, and I
                genuinely love turning complex requirements into clean, elegant
                solutions.
              </p>
              <p>
                My background blends technical development with a unique
                perspective from years in banking (Ecobank) and operations
                (Yango Ghana) — giving me strong analytical skills, an eye for
                compliance, and a deep appreciation for user experience.
              </p>
              <p>
                I hold a B.A. in Economics and Philosophy from the University of
                Ghana, Legon — a foundation that sharpens my systems thinking
                and helps me see the bigger picture beyond just the code.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Get in touch →
              </a>
              <a
                href="https://github.com/EdwardGemadzi/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                View GitHub →
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors group"
              >
                <div className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Profile card */}
            <div className="col-span-2 p-6 rounded-xl border border-border bg-card space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                  EG
                </div>
                <div>
                  <div className="font-semibold">Edward Ephraim Gemadzi</div>
                  <div className="text-sm text-muted-foreground">Full Stack Developer · Accra, Ghana 🇬🇭</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500">Open to work</span>
                <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">React & TypeScript</span>
                <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">Node.js & MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
