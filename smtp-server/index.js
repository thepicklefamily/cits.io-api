require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const router = require('./routes');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use('/tickets', router);

app.listen(PORT, () => { console.log(`smtp listening on PORT ${PORT}`); })