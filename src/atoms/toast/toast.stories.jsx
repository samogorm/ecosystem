import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Toast from './index';
import { Check, MapMarker, Clock } from './../../libraries/icons/index';

import './../../global/styles/stories/default.scss';

storiesOf('Atoms/Toast', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Toast
            icon={ <Check /> }
            text="Successfully saved the details."
            colour="primary"
            position="relative"
          />
        </div>

        <div className="story-group">
          <label>Secondary</label>
          <Toast
            text="Congrats! You just earned a new badge!"
            colour="secondary"
            yAxis="top"
            xAxis="left"
            position="relative"
          />
        </div>

        <div className="story-group">
          <label>Danger</label>
          <Toast
            icon={ <Clock /> }
            text="Time is running out"
            colour="danger"
            yAxis="top"
            xAxis="left"
            position="relative"
          />
        </div>

        <div className="story-group">
          <label>Dark</label>
          <Toast
            icon={ <MapMarker />}
            text="New location added"
            colour="dark"
            yAxis="top"
            xAxis="left"
            position="relative"
          />
        </div>
      </div>
    </Fragment>
  ));