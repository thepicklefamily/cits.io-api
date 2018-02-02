const { serverInitialState } = require('./serverEvents');

const clientReady = ({ io, client, room }, payload) => {
  console.log('client ready');
  serverInitialState({ io, client, room }, payload);
}

const clientEmitters = {
  'client.ready': clientReady,
};

module.exports = clientEmitters;