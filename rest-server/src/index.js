import http from 'http';
import App from './config/express';
import { success } from './lib/log';
// import './config/database';

// import './config/database/setup';

const app = App.express;

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;


app.use((req, res, next) => {
  console.log('meow', req.method, req.statusCode);

})

server.listen(PORT, (err) => {
  if (err) throw new Error;
  success('successfully connected to port ', PORT);
});

module.exports.app = app;
module.exports.server = server;