import { success, failure } from '../../lib/log'; 
import {getTicketsByPropIDQuery } from './propTicketQueries';

export const getTicketsByPropIDController = async (req, res) => {
  try {
    const { rows } = await getTicketsByPropIDQuery(req.params);
    success('getTicketsByPropIDController successfully retrieved data', JSON.stringify(rows));
    return res.status(201).send(rows);
  } catch (err) {
    error('getTicketsByPropIDController - error = ', err);
    return res.status(401).send(err);
  }
};