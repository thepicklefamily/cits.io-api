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