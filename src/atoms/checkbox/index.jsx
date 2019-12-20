import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Checkbox = ({
  label,
  name,
  type
}) => {

  return(
    <div className={`checkbox__wrapper checkbox__wrapper--${type}`} >
      <input className={`checkbox checkbox--${ type }`} type="checkbox" id={ name } name={ name }/>
      <label htmlFor={ name } className={`checkbox__label checkbox__label--${ type }`}>{ label }</label>
    </div>
  )
};

Checkbox.defaultProps = {
  type: 'default'
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Checkbox;