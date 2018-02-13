require('dotenv').config();
const PASS = process.env.PASS;
const EMAIL = process.env.EMAIL
const nodemailer = require('nodemailer');

const sendMail = async (req, res, mailOptions) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: EMAIL, // generated ethereal user
      pass: PASS  // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  try {
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    res.status(200).send('successfully sent ticket');
  } catch (err) {
    console.log('error sending email');
    res.status(400).send(err);
  }
}

module.exports = { sendMail };