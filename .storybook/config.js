import { configure, addParameters } from '@storybook/react';
import ecosystemTheme from './ecosystemTheme';

configure(require.context('../src', true, /\.stories\.jsx$/), module);

addParameters({
  options: {
    theme: ecosystemTheme,
  },
});
