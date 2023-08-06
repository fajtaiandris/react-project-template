// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { FirstSlide } from './FirstSlide';

export default {
  title: 'Slides/FirstSlide',
  component: FirstSlide,
} as ComponentMeta<typeof FirstSlide>;

export const Default: ComponentStory<typeof FirstSlide> = () => <FirstSlide />;
