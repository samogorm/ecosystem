import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './../../molecules/form_group/index';
import { ValidationRule } from './../../helpers/ValidationRule';
import { data } from './data';

import './styles.scss';

const LoginForm = ({ }) => {
  const [submitted, setSubmitted] = useState(false);

  const { email: emailData, password: passwordData, remember_user: rememberUserData } = data;

  return (
    <form className="login-form">
      <FormGroup
        type="input"
        label={ emailData.label }
        data={ emailData }
      />

      <FormGroup
        type="input"
        label={ passwordData.label }
        data={ passwordData }
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