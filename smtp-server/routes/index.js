const express = require('express');
const router = express.Router();
const TicketEmailController = require('./ticketController');
const WelcomeEmailController = require('./welcomeController');

router.route('/sendTicketEmail')
  .post(TicketEmailController.sendTicketEmail)
router.route('/sendWelcomeEmail')
  .post(WelcomeEmailController.sendWelcomeEmail)
module.exports = router;