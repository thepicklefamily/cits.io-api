import express from 'express';
import { addUsersPropertiesAptUnitsController, getUsersPropertiesAptUnitsController } from './usersPropertiesAptUnitsController';

const router = express.Router();

router
  .route('/addUsersPropertiesAptUnits')
  .post(addUsersPropertiesAptUnitsController);

router
  .route('/getUsersPropertiesAptUnits')
  .get(getUsersPropertiesAptUnitsController);

export default router;
