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
<a href="http://localhost:3000/tickets">View Tickets</a>
`};

const welcomeEmail = (data) => {
  return `
<h2>Welcome to Castle in the Sky!</h2>
<p>Welcome ${data.full_name}, Castle in the Sky is your 
destination for all things property management related.</p>
<a href="http://localhost:3000">Go to Castle in the Sky</a>
`};

module.exports = { ticketEmail, welcomeEmail };