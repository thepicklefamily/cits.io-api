export const serverInitialState = ({ io, socket, room }, payload) => {
  io.emit('server.initialState', 'hey');
};

export const serverMessageReceive = ({ io, socket, room }, payload) => {
  io.emit('server.message', payload);
};