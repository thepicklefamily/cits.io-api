const serverInitialState = ({ io, socket, room }, payload) => {
  console.log('server initial state');
  io.emit('server.initialState', 'hey');
}
<<<<<<< HEAD
const serverMessageReceive = ({ socket, room }, payload) => {
  console.log('server receiving message', payload);
  socket.emit('server.message', payload);
=======
const serverMessageReceive = ({ io, socket, room }, payload) => {
  console.log('server receiving message', payload);
  io.emit('server.message', payload);
>>>>>>> e4842d6e2f5b2a76c56a2c2ce07f4c5d30948dfa
}
module.exports = { serverInitialState, serverMessageReceive };