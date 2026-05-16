export const CONTACT_EMAIL = "edwardgemadzi@rocketmail.com";

export function hireMeMailto(subject = "Portfolio inquiry") {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
