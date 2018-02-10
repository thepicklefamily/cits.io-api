import db from '../../config/database';
import { success, error } from '../../lib/log';

import { addPropertyHelper, getPropertyByNameHelper, getPropertyByIDHelper, editPropertyHelper, editSecretHelper } from './propertySQLHelpers';

export const addPropertyQuery = async body => {
  try {
    const queryString = addPropertyHelper(body);
    const data = await db.queryAsync(queryString);
    success('addPropertyQuery - successfully inserted data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('addPropertyQuery - error= ', err);
  }
};

export const getPropertyByNameQuery = async body => {
  try {
    const queryString = getPropertyByNameHelper(body);
    const data = await db.queryAsync(queryString);
    success('getPropertyByNameQuery - successfully fetched data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('getPropertyByNameQuery - error= ', err);
  }
};

export const getPropertyByIDQuery = async body => {
  try {
    const queryString = getPropertyByIDHelper(body);
    const data = await db.queryAsync(queryString);
    success('getPropertyByIDQuery - successfully fetched data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('getPropertyByIDQuery - error= ', err);
  }
};

export const editPropertyQuery = async body => {
  try {
    const queryString = editPropertyHelper(body);
    const data = await db.queryAsync(queryString);
    success('editPropertyQuery - successfully fetched data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('editPropertyQuery - error= ', err);
  }
};

export const editSecretQuery = async body => {
  try {
    const queryString = editSecretHelper(body);
    const data = await db.queryAsync(queryString);
    success('editSecretQuery - successfully fetched data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('editSecretQuery - error= ', err);
  }
};