import db from '../../config/database';
import { addPostHelper, updatePostHelper, deletePostHelper, fetchPostsHelper } from "./postSQLHelpers";
import { success, error } from '../../lib/log';

export const addPostQuery = async body => {
  try {
    const queryString = await addPostHelper(body);
    console.log(queryString);
    const data = await db.queryAsync(queryString);
    success('addPostQuery - successfuly inserted Data', JSON.stringify(data));
    return data;
  } catch (err) {
    error('addPostQuery - error=', err);
    throw new Error(err);
  }
};

export const updatePostQuery = async body => {
  try {
    const queryString = await updatePostHelper(body);
    const data = await db.queryAsync(queryString);
    success('updatePostQuery - successfully updated Data', JSON.stringify(data));
    return data;
  } catch (err) {
    error('updatePostQuery - error=', err);
    throw new Error(err);
  }
};

export const deletePostQuery = async params => {
  try {
    const queryString = await deletePostHelper(params);
    const data = await db.queryAsync(queryString);
    success('deletePostQuery - successfully deleted Data', JSON.stringify(data));
    return data;
  } catch (err) {
    error('deletePostQuery - error=', err);
    throw new Error(err);
  }
};

export const fetchPostsQuery = async params => {
  try {
    const queryString = await fetchPostsHelper(params);
    const data = await db.queryAsync(queryString);
    success('fetchPostsQuery - successfully fetched Data', JSON.stringify(data));
    return data;
  } catch (err) {
    error('fetchPostsQuery - error=', err);
    throw new Error(err);
  }
}
