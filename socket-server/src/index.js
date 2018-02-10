const app = require('express')();
const server = require('http').Server(app);
export const io = require('socket.io')(server);
const { each } = require('lodash');
const Rooms = require('./rooms');
const { Messages } = require('../config/mongo');
const rooms = new Rooms(io);
const clientEvents = require('./clientEvents');
const PORT = process.env.PORT || 4155;
const redisDB = require('../config/redis');
import notificationEmitters from './chatNotifications/index.js';



//once get this all working, figure out how to modularize more and get into dif files, clean up extra junk, etc.

//Chat Notifications Socket:
const chatNotificationSocket = io.of('/chat-notifications');
chatNotificationSocket.on('connection', function(socket){
  console.log('a user connected to chat-notifications socket');

  chatNotificationSocket.emit('initial.notifications', 'everyone!');

  socket.on('notifications.ready', (data) => {
    console.log('received user id', data);
    // look up the appropriate notifs and then send back an array of prop ids to have notifs on.
    let arrayOfPropsforNotifs = [1, 2, 3, 4];
    io.emit('initial-notifications', arrayOfPropsforNotifs)  
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected from chat-notifications socket');
  });
});


//david's stuff below:

//Chat Messaging Socket:
io.on('connection', (socket) => {
  console.log('user connected');
  const { roomId } = socket.handshake.query;
  const room = rooms.findOrCreate(roomId || 'default');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
  each(clientEvents, (handler, event) => {
    socket.on(event, handler.bind(null, { io, socket, room }));
  });
})

server.listen(PORT, () => {
  console.log(`socket server listening on port ${PORT}`);
});