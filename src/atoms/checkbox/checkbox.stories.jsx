import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Atoms/Checkbox', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Checkbox
            label="I would like to receive news and offers."
          />
        </div>
      </div>
    </Fragment>
  ));