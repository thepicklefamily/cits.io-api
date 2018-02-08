const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const router = require('./routes');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use('/tickets', router);

app.listen(PORT, () => {
  console.log(`smtp listening on PORT ${PORT}`);
})

// endpoint for emailticket is 'http://localhost:8080/tickets/sendTicketEmail'
// addTicketEmail() {
//   axios.post('http://localhost:8080/tickets/sendTicketEmail')
//     .then((res) => {
//       console.log('success', res);
//     })
// }  add this function to the front end at some point when adding ticket info.