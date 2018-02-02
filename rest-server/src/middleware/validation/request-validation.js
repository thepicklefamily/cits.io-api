import Joi from 'joi';

export default {
  signUp: {
    body: {
      full_name: Joi.string().required(),
      email: Joi.string().email().required(),
      username: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      type: Joi.number().integer().min(0).max(1).required(),
      phonenumber: Joi.string().required()
    }
  },

  login: {
    body: {
      username: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    }
  },
  
  addProperty: {
    body: {
      secret_key: Joi.string().required(),
      name: Joi.string().required(),
      address: Joi.string().required()
    }
  },

  getProperty: {
    query: {
      name: Joi.string().required()
    }
  },

  addPhonebook: {
    body: {
      company: Joi.string().required(),
      service: Joi.string().required(),
      contactInfo: Joi.string().required(),
      propertyId: Joi.string().required()
    }
  },

  addArticle: {
    body: {
      title: Joi.string().required(),
      content: Joi.string().required(),
      date: Joi.string().required()
    }
  },

  editArticle: {
    body: {
      article_id: Joi.number().integer().required(),
      title: Joi.string().required(),
      content: Joi.string().required(),
      date: Joi.string().required(),
    }
  }

}