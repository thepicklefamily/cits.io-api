import express from 'express';

import { addMessage, getMessages } from './chatControllers';

const router = express.Router();

router.route('/addMessage')
  .post(addMessage);
router.route('/getMessages')
  .get(getMessages);


export default router;