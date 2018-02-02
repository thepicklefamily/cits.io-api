const http = require('http');
const SocketIo = require('socket.io');
const { each } = require('lodash');

const log = require('./lib/log');
const Rooms = require('./rooms');
const clientEvents = require('./clientEvents');

const server = http.createServer();
const io = SocketIo(server);
const rooms = new Rooms(io);

io.on('connection', (client) => {
  log('client connected');
  const { roomId } = client.handshake.query;
  const room = rooms.findOrCreate(roomId || 'default');
  client.join(room.get('id'));

  each(clientEvents, (handler, event) => {
    client.on(event, handler.bind(null, { io, client, room }));
  });
})

const PORT = process.env.PORT || 4155;
server.listen(PORT, () => {
  log(`socket server listening on port ${PORT}`);
});