const app = require('express')();
const server = require('http').Server(app);
export const io = require('socket.io')(server);
export const chatNotificationSocket = io.of('/chat-notifications');
const { each } = require('lodash');
const Rooms = require('./rooms');
const { Messages } = require('../config/mongo');
const rooms = new Rooms(io);
const clientEvents = require('./clientEvents');
const PORT = process.env.PORT || 4155;
import { initialChatNotificationsController, addToLastOnlineDBController } from './chatNotifications/chatNotificationsControllers'; 


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


//Chat Notifications Socket:
chatNotificationSocket.on('connection', function(socket){
  console.log('a user connected to the chat-notifications socket');

  socket.on('notifications.ready', (data) => {
    //tell newly connected client what notifications to render:
    initialChatNotificationsController(data.userId, data.propsArray);
  });

  //receive confirmation of user viewing a message:
  socket.on('message.received', (data) => {
    addToLastOnlineDBController(data.userId, data.propId, data.timeStamp);
  });

  socket.on('disconnect', (data) => {
    console.log('a user disconnected from chat-notifications socket');
  });
});


server.listen(PORT, () => {
  console.log(`socket server listening on port ${PORT}`);
});
