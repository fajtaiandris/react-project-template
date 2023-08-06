// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { I18nProvider } from '@i18n/I18nProvider';

import { FormatJsExample } from './FormatJsExample';

export default {
  title: 'Slides/FormatJsExample',
  component: FormatJsExample,
  decorators: [
    (Story) => (
      <I18nProvider>
        <Story />
      </I18nProvider>
    ),
  ],
} as ComponentMeta<typeof FormatJsExample>;

export const Default: ComponentStory<typeof FormatJsExample> = () => <FormatJsExample />;
