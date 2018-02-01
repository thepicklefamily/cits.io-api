import express from 'express';
import validate from 'express-validation';

import formValidation from '../../middleware/validation/request-validation';
import { addPropertyController } from './propertyControllers';

const router = express.Router();

router
  .route('/create')
  .post(
    validate(formValidation.addProperty),
    addPropertyController
  );

export default router;
