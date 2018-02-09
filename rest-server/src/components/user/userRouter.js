import express from 'express';
import { getUserDataByUserIDController, editUserDataController } from './userControllers';

const router = express.Router();

router.route('/fetch/:user_id')
  .get(getUserDataByUserIDController);

router.route('/edit')
  .put(editUserDataController);

export default router;