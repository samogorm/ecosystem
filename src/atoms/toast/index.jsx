import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Certificate } from './../../libraries/icons/index';

import './styles.scss';

const Toast = ({ icon, text, position, yAxis, xAxis, colour, delay }) => {
  const [ showToast, setShowToast ] = useState('show');

  const hideAfterDelay = () => {
    setTimeout(() => setShowToast('hide'), delay);
  };

  useEffect(() => hideAfterDelay(), [showToast]);

  return (
    <button
      className={`toast toast--${position} toast--${yAxis} toast--${xAxis} toast--${colour} toast--${showToast}`}
      onClick={ () => setShowToast('hide') }
    >
      <span className="toast__icon">{icon}</span>
      <p className="toast__text">{text}</p>
    </button>
  );
}

Toast.defaultProps = {
  icon: <Certificate />,
  position: 'absolute',
  yAxis: 'top',
  xAxis: 'right',
  colour: 'dark',
  delay: 5000,
};

Toast.propTypes = {
  icon: PropTypes.element.isRequired,
  position: PropTypes.string,
  text: PropTypes.string.isRequired,
  yAxis: PropTypes.oneOf(['top', 'center', 'bottom']),
  xAxis: PropTypes.oneOf(['left', 'center', 'right']),
  colour: PropTypes.string,
  delay: PropTypes.number
};

export default Toast;
