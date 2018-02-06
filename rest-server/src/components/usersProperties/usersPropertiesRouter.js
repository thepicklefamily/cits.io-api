import express from 'express';
import { addUsersPropertiesController, getUsersPropertiesController } from './usersPropertiesController';

const router = express.Router();

router
  .route('/addUsersProperties')
  .post(addUsersPropertiesController);

router
  .route('/getUsersProperties')
  .get(getUsersPropertiesController);

export default router;
