const express = require('express');
const router = express.Router();
const TicketEmailController = require('./ticketController');
const WelcomeEmailController = require('./welcomeController');
// I really should change into one email controller file.

router.route('/sendTicketEmail')
  .post(TicketEmailController.sendTicketEmail)
router.route('/sendWelcomeEmail')
  .post(WelcomeEmailController.sendWelcomeEmail)
module.exports = router;