const { lastOnline } = require('../../config/mongo');

import { io } from '../index.js';

const printy = () => {
  console.log('meeeeow');
}

const initialNotifications = (socket) => {
  // console.log('da socket', socket);
  console.log('looking up notifs');
  var data = [1, 2, 3, 4];
  io.in('chat-notificatons').emit('initial-notifications', data);
  // io.emit('initial-notifications', data)
 
}
// }
// const clientMessage = ({ io, socket, room }, payload) => {
//   console.log('hearing message');
//   serverMessageReceive({ io, socket, room}, payload);
// }

// const clientEmitters = {
//   'client.ready': clientReady,
//   'client.message': clientMessage
// };

// module.exports = clientEmitters;

const notificationEmitters = {
  'printy': printy,
  'connect': initialNotifications
};

export default notificationEmitters;