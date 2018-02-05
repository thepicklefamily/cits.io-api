import express from 'express';
import { getTicketsByTenantIDController } from './tenantTicketControllers';

const router = express.Router();

router.route('/fetch/:tenant_id')
  .get(getTicketsByTenantIDController);

export default router;