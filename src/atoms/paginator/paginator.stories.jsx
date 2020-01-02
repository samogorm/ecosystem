import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Paginator from './index';

import './../../global/styles/stories/default.scss';

const pages = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
const smallPages = [ 1, 2, 3, 4, 5 ];

storiesOf('Atoms/Paginator', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout stories-layout--column">
        <div className="story-group">
          <label>Minified</label>
          <Paginator
            pages={ pages }
            defaultPage="3"
          />
        </div>
        <div className="story-group">
          <label>Default</label>
          <Paginator
            pages={smallPages}
            defaultPage="1"
          />
        </div>
      </div>
    </Fragment>
  ));