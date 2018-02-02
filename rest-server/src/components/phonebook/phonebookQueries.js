import db from '../../config/database';

import {
  addPropertyPhonebookHelper,
  fetchPropertyPhonebookHelper,
  updatePropertyPhonebookHelper,
  deletePropertyPhonebookHelper
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
};

export const updatePropertyPhonebookQuery = async (body) => {
  try {
    const queryString = updatePropertyPhonebookHelper(body);
    const data = await db.queryAsync(queryString);
    success('updatePropertyPhonebookQuery - successfully updated property phonebook ', data);
    return data;
  } catch (err) {
    error('updatePropertyPhonebookQuery - error= ', err);
  }
};

export const deletePropertyPhonebookQuery = async (params) => {
  try {
    const queryString = deletePropertyPhonebookHelper(params);
    const data = await db.queryAsync(queryString);
    success('deletePropertyPhonebookQuery - successfully deleted property phonebook entry ', data);
    return data;
  } catch (err) {
    error('deletePropertyPhonebookQuery - error= ', err);
  }
};