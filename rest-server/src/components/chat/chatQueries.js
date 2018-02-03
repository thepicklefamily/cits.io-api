import { addMessageHelper } from './chatMongoHelpers';
import { error, success } from '../../lib/log';
import db from '../../../../socket-server/config/mongo'

export const addMessageQuery = async (body) => {
  const message = new db.Messages({
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