import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Checkbox = ({
  label,
  name,
  type,
  action
}) => {

  const [checked, setChecked] = useState(false);

  useEffect(() => action(checked), [checked]);

  return(
    <div className={`checkbox__wrapper checkbox__wrapper--${type}`} >
      <label htmlFor={ name } className={`checkbox__label checkbox__label--${ type }`}>
        <input
          className={`checkbox checkbox--${type}`}
          type="checkbox"
          id={ name }
          name={ name }
          defaultChecked={ checked }
          onChange={ () => setChecked(!checked) }
        />
        <span className={checked ? 'checkbox__selection checkbox__selection--checked' : 'checkbox__selection'}></span>
        { label }
      </label>
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
