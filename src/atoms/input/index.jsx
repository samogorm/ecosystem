import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../error_message';
import { ValidateInput } from './../../helpers/ValidateInput';

import './styles.scss';

const Input = ({ 
  initialValue,
  name,
  type,
  placeholder,
  validationRules,
  action
}) => {
  let [value, setValue] = useState(initialValue);
  let [isValid, setIsValid] = useState(true);
  let [validationItems, setValidationItems] = useState([]);

  const validateField = () => {
    if (Object.keys(validationRules).length > 0) {
      const validationItems = ValidateInput(value, validationRules);
      const isValidInput = validationItems.every(item => item.valid === true);
  
      setIsValid(isValidInput);
      setValidationItems(validationItems);
    } else {
      setIsValid(true);
    }
  }

  useEffect(() => {
    if (isValid) action(value);
    else action(null);
  }, [value, isValid]);

  return (
    <div>
      <input
        type={ type }
        value={ value }
        name={ name }
        onBlur={() => validateField()}
        onChange={(event) => setValue(event.target.value) }
        placeholder={ placeholder }
        className={ isValid ? 'input' : 'input input--error' }
      />

      {!isValid && 
        validationItems.filter(item => !item.valid).map(item => (
          <ErrorMessage
            key={`error-message-${item.rule}`}
            message={item.message}
          />
        ))
      }
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  validationRules: {}
};

Input.propTypes = {
  initialValue: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  validationRules: PropTypes.object,
  action: PropTypes.func.isRequired
};

export default Input;