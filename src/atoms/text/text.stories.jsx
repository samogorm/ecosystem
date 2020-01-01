import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Text from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Atoms/Text', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>X-Small (xs)</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            size="xs"
          />
        </div>
        <div className="story-group">
          <label>X-Small (xs) - Bold</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            size="xs"
            weight="bold"
          />
        </div>
        <div className="story-group">
          <label>X-Small (xs) - Italic</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            size="xs"
            weight="italic"
          />
        </div>
      </div>
      <div className="stories-layout">
        <div className="story-group">
          <label>Small (sm)</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            size="sm"
          />
        </div>
        <div className="story-group">
          <label>Small (sm) - Bold</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            weight="bold"
            size="sm"
          />
        </div>
        <div className="story-group">
          <label>Primary - Italic</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            weight="italic"
            size="sm"
          />
        </div>
      </div>
      <div className="stories-layout">
        <div className="story-group">
          <label>Medium (md)</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
          />
        </div>
        <div className="story-group">
          <label>Medium (md) - Bold</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            weight="bold"
          />
        </div>
        <div className="story-group">
          <label>Medium (md)- Italic</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            weight="italic"
          />
        </div>
      </div>
      <div className="stories-layout">
        <div className="story-group">
          <label>Large (lg)</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            size="lg"
          />
        </div>
        <div className="story-group">
          <label>Large (lg) - Bold</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            weight="bold"
            size="lg"
          />
        </div>
        <div className="story-group">
          <label>Large (lg)- Italic</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            weight="italic"
            size="lg"
          />
        </div>
      </div>
      <div className="stories-layout">
        <div className="story-group">
          <label>X Large (xlg)</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            size="xlg"
          />
        </div>
        <div className="story-group">
          <label>X Large (xlg) - Bold</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            weight="bold"
            size="xlg"
          />
        </div>
        <div className="story-group">
          <label>X Large (xlg)- Italic</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            weight="italic"
            size="xlg"
          />
        </div>
      </div>
      <div className="stories-layout">
        <div className="story-group">
          <label>XX Large (xxlg)</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            size="xxlg"
          />
        </div>
        <div className="story-group">
          <label>XX Large (xxlg) - Bold</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            weight="bold"
            size="xxlg"
          />
        </div>
        <div className="story-group">
          <label>XX Large (xxlg)- Italic</label>
          <Text
            content="Spider-Man: Far From Home is the highest growing Marvel movie to date."
            weight="italic"
            size="xxlg"
          />
        </div>
      </div>
    </Fragment>
  ));