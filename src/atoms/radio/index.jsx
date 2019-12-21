import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Radio = ({
  id,
  name,
  value,
  checked
}) => {
  return (
    <div className="radio__wrapper">
      <input type="radio" id={ id } name={ name } value={ value } checked={ checked } className="radio" />
      <label for={ id } className="radio__label">{ value }</label>
    </div>
  );
};

Radio.propTypes =  {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Radio;