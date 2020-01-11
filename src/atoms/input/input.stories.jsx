import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Input from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Atoms/Input', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Input
            initialValue=""
            name="email"
            placeholder="Email address..."
            validationRules={{ type: 'email', length: 50, required: true }}
          />
        </div>
      </div>
    </Fragment>
  ));