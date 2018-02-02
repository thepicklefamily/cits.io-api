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
  .route('/editArticle')
  .put(validate(formValidation.editArticle), editArticleController);

// router
//   .route('/delete/:article_id')
//   .delete(validate(formValidation.deleteArticle), deleteArticleController);

// router
//   .routes('/fetchAllArticles')
//   .get(validate(formValidation.fetchAllArticles), fetchAllArticlesController);



export default router;
