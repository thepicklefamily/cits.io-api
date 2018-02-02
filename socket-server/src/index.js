// const http = require('http');
// const SocketIo = require('socket.io');
// const { each } = require('lodash');

// const log = require('./lib/log');
// const Rooms = require('./rooms');
// const clientEvents = require('./clientEvents');

// const server = http.createServer();
// const io = SocketIo(server);
// const rooms = new Rooms(io);

// io.on('connection', (client) => {
//   log('client connected');
//   const { roomId } = client.handshake.query;
//   const room = rooms.findOrCreate(roomId || 'default');
//   client.join(room.get('id'));

//   each(clientEvents, (handler, event) => {
//     client.on(event, handler.bind(null, { io, client, room }));
//   });
// })

// server.listen(PORT, () => {
//   log(`socket server listening on port ${PORT}`);
// });


const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { each } = require('lodash');
const Rooms = require('./rooms');
const rooms = new Rooms(io);
const clientEvents = require('./clientEvents');
const PORT = process.env.PORT || 4155;



io.on('connection', (socket) => {
  console.log('user connected');
  const { roomId } = socket.handshake.query;
  const room = rooms.findOrCreate(roomId || 'default');
  console.log(room);
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