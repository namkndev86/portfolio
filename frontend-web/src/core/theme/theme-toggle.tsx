'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from './theme-provider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sun, Moon, Monitor } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[125px] h-8 rounded-lg border border-input bg-transparent opacity-0" />
    );
  }

  return (
    <Select
      value={theme}
      onValueChange={(val) => setTheme(val as 'light' | 'dark' | 'system')}
    >
      <SelectTrigger size="sm" className="w-[125px] text-xs font-medium" aria-label="Select theme mode">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="light">
          <Sun className="h-3.5 w-3.5 text-amber-500 mr-2 inline-block" />
          <span>Light</span>
        </SelectItem>
        <SelectItem value="dark">
          <Moon className="h-3.5 w-3.5 text-indigo-400 mr-2 inline-block" />
          <span>Dark</span>
        </SelectItem>
        <SelectItem value="system">
          <Monitor className="h-3.5 w-3.5 text-slate-400 mr-2 inline-block" />
          <span>System</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
