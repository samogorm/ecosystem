import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Checkbox = ({
  label,
  name
}) => {

  return(
   <div className="checkbox__wrapper">
    <input className="checkbox" type="checkbox" id={ name } name={ name }/>
    <label htmlFor={ name } className="checkbox__label">{ label }</label>
   </div>
  )
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Checkbox;