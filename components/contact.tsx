"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast.success("Message sent! I'll get back to you soon.", {
      description: "Thanks for reaching out, " + form.name + ".",
    });
    setForm({ name: "", email: "", message: "" });
  };

  const contactItems = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "edwardgemadzi@rocketmail.com",
      href: "mailto:edwardgemadzi@rocketmail.com",
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

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2">// contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Have a project in mind or want to chat? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Let&apos;s work together</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I&apos;m currently open to new opportunities — freelance projects,
                full-time roles, or interesting collaborations. Don&apos;t hesitate
                to reach out!
              </p>
            </div>

            <div className="space-y-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                disabled={loading}
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full gap-2">
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
