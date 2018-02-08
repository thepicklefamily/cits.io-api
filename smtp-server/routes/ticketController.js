const TicketEmailController = {
  sendTicketEmail: (req, res) => {
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
      host: 'smtp.ethereal.email',
      port: 587,
      service: 'gmail',
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass  // generated ethereal password
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Castle in the Sky Ticket Info" <whatever is in auth.user>', // sender address
      to: 'daviddar232@gmail.com', // list of receivers
      subject: 'New Tenant Ticket', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    console.log('sending ticket!');
    res.status(200).send('sup?');
  }
}

module.exports = TicketEmailController;