'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from '@/core/i18n/i18n-context';
import { SupportedLocale } from '@/core/i18n/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC = () => {
  const { locale, setLocale } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[100px] h-8 rounded-lg border border-input bg-transparent opacity-0" />
    );
  }

  const options: { value: SupportedLocale; label: string; flag: string }[] = [
    { value: 'en', label: 'EN', flag: '🇺🇸' },
    { value: 'vi', label: 'VI', flag: '🇻🇳' },
    { value: 'ja', label: 'JA', flag: '🇯🇵' },
  ];

  return (
    <Select value={locale} onValueChange={(val) => setLocale(val as SupportedLocale)}>
      <SelectTrigger
        size="sm"
        className="w-[100px] text-xs font-medium"
        aria-label="Switch language"
      >
        <Globe className="h-3.5 w-3.5 text-indigo-400 mr-1 shrink-0" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent align="end">
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            <span className="mr-1.5">{opt.flag}</span>
            <span>{opt.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
