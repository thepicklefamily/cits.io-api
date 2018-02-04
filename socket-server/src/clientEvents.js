const { serverInitialState, serverMessageReceive } = require('./serverEvents');

const clientReady = ({ io, socket, room }, payload) => {
  console.log('client ready');
  serverInitialState({ io, socket, room }, payload);
}
const clientMessage = ({ io, socket, room }, payload) => {
  console.log('hearing message');
  serverMessageReceive({ io, socket, room}, payload);
}

const clientEmitters = {
  'client.ready': clientReady,
  'client.message': clientMessage
};

module.exports = clientEmitters;