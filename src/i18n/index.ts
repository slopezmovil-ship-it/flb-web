import es from './es';
import en from './en';

const translations: Record<string, typeof es> = { es, en };

export function useT(lang: string) {
  return translations[lang] ?? translations.es;
}
