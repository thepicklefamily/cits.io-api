import db from '../../config/database';
import { success, error } from '../../lib/log';

import { addPropertyQuery, getPropertyQuery } from './propertyQueries';

export const addPropertyController = async (req, res) => {
  try {
    const { rows } = await addPropertyQuery(req.body);
    const { secret_key, name, address } = rows[0];
    success('addPropertyController - successfully retrieved data', JSON.stringify(rows[0]));
    return res
      .status(201)
      .send(rows[0]);
  } catch (err) {
    error('addPropertyController - error= ', err);
    throw new Error(JSON.parse(err));
  }
};

export const getPropertyController = async (req, res) => {
  try {
    const { rows } = await getPropertyQuery(req.query);
    success('getPropertyController - successfully retrieved data', JSON.stringify(rows[0]));
    return res
      .status(200)
      .send(rows[0]);
  } catch (err) {
    error('getPropertyController - error= ', err);
    throw new Error(JSON.parse(err));
  }
};