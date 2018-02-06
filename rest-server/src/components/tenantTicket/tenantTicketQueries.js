import db from '../../config/database';
import { success, error } from '../../lib/log';
import { getTicketsByTenantIDHelper } from './tenantTicketSQLHelpers';

export const getTicketsByTenantIDQuery = async params => {
  try {
    const queryString = getTicketsByTenantIDHelper(params);
    const data = await db.queryAsync(queryString);
    success('getTicketsByTenantIDQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('getTicketsByTenantIDQuery - error= ', err);
  }
};
