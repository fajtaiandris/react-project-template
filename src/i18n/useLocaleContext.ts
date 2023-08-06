import { createContext, useContext } from 'react';

export const Locales = {
  en: 'en',
  hu: 'hu',
} as const;

export type Locale = (typeof Locales)[keyof typeof Locales];

const stringToLocale = (str: string): Locale | null => {
  return (Object.keys(Locales) as (keyof typeof Locales)[]).find((key) => Locales[key] === str) || null;
};

export const getDefaultLocale = (): Locale => {
  const localStorageLocale = stringToLocale(JSON.parse(localStorage.getItem('locale') || 'null'));
  const browserLocale = stringToLocale(navigator.language);
  return localStorageLocale || browserLocale || Locales.en;
};

export const LocaleContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({
  locale: getDefaultLocale(),
  setLocale: () => {
    return;
  },
});

export const useLocaleContext = () => {
  const { locale, setLocale } = useContext(LocaleContext);
  const setLocaleWithLocalStorage = (locale: Locale) => {
    localStorage.setItem('locale', JSON.stringify(locale));
    setLocale(locale);
  };
  return { locale, setLocale: setLocaleWithLocalStorage };
};

export const loadLocaleData = (locale: Locale): Promise<Record<string, string>> => {
  if (!locale) return import('../../public/i18n/en.json').then((json) => json.default);
  return import(`../../public/i18n/${locale}.json`).then((json) => json.default);
};
