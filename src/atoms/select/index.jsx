import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from './../../libraries/icons/index';

import './styles.scss';

const Select = ({
  selectedValue,
  name,
  options,
  hasError
}) => {
  let [selected, setSelected] = useState(selectedValue);

  const removePrevState = () => {
    let prev = options.find(option => (option.selected === true) && (option.value !== selected.value));
    if(prev !== undefined) prev.selected = false;
  }

  useEffect(() => removePrevState(), [selected]);

  return (
    <div className="select__wrapper">
      <select
        name={ name }
        defaultValue={ selected }
        onChange={event => {
          let selectedOption = options.find(option => option.value === event.target.value);
          selectedOption.selected = true;

          setSelected(selectedOption);
        }}
        className={hasError ? 'select select--error' : 'select'}
      >
        {options.map(option => {
          const { label, value } = option;
          return (
            <option key={ value } value={ value }>
              { label }
            </option>
          );
        })}
      </select>

      <div className="select__icon">
        <ChevronDown />
      </div>
    </div>
  );
};

Select.defaultProps = {
  hasError: false
};

Select.propTypes = {
  selectedValue: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  hasError: PropTypes.bool,
};

export default Select;
