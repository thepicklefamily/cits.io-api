import db from '../../config/database';
import { success, error } from '../../lib/log';

import { addAptUnitHelper, getAptUnitByIDHelper } from './aptUnitsSQLHelpers';

export const addAptUnitQuery = async body => {
  try {
    const queryString = addAptUnitHelper(body);
    const data = await db.queryAsync(queryString);
    success('addAptUnitQuery - successfully inserted data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('addAptUnitQuery - error= ', err);
    throw new Error(err);
  }
};

export const getAptUnitByIDQuery = async body => {
  try {
    const queryString = getAptUnitByIDHelper(body);
    const data = await db.queryAsync(queryString);
    success('getAptUnitByIDQuery - successfully fetched data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('getAptUnitByIDQuery - error= ', err);
    throw new Error(err);
  }
};