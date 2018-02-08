import express from 'express';
import validate from 'express-validation';

import formValidation from '../../middleware/validation/request-validation';
import { addAptUnitController, getAptUnitByIDController } from './aptUnitsControllers';

const router = express.Router();

router
  .route('/create')
  .post(
    validate(formValidation.addAptUnit),
    addAptUnitController
  );

router
  .route('/fetch')
  .get(getAptUnitByIDController);

export default router;
