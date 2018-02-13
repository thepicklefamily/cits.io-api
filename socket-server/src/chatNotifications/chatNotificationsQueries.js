import { lastMessage, lastOnline } from '../../config/mongo';


export const addToLastMessageDBQuery = async (propId, timeStamp) => {
  try {
      const entry = {
      propId,
      timeLastMessage: timeStamp
    };
    //will replace an existing table entry if an entry with the propId exists. otherwise will create new entry.
    const data = await lastMessage.update({propId}, entry, {upsert: true});
    console.log('addToLastMessageDBQuery - successfully inserted data ', JSON.stringify(data));
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
    console.log('addToLastOnlineDBQuery - successfully inserted data ', JSON.stringify(data));
  } catch (err) {
    console.log('addToLastOnlineDBQuery - error= ', err);
  }
};