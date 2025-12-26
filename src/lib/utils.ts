import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { formatDate } from "./utils/format-date";
export { calculateReadingTime } from "./utils/reading-time";
export { decodeHtmlEntities } from "./utils/decode-html-entities";
