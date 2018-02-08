import { success, error } from '../../lib/log';
import { getUserDataByUserIDQuery } from './userQueries';

export const getUserDataByUserIDController = async (req, res) => {
  try {
    const { rows } = await getUserDataByUserIDQuery(req.params);
    success('getUserDataByUserIDController - successfully retrieved data', JSON.stringify(rows));
    return res.status(200).send(rows);
  } catch (err) {
    error('getUserDataByUserIDController - error= ', err);
    return res.status(400).send(err);
  }
};