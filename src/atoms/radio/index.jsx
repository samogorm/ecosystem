import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Radio = ({
  id,
  name,
  options,
  defaultChecked
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const changeOption = event => {
    let checkedOption = options.find(option => option.value === event.target.getAttribute('data-radio'));
    checkedOption.checked = true;

    setChecked(checkedOption);
  };

  const removePrevState = () => {
    let prev = options.find(option => (option.checked === true) && (option.value !== checked.value));
    if (prev !== undefined) prev.checked = false;
  }

  useEffect(() => removePrevState(), [checked]);

  return (
    <div className="radio__block">
      {options.map((option, index) => {
        const key = `${id}-${index}`;
        const { label, value, checked } = option;
        return (
          <button className="radio__wrapper" key={ key } data-radio={ value } onClick={ event => changeOption(event) }>
            <input
              type="radio"
              id={ key }
              name={ name }
              value={ value }
              defaultChecked={ checked }
              data-radio={ value }
              className="radio" />
            <label htmlFor={key} className="radio__label" data-radio={ value }>{ label }</label>
          </button>
        );
      })}
    </div>
  );
};

Radio.propTypes =  {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.any,
  defaultChecked: PropTypes.bool.isRequired,
};

export default Radio;
