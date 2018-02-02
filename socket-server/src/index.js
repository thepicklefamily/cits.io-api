const http = require('http');
const SocketIo = require('socket.io');
const { each } = require('lodash');

const clientEvents = require('./clientEvents');
const Rooms = require('./rooms');

const server = http.createServer();
const io = SocketIo(server);
const rooms = new Rooms(io);

io.on('connection', (client) => {
  console.log('client connected');
  const { roomId } = client.handshake.query;
  const room = rooms.findOrCreate(roomId || 'default');
  client.join(room.get('id'));

  each(clientEvents, (handler, event) => {
    client.on(event, handler.bind(null, { io, client, room }));
  });
})

const PORT = process.env.PORT || 4155;
server.listen(PORT, () => {
  console.log(`socket-server listening on ${PORT}`);
})