export const serverInitialState = ({ io, socket, room }, payload) => {
  console.log('server initial state');
  io.emit('server.initialState', 'hey');
};

export const serverMessageReceive = ({ io, socket, room }, payload) => {
  console.log('server receiving message', payload);
  io.emit('server.message', payload);
};