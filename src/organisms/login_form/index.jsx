import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './../../molecules/form_group/index';
import { ValidationRule } from './../../helpers/ValidationRule';
import { formData } from './form_data';
import { validationRules } from './validation_rules';

import './styles.scss';

const LoginForm = ({ }) => {
  const [submitted, setSubmitted] = useState(false);

  const { email: emailData, password: passwordData, remember_user: rememberUserData } = formData;

  return (
    <form className="login-form">
      <FormGroup
        type="input"
        label={ emailData.label }
        data={ emailData }
        validationRules={ ValidationRule(validationRules.email) }
      />

      <FormGroup
        type="input"
        label={ passwordData.label }
        data={ passwordData }
        validationRules={ ValidationRule(validationRules.password) }
      />

      <FormGroup
        type="checkbox"
        label=""
        data={ rememberUserData }
      />
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {

};