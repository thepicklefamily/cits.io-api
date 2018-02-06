import express from 'express';

import authRouter from '../components/auth/authRouter';
import propertyRouter from '../components/property/propertyRouter';
import phonebookRouter from '../components/phonebook/phonebookRouter';
import articleRouter from '../components/articles/articlesRouter';
import chatRouter from '../components/chat/chatRouter';
import usersPropertiesRouter from '../components/usersProperties/usersPropertiesRouter';

const router = express.Router();

router.use('/auth', authRouter);
// router.use('/users', userRouter);
// router.use('/tickets', ticketRouter);
// router.use('/posts', postRouter);
router.use('/articles', articleRouter);
router.use('/phonebooks', phonebookRouter);
router.use('/properties', propertyRouter);
router.use('/chat', chatRouter);
// router.use('/tenantTickets', tenentTicketRouter);
// router.use('/userTickets', userTicketRouter);
// router.use('/propertyTickets', propertyTicketRouter);
// router.use('/articlePosts', articlePostRouter);
// router.use('/chatPosts', chatPostRouter);
router.use('/usersProperties', usersPropertiesRouter);


export default router;