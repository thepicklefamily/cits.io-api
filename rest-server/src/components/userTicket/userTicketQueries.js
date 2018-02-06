import db from '../../config/database';
import { success, error } from '../../lib/log';

import { editTicketHelper, deleteTicketHelper } from './userTicketSQLHelpers';

export const editTicketQuery = async body => {
  try {
    const queryString = editTicketHelper(body);
    const data = await db.queryAsync(queryString);
    success('editTicketQuery - successfully edited data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('editTicketQuery - error= ', err);
  }
};

export const deleteTicketQuery = async params => {
  try {
    const queryString = deleteTicketHelper(params);
    const data = await db.queryAsync(queryString);
    success('deleteTicketQuery - successfully deleted data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('deleteTicketQuery - error= ', err);
  }
};