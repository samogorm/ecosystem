import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = ({ label, colour, type, action }) => (
  <button className={`button ${type !== undefined ? 'button--' + type + '--' + colour : 'button--' + colour }` } onClick={ action }>
    { label }
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  type: PropTypes.string,
  action: PropTypes.func
}

export default Button;