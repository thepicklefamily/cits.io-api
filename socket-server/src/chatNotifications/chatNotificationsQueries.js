import { lastMessage, lastOnline } from '../../config/mongo';


export const addToLastMessageDBQuery = async (propId, timeStamp) => {
  try {
      const entry = {
      propId,
      timeLastMessage: timeStamp
    };
    //will replace an existing table entry if an entry with the propId exists. otherwise will create new entry.
    await lastMessage.update({propId}, entry, {upsert: true});
    console.log(`addToLastMessageDBQuery - successfully inserted entry for propId ${propId}, timeStamp ${timeStamp}`);
  } catch (err) {
    console.log('addToLastMessageDBQuery - error= ', err);
  }
};

export const addToLastOnlineDBQuery = async (userId, propId, timeStamp) => {
  try {
      const entry = {
      userId,
      propId,
      timeLastOnline: timeStamp
    };
    //will replace an existing table entry if an entry with the userId & propId combo exists. otherwise will create new entry.
    const data = await lastOnline.update({userId, propId}, entry, {upsert: true});
    console.log(`addToLastOnlineDBQuery - successfully inserted entry for userId ${userId}, propId ${propId}, timeStamp ${timeStamp}`);
  } catch (err) {
    console.log('addToLastOnlineDBQuery - error= ', err);
  }
};

export const initialChatNotificationsLastOnlineQuery = async (userId, propId) => {
  try {
    const timeLastOnline = await lastOnline.findOne({userId, propId}).select('timeLastOnline -_id')
    const timeStamp = timeLastOnline ? timeLastOnline.timeLastOnline : null;
    console.log('initialChatNotificationsLastOnlineQuery - successfully found timeStamp ', timeStamp);
    return timeStamp;
  } catch (err) {
    console.log('addToLastOnlineDBQuery - error= ', err);
  }
};

export const initialChatNotificationsLastMsgQuery = async (propId) => {
  try {
    const timeLastMessage = await lastMessage.findOne({propId}).select('timeLastMessage -_id');
    const timeStamp = timeLastMessage ? timeLastMessage.timeLastMessage : null;
    console.log('initialChatNotificationsLastMsgQuery - successfully found timeStamp ', timeStamp);
    return timeStamp;
  } catch (err) {
    console.log('addToLastOnlineDBQuery - error= ', err);
  }
};