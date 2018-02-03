import express from 'express';

import { addMessage } from './chatControllers';

const router = express.Router();

router.route('/addMessage')
  .post(addMessage);


export default router;