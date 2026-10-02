import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center md:py-36">
      <p className="eyebrow">Page not found</p>
      <h1 className="display mt-4 text-[clamp(5rem,16vw,10rem)] text-ink">404</h1>
      <p className="display mt-2 text-2xl md:text-3xl">This page doesn&apos;t exist</p>
      <p className="mx-auto mt-4 max-w-md text-muted">The link may be old or mistyped. Try the home page or browse the projects.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">Home</Link>
        <Link href="/projects" className="btn btn-outline">Projects <ArrowRight size={16} aria-hidden /></Link>
      </div>
    </section>
  )
}
