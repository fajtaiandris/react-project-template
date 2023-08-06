import cx from 'classix';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { useLocaleContext } from '@i18n/useLocaleContext';

import { Button } from '@ui/Button';

export function FormatJsExample() {
  const { locale, setLocale } = useLocaleContext();
  const [birdNum, setBirdNum] = useState<number>(0);

  return (
    <>
      <h1 className="flex justify-between text-xl font-semibold">
        🌐 FormatJS
        <span>
          <Button
            className={cx(locale !== 'en' && 'opacity-50')}
            onClick={() => setLocale('en')}
            text="🇬🇧"
            variant="tertiary"
          />
          <Button
            className={cx('pl-1', locale !== 'hu' && 'opacity-50')}
            onClick={() => setLocale('hu')}
            text="🇭🇺"
            variant="tertiary"
          />
        </span>
      </h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
        <p>
          <span className="text-lg font-semibold">#1 </span>
          <FormattedMessage id="formatjs_intro" defaultMessage="foo" />
        </p>

        <p>
          <span className="text-lg font-semibold">#2 </span>
          <FormattedMessage id="locale_usage" defaultMessage="foo" />
        </p>

        <div>
          <span className="text-lg font-semibold">#3 </span>
          <FormattedMessage id="try" defaultMessage="foo" />
          <div className="mt-2 rounded border border-purple-500">
            <div>
              <div className="bg-purple-200 py-2 px-4 italic text-purple-700">
                <FormattedMessage id="example_sentence" values={{ birdNum: birdNum }} defaultMessage="foo" />
                <br />
                <FormattedMessage id="today" values={{ today: Date.now() }} defaultMessage="foo" />
                <br />
                <FormattedMessage id="bagel_price" values={{ num: 5.5 }} defaultMessage="foo" />
              </div>
              <div className="bg-purple-500 px-4 py-2 text-white">
                <div className="mb-2 grid grid-cols-2 items-center border-b-2 border-purple-400 pb-2">
                  <FormattedMessage id="birds" defaultMessage="foo" />
                  <div className="flex justify-self-end">
                    <Button className="rounded-l-lg" onClick={() => setBirdNum(birdNum - 1)} text="-" />
                    <div className="w-8 bg-white py-1 text-center text-purple-700">{birdNum}</div>
                    <Button className="rounded-r-lg" onClick={() => setBirdNum(birdNum + 1)} text="+" />
                  </div>
                </div>
                <div className="mt-1 grid grid-cols-2">
                  <FormattedMessage id="chosen_locale" defaultMessage="foo" />
                  <div className="w-20 justify-self-end rounded-lg bg-purple-700 px-2 text-center">{locale}</div>
                </div>
                <div className="mt-1 grid grid-cols-2">
                  <FormattedMessage id="browser_language" defaultMessage="foo" />
                  <div className="w-20 justify-self-end rounded-lg bg-purple-700 px-2 text-center">
                    {navigator.language}
                  </div>
                </div>
                <div className="mt-1 grid grid-cols-2">
                  <FormattedMessage id="local_storage" defaultMessage="foo" />
                  <div className="w-20 justify-self-end rounded-lg bg-purple-700 px-2 text-center">
                    {JSON.parse(localStorage.getItem('locale') || 'null') || '-'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
