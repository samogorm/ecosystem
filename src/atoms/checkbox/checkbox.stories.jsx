import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Atoms/Checkbox', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Default</label>
          <Checkbox
            label="I would like to receive news and offers."
            name="test"
          />
        </div>
        <div className="story-group">
          <label>Button</label>
          <Checkbox
            label="Yes"
            name="my_button"
            type="button"
          />
        </div>
      </div>
    </Fragment>
  ));