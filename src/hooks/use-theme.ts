import { useTheme as useNextTheme } from "next-themes";

export function useThemeManager() {
  const { theme, setTheme } = useNextTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    isDark: theme === "dark",
    toggleTheme,
    currentTheme: theme || "light",
  };
}
