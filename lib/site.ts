// Site-wide identity and links. Keep personal details here only.
export const site = {
  name: 'Edward Gemadzi',
  fullName: 'Edward Ephraim Gemadzi',
  url: 'https://edwardgemadzi.org',
  role: 'Full-stack developer',
  location: 'Accra, Ghana',
  description:
    'Full-stack developer in Accra, Ghana. A background in banking controls, economics and customer operations, applied to secure web platforms: payments, encrypted personal data and audited admin tools.',
  email: 'edwardgemadzi@rocketmail.com',
  github: 'https://github.com/edwardgemadzi',
  linkedin: 'https://www.linkedin.com/in/edwardgemadzi/',
  // Public CV without the phone number; the full version is in ~/Portfolio/cv.
  cv: '/cv/edward-gemadzi-cv.pdf',
} as const

export const nav = [
  { name: 'Work', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const

export function mailto(subject = 'Project enquiry') {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
}

