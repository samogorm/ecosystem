export const validationRules = {
  firstname: {
    type: 'string',
    length: 200,
    required: true
  },
  lastname: {
    type: 'string',
    length: 200,
    required: true
  },
  email: {
    type: 'email',
    length: 200,
    required: true
  },
  username: {
    type: 'string',
    length: 200,
    required: true
  },
  password: {
    type: null,
    length: null,
    required: true
  },
  confirm_password: {
    type: null,
    length: null,
    required: true
  }
};
