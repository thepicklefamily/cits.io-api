import { success, error } from '../../lib/log';
import { addTicketQuery } from './ticketQueries';

export const addTicketController = async (req, res) => {
  try {
    const { rows } = await addTicketQuery(req.body);
    success('addTicketController - successfully added data', JSON.stringify(rows[0]));
    return res.status(201).send(rows[0]);
  } catch (err) {
    error('addTicketController - error= ', err);
    return res.status(400).send(err);
  }
};
