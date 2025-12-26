export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  type?: "article" | "website" | "product";
}

export function generateMetaDescription(
  text: string,
  maxLength: number = 160
): string {
  const cleanText = text.replace(/<[^>]*>/g, "");

  const decodedText = cleanText
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

  const trimmed = decodedText.trim();
  if (trimmed.length <= maxLength) {
    return trimmed;
  }

  return trimmed.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function extractKeywords(text: string, count: number = 5): string[] {
  const words = text.toLowerCase().split(/\s+/);
  const commonWords = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "but",
    "in",
    "on",
    "at",
    "to",
    "for",
    "of",
    "with",
    "is",
    "are",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
  ]);

  const filtered = words
    .filter((word) => !commonWords.has(word) && word.length > 3)
    .slice(0, count);

  return [...new Set(filtered)];
}

export function calculateReadingTime(
  text: string,
  wordsPerMinute: number = 200
): number {
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function generateCanonicalUrl(
  pathname: string,
  baseUrl: string
): string {
  const url = new URL(pathname, baseUrl);
  return url.toString();
}

export function createBreadcrumbItems(
  pathname: string,
  baseUrl: string
): Array<{ name: string; url: string }> {
  const segments = pathname.split("/").filter(Boolean);
  const items: Array<{ name: string; url: string }> = [
    { name: "Home", url: baseUrl },
  ];

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const name = segment
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    items.push({
      name: name,
      url: new URL(currentPath, baseUrl).toString(),
    });
  }

  return items;
}

export function validateSeoConfig(config: SeoConfig): string[] {
  const errors: string[] = [];

  if (!config.title) {
    errors.push("Title is required");
  } else if (config.title.length < 30 || config.title.length > 60) {
    errors.push(
      `Title should be 30-60 characters (current: ${config.title.length})`
    );
  }

  if (!config.description) {
    errors.push("Description is required");
  } else if (
    config.description.length < 120 ||
    config.description.length > 160
  ) {
    errors.push(
      `Description should be 120-160 characters (current: ${config.description.length})`
    );
  }

  if (config.keywords) {
    if (config.keywords.length < 3 || config.keywords.length > 10) {
      errors.push(
        `Should have 3-10 keywords (current: ${config.keywords.length})`
      );
    }
  }

  return errors;
}

export function formatDateForSchema(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toISOString();
}

export function generatePageTitle(
  pageTitle: string,
  brandName: string = "RyzNotes"
): string {
  if (pageTitle === "Home") {
    return `${brandName} | Personal Blog of Rizky Ramadhan`;
  }
  return `${pageTitle} - ${brandName}`;
}

export function getSocialMetaTags(config: SeoConfig): Record<string, string> {
  return {
    "og:title": config.title,
    "og:description": config.description,
    "og:type": config.type || "website",
    ...(config.image && { "og:image": config.image }),
    ...(config.url && { "og:url": config.url }),
    "twitter:card": "summary_large_image",
    "twitter:title": config.title,
    "twitter:description": config.description,
    ...(config.image && { "twitter:image": config.image }),
  };
}
