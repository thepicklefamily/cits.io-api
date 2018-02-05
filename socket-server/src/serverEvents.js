const serverInitialState = ({ socket, room }, payload) => {
  console.log('server initial state');
  socket.emit('server.initialState', 'hey');
}
const serverMessageReceive = ({ socket, room }, payload) => {
  console.log('server receiving message', payload);
  socket.emit('server.message', payload);
}
module.exports = { serverInitialState, serverMessageReceive };