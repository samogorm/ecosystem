import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from './index';

import './../../global/styles/stories/default.scss';

const tabs = [
  {
    id: 1,
    title: 'Tab 1',
    content: 'This is Tab 1'
  },
  {
    id: 2,
    title: 'Tab 2',
    content: 'This is Tab 2'
  },
  {
    id: 3,
    title: 'Tab 3',
    content: 'This is Tab 3'
  },
  {
    id: 4,
    title: 'Tab 4',
    content: 'This is Tab 4'
  }
];

storiesOf('Molecules/Tabs', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout stories-layout--column">
        <div className="story-group">
          <label>Default</label>
          <Tabs
            tabs={ tabs }
            defaultTab="1"
          />
        </div>
      </div>
    </Fragment>
  ));
