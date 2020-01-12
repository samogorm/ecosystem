import React from 'react';
import PropTypes from 'prop-types';

import Text from './../text/index';

import './styles.scss';

const Tooltip = ({ content, backgroundColour, fontSize, fontColour }) => (
  <span className={`tooltip tooltip--${backgroundColour}`}>
    <Text
      content={content}
      size={ fontSize }
      weight="bold"
      colour={ fontColour }
    />
  </span>
);

Tooltip.defaultProps = {
  backgroundColour: 'bg-dark',
  fontSize: 'xs',
  fontColour: 'white'
};

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  backgroundColour: PropTypes.string,
  fontSize: PropTypes.string,
  fontColour: PropTypes.string
};

export default Tooltip;
