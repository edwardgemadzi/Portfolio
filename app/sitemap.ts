import type { MetadataRoute } from 'next'
import { allProjects } from '@/lib/projects'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/projects', '/about', '/contact']
  return [
    ...pages.map((path) => ({ url: `${site.url}${path === '/' ? '' : path}` })),
    ...allProjects.map((p) => ({ url: `${site.url}/projects/${p.slug}` })),
  ]
}
