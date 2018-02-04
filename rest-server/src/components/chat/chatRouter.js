import express from 'express';

import { addMessage, getMessages, getMostRecentMessage } from './chatControllers';

const router = express.Router();

router.route('/addMessage')
  .post(addMessage);
router.route('/getMessages')
  .get(getMessages);
router.route('/getMostRecentMessage')
  .get(getMostRecentMessage);

export default router;