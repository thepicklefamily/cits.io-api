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
    console.log('controller body', req.body);
    const data = await addArticleQuery(req.body);
    success('addArticleController - successfully added article', data);
    return res.status(200).send(data);
  } catch (err) {
    error('addArticleController - error= ', err);
  }
}

export const editArticleController = async (req, res) => {
  try {

  } catch (err) {
    
  }
}

export const deleteArticleController = async (req, res) => {
  try {

  } catch (err) {
    
  }
}

export const fetchAllArticlesController = async (req, res) => {
  try {

  } catch (err) {
    
  }
}
