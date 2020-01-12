import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import ObservationCard from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Organisms/ObservationCard', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group" style={{width: '400px'}}>
          <label>Observation Card</label>
          <ObservationCard
            title="A little observation"
            excerpt="Something I have been monitoring for a while"
            organism={{
              title: "African Grey",
              name: "Pepper",
              age: 16
            }}
            date="12th Jan 2020"
            duration="1hr 20mins"
            location="Darwen, UK"
            image="https://i.ytimg.com/vi/RfXxh0Eff_w/maxresdefault.jpg"
          />
        </div>
        <div className="story-group" style={{ width: '400px' }}>
          <label>Observation Card</label>
          <ObservationCard
            title="A little observation"
            excerpt="Something I have been monitoring for a while"
            organism={{
              title: "African Grey",
              name: "Pepper",
              age: 16
            }}
            date="12th Jan 2020"
            duration="1hr 20mins"
            location="Bolton, UK"
            image="https://i.ytimg.com/vi/CUswUl3cog0/maxresdefault.jpg"
          />
        </div>
      </div>
    </Fragment>
  ));