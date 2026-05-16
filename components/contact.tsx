import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL, hireMeMailto } from "@/lib/contact";

const contactItems = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: CONTACT_EMAIL,
    href: hireMeMailto(),
  },
  {
    icon: <Phone className="w-4 h-4" />,
    label: "Phone",
    value: "(+233) 54 826 2096",
    href: "tel:+233548262096",
  },
  {
    icon: <GithubIcon className="w-4 h-4" />,
    label: "GitHub",
    value: "EdwardGemadzi",
    href: "https://github.com/EdwardGemadzi/projects",
  },
  {
    icon: <LinkedinIcon className="w-4 h-4" />,
    label: "LinkedIn",
    value: "edwardgemadzi",
    href: "https://www.linkedin.com/in/edwardgemadzi/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary font-mono text-sm mb-2">// contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Have a project in mind? Email me directly from your inbox — no form to
            fill out here.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Let&apos;s work together</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I&apos;m open to freelance projects, full-time roles, and
              collaborations. Send an email and I&apos;ll get back to you within 24
              hours.
            </p>
          </div>

          <a
            href={hireMeMailto()}
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>

          <div className="space-y-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <span className="text-primary">{item.icon}</span>
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
