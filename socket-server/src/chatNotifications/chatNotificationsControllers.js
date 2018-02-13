import { chatNotificationSocket } from '../index.js';
import {
  addToLastMessageDBQuery,
  addToLastOnlineDBQuery,
  initialChatNotificationsLastOnlineQuery,
  initialChatNotificationsLastMsgQuery
} from './chatNotificationsQueries';


//adds propId and timeStamp of last msg in chat room to the DB table
//nothing is sent to client
export const addToLastMessageDBController = async (propId, timeStamp) => {
  try {
    await addToLastMessageDBQuery(propId, timeStamp);
    console.log('addToLastMessageDBController - success');
  } catch (err) {
    console.log('addToLastMessageDBController - error= ', err);
  }
};

//adds a user's userId, propId and timeStamp of last msg the user received in chat room to the DB table
//nothing is sent to client
export const addToLastOnlineDBController = async (userId, propId, timeStamp) => {
  try {
    await addToLastOnlineDBQuery(userId, propId, timeStamp);
    console.log('addToLastOnlineDBController - success');
  } catch (err) {
    console.log('addToLastOnlineDBController - error= ', err);
  }
};

// sends an array of the user's prop's propIds for which notifications should be displayed:
export const initialChatNotificationsController = async (userId, propsArray) => {
  try {
    let notificationProps = [];
    for (let i = 0; i < propsArray.length; i++) {
      let userPropTimeStamp = await initialChatNotificationsLastOnlineQuery(userId, propsArray[i]);
      let lastMsgTimeStamp = await initialChatNotificationsLastMsgQuery(propsArray[i]);
      console.log('meow', propsArray[i], lastMsgTimeStamp, userPropTimeStamp);
      if (lastMsgTimeStamp > userPropTimeStamp) {
        console.log('woof', propsArray[i], lastMsgTimeStamp, userPropTimeStamp);
        notificationProps.push(propsArray[i])
      }
    }
    chatNotificationSocket.emit('initial.notifications', notificationProps);
    console.log('initialChatNotificationsController - success');
  }  catch (err) {
    console.log('initialChatNotificationsController - error= ', err);
  } 
}


// //sends a prop id to chat notif socket whenever any chat msg is sent in any prop chat room
// export const sendNewMessagePropIdToActiveUsersController = (propId) => {
//   // doesnt use a helper function since pretty basic
//   console.log('in da func', propId)
//   chatNotificationSocket.emit('notifications.whileonline', propId);
// }


