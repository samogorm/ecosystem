import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import ExpandableContent from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Molecules/ExpandableContent', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout stories-layout--column">
        <div className="story-group">
          <label>Default</label>
          <ExpandableContent
            title="What can I expect?"
            content="Something right here."
          />
        </div>
      </div>
    </Fragment>
  ));