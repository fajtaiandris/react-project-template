// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { LastSlide } from './LastSlide';

export default {
  title: 'Slides/LastSlide',
  component: LastSlide,
} as ComponentMeta<typeof LastSlide>;

export const Default: ComponentStory<typeof LastSlide> = () => <LastSlide />;
