export function calculateReadingTime(
  content: string,
  wordsPerMinute: number = 200
): string {
  if (typeof content !== "string" || content.trim() === "") {
    return "0 minute read";
  }

  const words = content
    .replace(/<[^>]*>/g, "")
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} minute${minutes !== 1 ? "s" : ""} read`;
}
