import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Text = ({ content, size, weight }) => {
  return(
    <p className={`text text--${ size } text--${ weight }`}>{ content }</p>
  );
};

Text.defaultProps = {
  size: 'medium'
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired
};

export default Text;
