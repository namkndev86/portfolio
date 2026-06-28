'use client';

import React from 'react';
import { useTranslation } from '@/core/i18n/i18n-context';
import { SupportedLocale } from '@/core/i18n/types';

export const LanguageToggle: React.FC = () => {
  const { locale, setLocale } = useTranslation();

  const handleToggle = () => {
    const locales: SupportedLocale[] = ['en', 'vi', 'ja'];
    const nextIndex = (locales.indexOf(locale) + 1) % locales.length;
    setLocale(locales[nextIndex]);
  };

  const labels: Record<SupportedLocale, string> = {
    en: '🇺🇸 EN',
    vi: '🇻🇳 VI',
    ja: '🇯🇵 JA',
  };

  return (
    <button
      onClick={handleToggle}
      className="px-2.5 py-1.5 rounded-md border border-slate-700 bg-slate-900/80 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Switch language"
    >
      {labels[locale]}
    </button>
  );
};
