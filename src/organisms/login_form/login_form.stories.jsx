import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import LoginForm from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Organisms/LoginForm', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Login Form</label>
          <LoginForm
            formData={data => console.log(data)}
          />
        </div>
      </div>
    </Fragment>
  ));