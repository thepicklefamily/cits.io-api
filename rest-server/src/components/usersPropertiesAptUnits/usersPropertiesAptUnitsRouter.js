import express from 'express';
import { 
  addUsersPropertiesAptUnitsController, 
  getUsersPropertiesAptUnitsController,
  getUsersPropertiesManagersController,
  editUsersPropertiesAptUnitsController,
  deleteUsersPropertiesAptUnitsController
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

router
  .route('/editUsersPropertiesAptUnits')
  .put(editUsersPropertiesAptUnitsController);

router
  .route('/deleteUsersPropertiesAptUnits')
  .delete(deleteUsersPropertiesAptUnitsController);

export default router;
