export const CONTACT_EMAIL = "contact@edwardgemadzi.org";

export function hireMeMailto(subject = "Portfolio inquiry") {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
