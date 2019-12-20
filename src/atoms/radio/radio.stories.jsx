import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Radio from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Atoms/Radio', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Radio
            id="benny_jets"
            value="Benny and the Jets"
            name="fave_elton_john_song"
            checked={false}
          />
          <Radio
            id="croc_rock"
            value="Crocodile Rock"
            name="fave_elton_john_song"
            checked={false}
          />
          <Radio
            id="your_song"
            value="Your Song"
            name="fave_elton_john_song"
            checked={true}
          />
        </div>
      </div>
    </Fragment>
  ));