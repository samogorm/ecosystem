import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Atoms/Button', module)
  .add('Primary', () => (
    <Button 
      label="Login"
      type="primary"
      action={ () => console.log('Clicked the primary button') } 
    />
  ));