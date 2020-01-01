import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Image from './index';

import './../../global/styles/stories/default.scss';

storiesOf('Atoms/Image', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Original</label>
          <Image
            src="https://www.sideshow.com/storage/product-images/903735/spider-man-advanced-suit_marvel_silo.png"
            label="Spiderman image"
          />
        </div>
        <div className="story-group">
          <label>X Small</label>
          <Image
            src="https://www.sideshow.com/storage/product-images/903735/spider-man-advanced-suit_marvel_silo.png"
            label="Spiderman image"
            size="xs"
          />
        </div>
        <div className="story-group">
          <label>Small</label>
          <Image
            src="https://www.sideshow.com/storage/product-images/903735/spider-man-advanced-suit_marvel_silo.png"
            label="Spiderman image"
            size="sm"
          />
        </div>
        <div className="story-group">
          <label>Medium</label>
          <Image
            src="https://www.sideshow.com/storage/product-images/903735/spider-man-advanced-suit_marvel_silo.png"
            label="Spiderman image"
            size="md"
          />
        </div>
        <div className="story-group">
          <label>Large</label>
          <Image
            src="https://www.sideshow.com/storage/product-images/903735/spider-man-advanced-suit_marvel_silo.png"
            label="Spiderman image"
            size="lg"
          />
        </div>
        <div className="story-group">
          <label>X Large</label>
          <Image
            src="https://www.sideshow.com/storage/product-images/903735/spider-man-advanced-suit_marvel_silo.png"
            label="Spiderman image"
            size="xlg"
          />
        </div>
        <div className="story-group">
          <label>XX Large</label>
          <Image
            src="https://www.sideshow.com/storage/product-images/903735/spider-man-advanced-suit_marvel_silo.png"
            label="Spiderman image"
            size="xxlg"
          />
        </div>
      </div>
    </Fragment>
  ));