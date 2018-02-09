import db from '../../config/database';
import { success, error } from '../../lib/log';
import { getUserDataByUserIDHelper, editUserDataHelper } from './userSQLHelpers';

export const getUserDataByUserIDQuery = async params => {
  try {
    const queryString = getUserDataByUserIDHelper(params);
    const data = await db.queryAsync(queryString);
    success('getUserDataByUserIDQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('getUserDataByUserIDQuery - error= ', err);
  }
};

export const editUsersDataQuery = async body => {
  try {
    const queryString = editUserDataHelper(body);
    const data = await db.queryAsync(queryString);
    success('editUserDataQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('editUserDataQuery - error= ', err);
  }
};
