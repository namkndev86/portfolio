'use client';

import React from 'react';
import { useTheme } from './theme-provider';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative inline-flex items-center">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
        className="px-2.5 py-1.5 rounded-md border border-border bg-background text-foreground text-xs font-semibold hover:bg-accent transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer appearance-none pr-7"
        aria-label="Select theme mode"
      >
        <option value="light">☀️ Light</option>
        <option value="dark">🌙 Dark</option>
        <option value="system">💻 System</option>
      </select>
      <span className="absolute right-2 text-[10px] pointer-events-none text-muted-foreground">
        ▼
      </span>
    </div>
  );
};
