export const APP_CONFIG = {
  WORDPRESS_API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API || "",
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  ENABLE_COMMENTS: process.env.NEXT_PUBLIC_ENABLE_COMMENTS === "true",
} as const;

if (!APP_CONFIG.WORDPRESS_API_URL) {
  console.warn("Warning: NEXT_PUBLIC_WORDPRESS_API is not set");
}
