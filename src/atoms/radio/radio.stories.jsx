import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Radio from './index';

import './../../global/styles/stories/default.scss';

const options = [
  {
    label: 'None',
    value: 'none',
    checked: true
  },
  {
    label: 'Your Song',
    value: 'Your Song',
    checked: false
  },
  {
    label: 'Crocodile Rock',
    value: 'Crocodile Rock',
    checked: false
  },
  {
    label: 'Benny and the Jets',
    value: 'Benny and the Jets',
    checked: false
  }
];

storiesOf('Atoms/Radio', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Radio
            id="fave_elton_john_song"
            name="fave_elton_john_song"
            options={ options }
            defaultChecked={ options.find(option => option.checked === true) }
          />
        </div>
      </div>
    </Fragment>
  ));