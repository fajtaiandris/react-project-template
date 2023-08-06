import React from 'react';

import { Button } from '@ui/Button';

export function LastSlide() {
  return (
    <>
      <h1 className="text-xl font-semibold">🚀 Where to now?</h1>
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-4 pt-4 pb-8 text-base leading-7 text-gray-600">
          <p>
            Take a look at the
            <span className="mx-1 text-sky-500">README</span>
            to see the initial steps and some optional packages you could install.
          </p>
        </div>
        <div className="pt-4 text-base font-semibold leading-7">
          <p className="text-gray-900">💖 You can make this template better!</p>
          <p>
            <a href="path-to-the-repo">
              <Button text="Contribute →" variant="tertiary" isDisabled={true} />
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
