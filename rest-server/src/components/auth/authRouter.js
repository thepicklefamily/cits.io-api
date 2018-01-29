import express from 'express';
import validate from 'express-validation';
import passport from 'passport';

import {
  /*signUpController,*/
  loginController
} from './authControllers';
import formValidation from '../../middleware/validation/request-validation';

const router = express.Router();

router.route('/signup')
  .post(validate(formValidation.signUp), /* signupController */);

router.route('/login')
  .post(validate(formValidation.login), passport.authenticate('local', { session: false }), loginController);

export default router;