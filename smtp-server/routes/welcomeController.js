require('dotenv').config();
const PASS = process.env.PASS;
const EMAIL = process.env.EMAIL
const nodemailer = require('nodemailer');
const { welcomeEmail } = require('../emails');
const { sendMail } = require('../sendMail');

const WelcomeEmailController = {
  sendWelcomeEmail: async (req, res) => { 
    console.log('reqbody in sent ticket', req.body);
    const output = await welcomeEmail(req.body);  
    // setup email data with unicode symbols
    let mailOptions = {
      from: `"Castle in the Sky" <${EMAIL}>`,
      to: `${req.body.email}`, // sender address
      subject: 'Welcome to Castle in the Sky', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    };
    await sendMail(req, res, mailOptions);
  },
}

module.exports = WelcomeEmailController;