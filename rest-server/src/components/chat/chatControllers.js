import Messages from '../../../../socket-server/config/mongo';
import { addMessageQuery, getMessagesQuery, getMostRecentMessageQuery } from './chatQueries.js';
import { error, success } from '../../lib/log';

export const addMessage = async (req, res) => {
  try {
    const data = await addMessageQuery(req.body);
    success('successfully added message', data);
    return res.status(200).send(data);
  } catch (err) {
    error('addMessage Controller error ', err);
    return res.status(400).send(err); 
  }
}
export const getMessages = async (req, res) => {
  try {
    const data = await getMessagesQuery();
    success('successfully retrieved messages', data);
    return res.status(200).send(data);
  } catch (err) {
    error('get messages error ', err);
    return res.status(400).send(err); 
  }
}
export const getMostRecentMessage = async (req, res) => {
  try {
    const data = await getMostRecentMessageQuery();
    success('successfully got that new new', data);
    return res.status(200).send(data);
  } catch (err) {
    error('recent message retrieval error ', err);
    return res.status(400).send(err); 
  }
}