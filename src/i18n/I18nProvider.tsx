import React, { FC, ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { Locale, LocaleContext, getDefaultLocale, loadLocaleData } from './useLocaleContext';

type Props = {
  children: ReactNode;
};

export const I18nProvider: FC<Props> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(getDefaultLocale());
  const [messages, setMessages] = useState<Record<string, string>>();

  useEffect(() => {
    loadLocaleData(locale).then((messages) => setMessages(messages));
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider messages={messages} locale={locale} defaultLocale={getDefaultLocale()}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};
