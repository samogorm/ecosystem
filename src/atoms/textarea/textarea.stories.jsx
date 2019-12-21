import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Textarea from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Atoms/Textarea', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Textarea
            id="description"
            name="description"
            error={false}
          />
        </div>
      </div>
    </Fragment>
  ));