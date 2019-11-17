import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = ({ label, colour, type, action }) => {
  const classList = () => {
    let classes = [];

    if (type !== 'ghost') {
      classes.push(`button--${colour}`);
      if( type !== undefined) classes.push(`button--${type}`);
    } else {
      classes.push(`button--${type}--${colour}`);
    }

    return classes.join(' ');
  };

  return (
    <button className={`button ${ classList() }`} onClick={action}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  type: PropTypes.string,
  action: PropTypes.func
}

export default Button;