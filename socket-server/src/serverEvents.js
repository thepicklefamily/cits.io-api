const serverInitialState = ({ socket, room }, payload) => {
  console.log('server initial state');
  socket.emit('server.initialState', 'hey');
}

module.exports = { serverInitialState };