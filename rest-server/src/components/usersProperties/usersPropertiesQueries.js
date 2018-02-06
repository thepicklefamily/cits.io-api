import db from '../../config/database';
import { addUsersPropertiesHelper, getUsersPropertiesHelper } from "./usersPropertiesSQLHelpers";
import { success, error } from "../../lib/log";

export const addUsersPropertiesQuery = async body => {
  try {
    const queryString = addUsersPropertiesHelper(body);
    const data = await db.queryAsync(queryString);
    success('addUsersPropertiesQuery - successfully inserted data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('addUsersPropertiesQuery - error= ', err);
  }
};
export const getUsersPropertiesQuery = async body => {
  try {
    const queryString = getUsersPropertiesHelper(body);
    const data = await db.queryAsync(queryString);
    success('getUsersPropertiesQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('getUsersPropertiesQuery - error= ', err);
  }
};
