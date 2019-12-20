import React, { useState, useEffect } from 'react';
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

export default Radio;