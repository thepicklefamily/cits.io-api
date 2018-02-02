import db from '../../config/database';

import {
  addPropertyPhonebookHelper,
  fetchPropertyPhonebookHelper
} from './phonebookSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const addPropertyPhonebookQuery = async (body) => {
  try {
    const queryString = addPropertyPhonebookHelper(body);
    const data = await db.queryAsync(queryString);
    success('addPropertyPhonebookQuery - successfully added property phonebook ', data);
    return data;
  } catch (err) {
    error('addPropertyPhonebookQuery - error= ', err);
  }
};

export const fetchPropertyPhonebookQuery = async (params) => {
  try {
    const queryString = fetchPropertyPhonebookHelper(params);
    const data = await db.queryAsync(queryString);
    success('fetchPropertyPhonebookQuery - successfully fetched property phonebook ', data);
    return data;
  } catch (err) {
    error('fetchPropertyPhonebookQuery - error= ', err);
  }
}