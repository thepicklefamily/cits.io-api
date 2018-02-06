import { success, error } from '../../lib/log';
import { editTicketQuery, deleteTicketQuery } from './userTicketQueries';

export const editTicketController = async (req, res) => {
  try {
    const { rows } = await editTicketQuery(req.body);
    success('editTicketController - successfully edited data', JSON.stringify(rows[0]));
    return res.status(201).send(rows[0]);
  } catch (err) {
    error('editTicketController - error= ', err);
    return res.status(400).send(err);
  }
};

export const deleteTicketController = async (req, res) => {
  try {
    const { rows } = await deleteTicketQuery(req.params);
    success('deleteTicketController - successfully deleted data', JSON.stringify(rows[0]));
    return res.status(201).send(rows[0]);
  } catch (err) {
    error('deleteTicketController - error= ', err);
    return res.status(400).send(err);
  }
};