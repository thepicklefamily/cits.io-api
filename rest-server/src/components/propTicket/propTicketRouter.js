import express from 'express';
import { getTicketsByPropIDController } from './propTicketControllers';

const router = express.Router();

router.route('/fetch/:prop_id')
  .get(getTicketsByPropIDController);

export default router;