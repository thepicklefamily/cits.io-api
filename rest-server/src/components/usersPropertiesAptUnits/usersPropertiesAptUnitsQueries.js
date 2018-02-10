import db from '../../config/database';
import { 
  addUsersPropertiesAptUnitsHelper, 
  getUsersPropertiesAptUnitsHelper,
  getManagerEmailsByPropertyHelper,
  editUsersPropertiesAptUnitsHelper
} from "./usersPropertiesAptUnitsSQLHelpers";
import { success, error } from "../../lib/log";

export const addUsersPropertiesAptUnitsQuery = async body => {
  try {
    const queryString = addUsersPropertiesAptUnitsHelper(body);
    const data = await db.queryAsync(queryString);
    success('addUsersPropertiesAptUnitsQuery - successfully inserted data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('addUsersPropertiesAptUnitsQuery - error= ', err);
  }
};

export const getUsersPropertiesAptUnitsQuery = async body => {
  try {
    const queryString = getUsersPropertiesAptUnitsHelper(body);
    const data = await db.queryAsync(queryString);
    success('getUsersPropertiesAptUnitsQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('getUsersPropertiesAptUnitsQuery - error= ', err);
  }
};

export const getUsersPropertiesManagersQuery = async body => {
  try {
    const queryString = getManagerEmailsByPropertyHelper(body);
    const data = await db.queryAsync(queryString);
    success('getUsersPropertiesManagersQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('getUsersPropertiesManagersQuery - error= ', err);
  }
};

export const editUsersPropertiesAptUnitsQuery = async body => {
  try {
    const queryString = editUsersPropertiesAptUnitsHelper(body);
    const data = await db.queryAsync(queryString);
    success('editUsersPropertiesAptUnitsQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('editUsersPropertiesAptUnitsQuery - error= ', err);
  }
};