'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { SupportedLocale, TranslationNamespace } from './types';
import { DEFAULT_LOCALE, dictionaries } from './config';

interface I18nContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'platform_locale';

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<SupportedLocale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as SupportedLocale;
      if (saved && ['en', 'vi', 'ja'].includes(saved)) {
        return saved;
      }
    }
    return DEFAULT_LOCALE;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    }
  }, [locale]);

  const setLocale = (newLocale: SupportedLocale) => {
    setLocaleState(newLocale);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const parts = key.split('.');
    let namespace: TranslationNamespace = 'common';
    let termKey = key;

    if (parts.length > 1) {
      namespace = parts[0] as TranslationNamespace;
      termKey = parts.slice(1).join('.');
    }

    const dict = dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
    const nsDict = dict[namespace];

    let translation = nsDict?.[termKey] || dictionaries.en[namespace]?.[termKey] || key;

    if (params) {
      Object.entries(params).forEach(([pKey, pVal]) => {
        translation = translation.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pVal));
      });
    }

    return translation;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
