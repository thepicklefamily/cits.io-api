import express from 'express';
import validate from 'express-validation';
import formValidation from '../../middleware/validation/request-validation';
import { editTicketController, deleteTicketController } from './userTicketControllers';

const router = express.Router();

router.route('/edit')
  .put(validate(formValidation.editTicket), editTicketController);
router.route('/delete/:ticket_id')
  .delete(deleteTicketController);

  export default router;