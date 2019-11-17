import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Atoms/Button', module)
  .add('Primary', () => (
    <Button 
      label="Button label"
      colour="primary"
      action={ () => console.log('Clicked the primary button') } 
    />
  ))
  .add('Secondary', () => (
    <Button
      label="Button label"
      colour="secondary"
      action={() => console.log('Clicked the secondary button')}
    />
  ))
  .add('Danger', () => (
    <Button
      label="Button label"
      colour="danger"
      action={() => console.log('Clicked the danger button')}
    />
  ))
  .add('Dark', () => (
    <Button
      label="Button label"
      colour="dark"
      action={() => console.log('Clicked the dark button')}
    />
  ))
  .add('Light', () => (
    <Button
      label="Button label"
      colour="light"
      action={() => console.log('Clicked the light button')}
    />
  ))
  .add('Ghost - Primary', () => (
    <Button
      label="Button label"
      colour="primary"
      type="ghost"
      action={() => console.log('Clicked the primary button')}
    />
  ))
  .add('Ghost - Secondary', () => (
    <Button
      label="Button label"
      colour="secondary"
      type="ghost"
      action={() => console.log('Clicked the primary button')}
    />
  ))
  .add('Ghost - Danger', () => (
    <Button
      label="Button label"
      colour="danger"
      type="ghost"
      action={() => console.log('Clicked the primary button')}
    />
  ))
  .add('Ghost - Dark', () => (
    <Button
      label="Button label"
      colour="dark"
      type="ghost"
      action={() => console.log('Clicked the primary button')}
    />
  ))
  .add('Ghost - Light', () => (
    <Button
      label="Button label"
      colour="light"
      type="ghost"
      action={() => console.log('Clicked the primary button')}
    />
  ));