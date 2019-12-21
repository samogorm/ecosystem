import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ content, size, weight }) => {
  return(
    <p className={`text text--${size} text--${weight}`}>{ content }</p>
  );
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired
};

export default Text;
