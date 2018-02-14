import { db } from "../../config/database";
import { addPostQuery, updatePostQuery, deletePostQuery, fetchPostsQuery } from "./postQueries";
import { success, error } from "../../lib/log";
import { sortTree, postTree } from './postHelpers/postHelpers';


export const addPostController = async (req, res) => {
  try {
    const { rows } = await addPostQuery(req.body);
    const {id, username, text, date, parentId, articleId } = rows[0];
    success('addPostController - successfully added post', JSON.stringify(rows[0]));
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('addPostController - error= ', err);
    return res.status(400).send(err); 
  }
};

export const updatePostController = async (req, res) => {
  try {
    const { rows } = await updatePostQuery(req.body);
    const {id, username, text, date, parentId, articleId } = rows[0];
    success('updatePostController - successfully updated post', JSON.stringify(rows[0]));
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('updatePostController - error= ', err);
    return res.status(400).send(err); 
  }
}

export const deletePostController = async (req, res) => {
  try {
  const { data } = await deletePostQuery(req.params);
  success('deletePostController - successfully deleted post', JSON.stringify(data));
  return res.status(200).send(data);
  } catch (err) {
    error('deletePostController - error= ', err);
    return res.status(400).send(err); 
  }
}

export const fetchPostsController = async (req, res) => {
  try {
    const { rows } = await fetchPostsQuery(req.params);
    success('fetchPostsController - successfully fetched posts', JSON.stringify(rows));
    return res.status(200).send(sortTree(postTree(rows)));
  } catch (err) {
    error('fetchPostsController - error= ', err);
    return res.status(400).send(err); 
  }
}