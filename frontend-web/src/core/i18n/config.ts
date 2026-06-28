import { SupportedLocale, TranslationDictionary } from './types';
import { enDictionary } from './locales/en';
import { viDictionary } from './locales/vi';
import { jaDictionary } from './locales/ja';

export const DEFAULT_LOCALE: SupportedLocale = 'en';

export const dictionaries: Record<SupportedLocale, TranslationDictionary> = {
  en: enDictionary,
  vi: viDictionary,
  ja: jaDictionary,
};
