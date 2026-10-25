import React, { createContext, useContext, useState, useCallback, PropsWithChildren } from 'react';

// TODO: Import from expo-localization when installed
// import * as Localization from 'expo-localization';

type Translations = Record<string, string>;
type TranslationBundle = Record<string, Translations>;

interface I18nContextValue {
  locale: string;
  t: (key: string, params?: Record<string, string>) => string;
  setLocale: (locale: string) => void;
  availableLocales: string[];
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  t: (key) => key,
  setLocale: () => {},
  availableLocales: ['en'],
});

export function useTranslation(): I18nContextValue {
  return useContext(I18nContext);
}

interface I18nProviderProps extends PropsWithChildren {
  /**
   * Translation bundles keyed by locale
   */
  translations: TranslationBundle;
  /**
   * Default locale if system locale not available
   */
  defaultLocale?: string;
}

/**
 * Provider for internationalization
 */
export function I18nProvider({
  children,
  translations,
  defaultLocale = 'en',
}: I18nProviderProps): JSX.Element {
  // TODO: Get system locale when package installed
  // const systemLocale = Localization.locale.split('-')[0];
  const systemLocale = 'en';
  
  const [locale, setLocale] = useState<string>(() => {
    if (translations[systemLocale]) {
      return systemLocale;
    }
    return defaultLocale;
  });

  const t = useCallback((key: string, params?: Record<string, string>): string => {
    const bundle = translations[locale] || translations[defaultLocale] || {};
    let text = bundle[key] || key;
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(new RegExp(`\{\{${param}\}\}`, 'g'), value);
      });
    }
    
    return text;
  }, [locale, translations, defaultLocale]);

  const availableLocales = Object.keys(translations);

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, availableLocales }}>
      {children}
    </I18nContext.Provider>
  );
}
