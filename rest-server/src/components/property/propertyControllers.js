import db from '../../config/database';
import { success, error } from '../../lib/log';

import { addPropertyQuery } from './propertyQueries';

export const addPropertyController = async (req, res) => {
  try {
    console.log(req.body)
    const { rows } = await addPropertyQuery(req.body);
    const { secret_key, name, address } = rows[0];
    success('addPropertyController - successfully retrieved data', JSON.stringify(rows[0]));
    return res
      .status(200)
      .send(rows[0]);
  } catch (err) {
    error('addPropertyController - error= ', err);
    throw new Error(JSON.parse(err));
  }
};