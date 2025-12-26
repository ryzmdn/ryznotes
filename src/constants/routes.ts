export const NAV_ROUTES = {
  HOME: "/",
  BLOG: "/blog",
  COLLECTIONS: "/collections",
  FAQ: "/frequently-asked-questions",
  PRIVACY: "/privacy-policy",
  TERMS: "/terms-of-service",
  LICENSE: "/license",
} as const;

export const FOOTER_LINKS = {
  BLOG: NAV_ROUTES.BLOG,
  FAQ: NAV_ROUTES.FAQ,
  PRIVACY: NAV_ROUTES.PRIVACY,
  TERMS: NAV_ROUTES.TERMS,
  LICENSE: NAV_ROUTES.LICENSE,
} as const;
