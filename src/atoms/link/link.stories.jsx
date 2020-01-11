import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Link from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Atoms/Link', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Link
            label="I am a link"
            to="#"
            colour="primary"
          />
        </div>
        <div className="story-group">
          <label>Secondary</label>
          <Link
            label="I am a link"
            to="#"
            colour="secondary"
          />
        </div>
        <div className="story-group">
          <label>Danger</label>
          <Link
            label="I am a link"
            to="#"
            colour="danger"
          />
        </div>
        <div className="story-group">
          <label>Dark</label>
          <Link
            label="I am a link"
            to="#"
            colour="dark"
          />
        </div>
        <div className="story-group">
          <label>Light</label>
          <Link
            label="I am a link"
            to="#"
            colour="light"
          />
        </div>
      </div>
    </Fragment>
  ));