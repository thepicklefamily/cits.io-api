import http from 'http';
import App from './config/express';
import { success } from './lib/log';
import './config/database';
// import test from '../__tests__/auth-tests';
// import './config/database/setup';

const app = App.express;

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
  if (err) throw new Error;
  success('successfully connected to port ', PORT);
});

module.exports = server;
