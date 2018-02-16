require('dotenv').config();
const PASS = process.env.PASS;
const EMAIL = process.env.EMAIL
const nodemailer = require('nodemailer');
const { ticketEmail } = require('../emails');
const { sendMail } = require('../sendMail');

const TicketEmailController = {
  sendTicketEmail: async (req, res) => { 
    let managerEmails = [];
    for (let i = 0; i < req.body.managerEmails.length; i++) {
      managerEmails.push(req.body.managerEmails[i].email);
    }
    const output = await ticketEmail(req.body);  
    // setup email data with unicode symbols
    let mailOptions = {
      from: `"Castle in the Sky Ticket Info" <${EMAIL}>`,
      to: 'dontreply@cits.com', // sender address
      cc: managerEmails, // list of receivers
      subject: 'New Tenant Ticket', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    };
    await sendMail(req, res, mailOptions);
  },
}

module.exports = TicketEmailController;