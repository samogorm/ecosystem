import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './../../molecules/form_group/index';
import Button from './../../atoms/button/index';
import Title from './../../atoms/title/index';

import { ValidationRule } from './../../helpers/ValidationRule';
import { formFields } from './form_fields';
import { validationRules } from './validation_rules';

import './styles.scss';

const LoginForm = ({ formData }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rememberUser, setRememberUser] = useState(false);
  const [disableForm, setDisableForm] = useState(true);

  const { email: emailField, password: passwordField, remember_user: rememberUserField } = formFields;

  const isFormEmpty = () => (email === null || email === "") && (password === null || password === "");

  const submitForm = () => {
    const data = {
      email,
      password,
      rememberUser
    }

    return formData(data);
  };

  useEffect(() => setDisableForm(isFormEmpty()), [email, password]);

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
        label={ emailField.label }
        data={ emailField }
        validationRules={ ValidationRule(validationRules.email) }
        action={value => setEmail(value)}
      />

      <FormGroup
        type="password"
        label={ passwordField.label }
        data={ passwordField }
        validationRules={ ValidationRule(validationRules.password) }
        action={value => setPassword(value)}
      />

      <FormGroup
        type="checkbox"
        label=""
        data={ rememberUserField }
        action={value => setRememberUser(value)}
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
  formData: PropTypes.func.isRequired
};

export default LoginForm;
