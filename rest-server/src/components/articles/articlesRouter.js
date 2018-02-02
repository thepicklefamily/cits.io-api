import express from 'express';
import validate from 'express-validation';

import {
  addArticleController,
  editArticleController,
  deleteArticleController,
  fetchAllArticlesController
} from './articlesControllers';
import formValidation from '../../middleware/validation/request-validation';

const router = express.Router();

router
  .route('/addArticle')
  .post(validate(formValidation.addArticle), addArticleController);

router
  .route('/editArticle') // ask pat about params and :/article_id
  .put(validate(formValidation.editArticle), editArticleController);

router
  .route('/deleteArticle')
  .delete(validate(formValidation.deleteArticle), deleteArticleController);

// router
//   .routes('/fetchAllArticles')  ask pat about params
//   .get(validate(formValidation.fetchAllArticles), fetchAllArticlesController);



export default router;
