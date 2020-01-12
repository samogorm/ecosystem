import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Radio = ({
  id,
  name,
  options,
  defaultChecked,
  action
}) => {
  const [checkedValue, setCheckedValue] = useState(defaultChecked);

  const changeOption = value => {
    let checkedOption = options.find(option => option.value === value);
    checkedOption.checked = true;

    setCheckedValue(checkedOption);
  };

  const removePrevState = () => {
    let prev = options.find(option => (option.checked === true));
    if (prev !== undefined) prev.checked = false;
  }

  useEffect(() => {
    removePrevState();
    action(checkedValue)
  }, [checkedValue]);

  return (
    <div className="radio__block">
      {options.map((option, index) => {
        const key = `${id}-${index}`;
        const { label, value, checked } = option;
        return (
          <label htmlFor={ key } key={ key } className="radio__label">
            <input
              type="radio"
              id={ key }
              name={ name }
              value={ value }
              defaultChecked={ checked }
              className="radio"
              onChange={ e => changeOption(e.target.value) }
            />
            <span className={checked ? 'radio__selection radio__selection--checked' : 'radio__selection'}></span>
            { label }
          </label>
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
  action: PropTypes.bool.isRequired
};

export default Radio;
