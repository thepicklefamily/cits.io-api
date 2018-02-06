import { addUsersPropertiesQuery, getUsersPropertiesQuery } from './usersPropertiesQueries';
import { success, error } from '../../lib/log';

export const addUsersPropertiesController = async (req, res) => {
  try {
    const { rows } = await addUsersPropertiesQuery(req.body);
    success('usersPropertiesControler - successfully retrieved data', JSON.stringify(rows));
    return res
      .status(201)
      .send(rows[0]);
  } catch (err) {
    error('usersPropertiesController - error= ', err);
    return res.status(400).send(err);
  }
};

export const getUsersPropertiesController = async (req, res) => {
  try {
    const { rows } = await getUsersPropertiesQuery(req.query);
    success('loginController - successfully retrieved data ', JSON.stringify(rows));
    return res
      .status(200)
      .send(rows);
  } catch (err) {
    error('loginController - error= ', err);
    return res.status(400).send(err); 
  }
};

