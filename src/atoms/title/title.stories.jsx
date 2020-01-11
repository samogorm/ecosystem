import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Title from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Atoms/Title', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>H1</label>
          <Title
            tag="h1"
            children="I am a H1 tag"
            colour="primary"
          />
        </div>
        <div className="story-group">
          <label>H2</label>
          <Title
            tag="h2"
            children="I am a H2 tag"
          />
        </div>
        <div className="story-group">
          <label>H3</label>
          <Title
            tag="h3"
            children="I am a H3 tag"
          />
        </div>
        <div className="story-group">
          <label>H4</label>
          <Title
            tag="h4"
            children="I am a H4 tag"
          />
        </div>
        <div className="story-group">
          <label>H5</label>
          <Title
            tag="h5"
            children="I am a H5 tag"
          />
        </div>
        <div className="story-group">
          <label>H6</label>
          <Title
            tag="h6"
            children="I am a H6 tag"
          />
        </div>
      </div>
    </Fragment>
  ));