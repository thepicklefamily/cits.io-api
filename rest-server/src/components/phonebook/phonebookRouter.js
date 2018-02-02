import express from 'express';
import validate from 'express-validation';
import passport from 'passport';

import { addPropertyPhonebookController, fetchPropertyPhonebookController } from './phonebookControllers';
import formValidation from '../../middleware/validation/request-validation';
import '../../middleware/validation/passport';

const router = express.Router();

router.route('/create')
  .post(validate(formValidation.addPhonebook), addPropertyPhonebookController);
router.route('/:propertyId')
  .get(fetchPropertyPhonebookController);


export default router;
