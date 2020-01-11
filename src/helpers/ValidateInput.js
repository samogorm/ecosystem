const isEmailValid = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const isTypeValid = (value, type) => typeof value === type;
const isLengthValid = (length, maxLength) => length < maxLength + 1;
const isRequired = value => (value !== null) && (value !== 'undefined') && (value.length > 0);

const validateType = (value, type) => {
  switch(type) {
    case 'email':
      return {
        rule: 'type',
        value: value,
        message: 'Please enter an Email Address.',
        valid: isEmailValid(value)
      }
    case 'number':
      return {
        rule: 'type',
        value: value,
        message: 'Please enter a number.',
        valid: isTypeValid(value, 'number')
      }
    default:
      return {
        rule: 'type',
        value: value,
        message: 'Please enter a string.',
        valid: isTypeValid(value, 'string')
      }
  }
};

export const ValidateInput = (value, rules) => {
  const validation = [];

  if (rules.type !== 'any') validation.push(validateType(value, rules.type));

  if (rules.required) validation.push({
    rule: 'required',
    value: rules.required,
    message: 'This field is required.',
    valid: isRequired(value)
  });

  if (rules.length !== null) validation.push({
    rule: 'length',
    value: rules.length,
    message: `Max length is ${rules.length}.`,
    valid: isLengthValid(value.length, rules.length)
  });

  return validation;
}