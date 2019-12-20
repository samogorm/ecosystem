import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Select from './index';

import './../../global/styles/stories/default.scss';

const options = [
  {
    label: 'Table',
    value: 'table',
    selected: true
  },
  {
    label: 'Chair',
    value: 'chair',
    selected: false
  },
  {
    label: 'Desk',
    value: 'desk',
    selected: false
  },
  {
    label: 'Coaster',
    value: 'coaster',
    selected: false
  }
];

storiesOf('Atoms/Select', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Select
            selectedValue={options.find(option => option.selected === true)}
            name="email"
            options={ options }
          />
        </div>
        <div className="story-group">
          <label>Error</label>
          <Select
            selectedValue={options.find(option => option.selected === true)}
            name="email"
            options={ options }
            hasError={ true }
          />
        </div>
      </div>
    </Fragment>
  ));