import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import RegisterForm from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Organisms/RegisterForm', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Register Form</label>
          <RegisterForm
            formData={data => console.log(data)}
          />
        </div>
      </div>
    </Fragment>
  ));