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

router
  .route('/deleteArticle/:article_id/:property_id')
  .delete(deleteArticleController);

router
  .route('/fetchAllArticles/:property_id')  
  .get(fetchAllArticlesController);

// NOTE TO SELF
  // must check if user is a manager before ALLOWING CREATING, EDITING, DELETING ARTICLES 


export default router;
