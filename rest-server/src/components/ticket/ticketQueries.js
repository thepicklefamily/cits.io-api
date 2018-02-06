import db from '../../config/database';
import { success, error } from '../../lib/log';

import { addTicketHelper } from './ticketSQLHelpers';

export const addTicketQuery = async body => {
  try {
    const queryString = addTicketHelper(body);
    const data = await db.queryAsync(queryString);
    success('addTicketQuery - successfully inserted data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('addTicketQuery - error= ', err);
  }
};