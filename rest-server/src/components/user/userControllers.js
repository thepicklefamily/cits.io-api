import { success, error } from '../../lib/log';
import { getUserDataByUserIDQuery, editUsersDataQuery } from './userQueries';

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

export const editUserDataController = async (req, res) => {
  console.log('YO WHAT IS YO BODY', req.body);
  try {
    const { rows } = await editUsersDataQuery(req.body);
    success('editUserDataController - successfully retrieved data', JSON.stringify(rows[0]));
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('editUserDataController - error= ', err);
    return res.status(400).send(err);
  }
};