import express from 'express';
import { getUserDataByUserIDController } from './userControllers';

const router = express.Router();

router.route('/fetch/:user_id')
  .get(getUserDataByUserIDController);

export default router;