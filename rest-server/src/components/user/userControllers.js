import { success, error } from '../../lib/log';
import { hashPassword, comparePasswords } from '../../middleware/auth/bcrypt';
import { getUserDataByUserIDQuery, editUserDataQuery, editPasswordQuery } from './userQueries';

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
  try {
    const { rows } = await editUserDataQuery(req.body);
    success('editUserDataController - successfully retrieved data', JSON.stringify(rows[0]));
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('editUserDataController - error= ', err);
    return res.status(400).send(err);
  }
};

export const editPasswordController = async (req, res) => {
  try {
    // checks to see if input password matches current password
    const passwordsMatch = await comparePasswords(req.body.password, req.body.actualPassword);

    // if passwords match, hashes new password and sends it to the query
    if (passwordsMatch) {
      req.body.new_password = await hashPassword(req.body.new_password);
      console.log('Password matched, new req body: ', req.body);
      const { rows } = await editPasswordQuery(req.body);
      success('editPasswordController - successfully retrieved data', JSON.stringify(rows[0]));
      return res.status(200).send(rows[0]);
    } 
      else 
    {
      console.log('FAILURE OF PASSWORDS');
      res.status(400).send('Passwords Did Not Match');
    }
  } catch (err) {
    error('editPasswordController - error= ', err);
    return res.status(400).send(err);
  }
};
