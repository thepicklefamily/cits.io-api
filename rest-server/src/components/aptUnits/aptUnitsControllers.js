import db from '../../config/database';
import { success, error } from '../../lib/log';

import { addAptUnitQuery, getAptUnitByIDQuery } from './aptUnitsQueries';

export const addAptUnitController = async (req, res) => {
  try {
    const { rows } = await addAptUnitQuery(req.body);
    const { id, unit } = rows[0];
    success('addAptUnitController - successfully retrieved data', JSON.stringify(rows[0]));
    return res
      .status(201)
      .send(rows[0]);
  } catch (err) {
    error('addAptUnitController - error= ', err);
    return res.status(400).send(err); 
  }
};

export const getAptUnitByIDController = async (req, res) => {
  console.log('HELLO FROM ID ', req.query);
  try {
    const { rows } = await getAptUnitByIDQuery(req.query);
    success('getAptUnitByIDController - successfully retrieved data', JSON.stringify(rows[0]));
    return res
      .status(200)
      .send(rows[0]);
  } catch (err) {
    error('getAptUnitByIDController - error= ', err);
    return res.status(400).send(err); 
  }
};