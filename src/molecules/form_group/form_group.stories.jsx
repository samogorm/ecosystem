import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import FormGroup from './index';

import './../../global/styles/stories/default.scss';

const inputData = {
  label: 'Email Address',
  name: 'email',
  initialValue: '',
  options: []
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
};

const checkboxData = {
  label: 'Receive third party stuff...',
  name: 'third_party',
  initialValue: '',
  options: [],
};

const radioData = {
  label: '',
  name: 'fave_elton_john_song',
  initialValue: '',
  options: [
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
  ]
};

const textareaData = {
  label: '',
  name: 'message',
  initialValue: '',
  options: [],
};

storiesOf('Molecules/FormGroup', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout stories-layout--column">
        <div className="story-group">
          <label>Input</label>
          <FormGroup
            type="input"
            label="Email Address"
            data={ inputData }
            action={value => console.log(value)}
          />
        </div>
        <div className="story-group">
          <label>Textarea</label>
          <FormGroup
            type="textarea"
            label="Leave a message"
            data={textareaData}
            action={value => console.log(value)}
          />
        </div>
        <div className="story-group">
          <label>Select</label>
          <FormGroup
            type="select"
            label="Favourite Animal"
            data={ selectData }
            action={value => console.log(value)}
          />
        </div>
        <div className="story-group">
          <label>Checkbox</label>
          <FormGroup
            type="checkbox"
            label="Other things we need"
            data={ checkboxData }
            action={value => console.log(value)}
          />
        </div>
        <div className="story-group">
          <label>Radio</label>
          <FormGroup
            type="radio"
            label="What's your favourite Elton John song?"
            data={ radioData }
            action={value => console.log(value)}
          />
        </div>
      </div>
    </Fragment>
  ));