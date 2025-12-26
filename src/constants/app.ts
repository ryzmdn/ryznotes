export const SITE_NAME = "RyzNotes";
export const SITE_DESCRIPTION =
  "Personal blog of Rizky Ramadhan, a blogger and web developer sharing knowledge about technology, programming, and self-development.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const AUTHOR_NAME = "Rizky Ramadhan";
export const AUTHOR_SOCIAL = "@ryzmdn";
export const FEATURED_POSTS_LIMIT = 6;
export const POSTS_PER_PAGE = 10;
export const WORDS_PER_MINUTE = 200;
export const IMAGE_DOMAINS = [
  "images.unsplash.com",
  "ryzmdn.wordpress.com",
  "www.svgrepo.com",
];
export const API_CONFIG = {
  WORDPRESS_BASE_URL: process.env.NEXT_PUBLIC_WORDPRESS_API || "",
  TIMEOUT: 10000,
  CACHE_DURATION: 3600,
};
export const THEME_STORAGE_KEY = "currentTheme";
export const THEME_OPTIONS = {
  LIGHT: "light",
  DARK: "dark",
} as const;
