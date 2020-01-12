import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './../../molecules/form_group/index';
import Button from './../../atoms/button/index';
import Title from './../../atoms/title/index';

import { ValidationRule } from './../../helpers/ValidationRule';
import { formData } from './form_data';
import { validationRules } from './validation_rules';

import './styles.scss';

const LoginForm = ({ apiEndpoint, action }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rememberUser, setRememberUser] = useState(false);
  const [disableForm, setDisableForm] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const { email: emailData, password: passwordData, remember_user: rememberUserData } = formData;

  const isFormEmpty = () => (email === null || email === "") && (password === null || password === "");

  const submitForm = () => {
    // TODO: go and send off to api.
    console.log('submitting form')
  };

  useEffect(() => setDisableForm(isFormEmpty()), [email, password])

  return (
    <div className="login-form">
      <div className="login-form__title">
        <Title
          tag="h3"
          children="Login to your account"
        />
      </div>
      <FormGroup
        type="input"
        label={ emailData.label }
        data={ emailData }
        validationRules={ ValidationRule(validationRules.email) }
        action={value => setEmail(value)}
      />

      <FormGroup
        type="password"
        label={ passwordData.label }
        data={ passwordData }
        validationRules={ ValidationRule(validationRules.password) }
        action={value => setPassword(value)}
      />

      <FormGroup
        type="checkbox"
        label=""
        data={ rememberUserData }
        action={() => console.log('hello')}
      />

      <Button
        label="Login"
        colour="primary"
        action={() => (email !== null && password !== null) && submitForm()}
        disabled={ disableForm }
      />
    </div>
  );
};

LoginForm.propTypes = {

};

export default LoginForm;
