import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

import './../../global/styles/stories/default.scss';

const clicked = () => console.log('Clicked button...');

storiesOf('Atoms/Button', module)
  .add('Default', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Button
            label="Button label"
            colour="primary"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Secondary</label>
          <Button
            label="Button label"
            colour="secondary"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Danger</label>
          <Button
            label="Button label"
            colour="danger"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Dark</label>
          <Button
            label="Button label"
            colour="dark"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Light</label>
          <Button
            label="Button label"
            colour="light"
            action={() => clicked()}
          />
        </div>
      </div>
    </Fragment>
  ))
  .add('Ghost', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Button
            label="Button label"
            colour="primary"
            type="ghost"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Secondary</label>
          <Button
            label="Button label"
            colour="secondary"
            type="ghost"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Danger</label>
          <Button
            label="Button label"
            colour="danger"
            type="ghost"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Dark</label>
          <Button
            label="Button label"
            colour="dark"
            type="ghost"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Light</label>
          <Button
            label="Button label"
            colour="light"
            type="ghost"
            action={() => clicked()}
          />
        </div>
      </div>
    </Fragment>
  ))
  .add('Small', () => (
    <Fragment>
      <div className="stories-layout">
        <div className="story-group">
          <label>Primary</label>
          <Button
            label="Button label"
            colour="primary"
            type="small"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Secondary</label>
          <Button
            label="Button label"
            colour="secondary"
            type="small"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Danger</label>
          <Button
            label="Button label"
            colour="danger"
            type="small"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Dark</label>
          <Button
            label="Button label"
            colour="dark"
            type="small"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Light</label>
          <Button
            label="Button label"
            colour="light"
            type="small"
            action={() => clicked()}
          />
        </div>
      </div>
    </Fragment>
  ))
  .add('Block', () => (
    <Fragment>
      <div className="stories-layout stories-layout--column">
        <div className="story-group">
          <label>Primary</label>
          <Button
            label="Button label"
            colour="primary"
            type="block"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Secondary</label>
          <Button
            label="Button label"
            colour="secondary"
            type="block"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Danger</label>
          <Button
            label="Button label"
            colour="danger"
            type="block"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Dark</label>
          <Button
            label="Button label"
            colour="dark"
            type="block"
            action={() => clicked()}
          />
        </div>
        <div className="story-group">
          <label>Light</label>
          <Button
            label="Button label"
            colour="light"
            type="block"
            action={() => clicked()}
          />
        </div>
      </div>
    </Fragment>
  ));