import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Link = ({ label, to, colour }) => (
  <a href={to} className={`link link--${colour}`}>
   { label }
  </a>
);

Link.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired
}

export default Link;