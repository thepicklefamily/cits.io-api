import { 
  addUsersPropertiesAptUnitsQuery, 
  getUsersPropertiesAptUnitsQuery,
  getUsersPropertiesManagersQuery,
  editUsersPropertiesAptUnitsQuery,
  deleteUsersPropertiesAptUnitsQuery
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

export const editUsersPropertiesAptUnitsController = async (req, res) => {
  try {
    const { rows } = await editUsersPropertiesAptUnitsQuery(req.body);
    success('editUsersPropertiesAptUnits controller success ', JSON.stringify(rows));
    return res.status(200).send(rows);
  } catch (err) {
    error('editUsersPropertiesAptUnits controller error ', err);
    return res.status(400).send(err);
  }
}

export const deleteUsersPropertiesAptUnitsController = async (req, res) => {
  try {
    const { rows } = await deleteUsersPropertiesAptUnitsQuery(req.query);
    success('deleteUsersPropertiesAptUnitsController success ', JSON.stringify(rows));
    return res.status(200).send(rows);
  } catch (err) {
    error('deleteUsersPropertiesAptUnitsController error ', err);
    return res.status(400).send(err);
  }
}