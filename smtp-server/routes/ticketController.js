require('dotenv').config();
const PASS = process.env.PASS;
const EMAIL = process.env.EMAIL
const nodemailer = require('nodemailer');

const TicketEmailController = {
  sendTicketEmail: async (req, res) => {
    const output = `
      <p>You have a new tenant ticket.</p>
      <h3>Ticket Details</h3>
      <ul>
        <li>Name: CHANGE TO req.body.name</li>
        <li>Email: CHANGE TO req.body.email</li>
        <li>Phone: CHANGE TO req.body.phone</li>
      </ul>
      <a href="http://localhost:3000">CHANGE TO ticket link</a>
    `;
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

    // setup email data with unicode symbols
    let mailOptions = {
      from: `"Castle in the Sky Ticket Info" <${EMAIL}>`, // sender address
      to: 'daviddar232@gmail.com', // list of receivers
      subject: 'New Tenant Ticket', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    };

    // send mail with defined transport object
    try {
      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
      res.status(200).send('sup?');
    } catch (err) {
      console.log('error sending email');
      res.status(400).send(err);
    }
  }
}

module.exports = TicketEmailController;