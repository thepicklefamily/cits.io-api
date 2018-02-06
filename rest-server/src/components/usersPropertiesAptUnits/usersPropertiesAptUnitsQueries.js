import db from '../../config/database';
import { addUsersPropertiesAptUnitsHelper, getUsersPropertiesAptUnitsHelper } from "./usersPropertiesAptUnitsSQLHelpers";
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
