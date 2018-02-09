import express from 'express';
import cors from 'cors'; // enables CORS with various options.
import parser from 'body-parser';  // you know what this is
import helmet from 'helmet';  // helmet is a collection of 12 smaller middleware functions that secures express Apps by setting various http headers.

import router from '../../routes/index';
import { verifyToken } from '../../middleware/auth/jwt.js';

const middleWare = [
  helmet(),           //It's best to use Helmet early in your middleware stack so that its headers are sure to be set.
  cors({
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT','DELETE', 'OPTIONS']
  }),
  parser.json(),      //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option. 
  parser.urlencoded({ extended: true }), //The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
  verifyToken
]

class App {
  constructor() {
    this.express = express();
    this.mountMiddleWare();
    this.mountRoutes();
  }

  mountMiddleWare() {
    this.express.use(...middleWare);
  }

  mountRoutes() {
    this.express.use('/api', router);
  }
}

export default new App();

