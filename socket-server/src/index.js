const app = require('express')();
const server = require('http').Server(app);
export const io = require('socket.io')(server);
export const chatNotificationSocket = io.of('/chat-notifications');
import { each } from 'lodash';
import Rooms from './rooms';
import { Messages } from '../config/mongo';
import clientEvents from './clientEvents';
import { initialChatNotificationsController, addToLastOnlineDBController } from './chatNotifications/chatNotificationsControllers'; 
const rooms = new Rooms(io);
const PORT = process.env.PORT || 4155;


//Chat Messaging Socket:
io.on('connection', (socket) => {
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

  socket.on('notifications.ready', ({userId, propsArray}) => {
    //tell newly connected client what notifications to render:
    initialChatNotificationsController(userId, propsArray, socket.id);
  });

  //receive confirmation of user viewing a message:
  socket.on('message.received', ({userId, propId, timeStamp}) => {
    addToLastOnlineDBController(userId, propId, timeStamp);
  });

  socket.on('disconnect', (data) => {
    console.log('a user disconnected from chat-notifications socket');
  });
});


server.listen(PORT, () => {
  console.log(`socket server listening on port ${PORT}`);
});

// Active Users Socket:
const activeUsersSocket = io.of('/active-users');
activeUsersSocket.on('connection', (socket) => {
  console.log('Server side - client successfully connected to active-users socket');
  socket.on('login', (data) => {
    socket.broadcast.emit('login', data);
  });

  socket.on('active', (data) => {
    socket.broadcast.emit('active', data);
  });

  socket.on('inactive', (data) => {
    socket.broadcast.emit('inactive', data);
  });

  socket.on('disconnect', () => {
    console.log('serverside- a client has disconnected');
  })
});
