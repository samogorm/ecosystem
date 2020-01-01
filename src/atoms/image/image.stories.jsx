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

      <div className="stories-layout">
        <div className="story-group">
          <label>Circle</label>
          <Image
            src="http://cdn.shopify.com/s/files/1/0865/6500/products/61t4Zr0AYRL._SL1000_1024x1024.jpg?v=1571439213"
            label="Spiderman image"
            shape="circle"
            size="md"
          />
        </div>
        <div className="story-group">
          <label>Square</label>
          <Image
            src="http://cdn.shopify.com/s/files/1/0865/6500/products/61t4Zr0AYRL._SL1000_1024x1024.jpg?v=1571439213"
            label="Spiderman image"
            shape="square"
            size="md"
          />
        </div>
      </div>
    </Fragment>
  ));