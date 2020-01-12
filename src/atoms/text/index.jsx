import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Text = ({ content, size, weight, colour }) => {
  return(
    <p className={`text text--${size} text--${weight} text--${colour}`}>{ content }</p>
  );
};

Text.defaultProps = {
  size: 'medium',
  weight: 'normal',
  colour: 'dark'
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.string,
  weight: PropTypes.string.isRequired,
  colour: PropTypes.string
};

export default Text;
