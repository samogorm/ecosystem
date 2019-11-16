import { configure, addParameters } from '@storybook/react';
import ecosystemTheme from './ecosystemTheme';

const req = configure(require.context('../src', true, /\.stories\.jsx$/), module);
req.keys().forEach(req);

addParameters({
  options: {
    theme: ecosystemTheme,
  },
});
