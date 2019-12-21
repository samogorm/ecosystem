import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Textarea = ({ id, name, error }) => {
  return(
    <textarea id={id} name={name} className={error ? 'textarea textarea--error' : 'textarea'}></textarea>
  );
};

Textarea.defaultProps = {
  error: false
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool
};

export default Textarea;
