import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({ 
  initialValue,
  name,
  placeholder
}) => {
  let [value, setValue] = useState(initialValue);

  return (
    <input
      type="text"
      value={ value }
      name={ name }
      onChange={ (event) => setValue(event.target.value) }
      placeholder={ placeholder }
      className="input"
    />
  );
}

Input.propTypes = {
  initialValue: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default Input;