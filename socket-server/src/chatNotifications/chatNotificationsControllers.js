import { io } from '../index.js';
import chatNotificationsHelper from './chatNotificationsHelper.js'; //will want to change this to just deconstruct n import the helper functions rather than whole page, but note that your cat/meow won't work anymore since not being imported



export const initialChatNotificationsController = async (socket) => {
  // console.log('da socket', socket);
  console.log('looking up notifs');

//this should do two things:
//run the helper (that runs the queries)
//emit to client
  
  const data = [1, 2, 3, 4]; //await somethingsomethingHelper
  io.in('chat-notificatons').emit('initial-notifications', data);
  // io.emit('initial-notifications', data)
 
}


//xx
export const initialNotifications = (userId) => {
  // console.log('da socket', socket);
  console.log('looking up notifs');
  let result = [];

  //mongo look up prop ids and last online in table based on userid. presumable will be an array of obj.
  let mongoLookUpResult;

  for (let i = 0; i < mongoLookUpResult.length; i++) {
    if (redisGet(mongoLookUpResult[i].propId) > mongoLookUpResult[i].timeLastOnline) {
      result.push(mongoLookUpResult[i].propId);
    }
  }
  
  return result; //array of prop ids for notifications for the user
}
