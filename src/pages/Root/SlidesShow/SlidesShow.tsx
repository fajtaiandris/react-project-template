import cx from 'classix';
import React, { ReactNode, useState } from 'react';

export function SlideShow({ slides }: { slides: ReactNode[] }) {
  const [slideIndex, setslideIndex] = useState<number>(0);

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img
        src="/beams.jpg"
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width={1308}
        alt=""
      />
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative bg-white px-6 pt-14 pb-8 shadow-xl ring-1 ring-gray-900/5 duration-500 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 sm:pt-10">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 transform space-x-3 rounded-full px-4 pb-1 opacity-50 transition duration-300 hover:scale-150 hover:bg-gray-50 hover:shadow">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={cx(
                'h-2 w-2 rounded-full bg-gray-400 transition duration-300 hover:bg-gray-600',
                index === slideIndex && 'scale-150',
              )}
              onClick={() => {
                setslideIndex(index);
              }}
            ></button>
          ))}
        </div>
        {slideIndex !== 0 && (
          <button
            onClick={() => {
              setslideIndex(slideIndex - 1);
            }}
            className="absolute left-10 -top-10 mb-5 rounded-full px-1 text-base font-semibold text-gray-500 opacity-60 transition duration-300 hover:scale-150 hover:bg-gray-50 hover:shadow sm:top-1/2 sm:-left-12 sm:px-2 sm:py-1"
          >
            ←
          </button>
        )}
        {slideIndex !== slides.length - 1 && (
          <button
            onClick={() => {
              setslideIndex(slideIndex + 1);
            }}
            className="absolute -top-10 right-10 mb-5 rounded-full px-1 text-base font-semibold text-gray-500 opacity-60 transition duration-300 hover:scale-150 hover:bg-gray-50 hover:shadow sm:top-1/2 sm:-right-12 sm:px-2 sm:py-1"
          >
            →
          </button>
        )}
        <div className="mx-auto max-w-md sm:w-96">{slides[slideIndex]}</div>
      </div>
    </div>
  );
}
