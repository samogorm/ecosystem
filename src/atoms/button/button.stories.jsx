import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

const clicked = () => console.log('Clicked button...');

storiesOf('Atoms/Button', module)
  .add('Default', () => (
    <Button 
      label="Button label"
      colour="primary"
      action={ () => clicked() } 
    />
  ))
  .add('Secondary', () => (
    <Button
      label="Button label"
      colour="secondary"
      action={ () => clicked() }
    />
  ))
  .add('Danger', () => (
    <Button
      label="Button label"
      colour="danger"
      action={ () => clicked() }
    />
  ))
  .add('Dark', () => (
    <Button
      label="Button label"
      colour="dark"
      action={() => clicked()} 
    />
  ))
  .add('Light', () => (
    <Button
      label="Button label"
      colour="light"
      action={ () => clicked() }
    />
  ))
  .add('Ghost - Primary', () => (
    <Button
      label="Button label"
      colour="primary"
      type="ghost"
      action={ () => clicked() }
    />
  ))
  .add('Ghost - Secondary', () => (
    <Button
      label="Button label"
      colour="secondary"
      type="ghost"
      action={ () => clicked() }
    />
  ))
  .add('Ghost - Danger', () => (
    <Button
      label="Button label"
      colour="danger"
      type="ghost"
      action={ () => clicked() }
    />
  ))
  .add('Ghost - Dark', () => (
    <Button
      label="Button label"
      colour="dark"
      type="ghost"
      action={ () => clicked() }
    />
  ))
  .add('Ghost - Light', () => (
    <Button
      label="Button label"
      colour="light"
      type="ghost"
      action={ () => clicked() }
    />
  ))
  .add('Small - Primary', () => (
    <Button
      label="Button label"
      colour="primary"
      type="small"
      action={ () => clicked() }
    />
  ))
  .add('Small - Secondary', () => (
    <Button
      label="Button label"
      colour="secondary"
      type="small"
      action={() => clicked()}
    />
  ))
  .add('Small - Danger', () => (
    <Button
      label="Button label"
      colour="danger"
      type="small"
      action={() => clicked()}
    />
  ))
  .add('Small - Dark', () => (
    <Button
      label="Button label"
      colour="dark"
      type="small"
      action={() => clicked()}
    />
  ))
  .add('Small - Light', () => (
    <Button
      label="Button label"
      colour="light"
      type="small"
      action={() => clicked()}
    />
  ))
  .add('Block - Primary', () => (
    <Button
      label="Button label"
      colour="primary"
      type="block"
      action={() => clicked()}
    />
  ))
  .add('Block - Secondary', () => (
    <Button
      label="Button label"
      colour="secondary"
      type="block"
      action={() => clicked()}
    />
  ))
  .add('Block - Danger', () => (
    <Button
      label="Button label"
      colour="secondary"
      type="block"
      action={() => clicked()}
    />
  ))
  .add('Block - Dark', () => (
    <Button
      label="Button label"
      colour="dark"
      type="block"
      action={() => clicked()}
    />
  ))
  .add('Block - Light', () => (
    <Button
      label="Button label"
      colour="light"
      type="block"
      action={() => clicked()}
    />
  ));