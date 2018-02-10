const { serverInitialState, serverMessageReceive } = require('./serverEvents');

const clientReady = ({ io, socket, room }, payload) => {
  console.log('client ready');
  serverInitialState({ io, socket, room }, payload);
}
const clientMessage = ({ io, socket, room }, payload) => {
  console.log('hearing message');
  serverMessageReceive({ io, socket, room}, payload);
  //insert your chat notifs server function here
  console.log('this is socket, looking for prop/room id and time if there', socket)
  console.log('this is rooom, looking for prop/room id and time if there', room)
  console.log('this is payload, looking for prop/room id and time if there', payload)
  // roomname is payload.roomname. will be id? ask david
  // addLastMessageTimeForPropToRedisController
  // sendNewMessagePropIdToActiveUsersController
}

const clientEmitters = {
  'client.ready': clientReady,
  'client.message': clientMessage
};

module.exports = clientEmitters;