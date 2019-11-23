import React from 'react';
import { shallow } from 'enzyme';
import Link from './index';

test('Link renders a label', () => {
  const link = shallow(<Link label="My label" to="#a-link" colour="primary" />);

  expect(link.querySelector('strong').innerText.toBeTruthy());
});