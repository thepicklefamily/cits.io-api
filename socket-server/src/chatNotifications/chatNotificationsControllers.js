import { chatNotificationSocket } from '../index.js';
import {
  addToLastMessageDBQuery,
  addToLastOnlineDBQuery,
  initialChatNotificationsLastOnlineQuery,
  initialChatNotificationsLastMsgQuery
} from './chatNotificationsQueries';


//adds propId and timeStamp of last msg in chat room to the DB table
export const addToLastMessageDBController = async (propId, timeStamp) => {
  try {
    await addToLastMessageDBQuery(propId, timeStamp);
    console.log('addToLastMessageDBController - success');
  } catch (err) {
    console.log('addToLastMessageDBController - error= ', err);
  }
};

//adds a user's userId, propId and timeStamp of last msg the user received in chat room to the DB table
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
    const notificationProps = [];
    for (let i = 0; i < propsArray.length; i++) {
      const userPropTimeStamp = await initialChatNotificationsLastOnlineQuery(userId, propsArray[i]);
      const lastMsgTimeStamp = await initialChatNotificationsLastMsgQuery(propsArray[i]);
      if (lastMsgTimeStamp > userPropTimeStamp) {
        notificationProps.push(propsArray[i]);
      }
    }
    chatNotificationSocket.emit('initial.notifications', notificationProps);
    console.log('initialChatNotificationsController - success');
  }  catch (err) {
    console.log('initialChatNotificationsController - error= ', err);
  } 
}

//sends notifications to clients for new msgs:
export const sendChatNotificationController = async (userId, propId) => {
  try {
    chatNotificationSocket.emit('notifications.whileonline', {userId, propId});
    console.log('sendChatNotificationController - success');
  }  catch (err) {
    console.log('sendChatNotificationController - error= ', err);
  } 
}