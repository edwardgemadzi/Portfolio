import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Edward Gemadzi — Freelance Full Stack Developer',
  description: 'Freelance Full Stack Developer based in Accra, Ghana. Building secure, scalable web applications with React, TypeScript, Node.js, and more. Open to remote worldwide.',
  keywords: ['Full Stack Developer', 'Freelance', 'React', 'TypeScript', 'Node.js', 'Ghana', 'Accra'],
  authors: [{ name: 'Edward Ephraim Gemadzi' }],
  openGraph: {
    title: 'Edward Gemadzi — Freelance Full Stack Developer',
    description: 'Building secure, scalable web applications from Accra, Ghana. Open to remote worldwide.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
        <Header />
        <main style={{ paddingTop: 64 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
