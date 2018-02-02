import db from "../../config/database";
import {
  addArticleQuery,
  editArticleQuery,
  deleteArticleQuery,
  fetchAllArticlesQuery
} from "./articlesQueries";
import { success, error } from '../../lib/log';

export const addArticleController = async (req, res) => {
  try {
    const data = await addArticleQuery(req.body);
    success('addArticleController - successfully added article', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    error('addArticleController - error= ', err);
  }
}

export const editArticleController = async (req, res) => {
  try {
    const data = await editArticleQuery(req.body);
    success('editArticleController - successfully updated article', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    error('editArticleController - error= ', err);
  }
}

export const deleteArticleController = async (req, res) => {
  try {
    const data = await deleteArticleQuery(req.body);
    success('deleteArticleController - successfully deleted article', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    error('deleteArticleController - error= ', err);
  }
}

export const fetchAllArticlesController = async (req, res) => {
  try {
    const data = await fetchAllArticlesQuery(req.params);
    success('fetchAllArticlesController - successfully deleted article', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    error('fetchAllArticlesController - error= ', err);
  }
}
