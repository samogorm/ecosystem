import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Modal from './index';
import FormGroup from './../form_group/index';
import Button from './../../atoms/button/index';

import './../../global/styles/stories/default.scss';

const inputData = [
  {
    label: 'Name',
    name: 'name',
    initialValue: '',
    options: []
  },
  {
    label: 'Email Address',
    name: 'email',
    initialValue: '',
    options: []
  }
];

const checkboxData = {
  label: 'Receive third party stuff...',
  name: 'third_party',
  initialValue: '',
  options: [],
};

const actions = (
  <div className="actions">
    <p>Action One</p>
  </div>
);

const html = (
  <div style={{width: '100%'}}>
    <FormGroup
      type="input"
      label="Name"
      data={inputData[0]}
    />
    <FormGroup
      type="input"
      label="Email Address"
      data={inputData[1]}
    />
    <FormGroup
      type="checkbox"
      label=""
      data={checkboxData}
    />
  </div>
);

const actionButton = (
  <Button
    label="Sign Up"
    colour="primary"
  />
);

storiesOf('Molecules/Modal', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Modal
            id="1"
            title="Sign Up"
            content={ html }
            actionButton={ actionButton }
            toggled={true}
            actions={ actions }
          />
        </div>
      </div>
    </Fragment>
  ));