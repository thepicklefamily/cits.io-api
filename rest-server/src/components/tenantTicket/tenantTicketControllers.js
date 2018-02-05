import { success, error } from '../../lib/log';
import { getTicketsByTenantIDQuery } from './tenantTicketQueries';

export const getTicketsByTenantIDController = async (req, res) => {
  try {
    const { rows } = await getTicketsByTenantIDQuery(req.params);
    success('getTicketsByTenantIDController = successfully retrieved data', JSON.stringify(rows));
    return res.status(201).send(rows);
  } catch (err) {
    error('getTicketsByTenantIDController - error= ', err);
    return res.status(400).send(err);
  }
};