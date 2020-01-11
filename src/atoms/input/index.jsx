import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../error_message';
import { ValidateInput } from './../../helpers/ValidateInput';

import './styles.scss';

const Input = ({ 
  initialValue,
  name,
  placeholder,
  validationRules
}) => {
  let [value, setValue] = useState(initialValue);
  let [isValid, setIsValid] = useState(true);
  let [validationItems, setValidationItems] = useState([]);

  return (
    <div>
      <input
        type="text"
        value={ value }
        name={ name }
        onChange={ (event) => setValue(event.target.value) }
        onBlur={() => {
          const validationItems = ValidateInput(value, validationRules);
          const isValidInput = validationItems.every(item => item.valid === true);

          setIsValid(isValidInput);
          setValidationItems(validationItems);
        }}
        placeholder={ placeholder }
        className={ isValid ? 'input' : 'input input--error' }
      />

      {!isValid && 
        validationItems.filter(item => !item.valid).map(item => (
          <ErrorMessage
            message={item.message}
          />
        ))
      }
    </div>
  );
}

// Input.defaultProps = {
//   validationRules: []
// };

Input.propTypes = {
  initialValue: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  validationRules: PropTypes.array
};

export default Input;