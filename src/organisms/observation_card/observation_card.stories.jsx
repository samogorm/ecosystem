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
            id="1"
            author={{
              name: "Sam O'Gorman",
              username: "sam",
              image: "https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/91086962_3116059968413479_9223109790446649344_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=7B_Z1zb7K6QAX9Zv_fA&oh=0d355aaa7e3ae622ccc4e7a41aaad203&oe=5EAA3E9A"
            }}
            title="A little observation"
            excerpt="Something I have been monitoring for a while"
            organism={{
              title: "African Grey",
              name: "Pepper",
              age: 16
            }}
            date="12th Jan 2020"
            duration="1hr 20m"
            location="Darwen, UK"
            image="https://i.ytimg.com/vi/RfXxh0Eff_w/maxresdefault.jpg"
          />
        </div>
        <div className="story-group" style={{ width: '400px' }}>
          <label>Observation Card</label>
          <ObservationCard
            id="2"
            author={{
              name: "Sam O'Gorman",
              username: "sam",
              image: "https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/s150x150/91086962_3116059968413479_9223109790446649344_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_ohc=7B_Z1zb7K6QAX9Zv_fA&oh=0d355aaa7e3ae622ccc4e7a41aaad203&oe=5EAA3E9A"
            }}
            title="A little observation"
            excerpt="Something I have been monitoring for a while"
            organism={{
              title: "African Grey",
              name: "Pepper",
              age: 16
            }}
            date="12th Jan 2020"
            duration="1hr 20m"
            location="Bolton, UK"
            image="https://i.ytimg.com/vi/CUswUl3cog0/maxresdefault.jpg"
          />
        </div>
      </div>
    </Fragment>
  ));
