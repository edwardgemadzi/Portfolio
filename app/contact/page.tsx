"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CONTACT_EMAIL, hireMeMailto } from "@/lib/contact";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: hireMeMailto(),
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 54 826 2096",
    href: "tel:+233548262096",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Accra, Ghana",
    href: undefined,
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: "calc(100vh - 64px)", background: "#F8FAFC", paddingBottom: 80 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "#0A1128",
          padding: "56px 24px 64px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "0.7rem",
            color: "#10B981",
            letterSpacing: "0.1em",
            marginBottom: 16,
          }}
        >
          // hire me
        </p>
        <h1
          style={{
            fontFamily: "var(--font-plus-jakarta), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "#fff",
            margin: "0 0 16px",
          }}
        >
          Let&apos;s Work Together
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1rem",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Send me an email from your inbox — no form to fill out here. I typically
          reply within 24 hours.
        </p>
      </motion.div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "56px 24px 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid #E2E8F0",
            padding: "40px 36px",
            boxShadow: "0 4px 20px rgba(10,17,40,0.06)",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            style={{
              width: 56,
              height: 56,
              borderRadius: "14px",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <Mail size={26} color="#10B981" />
          </motion.div>

          <h2
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontWeight: 800,
              fontSize: "1.375rem",
              color: "#0F172A",
              margin: "0 0 12px",
            }}
          >
            Email me directly
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: "0.9375rem",
              lineHeight: 1.65,
              margin: "0 0 28px",
            }}
          >
            Tap below to open your email app with my address ready. Write your message
            there — recruiters, clients, and collaborators welcome.
          </p>

          <a
            href={hireMeMailto()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              padding: "14px 32px",
              borderRadius: "10px",
              background: "#10B981",
              color: "#fff",
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
              marginBottom: 16,
            }}
          >
            <Mail size={18} />
            Send Email
          </a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "0.8125rem",
                color: "#0F172A",
                fontWeight: 600,
              }}
            >
              {CONTACT_EMAIL}
            </span>
            <button
              type="button"
              onClick={copyEmail}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                background: "#F8FAFC",
                color: "#64748B",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font-plus-jakarta), sans-serif",
              }}
            >
              {copied ? (
                <>
                  <Check size={14} color="#10B981" /> Copied
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy
                </>
              )}
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: 40,
          }}
        >
          {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={18} color="#10B981" />
              </motion.div>
              <motion.div>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.65rem",
                    color: "#94A3B8",
                    margin: "0 0 3px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {label.toUpperCase()}
                </p>
                {href ? (
                  <a
                    href={href}
                    style={{
                      color: "#0F172A",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                    }}
                  >
                    {value}
                  </a>
                ) : (
                  <span
                    style={{
                      color: "#0F172A",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    {value}
                  </span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            marginTop: 40,
            background: "#0A1128",
            borderRadius: "14px",
            padding: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#10B981",
                boxShadow: "0 0 6px rgba(16,185,129,0.6)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "0.68rem",
                color: "#10B981",
                fontWeight: 600,
                letterSpacing: "0.06em",
              }}
            >
              AVAILABLE WORLDWIDE
            </span>
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.875rem",
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            Open to full-time remote roles and outcome-driven client engagements.
            Based in Accra, Ghana.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            textAlign: "center",
            marginTop: 32,
            fontSize: "0.875rem",
            color: "#94A3B8",
          }}
        >
          Prefer browsing first?{" "}
          <Link
            href="/projects"
            style={{ color: "#10B981", fontWeight: 600, textDecoration: "none" }}
          >
            View my projects
          </Link>
        </motion.p>
      </div>
    </motion.div>
  );
}
