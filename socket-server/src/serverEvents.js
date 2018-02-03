const serverInitialState = ({ socket, room }, payload) => {
  console.log('server initial state');
  socket.emit('server.initialState', 'hey');
}
const serverMessageReceive = ({ socket, room }, payload) => {
  console.log('server receiving message');
  socket.emit('server.message', 'yoooooo');
}
module.exports = { serverInitialState, serverMessageReceive };