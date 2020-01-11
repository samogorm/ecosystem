import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './../molecules/form_group/index';
import { ValidationRule } from './../helpers/ValidationRule';

import './styles.scss';

const emailData = {
  label: 'Email Address',
  name: 'email',
  initialValue: '',
  options: []
};

const passwordData = {
  label: 'Password',
  name: 'password',
  initialValue: '',
  options: []
};

const rememberData = {
  label: 'Remember for future logins',
  name: 'remember_user',
  initialValue: '',
  options: []
};

const LoginForm = ({ }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="login-form">
      <FormGroup
        type="input"
        label={emailData.label}
        data={emailData}
      />
      
      <FormGroup
        type="input"
        label={passwordData.label}
        data={passwordData}
      />

      <FormGroup
        type="checkbox"
        label=""
        data={rememberData}
      />
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {

};