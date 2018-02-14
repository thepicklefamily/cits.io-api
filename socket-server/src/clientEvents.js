import { serverInitialState, serverMessageReceive } from './serverEvents';
import { addToLastMessageDBController, sendChatNotificationController } from './chatNotifications/chatNotificationsControllers';

const clientReady = ({ io, socket, room }, payload) => {
  console.log('client ready');
  serverInitialState({ io, socket, room }, payload);
};

const clientMessage = ({ io, socket, room }, payload) => {
  console.log('hearing message');
  serverMessageReceive({ io, socket, room}, payload);
  //for chat notifications:
  addToLastMessageDBController(payload.propId, payload.timeStamp);
  sendChatNotificationController(payload.userId, payload.propId);
};

const clientEmitters = {
  'client.ready': clientReady,
  'client.message': clientMessage
};

export default clientEmitters;