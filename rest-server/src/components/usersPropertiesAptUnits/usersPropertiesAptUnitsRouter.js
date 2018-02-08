import express from 'express';
import { 
  addUsersPropertiesAptUnitsController, 
  getUsersPropertiesAptUnitsController,
  getUsersPropertiesManagersController
} from './usersPropertiesAptUnitsController';

const router = express.Router();

router
  .route('/addUsersPropertiesAptUnits')
  .post(addUsersPropertiesAptUnitsController);

router
  .route('/getUsersPropertiesAptUnits')
  .get(getUsersPropertiesAptUnitsController);
router
  .route('/getUsersPropertiesManagers')
  .get(getUsersPropertiesManagersController);
export default router;
