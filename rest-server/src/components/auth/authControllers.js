import db from '../../config/database';
import { signUpQuery, loginQuery } from './authQueries';
import { success, error } from '../../lib/log';
import { generateToken } from '../../middleware/auth/jwt';
import { hashPassword, comparePasswords } from '../../middleware/auth/bcrypt';

export const signUpController = async (req, res) => {
  
};

export const loginController = async (req, res) => {
  try {
    const { rows } = await loginQuery(req.body);
    delete rows[0].password;
    const { id, email } = rows[0]; // email or username? ask avi, check jwt
    success('loginController - successfully retrieved data ', rows[0]);
    const token = await generateToken(id, email); // email or username? ask avi, check jwt
    rows[0].token = token;
    return res.status(200).append('authorization', JSON.stringify(token)).send(rows[0]);
  } catch (err) {
    eror('loginController - error= ', err);
    throw new Error(err);
  }
};

