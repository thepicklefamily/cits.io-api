const serverInitialState = ({ client, room }, payload) => {
  console.log('server initial state');
  client.emit('server.initialState', alert('hello'));
}

module.exports = { serverInitialState };