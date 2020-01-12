import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from './../error_message/index';
import { ValidateInput } from './../../helpers/ValidateInput';

import './styles.scss';

const Textarea = ({ id, name, error, validationRules, action }) => {
  let [value, setValue] = useState(null);
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

  useEffect(() => action(value), [value]);

  return(
    <div>
      <textarea
        id={id}
        name={name}
        className={error ? 'textarea textarea--error' : 'textarea'}
        onChange={(event) => setValue(event.target.value)}
        onBlur={() => validateField()}
      ></textarea>
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
};

Textarea.defaultProps = {
  error: false,
  validationRules: {}
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  action: PropTypes.func.isRequired
};

export default Textarea;
