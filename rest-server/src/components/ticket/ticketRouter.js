import express from 'express';
import validate from 'express-validation';
import formValidation from '../../middleware/validation/request-validation';
import { addTicketController } from './ticketControllers';

const router = express.Router();

router.route('/create')
  .post(validate(formValidation.addTicket), addTicketController);

export default router;