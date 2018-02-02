const { serverInitialState } = require('./serverEvents');

const clientReady = ({ io, socket, room }, payload) => {
  console.log('client ready');
  serverInitialState({ io, socket, room }, payload);
}

const clientEmitters = {
  'client.ready': clientReady,
};

module.exports = clientEmitters;