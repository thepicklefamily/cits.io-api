import Joi from 'joi';

export default {
  signUp: {
    body: {
      email: Joi.string().email().required(),
      username: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      type: Joi.number().integer().min(0).max(1).required()
    }
  },
  login: {
    body: {
      username: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    }
  }
}