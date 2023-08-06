import React from 'react';

import { FirstSlide } from './FirstSlide';
import { FormatJsExample } from './FormatJsExample';
import { LastSlide } from './LastSlide';
import { MSWExample } from './MSWExample';
import { ReactHookFormExample } from './ReactHookFormExample';
import { ReactRouterExample } from './ReactRouterExample';
import { SlideShow } from './SlidesShow';
import { TailwindExample } from './TailwindExample';
import { TanstackQueryExample } from './TanstackQueryExample';

const slides = [
  <FirstSlide key="first" />,
  <TailwindExample key="tailwind" />,
  <MSWExample key="msw" />,
  <TanstackQueryExample key="tanstackQuery" />,
  <ReactRouterExample key="reactRouter" />,
  <ReactHookFormExample key="reactHookForm" />,
  <FormatJsExample key="formatJs" />,
  <LastSlide key="last" />,
];

export function Root() {
  return <SlideShow slides={slides} />;
}
