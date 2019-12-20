import React from 'react';
import { render } from '@testing-library/react'

import Button from './index';

test('it renders a button', () => {
  const component = render(<Button label="Button label" colour="primary" action={() => clicked()} />);

  expect(component.find('button')).toExist();
})