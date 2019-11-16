import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = ({ label, type, action }) => (
  <button className={ `button button--${type}` } onClick={ action }>
    { label }
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default Button;