import express from 'express';
import validate from 'express-validation';

import formValidation from '../../middleware/validation/request-validation';
import { 
  addPropertyController, 
  getPropertyByNameController, 
  getPropertyByIDController, 
  editPropertyController, 
  editSecretController,
  deletePropertyController
} from './propertyControllers';

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

router
  .route('/editProperty')
  .put(editPropertyController)

router
  .route('/editSecret')
  .put(editSecretController)

router
  .route('/deleteProperty')
  .delete(deletePropertyController);

export default router;
