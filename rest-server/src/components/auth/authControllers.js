import db from '../../config/database';
import { signUpQuery, loginQuery } from './authQueries';
import { success, error } from '../../lib/log';
import { generateToken } from '../../middleware/auth/jwt';
import { hashPassword, comparePasswords } from '../../middleware/auth/bcrypt';

export const signUpController = async (req, res) => {
  try {
    console.log(req.body)
    req.body.password = await hashPassword(req.body.password);
    const { rows } = await signUpQuery(req.body);
    const { id, username } = rows[0];
    success('signUpControler - successfully retrieved data', JSON.stringify(rows[0]));
    const token = await generateToken(id, username);
    rows[0].token = token;
    return res
      .status(200)
      .append('authorization', JSON.stringify(token))
      .send(rows[0]);
  } catch (err) {
    error('signUpController - error= ', err);
    throw new Error(err);
  }
};

export const loginController = async (req, res) => {
  try {
    const { rows } = await loginQuery(req.body);
    delete rows[0].password;
    const { id, username } = rows[0]; // email or username? ask avi, check jwt
    success('loginController - successfully retrieved data ', JSON.stringify(rows[0]));
    const token = await generateToken(id, username); // email or username? ask avi, check jwt
    rows[0].token = token;
    return res.status(200).append('authorization', JSON.stringify(token)).send(rows[0]);
  } catch (err) {
    error('loginController - error= ', err);
    throw new Error(err);
  }
};

