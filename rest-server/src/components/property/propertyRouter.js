import express from 'express';
import validate from 'express-validation';

import formValidation from '../../middleware/validation/request-validation';
import { addPropertyController, getPropertyByNameController, getPropertyByIDController } from './propertyControllers';

const router = express.Router();

router
  .route('/create')
  .post(
    validate(formValidation.addProperty),
    addPropertyController
  );

router
  .route('/fetch/name')
  .get(
    validate(formValidation.getPropertyByName),
    getPropertyByNameController
  );

router
  .route('/fetch/ID')
  .get(
    validate(formValidation.getPropertyByID),
    getPropertyByIDController
  );

export default router;
