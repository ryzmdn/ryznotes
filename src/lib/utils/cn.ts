import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]): string {
  return twMerge(clsx(args));
}
