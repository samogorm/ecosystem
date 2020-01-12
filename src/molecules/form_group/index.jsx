import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Input from './../../atoms/input/index';
import Select from './../../atoms/select/index';
import Checkbox from './../../atoms/checkbox/index';
import Radio from './../../atoms/radio';
import Textarea from './../../atoms/textarea/index';

import './styles.scss';

const FormGroup = ({
  type,
  label,
  data,
  validationRules,
  action
}) => {

  const renderFormElement = () => {
    const { label, name, initialValue, options } = data;
    switch(type) {
      case 'select':
        return (
          <Select
            selectedValue={ options.find(option => option.selected === true) }
            name="email"
            options={ options }
            validationRules={ validationRules }
          />
        );
      case 'checkbox':
        return (
          <Checkbox
            label={ label }
            name={ name }
          />
        );
      case 'radio':
        return (
          <Radio
            id={ name }
            name={ name }
            options={ options }
            defaultChecked={ options.find(option => option.checked === true) }
          />
        );
      case 'textarea':
        return (
          <Textarea
            id={ name }
            name={ name }
            validationRules={ validationRules }
          />
        );
      case 'password':
        return (
          <Input
            initialValue={ initialValue }
            name={ name }
            type="password"
            placeholder={`${label}...`}
            validationRules={ validationRules }
            action={value => action(value)}
          />
        );
      default:
        return (
          <Input
            initialValue={ initialValue }
            name={ name }
            placeholder={`${label}...`}
            validationRules={ validationRules }
            action={value => action(value)}
          />
        );
    }
  }

  return (
    <div className="form-group">
      <label className="form-group__label"><strong>{ label }</strong></label>
      { renderFormElement() }
    </div>
  );
};

FormGroup.defaultProps = {
  validationRules: {}
};

FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.objectOf({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
  }),
  validationRules: PropTypes.object
};

export default FormGroup;
