import React from 'react';

import './styles.scss'

const ErrorMessage = ({ message }) => (
  <div className="error-message">
    <p>{ message }</p>
  </div>
);

export default ErrorMessage;
