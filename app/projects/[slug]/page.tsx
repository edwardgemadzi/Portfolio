import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug } from '@/data/caseStudies'
import { getBrochureBySlug } from '@/lib/brochures'
import { allProjects } from '@/lib/projects'
import { BrochureCaseStudy } from '@/components/brochure-case-study'
import { LegacyCaseStudy } from '@/components/legacy-case-study'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      ...(project.cover ? { images: [project.cover] } : {}),
    },
  }
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params
  const b = getBrochureBySlug(slug)
  if (b) return <BrochureCaseStudy project={b} status={allProjects.find((p) => p.slug === slug)?.status ?? null} />
  const c = getCaseStudyBySlug(slug)
  if (c) return <LegacyCaseStudy project={c} cover={allProjects.find((p) => p.slug === slug)?.cover ?? null} />
  notFound()
}
