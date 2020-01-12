import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './../../molecules/form_group/index';
import Button from './../../atoms/button/index';
import Title from './../../atoms/title/index';

import { ValidationRule } from './../../helpers/ValidationRule';
import { formFields } from './form_fields';
import { validationRules } from './validation_rules';

import './styles.scss';

const RegisterForm = ({ formData }) => {
  const {
    firstname: firstnameField,
    lastname: lastnameField,
    username: usernameField,
    email: emailField,
    password: passwordField,
    confirm_password: confirmPasswordField
  } = formFields;

  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [disableForm, setDisableForm] = useState(true);

  const submitForm = () => {
    const data = {
      firstname,
      lastname,
      email,
      username,
      password
    }

    return formData(data);
  };

  const isFormReady = () => {
    return (firstname !== null) && (lastname !== null) && (username !== null) && (email !== null) && (password !== null) && (confirmPassword === password);
  };

  useEffect(() => setDisableForm(!isFormReady()), [firstname, lastname, username, email, password, confirmPassword]);

  return (
    <div className="register-form">
      <div className="login-form__title">
        <Title
          tag="h3"
          children="Create an account"
        />
      </div>
      <FormGroup
        type="input"
        label={firstnameField.label}
        data={firstnameField}
        validationRules={ValidationRule(validationRules.firstname)}
        action={value => setFirstname(value)}
      />

      <FormGroup
        type="input"
        label={lastnameField.label}
        data={lastnameField}
        validationRules={ValidationRule(validationRules.lastname)}
        action={value => setLastname(value)}
      />

      <FormGroup
        type="input"
        label={emailField.label}
        data={emailField}
        validationRules={ValidationRule(validationRules.email)}
        action={value => setEmail(value)}
      />

      <FormGroup
        type="input"
        label={usernameField.label}
        data={usernameField}
        validationRules={ValidationRule(validationRules.username)}
        action={value => setUsername(value)}
      />

      <FormGroup
        type="password"
        label={passwordField.label}
        data={passwordField}
        validationRules={ValidationRule(validationRules.password)}
        action={value => setPassword(value)}
      />

      <FormGroup
        type="password"
        label={confirmPasswordField.label}
        data={confirmPasswordField}
        validationRules={ValidationRule(validationRules.password)}
        action={value => setConfirmPassword(value)}
      />

      <Button
        label="Create account"
        colour="primary"
        action={() => isFormReady() && submitForm()}
        disabled={ disableForm }
      />
    </div>
  );
};

RegisterForm.propTypes = {
  formData: PropTypes.func.isRequired
};

export default RegisterForm;
