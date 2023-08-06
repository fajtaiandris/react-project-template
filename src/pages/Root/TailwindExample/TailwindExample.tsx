import { cx } from 'classix';
import React, { useState } from 'react';

export function TailwindExample() {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <>
      <h1 className="text-xl font-semibold">🌬️ TailwindCSS</h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
        <p>
          <span className="text-lg font-semibold">#1</span> Using Tailwind, you can easily build any design directly in
          your markup with the provided css classes like:
          <span className="mx-1 rounded bg-gray-200 px-2 font-mono">bg-gray-200</span>.
        </p>
        <p>
          <span className="text-lg font-semibold">#2</span> To set styling conditionally, use classix:
          <button
            className={cx('mb-5 mt-2 rounded bg-gray-700 px-4 text-white transition', isOn && 'bg-purple-600')}
            onClick={() => setIsOn(!isOn)}
          >
            {isOn ? 'I look pretty now' : 'Click me'}
          </button>
        </p>
      </div>
    </>
  );
}
