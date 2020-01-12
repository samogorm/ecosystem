import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Title = ({ tag: TagName, children, colour, margin }) => (
  <TagName className={`${TagName} ${TagName}--${colour} ${TagName}--${margin}`}>
    {children}
  </TagName>
);

Title.defaultProps = {
  margin: 'md-margin'
};

Title.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  children: PropTypes.node.isRequired,
  colour: PropTypes.string,
  margin: PropTypes.string
};

export default Title;
