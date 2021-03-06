import express from "express";
import validate from "express-validation";

import { addPostController, updatePostController, deletePostController, fetchPostsController } from "./postControllers";
import formValidation from '../../middleware/validation/request-validation';
import { fetchPostsHelper } from "./postSQLHelpers";

const router = express.Router();

router
  .route('/addPost')
  .post(validate(formValidation.addPost), addPostController);

router
  .route('/updatePost')
  .put(validate(formValidation.updatePost), updatePostController);

router
  .route('/deletePost/:post_id')
  .delete(deletePostController);

router
  .route('/fetchPosts/:article_id')
  .get(fetchPostsController);

export default router;