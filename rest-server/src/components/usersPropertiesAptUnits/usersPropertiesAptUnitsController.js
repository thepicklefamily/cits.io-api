import { 
  addUsersPropertiesAptUnitsQuery, 
  getUsersPropertiesAptUnitsQuery,
  getUsersPropertiesManagersQuery 
} from './usersPropertiesAptUnitsQueries';
import { success, error } from '../../lib/log';

export const addUsersPropertiesAptUnitsController = async (req, res) => {
  try {
    const { rows } = await addUsersPropertiesAptUnitsQuery(req.body);
    success('usersPropertiesAptUnitsControler - successfully retrieved data', JSON.stringify(rows));
    return res
      .status(201)
      .send(rows[0]);
  } catch (err) {
    error('usersPropertiesAptUnitsController - error= ', err);
    return res.status(400).send(err);
  }
};

export const getUsersPropertiesAptUnitsController = async (req, res) => {
  try {
    const { rows } = await getUsersPropertiesAptUnitsQuery(req.query);
    success('getUsersPropsAptUnits controller ', JSON.stringify(rows));
    return res
      .status(200)
      .send(rows);
  } catch (err) {
    error('loginController - error= ', err);
    return res.status(400).send(err); 
  }
};

export const getUsersPropertiesManagersController = async (req, res) => {
  try {
    const { rows } = await getUsersPropertiesManagersQuery(req.query);
    success('get UPManagers controller success ', JSON.stringify(rows));
    return res.status(200).send(rows);
  } catch (err) {
    error('get UPManagers controller error ', err);
    return res.status(400).send(err);
  }
}

