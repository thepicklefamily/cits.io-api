// import { addMessageHelper } from './chatMongoHelpers';
import { error, success } from '../../lib/log';
import { Messages } from '../../../../socket-server/config/mongo'

export const addMessageQuery = async (body) => {
  console.log('dbody', body);
  const message = new Messages({
    message: body.message,
    username: body.username,
    roomname: body.roomname,
    type: body.type
  })
  try {
    const data = await message.save();
    success('addMessageQuery add success ', data);
    return data;
  } catch (err) {
    error('addMessageQuery ', err);
  }
}

export const getMessagesQuery = async () => {
  try {
    const data = await Messages.find();
    success('retrieved Mongo messages ', data);
    return data;
  } catch (err) {
    error('getMessagesQuery err ', err);
  }
}

export const getMostRecentMessageQuery = async () => {
  try {
    const data = await Messages.find().sort({"date": -1}).limit(1);
    success('got new new in query', data);
    return data;
  } catch (err) {
    error('newMessageQuery err ', err);
  }
}