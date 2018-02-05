import db from '../../config/database';
import { success, error } from '../../lib/log';

import { addTicketQuery } from './ticketQueries';

export const addTicketController = async (req, res) => {
  try {
    const { rows } = await addTicketQuery(req.body);
    const { secret_key, name, address } = rows[0];
    success('addTicketController - successfully retrieved data', JSON.stringify(rows[0]));
    return res
      .status(201)
      .send(rows[0]);
  } catch (err) {
    error('addTicketController - error= ', err);
    return res.status(400).send(err); //Should let client know if there is an error, not throw an error
  }
};
