import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Title = ({ tag: TagName, children, colour }) => (
  <TagName className={`${TagName} ${TagName}--${colour}`}>
    {children}
  </TagName>
);

export default Title;

Title.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  children: PropTypes.node.isRequired
};
