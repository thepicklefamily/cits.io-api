import Messages from '../../../../socket-server/config/mongo';
import { addMessageQuery, getMessagesQuery } from './chatQueries.js';
import { error, success } from '../../lib/log';

export const addMessage = async (req, res) => {
  try {
    console.log('getting to chatController', req.body);
    const data = await addMessageQuery(req.body);
    success('successfully added message', data);
    return res.status(200).send(data);
  } catch (err) {
    console.log('addMessage Controller error ', err);
  }
}
export const getMessages = async (req, res) => {
  try {
    console.log('getting to getMessagesCont');
    const data = await getMessagesQuery();
    success('successfully retrieved messages', data);
    return res.status(200).send(data);
  } catch (err) {
    error('get messages error ', err);
  }
}