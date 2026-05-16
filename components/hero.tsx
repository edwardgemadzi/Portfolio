"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";

const TYPED_STRINGS = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "TypeScript Advocate",
  "Problem Solver",
];

function TypewriterText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = TYPED_STRINGS[currentIndex];
    const speed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < target.length) {
          setCurrentText(target.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % TYPED_STRINGS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <span className="gradient-text">
      {currentText}
      <span className="typewriter-cursor text-primary">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Greeting */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for work · Accra, Ghana 🇬🇭
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Edward</span>
          <br />
          <span className="text-foreground">Gemadzi</span>
        </h1>

        {/* Typewriter */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold h-12">
          <TypewriterText />
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building secure, responsive, and performant web applications with
          React, TypeScript, Node.js, and MongoDB. Turning complex ideas into
          elegant digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <a
            href="#projects"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <Link
            href="/resume"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            View Resume
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href="https://github.com/EdwardGemadzi/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/edwardgemadzi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:edwardgemadzi@rocketmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
