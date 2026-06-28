export type SupportedLocale = 'en' | 'vi' | 'ja';

export type TranslationNamespace =
  | 'common'
  | 'navigation'
  | 'pages'
  | 'forms'
  | 'validation'
  | 'project';

export interface TranslationDictionary {
  common: Record<string, string>;
  navigation: Record<string, string>;
  pages: Record<string, string>;
  forms: Record<string, string>;
  validation: Record<string, string>;
  project: Record<string, string>;
}
