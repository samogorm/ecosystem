import React from 'react';
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

  return (
    <div className="register-form">
      <div className="login-form__title">
        <Title
          tag="h3"
          children="Login to your account"
        />
      </div>
      <FormGroup
        type="input"
        label={firstnameField.label}
        data={firstnameField}
        validationRules={ValidationRule(validationRules.firstname)}
        action={value => console.log(value)}
      />

      <FormGroup
        type="input"
        label={lastnameField.label}
        data={lastnameField}
        validationRules={ValidationRule(validationRules.lastname)}
        action={value => console.log(value)}
      />

      <FormGroup
        type="input"
        label={usernameField.label}
        data={usernameField}
        validationRules={ValidationRule(validationRules.username)}
        action={value => console.log(value)}
      />

      <FormGroup
        type="password"
        label={passwordField.label}
        data={passwordField}
        validationRules={ValidationRule(validationRules.password)}
        action={value => console.log(value)}
      />

      <FormGroup
        type="password"
        label={confirmPasswordField.label}
        data={confirmPasswordField}
        validationRules={ValidationRule(validationRules.password)}
        action={value => console.log(value)}
      />

      <Button
        label="Login"
        colour="primary"
        action={() => console.log()}
        disabled={false}
      />
    </div>
  );
};

export default RegisterForm;
