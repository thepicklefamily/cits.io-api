import db from '../../config/database';
import { success, error } from '../../lib/log';

import { addPropertyQuery, getPropertyByNameQuery, getPropertyByIDQuery } from './propertyQueries';

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
  }
};

export const getPropertyByNameController = async (req, res) => {
  try {
    const { rows } = await getPropertyByNameQuery(req.query);
    success('getPropertyByNameController - successfully retrieved data', JSON.stringify(rows));
    return res
      .status(200)
      .send(rows);
  } catch (err) {
    error('getPropertyByNameController - error= ', err);
  }
};

export const getPropertyByIDController = async (req, res) => {
  console.log('HELLO FROM ID ', req.query);
  try {
    const { rows } = await getPropertyByIDQuery(req.query);
    success('getPropertyByIDController - successfully retrieved data', JSON.stringify(rows));
    return res
      .status(200)
      .send(rows);
  } catch (err) {
    error('getPropertyByIDController - error= ', err);
  }
};