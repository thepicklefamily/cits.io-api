import db from '../../config/database';
import { success, error } from '../../lib/log';
import { getTicketsByPropIDHelper } from './propTicketSQLHelpers';

export const getTicketsByPropIDQuery = async (params) => {
  try {
    const queryString = getTicketsByPropIDHelper(params);
    const data = await db.queryAsync(queryString);
    success('getTicketsByPropIDQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('getTicketsByPropIDQuery - error = ', err);
  }
}