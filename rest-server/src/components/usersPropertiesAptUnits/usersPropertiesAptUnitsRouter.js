import express from 'express';
import { 
  addUsersPropertiesAptUnitsController, 
  getUsersPropertiesAptUnitsController,
  getUsersPropertiesManagersController,
  editUsersPropertiesAptUnitsController,
  deleteUsersPropertiesAptUnitsController,
  deleteByPropertyIdContoller
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

router
  .route('/deleteByPropertyId')
  .delete(deleteByPropertyIdContoller);

export default router;
