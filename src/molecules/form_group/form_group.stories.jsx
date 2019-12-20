import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import FormGroup from './index';

import './../../global/styles/stories/default.scss';

const inputData = {
  label: 'Email Address',
  name: 'email',
  initialValue: '',
  options: [],
  callback: null
};

const selectData = {
  label: 'Favourite Animal',
  name: 'fave_animal',
  initialValue: '',
  options: [
    {
      label: 'Bird',
      value: 'bird',
      selected: true
    },
    {
      label: 'Cat',
      value: 'cat',
      selected: false
    },
    {
      label: 'Dog',
      value: 'dog',
      selected: false
    },
  ],
  callback: null
};

const checkboxData = {
  label: 'Receive third party stuff...',
  name: 'third_party',
  initialValue: '',
  options: [],
  callback: null
}

storiesOf('Molecules/FormGroup', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Input</label>
          <FormGroup
            type="input"
            label="Email Address"
            data={ inputData }
          />
        </div>
        <div className="story-group">
          <label>Select</label>
          <FormGroup
            type="select"
            label="Favourite Animal"
            data={ selectData }
          />
        </div>

        <div className="story-group">
          <label>Checkbox</label>
          <FormGroup
            type="checkbox"
            label="Other things we need"
            data={ checkboxData }
          />
        </div>
      </div>
    </Fragment>
  ));