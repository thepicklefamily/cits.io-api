import db from '../../config/database';
import { addArticleHelper, editArticleHelper, deleteArticleHelper, fetchAllArticlesHelper} from './articlesSQLHelpers';
import { success, error } from '../../lib/log';

export const addArticleQuery = async body => {
  try {
    const queryString = await addArticleHelper(body);
    const data = await db.queryAsync(queryString);
    success('addArticleQuery - successfully inserted Data', JSON.stringify(data));
    return data;
  } catch (err) {
    error('addArticleQuery - error=', err);
  }
}

export const editArticleQuery = async body => {
  try {
    const queryString = await editArticleHelper(body);
    console.log(queryString)
    const data = await db.queryAsync(queryString);

    console.log('asdfasdf', data)
    success('editArticleQuery - successfully updated Data', JSON.stringify(data));
    return data;
  } catch (err) {
    error('editArticleQuery - error=', err);
  }
}

export const deleteArticleQuery = async params => {
  try {
    const queryString = await deleteArticleHelper(params);
    const data = await db.queryAsync(queryString);
    success('deleteArticleQuery - successfully deleted Data', JSON.stringify(data));
    return data;
  } catch (err) {
    error('deleteArticleQuery - error=', err);
  }
  
}

export const fetchAllArticlesQuery = async params => {
  try {
    const queryString = await fetchAllArticlesHelper(params);
    const data = await db.queryAsync(queryString);
    success('fetchAllArticlesQuery - successfully fetched Data', JSON.stringify(data));
    return data;
  } catch (err) {
    error('fetchAllArticlesQuery - error=', err);
  }  
}
