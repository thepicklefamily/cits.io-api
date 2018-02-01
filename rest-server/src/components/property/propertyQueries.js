import db from '../../config/database';
import { success, error } from '../../lib/log';

import { addPropertyHelper, getPropertyHelper } from './propertySQLHelpers';

export const addPropertyQuery = async body => {
  try {
    const queryString = addPropertyHelper(body);
    const data = await db.queryAsync(queryString);
    success('signUpQuery - successfully inserted data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('signUpQuery - error= ', err);
    throw new Error(err);
  }
};

export const getPropertyQuery = async body => {
  try {
    const queryString = getPropertyHelper(body);
    const data = await db.queryAsync(queryString);
    success('signUpQuery - successfully fetched data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('signUpQuery - error= ', err);
    throw new Error(err);
  }
};