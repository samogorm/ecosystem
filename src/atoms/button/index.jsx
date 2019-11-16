import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = ({ label, type, action }) => (
  <button className={ `button ${type}` } onClick={ action }>
    { label }
  </button>
);

export default Button;