const {
  mergeConfig
} = require('vite');
const {
  default: tsconfigPaths
} = require('vite-tsconfig-paths');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  viteFinal(config, {
    configType
  }) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()]
    });
  },
  docs: {
    autodocs: true
  }
};