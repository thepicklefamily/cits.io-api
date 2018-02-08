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

  getPropertyByName: {
    query: {
      name: Joi.string().required()
    }
  },

  getPropertyByID: {
    query: {
      id: Joi.number().integer().required()
    }
  },

  addAptUnit: {
    body: {
      unit: Joi.string().required()
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

  updatePhonebook: {
    body: {
      id: Joi.string().required(),
      company: Joi.string().required(),
      service: Joi.string().required(),
      contactInfo: Joi.string().required()
    }
  },

  addArticle: {
    body: {
      title: Joi.string().required(),
      content: Joi.string().required(),
      date: Joi.string().required(),
      photo_url: Joi.string().required(),
      user_id: Joi.number().integer().required(),
      property_id: Joi.number().integer().required()
    }
  },

  editArticle: {
    body: {
      article_id: Joi.number().integer().required(),
      title: Joi.string().required(),
      content: Joi.string().required(),
      date: Joi.string().required(),
      photo_url: Joi.string().required()
    }
  },

  addTicket: {
    body: {
      category: Joi.string().required(),
      apt_num: Joi,
      date: Joi.string().required(),
      subject: Joi.string().required(),
      description: Joi.string().required(),
      photo_url: Joi,
      status: Joi.string().required(),
      userId: Joi.number().integer().required(),
      propertyId: Joi.number().integer().required()
    }
  },

  editTicket: {
    body: {
      category: Joi.string().required(),
      apt_num: Joi,
      date: Joi.string().required(),
      subject: Joi.string().required(),
      description: Joi.string().required(),
      photo_url: Joi,
      status: Joi.string().required(),
      userid: Joi.number().integer().required(),
      propertyid: Joi.number().integer().required(),
      id: Joi.number().integer().required()
    }
  }

};
