const app = require('express')();
const server = require('http').Server(app);
export const io = require('socket.io')(server);
const { each } = require('lodash');
const Rooms = require('./rooms');
const { Messages } = require('../config/mongo');
const rooms = new Rooms(io);
const clientEvents = require('./clientEvents');
const PORT = process.env.PORT || 4155;
import { initialChatNotificationsController, addToLastOnlineDBController } from './chatNotifications/chatNotificationsControllers'; 


//Chat Notifications Socket:
export const chatNotificationSocket = io.of('/chat-notifications');
chatNotificationSocket.on('connection', function(socket){
  console.log('a user connected to chat-notifications socket');

  // chatNotificationSocket.emit('initial.notifications', 'hello from the server!');
  
  socket.on('notifications.ready', (data) => {
    console.log('received user id and props array', data);
    //tell newly connected client what notifications to render:
    initialChatNotificationsController(data.userId, data.propsArray);
    // have a helper func look up the appropriate notifications
    //then send back an array of prop ids to have notifs on.
    // let arrayOfPropsforNotifs = [1, 2, 3, 4];
    // chatNotificationSocket.emit('initial.notifications', arrayOfPropsforNotifs)  
  });

  //receive confirmation of user viewing a message:
  socket.on('message.received', (data) => {
    addToLastOnlineDBController(data.userId, data.propId, data.timeStamp);
  });


  socket.on('send.lastonline', (data) => {
    console.log('last onlineTimes data = ', data);
    if (data.times) {
      // addLastMessageTimeForPropToRedisController(data.userId, data.times);
    }
  });

  socket.on('disconnect', (data) => {
    console.log('a user disconnected from chat-notifications socket');
    console.log(socket.id);
  });
});


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