import express from "express";
import validate from "express-validation";

import { addPostController, updatePostController, deletePostController } from "./postControllers";
import formValidation from '../../middleware/validation/request-validation';

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

export default router;