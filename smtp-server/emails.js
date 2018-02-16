require('dotenv').config();
const AWS_HOST = process.env.AWS_HOST || 'http://localhost:3000';

const ticketEmail = (data) => {
  return `
  <p>You have a new tenant ticket.</p>
  <h3>Ticket Details:</h3>
  <ul>
    <li>Name: ${data.name}</li>
    <li>Email: ${data.email}</li>
    <li>Phone: ${data.phone}</li>
    <li>Apt#: ${data.apt_num}</li>
    <li>Subject: ${data.subject}</li>
    <li>Category: ${data.category}</li>
    <li>Date: ${data.date}</li>
  </ul>
  <h3>Description:</h3>
  <p>${data.description}</p>
  <a href="${AWS_HOST}/tickets">View Tickets</a>
`};

const welcomeEmail = (data) => {
  return `
  <h2>Welcome, ${data.full_name}</h2>
  <p>Castle in the Sky is the #1 trusted 
  source for all things property management related.</p>
  <a href=${AWS_HOST}>Get Started!</a>
`};

module.exports = { ticketEmail, welcomeEmail };