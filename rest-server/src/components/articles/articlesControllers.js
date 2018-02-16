import db from "../../config/database";
import {
  addArticleQuery,
  editArticleQuery,
  deleteArticleQuery,
  fetchAllArticlesQuery
} from "./articlesQueries";
import { ascend } from './articleHelper/articleHelper';
import { success, error } from '../../lib/log';

export const addArticleController = async (req, res) => {
  try {
    const { rows } = await addArticleQuery(req.body);
    const { id, title, content, date, photo_url, userId, propertyId } = rows[0]
    success('addArticleController - successfully added article', JSON.stringify(rows[0]));
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('addArticleController - error= ', err);
    return res.status(400).send(err); 
  }
}

export const editArticleController = async (req, res) => {
  try {
    const { rows } = await editArticleQuery(req.body);
    const { id, title, content, date, photo_url, userId, propertyId } = rows[0];
    success('editArticleController - successfully updated article', JSON.stringify(rows[0]));
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('editArticleController - error= ', err);
    return res.status(400).send(err); 
  }
}

export const deleteArticleController = async (req, res) => {
  try {
    const {data} = await deleteArticleQuery(req.params);
    success('deleteArticleController - successfully deleted article', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    error('deleteArticleController - error= ', err);
    return res.status(400).send(err); 
  }
}

export const fetchAllArticlesController = async (req, res) => {
  try {
    console.log(ascend)
    const { rows } = await fetchAllArticlesQuery(req.params);
    success('fetchAllArticlesController - successfully fetched article', JSON.stringify(rows));
    return res.status(200).send(ascend(rows));
  } catch (err) {
    error('fetchAllArticlesController - error= ', err);
    return res.status(400).send(err); 
  }
}
