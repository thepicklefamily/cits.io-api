import Messages from '../../../../socket-server/config/mongo';
// import chatQueries from './chatQueries.js';

export const addMessage = async (req, res) => {
  try {
    console.log('getting to chatController', req.body);
    // const { rows } = await addMessageQuery(req.body);
    // success('successfully added message', rows);
    // return res.status(200).send('rows[0]');
    return res.sendStatus(200);
  } catch (err) {
    console.log('addMessage Controller error ', err);
  }
}