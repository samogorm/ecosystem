import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Checkbox = ({
  label
}) => {

  return(
   <div className="checkbox__wrapper">
    <input className="checkbox" type="checkbox" id="test"/>
    <label htmlFor="test" className="checkbox__label">{ label }</label>
   </div>
  )
};

export default Checkbox;