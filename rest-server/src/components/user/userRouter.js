import express from 'express';
import { getUserDataByUserIDController, editUserDataController, editPasswordController } from './userControllers';

const router = express.Router();

router.route('/fetch/:user_id')
  .get(getUserDataByUserIDController);

router.route('/editUser')
  .put(editUserDataController);

router.route('/editPassword')
  .put(editPasswordController);

export default router;