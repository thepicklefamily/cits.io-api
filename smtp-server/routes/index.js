const express = require('express');
const router = express.Router();
const TicketEmailController = require('./ticketController');

router.route('/sendTicketEmail')
  .post(TicketEmailController.sendTicketEmail)

module.exports = router;