import { configure, addParameters, addDecorator } from '@storybook/react';
// import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
// import { withPropsTable } from 'storybook/addon-react-docgen';
import ecosystemTheme from './ecosystemTheme';

import './../src/global/styles/_imports.scss';

// addDecorator(withA11y);
addDecorator(withKnobs);
// addDecorator(withPropsTable);

addParameters({
  options: {
    theme: ecosystemTheme,
  },
});

const req = require.context('../src', true, /\.stories\.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
