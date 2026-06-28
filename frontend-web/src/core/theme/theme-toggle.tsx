"use client";

import React from "react";
import { useTheme } from "./theme-provider";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <span className="text-sm font-medium">🌙 Dark</span>
      ) : (
        <span className="text-sm font-medium">☀️ Light</span>
      )}
    </button>
  );
};
