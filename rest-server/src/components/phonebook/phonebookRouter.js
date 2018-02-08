import express from 'express';
import validate from 'express-validation';
import passport from 'passport';

import { addPropertyPhonebookController, fetchPropertyPhonebookController, updatePropertyPhonebookController, deletePropertyPhonebookController } from './phonebookControllers';
import formValidation from '../../middleware/validation/request-validation';
import '../../middleware/validation/passport';

const router = express.Router();

// BE WARY, SINGLE QUOTES DO NOT WORK WHILE CREATING OR UPDATING PHONEBOOK ENTRIES
// IMPLEMENT POSTGRESQL REPLACE METHOD
router.route('/create')
  .post(validate(formValidation.addPhonebook),
  addPropertyPhonebookController);
router.route('/:propertyId')
  .get(fetchPropertyPhonebookController);
router.route('/update')
  .put(validate(formValidation.updatePhonebook), 
  updatePropertyPhonebookController);
router.route('/delete/:id')
  .delete(deletePropertyPhonebookController);

export default router;
