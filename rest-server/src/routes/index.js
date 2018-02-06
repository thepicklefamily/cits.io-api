import express from 'express';

import authRouter from '../components/auth/authRouter';
import propertyRouter from '../components/property/propertyRouter';
import phonebookRouter from '../components/phonebook/phonebookRouter';
import articleRouter from '../components/articles/articlesRouter';
import chatRouter from '../components/chat/chatRouter';
import ticketRouter from '../components/ticket/ticketRouter';
import tenantTicketRouter from '../components/tenantTicket/tenantTicketRouter';
import propTicketRouter from '../components/propTicket/propTicketRouter';
import userTicketRouter from '../components/userTicket/userTicketRouter';

const router = express.Router();

router.use('/auth', authRouter);
// router.use('/users', userRouter);
// router.use('/posts', postRouter);
router.use('/articles', articleRouter);
router.use('/phonebooks', phonebookRouter);
router.use('/properties', propertyRouter);
router.use('/chat', chatRouter);
router.use('/tickets', ticketRouter);
router.use('/tenantTickets', tenantTicketRouter);
router.use('/propTickets', propTicketRouter);
router.use('/userTickets', userTicketRouter);
// router.use('/articlePosts', articlePostRouter);
// router.use('/chatPosts', chatPostRouter);


export default router;