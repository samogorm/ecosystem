import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Atoms/Button', module)
  .add('Primary', () => (
    <Button 
      label="Button label"
      type="primary"
      action={ () => console.log('Clicked the primary button') } 
    />
  ))
  .add('Secondary', () => (
    <Button
      label="Button label"
      type="secondary"
      action={() => console.log('Clicked the secondary button')}
    />
  ))
  .add('Danger', () => (
    <Button
      label="Button label"
      type="danger"
      action={() => console.log('Clicked the danger button')}
    />
  ))
  .add('Dark', () => (
    <Button
      label="Button label"
      type="dark"
      action={() => console.log('Clicked the dark button')}
    />
  ))
  .add('Light', () => (
    <Button
      label="Button label"
      type="light"
      action={() => console.log('Clicked the light button')}
    />
  ));